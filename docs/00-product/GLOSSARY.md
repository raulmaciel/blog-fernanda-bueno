# GLOSSARY.md

**Project:** News Platform  
**Version:** 0.2  
**Status:** DRAFT  
**Owner:** Product Owner  
**Last Updated:** 2026-10-17  
**Change Control:** New core domain terminology requires human approval.

---

## 1. Purpose

Define only canonical project/domain vocabulary that prevents naming ambiguity.

This is NOT a dictionary of general web, security, SEO, infrastructure, or programming terms.

When a canonical term exists here, use it instead of creating a synonym.

---

## 2. Product Terms

### News Platform

The complete product represented by this repository.

### Public Website

The public reader-facing news publication.

Do not use `CMS` to mean the Public Website.

### Editorial Administration

The private administrative environment used by authorized users.

Canonical synonym: `CMS`.

### CMS

Canonical shorthand for `Editorial Administration`.

---

## 3. Editorial Domain

### Article

Primary editorial content entity.

Canonical term: `Article`.

Do not introduce `Post`, `Story`, `NewsItem`, or similar names for the same domain entity.

### Headline

Primary visible title of an Article.

Not synonymous with `SEO Title`.

### Subtitle

Secondary editorial text displayed with the Article headline.

### Excerpt

Short Article summary used in lists/cards where applicable.

### Body

Primary editorial content of an Article.

### Content Block

Structured unit inside an Article Body.

Allowed block types are defined in `CONTENT-MODEL.md`.

### Hero Image

Primary visual image associated with an Article.

### Author

Public editorial identity associated with Articles.

An Author is not necessarily a CMS User.

### Category

Broad curated editorial classification.

### Tag

Optional granular editorial classification.

Do not introduce `Topic` as a separate entity unless explicitly approved.

### Related Article

An Article explicitly associated with another Article.

### Institutional Page

Public non-news page such as About, Contact, or policy pages.

---

## 4. Editorial Workflow

Canonical Article states:

| Term | Meaning |
|---|---|
| `DRAFT` | Not publicly published |
| `IN_REVIEW` | Awaiting editorial review |
| `APPROVED` | Approved but not necessarily public |
| `SCHEDULED` | Approved for future publication |
| `PUBLISHED` | Publicly available |
| `ARCHIVED` | Removed from normal active circulation without implying deletion |

### Preview

Protected non-public representation of unpublished content.

### Version

Stored historical representation of content.

### Correction

Change made to correct inaccurate published information.

### Correction Note

Public disclosure of a material correction where required.

### Publication Date

Original public publication time.

### Modification Date

Time of a meaningful later update.

Do not use modification time to artificially simulate content freshness.

---

## 5. Homepage

### Homepage Curation

Editorial selection of content for designated homepage positions.

### Hero

Highest-priority homepage content position.

Do not confuse with `Hero Image`.

### Featured Article

Article intentionally given elevated homepage visibility.

---

## 6. Media

### Media

Reusable editorial digital asset.

### Media Variant

Processed delivery version of a Media asset.

### Media Metadata

Structured information such as alt text, caption, credit, dimensions, and storage reference.

---

## 7. SEO / Public Identity

### Slug

Human-readable URL path segment for an Article.

### Canonical URL

Preferred authoritative public URL for a page.

### Redirect

Mapping from an old public URL to another approved URL.

### News Sitemap

News-specific sitemap for eligible recent Articles.

Not synonymous with the general Sitemap.

### Sponsored Content

Editorial-format content associated with a commercial sponsorship relationship.

Not synonymous with a normal Advertisement.

---

## 8. Advertising

### Advertisement / Ad

Commercial advertising rendered in an approved location.

### Ad Slot

Predefined location where an Advertisement may be rendered.

Canonical code term: `AdSlot`.

### AdBreak

Structured Article-body marker representing an eligible advertising position.

It does not contain arbitrary advertising code.

### Sponsor

Organization associated with Sponsored Content.

---

## 9. Administrative Terms

### User

Authenticated administrative identity.

### Role

Named grouping of permissions.

### Permission

Specific authorized operation.

### Editor

Editorial user responsible for review/editing according to permissions.

### Editor-in-Chief

Editorial role with broader authority.

### Administrator

Privileged operational/technical administrative role.

Administrative privilege does not automatically imply editorial authority.

---

## 10. Engineering Governance Terms

### ADR

Architecture Decision Record.

`PROPOSED` ADRs are not approved architecture.

### Task

Controlled implementation unit stored under `/docs/07-planning/tasks/`.

### Approved Task

Task with `Status: APPROVED`.

Only an Approved Task authorizes production-code implementation.

### ExecPlan

Detailed implementation plan required for sufficiently complex Tasks.

### Acceptance Criteria

Observable conditions required for a Task to be considered satisfied.

### PLAN MISMATCH

Required response when repository evidence contradicts an approved Task or ExecPlan.

### CHANGE REQUEST REQUIRED

Required response when requested behavior conflicts with approved scope, requirements, or architecture.

### BACKLOG CANDIDATE

Potential work discovered outside the current Task.

It is not automatically approved work.

### Refactor

Internal structural improvement preserving observable behavior.

Not synonymous with rewrite.

---

## 11. Terms That Must Not Be Used as Synonyms

| Canonical | Do not use as equivalent |
|---|---|
| Article | Post, Story, NewsItem |
| Public Website | CMS |
| Author | CMS User |
| Category | Tag |
| Headline | SEO Title |
| Hero | Hero Image |
| Publication Date | Modification Date |
| Sponsored Content | Advertisement |
| Role | Permission |
| Archive | Delete |
| Refactor | Rewrite |
| Backlog Item | Approved Task |
| Proposed ADR | Approved ADR |

---

## 12. Naming Rule

Before introducing a new domain term:

1. search this glossary;
2. check relevant approved documentation;
3. inspect existing code vocabulary;
4. reuse the existing canonical term when it represents the same concept.

Framework vocabulary MUST NOT silently replace project domain vocabulary.

---

## 13. Approval

Current status:

`DRAFT`
