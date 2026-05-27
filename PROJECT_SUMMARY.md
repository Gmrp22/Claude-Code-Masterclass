# Pocket Heist — Project Summary

## Purpose
A gamified web application for managing "office heist missions" — playful tasks users can create, assign, and track. It's the starter project for the **Claude Code Masterclass**, intentionally left as a skeleton for developers to build out.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 + CSS Modules |
| Icons | Lucide React |
| Testing | Vitest + React Testing Library |
| Linting | ESLint 9 |

---

## Architecture

**Route Groups** — Two layout contexts via `(public)` and `(dashboard)` groups:

- `(public)/` — splash, login, signup, preview pages (no navbar)
- `(dashboard)/heists/` — main app area with navbar; includes list, create, and `[id]` dynamic detail pages

**Component Pattern** — Barrel exports (`index.ts`), CSS Modules for scoped styles, composed into layouts.

**Styling System** — Custom Tailwind theme with CSS variables: purple primary (`#C27AFF`), pink secondary (`#FB64B6`), dark theme. Global utility classes (`.page-content`, `.center-content`).

---

## Key Features (Structural)

- `/heists` — Dashboard with Active / Assigned / Expired mission tabs
- `/heists/create` — New mission creation form
- `/heists/[id]` — Individual heist details (dynamic route)
- `/login` + `/signup` — Auth pages (logic not yet implemented)
- `/preview` — Component preview page for UI development

---

## Current State
This is a well-structured **starter skeleton** — layouts, routing, and component architecture are in place, but business logic (authentication, data persistence, API calls) is intentionally left unimplemented as learning material for the masterclass.