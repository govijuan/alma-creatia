# openrouter-video

Generate videos from text prompts (and optional reference or frame images) via OpenRouter's asynchronous video generation API. Covers the submit → poll → download flow with plain `curl` + `jq`.

## Install

With the [GitHub CLI](https://cli.github.com/) (v2.90.0+):

```bash
gh skill install OpenRouterTeam/skills openrouter-video
```

Works with Claude Code, Cursor, Codex, OpenCode, Gemini CLI, Windsurf, and [many more agents](https://cli.github.com/manual/gh_skill_install). Add `--scope user` to install across every project for your current agent, or `--agent claude-code` to target a specific agent.

For other install methods (Claude Code plugin marketplace, Cursor Rules, etc.) see the [root README](../../README.md#installing).

## Using with Pi Agent (No `gh` Required)

Since `gh` CLI is not available on this machine, use the local executable script:

```bash
~/.pi/agent/skills/openrouter-video/scripts/generate-video.sh \
  --prompt "A futuristic city skyline at sunrise" \ 
  --model x-ai/grok-imagine-video:free --duration 4 --resolution 720p
```

## Using with Multiple Local Images / References

The script supports multiple `--reference-url` flags. Each can be a local file path (auto-converted to data URL) or a web URL.

### Your Seashell Example (3 Images)

```bash
# Image 1: First frame (no seashell) -> --image-url
# Image 2: Style reference (seashell) -> --reference-url
# Image 3: Fibonacci rectangle overlay -> --reference-url  (additional reference allowed)

/skill:openrouter-video \
  --model x-ai/grok-imagine-video:free \
  --duration 4 \
  --resolution 720p \
  --aspect-ratio 16:9 \
  --image-url "/Users/juankcoral/Pictures/Image1_no_seashell.jpg" \
  --reference-url "/Users/juankcoral/Pictures/Image2_seashell_spiral.jpg" \
  --reference-url "/Users/juankcoral/Pictures/Image3_fibonacci_rectangle.jpg" \
  "Begin with no seashell like in the first image. Gradually reveal the seashell's spiral as shown in Image2. Overlay the fibonacci rectangle from Image3 with gold lines and no background, matching the seashell's proportions."
```

### General Multiple Reference Syntax

You can use `--reference-url` multiple times for up to 7 reference images:

```bash
/skill:openrouter-video \
  --model x-ai/grok-imagine-video:free \
  --duration 4 \
  --resolution 720p \
  --image-url "/Users/juankcoral/Pictures/frame_start.jpg" \
  --reference-url "/Users/juankcoral/Pictures/style_1.jpg" \
  --reference-url "/Users/juankcoral/Pictures/style_2.jpg" \
  --reference-url "/Users/juankcoral/Pictures/style_3.jpg" \
  "Generate a video combining these references"
```

### Free Model Parameters (No Credits Needed)

For testing before adding credits:

| Parameter | Free Test Value |
|-----------|----------------|
| Model | `x-ai/grok-imagine-video:free` |
| Duration | `1` or `4` |
| Resolution | `720p` or `480p` |
| Aspect Ratio | `16:9` |

### Quick Reference: All Supported Flags

- `--prompt <text>` — Description
- `--model <id>` — `x-ai/grok-imagine-video:free` for testing
- `--duration <sec>` — 1–15 for free
- `--resolution <res>` — 720p/480p for free
- `--aspect-ratio <ratio>` — 16:9, 1:1, etc.
- `--image-url <path|url>` — First frame image
- `--last-frame-url <path|url>` — Last frame image
- `--reference-url <path|url>` — Style/reference (use multiple times)
- `--reference-video-url <path|url>` — Video reference
- `--audio <path|url>` — Audio file
- `--generate-audio` — Request audio generation
- `--dry-run` — Show payload without submitting

This skill is available at `~/.pi/agent/skills/openrouter-video/`. See `SKILL.md` for full documentation.
