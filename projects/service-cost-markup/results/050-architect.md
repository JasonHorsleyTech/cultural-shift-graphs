# Building Design — Architect

## Summary

The architecture firm's fee as a share of residential construction cost has been surprisingly stable — declining only modestly from ~12% in the AIA-schedule era (pre-1972) to ~10% today. Contrary to the common "race to the bottom" narrative, US residential architect fees never collapsed. The 1972 and 1990 DOJ antitrust actions removed AIA-published fee guidance, but the market rate for custom home design barely budged. The real erosion is invisible in the fee percentage: within that stable ~10% fee, a growing share now goes to subconsultants, technology, insurance, and overhead, leaving the individual architect's take-home declining relative to construction costs.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | $1,580 | $13,200 | construction cost per home | 1 | 12.0 | low |
| 1970 | $2,110 | $17,550 | construction cost per home | 1 | 12.0 | low |
| 1980 | $4,520 | $45,220 | construction cost per home | 1 | 10.0 | low |
| 1990 | $7,990 | $79,890 | construction cost per home | 1 | 10.0 | low |
| 2000 | $10,140 | $101,400 | construction cost per home | 1 | 10.0 | med |
| 2010 | $13,090 | $130,860 | construction cost per home | 1 | 10.0 | med |
| 2020 | $20,550 | $205,510 | construction cost per home | 1 | 10.0 | med |
| 2024 | $27,070 | $270,740 | construction cost per home | 1 | 10.0 | med |

## Methodology

**Ratio formula:** Architecture firm's fee for one residential project / Total construction cost of that project (excluding land).

This is one of the rare professions where the fundamental worker ratio IS the industry's standard pricing metric — architects literally charge a percentage of construction cost. The ratio directly measures what fraction of the customer's construction dollar flows to architectural design services.

**Worker compensation (fee):** The architecture firm's total fee for full-service design of one custom residential project (schematic design through construction administration). Computed as fee percentage x construction cost. The fee percentage is the central metric:

- **1960-1970 (12%):** The AIA published recommended minimum fee schedules from the early 20th century until 1972. For residential projects at the median home price (~$13,000-18,000 construction cost), the sliding scale placed fees at the upper end — roughly 12-15% for small projects, 10-12% for mid-size. I use 12% as a moderate estimate within this range. Low confidence — the actual AIA schedules are no longer readily available, and these percentages are reconstructed from secondary references.

- **1972 inflection:** The DOJ obtained a consent decree against the AIA for anticompetitive practices. The AIA agreed to stop publishing recommended fee schedules. A second antitrust action in 1990 further prohibited even informal fee guidance.

- **1980-present (10%):** After the removal of AIA fee floors, the market settled to approximately 10% of construction cost for moderate-complexity custom residential work. This is the consistent midpoint of the commonly cited 8-15% range. Multiple 2024-2025 industry sources confirm 8-15% for custom homes, with 10-12% being typical for average complexity. The fee did not collapse post-antitrust because: (1) residential architecture is relationship-driven, not lowest-bid procurement; (2) growing building codes, sustainability requirements, and coordination complexity justified sustained fees; and (3) the AIA schedule wasn't far above the natural market rate.

**Customer cost proxy:** Total construction cost of one median-priced new single-family home, excluding land. Derived by applying an estimated construction-cost share to the Census Bureau/HUD median new home sale price (FRED series MSPNHSUS).

Construction-cost shares used:
- 2024: 64.4% (NAHB "Cost of Constructing a Home" survey)
- 2020: 61.0% (interpolated from 2019: 61.1% and 2022: 60.8%)
- 2010: 59.0% (interpolated from 2009: 59.0%)
- 2000: 60.0% (estimated — pre-NAHB survey era, land was moderately priced)
- 1990: 65.0% (estimated — land was a smaller share of home prices)
- 1980: 70.0% (estimated — suburban land still relatively cheap)
- 1970: 75.0% (estimated — land was abundant and cheap in suburban expansion era)
- 1960: 80.0% (estimated — postwar suburban land was very inexpensive)

Pre-2007 construction shares are rough estimates based on the premise that land's share of home prices has grown over time as suburban expansion slowed and zoning became more restrictive. Confidence improves from 2007 onward where NAHB data exists.

**Customers per worker = 1:** This is a per-project comparison. The ratio represents the architect's share of one project's construction cost, not an annual aggregate.

**Why this proxy over alternatives:** The fee-to-construction-cost percentage is the canonical metric for architectural pricing. Using it as the ratio avoids introducing additional assumptions about how many projects an architect handles per year or what fraction of homes use architects. It directly answers: "when a customer hires an architect to design a home, what fraction of the construction cost goes to design?"

## Sources

- AIA, "Calculating the Architect's Fee: Is There a Better Way?" — https://www.aia.org/resource-center/calculating-architects-fee-there-better-way
- AIA, "Setting Fees: What to Consider" — https://www.aia.org/resource-center/setting-fees-what-consider
- Architekwiki, "Architectural Fee as a Percent of Construction Cost" — https://www.architekwiki.com/wiki/architectural-fee-as-a-percent-of-construction-cost
- Architectural Fees, "Commercial Architectural Fees" — https://architecturalfees.com/commercial-architectural-fees/
- Architectural Fees, "Residential Architectural Fees" — https://architecturalfees.com/residential-architectural-fees/
- Archtoolbox, "Calculating an Architectural Fee for Services" — https://www.archtoolbox.com/calculate-architectural-fee/
- ArchSoc, "The Economics of the American Architectural Profession" — https://www.archsoc.com/kcas/disrespect.html
- BLS, Occupational Employment and Wage Statistics, Architects (17-1011) — https://www.bls.gov/oes/current/oes171011.htm
- BLS, Occupational Outlook Handbook: Architects — https://www.bls.gov/ooh/architecture-and-engineering/architects.htm
- Census Bureau/HUD, Median Sales Price for New Houses Sold (FRED MSPNHSUS) — https://fred.stlouisfed.org/series/MSPNHSUS
- Growthitect, "Average Architect Salary: What You Need to Know" — https://growthitect.com/blog/average-architect-salary
- HomeGuide, "How Much Does an Architect Cost? (2026)" — https://homeguide.com/costs/architect-cost
- Life of an Architect, "Architects Salary — Wanna Know?" — https://www.lifeofanarchitect.com/architects-salary-wanna-know/
- NAHB, "Cost of Constructing a Home in 2024" — https://www.nahb.org/news-and-economics/housing-economics-plus/special-studies/special-studies-pages/cost-of-constructing-a-home-in-2024
- NAHB, "Cost of Constructing a Home" (2019) — https://www.nahb.org/-/media/8F04D7F6EAA34DBF8867D7C3385D2977.ashx
- NCARB, "Number of U.S. Architects Continues Upward Trend" (2020) — https://www.ncarb.org/press/2020-number-of-us-architects-continues-upward-trend
- NCARB, "By the Numbers 2024" — https://www.ncarb.org/sites/default/files/NBTN-2024.pdf
- Neumann Monson, "Architecture Fees: Hourly vs. Percentage vs. Fixed" — https://neumannmonson.com/blog/architecture-fees-hourly-percentage-fixed
- Planman, "Architectural Fee Race to the Bottom" — https://www.planman.app/blog/architecture/fee-wars-undercutting-race-survival/

## Notes

- **The "race to the bottom" narrative is mostly about commercial and public architecture, not residential.** The fee wars documented in trade press primarily affect competitive-bid public projects and large commercial work where RFP processes create explicit price competition. Custom residential architecture, where the architect-client relationship is personal and referral-based, has been largely insulated from fee compression. The distinction matters: the graph should label this as residential custom home design, not "architecture" broadly.

- **The 1972 and 1990 antitrust actions are the key historical inflection points.** Before 1972, the AIA published recommended minimum fee schedules, effectively setting a price floor. The DOJ's consent decree (1972) and follow-up action (1990) removed this floor and prohibited even informal fee guidance. Surprisingly, the market rate for residential design didn't collapse — it dropped ~2 percentage points (from ~12% to ~10%) and stabilized. This suggests the AIA schedule was close to the natural market equilibrium, not artificially inflated.

- **The individual architect's purchasing power tells a different story.** While the firm's fee percentage is stable, the individual architect's salary has not kept pace with construction costs. BLS data shows architect median salary at $72,550 (2010) and $96,690 (2024). A median home's construction cost went from ~$131,000 to ~$271,000 in the same period. An architect's salary fell from 55% of one home's construction cost to 36%. In 1970, an architect earning ~$14,000 could "buy" about 80% of a median home's construction cost. Today they can buy only 36%. The firm fee stayed flat; the architect's personal slice shrank.

- **Where the fee goes has changed dramatically.** In 1960, the architecture fee mostly covered the architect's time and a small office overhead. Today, a typical residential fee must cover: structural engineering subconsultant (often 10-15% of the architecture fee), MEP engineering, energy compliance consultants, BIM software licenses ($5,000-15,000/year per seat), professional liability insurance (E&O insurance, which has risen substantially), and larger support staff for code research, permitting, and project management. The architect personally may retain only 30-50% of the firm's fee as compensation, down from perhaps 60-80% in the pre-consultant era.

- **Most new homes don't use architects at all.** Only about 15-25% of new single-family homes are architect-designed. The majority are production/spec homes built from stock plans by developers. This means the 10% ratio applies to a shrinking slice of the housing market. The architect's share of ALL residential construction spending (not just architect-designed homes) is much lower — perhaps 2-3%. This "market share" erosion is a separate and arguably more significant decline than the fee percentage story.

- **CAD and BIM: efficiency paradox.** CAD (1980s-1990s) and BIM (2000s-present) made drafting dramatically faster. But rather than reducing the architect's hours (and thus the fee), the time savings were absorbed by: more design iterations, more detailed documentation, more coordination with consultants, and more complex building systems. Architects work roughly the same hours per project as they did with hand drafting — they just produce more complex output. The technology dividend went to building complexity, not architect profitability.

- **Design-build erodes the traditional model.** In design-build delivery (where one firm provides both design and construction), the architect is often a subconsultant to the builder, not the customer-facing professional. This reduces the architect's leverage and typically compresses fees to 5-7% of construction cost. Design-build has grown from ~15% of construction delivery in the 1990s to ~45%+ today, primarily in commercial. In residential, design-build is less common but growing, which represents a structural threat to the traditional fee model.

- **Comparison with the GC ticket:** The general contractor captures ~15% of the total home sale price (profit + overhead). The architect captures ~10% of construction cost, which works out to about 6% of the total sale price (since construction is ~60% of sale price). Combined, the GC and architect account for about 21% of the sale price. The remaining ~79% goes to land, materials, subcontractor labor, financing, marketing, and regulatory compliance.

<!-- COMPLETE -->
