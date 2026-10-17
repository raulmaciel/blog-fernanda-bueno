SAD.md

Project: News Platform
Version: 0.1
Status: DRAFT
Last Updated: 2026-10-17
Change Control: Architectural changes require an approved ADR.

1. Purpose

This document defines the high-level architecture of the News Platform.

It defines:

application boundaries;

responsibilities;

communication paths;

persistence boundaries;

architectural constraints.

Detailed technology rationale belongs in /docs/02-architecture/adr/.

2. Architectural Style

The system starts as a modular web platform, not a microservices architecture.

Primary runtime boundaries:

Public Website

Editorial CMS

PostgreSQL

Object Storage

Edge/CDN layer

Approved external integrations

Additional runtime services MUST NOT be introduced without demonstrated need and architecture review.

3. Primary Architecture

Internet
   |
   v
Edge / CDN / WAF
   |
   +--------------------------+
   |                          |
   v                          v
Public Website              Editorial CMS
Astro                       Payload CMS
   |                          |
   |                          +---------+
   |                                    |
   +-------------> CMS/API              |
                      |                 |
                      v                 v
                  PostgreSQL       Object Storage
                                      |
                                      v
                                Public Media CDN

4. Public Website

Technology:

Astro

Responsibilities:

render public pages;

render published Articles;

render categories;

render authors;

render institutional pages;

expose SEO metadata;

expose structured data;

expose sitemaps and RSS;

render approved advertising positions;

provide public search UI;

enforce reader-facing privacy behavior.

The Public Website MUST remain lightweight.

It MUST NOT contain CMS administration logic.

It SHOULD minimize client-side JavaScript.

5. Editorial CMS

Technology:

Payload CMS

Responsibilities:

authentication of editorial users;

authorization;

Article management;

Authors;

Categories;

Tags;

Media metadata;

drafts;

versioning;

preview support;

publishing workflow;

scheduled publishing;

editorial configuration;

approved administrative operations.

The CMS is the authoritative application boundary for editorial content management.

6. Database

Technology:

PostgreSQL

Responsibilities:

structured persistent application data;

editorial metadata;

users and permissions;

Article state;

relationships;

audit-related records where required;

application configuration requiring persistence.

Binary media MUST NOT normally be stored directly in PostgreSQL.

7. Object Storage

Purpose:

Store uploaded and processed media objects.

Examples:

original images;

derived image variants;

approved downloadable media.

The storage implementation MUST use an approved object-storage architecture.

Specific provider selection requires a separate ADR.

8. Edge Layer

The production architecture SHOULD include an edge layer capable of:

CDN caching;

TLS termination;

DDoS mitigation;

WAF controls;

rate limiting where applicable.

Specific provider selection requires a separate ADR.

9. Communication

Preferred communication style:

Public Website
    -> CMS/API
    -> published content

CMS
    -> PostgreSQL

CMS
    -> Object Storage

Publish operation
    -> cache invalidation / revalidation where required

Do not introduce asynchronous messaging infrastructure unless an approved requirement demonstrates the need.

10. Rendering Strategy

Public editorial pages SHOULD favor:

server-rendered HTML;

static output where appropriate;

CDN caching;

minimal browser JavaScript.

Interactive functionality MAY use client-side JavaScript when required.

A full client-side SPA architecture is not part of the approved design.

11. Cache Strategy

The system SHOULD cache publicly published content at the edge where correctness permits.

Publishing or materially updating content MUST provide an approved mechanism for cache invalidation or revalidation.

Cache MUST NOT become the source of truth.

12. Search

Initial search SHOULD rely on the approved PostgreSQL-based architecture unless requirements demonstrate that a dedicated search engine is necessary.

A dedicated search service requires a new ADR.

13. Security Boundaries

Primary trust boundaries:

Anonymous Internet
      |
      v
Public Website
      |
      v
CMS/API
      |
      v
Persistent Data

The Editorial CMS is a protected administrative surface.

PostgreSQL and private application infrastructure MUST NOT be exposed directly to anonymous public access.

Detailed controls belong in /docs/03-security/.

14. Privacy Boundary

New analytics, advertising or third-party integrations MUST be reviewed against:

/docs/03-security/LGPD.md

External services MUST NOT be introduced solely as implementation convenience when they create unreviewed personal-data processing.

15. Architectural Constraints

The project MUST NOT introduce without an approved ADR:

another primary database;

microservices;

Kubernetes;

distributed event streaming;

dedicated search infrastructure;

another CMS;

another public frontend framework;

duplicated persistence mechanisms;

parallel authentication systems.

16. Deployment Environments

The architecture MUST distinguish:

local;

staging;

production.

Staging MUST remain isolated from public production indexing.

Detailed deployment architecture belongs in /docs/06-operations/DEPLOYMENT.md.

17. Repository Boundary

Expected repository layout:

apps/
  web/
  cms/

packages/
  ...

tests/

infrastructure/

docs/

Detailed package boundaries SHOULD emerge from actual implementation needs rather than speculative abstraction.

18. Architecture Change Rule

If implementation requires changing a decision in this document:

stop implementation;

create or update an ADR;

mark ADR as PROPOSED;

obtain human approval;

update this document;

implement through an approved Task.

19. Approval

Current status:

DRAFT