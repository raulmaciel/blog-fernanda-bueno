# TASK-006 — Initial CI

Status: IN_PROGRESS

Backlog Item: BL-006 — Establish initial CI

ExecPlan Required: YES — GitHub Actions is a newly introduced external CI provider under PLANS.md §10. The provider choice is human-approved and needs no ADR, but this Task and its ExecPlan require separate approval before implementation.

## Purpose

Automate the existing BL-005 local validation commands with the smallest initial GitHub Actions workflow.

## Requirements

- GitHub Actions is the only CI tooling. Create one workflow with one job on a GitHub-hosted Ubuntu runner; trigger it on `pull_request`, `push` to `main`, and manual `workflow_dispatch`.
- Use Node.js `24.19.0` as the single version, subject to confirming compatibility with the locked applications before implementation. No version matrix.
- Run `npm ci` separately from the repository root, `apps/web/`, and `apps/cms/`, using each existing lockfile. No npm workspaces.
- Invoke the unchanged root scripts in order: `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`. Preserve CMS `next typegen && tsc --noEmit` and `next build --webpack` through those scripts.
- The CMS configuration requires `DATABASE_URL` and `PAYLOAD_SECRET` even to load Next/Payload configuration. Before deciding on a database service, establish whether the required typecheck and build actually connect to PostgreSQL. Include PostgreSQL 16 as an ephemeral GitHub Actions service container only if a live connection is required; do not assume that environment-variable presence proves database necessity.
- Use disposable CI-only values for `DATABASE_URL` and `PAYLOAD_SECRET` in the CMS validation process. Use no real development/production values and no GitHub Secrets in this phase. Never print either value or pass `PAYLOAD_SECRET` to PostgreSQL.
- If PostgreSQL is required, wait for its health check, reuse the existing database bootstrap script where compatible, and connect Payload as a non-superuser application user. The CI job must not depend on local Docker Compose or a persistent database.
- Set the minimum `GITHUB_TOKEN` permissions to `contents: read`. A failed install or validation command must make the workflow fail with nonzero status; do not use `continue-on-error` or hide failures.
- Keep generated Next/Payload types, dependencies, builds, and caches unversioned. Report the actual test count; zero tests show only that the runner executed, not behavioral coverage.

## Relevant Documentation

- AGENTS.md
- docs/07-planning/BACKLOG.md, BL-006
- docs/07-planning/ROADMAP.md, PHASE-01
- docs/07-planning/PLANS.md
- docs/07-planning/tasks/TASK-005-local-validation.md
- docs/05-engineering/TEST-STRATEGY.md
- docs/05-engineering/DEFINITION-OF-DONE.md
- docs/03-security/SECURITY-BASELINE.md
- docs/03-security/LGPD.md
- GitHub Actions Node.js CI guide: https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs
- GitHub Actions PostgreSQL service guide: https://docs.github.com/en/actions/tutorials/use-containerized-services/create-postgresql-service-containers
- GitHub Actions manual-run rule: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow

## Existing Implementation to Reuse

- Root `package.json` already defines all five validation commands; root, web, and CMS have independent lockfiles. No CI workflow or `.github/workflows/` directory exists.
- Root `typecheck` invokes Astro diagnostics and CMS `next typegen && tsc --noEmit`. Root `build` invokes both existing application builds; the CMS build retains `--webpack`.
- `apps/cms/next.config.mjs` rejects missing `DATABASE_URL` or `PAYLOAD_SECRET`; `apps/cms/src/payload.config.ts` configures the PostgreSQL adapter. These files establish the environment-variable requirement, but do not by themselves prove that typecheck/build open a database connection.
- `infrastructure/local/postgres/init-app-db.sh` creates a database and non-superuser application user. Reuse it if the CI service is needed and it can run unchanged. Do not invoke local Compose or read `apps/cms/.env`.

## Proposed CI Workflow

- One file: `.github/workflows/ci.yml`. One Ubuntu job, official checkout and Node setup actions, Node.js `24.19.0`, `permissions: contents: read`, `pull_request`, `push` to `main`, and `workflow_dispatch`; no cache, matrix, deployment, or release steps.
- Sequence: checkout; set up Node; `npm ci` at root, web, and CMS; provide disposable CMS environment values; run the five existing root validation scripts in the stated order; verify no tracked-file drift.
- First determine whether CMS typecheck/build require a live database. If they do, add one PostgreSQL 16 service with `pg_isready` health check. A job running directly on Ubuntu reaches the service through a mapped localhost port after the health check. Bootstrap a non-superuser test account using the existing script if compatible. The service receives only database/bootstrap variables, never `PAYLOAD_SECRET`; the CMS steps receive `DATABASE_URL` and `PAYLOAD_SECRET` without logging their values.
- If both commands pass without live PostgreSQL, omit the service and retain disposable environment values required to load CMS configuration. A failed command must make the workflow fail; subsequent validation steps do not override its status.

## Allowed Changes

- Create only `.github/workflows/ci.yml` and update this Task's status through the approved lifecycle.
- Reuse existing scripts, lockfiles, and bootstrap code unchanged. If required validation needs another file or code/configuration change, stop with PLAN MISMATCH.

## Forbidden Changes

- No other CI provider, additional workflow, production infrastructure, local Compose dependency, deploy, release automation, coverage service, complex cache, Node matrix, or broad `GITHUB_TOKEN` permissions.
- No new npm dependency, linter, test runner, build tool, workspace, package script, application code, schema/migration workflow, or secret file.
- No changes to `apps/web/`, `apps/cms/`, `infrastructure/`, ADRs, backlog, roadmap, or unrelated documentation during implementation.
- No real credentials, production data, or Personal Data in CI configuration, logs, or test database.

## Dependencies

- BL-001 through BL-005 are DONE; BL-005 commands and three lockfiles are available.
- GitHub Actions is human-approved as BL-006 engineering tooling; no ADR is required for this choice.
- Confirm Node.js `24.19.0` compatibility and whether CMS checks require live PostgreSQL before deciding the final workflow content.
- Human approval of this Task and its separate ExecPlan is required before implementation.

## Acceptance Criteria

- AC-01: Exactly one GitHub Actions workflow runs on pull requests, pushes to `main`, and manual `workflow_dispatch` in one GitHub-hosted Ubuntu job with Node.js `24.19.0`, `contents: read` permissions, and no extra provider, matrix, cache, deploy, or release automation.
- AC-02: The workflow performs root, web, and CMS `npm ci`, then invokes the five unchanged BL-005 root validation commands in order. A real GitHub-hosted `pull_request` run must execute all three `npm ci` commands and all five BL-005 commands successfully; any nonzero result makes the workflow fail, with no failure suppressed.
- AC-03: CMS validation receives only disposable CI `DATABASE_URL` and `PAYLOAD_SECRET` values without GitHub Secrets or value disclosure. Evidence determines whether a live database is required. If required, a healthy PostgreSQL 16 service is reachable on localhost, Payload uses a non-superuser application account, and `PAYLOAD_SECRET` is absent from the service environment. If not required, no service is present.
- AC-04: The implementation is published on its own branch and a pull request to `main` produces at least one successful real GitHub-hosted `pull_request` run before VERIFIED, including Next type generation, CMS TypeScript checking, and both builds. Validation creates no unexpected tracked-file changes and commits no generated, dependency, cache, or build output. After DONE and human integration into `main`, the `push` trigger validates the integrated workflow again; `workflow_dispatch` is available for future manual runs but does not block the first VERIFIED.
- AC-05: No real secret or production data appears in configuration or logs. The job has no write permission or production deployment capability.
- AC-06: The report records the actual test count. Zero tests do not count as behavioral coverage; pre-existing non-failing Biome and Next warnings remain visible and are not corrected by this Task.

## Required Validation

- Inspect the workflow diff and Git status; confirm only the approved workflow is implemented and no dependency, script, or application file changed.
- Confirm Node.js `24.19.0` compatibility with locked Astro, Payload, Next, and TypeScript versions. Before choosing a service, verify CMS typecheck/build behavior with disposable required variables and no reachable PostgreSQL; record whether failure is specifically due to a missing database. Do not weaken required validation to avoid the service.
- If a service is needed, verify PostgreSQL 16 health, authenticated non-superuser access, localhost reachability, and absence of `PAYLOAD_SECRET` in its environment, without printing values. Do not use local Compose.
- Publish the implementation branch, open a pull request to `main`, and inspect its real GitHub-hosted `pull_request` run. Record passing results for all three `npm ci` installs and all five BL-005 commands, plus the test count. Inspect logs for leaked values or hidden failures, check tracked-file drift, and run `git diff --check` locally. Local YAML validation alone is insufficient: only a successful real PR run permits VERIFIED, and any nonzero command must make the workflow fail. Do not merge automatically to `main`. GitHub requires the workflow file on the default branch for `workflow_dispatch`; that optional manual trigger is not part of the first VERIFIED gate.
- If Node compatibility, service/bootstrap reuse, or approved commands require new files, dependencies, permissions, architectural changes, or broader scope, stop and report PLAN MISMATCH.

## NFR Impact

Automates existing checks without changing production application behavior or NFR contracts.

## Security Impact

Use `contents: read`, disposable CI values, and a non-superuser account if PostgreSQL is required. No real secrets, production data, or deployment credentials may enter CI. Do not print values or introduce a new application-data integration.

## LGPD Impact

Use synthetic data only; introduce no reader/CMS Personal Data, tracking, or production-data copy. GitHub Actions is approved as engineering tooling, not as an application-data processor.

## SEO Impact

No public URL, metadata, indexing, or rendered-content change.

## Performance/Cost Impact

One job and one Node version limit runner use. Omit PostgreSQL if it is unnecessary; add no cache, matrix, or persistent service without a demonstrated need and separate approval.

## Definition of Done

After separate human approval of this Task and ExecPlan, satisfy AC-01 through AC-06 and Required Validation with at least one successful real GitHub-hosted `pull_request` run before any merge to `main`. Report actual commands, test count, changed files, impacts, and remaining warnings. Mark VERIFIED only after validation succeeds; DONE requires the approved completion process.