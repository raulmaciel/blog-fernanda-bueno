ADR-0001 — Use Astro for the Public Website

Status: APPROVED
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

APPROVED

Human approval required before changing to: