ADVERTISING.md
Project: News Platform
Version: 0.1
Status: DRAFT
Last Updated: 2026-10-17
Change Control: Material monetization behavior requires human approval.
1. Purpose
This document defines the editorial and product rules for advertising and sponsored content.
Provider-specific implementation belongs in architecture/ADR documentation.
Privacy behavior belongs in /docs/03-security/LGPD.md.
2. Core Principle
Editorial content is the primary purpose of the publication.
Advertising MUST remain distinguishable from editorial content.
Monetization MUST NOT override:
- usability;
- editorial transparency;
- privacy;
- security;
- performance.
3. Ad Slots
Advertisements MUST use predefined AdSlot locations.
Examples MAY include:
- Header
- Article Top
- Article Middle
- Article Bottom
- Sidebar
- Homepage Section
Actual production slots require approved implementation.
Editors MUST NOT paste uncontrolled advertising scripts directly into Article bodies.
4. Article Ad Breaks
AdBreak MAY be used as a structured editorial placement marker.
An AdBreak:
- identifies an allowed advertising position;
- does not contain arbitrary advertiser code;
- does not guarantee that an Ad will be rendered.
The advertising integration decides whether an eligible slot is filled.
5. Content Priority
Pages MUST NOT contain more advertising or paid promotional material than publisher content.
Advertising MUST NOT make editorial content difficult to locate or consume.
Low-value or empty screens MUST NOT be created primarily to display Ads.
6. Layout Safety
Ad placements MUST NOT:
- obscure editorial content;
- be obscured by editorial content;
- intentionally cause accidental clicks;
- impersonate navigation or editorial controls;
- trap users behind advertising.
Where practical, Ad Slots SHOULD reserve layout space to reduce CLS.
7. Performance
Advertising SHOULD load in a performance-aware manner.
Below-the-fold Ads SHOULD support deferred/lazy loading where compatible with the approved provider.
Advertising MUST NOT block core Article readability when technically avoidable.
8. Sponsored Content
Sponsored Content is editorial-format content involving commercial support.
It MUST be explicitly marked.
The disclosure MUST NOT depend only on body text.
Where applicable, associate the Sponsor through structured content metadata.
9. Paid Links
Links created because of sponsorship, advertising or comparable compensation SHOULD use appropriate search-engine link attributes.
Do not disguise paid relationships as ordinary editorial endorsement.
10. Advertising Provider
The initial provider is NOT selected by this document.
Provider selection requires an ADR.
Possible provider names mentioned during planning do not constitute architectural approval.
11. ads.txt
If the selected advertising ecosystem requires or supports ads.txt, the production domain SHOULD expose an accurate authorized-seller configuration.
The file MUST reflect actual approved relationships.
Do not publish invented seller entries.
12. Privacy Gate
Advertising behavior that uses optional identifiers, cookies or profiling MUST follow LGPD.md.
An advertising provider MUST NOT execute optional tracking before the approved privacy mechanism permits it.
13. Editorial Independence
Commercial users MUST NOT automatically gain permission to:
- rewrite ordinary Articles;
- approve journalism;
- publish unrelated editorial content;
- alter correction history.
Advertising permissions and editorial permissions remain separate.
14. Restricted Content
Advertising eligibility may differ from editorial publication eligibility.
The platform MUST NOT assume that every legally publishable Article is eligible for every advertising provider.
Provider policy violations MUST be handled independently from editorial Article existence.
15. Measurement
Advertising measurement MAY collect only data permitted by:
- approved product requirements;
- provider configuration;
- privacy rules.
Do not activate optional measurement simply because the provider supports it.
16. Failure Behavior
Advertising failure SHOULD NOT make primary editorial content unavailable.
When an Ad cannot load, the Article MUST remain readable.
17. New Placement Rule
Before adding a new Ad Slot:
1. verify that an existing slot cannot satisfy the requirement;
2. evaluate readability;
3. evaluate layout shift;
4. evaluate privacy;
5. evaluate provider policy;
6. obtain approval through an implementation Task.
18. Approval
Current status:
DRAFT