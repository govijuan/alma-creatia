# AGENTS.md

## PROJECT OVERVIEW

**Project Name**: Alma Creatia
**Description**: A modern Next.js 16 application showcasing elegant design, smooth animations, and accessible UI. Built with TypeScript, React 19, and Tailwind CSS using the shadcn/ui component library.

**Purpose**: A creative/portfolio/creative-services website that presents offerings through a menu-driven interface with infinite-scroll animations and a sophisticated UX.

---

## TECH STACK AND KEY CONVENTIONS

### Core Technologies
- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19.2.3 / React DOM 19.2.3
- **Language**: TypeScript (strict mode, JSX via `react-jsx`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Components**: shadcn/ui (Radix UI primitives + custom components)
- **Quality**: ESLint (Next.js config) + TypeScript type-checking

### Key Conventions
1. **Routing**: File-system routing under `app/` (e.g. `app/page.tsx`, `app/servicios/page.tsx`)
2. **Typography**: Custom fonts via `next/font` (Geist) in `app/fonts.ts`
3. **Component Layout**: Atomic structure with `components/ui/` for primitives
4. **Layouts**: Server-component root layout (`app/layout.tsx`)
5. **Imports**: Use the `@/*` path alias (maps to project root) per `tsconfig.json`
6. **Styling**: Utility-first Tailwind; `lib/utils.ts` holds the `cn()` helper (clsx + tailwind-merge)

### External Dependencies
- **UI**: `lucide-react`, `class-variance-authority`, `tailwind-merge`, `tw-animate-css`
- **Math/Animation**: `gl-matrix` (used by `InfiniteMenu.tsx`)
- **Accessibility**: Radix UI via `shadcn`

---

## BUILD, TEST, AND RUN COMMANDS

### Development
```bash
npm run dev      # Next.js dev server at http://localhost:3000
```

### Production Build & Run
```bash
npm run build    # Outputs standalone build (next.config.ts: output:"standalone")
npm start        # Serves the production build
```

### Quality Assurance
```bash
npm run lint     # ESLint with eslint-config-next
```

### Docker / Deployment
```bash
docker-compose up --build   # Uses Dockerfile + docker-compose.yml
# nginx.conf provides the production reverse-proxy config
```

### CI/CD Deployment
Automatic deployment to Contabo VPS via GitHub Actions (`.github/workflows/deploy.yml`) triggered on push to `main`/`master` branch. Builds Docker image to GHCR and deploys via SSH to VPS.

### CI/CD Deployment
Automatic deployment to Contabo VPS via GitHub Actions (`.github/workflows/deploy.yml`) triggered on push to `main`/`master` branch. Builds Docker image to GHCR and deploys via SSH to VPS.

- **Trigger**: Push to `main`/`master` branch or manual `workflow_dispatch`
- **Registry**: GitHub Container Registry (GHCR) — `ghcr.io/${{ github.repository }}`
- **Image tags**: `latest` + git SHA
- **Deploy target**: Contabo VPS via SSH
- **Secrets required**:
  - `GHCR_TOKEN` — GHCR push access
  - `SSH_PRIVATE_KEY` — ed25519 key for VPS
  - `SSH_HOST` — VPS hostname/IP
  - `SSH_USER` — VPS SSH user
  - `WORK_DIR` — remote project directory on VPS
- **Flow**: Build & push image → SSH into VPS → `git pull` → `docker compose pull` → `docker compose up -d`

---

## FILE STRUCTURE SUMMARY

```
.
├── app/                     # App Router
│   ├── fonts.ts            # Font configuration (Geist)
│   ├── globals.css         # Tailwind base + theme tokens
│   ├── layout.tsx          # Root layout (metadata, fonts, providers)
│   ├── page.tsx            # Home page
│   ├── principal/          # "Principal" section pages
│   └── servicios/          # "Servicios" (Services) section pages
├── components/             # UI components
│   ├── InfiniteMenu.tsx    # Custom animated infinite menu (gl-matrix)
│   ├── MenuPageHeader.tsx  # Section header
│   ├── logo-txt.tsx        # Logo text
│   ├── pageTitle.tsx       # Reusable page title
│   └── ui/                 # Primitives (e.g. ArrowDown.tsx)
├── lib/
│   └── utils.ts            # cn() class-merge helper
├── public/                 # Static assets (served as-is)
├── components.json         # shadcn component registry/metadata
├── next.config.ts          # Next config (standalone output, reactStrictMode)
├── tsconfig.json           # TS config (@/* path alias, strict)
├── eslint.config.mjs       # ESLint flat config (next)
├── postcss.config.mjs      # Tailwind/PostCSS
├── Dockerfile              # Standalone image build
├── docker-compose.yml      # Multi-service orchestration
├── nginx.conf              # Reverse proxy for container
├── .dockerignore
├── .gitignore
├── .github/                # CI workflows
└── README.md
```

> Note: `.next/`, `node_modules/`, and `package-lock.json` are generated/installed — do not edit by hand.

---

## CODING STYLE RULES

### TypeScript
- **strict: true** — no `any` escapes without justification
- Module resolution: `bundler`; ES modules throughout
- Path alias `@/*` → project root (prefer over relative `../` chains)

### ESLint
- Flat config via `eslint.config.mjs` using `eslint-config-next`
- Run `npm run lint` before committing; fix all errors/warnings

### CSS / Tailwind
- Tailwind v4 (CSS-first config). Use utility classes; avoid inline styles
- Theme tokens / CSS variables supplied by shadcn in `globals.css`
- Merge conditional classes with `cn()` from `lib/utils.ts`

### Component Patterns
1. Prefer composition over inheritance
2. Type all props with TS interfaces/types
3. Keep Server Components by default; mark `"use client"` only when interactivity/hooks/state are needed
4. Semantic HTML + ARIA for accessibility (Radix primitives already handle this)
5. Mobile-first responsive utilities

---

## SAFETY / EDITING GUIDELINES

### Critical Files (edit with care)
- `app/layout.tsx` — root metadata, fonts, html/body structure
- `next.config.ts` — build output mode (`standalone`) is required for Docker
- `package.json` / `package-lock.json` — dependency changes need reinstall + lock update
- `Dockerfile`, `docker-compose.yml`, `nginx.conf` — production deployment surface
- `tsconfig.json` / `eslint.config.mjs` — project-wide tooling contracts

### Workflow
1. Make changes, then verify with `npm run dev`
2. Ensure `npm run lint` and TypeScript compile cleanly
3. For UI changes, visually confirm responsive behavior
4. For dependency changes, update lockfile and re-test build

### Rollback
```bash
git checkout -- <file>   # revert a single file
git reset --hard HEAD    # full rollback (use with caution)
```

---

## PROMPT ENGINEERING CONTEXT (Token Economy)

Use these compact tokens when briefing AI agents:

- **Stack**: `Next.js 16 app-router · TS strict · Tailwind v4 · shadcn/ui · React 19`
- **Alias**: import via `@/*` (root)
- **Helper**: `cn()` from `lib/utils.ts` for classes
- **Client boundary**: add `"use client"` only for interactivity
- **Build**: `output:"standalone"` → Docker/nginx ready
- **Sections**: `app/principal`, `app/servicios`, home `app/page.tsx`
- **Key component**: `InfiniteMenu.tsx` (gl-matrix animation)

### Suggested briefing template for agents
> "This is a Next.js 16 App-Router project (TS strict, Tailwind v4, shadcn/ui). Use `@/*` imports and `cn()` for classes. Keep Server Components unless interactivity is needed. After edits, run `npm run lint` and `npm run build`."

---

*Persistent source of truth for AI agents and IDE integrations. Generated 2026-07-16.*
