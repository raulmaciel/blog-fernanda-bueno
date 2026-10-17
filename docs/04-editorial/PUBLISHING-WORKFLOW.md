PUBLISHING-WORKFLOW.md
Project: News Platform
Version: 0.1
Status: DRAFT
Last Updated: 2026-10-17
Change Control: Workflow changes require editorial approval.
1. Purpose
This document defines the lifecycle of editorial content from creation to publication and later maintenance.
2. Canonical States
DRAFT
  ↓
IN_REVIEW
  ↓
APPROVED
  ├──> PUBLISHED
  └──> SCHEDULED
          ↓
       PUBLISHED
          ↓
       ARCHIVED
Only approved transitions may be implemented.
3. DRAFT
Used while an Article is being created or edited before formal review.
Requirements:
- not publicly visible;
- not publicly indexable;
- editable by authorized users;
- preview available only through protected mechanisms.
4. IN_REVIEW
Indicates that an Article is awaiting editorial review.
The system SHOULD preserve who submitted it and when where practical.
A user without approval permission MUST NOT promote content directly to APPROVED.
5. APPROVED
Indicates that editorial review is complete.
Approved content MAY be:
- published immediately;
- scheduled.
Approval itself does not make the Article public.
6. SCHEDULED
Represents approved content awaiting automatic publication.
A scheduled Article MUST define a valid publication date/time.
Publication failure MUST be observable.
7. PUBLISHED
Represents publicly available editorial content.
Publishing MUST:
- validate authorization;
- validate required Article fields;
- persist the published state;
- preserve the original publication date;
- trigger required cache/revalidation behavior;
- expose the Article to approved public SEO mechanisms.
8. ARCHIVED
Represents content intentionally removed from normal active editorial circulation.
Archive behavior MUST be explicitly defined by implementation Tasks.
Archiving MUST NOT silently mean hard deletion.
9. Preview
Preview MUST:
- support authorized draft review;
- remain non-indexable;
- remain inaccessible to unauthorized users.
noindex alone is not sufficient access control.
10. Editing Published Content
Published Articles MAY be edited by authorized users.
A normal edit MUST NOT replace the original publishedAt.
A meaningful public change MAY update modifiedAt.
11. Correction
When correcting a material factual error:
- preserve the Article identity;
- preserve historical traceability;
- update modifiedAt when appropriate;
- add a Correction Note when editorial policy requires it.
12. Slug Change
Changing the Slug of a published Article requires:
- preserving the previous URL;
- creating the approved redirect;
- keeping canonical behavior consistent.
A published URL MUST NOT be silently abandoned.
13. Publication Validation
Before publishing, validate applicable requirements such as:
- headline;
- slug;
- author;
- category;
- required media metadata;
- publication permissions;
- SEO-critical metadata where required.
Validation MUST prevent invalid publication rather than relying only on editorial memory.
14. Homepage Curation
Publishing and Homepage Curation are separate actions.
A newly published Article MUST NOT automatically become the primary homepage highlight unless an explicit rule requires it.
15. Auditability
Significant actions SHOULD remain traceable:
- approval;
- publication;
- scheduled publication;
- correction;
- archive;
- slug change.
Exact audit implementation belongs in security/operations documentation.
16. Failure Rule
If publication or scheduling fails:
- do not report success;
- do not leave ambiguous state when avoidable;
- surface the failure to operators;
- preserve diagnostic information.
17. AI Rule
AI MAY assist drafting or analysis only when explicitly approved.
AI MUST NOT autonomously:
- approve;
- schedule;
- publish;
- correct;
- change editorial status.
Human editorial authority remains required.
18. Approval
Current status:
DRAFT