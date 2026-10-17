# GIT-WORKFLOW.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Last Updated:** 2026-10-17  
**Change Control:** Workflow changes require human approval.

---

## 1. Purpose

This document defines Git practices for safe AI-assisted development.

The primary goal is small, reversible, production-ready changes.

---

## 2. Main Principle

Every integration-ready commit SHOULD leave the repository in a valid state.

Do not intentionally commit broken intermediate states to the main branch.

---

## 3. Branches

`main` represents the integration-ready codebase.

Normal work SHOULD occur on a short-lived branch.

Recommended naming:

```text
feat/TASK-031-article-model
fix/TASK-087-slug-redirect
refactor/TASK-102-media-reuse
docs/TASK-010-sad
```

The Task ID SHOULD be included when one exists.

---

## 4. One Task, Focused Change

A branch SHOULD correspond to one approved Task or one explicitly approved subtask.

Avoid combining unrelated work.

---

## 5. Before Editing

Before making changes:

- inspect repository status;
- preserve unrelated user changes;
- understand the relevant existing implementation;
- confirm the approved Task.

Do not discard unrelated work.

---

## 6. Commits

Commits SHOULD be:

- small;
- coherent;
- reviewable;
- reversible.

A commit SHOULD represent one meaningful step.

Avoid giant commits mixing feature work and cleanup.

---

## 7. Commit Messages

Preferred format:

```text
<type>(<scope>): <summary>
```

Suggested types:

- `feat`
- `fix`
- `refactor`
- `test`
- `docs`
- `chore`
- `security`

Example:

```text
fix(article): preserve old slug redirect
```

Task ID MAY be included in the body or summary.

---

## 8. Small Releases

Prefer incremental delivery.

A large Task MAY be divided into independently valid commits.

Each commit SHOULD pass relevant validation.

---

## 9. Refactoring Commits

Mechanical refactoring SHOULD be separated from behavior changes when doing so materially improves reviewability.

Do not hide behavior changes inside a refactor commit.

---

## 10. Generated Changes

Do not include unrelated generated-file changes.

Generated artifacts MUST correspond to the source change that produced them.

---

## 11. Dependency Changes

Dependency updates SHOULD be isolated from unrelated feature work unless the dependency change is required by the Task.

---

## 12. Database Migrations

A migration SHOULD be committed together with the application change that requires it.

Do not commit unused speculative migrations.

---

## 13. Validation Before Integration

Before integration, run the validation required by:

- the Task;
- `TEST-STRATEGY.md`;
- `DEFINITION-OF-DONE.md`.

Do not integrate known Task-caused failures.

---

## 14. History Safety

Do not rewrite shared history without explicit approval.

Do not force-push shared branches casually.

---

## 15. Revertability

Changes SHOULD be designed so that a problematic release can be reverted safely.

Database changes SHOULD consider rollback and compatibility where practical.

---

## 16. AI Agent Rules

The agent MUST NOT:

- commit unrelated user changes;
- reset or discard work it did not create;
- rewrite history without instruction;
- create commits claiming validation that was not executed.

The agent SHOULD report exactly what changed.

---

## 17. Main Branch

`main` SHOULD remain deployable or integration-ready.

Direct commits to `main` MAY be restricted by repository settings.

Exact branch protection is an operational configuration decision.

---

## 18. Approval

Current status:

`DRAFT`
