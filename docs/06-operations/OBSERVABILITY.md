# OBSERVABILITY.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Last Updated:** 2026-10-17  
**Change Control:** Material observability changes require operations review.

---

## 1. Purpose

This document defines the minimum observability contract for production operation.

The goal is to answer:

- Is the system available?
- Is it failing?
- Where is it failing?
- Is a critical workflow stuck?
- Did a release introduce a regression?

---

## 2. Observability Areas

The production system SHOULD provide an approved combination of:

- logs;
- error reporting;
- health checks;
- metrics;
- alerts.

Specific providers are not selected by this document.

---

## 3. Logs

Application logs SHOULD be:

- structured;
- timestamped;
- attributable to the relevant service/component;
- actionable;
- minimal.

Where practical, logs SHOULD include a request or correlation identifier.

---

## 4. Logging Restrictions

Logs MUST NOT contain:

- passwords;
- API keys;
- authentication tokens;
- session secrets;
- unnecessary Personal Data.

Logging MUST follow `/docs/03-security/LGPD.md`.

---

## 5. Errors

Unexpected production errors MUST remain observable.

Do not suppress exceptions merely to keep logs clean.

Public error responses SHOULD avoid exposing sensitive internals.

---

## 6. Health Checks

Critical runtime components MUST provide suitable health information.

Health checks SHOULD distinguish, where appropriate:

- application process health;
- readiness to receive traffic;
- critical dependency failure.

Health endpoints MUST NOT expose sensitive configuration.

---

## 7. Critical Workflows

At minimum, failures in the following workflows SHOULD be observable when implemented:

- Article publication;
- scheduled publication;
- media processing;
- database connectivity;
- cache invalidation/revalidation;
- approved external integrations.

---

## 8. Metrics

Initial useful operational metrics MAY include:

- request rate;
- error rate;
- response latency;
- cache hit ratio;
- application availability;
- job success/failure;
- database health.

Do not collect metrics without an operational purpose.

---

## 9. Alerts

Alerts SHOULD be:

- actionable;
- tied to meaningful failure conditions;
- limited enough to avoid alert fatigue.

Do not alert on every minor log event.

---

## 10. Public Performance

Production SHOULD measure enough real or synthetic data to detect major regressions in:

- LCP;
- INP;
- CLS;
- TTFB where applicable.

Performance observability MUST remain privacy-aware.

---

## 11. Deployment Correlation

Operational tooling SHOULD allow incidents to be correlated with recent deployments where practical.

A deployment SHOULD be identifiable by a version, commit or release identifier.

---

## 12. Retention

Log and telemetry retention MUST be explicit and proportional to operational need.

Long retention of Personal Data requires justification.

---

## 13. Provider Rule

Adding an observability provider requires review of:

- security;
- privacy;
- international data transfer;
- cost;
- retention;
- operational dependency.

Provider selection requires the applicable ADR/Task.

---

## 14. Approval

Current status:

`DRAFT`
