# RUNBOOK.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Last Updated:** 2026-10-17  
**Change Control:** Procedures must reflect implemented and validated behavior.

---

## 1. Purpose

This document contains concrete operational procedures for diagnosing and recovering the News Platform.

Unlike architecture documents, the Runbook MUST describe what actually exists.

Do not add hypothetical procedures.

---

## 2. Runbook Rule

A procedure becomes authoritative only after it has been:

- implemented;
- executed or otherwise validated;
- reviewed for safety.

Never document an untested destructive command as standard recovery procedure.

---

## 3. Procedure Template

Use the following structure for future procedures:

```text
## <Incident / Symptom>

### Symptoms
What operators observe.

### Impact
What is affected.

### Checks
Safe diagnostic steps.

### Recovery
Validated recovery procedure.

### Verification
How to confirm recovery.

### Escalation
When normal recovery is insufficient.

### Related
Relevant Task, incident, ADR or documentation.
```

---

## 4. General Incident Safety

During an incident:

1. preserve data integrity;
2. avoid destructive actions without understanding impact;
3. record significant manual changes;
4. prefer known reversible actions;
5. validate recovery before declaring success.

---

## 5. Public Website Unavailable

**Status:** Procedure not yet implemented.

Concrete diagnostic and recovery steps MUST be added after hosting/runtime architecture exists.

---

## 6. CMS Unavailable

**Status:** Procedure not yet implemented.

Concrete steps depend on the approved CMS hosting architecture.

---

## 7. Database Unavailable

**Status:** Procedure not yet implemented.

Do not invent database recovery commands before production database architecture and backup strategy are implemented.

---

## 8. Scheduled Publication Failure

**Status:** Procedure not yet implemented.

When the scheduling mechanism exists, document:

- how to detect stuck publication;
- how to inspect job state;
- safe retry behavior;
- duplicate-publication prevention.

---

## 9. Failed Deployment

**Status:** Procedure not yet implemented.

Deployment-specific rollback commands must be added only after the deployment pipeline is implemented.

---

## 10. Backup Restore

**Status:** Procedure not yet implemented.

Validated restore steps will be documented after backup architecture exists and has been tested.

---

## 11. Security Incident

For suspected security incidents:

- contain access where safe;
- preserve evidence;
- avoid destroying logs;
- rotate compromised credentials when confirmed/required;
- follow the approved incident process.

Personal Data incidents MUST also follow `/docs/03-security/LGPD.md`.

Detailed security incident procedures should be added after operational tooling exists.

---

## 12. Knowledge Capture

When a real incident or implementation hurdle reveals important operational knowledge:

1. fix or contain the issue;
2. validate the solution;
3. add the reusable procedure here;
4. link the relevant Task/incident where useful.

The Runbook should evolve from real operational experience.

---

## 13. Approval

Current status:

`DRAFT`
