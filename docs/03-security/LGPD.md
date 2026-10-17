# LGPD.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Last Updated:** 2026-10-17  
**Change Control:** Privacy-impacting changes require human review.

---

## 1. Purpose

This document defines privacy and LGPD constraints for the News Platform.

It is an engineering governance document.

The implementation agent MUST NOT independently determine legal bases or reinterpret legal obligations.

---

## 2. Core Principles

The system MUST follow:

- purpose limitation;
- necessity;
- data minimization;
- transparency;
- security;
- prevention;
- accountability.

Collect only Personal Data required for an approved purpose.

---

## 3. Expected Data Processing

Initial processing may include:

| Data | Purpose |
|---|---|
| CMS user identity | administration |
| authentication data | security |
| IP / security logs | security and operations |
| consent/preferences | privacy management |
| analytics identifiers | analytics, when approved |
| advertising identifiers | advertising, when approved |
| contact information | requested communication |

New categories of Personal Data require review.

---

## 4. Sensitive Personal Data

The platform does not intentionally require Sensitive Personal Data in its initial scope.

If a new feature requires it:

`LGPD IMPACT`

MUST be raised before implementation.

---

## 5. Privacy by Default

Optional processing MUST NOT be enabled merely because an integration supports it.

Where the approved legal basis requires consent:

- processing remains disabled before valid consent;
- refusal must be available;
- consent must be revocable;
- preference changes must be supported.

---

## 6. Cookie Categories

Approved categories:

- Necessary
- Analytics
- Advertising
- Personalization, only if later required

Necessary cookies MUST be limited to functionality genuinely required for operation or security.

Category classification must be documented.

---

## 7. Consent Interface

Where consent is required, the interface SHOULD provide equivalent practical access to:

- accept;
- reject non-essential processing;
- configure preferences.

Optional categories MUST NOT be pre-enabled when consent is the required legal basis.

---

## 8. Consent Records

When evidence of consent is required, retain only what is necessary to demonstrate:

- preference;
- timestamp;
- policy/version;
- applicable categories.

Do not turn consent storage into additional behavioral tracking.

---

## 9. Withdrawal

Users MUST be able to revisit applicable privacy preferences.

Withdrawal MUST NOT be materially harder than providing consent.

---

## 10. Analytics and Advertising

Analytics and advertising integrations require review of:

- data collected;
- purpose;
- legal basis;
- cookies/identifiers;
- processor/controller relationship;
- retention;
- international transfers.

An approved provider integration MUST NOT automatically authorize every feature offered by that provider.

---

## 11. Third-Party Processors

Before introducing a processor handling Personal Data, document:

- provider;
- purpose;
- data categories;
- retention;
- processing location;
- international-transfer impact;
- applicable contractual mechanism.

New processors require explicit approval.

---

## 12. International Data Transfers

International transfer of Personal Data MUST use an applicable mechanism recognized under Brazilian data-protection rules.

The system architecture MUST NOT assume that using a foreign cloud or SaaS provider is automatically compliant.

Transfer implications must be reviewed before provider approval.

---

## 13. Data Subject Requests

The operational process must support applicable requests such as:

- confirmation of processing;
- access;
- correction;
- deletion where applicable;
- information regarding processing;
- withdrawal of consent where applicable.

Identity verification must be proportional to the request.

Do not disclose Personal Data to an unverified requester.

---

## 14. Retention

Personal Data MUST NOT be retained indefinitely without justification.

Each relevant data category SHOULD have:

- purpose;
- retention rule;
- deletion/anonymization rule.

Operational backups may follow separate approved retention rules.

---

## 15. Logging

Logs MUST NOT contain:

- passwords;
- API keys;
- authentication tokens;
- session secrets;
- unnecessary Personal Data.

Where identifiers are operationally necessary, minimize their content and retention.

---

## 16. Security Incidents

Incidents involving Personal Data MUST enter the incident-response process.

When an incident may cause relevant risk or damage, applicable ANPD notification requirements must be evaluated.

The current regulatory deadline for applicable notification is **3 business days after confirmation**, subject to specific legal exceptions.

Incident records involving Personal Data must follow applicable retention requirements.

---

## 17. Privacy Policy

Before production launch, the publication MUST provide an approved Privacy Policy describing at minimum:

- controller identity;
- processing purposes;
- relevant data categories;
- rights;
- sharing/processors;
- international transfers where applicable;
- contact channel.

---

## 18. Change Gate

A Task MUST raise:

`LGPD IMPACT`

before implementation when it introduces:

- new Personal Data;
- new tracking;
- new cookies;
- new analytics;
- new advertising identifiers;
- new processors;
- new international transfers;
- materially different retention.

---

## 19. References

Primary regulatory references:

- Lei nº 13.709/2018 — LGPD
- ANPD — Guide on Cookies and Personal Data
- ANPD Resolution 15/2024 — Security Incident Communication
- ANPD Resolution 19/2024 — International Data Transfers

---

## 20. Approval

Current status:

`DRAFT`