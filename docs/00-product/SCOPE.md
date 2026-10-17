# SCOPE.md

**Project:** News Platform  
**Version:** 0.2  
**Status:** DRAFT  
**Owner:** Product Owner  
**Last Updated:** 2026-10-17  
**Change Control:** Material scope changes require explicit human approval.

---

## 1. Purpose

Define what belongs to the initial News Platform and what does not.

A capability not present in approved scope or requirements MUST NOT be assumed to be required.

Being `IN SCOPE` does not authorize implementation by itself; production-code changes still require an approved Task.

---

## 2. Scope Rule

Implement only capabilities required by approved product documentation and Tasks.

Future usefulness, competitor behavior, framework capability, or "best practice" alone does not expand scope.

---

## 3. IN SCOPE

### Public Publication

- homepage;
- Article pages;
- Category pages;
- Author pages;
- public search;
- institutional/legal pages;
- responsive reader experience;
- related content.

### Editorial Administration

- authenticated CMS;
- Article creation/editing;
- drafts and preview;
- review and controlled publication;
- scheduled publication;
- revision/version history;
- corrections;
- authors;
- categories;
- controlled tags;
- media management;
- roles and permissions;
- homepage curation where required.

### Editorial Content

- structured Article body;
- images and approved media/embed types;
- authorship;
- publication/update dates;
- related Articles;
- sponsored-content identification.

Detailed content structure belongs in `CONTENT-MODEL.md`.

### SEO and Distribution

- stable public URLs;
- canonical metadata;
- Article metadata;
- structured data;
- Sitemap;
- News Sitemap;
- RSS;
- redirects;
- Google Search / News / Discover technical readiness;
- social-sharing metadata.

Detailed behavior belongs in `SEO-EDITORIAL.md`.

### Advertising

- predefined Ad Slots;
- advertising inside approved page locations;
- sponsored-content disclosure;
- approved advertising-provider integration;
- ads.txt when applicable.

Detailed behavior belongs in `ADVERTISING.md`.

### Privacy and Security

- administrative authentication;
- authorization;
- approved privacy-preference controls;
- LGPD-supporting technical behavior;
- auditability where required;
- security controls;
- secure media upload handling.

Detailed behavior belongs in `/docs/03-security/`.

### Engineering and Operations

- automated validation;
- observability;
- backups and restore validation;
- deployment environments;
- production recovery procedures;
- approved analytics integration.

Detailed requirements belong in Engineering and Operations documentation.

---

## 4. Initial Product Assumptions

The initial product assumes:

- one publication;
- Portuguese as the primary language;
- anonymous public reading;
- authenticated editorial administration;
- multiple administrative roles;
- advertising as an approved monetization capability;
- web-first delivery.

Changing these assumptions requires product review.

---

## 5. OUT OF SCOPE

The initial product does NOT include:

- reader accounts or reader profiles;
- comments or public user-generated content;
- paywall, subscriptions, or billing;
- ecommerce;
- native iOS/Android applications;
- social-network features;
- behavioral personalization;
- machine-learning recommendation systems;
- autonomous AI publication;
- autonomous AI taxonomy creation;
- multi-tenant SaaS;
- generic website-builder functionality;
- enterprise/general-purpose DAM;
- custom email-delivery infrastructure;
- full newsletter product;
- video-hosting platform;
- podcast platform;
- custom advertising marketplace/exchange;
- custom analytics platform;
- multilingual publishing.

---

## 6. Not Required by Current Product

The following technologies/capabilities are NOT product requirements:

- microservices;
- Kubernetes;
- distributed event streaming;
- dedicated search cluster;
- AMP.

They may only be introduced later through demonstrated need and approved architecture change.

---

## 7. Future Candidates

Possible future proposals include:

- newsletter;
- push notifications;
- reader accounts;
- saved Articles;
- subscriptions/paywall;
- comments;
- native mobile applications;
- multilingual publishing;
- advanced search;
- personalized recommendations;
- additional publications.

A future candidate is NOT approved scope.

---

## 8. Scope Change Process

When new scope is proposed:

```text
DISCOVERY
  ↓
CHANGE REQUEST
  ↓
PRODUCT REVIEW
  ↓
DOCUMENT UPDATE
  ↓
APPROVAL
  ↓
BACKLOG / TASK
  ↓
IMPLEMENTATION
```

The agent MUST NOT implement a scope expansion before this process is completed.

---

## 9. Scope Creep Rule

These statements do not authorize implementation:

- "while we're here";
- "we might need this later";
- "this would be more scalable";
- "competitors have it";
- "the framework supports it";
- "this is best practice".

---

## 10. Approval

Current status:

`DRAFT`
