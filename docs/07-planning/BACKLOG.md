# BACKLOG.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Last Updated:** 2026-10-17  
**Change Control:** New backlog items require human acceptance before becoming part of the approved backlog.

---

## 1. Purpose

This document records approved work candidates derived from product, requirements, architecture and operational documentation.

Backlog items are NOT implementation authorization.

Only an approved Task authorizes code changes.

---

## 2. Backlog Status

Backlog items use:

- `PLANNED`
- `READY_FOR_TASK`
- `BLOCKED`
- `DONE`

`READY_FOR_TASK` means a Task may be proposed.

It does not mean implementation may begin.

---

# EPIC-01 — Repository Foundation

## BL-001 — Initialize repository workspace
**Status:** READY_FOR_TASK

Create the minimum approved repository/workspace structure.

## BL-002 — Configure TypeScript baseline
**Status:** READY_FOR_TASK

Establish strict TypeScript configuration appropriate to approved applications.

## BL-003 — Initialize Astro Public Website
**Status:** READY_FOR_TASK

Create the public Astro application according to ADR-0001.

## BL-004 — Initialize Payload CMS
**Status:** PLANNED

Create the Payload CMS application according to ADR-0002.

## BL-005 — Establish local validation commands
**Status:** PLANNED

Provide baseline format, lint, typecheck, test and build commands.

## BL-006 — Establish initial CI
**Status:** PLANNED

Create a minimal automated validation pipeline after CI tooling is approved.

---

# EPIC-02 — Persistence and Administration

## BL-020 — Configure PostgreSQL integration
**Status:** PLANNED

Connect the approved CMS persistence layer to PostgreSQL according to ADR-0003.

## BL-021 — Establish migration workflow
**Status:** PLANNED

Define and validate schema migration behavior.

## BL-022 — Configure CMS authentication
**Status:** PLANNED

Enable protected administrative authentication using approved Payload capabilities.

## BL-023 — Implement initial roles and permissions
**Status:** PLANNED

Implement the minimum approved administrative permission model.

---

# EPIC-03 — Editorial Domain

## BL-030 — Implement Author model
**Status:** PLANNED

Implement the approved Author content model.

## BL-031 — Implement Category model
**Status:** PLANNED

Implement the approved Category model.

## BL-032 — Implement Tag model
**Status:** PLANNED

Implement optional controlled Tags.

## BL-033 — Implement Media model
**Status:** PLANNED

Implement Media metadata and storage references.

## BL-034 — Implement Article model
**Status:** PLANNED

Implement the canonical Article entity.

## BL-035 — Implement structured Article Body
**Status:** PLANNED

Implement only approved Content Blocks.

## BL-036 — Implement Related Articles
**Status:** PLANNED

Support deterministic/editorial Article relationships.

---

# EPIC-04 — Publishing Workflow

## BL-040 — Implement editorial state transitions
**Status:** PLANNED

Implement approved lifecycle states and transition rules.

## BL-041 — Implement protected preview
**Status:** PLANNED

Provide authorized non-indexable draft preview.

## BL-042 — Implement publication validation
**Status:** PLANNED

Prevent publication of invalid content.

## BL-043 — Implement Article version history
**Status:** PLANNED

Preserve appropriate editorial revision history.

## BL-044 — Implement scheduled publication
**Status:** PLANNED

Schedule approved future publication with observable failure handling.

## BL-045 — Implement Correction Note support
**Status:** PLANNED

Support transparent correction metadata.

## BL-046 — Implement published slug-change handling
**Status:** PLANNED

Preserve previous URLs through approved redirect behavior.

---

# EPIC-05 — Public Website

## BL-050 — Implement public Article page
**Status:** PLANNED

Render published Articles only.

## BL-051 — Implement homepage
**Status:** PLANNED

Provide editorial and/or rule-based homepage sections.

## BL-052 — Implement homepage curation
**Status:** PLANNED

Separate publication from homepage highlight selection.

## BL-053 — Implement Category pages
**Status:** PLANNED

Render approved Category archives.

## BL-054 — Implement Author pages
**Status:** PLANNED

Render approved public Author identity and Articles.

## BL-055 — Implement institutional pages
**Status:** PLANNED

Support approved publication/legal pages.

## BL-056 — Implement public search
**Status:** PLANNED

Provide initial search using the approved PostgreSQL-based approach.

## BL-057 — Implement responsive reader layout
**Status:** PLANNED

Meet approved responsive and accessibility requirements.

---

# EPIC-06 — SEO and Distribution

## BL-060 — Implement Article SEO metadata
**Status:** PLANNED

Generate canonical Article metadata from approved content.

## BL-061 — Implement NewsArticle structured data
**Status:** PLANNED

Expose approved structured Article information.

## BL-062 — Implement Sitemap infrastructure
**Status:** PLANNED

Expose canonical indexable URLs.

## BL-063 — Implement News Sitemap
**Status:** PLANNED

Expose qualifying recent news content.

## BL-064 — Implement RSS
**Status:** PLANNED

Provide approved publication feeds.

## BL-065 — Implement redirect management
**Status:** PLANNED

Preserve changed public URLs safely.

## BL-066 — Implement robots/indexing rules
**Status:** PLANNED

Ensure correct indexing behavior for public, draft and staging content.

## BL-067 — Validate Discover image behavior
**Status:** PLANNED

Ensure approved public Article imagery supports the SEO image contract.

---

# EPIC-07 — Advertising

## BL-070 — Define advertising provider ADR
**Status:** PLANNED

Select the approved initial advertising provider before integration.

## BL-071 — Implement Ad Slots
**Status:** BLOCKED

Blocked by BL-070.

## BL-072 — Implement Article AdBreak behavior
**Status:** BLOCKED

Blocked by BL-070 and BL-071.

## BL-073 — Implement Sponsored Content disclosure
**Status:** PLANNED

Expose structured and visible sponsorship disclosure.

## BL-074 — Implement ads.txt where applicable
**Status:** BLOCKED

Depends on selected advertising provider.

---

# EPIC-08 — Privacy and Security

## BL-080 — Define privacy integration details
**Status:** PLANNED

Convert approved LGPD requirements into implementation-specific Tasks.

## BL-081 — Implement privacy preference interface
**Status:** PLANNED

Provide applicable user privacy choices.

## BL-082 — Enforce consent-dependent integrations
**Status:** PLANNED

Prevent optional integrations from bypassing approved privacy rules.

## BL-083 — Harden administrative authentication
**Status:** PLANNED

Add approved privileged-access protections.

## BL-084 — Implement security headers
**Status:** PLANNED

Apply approved browser security headers.

## BL-085 — Implement rate limiting where required
**Status:** PLANNED

Protect identified abuse-prone endpoints.

## BL-086 — Harden media uploads
**Status:** PLANNED

Apply approved file-validation and processing controls.

## BL-087 — Establish supply-chain security checks
**Status:** PLANNED

Add approved dependency/secret/static security validation.

---

# EPIC-09 — Observability and Recovery

## BL-090 — Select observability tooling
**Status:** PLANNED

Approve required provider/tooling through architecture review where applicable.

## BL-091 — Implement structured application logging
**Status:** BLOCKED

Depends on relevant runtime/tooling decisions.

## BL-092 — Implement error reporting
**Status:** BLOCKED

Depends on BL-090.

## BL-093 — Implement health checks
**Status:** PLANNED

Provide safe operational health information.

## BL-094 — Select backup implementation
**Status:** PLANNED

Choose provider-specific backup mechanisms consistent with RPO/RTO.

## BL-095 — Implement automated database backups
**Status:** BLOCKED

Depends on production database hosting and BL-094.

## BL-096 — Validate restore procedure
**Status:** BLOCKED

Depends on implemented backup architecture.

## BL-097 — Populate initial Runbook procedures
**Status:** BLOCKED

Only after operational mechanisms exist and are validated.

---

# EPIC-10 — Production Readiness

## BL-100 — Select production hosting architecture
**Status:** PLANNED

Create/approve required hosting ADRs.

## BL-101 — Select Edge/CDN/WAF provider
**Status:** PLANNED

Approve the production edge architecture.

## BL-102 — Select Object Storage provider
**Status:** PLANNED

Approve media object-storage architecture.

## BL-103 — Implement production deployment pipeline
**Status:** BLOCKED

Depends on approved hosting and CI architecture.

## BL-104 — Configure production secrets
**Status:** BLOCKED

Depends on approved hosting architecture.

## BL-105 — Production security review
**Status:** PLANNED

Validate production candidate against the Security Baseline and Threat Model.

## BL-106 — Production LGPD review
**Status:** PLANNED

Validate implemented data flows and third-party processors.

## BL-107 — Production SEO review
**Status:** PLANNED

Validate indexing, structured data, sitemaps and redirects.

## BL-108 — Production performance review
**Status:** PLANNED

Validate approved public performance budgets and Core Web Vitals readiness.

## BL-109 — Launch readiness review
**Status:** BLOCKED

Depends on production-critical backlog completion.

---

## 3. Backlog Candidate Rule

When implementation reveals new work outside the active Task, the agent MAY report:

`BACKLOG CANDIDATE`

with:

- title;
- evidence;
- reason;
- affected area;
- urgency.

The agent MUST NOT add the candidate to this file automatically unless explicitly authorized.

---

## 4. Backlog to Task Rule

A backlog item may receive an implementation Task only when:

- dependencies are sufficiently understood;
- required architecture decisions are approved;
- status is changed to `READY_FOR_TASK`.

A proposed Task begins as:

`Status: DRAFT`

---

## 5. Approval

Current status:

`DRAFT`
