---
name: openrouter-video
description: Generate videos from text prompts (and optional reference or frame images) using OpenRouter's asynchronous video generation API. Use when the user asks to create, generate, or make a video or animation from a description, animate an existing image, or turn a prompt into a short video clip.
---

# OpenRouter Video

Generate videos via OpenRouter's async `POST /api/v1/videos` using `curl` + `jq`. Requires `OPENROUTER_API_KEY` (get one at https://openrouter.ai/keys). If unset, stop and ask.

## The three steps

Video generation is async: submit → poll → download. A single request can't return the video because generation takes 30s–a few minutes. Tell the user the job was submitted so they know the delay is expected.

1. `POST /api/v1/videos` → `{ id, polling_url, status: "pending" }`
2. `GET <polling_url>` every ~30s until `status` is `completed` (terminal failures: `failed`, `cancelled`, `expired` — surface the `error` field verbatim)
3. `GET /api/v1/videos/{id}/content?index=0` **with the auth header** → MP4 bytes

## Pick parameters from the models endpoint, don't guess

`resolution`, `aspect_ratio`, `duration`, and `frame_images[].frame_type` are per-model. Before the first submit for a new model (or whenever the user asks for something specific), fetch the model's capabilities and only send values from the returned sets:

```bash
curl -sS https://openrouter.ai/api/v1/videos/models \
  | jq '.data[] | select(.id == "MODEL_ID")'
```

Fields on each model worth knowing: `supported_resolutions`, `supported_aspect_ratios`, `supported_sizes`, `supported_durations` (often discrete like `[4,6,8]`, not a range), `supported_frame_images` (which `frame_type` values are accepted), `generate_audio` and `seed` (capability bools), `pricing_skus`, and `allowed_passthrough_parameters`. An out-of-set value returns a 400, so validate client-side.

## Full workflow (drop-in)

```bash
#!/usr/bin/env bash
set -euo pipefail

PROMPT="a golden retriever playing fetch on a sunny beach"
MODEL="google/veo-3.1"
OUTPUT="video-$(date +%Y%m%d-%H%M%S).mp4"

# Build payload — extend with resolution/aspect_ratio/duration/etc. as needed.
payload=$(jq -n --arg model "$MODEL" --arg prompt "$PROMPT" \
  '{model: $model, prompt: $prompt}')

submit=$(curl -sS -X POST https://openrouter.ai/api/v1/videos \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$payload")

poll_url=$(echo "$submit" | jq -r '.polling_url')
echo "Submitted $(echo "$submit" | jq -r '.id')" >&2

while :; do
  sleep 30
  resp=$(curl -sS "$poll_url" -H "Authorization: Bearer $OPENROUTER_API_KEY")
  # Avoid the name `status` — zsh treats it as read-only.
  st=$(echo "$resp" | jq -r '.status')
  echo "Status: $st" >&2
  case "$st" in
    completed) break ;;
    failed|cancelled|expired)
      echo "Generation $st: $(echo "$resp" | jq -r '.error // "unknown"')" >&2
      exit 1 ;;
  esac
done

curl -sS -L "$(echo "$resp" | jq -r '.unsigned_urls[0]')" \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  --output "$OUTPUT"

echo "$resp" | jq --arg out "$(realpath "$OUTPUT")" \
  '{job_id: .id, generation_id, video_saved: $out, usage}'
```

## Parameters

Required: `model`, `prompt`. Common optional fields:

- `duration` (int) — must be one of the model's `supported_durations`.
- `resolution` (string) / `aspect_ratio` (string) / `size` (string, `"WxH"`) — `size` is interchangeable with resolution + aspect_ratio.
- `generate_audio` (bool) — only meaningful if the model's `generate_audio` capability is true.
- `seed` (int) — honored only if the model's `seed` capability is true.
- `callback_url` (HTTPS) — webhook instead of polling.
- `frame_images[]` — image-to-video; each entry is `{ type: "image_url", image_url: { url }, frame_type: "first_frame" | "last_frame" }`.
- `input_references[]` — reference-to-video (style guidance); same entry shape, no `frame_type`. If both arrays are present, `frame_images` wins.
- `provider.options.<slug>.parameters.<key>` — provider passthrough, see below.

Image `url` can be a public `https://` URL or a local-file data URL: `MIME=image/png; B64=$(base64 < file.png | tr -d '\n'); url="data:${MIME};base64,${B64}"`.

## Provider passthrough

Provider-specific params go under `provider.options.<slug>.parameters`. The allowed keys for a given model are listed (flat) in `allowed_passthrough_parameters` on the models endpoint — but the meaning, value range, and required combinations come from the *upstream provider's* API docs (Google Vertex, Alibaba Dashscope, Kwai, ByteDance Volc Engine, MiniMax, OpenAI, etc.). Read the upstream docs before using an unfamiliar key; casing conventions differ between providers (Google/OpenAI use camelCase, most others use snake_case).

Example:

```json
{
  "model": "google/veo-3.1",
  "prompt": "a time-lapse of a flower blooming",
  "provider": {
    "options": {
      "google-vertex": {
        "parameters": {
          "personGeneration": "allow",
          "negativePrompt": "blurry, low quality"
        }
      }
    }
  }
}
```

## Webhooks (optional)

Pass `callback_url` (HTTPS) in the submit body. On terminal state, OpenRouter POSTs a `video.generation.{completed,failed,cancelled,expired}` event. Each delivery carries `X-OpenRouter-Idempotency-Key: <job_id>-<status>`. If a signing secret is configured on the workspace, verify `X-OpenRouter-Signature: t=<ts>,v1=<hmac>` — HMAC-SHA256 of `<ts>,<raw_body>` with the secret, reject timestamps older than ~5 minutes.

## Using This Skill Inside a Pi Agent Session

In Pi's prompt space, you invoke the skill with `/skill:openrouter-video` followed by your request in natural language. The model extracts parameters and passes them to the executable script.

### Format for the Prompt Space

Use this pattern:

```
/skill:openrouter-video <description> [parameters]
```

Where parameters are optional but you can include them as natural language modifiers. Example formats:

```
1. Basic:   /skill:openrouter-video "A futuristic city skyline at sunrise"
2. With options: /skill:openrouter-video "A futuristic city skyline at sunrise" --model google/veo-3.1-lite --duration 4 --resolution 1080p
3. Full specification: /skill:openrouter-video --model google/veo-3.1-lite --duration 4 --resolution 1080p --aspect-ratio 16:9 "A futuristic city skyline at sunrise"
```

The model follows these rules when parsing parameters from your prompt:

| Parameter | How to specify in prompt | Example |
|-----------|-------------------------|---------|
| **Model** | `--model <model-id>` | `--model google/veo-3.1-lite` |
| **Duration** | `--duration <seconds>` | `--duration 4` |
| **Resolution** | `--resolution <res>` | `--resolution 1080p` or `--resolution 4K` |
| **Aspect Ratio** | `--aspect-ratio <ratio>` | `--aspect-ratio 16:9` |
| **Image URL** | `--image-url <url>` | `--image-url https://example.com/frame.jpg` |
| **Reference URL** | `--reference-url <url>` | `--reference-url https://example.com/style.jpg` |
| **Audio** | `--generate-audio` flag | `--generate-audio` |
| **Output path** | `--output <filename>` | `--output my-video.mp4` |

### Recommended: Just Describe It in Natural Language

The simplest approach — and what works best — is to describe the video you want in natural language. The model will infer sensible defaults:

```
/skill:openrouter-video "A futuristic city skyline at sunrise with holographic displays, 1080p resolution, 4 second duration"
```

If you include parameters, the model validates them against the model's supported sets before building the script invocation.

### Most Common Usage Patterns

**Pattern 1 — Quick request (model picks defaults):**
```
/skill:openrouter-video "A futuristic city skyline at sunrise with holographic displays"
```

**Pattern 2 — Specify model only:**
```
/skill:openrouter-video "A futuristic city skyline at sunrise" --model google/veo-3.1-lite
```

**Pattern 3 — Full specification:**
```
/skill:openrouter-video --model google/veo-3.1-lite --duration 4 --resolution 1080p --aspect-ratio 16:9 "A futuristic city skyline at sunrise with holographic displays"
```

### What Happens Behind the Scenes

When you enter the command, Pi's model:
1. Reads your natural language description
2. Extracts any `--parameter value` pairs
3. Validates model, duration, resolution against supported sets
4. Builds the payload for `POST /api/v1/videos`
5. Submits the async job, returns job ID
6. Begins polling every 30s until `completed`
7. Downloads the MP4 to `./video_<timestamp>.mp4`
8. Reports the file path and job summary

### Example — Your Innovacion Page

```
/skill:openrouter-video --model google/veo-3.1-lite --duration 4 --resolution 1080p --aspect-ratio 16:9 "A futuristic city skyline at sunrise, holographic displays, cinematic lighting for a creative studio brand intro"
```

## References

- [Video generation guide](https://openrouter.ai/docs/guides/overview/multimodal/video-generation)
- [Models page (filter by video output)](https://openrouter.ai/models?output_modalities=video)

Video generation is not ZDR-eligible because the provider must temporarily retain the output for the async download step.
