ADR-0001 — Use Astro for the Public Website

Status: PROPOSED
Date: 2026-10-17
Decision Owner: Product / Architecture Owner

Context

The Public Website requires:

excellent performance;

strong SEO;

server-rendered HTML;

minimal client-side JavaScript;

content-oriented rendering;

selective interactivity.

A full client-side SPA is not required.

Decision

Use Astro as the primary framework for the Public Website.

Astro owns reader-facing rendering.

It does not own editorial administration.

Rationale

Astro aligns with the project's priorities:

HTML-first rendering;

low default client-side JavaScript;

server/static rendering options;

component-based development;

good fit for content-heavy websites.

Constraints

Implementation SHOULD avoid unnecessary client hydration.

Interactive islands MAY be introduced only when required by product behavior.

The public frontend MUST NOT duplicate CMS responsibilities.

Alternatives Considered

Next.js

Capable, but provides broader application/runtime capabilities than currently required.

Traditional SPA

Rejected because the public news site does not require client-side application rendering as its primary architecture.

WordPress-rendered frontend

Rejected because the project intentionally separates public delivery from editorial administration.

Consequences

Positive:

lightweight public pages;

strong rendering control;

reduced browser JavaScript;

clear frontend/CMS separation.

Negative:

team must maintain an explicit CMS-to-frontend integration;

some dynamic features may require server rendering or selective hydration.

Approval

Current status:

PROPOSED

Human approval required before changing to:

APPROVED

ADR-0002-payload-cms.md

ADR-0002 — Use Payload CMS for Editorial Administration

Status: PROPOSED
Date: 2026-10-17
Decision Owner: Product / Architecture Owner

Context

The platform requires an editorial administration environment supporting:

structured content;

drafts;

versions;

users;

permissions;

publishing;

media management;

scheduling;

extensibility.

Building a complete CMS from scratch would add significant implementation and security cost without providing proportional product value.

Decision

Use Payload CMS as the Editorial CMS.

Payload will own the primary editorial-management domain.

Rationale

Payload fits the project because it provides an application-level CMS while allowing the public frontend to remain independent.

It supports the required direction for:

structured content;

authentication;

access control;

versioned editorial content;

administrative UI;

TypeScript-based customization.

Constraints

Do not rebuild functionality already adequately provided by Payload.

Custom behavior SHOULD be introduced only when required by approved product requirements.

Payload-specific concepts MUST NOT replace canonical domain terminology without reason.

Alternatives Considered

Custom CMS

Rejected because it unnecessarily recreates authentication, editorial UI, versioning and content-management capabilities.

WordPress

Viable, but rejected for the current architecture because the project prioritizes stronger application-level control and separation from the public frontend.

Direct database administration

Rejected because it does not provide an appropriate editorial workflow.

Consequences

Positive:

less custom CMS infrastructure;

structured editorial model;

faster implementation;

existing administrative capabilities.

Negative:

project depends on Payload conventions and lifecycle;

upgrades require compatibility review.

Approval

Current status:

PROPOSED

Human approval required before changing to:

APPROVED