# SRS.md

**Project:** News Platform  
**Version:** 0.1  
**Status:** DRAFT  
**Owner:** Product Owner  
**Last Updated:** 2026-10-17  
**Change Control:** Human approval required.

---

# 1. Purpose

This document defines the functional requirements of the News Platform.

It defines **what the system must do**.

It does not define implementation architecture.

Architecture decisions belong in `/docs/02-architecture/`.

Non-functional requirements belong in `NFR.md`.

---

# 2. Requirement Keywords

- **MUST** — mandatory.
- **SHOULD** — expected unless explicitly justified otherwise.
- **MAY** — optional capability requiring approved scope.

---

# 3. Public Website

### FR-001 — Public access

The system MUST allow visitors to read published content without authentication.

### FR-002 — Homepage

The system MUST provide a public homepage containing editorially selected and/or automatically selected published content.

### FR-003 — Article page

Each published Article MUST have a unique public URL and dedicated Article page.

### FR-004 — Category page

The system MUST support public Category pages listing associated published Articles.

### FR-005 — Author page

The system MUST support public Author pages containing approved author information and associated published Articles.

### FR-006 — Search

The Public Website MUST provide search over published editorial content.

### FR-007 — Institutional pages

The system MUST support publication of institutional and legal pages.

---

# 4. Article Management

### FR-008 — Create Article

Authorized editorial users MUST be able to create an Article.

### FR-009 — Edit Article

Authorized users MUST be able to edit Articles according to their permissions.

### FR-010 — Article fields

An Article MUST support at minimum:

- headline;
- slug;
- subtitle or excerpt where applicable;
- structured body;
- author;
- category;
- hero image where applicable;
- publication status;
- publication metadata.

Detailed fields belong in `CONTENT-MODEL.md`.

### FR-011 — Structured body

Article body content MUST use approved structured Content Blocks.

Arbitrary executable code MUST NOT be treated as normal editorial content.

### FR-012 — Draft

An Article MUST be saveable without becoming publicly available.

### FR-013 — Preview

Authorized users MUST be able to preview unpublished content.

Preview content MUST NOT be publicly indexable.

### FR-014 — Publication

Only users with the required permission MAY publish an Article.

### FR-015 — Scheduled publication

Authorized users MUST be able to schedule an approved Article for future publication.

### FR-016 — Update published Article

Authorized users MUST be able to update a published Article without changing its publication identity.

### FR-017 — Archive

Authorized users MUST be able to archive content according to the editorial workflow.

---

# 5. Editorial Workflow

### FR-018 — Workflow states

The editorial workflow MUST support the canonical states:

- `DRAFT`
- `IN_REVIEW`
- `APPROVED`
- `SCHEDULED`
- `PUBLISHED`
- `ARCHIVED`

Detailed transitions belong in `PUBLISHING-WORKFLOW.md`.

### FR-019 — Review

The system MUST allow content to be submitted for editorial review.

### FR-020 — Version history

The system MUST preserve Article revision history according to the approved retention policy.

### FR-021 — Corrections

The system MUST support recording a Correction Note for published content when required.

### FR-022 — Publication dates

The system MUST distinguish:

- original publication date;
- meaningful modification date.

The original publication date MUST NOT be silently replaced by subsequent edits.

---

# 6. Editorial Taxonomy

### FR-023 — Authors

The system MUST manage Authors as structured entities.

### FR-024 — Categories

The system MUST allow authorized users to create and manage Categories.

### FR-025 — Tags

The system MUST support Tags where enabled by the editorial model.

Creating a Tag MUST NOT automatically make it an indexable public page.

### FR-026 — Related Articles

The system MUST support association of Related Articles.

---

# 7. Media

### FR-027 — Media upload

Authorized users MUST be able to upload approved media types.

### FR-028 — Media metadata

Images MUST support relevant metadata including:

- alternative text;
- caption;
- credit.

### FR-029 — Media reuse

Existing Media SHOULD be reusable across Articles without requiring duplicate uploads.

### FR-030 — Media processing

Uploaded images MUST be processed according to the approved media architecture before public delivery.

---

# 8. Homepage Curation

### FR-031 — Editorial highlights

Authorized editorial users MUST be able to control designated homepage highlight positions.

### FR-032 — Publication independence

Publishing an Article MUST NOT automatically require placement in the primary homepage highlight.

---

# 9. SEO and Distribution

### FR-033 — SEO metadata

Published pages MUST support the SEO metadata defined in `SEO-EDITORIAL.md`.

### FR-034 — Canonical URL

Every indexable Article MUST expose an approved Canonical URL.

### FR-035 — Structured data

Applicable public pages MUST expose the structured data defined in `SEO-EDITORIAL.md`.

### FR-036 — Sitemap

The system MUST provide the required general Sitemap infrastructure.

### FR-037 — News Sitemap

The system MUST provide a News Sitemap containing eligible recent Articles according to approved rules.

### FR-038 — RSS

The system MUST support approved RSS feeds.

### FR-039 — Redirects

Authorized users MUST be able to define approved redirects for changed public URLs.

### FR-040 — Permanent URL preservation

Changing the Slug of previously published content MUST NOT silently break the previous public URL.

---

# 10. Advertising

### FR-041 — Ad Slots

The system MUST support predefined Ad Slots.

### FR-042 — Article advertising

Articles MUST be able to display approved advertising placements.

### FR-043 — Advertising control

Editorial users MUST NOT need to insert uncontrolled advertising scripts directly into Article content.

### FR-044 — Sponsored Content

The system MUST support explicit identification of Sponsored Content.

Sponsored Content MUST be visibly distinguishable from ordinary editorial content.

---

# 11. Privacy

### FR-045 — Privacy preferences

The Public Website MUST provide privacy controls required by the approved LGPD model.

### FR-046 — Consent-dependent processing

Processing requiring consent MUST respect the visitor's current approved privacy preferences.

### FR-047 — Preference changes

Visitors MUST be able to revisit and change applicable privacy preferences.

### FR-048 — Privacy requests

The system MUST support the operational handling required for approved Data Subject Requests.

Detailed behavior belongs in `/docs/03-security/LGPD.md`.

---

# 12. Authentication and Authorization

### FR-049 — Administrative authentication

The Editorial Administration MUST require authentication.

### FR-050 — Authorization

Administrative operations MUST be restricted according to approved roles and permissions.

### FR-051 — Least privilege

A user MUST NOT receive permissions solely because they can access the CMS.

### FR-052 — User management

Authorized administrators MUST be able to manage administrative users and approved roles.

---

# 13. Auditability

### FR-053 — Critical actions

The system MUST retain traceability for critical actions defined by security and editorial requirements.

Examples may include:

- publication;
- correction;
- permission changes;
- relevant configuration changes.

---

# 14. Operational Requirements

### FR-054 — Publishing failure visibility

Failures in publication or scheduled publication MUST be observable to operators.

### FR-055 — Health information

The system MUST provide approved mechanisms for determining service health.

### FR-056 — Error reporting

Unexpected application failures MUST be observable through the approved monitoring system.

---

# 15. Analytics

### FR-057 — Approved analytics

The system MAY integrate approved traffic and editorial analytics.

Analytics MUST follow the approved privacy requirements.

### FR-058 — SEO measurement

The publication SHOULD support integration with approved search-performance tooling.

---

# 16. Explicitly Excluded Functional Requirements

The initial product does NOT require:

- reader accounts;
- comments;
- public user-generated content;
- paywall;
- ecommerce;
- native mobile apps;
- behavioral personalization;
- machine-learning recommendations;
- autonomous AI publishing;
- multi-tenant SaaS;
- multilingual publication.

See `SCOPE.md` for authoritative product boundaries.

---

# 17. Requirement Traceability

Implementation Tasks SHOULD reference relevant requirement IDs.

Example:

```text
Requirements:
- FR-008
- FR-012
- FR-018
```

A Task MUST NOT silently alter a requirement.

Requirement changes require explicit documentation review.

---

# 18. Approval

Current status:

`DRAFT`

After review and human approval:

`Status: APPROVED`