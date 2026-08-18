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
2. **Typography**: Custom fonts via `next/font` (Geist, Montserrat) in `app/fonts.ts`
3. **Component Layout**: Atomic structure with `components/ui/` for primitives
4. **Layouts**: Server-component root layout (`app/layout.tsx`)
5. **Imports**: Use the `@/*` path alias (maps to project root) per `tsconfig.json`
6. **Styling**: Utility-first Tailwind; `lib/utils.ts` holds the `cn()` helper (clsx + tailwind-merge)

### External Dependencies
- **UI**: `lucide-react`, `class-variance-authority`, `tailwind-merge`, `tw-animate-css`
- **Math/Animation**: `gl-matrix` (used by `InfiniteMenu.tsx`), `lenis` (smooth scrolling for ScrollStack)
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
│   ├── fonts.ts            # Font configuration (Geist, Montserrat)
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
│   └── ui/                 # Primitives (e.g. ArrowDown.tsx, ScrollStack.tsx)
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
- **Key components**: `InfiniteMenu.tsx` (gl-matrix animation), `ScrollStack.tsx` (lenis scroll animations)

### Suggested briefing template for agents
> "This is a Next.js 16 App-Router project (TS strict, Tailwind v4, shadcn/ui). Use `@/*` imports and `cn()` for classes. Keep Server Components unless interactivity is needed. After edits, run `npm run lint` and `npm run build`.

## PI Agent File Context

This section provides context specific to the PI agent's understanding of the project:

- **Configuration Files**: `.pi/settings.json` (global PI configuration), theme extensions in `.pi/git/`
- **Key Focus Files**: PI agent prioritizes watching `AGENTS.md`, `README.md`, `app/`, `components/`, `lib/`, `next.config.ts`, `tsconfig.json`, and `package.json`
- **Build Artifacts**: PI agent ignores `node_modules/` and `.next/` directories, relying on `package.json` for dependency tracking
- **Usage**: This file (`AGENTS.md`) serves as the root documentation for all agents including PI

## Zed IDE File Context

This section provides context specific to Zed IDE's understanding of the project:

- **Workspace Organization**: Zed groups files by feature/module (app routing, components, UI primitives, utilities, configuration)
- **Code Lens & Navigation**: Provides semantic understanding of server vs client components, route entry points, and component dependencies
- **Quick Access Patterns**: 
  - Open files: `Cmd+P` → `app/servicios` for section pages
  - Go to definition: `Cmd+Click` on imports in components
  - Utilities: `Cmd+P` → `lib/utils.ts` for `cn` helper
- **Navigation Map**: Shows hierarchical routes from home (`/`) through layout to section pages (`/principal`, `/servicios`) with their respective components
- **Dependency Graph**: Highlights key relationships like `InfiniteMenu.tsx` → `gl-matrix` (external) + `lib/utils.ts` (class merging), `ScrollStack.tsx` → `lenis` (smooth scroll) + `lib/utils.ts`

---

## SCROLLSTACK COMPONENT DOCUMENTATION

### Overview
`ScrollStack.tsx` (`components/ui/ScrollStack.tsx`) implements a scroll-driven card stacking animation using **Lenis** for smooth scrolling. Cards scale down, translate, rotate, and blur as they stack on top of each other during scroll.

### Key Files
- **Component**: `components/ui/ScrollStack.tsx`
- **Usage**: `app/principal/page.tsx` (with `useWindowScroll={true}`)
- **Dependencies**: `lenis` (smooth scroll), React hooks

### Architecture

#### ScrollStackItem (Lines 11-22)
```tsx
export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '', isTop = false })
```
- **Props**: `itemClassName`, `children`, `isTop` (first card gets full-screen layout)
- **Renders**: `div.scroll-stack-card` with `will-change-transform`, `transform-style: preserve-3d`
- **Styles**: `isTop` → `h-screen flex flex-col justify-center`; else → `h-80 my-8 p-12 rounded-[40px] shadow`

#### ScrollStack Props (Lines 24-38)
| Prop | Default | Description |
|------|---------|-------------|
| `itemDistance` | 100 | Pixel gap between cards (margin-bottom) |
| `itemScale` | 0.03 | Scale reduction per card index |
| `itemStackDistance` | 30 | Vertical offset between stacked cards |
| `stackPosition` | `'10%'` | Viewport % where card starts pinning |
| `scaleEndPosition` | `'10%'` | Viewport % where card reaches target scale |
| `baseScale` | 0.85 | Minimum scale for first stacked card |
| `scaleDuration` | 0.5 | (Unused) Animation duration placeholder |
| `rotationAmount` | 0 | Rotation degrees per card per progress |
| `blurAmount` | 0 | Blur px per card depth in stack |
| `useWindowScroll` | false | Use `window.scrollY` vs internal scroller |
| `onStackComplete` | undefined | Callback when last card pins |

#### Refs & State (Lines 55-61)
```tsx
const scrollerRef = useRef<HTMLDivElement>(null)        // Internal scroll container
const stackCompletedRef = useRef(false)                  // Prevents duplicate callbacks
const animationFrameRef = useRef<number | null>(null)    // RAF loop for Lenis
const lenisRef = useRef<Lenis | null>(null)              // Lenis instance
const cardsRef = useRef<HTMLElement[]>([])               // Card DOM nodes
const lastTransformsRef = useRef(new Map<number, any>()) // Transform cache
const isUpdatingRef = useRef(false)                      // Re-entrancy guard
```

#### Core Functions

**`calculateProgress(scrollTop, start, end)`** (Lines 63-67)
- Returns 0-1 progress between start/end scroll positions
- Clamped: <start = 0, >end = 1

**`parsePercentage(value, containerHeight)`** (Lines 69-74)
- Converts `'10%'` strings to pixels using container height
- Passes through numbers

**`getScrollData()`** (Lines 76-91)
- Returns `{ scrollTop, containerHeight, scrollContainer }`
- `useWindowScroll=true`: uses `window.scrollY`, `window.innerHeight`, `document.documentElement`
- `useWindowScroll=false`: uses `scrollerRef.current.scrollTop`, `clientHeight`, ref

**`getElementOffset(element)`** (Lines 93-103)
- `useWindowScroll=true`: `getBoundingClientRect().top + window.scrollY`
- `useWindowScroll=false`: `element.offsetTop`

**`updateCardTransforms()`** (Lines 105-196) — **Main Animation Logic**
1. Gets scroll data, converts percentage positions to pixels
2. Finds `.scroll-stack-end` element for pin release calculation
3. For each card (index `i`):
   - **Trigger positions**:
     - `triggerStart = cardTop - stackPositionPx - itemStackDistance * i`
     - `triggerEnd = cardTop - scaleEndPositionPx`
     - `pinStart = triggerStart` (same as triggerStart)
     - `pinEnd = endElementTop - containerHeight / 2`
   - **Scale**: `scale = 1 - progress * (1 - targetScale)` where `targetScale = baseScale + i * itemScale`
   - **Rotation**: `rotation = i * rotationAmount * progress`
   - **Blur**: Cards below top card get `blur = depthInStack * blurAmount`
   - **TranslateY**:
     - If pinned: `translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i`
     - If past pinEnd: locked at `pinEnd - cardTop + stackPositionPx + itemStackDistance * i`
   - **Transform**: `translate3d(0, translateY, 0) scale(scale) rotate(rotation)`
   - **Filter**: `blur(blur)` if blur > 0
   - **Optimization**: Only applies if values changed > threshold (0.1px, 0.001 scale, 0.1deg, 0.1px blur)
   - **Stack Complete**: Fires `onStackComplete` when last card enters/exits pin range

**`handleScroll()`** (Lines 213-215)
- Debounced scroll handler → calls `updateCardTransforms()`

**`setupLenis()`** (Lines 217-271)
- Creates Lenis instance with smooth scroll config:
  - `duration: 1.2`, custom easing, `lerp: 0.1`
  - Touch/wheel multipliers, sync touch
- **Window mode**: Lenis on `window`, RAF loop on `lenis.raf()`
- **Container mode**: Lenis on `scrollerRef` with `.scroll-stack-inner` content
- Attaches `handleScroll` to Lenis `on('scroll')`
- Starts RAF loop

**`useLayoutEffect`** (Lines 273-327) — **Initialization & Cleanup**
1. Queries all `.scroll-stack-card` elements (window or container)
2. Sets initial styles on each card:
   - `marginBottom: itemDistance` (except last)
   - `willChange: transform, filter`
   - `transformOrigin: top center`
   - `backfaceVisibility: hidden`
   - `transform: translateZ(0)` (GPU layer)
   - `perspective: 1000px` (3D context)
3. Calls `setupLenis()` and initial `updateCardTransforms()`
4. **Cleanup**: Cancels RAF, destroys Lenis, clears refs

#### Render (Lines 329-348)
```tsx
<div ref={scrollerRef} className="relative w-full h-full overflow-y-auto overflow-x-visible" style={{...}}>
  <div className="scroll-stack-inner px-20 min-h-screen">
    {children}
    <div className="scroll-stack-end w-full h-px" />  {/* Pin release spacer */}
  </div>
</div>
```
- Container styles: `overscrollBehavior: contain`, `scrollBehavior: smooth`, GPU transforms
- Inner wrapper: horizontal padding, minimum screen height
- End spacer: 1px tall div for clean pin release

---

### Usage in `app/principal/page.tsx`

```tsx
<ScrollStack useWindowScroll={true}>
  <ScrollStackItem itemClassName="text-white" isTop={true}>
    {/* Hero content: Logo, PageTitle, ArrowDown */}
  </ScrollStackItem>
  <ScrollStackItem>
    {/* Bienvenidos section */}
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 2</h2>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 3</h2>
  </ScrollStackItem>
</ScrollStack>
```

**Current Issues**:
1. `useWindowScroll={true}` but video background is `fixed` — may cause z-index conflicts
2. Video section has `z-10` but ScrollStack cards need to stack *over* it
3. No explicit height on ScrollStack container when using window scroll
4. `px-20` on inner wrapper may cause horizontal overflow on mobile

**Recommended Fixes**:
```tsx
// In page.tsx - ensure proper stacking context
<section className="relative w-full h-screen">  {/* Video section */}
  <video className="fixed inset-0 w-full h-full object-cover" ... />
  <div className="absolute inset-0 bg-black/50" />
  
  <ScrollStack useWindowScroll={true} className="relative z-20 h-full">
    {/* Cards will stack over video */}
  </ScrollStack>
</section>

// In ScrollStack.tsx - responsive padding
<div className="scroll-stack-inner px-4 md:px-20 min-h-screen">
```

---

*Persistent source of truth for AI agents and IDE integrations. Updated 2026-07-28.*