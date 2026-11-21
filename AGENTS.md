<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio

Single-page portfolio for Yasir Arafat. Next.js 16.4.6 (App Router, Turbopack), React 19.3,
Tailwind CSS 4.3, GSAP. One static route (`/`); no API routes, server actions, database,
tests, or CI.

## Commands

- Use npm; only `package-lock.json` is committed.
- `npm run dev` — dev server. `next dev` may add/update the managed Next.js blocks in this
  file; commit them instead of reverting.
- `npm run build` — production build; also runs TypeScript. Currently passes and prerenders
  `/` as static.
- `npm start` — serve the production build.
- `npm run lint` — ESLint 9 flat config, no path. Single file: `npx eslint app/components/HeroSection.tsx`.
- `npx tsc --noEmit` — fastest standalone typecheck (currently passes).
- No test runner. Verify with `npx tsc --noEmit` and `npm run build`.

## Setup

- `.env*` is gitignored. Create `.env` with
  `NEXT_PUBLIC_SITE_URL=http://localhost:3000` (or the deployed origin). `app/layout.tsx`
  and `app/components/JsonLd.tsx` call `new URL(...)` on it; the build fails without it.

## Structure

- `app/layout.tsx` — root layout, metadata/OpenGraph, Montserrat via `next/font/google`.
- `app/page.tsx` — `"use client"`; composes all sections and registers GSAP plugins at
  module scope.
- `app/components/` — sections and `navbar/`; `app/icons/` — inline SVG icons.
- `lib/constants.ts` — all editable content: nav, socials, skills, featured/other projects.
- `lib/helpers.ts` — canvas geometry for the loading animation.
- `app/hooks/useMediaQuery.ts` — SSR-safe `matchMedia` hook used for JS breakpoints.
- `@/*` maps to the repo root (`@/lib/...`, `@/app/...`); relative imports are also used.

## Conventions and gotchas

- Tailwind v4 is CSS-first: no `tailwind.config.*`. Add theme tokens, fonts, and keyframes in
  `app/globals.css` under `@theme`; the `*.css` Turbopack loader is wired in `next.config.ts`.
- Fonts: `font-mono` = SF Mono, `font-calibre` = Calibre (both `@font-face` from
  `public/fonts`), Montserrat via `next/font`. Existing components hardcode the palette
  (`#0a192f`, `#64ffda`, `#ccd6f6`, `#8892b0`) in arbitrary-value classes rather than theme
  tokens.
- Section ids (`hero`, `about`, `projects`, `other-projects`, `contact`) are shared by navbar
  scrolling and GSAP ScrollTriggers. Renaming one means updating `lib/constants.ts`,
  `app/page.tsx`, and the section.
- The loading screen blocks scroll (`body { overflow: hidden }` in `globals.css`) for ~3.3s;
  the page intro timeline hardcodes `delay: 3.4`. Change both together.
- Animations use `useGSAP` from `@gsap/react`; `ScrollTrigger`/`ScrollToPlugin` are registered
  in `app/page.tsx`. Keep animation code client-side.
- Responsive behavior mixes Tailwind `md:` classes with `useMediaQuery` breakpoints; preserve
  both when editing a section.
- `next.config.ts` enables `cacheComponents` and `partialPrefetching`; keep routes
  prerenderable. Don't add legacy `dynamic`/`revalidate` segment configs — follow
  `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md`.
- `app/layout.tsx` uses the generated global `LayoutProps<"/">`; don't import it. Regenerate
  types with `next dev`, `next build`, or `npx next typegen`.
- Site name/URL/description are duplicated in `app/layout.tsx` metadata and
  `app/components/JsonLd.tsx`; update both.
- `experimental.agentFeedback` is enabled. If `next dev` adds the `nextjs-agent-feedback`
  block, commit it.

## Baseline

- `npm run lint` currently fails on an existing `<a href="/">` in
  `app/components/navbar/Navbar.tsx` and warns about unused imports/vars in `Footer.tsx` and
  `layout.tsx`. Don't treat these as regressions from your change; fix only when relevant.

## Git

- History uses `feat/<area>` branches merged into `main` via PR. No CI workflows are configured.
