# MediKiosk

MediKiosk is a multilingual healthcare experience suite for patients, care teams, facility staff, platform operators, and administrators. This repository contains the complete frontend demonstration environment and uses synthetic data throughout.

## Product Surfaces

| Surface             | Entry Route       | Purpose                                                       |
| :------------------ | :---------------- | :------------------------------------------------------------ |
| Public Website      | `/`               | Patient-facing introduction and kiosk entry point             |
| Patient Kiosk       | `/patient-kiosk`  | Guided, bilingual patient intake experience                   |
| Patient Health      | `/patient`        | Personal records, documents, consultations, and consent views |
| Assisted Kiosk      | `/assisted-kiosk` | Staff queue and assisted-intake workspace                     |
| Clinician Workspace | `/clinician`      | Clinical worklist and case-review experience                  |
| Operations Console  | `/operations`     | Operational health, queues, audit, and replay tools           |
| Admin Console       | `/admin`          | Users, roles, facilities, audit, and configuration            |

All application data and actions are frontend-only demonstrations. The project does not connect to real patients, authentication, clinical services, infrastructure, or healthcare integrations.

## Technology Stack

- **Next.js 15** (App Router architecture)
- **React 19** & **TypeScript 5.8+**
- **Tailwind CSS v4**
- **Radix UI** primitives and customized UI controls
- **TanStack Query v5** (for asynchronous cache/state)
- **Web Speech API** for bilingual English & Hindi voice guidance

## Getting Started

### Requirements

- Node.js 20 or later
- npm (or pnpm / yarn)

### Installation & Development

```bash
# Clone the repository
git clone <repository-url>
cd <repository-name>

# Install dependencies
npm install

# Start the Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. No environment variables are required for the demo build.

## Commands

| Command             | Description                                          |
| :------------------ | :--------------------------------------------------- |
| `npm run dev`       | Start the local Next.js development server           |
| `npm run build`     | Compile and create a production build (`next build`) |
| `npm run start`     | Run the Next.js production server                    |
| `npm run typecheck` | Run TypeScript type checking (`tsc --noEmit`)        |
| `npm run lint`      | Run ESLint across the codebase                       |
| `npm run format`    | Format source files with Prettier                    |
| `npm run check`     | Run type checking and linting combined               |

## Project Structure

```text
src/
├── app/                    # Next.js 15 App Router pages, layouts, and providers
│   ├── admin/
│   ├── assisted-kiosk/
│   ├── clinician/
│   ├── operations/
│   ├── patient/
│   ├── patient-kiosk/
│   ├── layout.tsx          # Root HTML layout & fonts
│   ├── providers.tsx       # Global contexts & QueryClient provider
│   └── page.tsx            # Public landing page
├── assets/                 # Bundled images and asset references
├── components/
│   └── ui/                 # Accessible base design-system primitives
├── features/               # Domain-specific feature modules
│   ├── admin/
│   ├── assisted-kiosk/
│   ├── clinician/
│   ├── landing/
│   ├── operations/
│   ├── patient/
│   └── patient-kiosk/
├── hooks/                  # Reusable React hooks
├── lib/                    # Shared utilities, language, and accessibility helpers
└── styles.css              # Global design tokens and Tailwind base styles
```

## Route Map

### Patient Kiosk

`/patient-kiosk`, `/patient-kiosk/consent`, `/patient-kiosk/introduction`, `/patient-kiosk/identification`, `/patient-kiosk/questions`, `/patient-kiosk/case-taking`, `/patient-kiosk/vitals`, `/patient-kiosk/documents`, `/patient-kiosk/review`, `/patient-kiosk/confirm`, `/patient-kiosk/processing`, `/patient-kiosk/complete`

### Patient Health

`/patient`, `/patient/timeline`, `/patient/reports`, `/patient/documents`, `/patient/intakes`, `/patient/consents`, `/patient/notifications`, `/patient/profile`, `/patient/intake`

### Assisted Kiosk

`/assisted-kiosk`, `/assisted-kiosk/queue`, `/assisted-kiosk/start`, `/assisted-kiosk/case-taking`, `/assisted-kiosk/vitals`, `/assisted-kiosk/documents`, `/assisted-kiosk/handoff`

### Clinician Workspace

`/clinician`, `/clinician/worklist`, `/clinician/patients`, `/clinician/patients/[id]`, `/clinician/patients/[id]/sign`, `/clinician/documents`, `/clinician/alerts`, `/clinician/timeline`, `/clinician/settings`

### Operations Console

`/operations`, `/operations/dlq`, `/operations/manual-review`, `/operations/outbox`, `/operations/search`, `/operations/replay`

### Admin Console

`/admin`, `/admin/users`, `/admin/roles`, `/admin/facilities`, `/admin/audit`, `/admin/configuration`

## Development Conventions

1. **Keep route files clean**: Use `src/app/` for layout composition, metadata, and routing; place feature UI and state machines in `src/features/`.
2. **Product Isolation**: Add feature-specific logic to its respective folder in `src/features/`.
3. **Shared Components**: Keep reusable, neutral primitives in `src/components/ui/` and cross-cutting utilities in `src/lib/`.
4. **Path Alias**: Import source files using the `@/*` path alias.
5. **Accessibility**: Retain semantic landmarks, keyboard access, high-contrast support, responsive layouts, and screen-reader friendliness across all views.

## Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — Architectural overview, feature ownership, and data flow.
- [`roadmap.md`](roadmap.md) — Implementation roadmap and completed milestones.

## License

All rights reserved.
