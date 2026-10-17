SEO-EDITORIAL.md
Project: News Platform
Version: 0.1
Status: DRAFT
Last Updated: 2026-10-17
Change Control: Material SEO behavior changes require explicit review.
1. Purpose
This document defines the SEO and search-distribution contract for public editorial content.
It does not guarantee ranking, indexing, Google News inclusion or Discover traffic.
2. Indexable Content
Only approved public content SHOULD be indexable.
Drafts, previews and protected administrative pages MUST NOT be indexable.
Access control MUST NOT rely on noindex.
3. Article URLs
Each published Article MUST have one canonical public URL.
Published URLs SHOULD remain stable.
If a published URL changes:
- preserve the old URL;
- use an approved permanent redirect;
- update canonical references consistently.
4. Canonical
Every indexable Article MUST expose an appropriate canonical URL.
Canonical metadata MUST point to the preferred public Article URL unless an approved exception exists.
5. Article Metadata
Published Articles SHOULD expose, where applicable:
- HTML title;
- meta description;
- canonical;
- Open Graph metadata;
- robots directives;
- author information;
- publication date;
- modification date.
Metadata MUST NOT intentionally contradict visible content.
6. Structured Data
News Articles SHOULD expose valid NewsArticle structured data.
Applicable properties SHOULD include:
- headline;
- image;
- datePublished;
- dateModified;
- author.
Structured data MUST represent actual visible/editorial information.
Do not fabricate fields only to satisfy a validator.
7. Authorship
Published Articles MUST clearly identify their Author(s).
Author pages SHOULD provide stable public identity information where available.
Structured authorship SHOULD reference the corresponding public author identity where appropriate.
8. Publication Dates
Public content MUST clearly distinguish:
- original publication;
- meaningful modification.
Routine saves MUST NOT artificially refresh publication dates.
9. General Sitemap
The platform MUST provide sitemap infrastructure for approved indexable public URLs.
Only canonical URLs intended for indexing SHOULD be included.
Large sitemap sets SHOULD use a Sitemap Index when required.
10. News Sitemap
The platform MUST provide a News Sitemap for eligible news content.
Rules:
- include only qualifying recent Articles;
- include Articles created within the previous 2 days;
- remove older News-specific entries after that period;
- do not create a new sitemap for every publication;
- keep the sitemap updated as Articles are published.
11. RSS
Approved RSS feeds SHOULD expose recent published content.
RSS does not replace the public website or Sitemap infrastructure.
12. Discover Images
Articles intended for strong Discover eligibility SHOULD provide a representative high-quality image.
Preferred image characteristics:
- at least 1200 px wide;
- high resolution;
- landscape-friendly composition;
- appropriate og:image;
- max-image-preview:large unless policy explicitly requires otherwise.
Do not enlarge low-quality images artificially.
13. Internal Linking
Public pages SHOULD provide crawlable internal links between relevant:
- Articles;
- Categories;
- Authors;
- Related Articles.
Critical navigation MUST NOT depend exclusively on client-side JavaScript.
14. Categories and Tags
Approved Category pages MAY be indexable when they provide useful editorial value.
Tag pages MUST NOT automatically become indexable.
Thin, empty or low-value taxonomy pages SHOULD remain non-indexable until they provide sufficient editorial value.
15. Redirects
Redirects MUST:
- preserve legitimate moved URLs;
- avoid loops;
- avoid chains where practical;
- avoid becoming unrestricted open redirects.
16. Deleted or Removed Content
Removal behavior MUST be intentional.
Depending on the editorial case, implementation MAY require:
- preserved Article;
- redirect;
- archive behavior;
- appropriate not-found/gone response.
Do not redirect unrelated removed content to the homepage by default.
17. Sponsored Content
Sponsored Content MUST be clearly disclosed to readers.
Paid or sponsored outbound links SHOULD use appropriate link attributes according to current search-engine guidance.
Sponsored content MUST NOT be disguised as independent editorial content.
18. Content Quality Rule
Technical SEO MUST NOT be used to simulate editorial value that does not exist.
Do not:
- manufacture freshness;
- generate thin taxonomy pages at scale;
- duplicate content only to target keywords;
- create metadata inconsistent with the Article;
- create pages solely for search crawlers.
19. AI-Generated Content
AI-assisted content does not receive automatic publication authority.
AI-generated or AI-assisted editorial content MUST follow the same:
- editorial review;
- factual verification;
- authorship;
- quality;
- publication;
requirements as other content.
20. Validation
Applicable releases SHOULD validate:
- canonical output;
- robots behavior;
- Article structured data;
- sitemap behavior;
- News Sitemap behavior;
- redirect behavior;
- preview isolation.
21. External Policy Rule
Search platform rules can change independently of this repository.
Implementation SHOULD follow current official platform documentation when a Task modifies SEO-sensitive behavior.
If current external policy conflicts with this document:
PLAN MISMATCH
must be raised before implementation.
22. Approval
Current status:
DRAFT