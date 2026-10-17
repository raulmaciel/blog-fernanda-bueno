# TEST-STRATEGY.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Last Updated:** 2026-10-17  
**Change Control:** Material test-policy changes require human approval.

---

## 1. Purpose

This document defines how the News Platform verifies behavior and prevents regressions.

Tests exist to protect behavior, not to maximize coverage numbers.

---

## 2. Principles

Testing SHOULD favor:

- deterministic behavior;
- fast feedback;
- meaningful assertions;
- critical-path protection;
- regression safety.

Do not test framework internals.

---

## 3. Test Levels

The project uses:

1. Unit Tests
2. Integration Tests
3. End-to-End Tests
4. Static/Build Validation
5. Security Validation
6. Performance/SEO Validation where applicable

Not every Task requires every level.

---

## 4. Unit Tests

Use for isolated domain logic such as:

- validation;
- slug behavior;
- permission logic;
- date rules;
- transformation logic;
- ad-placement rules.

Unit tests SHOULD be fast and deterministic.

---

## 5. Integration Tests

Use where multiple application boundaries interact.

Examples:

- CMS ↔ PostgreSQL;
- publishing workflow;
- migration behavior;
- cache invalidation hooks;
- media metadata persistence;
- redirect behavior.

---

## 6. End-to-End Tests

Use for critical user journeys.

Initial critical journeys include:

- administrative login;
- create Article;
- save Draft;
- preview Article;
- review/approve Article;
- publish Article;
- scheduled publication where implemented;
- read published Article publicly.

Do not create E2E tests for every minor presentation detail.

---

## 7. Regression Tests

Bug fixes SHOULD first reproduce the defect with a failing test when practical.

Expected flow:

`RED → GREEN → REFACTOR`

Do not modify a correct test merely to make incorrect implementation pass.

---

## 8. Authorization Tests

Permissions are critical behavior.

Tests MUST cover important negative cases such as:

- unauthorized publication;
- unauthorized user management;
- unauthorized draft access;
- privilege escalation.

---

## 9. Security Tests

Security-sensitive Tasks SHOULD test applicable protections.

Examples:

- validation failures;
- unsafe redirects;
- access control;
- upload restrictions;
- preview authorization.

Security fixes SHOULD include regression coverage when practical.

---

## 10. SEO Tests

SEO-sensitive functionality SHOULD validate applicable behavior:

- canonical URL;
- robots directives;
- structured data;
- sitemap inclusion;
- News Sitemap inclusion;
- redirect behavior;
- preview isolation.

---

## 11. LGPD Tests

Privacy-sensitive behavior SHOULD test applicable rules such as:

- optional scripts blocked before required consent;
- preference changes;
- withdrawal behavior;
- consent-dependent integrations.

---

## 12. Performance Validation

Performance-sensitive changes SHOULD verify that they do not violate approved budgets.

Public frontend changes affecting rendering or JavaScript SHOULD receive appropriate performance review.

---

## 13. Test Data

Tests MUST NOT depend on production Personal Data.

Use:

- factories;
- fixtures;
- generated test data;
- explicit mocks.

Test data SHOULD remain minimal and understandable.

---

## 14. External Services

External services SHOULD be mocked or stubbed in fast automated tests when direct calls would make tests:

- unreliable;
- slow;
- costly;
- destructive.

Critical integration behavior MAY require separate integration tests against approved test environments.

---

## 15. Test Independence

Tests SHOULD NOT depend on execution order.

Tests MUST clean up or isolate their state.

---

## 16. Coverage

Coverage is a diagnostic signal, not the target itself.

No change should add meaningless tests only to increase a percentage.

Critical business logic SHOULD have strong behavioral coverage.

---

## 17. CI Test Order

Preferred validation order:

1. formatting/lint;
2. typecheck;
3. fast unit tests;
4. integration tests;
5. security/static checks;
6. build;
7. selected E2E/performance checks.

Exact CI configuration belongs to implementation Tasks.

---

## 18. Task Validation

Every approved Task SHOULD define the validation required for that change.

The agent MUST NOT claim success unless required validation actually ran successfully.

If validation could not run, report it explicitly.

---

## 19. Approval

Current status:

`DRAFT`
