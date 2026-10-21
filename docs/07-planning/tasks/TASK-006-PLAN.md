# TASK-006 ExecPlan

Status: APPROVED

## Objective

Prepare one GitHub Actions workflow that runs the five BL-005 local validation commands on a GitHub-hosted Ubuntu runner with Node.js `24.19.0`. Add an ephemeral PostgreSQL 16 service only if required CMS validation actually connects to a database.

## Current State

- No `.github/workflows/` exists. Root `package.json` provides `format:check`, `lint`, `typecheck`, `test`, and `build`; root, web, and CMS have independent npm lockfiles.
- CMS `next.config.mjs` requires `DATABASE_URL` and `PAYLOAD_SECRET`; CMS typecheck runs `next typegen && tsc --noEmit`. This proves environment-variable presence is required, but does not prove live PostgreSQL is required for typecheck/build.
- `infrastructure/local/postgres/init-app-db.sh` creates a non-superuser application user and development database. It must remain unchanged; local Docker Compose and `.env` are not CI prerequisites.

## Reuse

- Existing npm scripts, all three lockfiles, CMS configuration, and the PostgreSQL bootstrap script if a database service is needed.
- Official GitHub Actions checkout/Node setup actions and, conditionally, a GitHub Actions PostgreSQL 16 service container. No new npm tool, CI provider, or local Compose dependency.

## Proposed Steps

1. Confirm Node.js `24.19.0` satisfies the locked Astro, Payload, Next, and TypeScript requirements. Confirm supported official action references. If incompatible, stop with PLAN MISMATCH before editing.
2. Using disposable `DATABASE_URL` and `PAYLOAD_SECRET` values, determine whether the required CMS typecheck and build need a reachable PostgreSQL instance. Record evidence. Do not equate a configuration-level requirement for variables with a requirement for a live database.
3. Create only `.github/workflows/ci.yml`: triggers `pull_request`, `push` to `main`, and manual `workflow_dispatch`; one GitHub-hosted Ubuntu job; `GITHUB_TOKEN` permissions limited to `contents: read`; Node.js `24.19.0`; no matrix, cache, deploy, release, or coverage step.
4. If step 2 proves live PostgreSQL necessary, declare one PostgreSQL 16 service. GitHub Actions starts the service before job steps; its `pg_isready` health check gates availability. Map the service port to the Ubuntu runner's localhost and use that host/port in the CMS `DATABASE_URL`. Pass only disposable database/bootstrap variables to the service. Invoke the existing bootstrap script unchanged where compatible to create a non-superuser application account. Do not pass `PAYLOAD_SECRET` to the service. If step 2 shows no live database is needed, omit the service entirely.
5. Workflow steps: checkout; set up the single Node version; `npm ci` at root, `apps/web/`, and `apps/cms/`; if necessary, bootstrap/check the PostgreSQL account; supply CI-only `DATABASE_URL` and `PAYLOAD_SECRET` to CMS validation without echoing values; run root `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` in that order; check tracked-file drift. Never run write-mode `format`.
6. Leave default fail-fast behavior intact: a nonzero install, health check, bootstrap, or validation step makes the workflow failed and later normal steps do not run. Do not use `continue-on-error`, fallback commands, or output redirection that hides failures.

7. After creating and reviewing the workflow, publish the implementation branch, open a pull request to `main`, and await its real GitHub-hosted `pull_request` run. Inspect the result and logs; all three `npm ci` installs and all five BL-005 commands must pass. A nonzero command must make the workflow fail. Only a successful PR run permits VERIFIED; do not merge automatically to `main`.
8. After DONE and human integration into `main`, the `push` trigger validates the integrated workflow again. `workflow_dispatch` remains available for future manual runs once the workflow exists on the default branch; neither merge nor manual dispatch is required for the first VERIFIED.

## Validation

- Review the sole workflow diff, Node version, all three triggers, exact commands, service necessity evidence, `contents: read`, and exclusion of local Compose, GitHub Secrets, deployment, and new tools.
- If PostgreSQL is used, verify service health, localhost reachability, non-superuser application identity, and absence of `PAYLOAD_SECRET` from service environment without printing any value.
- Run `git diff --check` locally. Publish the implementation branch, open a pull request to `main`, and require at least one successful real GitHub-hosted `pull_request` run before VERIFIED; record all three `npm ci` results, all five BL-005 command results, and the test count. Local YAML validation alone cannot make the Task VERIFIED. Inspect CI logs for secret exposure or hidden failures and confirm no unexpected tracked-file changes. Any failed command must yield a failed workflow. Do not merge automatically to `main`; the later `push` validation and optional `workflow_dispatch` are outside the first VERIFIED gate.

## Risks

- The CMS may connect to PostgreSQL during build even if type generation does not; omitting the service without evidence would make CI unreliable.
- GitHub service containers start before job steps. Reusing the local empty-volume bootstrap script may require invoking it after service health rather than mounting it at initialization; any need to modify or duplicate it is a PLAN MISMATCH.
- A hosted runner/action version may behave differently from the local Node environment; fix only within the approved workflow boundary. First-time `workflow_dispatch` cannot run until the workflow file reaches the default branch.
- Logs or permissive workflow settings could expose CI values or grant unnecessary privileges.

## Rollback

- Before validation, revise or remove only the draft workflow within TASK-006 scope. After integration, revert the single workflow through the approved Git process. A conditional PostgreSQL service is ephemeral and has no persistent data to recover. Never alter the local Compose volume as rollback.

## Open Questions / PLAN MISMATCH Gates

- If Node.js `24.19.0` does not satisfy locked packages or cannot be provisioned on the hosted runner, stop and request Task/Plan review.
- If a live database is required but the existing script cannot bootstrap a non-superuser account without new files, duplicated SQL, extra dependency, or broader permission, stop and request Task/Plan review.
- If the five approved commands require application/configuration edits, real GitHub Secrets, production infrastructure, additional tooling, or any permission beyond `contents: read`, stop and request Task/Plan review.