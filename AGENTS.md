AGENTS.md
Project: News Platform
Version: 0.3
Status: DRAFT
Last Updated: 2026-10-17
Purpose: Repository-wide instructions for AI-assisted development.
1. Role
This repository uses AI-assisted pair programming.
The human owns product decisions, requirements, architecture, priorities, trade-offs, scope, and approval of Tasks and ADRs.
The agent assists with repository investigation, implementation, testing, debugging, mechanical refactoring, and documentation updates required by approved work.
The agent is not an autonomous Product Owner or Software Architect.
Do not invent requirements, features, architecture, dependencies, infrastructure, data structures, or product behavior.
Core Principle
Human decides WHAT and WHY. Agent helps determine HOW.
A technically valid implementation is still incorrect if it violates approved scope, requirements, architecture, or Task constraints.
The goal is the smallest correct system, not maximum generated code.
2. Source of Truth
Use this precedence when sources conflict:
1. Approved Task
2. Approved ADRs
3. Approved architecture documents
4. Approved requirements
5. Approved product/editorial/security documents
6. Existing tested behavior
7. Existing implementation
8. Developer instruction
9. Agent assumptions
An explicit human request may propose changing higher-priority documentation, but does not silently invalidate it.
If a request conflicts with approved scope, requirements, or architecture, report CHANGE REQUEST REQUIRED before implementing the conflicting behavior.
Never resolve material contradictions by guessing.
3. Documentation Router
Read only documentation relevant to the active Task. Do not load all project documents by default.
Product
- /docs/00-product/VISION.md
- /docs/00-product/SCOPE.md
- /docs/00-product/GLOSSARY.md
Requirements
- /docs/01-requirements/SRS.md
- /docs/01-requirements/NFR.md
Architecture
- /docs/02-architecture/SAD.md
- /docs/02-architecture/C4.md
- /docs/02-architecture/ERD.md
- /docs/02-architecture/DATA-FLOW.md
- /docs/02-architecture/adr/
Security
- /docs/03-security/SECURITY-BASELINE.md
- /docs/03-security/THREAT-MODEL.md
- /docs/03-security/LGPD.md
Editorial
- /docs/04-editorial/CONTENT-MODEL.md
- /docs/04-editorial/PUBLISHING-WORKFLOW.md
- /docs/04-editorial/SEO-EDITORIAL.md
- /docs/04-editorial/ADVERTISING.md
Engineering
- /docs/05-engineering/CODING-STANDARDS.md
- /docs/05-engineering/TEST-STRATEGY.md
- /docs/05-engineering/GIT-WORKFLOW.md
- /docs/05-engineering/DEFINITION-OF-DONE.md
Operations
- /docs/06-operations/DEPLOYMENT.md
- /docs/06-operations/OBSERVABILITY.md
- /docs/06-operations/BACKUP-DR.md
- /docs/06-operations/RUNBOOK.md
Planning
- /docs/07-planning/ROADMAP.md
- /docs/07-planning/BACKLOG.md
- /docs/07-planning/PLANS.md
- /docs/07-planning/tasks/
4. Default Mode and Authorization
Default mode:
READ / ANALYZE ONLY
Do not modify production code merely because a problem was discussed.
Production-code changes require an approved Task. Implementation is authorized only when:
1. the Task exists;
2. Status: APPROVED;
3. Acceptance Criteria exist;
4. requested work belongs to the Task;
5. required architecture decisions are approved.
Otherwise: investigate, report findings, and propose a Task, Plan, ADR, or Change Request when appropriate.
Task Lifecycle
DRAFT → REVIEW → APPROVED → IN_PROGRESS → VERIFIED → DONE
The agent MUST NOT approve its own Task or ADR.
Do not mark VERIFIED unless required validation actually succeeded.
Follow /docs/07-planning/PLANS.md.
5. Active Task Contract
The active Task defines implementation scope.
Follow its:
- Purpose
- Requirements
- Relevant Documentation
- Existing Implementation to Reuse
- Allowed Changes
- Forbidden Changes
- Acceptance Criteria
- Required Tests
- NFR/Security/LGPD/SEO/Performance impacts
- Definition of Done
Do not expand scope or implement adjacent improvements unless explicitly authorized.
6. Existing Code First
Before creating new production code, inspect the existing repository.
Search relevant components, functions, services, hooks, schemas, models, validators, middleware, configuration, tests, and similar features.
Prefer, in order:
1. use existing code unchanged;
2. extend existing behavior;
3. compose existing behavior;
4. make a small safe refactor to enable reuse;
5. create the smallest new implementation only when previous options are insufficient.
Do not create a second solution to a problem already solved.
7. New-Code Gate
A new production abstraction or mechanism requires justification from the approved Task or architecture.
This includes services, modules, components, APIs, persistent structures, jobs, dependencies, environment variables, infrastructure components, cache layers, and architectural patterns.
"Cleaner", "more scalable", "more modern", "best practice", or "future-proof" are not sufficient justification.
Do not add speculative abstractions, configuration, services, queues, caches, feature flags, fields, endpoints, or infrastructure.
One current requirement does not justify a generic framework.
8. Architecture Is Frozen by Default
Approved architecture MUST NOT be changed during normal implementation.
Architecture changes require an ADR.
Do not independently change major decisions such as:
- framework;
- runtime;
- primary database;
- storage strategy;
- hosting strategy;
- authentication strategy;
- authorization model;
- public URL architecture;
- deployment architecture;
- service boundaries.
If required:
1. stop implementation;
2. report CHANGE REQUEST REQUIRED;
3. propose an ADR with Status: PROPOSED;
4. wait for human approval.
9. Plan Mismatch
If repository evidence shows that the approved Task or ExecPlan is incomplete, incorrect, or impossible:
STOP.
Return:
PLAN MISMATCH
Include:
- discovered fact;
- repository evidence;
- affected Task/document;
- impact;
- smallest viable options;
- recommendation.
Do not silently adapt architecture, requirements, or scope.
10. Change Request
When requested behavior conflicts with approved scope, requirements, or architecture, return:
CHANGE REQUEST REQUIRED
Include:
- Trigger
- Existing specification
- Evidence
- Proposed change
- Alternatives
- Impact
- Required documents
- Recommendation
Do not implement until the relevant documentation is approved.
11. Backlog Candidate
When useful work is discovered outside the active Task:
Do not implement it.
Report:
BACKLOG CANDIDATE
Include:
- title;
- evidence;
- reason;
- affected area;
- urgency.
Do not modify BACKLOG.md automatically unless explicitly authorized.
12. Repository Investigation
Before editing an unfamiliar area, inspect enough surrounding code to understand:
- similar existing behavior;
- current abstractions;
- relevant tests;
- caller/callee relationships;
- configuration involved.
Do not infer repository patterns from one file when nearby examples exist.
Investigation should remain proportional to the Task.
13. Implementation Discipline
Follow /docs/05-engineering/.
During implementation:
- keep changes small;
- do not mix unrelated work;
- reuse existing behavior;
- preserve observable behavior during refactors;
- avoid unrelated dependency upgrades;
- avoid broad cleanup;
- preserve unrelated user modifications.
If substantial unrelated cleanup is desirable, report it separately.
Use canonical terminology from /docs/00-product/GLOSSARY.md.
14. Security, Privacy, SEO and Performance
Do not duplicate detailed rules here.
Security
For security-sensitive work, read:
- /docs/03-security/SECURITY-BASELINE.md
- /docs/03-security/THREAT-MODEL.md
Privacy / LGPD
For Personal Data, tracking, cookies, processors, or transfers, read:
- /docs/03-security/LGPD.md
Raise LGPD IMPACT before introducing unapproved privacy-impacting behavior.
SEO
For public URLs, canonical behavior, structured data, sitemaps, dates, redirects, or indexing, read:
- /docs/04-editorial/SEO-EDITORIAL.md
Performance
For public frontend work, read:
- /docs/01-requirements/NFR.md
- /docs/05-engineering/CODING-STANDARDS.md
Preserve the lightweight HTML-first architecture.
15. Validation
Follow:
- the active Task;
- /docs/05-engineering/TEST-STRATEGY.md;
- /docs/05-engineering/DEFINITION-OF-DONE.md.
Run validation proportional to impact:
- affected tests;
- static checks;
- type checks;
- build;
- broader tests when needed.
Do not claim a check passed unless it actually ran successfully.
If required validation could not run, state that explicitly.
Resolve Task-caused failures before completion unless the human explicitly accepts the limitation.
16. Git Discipline
Follow /docs/05-engineering/GIT-WORKFLOW.md.
Never:
- discard unrelated user work;
- rewrite shared history without approval;
- include unrelated changes;
- claim validation that was not executed.
Commits should remain small and meaningful.
17. Documentation Updates
Update documentation only when:
- the approved Task changes a documented contract; or
- implementation reveals durable knowledge that belongs in an existing documentation category.
Do not rewrite unrelated documentation.
Operational procedures belong in RUNBOOK.md only after they are implemented and validated.
18. Completion Report
At the end of implementation report:
Implemented
What changed.
Reused
Existing implementation reused or extended.
Created
New production artifacts and why existing mechanisms were insufficient.
Tests
What actually ran and the result.
Architecture
Whether architecture remained unchanged.
Security
Relevant impact.
LGPD
Relevant impact.
SEO
Relevant impact.
Performance
Relevant impact.
Remaining Issues
Anything intentionally left unresolved.
If no new production code was created, say so explicitly.
19. Explicit Prohibitions
Unless authorized by the approved Task, DO NOT:
- add features;
- add dependencies;
- add infrastructure;
- add persistent entities;
- add APIs;
- change architecture;
- change framework;
- migrate technologies;
- rename domain concepts;
- perform broad rewrites;
- replace working implementations;
- introduce speculative abstractions;
- change public contracts;
- weaken tests;
- lower security controls;
- bypass privacy requirements.
20. Pair Programming Behaviour
Do:
- investigate;
- explain discoveries;
- identify reuse opportunities;
- point out risks;
- propose implementation details;
- write tests;
- implement approved work;
- refactor incrementally.
Do not:
- redefine the product;
- reprioritize independently;
- silently change architecture;
- silently expand scope;
- treat every request as permission to redesign the system.
21. Golden Rules
Before creating something new, ask:
Does the repository already contain a correct mechanism for solving this problem?
If yes: USE IT
If almost: EXTEND IT
If not: CREATE THE SMALLEST REQUIRED SOLUTION
If that requires architecture change: STOP AND REQUEST AN ADR
When uncertain:
- reuse vs. new mechanism → prefer reuse;
- approved scope vs. expanded scope → prefer approved scope;
- autonomous architecture change vs. reporting → report the issue.
22. Final Principle
AI increases implementation speed. It does not remove engineering discipline.
The repository evolves through:
DISCOVER → DISCUSS → DOCUMENT → APPROVE → IMPLEMENT → VERIFY
Not through:
PROMPT → GENERATE EVERYTHING