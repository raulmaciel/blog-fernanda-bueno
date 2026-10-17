ADR-0003-postgresql.md

ADR-0003 — Use PostgreSQL as the Primary Database

Status: APPROVED
Date: 2026-10-17
Decision Owner: Product / Architecture Owner

Context

The platform contains strongly related structured data such as:

Articles;

Authors;

Categories;

Tags;

Users;

Roles;

Media metadata;

redirects;

audit information.

The data model requires:

relational integrity;

transactions;

indexing;

reliable migrations;

structured querying.

Decision

Use PostgreSQL as the primary persistent database.

Rationale

The domain is primarily relational.

PostgreSQL provides:

strong relational modeling;

constraints;

transactions;

indexing;

mature operational tooling;

JSON support where selectively useful;

adequate search capability for the initial platform.

Constraints

PostgreSQL is the authoritative structured datastore unless superseded by a future approved ADR.

Do not introduce another primary database for isolated features without demonstrated need.

Normal media binary objects MUST remain outside PostgreSQL.

Alternatives Considered

MongoDB

Rejected because the current domain benefits from relational integrity and structured relationships.

MySQL

Technically viable, but PostgreSQL is preferred for the approved architecture and expected data/query capabilities.

Multiple databases

Rejected because no current requirement justifies additional persistence complexity.

Consequences

Positive:

relational integrity;

transactional behavior;

mature ecosystem;

sufficient initial search capabilities;

reduced infrastructure complexity.

Negative:

schema evolution requires disciplined migrations;

database scaling must be monitored if future traffic patterns change substantially.

Approval

Current status:

APPROVED

Human approval required before changing to:

APPROVED