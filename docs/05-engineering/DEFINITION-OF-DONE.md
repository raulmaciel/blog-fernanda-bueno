# DEFINITION-OF-DONE.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Last Updated:** 2026-10-17  
**Change Control:** Human approval required.

---

## 1. Purpose

This document defines the minimum conditions for an implementation Task to be considered complete.

"Code written" is not equivalent to "Done".

---

## 2. Requirement

A Task is complete only when the approved requirement and Acceptance Criteria are satisfied.

No Acceptance Criterion may be silently weakened.

---

## 3. Scope

The implementation MUST remain within Task scope.

Unrelated changes MUST NOT be included.

---

## 4. Existing Code Reuse

The implementation MUST demonstrate that existing applicable mechanisms were reused or intentionally extended where possible.

Unnecessary duplicate functionality means the Task is not Done.

---

## 5. Architecture

The implementation MUST comply with:

- SAD;
- approved ADRs;
- relevant architecture boundaries.

If an architecture change was required, the corresponding ADR MUST be approved before implementation is considered complete.

---

## 6. Code Quality

Applicable production code MUST:

- follow `CODING-STANDARDS.md`;
- use canonical terminology;
- avoid unjustified abstractions;
- avoid known dead code;
- avoid unrelated duplication introduced by the Task.

---

## 7. Tests

Applicable automated tests MUST:

- exist;
- pass;
- protect new behavior;
- include regression coverage for bugs where practical.

Required Task validation MUST actually be executed.

---

## 8. Static Validation

Applicable checks MUST pass:

- formatting;
- linting;
- typecheck;
- build.

Exact commands are defined by repository tooling.

---

## 9. Security

Security impact MUST be reviewed.

A Task affecting a security-sensitive boundary MUST comply with:

`/docs/03-security/SECURITY-BASELINE.md`

Known vulnerabilities introduced by the Task MUST be resolved before completion.

---

## 10. LGPD

Privacy impact MUST be reviewed.

If the Task introduces new Personal Data, tracking, processor, cookie or transfer:

`LGPD IMPACT`

must have been resolved before the Task is Done.

---

## 11. SEO

SEO impact MUST be reviewed for public-content changes.

The Task MUST NOT knowingly break:

- canonical behavior;
- public URLs;
- structured data;
- sitemap behavior;
- robots rules;
- publication dates.

---

## 12. Performance

Public Website changes MUST preserve approved performance constraints.

Meaningful client-side JavaScript increases require justification.

Performance regressions caused by the Task must be resolved or explicitly approved.

---

## 13. Accessibility

Reader-facing UI changes SHOULD meet applicable accessibility requirements.

Critical interaction paths MUST remain usable according to approved NFRs.

---

## 14. Observability

Important new failure paths MUST be observable where required.

Do not introduce silent critical failures.

---

## 15. Database

If persistent schema changes are required:

- migration exists;
- migration is validated;
- existing data impact is considered;
- rollback/compatibility is considered where practical.

---

## 16. Documentation

Documentation MUST be updated only where the Task changes an approved contract or introduces knowledge required for future maintenance.

Do not update documentation merely to restate implementation details already obvious from code.

---

## 17. No Known Task-Caused Failure

The Task MUST NOT be marked Done with a known failure caused by its implementation.

If a required check cannot run, the Task remains unverified unless the human explicitly accepts the limitation.

---

## 18. Completion Report

The implementation agent MUST report:

- Implemented
- Reused
- Created
- Tests executed
- Architecture impact
- Security impact
- LGPD impact
- SEO impact
- Performance impact
- Remaining issues

Claims MUST reflect actual execution.

---

## 19. Status Transition

Recommended completion flow:

```text
IN_PROGRESS
    ↓
VERIFIED
    ↓
DONE
```

`VERIFIED` means required validation succeeded.

`DONE` means the human accepts the completed Task or the approved workflow explicitly allows automatic closure.

---

## 20. Definition

A Task is Done when:

> the smallest correct implementation satisfying the approved requirement is integrated with passing validation and without violating architecture, security, privacy, SEO, performance or scope constraints.

---

## 21. Approval

Current status:

`DRAFT`
