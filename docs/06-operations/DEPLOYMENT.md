# DEPLOYMENT.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Last Updated:** 2026-10-17  
**Change Control:** Material deployment changes require architecture/operations approval.

---

## 1. Purpose

This document defines deployment principles and release requirements.

It does not select a hosting provider, CI provider, container platform or cloud vendor.

Provider-specific decisions require approved ADRs.

---

## 2. Environments

The project MUST distinguish at minimum:

- local;
- staging;
- production.

Production configuration and secrets MUST remain isolated from non-production environments.

---

## 3. Deployment Source

Production deployment MUST originate from version-controlled code and approved configuration.

Manual production changes outside the approved deployment process SHOULD be avoided.

---

## 4. Pre-Deployment Gate

Before production deployment, applicable validation MUST pass:

- formatting/lint;
- typecheck;
- tests;
- build;
- security checks;
- required migration validation.

A known Task-caused failure MUST block deployment unless explicitly accepted by the human owner.

---

## 5. Reproducibility

Deployment SHOULD be reproducible from documented source and configuration.

The production environment MUST NOT depend on undocumented manual steps.

---

## 6. Database Migrations

Database migrations MUST be:

- version controlled;
- reviewed with the application change that requires them;
- validated before production use;
- ordered safely relative to application deployment.

Breaking schema changes SHOULD use a compatibility strategy where practical.

---

## 7. Secrets

Production secrets MUST:

- remain outside source control;
- use an approved secret-management mechanism;
- be scoped using least privilege;
- be rotatable.

Secrets MUST NOT be copied into documentation.

---

## 8. Staging

Staging SHOULD resemble production sufficiently to validate release behavior.

Staging MUST:

- use non-production secrets;
- avoid accidental search indexing;
- avoid unintended access to production data.

Production Personal Data MUST NOT be copied casually into staging.

---

## 9. Release Strategy

Releases SHOULD be:

- small;
- reversible;
- observable;
- independently verifiable.

Large unrelated changes SHOULD NOT be bundled into a single release.

---

## 10. Rollback

Every production release SHOULD have a known rollback or recovery path.

Rollback planning MUST consider:

- application code;
- database migrations;
- configuration;
- cached content.

A database rollback MUST NOT be assumed safe unless explicitly validated.

---

## 11. Post-Deployment Verification

After deployment, verify applicable critical behavior such as:

- Public Website availability;
- CMS availability;
- database connectivity;
- Article read path;
- critical publishing workflow;
- health checks;
- error rate.

---

## 12. Production Changes

Emergency production changes SHOULD be minimized.

If an emergency change is required:

1. contain the incident;
2. record the change;
3. bring the change back into version control;
4. validate afterward.

---

## 13. Failed Deployment

A failed deployment MUST:

- be observable;
- avoid reporting success;
- trigger rollback or recovery when required;
- preserve diagnostic information.

---

## 14. Deployment Authorization

Provider-specific deployment implementation begins only after applicable ADRs and Tasks are approved.

Do not assume:

- AWS;
- Cloudflare;
- Docker;
- Kubernetes;
- GitHub Actions;
- another specific provider;

unless approved elsewhere.

---

## 15. Approval

Current status:

`DRAFT`
