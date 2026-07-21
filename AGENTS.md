# AGENTS.md — Workspace Project Rules & Active Agent Skills

This document defines project-specific rules, design guidelines, and active skills available in this repository (`d:\Project Hub\k-label`). All AI agents working in this project MUST read and adhere to these guidelines at all times.

---

## Active Workspace Skills

The following specialized skills are installed under `.agents/skills/` and must be referenced for relevant tasks:

### 🎨 Design & Frontend
1. **Front-End Designer** (`.agents/skills/front-end-designer/SKILL.md`)
   - **Mandatory Application**: Use for all UI/UX design, Next.js page layouts, styling, typography, and visual components.
   - **Key Principles**: Brand-first opinionated design, generous breathable spacing, high first-impression impact, low cognitive load, balance between form and function.

### 🧪 Engineering, Architecture & Testing
2. **Test-Driven Development (TDD)** (`.agents/skills/tdd/SKILL.md`)
   - **Mandatory Application**: Use when developing backend logic, service layers, repositories, API endpoints, and payment queue workers.
   - **Key Principles**: Strict Red ➔ Green ➔ Refactor loop, testing public interfaces/seams, vertical slices (one test → one implementation).
3. **Domain Modeling** (`.agents/skills/domain-modeling/SKILL.md`)
   - Use for defining domain terminology, Ubiquitous Language, state models, and architectural decisions.
4. **Improve Codebase Architecture** (`.agents/skills/improve-codebase-architecture/SKILL.md`)
   - Use for refactoring code structure, decoupling modules, and improving technical debt.
5. **Code Review** (`.agents/skills/code-review/SKILL.md`)
   - Use for reviewing PRs, branches, and commits against standards and requirements.

### 📰 Headless CMS & Content
6. **Sanity Best Practices** (`.agents/skills/sanity/sanity-best-practices/SKILL.md`)
   - **Mandatory Application**: Use when defining Sanity Studio schemas, GROQ queries, type generation, Next.js live content fetching, and Portable Text rendering.

### 🐛 Debugging, Research & Tickets
7. **Diagnosing Bugs** (`.agents/skills/diagnosing-bugs/SKILL.md`)
   - Use for investigating failing tests, runtime bugs, or performance regressions.
8. **Research** (`.agents/skills/research/SKILL.md`)
   - Use for exploring documentation, API facts, or deep technical research.
9. **To Tickets** (`.agents/skills/to-tickets/SKILL.md`)
   - Use for breaking down requirements into structured issues/tickets.
10. **Resolving Merge Conflicts** (`.agents/skills/resolving-merge-conflicts/SKILL.md`)
    - Use for resolving git merge and rebase conflicts cleanly.

### 🗣️ Communication & Alignment
11. **Grilling / Grill-Me / Grill-With-Docs** (`.agents/skills/grilling/SKILL.md`)
    - Use when stress-testing ideas, plans, and architectural decisions through structured questioning.
12. **Prototype** (`.agents/skills/prototype/SKILL.md`)
    - Use for building quick throwaway prototypes to validate state models or UI behavior.
13. **Teach** (`.agents/skills/teach/SKILL.md`)
    - Use for explaining complex concepts, architecture, or code step-by-step.
14. **Handoff** (`.agents/skills/handoff/SKILL.md`)
    - Use for creating comprehensive handoff notes between development sessions or agents.
15. **Implement** (`.agents/skills/implement/SKILL.md`)
    - Use for executing approved technical implementation plans.
16. **Find Skills** (`.agents/skills/find-skills/SKILL.md`)
    - Use for discovering and integrating new agent skills when required.

---

## Core System Architecture & Guidelines

- **Specification**: Follow [SPEC.md](file:///d:/Project%20Hub/k-label/SPEC.md) for all architectural definitions, stack decisions, and brand vision.
- **Progress Tracking**: Update [PROGRESS.md](file:///d:/Project%20Hub/k-label/PROGRESS.md) continuously to record phase progress, test counts, and completed milestones.
- **Development Strategy**: Work sequentially via GitHub Issues and TDD (Vitest for Unit/Integration, Playwright for E2E).
