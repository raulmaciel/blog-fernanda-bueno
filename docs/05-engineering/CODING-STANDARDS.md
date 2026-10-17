# CODING-STANDARDS.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Last Updated:** 2026-10-17  
**Change Control:** Material coding-standard changes require human approval.

---

## 1. Purpose

This document defines implementation conventions for production code.

It does not replace `AGENTS.md`, architecture documents, or task specifications.

---

## 2. General Principles

Code MUST favor:

- simplicity;
- readability;
- explicit behavior;
- small units;
- reuse of existing code;
- minimal dependencies;
- testability.

Do not optimize for cleverness.

---

## 3. Existing Code First

Before creating new production code:

1. search for existing behavior;
2. inspect nearby implementation patterns;
3. reuse or extend existing code when adequate;
4. create new abstractions only when required.

Do not create parallel solutions to an already solved problem.

---

## 4. Scope Discipline

Implementation MUST remain inside the approved Task.

Do not mix:

- unrelated refactoring;
- dependency upgrades;
- formatting sweeps;
- architecture changes;
- unrelated bug fixes.

Out-of-scope findings should be reported separately.

---

## 5. TypeScript

Production code SHOULD use strict TypeScript.

Avoid:

- `any`;
- unsafe type assertions;
- `@ts-ignore`;
- broad non-null assertions;

unless justified and localized.

Types SHOULD represent domain concepts using canonical terminology from `GLOSSARY.md`.

---

## 6. Naming

Use canonical project terms.

Examples:

- `Article`, not `Post`;
- `Author`, not alternate synonyms;
- `Category`, not another equivalent domain term.

Names SHOULD describe behavior or domain meaning.

Avoid generic names such as:

- `Manager`;
- `Helper`;
- `Utils`;
- `DataService`;

unless they represent a genuinely coherent responsibility.

---

## 7. Functions and Modules

Functions SHOULD:

- have one clear responsibility;
- avoid hidden side effects;
- keep input/output explicit;
- remain small enough to understand locally.

Modules SHOULD represent meaningful behavior or domain boundaries.

Do not split code into additional files solely to satisfy arbitrary line-count rules.

---

## 8. Abstractions

Do not introduce abstractions without a current use case.

Prefer concrete implementation when only one behavior exists.

Introduce abstraction when it removes real duplication or provides a required boundary.

---

## 9. Comments

Comments SHOULD explain:

- why;
- constraints;
- non-obvious decisions;
- external requirements.

Do not write comments that merely restate the code.

---

## 10. Error Handling

Errors MUST NOT be silently swallowed.

Avoid broad patterns such as:

```ts
try {
  ...
} catch {
  return null
}
```

unless `null` is an explicitly defined domain result.

Unexpected failures SHOULD remain observable.

---

## 11. Validation

Untrusted input MUST be validated at the system boundary.

Validation SHOULD occur as close as practical to where untrusted data enters the application.

Client-side validation does not replace server-side validation.

---

## 12. Security

Implementation MUST follow:

`/docs/03-security/SECURITY-BASELINE.md`

Do not bypass security controls for convenience.

---

## 13. Database

Schema changes MUST use approved migrations.

Do not:

- alter production schema manually;
- create speculative columns;
- duplicate stored data without reason;
- store normal media binaries in PostgreSQL.

Indexes require an actual query/access reason.

---

## 14. Frontend

The Public Website SHOULD prefer:

- semantic HTML;
- CSS;
- server-rendered content;
- progressive enhancement.

Do not introduce client-side JavaScript when HTML/CSS can satisfy the requirement.

Astro hydration MUST be intentional.

---

## 15. CMS

Do not rebuild Payload capabilities already sufficient for the requirement.

Custom CMS behavior requires an actual approved product need.

---

## 16. Dependencies

Before adding a dependency:

1. verify existing project capabilities;
2. verify framework capabilities;
3. confirm an approved Task requires the behavior.

New production dependencies require explicit approval when not already authorized by the Task.

---

## 17. Configuration

Do not create environment variables for values that are not environment-dependent.

New environment variables MUST be documented.

Secrets MUST remain outside source control.

---

## 18. Logging

Logs SHOULD be structured and actionable.

Do not log:

- passwords;
- tokens;
- secrets;
- unnecessary Personal Data.

---

## 19. Generated Code

Do not manually edit generated files unless the repository explicitly treats them as editable source.

Modify the generator or source definition instead.

---

## 20. Refactoring

Refactoring during a Task is allowed when:

- required for safe implementation;
- directly related to touched code;
- behavior remains unchanged;
- tests protect the change.

Broad cleanup belongs in a separate Task.

---

## 21. Formatting and Linting

Formatting and linting MUST be automated.

Do not manually create style conventions that conflict with project tooling.

The formatter/linter configuration is authoritative for mechanical style.

---

## 22. Rule of Minimum Change

Prefer the smallest change that correctly satisfies:

- the requirement;
- architecture;
- tests;
- security;
- privacy;
- SEO constraints.

---

## 23. Approval

Current status:

`DRAFT`
