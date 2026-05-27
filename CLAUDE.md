# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run lint      # Run ESLint
npm run test      # Run all Vitest tests (watch mode)
```

Run a single test file:
```bash
npx vitest tests/components/Navbar.test.tsx
```

## Architecture

This is a **Next.js App Router** project using route groups to separate layout contexts:

- `app/(public)/` — Unauthenticated pages (login, signup, splash). Wrapped in a `<main className="public">` element. No navbar.
- `app/(dashboard)/` — Authenticated pages (all under `/heists`). Wrapped with the `<Navbar />` component.

Route groups use parentheses `(name)` — they segment layouts without affecting the URL.

**Import alias:** `@/*` maps to the project root (e.g. `@/components/Navbar`).

## Styling

Tailwind CSS v4 is configured via PostCSS (no `tailwind.config.js`). The theme is defined in `app/globals.css` using the `@theme {}` block with CSS custom properties:

- **Colors:** `primary` (#C27AFF purple), `secondary` (#FB64B6 pink), `dark`/`light`/`lighter` (dark backgrounds), `success`, `error`, `heading`, `body`
- **Reusable layout classes:** `.page-content`, `.center-content`, `.form-title` — defined in `globals.css` and used directly in JSX.

CSS Modules (`.module.css`) are used for component-scoped styles alongside Tailwind utilities.

## Testing

Tests live in `tests/` mirroring the source structure. Vitest is configured with:
- `jsdom` environment
- Globals enabled (no need to import `describe`/`it`/`expect`)
- `@testing-library/jest-dom` matchers (via `vitest.setup.ts`)
- `vite-tsconfig-paths` so the `@/*` alias works in tests

## Components

Components go in `components/<ComponentName>/` with three files:
- `ComponentName.tsx` — implementation
- `ComponentName.module.css` — scoped styles
- `index.ts` — barrel export (`export { default } from './ComponentName'`)
