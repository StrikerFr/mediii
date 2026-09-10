# MediKiosk Agent Guidelines

## Architecture & Code Standards

- **Tech Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4.
- **Routing**: Next.js App Router under `src/app/`. Use `<Link href="...">` from `next/link` and navigation hooks from `next/navigation`.
- **Component Primitives**: Headless components built on Radix UI primitives and Tailwind CSS.
- **State Management**: TanStack Query for server state / asynchronous caches, and scoped React Contexts for feature domain state.
- **Accessibility & Design**: Adhere to the "Calm Courtyard" design tokens in `src/styles.css`. Maintain full keyboard navigation, WCAG contrast compliance, and bilingual (English/Hindi) voice assistance.
- **Verification**: Ensure `npm run typecheck`, `npm run lint`, and `npm run build` pass with zero errors.
