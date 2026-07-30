# Alma Creatia

A modern Next.js 16 application showcasing elegant design, smooth animations, and accessible UI. Built with TypeScript, React 19, and Tailwind CSS using the shadcn/ui component library.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font) and [Montserrat](https://fonts.google.com/specimen/Montserrat), a new font family for Vercel.

## Project Structure

```
.
├── app/                     # App Router pages
│   ├── fonts.ts            # Font configuration (Geist, Montserrat)
│   ├── globals.css         # Tailwind base + theme tokens
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── principal/          # "Principal" section with scroll animations
│   └── servicios/          # "Servicios" section pages
├── components/             # UI components
│   ├── InfiniteMenu.tsx    # Custom animated infinite menu (gl-matrix)
│   ├── MenuPageHeader.tsx  # Section header
│   ├── logo-txt.tsx        # Logo text component
│   ├── pageTitle.tsx       # Reusable page title
│   └── ui/                 # Primitive components
│       ├── ArrowDown.tsx
│       └── ScrollStack.tsx # Scroll-based card stacking animation
├── lib/
│   └── utils.ts            # cn() class-merge helper
├── public/                 # Static assets
└── Configuration files...
```

## Key Features

### 🎬 ScrollStack Animation (`components/ui/ScrollStack.tsx`)
A sophisticated scroll-driven card stacking component that creates a "deck of cards" effect:
- **Smooth scrolling** via Lenis library
- **Card stacking**: Cards scale down, translate, and stack on scroll
- **Configurable**: Scale, rotation, blur, stack distance, trigger positions
- **Two modes**: Window scroll (`useWindowScroll={true}`) or container scroll
- **Performance optimized**: Transform caching, GPU acceleration, RAF loop
- **Used in**: `app/principal/page.tsx` for the hero section

### 🎨 Infinite Menu (`components/InfiniteMenu.tsx`)
Custom animated infinite menu using `gl-matrix` for WebGL-based animations.

### 🎯 Typography
- **Montserrat** (default sans-serif) via `next/font/google`
- **Geist** (mono) via `next/font/google`
- **Custom local fonts**: The Seasons, Hello Paris Serif

### ♿ Accessibility
- Built on Radix UI primitives via shadcn/ui
- Semantic HTML + ARIA attributes
- Keyboard navigation support

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19.2.3
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (Radix UI)
- **Animation**: Lenis (smooth scroll), gl-matrix (WebGL)
- **Quality**: ESLint, TypeScript

## Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build (standalone output)
npm run start    # Run production build
npm run lint     # Run ESLint
```

## Docker Deployment

```bash
docker-compose up --build
```

Production deployment uses:
- **Dockerfile**: Multi-stage build with standalone output
- **docker-compose.yml**: Service orchestration
- **nginx.conf**: Reverse proxy configuration

## CI/CD

Automatic deployment to Contabo VPS via GitHub Actions on push to `main`/`master`:
1. Build & push Docker image to GHCR
2. SSH into VPS
3. Pull latest code & Docker image
4. Restart containers

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lenis Smooth Scroll](https://lenis.studiofreight.com/)
- [gl-matrix](https://glmatrix.net/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.