# PROGRESS.md — ATMOS Development Status & Progress Tracking

Living document for tracking local development progress across all 7 phases of the ATMOS Web Application Ecosystem.

---

## Overall Status Summary

- **Current Phase**: Phase 2 — Frontend UI Ecosystem & Interactive Mock Data
- **TDD Test Suite Status**:
  - Unit / Integration (Vitest): `6 tests passing`
  - End-to-End (Playwright): `2 tests passing`
- **Active Branch**: `feat/phase-2-frontend-ui`
- **GitHub Repository**: [dimsedra/atmos-label](https://github.com/dimsedra/atmos-label.git)
- **Active Issue**: [Issue #7 (Task 2.2)](https://github.com/dimsedra/atmos-label/issues/7)
- **Specification Document**: [SPEC.md](file:///d:/Project%20Hub/k-label/SPEC.md)

---

## Phase Checklist & Roadmap

### ✅ Phase 1: Foundation & Monorepo Local Environment Setup (Completed)
- [x] Initialize `pnpm` Monorepo workspace (`pnpm-workspace.yaml`, `apps/`, `packages/`)
- [x] Create Next.js 15+ (App Router) app workspace (`apps/web`)
- [x] Port & adapt Homepage Mockup UI (`mockup/homepage/src/App.tsx`) into Next.js (`apps/web/app/page.tsx`)
- [x] Setup shared packages (`packages/db`, `packages/queue`, `packages/validators`, `packages/config`)
- [x] Configure `docker-compose.yml` (PostgreSQL 16 & Redis 7 local container services)
- [x] Setup Vitest (Unit & Integration TDD framework across monorepo)
- [x] Setup Playwright (E2E testing framework for `apps/web`)
- [x] Setup Zod validation utilities & environment schema in `@atmos/validators`

### 🟩 Phase 2: Frontend UI Ecosystem & Interactive Mock Data (UI-First)
- [x] **Task 2.1**: Build Roster Page (`/roster` & `/roster/[slug]`) — Group resonance (VALLEY 5, PRIX 4) & member profiles *(Closed [Issue #6](https://github.com/dimsedra/atmos-label/issues/6))*
- [ ] **Task 2.2**: Build Shop Page (`/shop` & `/shop/[id]`) — Standalone merch storefront, cart drawer, & checkout form simulation *(Active: [Issue #7](https://github.com/dimsedra/atmos-label/issues/7))*
- [ ] **Task 2.3**: Build Articles & News Page (`/news` & `/news/[slug]`) — Editorial reading experience & field notes *(Active: [Issue #8](https://github.com/dimsedra/atmos-label/issues/8))*
- [ ] **Task 2.4**: Build About Us Page (`/about`) — ATMOS MOAT vision, manifesto, and 3-phase lifecycle narrative *(Active: [Issue #9](https://github.com/dimsedra/atmos-label/issues/9))*
- [ ] **Task 2.5**: Build Internal Admin Logistics Portal (`/admin/logistics`) — Order queue, status transitions, & resi input form simulation *(Active: [Issue #10](https://github.com/dimsedra/atmos-label/issues/10))*


### ⬜ Phase 3: Core Data & Database Layer (Drizzle ORM + PostgreSQL based on Real UI)
- [ ] Define Drizzle ORM schemas (`schema.ts`: Users, Products/SKUs, Orders, Items, Payments)
- [ ] Setup Drizzle Kit migrations & seed scripts
- [ ] Write Vitest unit & integration tests for repositories & database queries
- [ ] Integrate Redis caching layer for DB reads

### ⬜ Phase 4: Headless Content Layer (Sanity.io Integration for Roster & News)
- [ ] Define Sanity Studio schemas (Roster/Artists, Articles/News, Lookbooks, About/Manifesto)
- [ ] Build type-safe Sanity client wrapper with Redis caching
- [ ] Write Vitest integration tests for CMS content fetching

### ⬜ Phase 5: Asynchronous Payment & Reliability Layer (BullMQ + Webhooks)
- [ ] Setup BullMQ connection & queue definitions backed by Redis
- [ ] Build Stripe & Midtrans webhook endpoints with Zod payload validation
- [ ] Implement BullMQ worker for order state updates (`PENDING` ➔ `PAID`)
- [ ] Implement BullMQ worker for dispatch notifications (`SHIPPED` status update)
- [ ] Write Vitest integration tests for payment queue ingestion & worker retries

### ⬜ Phase 6: End-to-End Testing & User Flow Validation (Playwright)
- [ ] Write E2E test: Roster & artist profile navigation
- [ ] Write E2E test: News reading & editorial view
- [ ] Write E2E test: Shop cart, checkout submission & simulated webhook response
- [ ] Write E2E test: Admin logistics login & resi fulfillment flow

### ⬜ Phase 7: Infrastructure as Code & Cloud Ops (DigitalOcean + Terraform)
- [ ] Create Dockerfiles for Next.js, Node.js API, and BullMQ worker
- [ ] Write Terraform configurations (`main.tf`) for DigitalOcean (DOKS, DO Postgres, DO Redis, DO Spaces)
- [ ] Setup Kubernetes manifests & Nginx ingress controller
- [ ] Setup CI/CD pipeline & Sentry error tracking

---

## Log of Completed Milestones

| Date | Milestone / Action | Reference |
| :--- | :--- | :--- |
| 2026-07-21 | Initialized repository, created SPEC.md & implementation_plan.md | Commit `031d396` |
| 2026-07-21 | Dropped & analyzed standalone Homepage Mockup codebase (`mockup/homepage`) | `mockup/homepage` |
| 2026-07-21 | Connected remote origin `https://github.com/dimsedra/atmos-label.git`. | Remote `main` |
| 2026-07-21 | Created & configured AGENTS.md with 18 active workspace skills. | `AGENTS.md` |
| 2026-07-21 | Created GitHub Issue #1 for Phase 1. | [Issue #1](https://github.com/dimsedra/atmos-label/issues/1) |
| 2026-07-21 | **Completed Phase 1**: Built pnpm monorepo (`apps/web`, `packages/db`, `packages/queue`, `@atmos/validators`, `@atmos/config`), ported Homepage mockup UI into Next.js 15, configured `docker-compose.yml`, Vitest (2 passing tests), and Playwright E2E (1 passing test). | Phase 1 Completed |


