# MediKiosk Frontend Architecture

## Overview

MediKiosk is a modular frontend architecture. A single **Next.js 15 App Router** application hosts seven independently owned experiences while sharing a unified visual design system ("Calm Courtyard") and low-level accessibility utilities.

The current implementation provides asynchronous boundaries over typed synthetic data so real backend services and FHIR/HL7 integrations can be introduced later without coupling UI screens to transport details.

## Dependency Direction

```text
src/app (Routes & Layouts)
  ↓
src/features (Domain Logic & Feature Pages)
  ↓
src/components/ui, src/hooks, src/lib (Shared UI, Hooks, Utilities, Assets)
```

- Routes under `src/app/` import feature entry points and layout providers.
- Features import their own domain modules and shared code.
- Shared code does not import product features.
- Features remain decoupled and do not cross-import another feature.

## Feature Anatomy

```text
src/features/<feature>/
├── components/             # Feature-owned components
│   └── pages/              # Route-level page compositions
├── mock/                   # Synthetic data fixtures & state machines
├── translations/           # Feature dictionaries (EN/HI), when needed
├── api.ts                  # Replaceable frontend service boundary
├── types.ts                # Domain models & interfaces
└── <feature>-context.tsx   # Scoped state and actions
```

## Feature Ownership

| Feature          | Responsibility                                                        |
| :--------------- | :-------------------------------------------------------------------- |
| `landing`        | Public MediKiosk presentation portal and navigation calls to action   |
| `patient-kiosk`  | Guided self-service patient kiosk intake and registration             |
| `patient`        | Patient portal, health record views, and mobile pre-visit intake      |
| `assisted-kiosk` | Staff-assisted queue triage, intake, and handoff workflow             |
| `clinician`      | Clinical worklist, patient encounter review, and document signing     |
| `operations`     | System operations dashboard, DLQ inspection, retry/replay, and search |
| `admin`          | User management, RBAC matrix, clinic settings, and audit logs         |

## Route Layer (`src/app/`)

Routes follow standard Next.js 15 App Router conventions. Layouts (`layout.tsx`) wrap route segments with domain contexts and shells, while `page.tsx` renders feature compositions.

## State and Data

- Domain state stays within the respective feature's context provider.
- Mock API adapters return typed promises to model future service calls.
- Synthetic fixtures live under each feature's `mock/` folder.
- Components consume providers or typed props rather than directly mutating data.

## Shared Code

- `src/components/ui/`: Accessible base controls and design-system primitives built on Radix UI.
- `src/hooks/`: Reusable hooks with no product ownership.
- `src/lib/`: Utilities, language support (EN/HI), and accessibility helpers.
- `src/assets/`: Bundled media and image assets.
- `src/styles.css`: Semantic tokens, typography, and accessibility utilities.

## Quality & Checks

Run the following checks before deploying or creating a pull request:

```bash
npm run typecheck
npm run lint
npm run build
```
