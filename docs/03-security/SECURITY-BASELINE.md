# SECURITY-BASELINE.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Last Updated:** 2026-10-17  
**Change Control:** Weakening a mandatory control requires explicit security review.

---

## 1. Purpose

This document defines minimum security controls for the News Platform.

These controls apply continuously during development.

Security is not a final project phase.

---

## 2. Security Reference

The project uses current OWASP guidance, including OWASP Top 10, as a baseline for application-security risk.

Passing this document does not imply that the application is automatically secure.

---

## 3. Authentication

Administrative access MUST:

- require authentication;
- use secure password handling where passwords exist;
- protect authentication endpoints against abuse;
- use secure session handling.

MFA SHOULD be enabled for privileged administrative users.

---

## 4. Authorization

Authorization MUST be enforced server-side.

Every protected operation MUST validate:

- authenticated identity;
- required permission;
- target resource where applicable.

UI visibility is not authorization.

Default posture:

`deny unless explicitly allowed`

---

## 5. Sessions

Production sessions MUST use appropriate:

- expiration;
- secure cookies;
- `HttpOnly`;
- `Secure`;
- appropriate `SameSite`.

Session identifiers MUST NOT appear in URLs.

---

## 6. Input Validation

All untrusted input MUST be validated according to its context.

This includes:

- URL parameters;
- forms;
- API requests;
- CMS fields;
- uploaded files;
- webhook payloads.

Validation MUST happen server-side.

---

## 7. Output Safety

User-controlled content MUST NOT be rendered as executable HTML/JavaScript unless explicitly designed, sanitized and approved.

Structured editorial Content Blocks are preferred over arbitrary executable content.

---

## 8. Database Security

Application database access MUST:

- use parameterized/query-safe mechanisms;
- use least-privilege credentials;
- avoid direct public exposure;
- use encrypted transport where required.

Database credentials MUST NOT be committed to source control.

---

## 9. File Uploads

Uploads MUST validate:

- allowed type;
- actual file content/type where practical;
- file size;
- expected processing path.

Uploaded filenames MUST NOT directly determine sensitive filesystem paths.

Untrusted SVG or other active content requires explicit handling.

---

## 10. Secrets

Secrets MUST:

- remain outside source control;
- use approved secret/configuration mechanisms;
- never be written to normal application logs.

Committed secrets are treated as compromised.

---

## 11. HTTPS

Production public and administrative traffic MUST use HTTPS.

HTTP requests SHOULD redirect to HTTPS where applicable.

---

## 12. Security Headers

Production responses SHOULD use appropriate controls including:

- Content-Security-Policy;
- Strict-Transport-Security;
- X-Content-Type-Options;
- Referrer-Policy;
- Permissions-Policy.

Exact policy is defined during implementation.

---

## 13. CSRF

State-changing browser requests using cookie-based authentication MUST have appropriate CSRF protection.

Exceptions require explicit protocol/security justification.

---

## 14. Rate Limiting

Sensitive or abuse-prone endpoints SHOULD apply appropriate rate limiting.

Examples:

- authentication;
- password reset;
- search abuse;
- contact forms;
- administrative endpoints where relevant.

---

## 15. Dependencies

Production dependencies MUST:

- be explicitly required;
- be version controlled through the package lock;
- be monitored for known vulnerabilities.

Do not add a package when existing project capabilities adequately solve the requirement.

---

## 16. Supply Chain

CI SHOULD include approved controls for:

- dependency vulnerabilities;
- leaked secrets;
- static analysis;
- build integrity.

Unexpected generated or downloaded executable artifacts must not be trusted automatically.

---

## 17. Administrative Surface

The CMS MUST receive stronger protection than ordinary public pages.

Controls MAY include:

- MFA;
- additional edge access controls;
- stricter rate limits;
- shorter session lifetime;
- enhanced audit logging.

Exact deployment controls require approved architecture.

---

## 18. Error Handling

Public errors MUST NOT expose:

- stack traces;
- credentials;
- database details;
- internal filesystem paths;
- sensitive configuration.

Unexpected failures MUST remain observable internally.

---

## 19. Logging

Security-relevant events SHOULD be observable.

Examples:

- authentication failures;
- privileged changes;
- publication actions;
- authorization failures;
- suspicious administrative behavior.

Logs MUST follow LGPD/data-minimization requirements.

---

## 20. Backups

Production backups MUST be:

- access-controlled;
- protected appropriately;
- periodically tested for restoration.

Backup access is considered privileged.

---

## 21. Environments

Production secrets and production data MUST NOT be casually reused in development environments.

Staging MUST NOT expose administrative systems or unpublished content unintentionally.

---

## 22. Security Testing

Relevant changes SHOULD include tests for:

- authorization;
- validation;
- permission boundaries;
- regression of discovered vulnerabilities.

Security fixes SHOULD include regression coverage when practical.

---

## 23. Security Change Gate

The following require explicit security review:

- authentication changes;
- authorization changes;
- file-upload changes;
- new external integrations;
- new public APIs;
- secret-management changes;
- administrative exposure;
- new executable content;
- significant trust-boundary changes.

---

## 24. Prohibited Patterns

Do not intentionally introduce:

- SQL injection;
- command injection;
- XSS;
- SSRF;
- path traversal;
- authorization bypass;
- hardcoded production credentials;
- unrestricted open redirects;
- unsafe arbitrary file execution.

---

## 25. Approval

Current status:

`DRAFT`