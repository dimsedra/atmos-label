# SPEC.md — ATMOS System & Vision Specification

---

## 1. Technical Architecture & Engineering Specifications

### 1.1 High-Level Architecture Overview (Monorepo Workspace)

```
[ Monorepo Root (pnpm workspaces) ]
   ├── apps/
   │    ├── web/               ──► Next.js (App Router) + React (TS) + TanStack Query
   │    └── studio/            ──► Sanity Studio (Standalone CMS Studio for Content Editors)
   │
   └── packages/
        ├── db/                ──► PostgreSQL + Drizzle ORM (Schemas, DB Client & Migrations)
        ├── queue/             ──► Redis + BullMQ (Queue Definitions & Background Workers)
        ├── validators/        ──► Shared Zod Schemas (Type Contracts across Apps & Services)
        └── config/            ──► Shared TypeScript, ESLint, & Tailwind Configurations

[ Edge / Ingress ] 
   └─► Nginx (SSL Termination & Load Balancing)

[ External Services ]
   ├── Auth0 (Token & Session Validation)
   ├── Stripe / Midtrans (Payment Gateways & Webhooks)
   ├── Sanity.io (Headless CMS Content Cloud)
   └── DigitalOcean Spaces (S3-Compatible Object Storage)
```

---

### 1.2 Component Specifications

#### A. Monorepo Workspace Structure (`pnpm workspaces`)
* **Workspace Engine**: `pnpm` Workspaces for instant package linking, zero-duplication dependencies, and high-performance builds.
* **`apps/web`**: Next.js App Router application hosting the public site (Roster, Shop, News, About Us) and the internal Auth0-protected Logistics & Fulfillment Portal (`/admin/logistics`).
* **`apps/studio`**: Standalone Sanity Studio instance for content managers and editors.
* **`packages/db`**: Isolated Drizzle ORM schemas, database connection pooling, migration scripts, and seeds.
* **`packages/queue`**: BullMQ background workers and Redis queue definitions.
* **`packages/validators`**: Shared Zod schemas (User, Order, SKU, Shipping Address, Webhook payloads) acting as the single source of truth for TypeScript types across `apps/` and `packages/`.
* **`packages/config`**: Centralized TypeScript, ESLint, and Tailwind CSS design tokens.

#### B. Client & Edge Layer
* **Frontend Framework**: **Next.js (App Router)** with React written in **TypeScript**.
* **State Management & Data Fetching**: **TanStack Query (React Query)** for client-side API caching, optimistic updates, and smooth data re-fetching.
* **Validation & Type Contracts**: **Zod** (via `@atmos/validators`) for unified runtime validation across API requests, form inputs, and payment webhook payloads.
* **Edge Proxy**: Nginx serving as reverse proxy, SSL/TLS termination, and load balancer.

#### C. Application & Content Layer
* **Node.js API & Services**: Modular API routes inside `apps/web` handling business logic and data access.
* **Authentication**: Auth0 for secure JWT verification, identity provider integration, and role-based access control (RBAC).
* **Headless Content Management (Sanity.io)**: Explicit single source of truth for **all creative, media, and editorial content** across the platform (`apps/studio` & Sanity Cloud API).

#### D. Data, Storage & Queue Layer
* **Primary Database & ORM**: **PostgreSQL** accessed via **Drizzle ORM** (`@atmos/db`) for type-safe schema definitions and zero-overhead SQL migrations.
* **Object Storage**: **DigitalOcean Spaces** (S3-compatible object storage) for hosting static assets, media backups, and generated invoices.
* **Cache & Message Broker**: **Redis** + **BullMQ** (`@atmos/queue`) for caching and reliable background job processing.

---

### 1.3 Asynchronous Payment Processing Flow (Reliability Pattern)

To ensure system resilience and high availability under load:
1. **Webhook Ingestion**: Webhook notifications from payment gateways (**Stripe** / **Midtrans**) are acknowledged immediately by lightweight HTTP request handlers.
2. **Job Enqueueing**: Instead of processing transactions inline within the HTTP request lifecycle, webhooks push payload jobs into a **BullMQ** queue backed by Redis.
3. **Worker Processing**: Background worker processes pick up payment jobs asynchronously, execute order state updates in PostgreSQL via Drizzle ORM, and trigger necessary downstream effects.
4. **Fault Tolerance & Retries**: Failed processing attempts automatically trigger BullMQ retry logic without losing payment events or causing client-side HTTP timeouts.

---

### 1.4 Infrastructure & Operations (Full DigitalOcean Cloud)

* **Cloud Provider**: **DigitalOcean (Full Stack Infrastructure)**
  * **DOKS (DigitalOcean Kubernetes Service)**: Container orchestration for Next.js, Node.js API, and BullMQ Workers.
  * **DO Managed Database**: High-availability PostgreSQL cluster with automated backups and VPC private networking.
  * **DO Managed Redis**: Low-latency cache and BullMQ job storage inside private VPC.
  * **DO Spaces**: High-performance S3-compatible Object Storage + CDN.
* **Infrastructure as Code (IaC)**: **Terraform** for declarative provisioning of all DigitalOcean resources (DOKS, Postgres, Redis, Spaces, Firewalls).
* **CI/CD Pipeline**: Automated build, test, and deployment workflows.
* **Observability & Error Tracking**: **Sentry** integrated across all service layers for centralized real-time error logging and monitoring.


---

### 1.5 Testing Strategy (Test-Driven Development - TDD)

Development follows a strict **TDD** workflow across unit, integration, and E2E boundaries:

* **Vitest (Unit & Integration Layer)**:
  * Business logic unit tests.
  * Service layer & repository abstraction testing (PostgreSQL & Redis mocks/integration).
  * Fast feedback loops for backend and API endpoints.

* **Playwright (End-to-End Layer)**:
  * Full browser user journey validation (e.g., authentication flows, checkout, content rendering).
  * Runs independently of unit/integration tests without overlapping test responsibilities.

---

### 1.6 Web Application Ecosystem & Page Architecture

The ATMOS web application provides an immersive, lifestyle-first digital ecosystem comprising five core modules, with clear data responsibilities between Sanity.io (CMS) and PostgreSQL (Transactional DB):

* **1. Roster Page (`/roster` & `/roster/[slug]`)**:
  * **Data Source**: Powered by **Sanity.io** for dynamic artist/group bios, member profiles, film photography, discography metadata, and solo project stories.
  * **Content**: Showcases ATMOS groups (**VALLEY**, **PRIX**, **FLAVOR**, **SOUVEREIN**) and individual artists, emphasizing "Person First" and "Solo Sovereignty".
* **2. Shop Page (`/shop` & `/shop/[id]`)**:
  * **Data Source (Hybrid)**: **Sanity.io** for editorial product copy, lookbooks, and campaign visual assets + **PostgreSQL** for transactional SKU inventory, order states, and cart operations.
  * **Content**: Premium lifestyle goods & apparel storefront strictly adhering to Section VIII Commercial Architecture (zero group logos or idol faces).
  * **Payments**: Integrated with Stripe / Midtrans webhooks, BullMQ worker queues, and PostgreSQL transactional updates.
* **3. Articles & News Page (`/news` & `/news/[slug]`)**:
  * **Data Source**: Powered 100% by **Sanity.io**.
  * **Content**: Editorial and press hub featuring long-form storytelling, grainy film photography, behind-the-scenes logs, release announcements, and artist interviews.
* **4. About Us Page (`/about`)**:
  * **Data Source**: Powered by **Sanity.io** for dynamic brand copy and visual assets.
  * **Content**: Manifesto showcase, Western MOAT thesis, 3-phase lifecycle, scouting logic, and core vision: *"We don't build artists. We find people who already are one."*
* **5. Internal Logistics & Fulfillment Portal (`/admin/logistics`)**:
  * **Data Source**: **PostgreSQL** via Drizzle ORM (Orders, SKUs, Inventory levels, Shipping Tracking Numbers) + **BullMQ** for dispatch notifications.
  * **Access Control**: Protected via **Auth0 RBAC** (Role-Based Access Control) restricted exclusively to `Admin` & `Warehouse` roles.
  * **Capabilities**: Warehouse order fulfillment queue, inventory management, tracking number input (resi kurir), shipping state transitions (`PENDING` ➔ `PAID` ➔ `PROCESSING` ➔ `SHIPPED` ➔ `DELIVERED`), and automated customer dispatch notifications.

---




## 2. ATMOS Brand, Vision & Concept Manifest

### ATMOS
> ***"We don't build artists. We find people who already are one."***

Seoul-based Lifestyle music label combining lifestyle and music into one cohesive atmosphere. Departing from conventional K-Pop idol manufacturing, ATMOS adopts a progressive, Western-moat brand philosophy.

---

### I. The Problem With the Industry

The standard model works like this: find a talented person, sand down everything specific about them, insert a concept, and release the result. The concept is the product. The person is the delivery mechanism.

It works. It also produces a ceiling. When the concept ages, the group ages with it. When the members grow up, there's nothing underneath the packaging to grow into.

And underneath all of it is a deeper failure. The model doesn't actually sell people. It sells the idea of people — carefully constructed projections filtered through approval processes and content calendars until what remains is legible, safe, and hollow. The audience feels this, even without language for it. They feel the difference between knowing someone and knowing a concept wearing someone's face.

ATMOS starts from a different unit entirely.

**Not the group. The person.**

---

### II. The Person Comes First

Here is the thing most labels get backwards: the group is not the starting point. It's the outcome.

We don't scout for a concept. We don't go looking for "our next composed-exterior-turbulent-interior girl" or "our next music nerd with rockstar energy." We go looking for people who are already fully something — whole, formed, specific, interesting to know regardless of what they'd ever be part of.

A songwriter who's been producing for other artists since before anyone knew her name. A dancer who trained for fifteen years in a discipline that has nothing to do with pop music. A singer-songwriter who left a nine-year trainee system that failed her and rebuilt herself from scratch. A person whose introversion is as real and as central to who they are as their talent.

We find these people one at a time, evaluated as whole individuals, not as candidates for a slot. The archetype doesn't come first. The person does.

Groups emerge afterward — when we notice that several fully-formed people share a resonance, a common thread underneath their different lives, and choose to make something together because of it. The archetype is what we call that resonance once enough of it has become visible. It's a description, not a brief.

This means our map of human types is never finished. It grows every time we find someone new who doesn't fit anything we've named yet. That's not a scouting failure. That's the next thing we're about to learn.

---

### III. The Mental Model Premise

When you genuinely know someone, something specific happens. You build an internal model of who they are — not from what they tell you about themselves, but from the accumulated texture of how they move through the world. And once that model exists, it becomes self-sustaining. Their unpredictability doesn't confuse you. It reveals them further. You don't need to be fed content to stay engaged. You're already curious, because you're following a person, not a release cycle.

This is what ATMOS is built toward. Not fans. Not consumers. People who have built a genuine mental model of our artists — who recognize them, not as aspirational figures to admire from a distance, but as human beings they already understand, because they've watched enough of the real thing to know it when they see it.

The recognition isn't "I like them."

It's "that's me."

---

### IV. The Scouting Logic

We don't hold auditions. We don't look for blank slates. We don't go in with a checklist.

The person we're looking for is almost certainly not in a general audition line. They're not thinking about being an idol. They're writing songs in their room because that's how they process their life. They're training in a discipline nobody's asked them to monetize. They're carrying nine years of a system that never worked out for them and building something else instead. They're introverted in a way that shapes everything about how they'll eventually need to be approached.

Our scouts operate less like talent evaluators and more like people who are genuinely curious about other people. The question they carry isn't "does this person fit what we need." It's "is there a whole human being here — someone with a real interior life, a coherent way of being in the world, something that would keep being interesting the longer you knew them."

**The ATMOS Academy is an accelerator, not a factory.** World-class resources — vocal development, production infrastructure, performance craft, global reach — applied to people who are already something specific. We sharpen. We don't replace.

---

### V. The Groups, As They Currently Exist

ATMOS currently has four groups. Each is a pattern that emerged from real people who found resonance with each other — not a mold they were selected to fill. Each is capped at four or five members, sized to function like an actual close friend group, where every relationship between every pair of people has room to be its own specific thing.

These are not fixed categories. They are the patterns visible so far.

Not every group enters the world at once. The sequence follows the same logic as everything else here — go where the environment amplifies what's already there, and let accumulated context do the rest. **VALLEY** and **PRIX** are the first two groups ATMOS is building toward. **FLAVOR** and **SOUVEREIN** are real, are being developed with the same care, and will arrive when their moment is right rather than when a launch calendar says so.

---

#### VALLEY *(Pure Momentum)* — 5 members
People who love what they do so genuinely that the charisma is a side effect, not the goal. Music nerds who became rockstars without losing the music nerd part.
* **The music**: High-octane, rhythm-heavy rock-pop. The kind of music that makes you move before you decide to.
* **The stage**: Unscripted, generous, outward-facing. Real reactions to each other in real time.
* **The release**: Music arrives when the momentum in the room demands it.

---

#### PRIX *(Fully Alive)* — 4 members
People who don't run on the conventional social operating system — not performing difference, just never installing the filter between their internal world and their external expression, or deciding at some point it wasn't worth maintaining. Unpredictable from the outside. Completely coherent from the inside, once you know them well enough to see the thread.
* **The music**: Confident, glossy, self-aware pop with genuine groove and warmth underneath. It-girl energy that's earned because it's inhabited, not performed.
* **The stage**: Controlled chaos that shouldn't cohere as a unit and does — because what they share isn't an aesthetic. It's the specific quality of being completely present and completely themselves at once.
* **The release**: Arrives sideways. Unpredictable in format, unmistakable in origin.

---

#### FLAVOR & SOUVEREIN
In active development under the same human-first scouting and creative philosophy.

---

### VI. The Music, The Stage, The Visual Language

ATMOS music is built to stand completely on its own. No visual spectacle required. Drop a track on any playlist, blind to the label, and it holds — because it was written from a real place, by people who actually live in the emotional world the song describes.

A performance is not a demonstration of synchronized precision. It's a window into a real dynamic between real people — the spontaneous glance, the shared grin, the moment that wasn't planned and couldn't have been. Full vocal capacity, always. What you hear live is what you hear on the record.

Visuals are tactile, grainy, real. Shot on location, on film, by a camera that observes rather than directs. A music video should look like someone filmed something that was actually happening — not staged to look that way. Audiences feel the difference immediately.

---

### VII. Solo Sovereignty

This is not a feature we add later. It's built into the premise from day one, because the person came before the group and never stops existing outside it.

A songwriter in a group keeps producing for other artists, because that's part of who she already was before she ever joined anything. A solo artist performs under her own name, in her own right, because that identity predates the group and doesn't dissolve into it. A dancer performs on international stages in the discipline that shaped her long before anyone called her an idol. Someone carries a private tension into every room, unresolved and unhidden, because that tension is the actual source of what makes her work worth hearing.

The group is one of the places these people choose to exist. It was never the only one, and it was never meant to be.

This is what makes the groups stronger, not weaker. An audience that genuinely knows each member as a whole person doesn't see four people manufactured into a unit. They see four whole human beings who chose to make something together — and chose to keep making other things separately, because none of them were ever contained by the group in the first place.

---

### VIII. The Commercial Architecture

The traditional merch model is parasocial extraction dressed as product. ATMOS doesn't do that.

Because each group genuinely emerges from real people and real lifestyles, the commercial extension is natural rather than manufactured. We build premium lifestyle goods that the audience would want regardless of who made them — objects with genuine design merit that stand completely on their own.

**No group logos on products. No idol faces on retail items.** Everything is designed to be desirable to someone who has never heard the music. That's the test.

The lifestyle product is often first contact — encountered before the music, before the group, before any of it. It enters a world on its own terms. When someone who already finds the object compelling discovers the people behind it, the bridge to genuine curiosity is already built. This is not a secondary revenue stream. It's a parallel engine that operates independently of the release calendar and cannot be disrupted by chart performance.

---

### IX. The Lifecycle

An ATMOS group is a living entity. It matures in real time alongside its audience.

We reject the mandatory comeback loop. Releases happen when something real has occurred and is worth documenting.

```
Phase 1: The Origin      —  Baseline identity. Raw. The people, clearly.
Phase 2: The Expansion   —  Individual growth pulls outward. Solo work, side projects, friction.
Phase 3: The Legacy      —  High-event collective releases. The music earns its nostalgia.
```

As the people mature, the sound matures with them. The audience matures alongside them — which is the point. What begins as recognition becomes shared history.

---

### X. The Point

Every major entertainment company right now is asking the same question: how do we manufacture engagement more efficiently. The answers keep arriving at more platform, more technology, more scarcity engineering, more AI-personalized content, more infrastructure between the artist and the audience.

We're asking a different question. What if the audience doesn't need engagement manufactured for them? What if they're already capable of genuine curiosity, genuine attachment, genuine investment — and all they need is a genuine human being to direct it toward?

We believe the answer is yes. And we believe it starts smaller than most companies are willing to go — not with a concept, not with a group, not with a demographic. With one whole person at a time. Found, not built. Known, not packaged. Given room to be exactly what they already are, and trusted that it will be enough.

The groups are what happens when enough of those people find each other.

**When an audience connects with an ATMOS artist, they aren't buying into a commercial era. They're being recognized.** That's a different kind of attachment than fandom. It doesn't expire when the comeback cycle ends. It doesn't depend on staying current. It doesn't require maintenance.

It lasts because it was real to begin with.

---

*ATMOS. We cultivate atmosphere.*
