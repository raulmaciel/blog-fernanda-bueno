# THREAT-MODEL.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Last Updated:** 2026-10-17  
**Change Control:** Update when trust boundaries or major data flows change.

---

## 1. Purpose

This document records the primary security threats relevant to the current News Platform architecture.

It intentionally remains high-level.

Detailed controls belong in `SECURITY-BASELINE.md`.

---

## 2. Primary Assets

Protect:

- published editorial integrity;
- unpublished content;
- CMS accounts;
- administrative permissions;
- authentication sessions;
- Personal Data;
- database contents;
- media assets;
- secrets;
- audit information;
- availability of the Public Website.

---

## 3. Trust Boundaries

```text id="u22m0q"
Anonymous Internet
       |
       v
Edge / CDN / WAF
       |
       v
Public Website
       |
       v
CMS / API
       |
       +--------> PostgreSQL
       |
       +--------> Object Storage


Editorial User
       |
       v
CMS Authentication
       |
       v
Editorial Administration
```

Data crossing a trust boundary MUST NOT be assumed trustworthy.

---

## 4. Threat Actors

Relevant actors include:

- automated bots;
- opportunistic attackers;
- credential-stuffing attackers;
- malicious authenticated users;
- compromised editorial accounts;
- malicious third-party integrations;
- supply-chain attackers.

---

## 5. TM-01 — CMS Account Takeover

**Threat**

An attacker obtains an editorial or administrative account.

**Impact**

- fake publication;
- Article modification;
- data exposure;
- malicious configuration.

**Primary Controls**

- secure authentication;
- MFA for privileged users;
- rate limiting;
- session protection;
- audit logging;
- least privilege.

---

## 6. TM-02 — Broken Authorization

**Threat**

An authenticated user performs an operation beyond their assigned permissions.

**Impact**

- unauthorized publication;
- user/role changes;
- content modification;
- data disclosure.

**Primary Controls**

- server-side authorization;
- RBAC;
- deny-by-default;
- authorization tests.

---

## 7. TM-03 — XSS / Malicious Editorial Content

**Threat**

Malicious script enters public content through user-controlled editorial input.

**Impact**

- reader compromise;
- session theft;
- malicious redirects;
- advertising abuse.

**Primary Controls**

- structured Content Blocks;
- output escaping;
- sanitization where required;
- CSP;
- restriction of arbitrary executable content.

---

## 8. TM-04 — Injection

**Threat**

Untrusted input changes database or command behavior.

**Impact**

- data loss;
- data disclosure;
- system compromise.

**Primary Controls**

- safe query mechanisms;
- validation;
- no unsafe string-built commands;
- least-privilege database credentials.

---

## 9. TM-05 — Malicious File Upload

**Threat**

An attacker or compromised editor uploads malicious or deceptive content.

**Impact**

- stored XSS;
- malware distribution;
- resource exhaustion;
- storage abuse.

**Primary Controls**

- type validation;
- file-size limits;
- safe filenames/keys;
- controlled media processing;
- restrictions on active formats.

---

## 10. TM-06 — Draft / Preview Exposure

**Threat**

Unpublished content becomes accessible through predictable or improperly protected URLs.

**Impact**

- information leakage;
- premature publication;
- editorial harm.

**Primary Controls**

- authenticated preview;
- authorization;
- unguessable temporary access where used;
- `noindex` as secondary protection only.

`noindex` is NOT an access-control mechanism.

---

## 11. TM-07 — Public URL / Redirect Abuse

**Threat**

Redirect functionality is abused to send users to malicious external destinations.

**Impact**

- phishing;
- reputation damage;
- search abuse.

**Primary Controls**

- validated redirect targets;
- restricted administration;
- auditability.

---

## 12. TM-08 — Secrets Exposure

**Threat**

API keys, credentials or tokens leak through source code, logs or configuration.

**Impact**

- infrastructure compromise;
- third-party account compromise;
- data exposure.

**Primary Controls**

- secret management;
- repository scanning;
- logging restrictions;
- credential rotation.

---

## 13. TM-09 — Third-Party Compromise

**Threat**

Advertising, analytics, CDN or other external integration is compromised or misconfigured.

**Impact**

- malicious scripts;
- tracking violations;
- reader compromise;
- availability problems.

**Primary Controls**

- minimize third parties;
- review integrations;
- CSP where feasible;
- privacy review;
- dependency monitoring.

---

## 14. TM-10 — Denial of Service / Bot Abuse

**Threat**

High-volume malicious traffic exhausts application resources.

**Impact**

- site unavailability;
- excessive infrastructure cost;
- degraded editorial operations.

**Primary Controls**

- CDN caching;
- DDoS protection;
- WAF;
- rate limiting;
- bounded expensive operations.

---

## 15. TM-11 — Supply-Chain Compromise

**Threat**

A dependency, build process or external package introduces malicious behavior.

**Impact**

Potential full application compromise.

**Primary Controls**

- minimal dependencies;
- lockfiles;
- vulnerability monitoring;
- CI checks;
- controlled upgrades.

---

## 16. TM-12 — Personal Data Exposure

**Threat**

Personal Data leaks through APIs, logs, backups, analytics or administrative functionality.

**Impact**

- privacy harm;
- regulatory impact;
- reputational impact.

**Primary Controls**

- data minimization;
- access control;
- logging restrictions;
- secure transport;
- retention controls;
- incident response.

---

## 17. TM-13 — Editorial Integrity Attack

**Threat**

Published information is maliciously changed without legitimate editorial authorization.

**Impact**

- misinformation;
- reputational damage;
- legal/editorial impact.

**Primary Controls**

- RBAC;
- version history;
- publication permissions;
- audit trail;
- account security.

---

## 18. TM-14 — Cache Poisoning / Stale Publication

**Threat**

Users receive malicious, incorrect or obsolete cached content.

**Impact**

- incorrect publication;
- persisted malicious output;
- outdated corrections.

**Primary Controls**

- controlled cache keys;
- trusted cache configuration;
- publication invalidation;
- no user-controlled cache variation without review.

---

## 19. Risk Priority

Initial highest-priority risks:

1. CMS account takeover
2. broken authorization
3. XSS/editorial injection
4. Personal Data exposure
5. malicious uploads
6. supply-chain compromise
7. availability attacks

Priority MAY change based on production evidence.

---

## 20. Threat-Model Update Triggers

Review this document when introducing:

- new trust boundaries;
- authentication changes;
- new administrative roles;
- public APIs;
- uploads;
- new third parties;
- reader accounts;
- payments;
- new Personal Data;
- major infrastructure changes.

Do not update the Threat Model for ordinary internal refactors that do not change risk boundaries.

---

## 21. Approval

Current status:

`DRAFT`