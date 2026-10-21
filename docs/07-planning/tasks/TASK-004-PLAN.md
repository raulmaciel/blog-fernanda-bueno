# TASK-004 ExecPlan

Status: APPROVED

## Objective

Build the smallest functional Payload CMS foundation with its definitive PostgreSQL adapter under BL-004, with no separate BL-020 implementation.

## Current State

apps/cms/ contains only .gitkeep. The root tsconfig.base.json enables strict TypeScript. ADR-0002 and ADR-0003 are approved. No CMS package, database adapter, connection configuration, or local PostgreSQL service is supplied by the repository.

## Reuse

Reuse apps/cms/, infrastructure/, the root TypeScript baseline, and Payload's supported Next.js admin/API route pattern. Keep apps/web/ untouched.

## Files Planned

- apps/cms/package.json and apps/cms/package-lock.json
- apps/cms/tsconfig.json
- apps/cms/next.config.mjs
- apps/cms/src/payload.config.ts
- apps/cms/src/app/(payload)/layout.tsx
- apps/cms/src/app/(payload)/admin/[[...segments]]/page.tsx
- apps/cms/src/app/(payload)/api/[...slug]/route.ts
- Other minimum official files inside apps/cms/src/app/(payload)/ required by the selected compatible release, including not-found.tsx, custom.scss, or equivalents only when required
- apps/cms/src/app/(payload)/admin/importMap.js if generated or required by Payload; determine versioning from the selected release's official guidance
- apps/cms/.env.example and apps/cms/.gitignore; apps/cms/.env exists only locally and is ignored
- infrastructure/local/postgres/compose.yaml and one minimal empty-volume initialization script for the non-superuser application role and dedicated development database
- Remove apps/cms/.gitkeep and infrastructure/.gitkeep

Use the smallest official file set required by the chosen compatible release. An additional official file within apps/cms/ and Payload's standard structure is not a PLAN MISMATCH when the selected release's official documentation requires it and it adds no product functionality or new direct dependency. Any new direct dependency remains a PLAN MISMATCH. apps/cms/src/collections/Users.ts is an exception, not a planned file: stop for PLAN MISMATCH if a custom authentication collection is demonstrably required for functional startup.

## Dependencies Planned

Pin mutually compatible versions of payload, @payloadcms/next, @payloadcms/db-postgres, next, react, and react-dom. Add typescript and applicable @types packages only where required by the build. Use npm locally in apps/cms/ and commit its lockfile. No rich-text, upload, GraphQL, cloud, testing, or alternate database package is proposed.

## Proposed Steps

1. Confirm repository status, approved Task and ExecPlan, local Node.js version against the selected Payload release's official requirement, compatibility among Payload, @payloadcms/next, @payloadcms/db-postgres, Next.js, React, and React DOM, and availability of local Docker Engine/Compose. Stop and report an incompatible runtime or unavailable Compose before installing; do not change Node.js automatically.
2. Add the local manifest, lockfile, ignore rules, environment template, and tsconfig extending the root baseline. Keep apps/cms/.env local and ignored; put only names/placeholders in .env.example, with no global Windows environment requirement.
3. Add the development-only PostgreSQL 16 Compose service under infrastructure/local/postgres/ with a persistent named volume and a host port bound only to 127.0.0.1. Add one empty-volume initialization script that creates a dedicated development database and non-superuser Payload role with only the privileges needed there. Configure Compose to accept --env-file apps/cms/.env but explicitly pass only required PostgreSQL/bootstrap variables, never PAYLOAD_SECRET. Add the smallest Payload configuration with the PostgreSQL adapter and only the official Next/Payload files required for functional startup. Prefer Payload's default administrative bootstrap; a custom Users collection requires PLAN MISMATCH review if demonstrably necessary.
4. Use local non-production values from ignored apps/cms/.env to validate authenticated database access as the application user, then run npm ci, build, and local Payload startup. Make no temporary database configuration.
5. Verify database connectivity, protected admin/API behavior, absence of secrets and unexpected changed files; validate the non-superuser role, loopback binding, and container environment without printing secrets. Run docker compose down without -v and a subsequent up to verify the database persists. Classify generated files against official versioning guidance and remove only local build/cache/dependency artifacts.
6. Report actual results and stop at VERIFIED only if every required check passes.

## PostgreSQL Configuration

Configure @payloadcms/db-postgres once in the Payload configuration. Its pool uses DATABASE_URL from the Payload process environment. The sole container is the development PostgreSQL 16 service defined in infrastructure/local/postgres/compose.yaml, using a persistent named volume at the official PostgreSQL 16 data path and a port bound only to 127.0.0.1. Use the image's administrative account only for first-volume bootstrap; the initialization script creates the dedicated development database and a separate application user without SUPERUSER, granting only privileges needed for Payload's development schema changes. The script runs only when the volume is empty and is not an application migration. No production infrastructure, committed connection string, hosting choice, or separate BL-020 implementation is included.

Allow only the minimal schema changes the official adapter performs for functional startup in the development database. This does not establish the formal migration workflow: creation, generation, review, and disciplined execution of migrations remain for the corresponding backlog item. Add no custom migration scripts or policies. If the adapter's default behavior conflicts with that separation, stop for PLAN MISMATCH.

## Environment Variables

- DATABASE_URL: local PostgreSQL connection string for the non-superuser application account, read by Payload and never committed.
- PAYLOAD_SECRET: strong local signing secret, read only by Payload and never committed.
- POSTGRES_PASSWORD: local image-administrator bootstrap password, passed only to the PostgreSQL container.
- APP_DB, APP_USER, APP_PASSWORD: local development database name and application-role credentials needed by the one-time initialization script, passed only to the PostgreSQL container. DATABASE_URL must refer to this same account and database.

Keep all real values in ignored apps/cms/.env and document only names/placeholders in apps/cms/.env.example. From the repository root, Compose may use --env-file apps/cms/.env with -f infrastructure/local/postgres/compose.yaml. The Compose service must explicitly declare only POSTGRES_PASSWORD, APP_DB, APP_USER, and APP_PASSWORD in its environment; it must not use env_file to forward the entire .env or pass PAYLOAD_SECRET. Fail clearly when required values are absent without logging them or printing expanded Compose configuration.

## Generated Files

- Version source and configuration files required for the CMS foundation.
- Version generated files only when the selected Payload release's official guidance requires it. Check that guidance specifically for admin/importMap.js before deciding whether it belongs in the commit.
- Exclude local dependencies, build output, caches, logs, and secrets. Do not assume every Payload-generated file should be removed after validation.

## Validation

Before npm ci, verify the local Node.js version meets the selected Payload release's official requirement and confirm compatibility among Payload, @payloadcms/next, @payloadcms/db-postgres, Next.js, React, and React DOM. Confirm Docker Engine/Compose is available; stop and report an incompatible runtime or unavailable Compose without changing Node.js or installing packages. Validate Compose without printing expanded secrets, start PostgreSQL 16, and authenticate as the non-superuser application role. Inspect the role's privileges, database access, loopback-only binding, and absence of PAYLOAD_SECRET from the container environment without displaying values. Then run npm ci and the manifest build command from apps/cms/. Start the app with a reachable PostgreSQL instance and verify an expected admin/API response backed by that connection. Check missing-variable failure, direct dependencies, strict tsconfig inheritance, no alternate adapter, Git status, and correct treatment of secrets, officially versioned generated files, and local artifacts. Run docker compose down without -v and up again; verify the same development database remains available. Never run down -v automatically or copy production data locally.

## Risks

The selected Payload/Next release may require additional direct packages; these require PLAN MISMATCH. Required official support files under apps/cms/ remain within the stated boundary. Unavailable Docker/Compose or a failed local PostgreSQL bootstrap prevents live verification. Prefer the default administrative bootstrap; a demonstrably required custom Users collection requires PLAN MISMATCH, leaving authentication policy for BL-022.

## Rollback / Recovery

If initialization fails, stop the local process and Compose service, inspect diagnostics without exposing secrets, and remove only local artifacts or changes created by this Task after verifying their absolute paths. Preserve the named volume, officially required versioned generated files, and unrelated work. Do not run down -v automatically; a partially initialized volume needs explicit review before any destructive reset. Re-run npm ci from the lockfile after a scoped correction authorized by the Task; report PLAN MISMATCH when the approved boundaries are insufficient.

## Open Questions / PLAN MISMATCH Stops

- Stop if a compatible Payload release requires another database, provider, or unlisted direct package.
- Stop if a functional admin demonstrably requires a custom authentication collection (including apps/cms/src/collections/Users.ts), roles, or another unapproved persistent entity beyond Payload's default administrative bootstrap.
- Do not stop solely for an additional official file in Payload's standard structure under apps/cms/ when official documentation for the selected release requires it and it adds no product feature or new direct dependency.
- Stop if the official adapter's default development-schema behavior conflicts with the separation from the later formal migration workflow.
- Stop if the approved local Compose setup cannot provide a real authenticated PostgreSQL connection without another infrastructure component or a temporary adapter.
- Stop if a non-superuser application role with sufficient development-database privileges cannot be created with the single approved bootstrap script, or if Compose must forward PAYLOAD_SECRET or other unrelated variables to PostgreSQL.
- Stop if build/startup requires changing ADRs, root workspace configuration, or public frontend files.
