#!/bin/zsh
# generate-video.sh — OpenRouter Video Generation Skill
# Adapted for Pi Agent (zsh + macOS)
# Supports: text prompts, image URLs, local image paths, reference images/videos
#
# Usage:
#   generate-video.sh --prompt "text" [options]
#
# Options:
#   --prompt <text>            Video description prompt
#   --model <model-id>         Model ID (default: google/veo-3.1-lite)
#   --duration <seconds>       Duration in seconds (default: 4)
#   --resolution <res>         480p|720p|1080p|4K (default: 1080p)
#   --aspect-ratio <ratio>     16:9|9:16|1:1|... (default: 16:9)
#   --output <file>            Output path (default: ./video_<ts>.mp4)
#   --image-url <path|url>     Image file path or URL for first frame
#   --last-frame-url <path|url> Image file path or URL for last frame
#   --reference-url <path|url>   Reference image file path or URL
#   --reference-video-url <path|url> Reference video file path or URL
#   --audio <path|url>         Audio file path or URL for audio track
#   --generate-audio           Request model-generated audio
#   --help                     Show help

set -euo pipefail

SCRIPT_NAME="generate-video.sh"
API_BASE="https://openrouter.ai/api/v1"

# Defaults
MODEL_ID="google/veo-3.1-lite"
DURATION=4
RESOLUTION="1080p"
ASPECT_RATIO="16:9"
OUTPUT_FILE=""
PROMPT=""
IMAGE_URL=""
LAST_FRAME_URL=""
REFERENCE_URLS=()
REFERENCE_VIDEO_URL=""
AUDIO_FILE=""
GENERATE_AUDIO=""

# Colors
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; BLUE='\033[0;34m'; NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1" >&2; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }

# Convert local file to base64 data URI, or pass through if already a URL
to_data_uri() {
  local input="$1"
  local mime=""
  
  if [[ "$input" =~ ^https?:// ]]; then
    echo "$input"
    return 0
  fi
  
  if [[ ! -f "$input" ]]; then
    log_error "File not found: $input"
    return 1
  fi
  
  local ext="${input##*.}"
  case "$ext" in
    png) mime="image/png" ;;
    jpg|jpeg) mime="image/jpeg" ;;
    gif) mime="image/gif" ;;
    webp) mime="image/webp" ;;
    mp4) mime="video/mp4" ;;
    mp3|m4a|wav) mime="audio/mpeg" ;;
    *) mime="application/octet-stream" ;;
  esac
  
  local b64
  b64=$(base64 -i "$input" | tr -d '\n')
  echo "data:${mime};base64,${b64}"
}

print_help() {
  cat << EOF
$SCRIPT_NAME — Video generation via OpenRouter's async API.

Usage:
  $SCRIPT_NAME [OPTIONS]

Options:
  --prompt <text>            Video description (required if no image/reference)
  --model <model-id>         Model (default: $MODEL_ID)
  --duration <seconds>     Duration (1-15 for free, 1-30 paid)
  --resolution <res>         480p|720p|1080p|4K
  --aspect-ratio <ratio>     16:9|9:16|1:1|4:3|3:4|3:2|2:3
  --image-url <path|url>     First frame (local file or URL)
  --last-frame-url <path|url> Last frame image
  --reference-url <path|url> Reference image/video for style
  --reference-video-url <path|url> Reference video for style
  --audio <path|url>         Audio file or URL
  --generate-audio           Request model-generated audio
  --output <file>            Output filename
  --help                     Show help

Local file support: Any --image-url, --reference-url, etc. can be a local file path
(e.g., ~/Pictures/frame.jpg or /Users/me/image.png). Files are auto-converted to
base64 data URIs for the OpenRouter API.

Examples:
  $SCRIPT_NAME --prompt "A futuristic city skyline" --model x-ai/grok-imagine-video:free --duration 4 --resolution 720p
  $SCRIPT_NAME --image-url ~/desktop/frame.jpg --prompt "Animate this"
  $SCRIPT_NAME --reference-url ~/pictures/style.pdf --prompt "Cinematic look"
EOF
}

# API calls
fetch_models() {
  curl -sS "$API_BASE/videos/models" 2>/dev/null | jq -r '.data[]? | select(.id == "'"$MODEL_ID"'")'
}

validate_model() {
  local info
  info=$(fetch_models)
  if [[ -z "$info" || "$info" == "null" ]]; then
    log_warn "Model '$MODEL_ID' not found — continuing"
    return 0
  fi
  
  local dur res ratio
  dur=$(echo "$info" | jq -r '.supported_durations[]?' | tr '\n' ',')
  res=$(echo "$info" | jq -r '.supported_resolutions[]?' | tr '\n' ',')
  ratio=$(echo "$info" | jq -r '.supported_aspect_ratios[]?' | tr '\n' ',')
  
  if [[ -n "$dur" ]] && [[ ! ",$dur," == *",$DURATION,"* ]]; then
    log_error "Duration $DURATION not supported (available: $dur)"
    exit 2
  fi
  if [[ -n "$res" ]] && [[ ! ",$res," == *",$RESOLUTION,"* ]]; then
    log_error "Resolution $RESOLUTION not supported (available: $res)"
    exit 2
  fi
  if [[ -n "$ratio" ]] && [[ ! ",$ratio," == *",$ASPECT_RATIO,"* ]]; then
    log_error "Aspect ratio $ASPECT_RATIO not supported (available: $ratio)"
    exit 2
  fi
  
  log_info "Model validation passed for $MODEL_ID"
}

build_payload() {
  # Start with base payload
  local payload
  payload=$(jq -n \
    --arg model "$MODEL_ID" \
    --arg prompt "${PROMPT:-}" \
    '{model: $model, prompt: $prompt}' \
  | jq --argjson duration "$DURATION" '. + {duration: $duration}' \
    --arg resolution "$RESOLUTION" '. + {resolution: $resolution}' \
    --arg aspect_ratio "$ASPECT_RATIO" '. + {aspect_ratio: $aspect_ratio}')
  
  [[ -n "$GENERATE_AUDIO" ]] && payload=$(echo "$payload" | jq '. + {generate_audio: true}')
  
  # Handle image frames
  local frames="[]"
  [[ -n "$IMAGE_URL" ]] && {
    local img=$(to_data_uri "$IMAGE_URL") || exit 1
    frames=$(echo "$frames" | jq --arg u "$img" '. + [{type:"image_url", image_url:{url:$u}, frame_type:"first_frame"}]')
  }
  [[ -n "$LAST_FRAME_URL" ]] && {
    local img=$(to_data_uri "$LAST_FRAME_URL") || exit 1
    frames=$(echo "$frames" | jq --arg u "$img" '. + [{type:"image_url", image_url:{url:$u}, frame_type:"last_frame"}]')
  }
  [[ "$frames" != "[]" ]] && payload=$(echo "$payload" | jq --argjson f "$frames" '. + {frame_images: $f}')
  
  # Handle reference images/videos
  local refs="[]"
  for ref in "${REFERENCE_URLS[@]}"; do
    [[ -z "$ref" ]] && continue
    local ref_data=$(to_data_uri "$ref") || exit 1
    refs=$(echo "$refs" | jq --arg u "$ref_data" '. + [{type:"image_url", image_url:{url:$u}}]')
  done
  [[ "$refs" != "[]" ]] && payload=$(echo "$payload" | jq --argjson r "$refs" '. + {input_references: $r}')
  [[ -n "$REFERENCE_VIDEO_URL" ]] && {
    local ref=$(to_data_uri "$REFERENCE_VIDEO_URL") || exit 1
    refs=$(echo "$refs" | jq --arg u "$ref" '. + [{type:"video_url", video_url:{url:$u}}]')
  }
  [[ "$refs" != "[]" ]] && payload=$(echo "$payload" | jq --argjson r "$refs" '. + {input_references: $r}')
  
  # Handle audio
  [[ -n "$AUDIO_FILE" ]] && {
    local audio=$(to_data_uri "$AUDIO_FILE") || exit 1
    payload=$(echo "$payload" | jq --arg a "$audio" '. + {audio_url: $a}')
  }
  
  echo "$payload"
}

run_flow() {
  local payload submit poll_url job_id st resp content_url
  
  log_info "Submitting job (model=$MODEL_ID, $DURATION s, $RESOLUTION)..."
  submit=$(curl -sS -X POST "$API_BASE/videos" \
    -H "Authorization: Bearer $OPENROUTER_API_KEY" \
    -H "Content-Type: application/json" \
    -d "$payload")
  
  job_id=$(echo "$submit" | jq -r '.id // empty')
  poll_url=$(echo "$submit" | jq -r '.polling_url // empty')
  
  [[ -z "$job_id" || -z "$poll_url" ]] && { log_error "Failed to submit"; echo "$submit"; exit 3; }
  
  log_info "Job submitted: $job_id"
  log_info "Generation is async — expect 30s–2min."
  
  while :; do
    sleep 30
    resp=$(curl -sS "$poll_url" -H "Authorization: Bearer $OPENROUTER_API_KEY")
    st=$(echo "$resp" | jq -r '.status')
    log_info "Status: $st"
    
    case "$st" in
      completed) break ;;
      failed|cancelled|expired)
        log_error "Generation $st: $(echo "$resp" | jq -r '.error')"
        exit 3 ;;
    esac
  done
  
  content_url=$(echo "$resp" | jq -r '.video_content_url // .unsigned_urls[0] // .url')
  content_url="$API_BASE/videos/$job_id/content?index=0"
  
  [[ -z "$OUTPUT_FILE" ]] && OUTPUT_FILE="video_$(date +%Y%m%d-%H%M%S).mp4"
  
  mkdir -p "${OUTPUT_FILE%/*}" 2>/dev/null || true
  log_info "Downloading to $OUTPUT_FILE..."
  curl -sS -L "$content_url" \
    -H "Authorization: Bearer $OPENROUTER_API_KEY" \
    --output "$OUTPUT_FILE"
  
  log_success "Video saved: $(pwd)/$OUTPUT_FILE"
  echo "$resp" | jq --arg out "$OUTPUT_FILE" '{job_id: .id, video_saved: $out}' 2>/dev/null || true
}

# Parse args
while [[ $# -gt 0 ]]; do
  case "$1" in
    --prompt) PROMPT="$2"; shift 2 ;;
    --model) MODEL_ID="$2"; shift 2 ;;
    --duration) DURATION="$2"; shift 2 ;;
    --resolution) RESOLUTION="$2"; shift 2 ;;
    --aspect-ratio) ASPECT_RATIO="$2"; shift 2 ;;
    --output) OUTPUT_FILE="$2"; shift 2 ;;
    --image-url) IMAGE_URL="$2"; shift 2 ;;
    --last-frame-url) LAST_FRAME_URL="$2"; shift 2 ;;
    --reference-url) REFERENCE_URLS+=("$2"); shift 2 ;;
    --reference-video-url) REFERENCE_VIDEO_URL="$2"; shift 2 ;;
    --audio) AUDIO_FILE="$2"; shift 2 ;;
    --generate-audio) GENERATE_AUDIO=1; shift ;;
    --help) print_help; exit 0 ;;
    *) log_error "Unknown: $1"; print_help; exit 2 ;;
  esac
done

[[ -z "$PROMPT" && -z "$IMAGE_URL" && -z "$LAST_FRAME_URL" && -z "$REFERENCE_VIDEO_URL" ]] && { log_error "Need --prompt or image/reference"; print_help; exit 2; }

command -v curl >/dev/null || { log_error "curl missing"; exit 2; }
command -v jq >/dev/null || { log_error "jq missing"; exit 2; }
[[ -z "${OPENROUTER_API_KEY:-}" ]] && { log_error "OPENROUTER_API_KEY not set"; exit 1; }

validate_model
run_flow