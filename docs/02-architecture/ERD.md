C4.md

Project: News Platform
Version: 0.1
Status: DRAFT
Last Updated: 2026-10-17

1. Purpose

This document provides the architecture using the C4 model.

Only currently relevant levels are maintained.

2. Level 1 — System Context

flowchart LR
    Reader[Reader]
    Editorial[Editorial User]
    Admin[Administrator]

    Platform[News Platform]

    Search[Search / Discovery Platforms]
    Ads[Advertising Provider]
    Analytics[Approved Analytics]
    Storage[Object Storage]

    Reader --> Platform
    Editorial --> Platform
    Admin --> Platform

    Platform --> Search
    Platform --> Ads
    Platform --> Analytics
    Platform --> Storage

News Platform

Provides:

public news publication;

editorial administration;

publishing workflow;

SEO/distribution support;

advertising integration;

privacy-aware operation.

3. Level 2 — Containers

flowchart LR
    Reader[Reader]
    Editor[Editorial User]

    subgraph News Platform
        Edge[Edge / CDN / WAF]
        Web[Public Website\nAstro]
        CMS[Editorial CMS\nPayload]
        DB[(PostgreSQL)]
        Media[(Object Storage)]
    end

    Reader --> Edge
    Edge --> Web

    Editor --> CMS

    Web --> CMS
    CMS --> DB
    CMS --> Media
    Web --> Media

4. Container Responsibilities

Public Website

Technology:

Astro

Responsibilities:

public rendering;

reader navigation;

SEO output;

public search;

advertising presentation;

privacy UI.

Editorial CMS

Technology:

Payload CMS

Responsibilities:

content management;

authentication;

authorization;

publishing;

editorial workflow;

media management.

PostgreSQL

Technology:

PostgreSQL

Responsibilities:

structured application persistence.

Object Storage

Responsibilities:

media objects;

processed media variants.

Provider:

TBD by ADR

Edge / CDN / WAF

Responsibilities:

content delivery;

caching;

network protection.

Provider:

TBD by ADR

5. Level 3 — Components

Detailed component diagrams MUST be added only after meaningful internal modules exist.

Do not invent component architecture before implementation demonstrates actual boundaries.

6. Approval

Current status:

DRAFT

ERD.md

Project: News Platform
Version: 0.1
Status: DRAFT
Last Updated: 2026-10-17

1. Purpose

This document describes the conceptual persistent-data model.

It is NOT authorization to create every represented table immediately.

Physical schema is introduced only through approved implementation Tasks and migrations.

2. Core Model

erDiagram

    USER {
        uuid id
    }

    ROLE {
        uuid id
    }

    AUTHOR {
        uuid id
    }

    ARTICLE {
        uuid id
    }

    CATEGORY {
        uuid id
    }

    TAG {
        uuid id
    }

    MEDIA {
        uuid id
    }

    REDIRECT {
        uuid id
    }

    AD_SLOT {
        uuid id
    }

    AUDIT_EVENT {
        uuid id
    }

    USER }o--o{ ROLE : assigned
    AUTHOR ||--o{ ARTICLE : writes
    ARTICLE }o--o{ CATEGORY : classified_as
    ARTICLE }o--o{ TAG : tagged_with
    ARTICLE }o--o{ MEDIA : uses
    USER ||--o{ AUDIT_EVENT : performs

3. Core Entities

Article

Primary editorial entity.

Detailed fields belong in:

/docs/04-editorial/CONTENT-MODEL.md

Author

Public editorial identity associated with Articles.

An Author is not necessarily equivalent to a CMS User.

User

Authenticated administrative identity.

Role

Permission grouping for administrative access.

Detailed authorization belongs in security documentation.

Category

Primary editorial classification.

Tag

Optional granular editorial classification.

Media

Metadata and references for stored media objects.

Binary files remain in Object Storage.

Redirect

Persistent mapping used to preserve public URL continuity.

Ad Slot

Approved advertising position.

Detailed advertising model belongs in:

/docs/04-editorial/ADVERTISING.md

Audit Event

Traceable record for operations requiring auditability.

Exact event scope belongs in security and operational documentation.

4. Relationships

An Article:

MUST have at least one Author according to final content rules;

MUST belong to approved editorial classification;

MAY contain multiple Tags;

MAY reference multiple Media objects;

MAY reference Related Articles.

Detailed cardinality is finalized in CONTENT-MODEL.md.

5. Deferred Entities

The following MUST NOT be added merely because they may become useful:

Reader;

Subscription;

Comment;

Payment;

Tenant;

RecommendationProfile;

NewsletterDelivery.

They require future approved scope.

6. Physical Schema Rule

The physical PostgreSQL schema is authoritative only after migrations exist.

The conceptual ERD MUST NOT be used as permission to create speculative fields or tables.

7. Approval

Current status:

DRAFT