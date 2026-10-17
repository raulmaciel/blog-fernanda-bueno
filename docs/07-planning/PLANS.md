# PLANS.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Last Updated:** 2026-10-17  
**Change Control:** Planning-governance changes require human approval.

---

## 1. Purpose

This document defines how implementation Tasks and ExecPlans are created and approved.

It exists to prevent the implementation agent from silently expanding scope or redesigning architecture during execution.

---

## 2. Planning Hierarchy

```text
ROADMAP
   ↓
BACKLOG ITEM
   ↓
TASK
   ↓
EXECPLAN (only when required)
   ↓
IMPLEMENTATION
```

Roadmap and Backlog do not authorize production-code changes.

Only an approved Task does.

---

## 3. Task Creation

A Task MAY be proposed by the human or the agent.

Agent-created Tasks MUST begin with:

`Status: DRAFT`

The agent MUST NOT approve its own Task.

Only explicit human approval may change:

`DRAFT → APPROVED`

---

## 4. Task File Location

Tasks live in:

`/docs/07-planning/tasks/`

Recommended naming:

```text
TASK-001-repository-workspace.md
TASK-002-astro-foundation.md
TASK-003-payload-foundation.md
```

Task IDs MUST remain unique.

---

## 5. Required Task Structure

Every implementation Task SHOULD contain:

```text
# TASK-XXX — <Title>

Status: DRAFT

## Purpose

## Requirements

## Relevant Documentation

## Existing Implementation to Reuse

## Allowed Changes

## Forbidden Changes

## Acceptance Criteria

## Required Tests

## NFR Impact

## Security Impact

## LGPD Impact

## SEO Impact

## Performance Impact

## Definition of Done
```

Sections MAY be concise when not applicable.

---

## 6. Existing-Code Investigation

Before finalizing a Task that modifies existing functionality, inspect relevant code first.

The Task SHOULD identify existing implementation that must be reused or extended where known.

Do not write a Task assuming new code is necessary without checking.

---

## 7. Allowed Changes

A Task SHOULD identify expected change boundaries when useful.

Example:

```text
Allowed:
- apps/web/src/components/ArticleHero.astro
- related tests
```

This does not mean every listed file must change.

---

## 8. Forbidden Changes

Use this section when the Task must explicitly protect:

- architecture;
- public APIs;
- database schema;
- dependencies;
- URL behavior;
- security controls;
- unrelated modules.

Example:

```text
Forbidden:
- new dependency
- schema changes
- changing public URL format
```

---

## 9. Acceptance Criteria

Acceptance Criteria MUST describe observable outcomes.

Preferred format:

```text
AC-01 ...
AC-02 ...
AC-03 ...
```

Do not use vague criteria such as:

- "works well";
- "is scalable";
- "is professional".

---

## 10. ExecPlan Requirement

An ExecPlan is REQUIRED when a Task:

- spans multiple architectural boundaries;
- combines schema migration with broad application behavior;
- changes authentication or authorization architecture;
- introduces a new external provider;
- changes critical publishing workflow;
- requires a significant migration;
- has multiple risky deployment steps;
- is too large to implement safely as one simple change.

An ExecPlan is NOT required for every small Task.

---

## 11. ExecPlan Location

When required, create:

```text
/docs/07-planning/tasks/TASK-XXX-PLAN.md
```

The plan belongs to its Task.

---

## 12. ExecPlan Structure

A plan SHOULD contain:

```text
# TASK-XXX ExecPlan

Status: DRAFT

## Objective
## Current State
## Reuse
## Proposed Steps
## Validation
## Risks
## Rollback
## Open Questions
```

Avoid implementation essays.

The plan should be only detailed enough to make execution predictable.

---

## 13. ExecPlan Approval

When a Task requires an ExecPlan:

- Task approval does NOT automatically approve the plan unless explicitly stated;
- the plan begins as `DRAFT`;
- implementation begins only after required approval.

The agent MUST NOT approve its own ExecPlan.

---

## 14. Plan Mismatch

During implementation, if repository evidence contradicts the approved Task or ExecPlan:

STOP.

Return:

`PLAN MISMATCH`

with:

- discovered fact;
- evidence;
- affected requirement/plan;
- smallest viable options;
- recommendation.

Do not silently adapt the plan.

---

## 15. Architecture Change

If solving a Task requires changing approved architecture:

STOP.

Use:

`CHANGE REQUEST REQUIRED`

and propose the required ADR.

Implementation MUST wait for architecture approval.

---

## 16. Scope Discovery

A useful issue discovered during implementation but outside the active Task MUST NOT be implemented automatically.

Report it as:

`BACKLOG CANDIDATE`

The human decides whether it becomes backlog work.

---

## 17. Task Size

Prefer Tasks that can be:

- understood locally;
- implemented coherently;
- validated independently;
- reverted reasonably.

If a Task contains several unrelated outcomes, split it before approval.

---

## 18. Task Completion

Implementation follows:

```text
APPROVED
   ↓
IN_PROGRESS
   ↓
VERIFIED
   ↓
DONE
```

`VERIFIED` requires successful applicable validation.

`DONE` requires the approved completion process.

---

## 19. Documentation Updates

The agent MAY update documentation during an approved Task only when:

- the Task explicitly changes that contract; or
- implementation reveals durable knowledge that the relevant documentation is designed to contain.

Do not rewrite unrelated documentation.

---

## 20. Planning Is Not Permission

The agent MUST NOT interpret:

- ROADMAP;
- BACKLOG;
- ExecPlan proposal;
- architectural possibility;

as authorization to implement.

Only the currently approved Task defines execution scope.

---

## 21. First Task Rule

After this planning layer is approved, the first development action SHOULD be:

1. select the first `READY_FOR_TASK` backlog item;
2. ask the Codex to propose `TASK-001.md`;
3. review the proposed Task;
4. approve or revise it;
5. only then allow implementation.

---

## 22. Approval

Current status:

`DRAFT`
