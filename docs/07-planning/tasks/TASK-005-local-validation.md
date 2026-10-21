# TASK-005 — Local validation commands

Status: DONE
Backlog Item: BL-005 — Establish local validation commands
ExecPlan Required: NO — this is a reversible, local-only validation setup. It changes no application architecture, database schema, provider, deployment, or product behavior and has no risky rollout steps.

## Purpose

Provide a small, reproducible set of local commands for formatting, linting, type checking, tests, and builds across the existing Astro and Payload/Next applications.

## Requirements

- Keep apps/web and apps/cms as independent npm applications. A root npm manifest may host shared validation tools and command orchestration only; it must not declare npm workspaces or change package ownership.
- Reuse the existing Astro and Next build scripts, the root strict TypeScript baseline, the CMS TypeScript installation, and npm's prefix command. Do not replace working build commands.
- Make formatting and linting automated, non-mutating during validation, and limited to supported source/configuration files. An explicit format command may write formatting changes when invoked.
- Exclude generated files, lockfiles, dependency/build/cache output, local environment files, and secrets from formatter and linter targets. In particular, do not edit Payload's generated admin/importMap.js or Next's generated next-env.d.ts.
- Use only development dependencies needed by current source. Pin versions in the relevant lockfile; do not use network-fetched unpinned CLI tools.
- Provide a test command without fabricating product tests or treating a zero-test result as behavioral coverage.
- Keep CMS validation compatible with its existing local .env/PostgreSQL prerequisites. Never expose environment values.

## Relevant Documentation

- AGENTS.md
- docs/07-planning/BACKLOG.md, BL-005
- docs/07-planning/ROADMAP.md, PHASE-01
- docs/07-planning/PLANS.md
- docs/05-engineering/CODING-STANDARDS.md
- docs/05-engineering/TEST-STRATEGY.md
- docs/05-engineering/DEFINITION-OF-DONE.md
- Astro CLI and type-checking documentation: https://docs.astro.build/en/reference/cli-reference/
- Astro formatter guidance: https://docs.astro.build/en/editor-setup/
- Next.js 16 lint/typegen documentation: https://nextjs.org/docs/app/guides/upgrading/version-16 and https://nextjs.org/docs/app/api-reference/cli/next
- Node.js test runner documentation: https://nodejs.org/api/test.html

## Existing Implementation to Reuse

- apps/web/package.json and package-lock.json contain Astro 7.4.0 with working dev/build scripts; apps/web/tsconfig.json extends ../../tsconfig.base.json.
- apps/cms/package.json and package-lock.json contain Payload 3.91.0, Next 16.4.2, TypeScript 5.9.3, and working dev/build/start scripts; its tsconfig also extends the strict root baseline.
- The CMS already uses ignored apps/cms/.env and a local PostgreSQL prerequisite. Its build script uses Next's supported --webpack flag; preserve it.
- tests/ has no test cases. The repository has no existing formatter, linter, root package manifest, root workspace, or validation script. No existing source file should be rewritten merely to introduce tooling.

## Proposed Tooling

- npm: use existing package-manager conventions and `npm --prefix` to call each app. Add a root manifest/lockfile solely to pin shared development tooling and expose local commands; no `workspaces` field or monorepo runner.
- Prettier plus prettier-plugin-astro: one shared formatter for current JS/TS/TSX/SCSS/configuration and complete .astro markup. Astro official CLI formatting guidance calls for the plugin. Both format:check and format must use exactly the same explicitly approved authored file set and exclusions; format:check is non-mutating and format differs only by write mode. Do not target the repository broadly or format documentation, generated files, or files outside scope.
- Biome: use only for lint of stable, supported authored JS/TS/TSX and configuration files in this Task. Next 16 removed next lint, and existing framework/build commands do not provide standalone linting. Disable Biome formatting and do not enable experimental full-document Astro support. .astro files remain covered by Prettier for formatting and astro check for diagnostics; this Task does not provide complete stylistic linting of Astro.
- Astro `astro check`: use its existing CLI command for .astro/TypeScript diagnostics, with its required @astrojs/check and a local TypeScript dev dependency in apps/web. The CMS TypeScript package does not belong to the web package.
- Next `next typegen` followed by the CMS's existing `tsc --noEmit`: generate ignored Next types before standalone type checking; do not add another type checker.
- Node.js node --test: use the built-in runner only as the baseline test infrastructure in this Task, without Vitest, Jest, or Playwright. There are currently zero tests. A zero-test run is valid execution of the runner but never evidence of behavioral coverage.
- Keep ESLint, Husky, lint-staged, Turborepo, Nx, and CI tooling out of this Task. None is needed for these local commands.

## Allowed Changes

- Add root package.json and package-lock.json with only the proposed shared development tools and local validation scripts. Do not add a `workspaces` field or runtime dependency.
- Add .prettierrc.json, .prettierignore, biome.json, and a minimal root .gitignore only for shared validation configuration and generated/local-artifact exclusions, including the new root node_modules/. The biome.json includes configuration must define the linted file set, not shell-dependent globs in npm scripts: include only stable, supported authored files in this Task and exclude node_modules, .next, dist, lockfiles, generated files, secrets, admin/importMap.js, and next-env.d.ts.
- Update apps/web/package.json and package-lock.json only for the `typecheck` script and required @astrojs/check/TypeScript development dependencies.
- Update apps/cms/package.json only to add a standalone `typecheck` script; retain existing dependency versions and scripts.
- If the selected formatter reports drift in existing authored source covered by the new check, allow only mechanical, behavior-preserving formatting of those specific files under apps/web/src/ or apps/cms/src/. Do not format generated importMap.js, change product behavior, or perform a repository-wide formatting sweep.
- Update only this Task's status according to the approved lifecycle.

## Forbidden Changes

- No product features, editorial models, API behavior, database schema/migrations, authentication changes, public URL changes, production infrastructure, or CI pipeline.
- No root npm workspace, package-manager migration, monorepo framework, Git hooks, staged-file runner, test framework, browser test runner, or additional direct dependency beyond those named in Proposed Tooling without PLAN MISMATCH review.
- No changes to ADRs, roadmap, backlog, architecture documents, root tsconfig.base.json, existing application dependency versions, or the CMS PostgreSQL setup.
- No synthetic tests written merely to make `npm run test` report a nonzero count. No formatting of unrelated documentation or generated/ignored files.

## Dependencies

- BL-001 through BL-004 are implemented with Tasks in DONE.
- Proposed new root devDependencies: prettier, prettier-plugin-astro, and @biomejs/biome, each pinned to a compatible exact version at implementation.
- Proposed new apps/web devDependencies: @astrojs/check and typescript, each pinned to a compatible exact version; no new apps/cms dependency.
- Node.js/npm versions compatible with the existing Astro and Payload/Next applications. CMS typegen/build may require its existing local .env and PostgreSQL development service; this Task does not provision another service.

## Acceptance Criteria

- AC-01: From the repository root, documented npm scripts expose `format:check`, `format`, `lint`, `typecheck`, `test`, and `build`; commands call the existing app packages without npm workspaces or an additional runner.
- AC-02: format:check and lint are non-mutating and succeed on explicitly approved authored files. Biome lint targets come from biome.json includes rather than shell-dependent npm-script globs and exclude node_modules, .next, dist, lockfiles, generated files, secrets, admin/importMap.js, and next-env.d.ts. Prettier format:check uses only its explicitly approved file set, never a broad repository target; format uses exactly that set and differs only by write mode. Any baseline formatting diff is mechanical and limited to Allowed Changes.
- AC-03: `typecheck` runs Astro diagnostics on the web app and generated-type-aware TypeScript checking on the CMS. It preserves strict TypeScript settings and creates no versioned generated files.
- AC-04: test invokes node --test as baseline runner infrastructure. A zero-test result is a valid runner execution and must be reported as zero tests, never as behavioral coverage.
- AC-05: `build` runs the existing `npm run build` scripts in both apps without modifying their build commands.
- AC-06: Root and web `npm ci` reproduce their approved lockfiles; no application runtime dependency or app architecture changes. CMS installation remains reproducible from its existing lockfile.
- AC-07: Running the non-mutating commands and builds does not modify unexpected versioned files or expose secrets; Git changes stay within Allowed Changes.

## Required Tests / Validation

- Inspect the exact manifest/lockfile diff and verify all new direct dependencies and versions are limited to Dependencies above.
- Run `npm ci` at the root and in apps/web; use the existing apps/cms installation (or `npm ci` there if needed) to validate CMS commands.
- With the existing CMS development prerequisites available, run root `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build`; record each result and the test count. Check that the explicit `format` command is scoped correctly without invoking a broad write during validation.
- Verify biome.json includes and Prettier targets/ignores enforce the approved file sets, including exclusions for generated/secret/local artifacts. Confirm format and format:check cover exactly the same files and that non-mutating validation changes no unexpected versioned files. Run git diff --check and inspect git status.
- If a required command cannot pass without a new dependency, broader formatting sweep, configuration change, or architectural change outside this Task, stop and report PLAN MISMATCH.

## NFR Impact

Adds repeatable local quality checks; no runtime or public-service NFR behavior changes.

## Security Impact

Lint/format targets must not read or print local secrets. No new authentication or database boundary is introduced. Keep apps/cms/.env and generated outputs ignored.

## LGPD Impact

No Personal Data, tracking, processor, or transfer is introduced. Validation uses source and existing local development data only; no production data.

## SEO Impact

No public URL, metadata, indexing, or rendered-content change is intended.

## Performance Impact

Validation may take local development time; application runtime and public-page performance must remain unchanged.

## Definition of Done

After human approval, all AC-01 through AC-07 and Required Tests / Validation must pass. Report actual command results, including zero tests when applicable, exact new dependencies, file changes, and any limitation. Mark VERIFIED only after required validation succeeds; DONE requires the approved completion process.