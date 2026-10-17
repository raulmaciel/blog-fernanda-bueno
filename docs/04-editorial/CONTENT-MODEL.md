CONTENT-MODEL.md
Project: News Platform
Version: 0.1
Status: DRAFT
Last Updated: 2026-10-17
Change Control: Material content-model changes require human approval.
1. Purpose
This document defines the canonical editorial content model.
It defines editorial entities and required content semantics.
Physical database structure belongs in /docs/02-architecture/ERD.md.
2. Article
Article is the primary editorial entity.
An Article MUST support:
- headline
- slug
- excerpt or subtitle where applicable
- body
- authors
- primaryCategory
- tags
- heroImage
- status
- publishedAt
- modifiedAt
- SEO metadata
- correction metadata where applicable
Additional fields require an approved requirement.
3. Article Body
Article body MUST use approved structured Content Blocks.
Initial approved block types:
- Paragraph
- Heading
- Image
- Quote
- List
- Table
- Callout
- ApprovedEmbed
- RelatedArticles
- AdBreak
Do not introduce arbitrary executable HTML as normal editorial content.
New block types require explicit editorial approval.
4. Author
Author represents a public editorial identity.
An Author SHOULD support:
- display name
- biography
- profile image
- role or expertise
- approved public links
- public profile URL
An Author is not automatically equivalent to a CMS User.
5. Category
Category is a broad curated editorial classification.
An Article MUST belong to at least one approved Category unless a future requirement explicitly allows otherwise.
One Category SHOULD be designated as the primary Category.
6. Tag
Tag is an optional granular editorial classification.
Tags:
- MUST be human-controlled;
- MUST NOT be created automatically by AI without review;
- MUST NOT automatically become indexable pages.
7. Media
Media stores metadata and storage references.
Image Media SHOULD support:
- alt text;
- caption;
- credit;
- MIME type;
- width;
- height;
- storage reference;
- approved delivery variants.
Binary content belongs in Object Storage.
8. Hero Image
An Article MAY define one Hero Image.
Where the Article is intended for Search/Discover distribution, the Hero Image SHOULD satisfy the approved SEO image requirements.
9. Related Articles
An Article MAY reference Related Articles.
Initial related-content behavior SHOULD remain deterministic or editorially controlled.
Machine-learning recommendations are outside current scope.
10. Sources
Where editorial policy requires sources, the Article MAY contain structured Source references.
Source representation MUST NOT be confused with free-form body text.
11. Correction
A published Article MAY include a Correction Note.
A Correction Note MUST:
- be explicitly entered by an authorized editorial user;
- be distinguishable from normal Article body content;
- remain associated with the affected Article.
12. Sponsored Content
An Article MAY be classified as Sponsored Content only through an explicit field.
Sponsored Content MUST support identification of the Sponsor where required.
A sponsored Article MUST NOT rely on wording inside the body as the only disclosure mechanism.
13. SEO Metadata
Article SEO metadata MAY include:
- SEO title;
- meta description;
- canonical override when approved;
- social title;
- social description;
- social image;
- robots directive.
Defaults SHOULD be derived from canonical Article fields where practical.
14. Slug
The Slug identifies the Article within its approved public URL pattern.
Changing a previously published Slug MUST trigger the approved redirect behavior.
15. Status
Canonical Article states:
- DRAFT
- IN_REVIEW
- APPROVED
- SCHEDULED
- PUBLISHED
- ARCHIVED
Transitions belong in PUBLISHING-WORKFLOW.md.
16. Dates
The model MUST distinguish:
- publishedAt — original publication time;
- modifiedAt — meaningful subsequent modification.
Routine technical saves MUST NOT automatically redefine the public modification date.
17. Model Expansion Rule
Before adding a new field or entity:
1. verify that an existing field cannot represent the requirement;
2. verify that the requirement exists in approved documentation;
3. avoid speculative fields for hypothetical future use.
18. Approval
Current status:
DRAFT