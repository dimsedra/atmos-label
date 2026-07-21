# PROGRESS.md — ATMOS Development Status & Progress Tracking

Living document for tracking local development progress across all 7 phases of the ATMOS Web Application Ecosystem.

---

## Overall Status Summary

- **Current Phase**: Phase 1 — Foundation & Local Workspace Setup
- **TDD Test Suite Status**:
  - Unit / Integration (Vitest): `0 tests passing`
  - End-to-End (Playwright): `0 tests passing`
- **GitHub Repository**: [dimsedra/atmos-label](https://github.com/dimsedra/atmos-label.git)
- **Specification Document**: [SPEC.md](file:///d:/Project%20Hub/k-label/SPEC.md)

---

## Phase Checklist & Roadmap

### 🟩 Phase 1: Foundation & Local Environment Setup
- [ ] Initialize Next.js 14+ (App Router) + TypeScript workspace
- [ ] Port & adapt Homepage Mockup UI (`mockup/homepage/src/App.tsx`) into Next.js (`app/page.tsx`)
- [ ] Configure `docker-compose.yml` (PostgreSQL + Redis local container services)
- [ ] Setup Vitest (Unit & Integration TDD framework)
- [ ] Setup Playwright (E2E testing framework)
- [ ] Setup Zod validation utilities & environment schema

### ⬜ Phase 2: Core Data & Database Layer (Drizzle ORM + TDD)
- [ ] Define Drizzle ORM schemas (`schema.ts`: Users, Products/SKUs, Orders, Items, Payments)
- [ ] Setup Drizzle Kit migrations & seed scripts
- [ ] Write Vitest unit & integration tests for repositories & database queries
- [ ] Integrate Redis caching layer for DB reads

### ⬜ Phase 3: Headless Content Layer (Sanity.io Integration)
- [ ] Define Sanity Studio schemas (Roster/Artists, Articles/News, Lookbooks, About/Manifesto)
- [ ] Build type-safe Sanity client wrapper with Redis caching
- [ ] Write Vitest integration tests for CMS content fetching

### ⬜ Phase 4: Asynchronous Payment & Reliability Layer (BullMQ + Webhooks)
- [ ] Setup BullMQ connection & queue definitions backed by Redis
- [ ] Build Stripe & Midtrans webhook endpoints with Zod payload validation
- [ ] Implement BullMQ worker for order state updates (`PENDING` ➔ `PAID`)
- [ ] Implement BullMQ worker for dispatch notifications (`SHIPPED` status update)
- [ ] Write Vitest integration tests for payment queue ingestion & worker retries

### ⬜ Phase 5: Frontend Application & Internal Admin/Logistics Portal
- [ ] Build Public Pages (Next.js App Router + TanStack Query):
  - [ ] Roster Page (`/roster` & `/roster/[slug]`)
  - [ ] Shop Page (`/shop` & `/shop/[id]`)
  - [ ] Articles & News Page (`/news` & `/news/[slug]`)
  - [ ] About Us Page (`/about`)
- [ ] Build Internal Logistics Portal (`/admin/logistics`):
  - [ ] Auth0 RBAC protection (`Admin` / `Warehouse` roles)
  - [ ] Fulfillment queue & order processing
  - [ ] SKU Inventory management & tracking number (resi) entry

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
| 2026-07-21 | Updated PROGRESS.md for local non-remote tracking. | `PROGRESS.md` |

