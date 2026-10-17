# TASK-004 — Payload CMS and PostgreSQL foundation

Status: APPROVED
Backlog Item: BL-004 — Initialize Payload CMS with PostgreSQL
ExecPlan Required: YES
ExecPlan: docs/07-planning/tasks/TASK-004-PLAN.md (Status: APPROVED)

## Purpose

Establish one minimal functional Payload CMS application in apps/cms/ using PostgreSQL as its only database. This delivery includes the former BL-020 scope exactly once.

## Requirements

- Follow approved ADR-0002 and ADR-0003. Use the definitive Payload PostgreSQL adapter from the first runnable configuration.
- Keep CMS configuration and runtime inside apps/cms/ and reuse the root strict TypeScript baseline.
- Read the PostgreSQL connection and Payload secret from environment variables; commit no credential or real environment value.
- Provide only the framework files needed to install, build, start, and verify the CMS against a reachable PostgreSQL instance.
- Do not introduce a temporary database, disposable adapter, alternate persistence path, or a second future PostgreSQL integration.
- Allow only the minimal development-schema changes performed by the official PostgreSQL adapter for functional startup. Formal migration creation, generation, review, and disciplined execution remain for the corresponding backlog item; add no custom migration scripts or policies here.
- The Task and its ExecPlan both require explicit human approval before implementation.

## Relevant Documentation

- AGENTS.md
- docs/07-planning/PLANS.md and BACKLOG.md, BL-004 and historical BL-020
- docs/02-architecture/adr/ADR-0002-payload-cms.md
- docs/02-architecture/adr/ADR-0003-postgresql.md
- docs/02-architecture/SAD.md, CMS, Database and Repository Boundary
- docs/03-security/SECURITY-BASELINE.md and LGPD.md
- docs/05-engineering/CODING-STANDARDS.md, TEST-STRATEGY.md and DEFINITION-OF-DONE.md
- Official Payload installation and PostgreSQL adapter documentation for the compatible version selected during implementation

## Existing Implementation to Reuse

apps/cms/ contains only .gitkeep. Reuse that directory and the root tsconfig.base.json. apps/web/ is a separate Astro application and is not a CMS scaffold. No CMS manifest, lockfile, configuration, database adapter, route, or environment template exists.

## Allowed Changes

- Within apps/cms/ only: add the minimal npm manifest and lockfile, Next/Payload configuration, an application tsconfig extending ../../tsconfig.base.json, the minimum official Payload + Next files required by the selected compatible release, a non-secret .env.example, and a local .gitignore for local build/cache/dependency artifacts and secrets.
- Official files under apps/cms/src/app/(payload)/ include the required admin/API routes and support files such as not-found.tsx, custom.scss, or equivalents only if required by that release. Allow admin/importMap.js when generated or required by Payload. An additional official file within the standard Payload structure is in scope only if the selected release's official documentation requires it, it stays within apps/cms/, and it adds neither product functionality nor a new direct dependency.
- Prefer Payload's default administrative bootstrap. Do not add a custom Users collection if the selected release provides the administrative collection needed for bootstrap. If a custom authentication collection is demonstrably required for a functional CMS, stop for PLAN MISMATCH before adding it.
- Remove apps/cms/.gitkeep once real application files exist.
- Use the PostgreSQL adapter in the final Payload configuration from the outset.

## Forbidden Changes

- No SQLite, MongoDB, temporary or in-memory database configuration, second database adapter, or duplicate PostgreSQL setup.
- No PostgreSQL server provisioning, container, cloud provider, infrastructure resource, production secret, or real .env file in version control.
- No Article, Author, Category, Tag, Media or editorial workflow model; no custom migration scripts or policies. The formal migration workflow remains for its corresponding backlog item.
- No custom authentication, authorization policy, roles, MFA, public frontend change, analytics, advertising, or unrelated tooling.
- Do not change ADRs, roadmap, backlog, root tsconfig.base.json, or files outside apps/cms/ except Task status.

## Dependencies

- Direct runtime packages proposed: payload, @payloadcms/next, @payloadcms/db-postgres, next, react, and react-dom at mutually compatible pinned versions.
- Direct development packages proposed only where required for the TypeScript/Next build: typescript and applicable @types/node, @types/react, and @types/react-dom.
- npm and an apps/cms/package-lock.json provide reproducible installation; no root workspace/package-manager configuration.
- A reachable development PostgreSQL instance with a dedicated least-privilege connection is a validation prerequisite, not a repository infrastructure deliverable.
- Additional direct packages require PLAN MISMATCH review before installation.

## Acceptance Criteria

- AC-01: A clean npm ci in apps/cms/ succeeds from the committed lockfile with only approved direct dependencies.
- AC-02: The CMS application builds successfully with the approved Payload/Next setup and an app tsconfig that preserves the root strict setting.
- AC-03: With a valid DATABASE_URL and PAYLOAD_SECRET supplied outside Git, the application starts, connects to PostgreSQL, and serves its expected administrative/API route without an alternate database.
- AC-04: Without the required environment variables, startup fails clearly without printing secrets; no real credential or local environment file is committed.
- AC-05: The CMS and PostgreSQL adapter are configured once in apps/cms/. No temporary persistence mechanism or separate BL-020 implementation remains.
- AC-06: Git changes are limited to the approved apps/cms/ foundation and Task status; local cache, dependency, and build artifacts are excluded. Generated files are versioned only when required by official guidance for the selected Payload release, including admin/importMap.js if applicable.
- AC-07: Administrative endpoints are not made anonymously writable. Use Payload's default administrative bootstrap when available; custom authentication and permissions remain for later approved work.

## Required Tests / Validation

- Before installation, check the local Node.js version against the selected Payload release's official requirement and confirm compatibility among Payload, @payloadcms/next, @payloadcms/db-postgres, Next.js, React, and React DOM. Do not alter Node.js automatically; stop and report an incompatible runtime before installing dependencies.
- Inspect the manifest, lockfile, tsconfig, environment template, ignore rules, and changed-file list.
- From apps/cms/, run npm ci and the manifest build command. Confirm neither changes unexpected versioned files.
- Start the application with non-production test credentials against a reachable PostgreSQL instance; verify PostgreSQL connection and expected administrative/API response.
- Check startup failure with missing required environment values without exposing their values in output.
- Check that no alternate adapter, secret, local build/cache/dependency artifact, or unrelated file enters Git. Classify source/configuration, generated files that official Payload guidance requires versioning, and local artifacts; check the selected release's official guidance for admin/importMap.js before deciding whether to version it.
- If PostgreSQL or another required validation prerequisite is unavailable, report it and leave the Task short of VERIFIED.

## NFR Impact

Adds an internal CMS runtime and persistent connection. Keep startup and build behavior observable and maintainable; no public-site performance budget changes are claimed.

## Security Impact

The administrative and database trust boundaries are active. Use environment secrets, least-privilege database credentials, and Payload's built-in access protections. Review the Security Baseline; do not expose an anonymously writable administrative endpoint.

## LGPD Impact

A minimum administrative user may hold identity data. Use only approved fields and non-production test data; no new processor or tracking integration is authorized.

## SEO Impact

No public website URL, indexing, metadata, or crawler behavior changes.

## Performance Impact

No change to public frontend output. Validate that the foundation starts and builds; production capacity and tuning remain outside this Task.

## Definition of Done

After separate human approval of this Task and its ExecPlan, satisfy AC-01 through AC-07 and run all required validation, including a live PostgreSQL connection. Report actual results, dependencies, impacts, and limitations. Mark VERIFIED only after applicable checks succeed; mark DONE only through the approved completion process.
