# NFR.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Owner:** Product Owner  
**Last Updated:** 2026-10-17  
**Change Control:** Human approval required.

---

# 1. Purpose

This document defines measurable or enforceable quality constraints for the News Platform.

It describes **how well the system must operate**, rather than individual product features.

---

# 2. Priority

For the Public Website, priorities are:

1. correctness;
2. security and privacy;
3. availability;
4. performance;
5. accessibility;
6. SEO correctness;
7. maintainability.

A performance optimization MUST NOT intentionally compromise correctness, security or privacy.

---

# 3. Performance

### NFR-PERF-001 — Core Web Vitals

The Public Website SHOULD achieve, at the 75th percentile of real-user measurements where sufficient data exists:

- LCP ≤ 2.5 seconds;
- INP ≤ 200 milliseconds;
- CLS ≤ 0.1.

### NFR-PERF-002 — JavaScript minimization

Public editorial pages MUST avoid unnecessary client-side JavaScript.

Server-rendered HTML and CSS SHOULD be preferred when they satisfy the requirement.

### NFR-PERF-003 — Article JS budget

Project-owned JavaScript for a normal Article page SHOULD remain below **60 KB compressed** unless an approved requirement justifies exceeding the budget.

Third-party advertising and analytics MUST be measured separately.

### NFR-PERF-004 — Layout stability

Known image, embed and advertising dimensions SHOULD reserve layout space whenever technically possible.

### NFR-PERF-005 — Media efficiency

Public images MUST use appropriately sized delivery variants.

The system SHOULD support modern efficient image formats where compatible with the approved architecture.

### NFR-PERF-006 — Cacheability

Public published content SHOULD be designed for effective CDN caching where correctness permits.

---

# 4. Availability and Reliability

### NFR-REL-001 — Production availability

The initial production target SHOULD be at least **99.9% monthly availability** for the Public Website, excluding approved maintenance windows.

### NFR-REL-002 — Graceful failure

Failure of a non-critical third-party integration SHOULD NOT make readable editorial content unavailable when technically avoidable.

### NFR-REL-003 — No silent critical failures

Critical background operations MUST NOT fail silently.

### NFR-REL-004 — Scheduled publication

Scheduled publication MUST provide observable success or failure status.

---

# 5. Scalability

### NFR-SCALE-001 — Horizontal traffic absorption

Public traffic growth SHOULD primarily be absorbed through CDN/cache mechanisms before requiring proportional application/database scaling.

### NFR-SCALE-002 — No speculative distributed architecture

The system MUST NOT introduce distributed infrastructure solely for hypothetical future scale.

Scaling changes require demonstrated need and architecture review.

---

# 6. Security

### NFR-SEC-001 — Security baseline

Implementation MUST comply with:

`/docs/03-security/SECURITY-BASELINE.md`

### NFR-SEC-002 — Authorization

Protected operations MUST enforce authorization server-side.

Client-side hiding of controls is not sufficient authorization.

### NFR-SEC-003 — Secrets

Secrets MUST NOT be stored in source control.

### NFR-SEC-004 — Transport security

Production traffic carrying authenticated or personal information MUST use secure transport.

### NFR-SEC-005 — Input handling

Untrusted input MUST be validated according to context.

### NFR-SEC-006 — File uploads

Uploaded files MUST be validated according to the approved media security policy.

### NFR-SEC-007 — Dependency security

Production dependencies MUST be included in automated vulnerability monitoring or equivalent approved controls.

### NFR-SEC-008 — Administrative protection

Administrative authentication MUST support stronger security controls than anonymous public access.

Detailed requirements belong in the security documentation.

---

# 7. Privacy and LGPD

### NFR-PRIV-001 — Data minimization

The platform MUST avoid collecting Personal Data that is not required by an approved purpose.

### NFR-PRIV-002 — Optional tracking

Optional tracking MUST respect the approved privacy/legal basis model.

### NFR-PRIV-003 — Sensitive logging

Logs MUST NOT contain secrets or unnecessary Personal Data.

### NFR-PRIV-004 — Third-party processors

New third-party systems processing Personal Data require privacy impact review.

### NFR-PRIV-005 — Retention

Personal Data retention MUST follow documented retention requirements where applicable.

Authoritative privacy rules belong in:

`/docs/03-security/LGPD.md`

---

# 8. SEO

### NFR-SEO-001 — Crawlability

Approved public editorial content MUST be technically crawlable unless explicitly configured otherwise.

### NFR-SEO-002 — Stable URLs

Previously published URLs MUST NOT be changed without approved redirect behavior.

### NFR-SEO-003 — Metadata consistency

Visible publication information and machine-readable metadata MUST NOT intentionally contradict each other.

### NFR-SEO-004 — Preview isolation

Draft and preview environments MUST NOT become publicly indexable.

### NFR-SEO-005 — Structured data validity

Generated structured data SHOULD pass applicable validation for the approved schema.

---

# 9. Accessibility

### NFR-A11Y-001 — Target

The Public Website SHOULD target **WCAG 2.2 AA** for applicable reader-facing interfaces.

### NFR-A11Y-002 — Keyboard access

Core reader-facing interactions MUST remain usable by keyboard where applicable.

### NFR-A11Y-003 — Semantic HTML

Public content SHOULD use semantic HTML instead of unnecessary scripted equivalents.

### NFR-A11Y-004 — Images

Editorial images MUST support alternative text where required.

---

# 10. Compatibility

### NFR-COMP-001 — Responsive design

The Public Website MUST support mobile and desktop layouts.

### NFR-COMP-002 — Browser strategy

The product SHOULD support current major evergreen browsers.

Exact compatibility may be refined when production analytics exist.

### NFR-COMP-003 — Progressive enhancement

Core article readability SHOULD remain available even when non-critical client-side JavaScript fails.

---

# 11. Maintainability

### NFR-MAIN-001 — Existing code first

Existing correct functionality MUST be reused or extended before creating parallel implementations.

### NFR-MAIN-002 — Module boundaries

Implementation MUST respect architecture boundaries defined in the SAD and approved ADRs.

### NFR-MAIN-003 — No speculative abstraction

New abstractions MUST have a current approved use case.

### NFR-MAIN-004 — Documentation

Architecturally significant decisions MUST be documented through the approved ADR process.

### NFR-MAIN-005 — Type safety

Production TypeScript SHOULD avoid unjustified unsafe type bypasses.

---

# 12. Testability

### NFR-TEST-001 — Automated validation

Production changes MUST pass the validation required by `TEST-STRATEGY.md`.

### NFR-TEST-002 — Regression tests

Bug fixes SHOULD include a regression test when practical.

### NFR-TEST-003 — Critical business logic

Critical editorial, permission and publication logic MUST have automated test coverage.

### NFR-TEST-004 — CI

Integration-ready commits MUST pass the approved CI pipeline.

---

# 13. Observability

### NFR-OBS-001 — Structured logs

Application logs SHOULD use structured machine-readable fields.

### NFR-OBS-002 — Error tracking

Unexpected production application errors MUST be observable.

### NFR-OBS-003 — Health checks

Critical runtime components MUST expose or provide suitable health information.

### NFR-OBS-004 — Privacy-aware observability

Observability MUST comply with the privacy and security requirements.

---

# 14. Backup and Recovery

### NFR-DR-001 — Database backups

Production persistent data MUST have automated backups.

### NFR-DR-002 — Recovery testing

The backup strategy MUST include periodic restoration verification.

### NFR-DR-003 — Initial RPO

Initial target:

`RPO <= 1 hour`

unless later architecture defines a stricter requirement.

### NFR-DR-004 — Initial RTO

Initial target:

`RTO <= 4 hours`

unless later business requirements define a stricter requirement.

---

# 15. Auditability

### NFR-AUD-001 — Traceability

Security-sensitive and editorially significant actions MUST be traceable where defined by approved requirements.

### NFR-AUD-002 — Integrity

Ordinary editorial users MUST NOT be able to arbitrarily modify historical audit information.

---

# 16. Content Integrity

### NFR-CONT-001 — Original publication date

Ordinary content edits MUST NOT silently replace the original publication date.

### NFR-CONT-002 — Version preservation

Published-content revisions MUST preserve appropriate historical traceability.

### NFR-CONT-003 — Editorial/commercial distinction

Advertising and Sponsored Content MUST remain distinguishable from ordinary editorial content.

---

# 17. Deployment

### NFR-DEP-001 — Environments

The project MUST distinguish at minimum:

- local;
- staging;
- production.

### NFR-DEP-002 — Staging isolation

Staging MUST NOT accidentally become publicly indexed as production content.

### NFR-DEP-003 — Reproducibility

Production deployment SHOULD be reproducible from version-controlled application and infrastructure definitions where applicable.

---

# 18. Quality Gate

A Task that changes production behavior is not complete until applicable requirements from this document have been considered.

A Task MAY document:

```text
NFR Impact:
- Performance: none
- Security: reviewed
- LGPD: none
- SEO: reviewed
```

This is preferable to copying these requirements into every Task.

---

# 19. Requirement Changes

Numeric targets may evolve with real production measurements.

Changes MUST be explicit.

The implementation agent MUST NOT silently relax an NFR because meeting it is inconvenient.

---

# 20. Approval

Current status:

`DRAFT`

After review and human approval:

`Status: APPROVED`