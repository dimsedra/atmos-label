# AGENTS.md — Workspace Project Rules & Active Agent Skills

This document defines project-specific rules, design guidelines, and active skills available in this repository (`d:\Project Hub\k-label`). All AI agents working in this project MUST read and adhere to these guidelines at all times.

---

## Active Workspace Skills

The following specialized skills are installed under `.agents/skills/` and must be referenced for relevant tasks:

1. **Front-End Designer** (`.agents/skills/front-end-designer/SKILL.md`)
   - **Mandatory Application**: Use for all UI/UX design, Next.js page layouts, styling, typography, and visual components.
   - **Key Principles**: Brand-first opinionated design, generous breathable spacing, high first-impression impact, low cognitive load, and balance between form and function.

2. **Test-Driven Development (TDD)** (`.agents/skills/tdd/SKILL.md`)
   - **Mandatory Application**: Use when developing backend logic, service layers, repositories, API endpoints, and payment queue workers.
   - **Key Principles**: Strict Red ➔ Green ➔ Refactor loop, testing public interfaces/seams, vertical slices (one test → one implementation), avoiding tautological tests or implementation coupling.

3. **Sanity Best Practices** (`.agents/skills/sanity/sanity-best-practices/SKILL.md`)
   - **Mandatory Application**: Use when defining Sanity Studio schemas, GROQ queries, type generation, Next.js live content fetching, and Portable Text rendering.
   - **Key Principles**: Use `defineType`/`defineField`, let Sanity generate natural `_id` values (except singletons), and resolve relationships via GROQ lookups.

4. **Find Skills** (`.agents/skills/find-skills/SKILL.md`)
   - Use for discovering and integrating new agent skills when required.

---

## Core System Architecture & Guidelines

- **Specification**: Follow [SPEC.md](file:///d:/Project%20Hub/k-label/SPEC.md) for all architectural definitions, stack decisions, and brand vision.
- **Progress Tracking**: Update [PROGRESS.md](file:///d:/Project%20Hub/k-label/PROGRESS.md) continuously to record phase progress, test counts, and completed milestones.
- **Development Strategy**: Work sequentially via GitHub Issues and TDD (Vitest for Unit/Integration, Playwright for E2E).
