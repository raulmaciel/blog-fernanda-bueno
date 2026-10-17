# TASK-002 — TypeScript baseline

Status: DONE
Backlog Item: BL-002 — Configure TypeScript baseline
ExecPlan Required: NO

## Purpose

Establish a minimal shared strict TypeScript configuration for future approved applications.

## Requirements

- Address only BL-002.
- Define a reusable baseline with the TypeScript strict option enabled.
- Keep application-specific compiler settings with the future application Tasks; do not assume framework or runtime details here.
- Require approval of this Task before implementation.

## Relevant Documentation

- AGENTS.md
- docs/07-planning/PLANS.md
- docs/07-planning/BACKLOG.md, BL-002
- docs/02-architecture/SAD.md, section 17
- docs/05-engineering/CODING-STANDARDS.md, section 5
- docs/05-engineering/TEST-STRATEGY.md
- docs/05-engineering/DEFINITION-OF-DONE.md

## Existing Implementation to Reuse

The repository currently contains documentation and empty placeholders at apps/web/, apps/cms/, packages/, tests/, and infrastructure/. Inspection found no TypeScript source, tsconfig file, package manifest, lockfile, or installed compiler configuration to reuse. Preserve the placeholders and existing files.

## Allowed Changes

- Add only a root tsconfig.base.json containing exactly this JSON:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```
- No other compilerOptions are authorized in this Task.

## Forbidden Changes

- Do not initialize Astro, Payload, or another application.
- Do not add application tsconfig files, TypeScript source, package manifests, dependencies, lockfiles, package manager setup, scripts, CI, tests, or other tooling.
- Do not change architecture, ADRs, existing documentation, existing placeholders, or backlog status.
- Do not add speculative aliases, path mappings, package boundaries, or compiler options without a current requirement.

## Acceptance Criteria

- AC-01: A root tsconfig.base.json exists and parses as JSON.
- AC-02: compilerOptions.strict is true; no other compilerOptions are added unless explicitly required by this Task.
- AC-03: The configuration contains no framework, runtime, application, paths, aliases, module resolution, target, lib, or output settings.
- AC-04: The only implementation artifact added by this Task is tsconfig.base.json; existing files retain their content.

## Required Tests / Validation

- Parse tsconfig.base.json with an available JSON parser and verify compilerOptions.strict is true.
- Inspect the file to confirm AC-03.
- Inspect Git status and the changed-file list to confirm AC-04.
- Do not install TypeScript merely to validate this configuration. There is no TypeScript source or approved local compiler workflow yet; report typecheck as not applicable in this Task.

## NFR Impact

Supports the maintainability and testability direction without changing runtime behavior.

## Security Impact

No executable code or security boundary is added. Avoid configuration that weakens type checking.

## LGPD Impact

No Personal Data collection or processing.

## SEO Impact

No public page, URL, or indexing behavior.

## Performance Impact

No runtime or build output is created; no runtime performance impact.

## Definition of Done

After human approval, satisfy AC-01 through AC-04 and execute the stated validation. Report actual results and any unavailable checks. Mark VERIFIED only after applicable validation succeeds; mark DONE only through the approved completion process.
