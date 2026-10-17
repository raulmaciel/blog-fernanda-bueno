# BACKUP-DR.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Last Updated:** 2026-10-17  
**Change Control:** Recovery-objective changes require human approval.

---

## 1. Purpose

This document defines backup and disaster-recovery requirements.

A backup is not considered reliable until restoration has been tested.

---

## 2. Initial Recovery Objectives

Initial targets:

- **RPO:** <= 1 hour
- **RTO:** <= 4 hours

These targets may be revised through approved requirements.

---

## 3. Protected Data

Recovery planning MUST cover, where applicable:

- PostgreSQL data;
- media objects;
- critical production configuration;
- infrastructure definitions;
- application source code.

Source code version control is not a substitute for database/media backups.

---

## 4. Database Backup

Production PostgreSQL MUST have automated backups.

The chosen backup mechanism SHOULD support the approved RPO.

Where supported and operationally justified, point-in-time recovery SHOULD be preferred.

---

## 5. Media Recovery

Object Storage MUST have an approved protection/recovery strategy.

Possible mechanisms may include:

- versioning;
- replication;
- backup;
- provider-native recovery.

The final mechanism requires approved architecture.

---

## 6. Backup Access

Backup access is privileged.

Backup systems MUST:

- restrict access;
- protect credentials;
- use encryption where appropriate;
- follow least privilege.

---

## 7. Restore Testing

Restore procedures MUST be tested periodically.

A successful backup job alone does not prove recoverability.

Tests SHOULD verify:

- data can be restored;
- restored data is usable;
- required dependencies are known;
- recovery time is understood.

---

## 8. Recovery Scenarios

The recovery plan SHOULD consider at minimum:

- accidental data deletion;
- failed migration;
- database corruption;
- application deployment failure;
- media loss;
- provider/service outage;
- credential compromise.

---

## 9. Failed Migration

If a migration causes production failure:

- stop further rollout;
- assess data compatibility;
- use the validated rollback/recovery path;
- do not improvise destructive database changes.

---

## 10. Backup Retention

Backup retention MUST be documented after provider/architecture selection.

Retention MUST balance:

- recovery needs;
- privacy;
- cost;
- legal/operational requirements.

---

## 11. Disaster Declaration

A disaster is a failure that cannot be resolved through normal application rollback or routine incident recovery within acceptable operational limits.

Disaster recovery MAY require:

- restoring persistent data;
- redeploying infrastructure;
- switching providers or regions where explicitly designed.

Do not assume multi-region failover exists unless it has been implemented and tested.

---

## 12. Recovery Priority

Initial priority:

1. protect integrity of persistent data;
2. restore database availability;
3. restore CMS/core publishing capability;
4. restore Public Website;
5. restore non-critical integrations.

Actual incident context may change execution order.

---

## 13. Documentation Rule

Provider-specific backup commands and recovery steps belong in `RUNBOOK.md` only after they are implemented and validated.

Do not document hypothetical recovery commands as authoritative.

---

## 14. Approval

Current status:

`DRAFT`
