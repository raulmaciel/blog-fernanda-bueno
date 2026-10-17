Project: News Platform
Version: 0.1
Status: DRAFT
Last Updated: 2026-10-17

1. Purpose

This document defines the main data flows across architectural boundaries.

2. Public Article Read

sequenceDiagram
    participant R as Reader
    participant E as Edge/CDN
    participant W as Public Website
    participant C as CMS/API
    participant D as PostgreSQL

    R->>E: GET Article URL

    alt Cached
        E-->>R: Cached HTML
    else Not cached
        E->>W: Request
        W->>C: Read published Article
        C->>D: Query published data
        D-->>C: Article data
        C-->>W: Published content
        W-->>E: Rendered HTML
        E-->>R: HTML
    end

Only published content may be returned through normal public Article routes.

3. Article Publishing

sequenceDiagram
    participant U as Editorial User
    participant C as CMS
    participant D as PostgreSQL
    participant E as Edge/CDN

    U->>C: Publish Article
    C->>C: Validate permissions
    C->>C: Validate publication rules
    C->>D: Persist published state
    D-->>C: Success
    C->>E: Invalidate/revalidate affected cache
    C-->>U: Publication result

Failure MUST remain observable.

4. Media Upload

sequenceDiagram
    participant U as Editorial User
    participant C as CMS
    participant S as Object Storage
    participant D as PostgreSQL

    U->>C: Upload media
    C->>C: Validate file
    C->>C: Process approved variants
    C->>S: Store media objects
    S-->>C: Storage references
    C->>D: Persist media metadata
    C-->>U: Media available

PostgreSQL stores metadata and references, not normal media binary payloads.

5. Public Media Read

Reader
   ↓
CDN / public media endpoint
   ↓
Object Storage

Public media delivery SHOULD avoid routing every request through the CMS.

6. Draft Preview

Authenticated Editorial User
        ↓
Preview request
        ↓
CMS authorization
        ↓
Draft content
        ↓
Non-indexable preview

Anonymous visitors MUST NOT gain access to private drafts through predictable preview URLs.

7. Privacy Preference Flow

Visitor
   ↓
Privacy interface
   ↓
Preference decision
   ↓
Approved consent/preference mechanism
   ↓
Optional integrations enabled or blocked

Detailed behavior belongs in /docs/03-security/LGPD.md.

8. Advertising Flow

Reader
   ↓
Public Website
   ↓
Approved Ad Slot
   ↓
Privacy decision / applicable legal basis
   ↓
Approved advertising provider

Advertising integrations MUST NOT bypass approved privacy rules.

9. Search Engine Flow

Search Crawler
    ↓
Public Website
    ├── Article HTML
    ├── structured data
    ├── sitemap
    ├── News sitemap
    └── RSS

Draft and preview content MUST remain outside this flow.

10. Trust Rule

Data crossing from:

Internet -> Application

MUST be treated as untrusted.

Data originating from authenticated users MUST still be validated and authorized.

11. Approval

Current status:

DRAFT