# Roofing — Roofer

## Summary

The roofer's share of the customer dollar has declined from roughly 25% in 1990 to about 20% in 2024 — a modest but steady erosion. The decline was steepest in the 1990s and 2000s, driven by surging workers' compensation insurance costs (roofing has the highest injury rate of any occupation), rising material costs as asphalt shingles tracked oil prices, and the growing weight of regulatory compliance. The ratio stabilized around 19–20% after 2010 as acute labor shortages in roofing put upward pressure on wages, roughly matching cost inflation. Notably, when you strip out materials (which account for ~40% of a roof bill), the roofer's share of the labor-plus-overhead portion is ~31% — virtually identical to a plumber's. The lower headline ratio isn't because roofers are more exploited; it's because shingles are expensive.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1990 | $10.00/hr | $40.00/hr | per worker-hour | 1 | 25.0 | low |
| 2000 | $13.00/hr | $60.00/hr | per worker-hour | 1 | 21.7 | low/med |
| 2005 | $14.70/hr | $72.50/hr | per worker-hour | 1 | 20.3 | med |
| 2010 | $16.55/hr | $85.00/hr | per worker-hour | 1 | 19.5 | med |
| 2015 | $17.65/hr | $93.75/hr | per worker-hour | 1 | 18.8 | high |
| 2020 | $20.95/hr | $106.25/hr | per worker-hour | 1 | 19.7 | high |
| 2024 | $24.50/hr | $125.00/hr | per worker-hour | 1 | 19.6 | high |

## Methodology

**Ratio formula:** Roofer median hourly wage / Effective customer cost per worker-hour of roofing labor.

This measures: for each hour one roofer spends on your roof, the customer effectively pays $X per worker-hour (covering that worker's wage, the wages of the rest of the crew, all materials, insurance, company overhead, and profit). The roofer receives $Y of that $X.

**Worker compensation** is the roofer's median hourly wage from BLS Occupational Employment and Wage Statistics (OES), SOC code 47-2181 (Roofers). Confirmed data points from BLS OES (via usawage.com compilation):

- 2012: $35,290/yr ($16.97/hr) → 2015: $36,720 ($17.65/hr) → 2018: $39,970 ($19.22/hr) → 2020: $43,580 ($20.95/hr) → 2022: $47,920 ($23.04/hr) → 2024: $50,970 ($24.50/hr).

For 2004–2011, mean annual wages from recruiter.com (sourcing BLS OES data) were converted to approximate medians using a 0.91 multiplier (the consistent mean-to-median ratio observed in overlapping years 2012–2018). Key values: 2005 mean $33,570 → estimated median $30,550 ($14.69/hr); 2010 mean $37,820 → estimated median $34,420 ($16.55/hr).

For 1990 and 2000, hourly wages were estimated by back-projecting from the earliest OES anchor (2004) using observed construction wage growth rates, cross-referenced against: (1) the plumber-to-roofer wage ratio (~0.65:1, consistent across the 2004–2024 data), applied to known plumber wages; (2) BLS real hourly earnings for construction workers reported by the Chicago Fed ($23.91 in 1990 real dollars; roofers earn ~60–65% of the construction average); and (3) FRED series LEU0254507100A (roofer median weekly earnings). The 1990 and 2000 figures are best estimates with meaningful uncertainty (±15%).

**Customer cost** is the effective customer cost per worker-hour, calculated as:

> Total roof replacement cost ÷ Total crew worker-hours per roof

Where:
- **Total roof replacement cost** = national average for a standard residential asphalt shingle roof replacement (~1,800–2,000 sq ft home, tear-off and replace, 3-tab or architectural shingles). The 2024 anchor of $10,000 is the midpoint of $9,000–$11,000 consistently reported by HomeAdvisor, Angi, This Old House, and multiple industry surveys for 2024–2025. Earlier years are estimated by deflating backward using the BLS Producer Price Index for asphalt shingles (FRED series PCU3241223241222, data since 1984) as the primary guide, cross-referenced against the ENR Construction Cost Index and scattered historical cost references. Key estimates: 2020 ~$8,500; 2015 ~$7,500; 2010 ~$6,800; 2005 ~$5,800; 2000 ~$4,800; 1990 ~$3,200.

- **Total crew worker-hours** = 80 (a crew of 5 roofers × 16 hours per worker, i.e., 2 eight-hour days). This is held constant across the time series. A crew of 4–5 workers completing a standard residential roof in 1.5–2 days is well-documented by industry sources (Rhoden Roofing, Arlo Roofing, multiple contractor forums). The assumption of constancy is reasonable: while modern tools and materials are slightly faster, older roofs were simpler (fewer layers, less ventilation, no ice-and-water shield). Safety requirements (harnesses, guardrails) have added setup time that offsets productivity gains.

**Why this proxy over alternatives:** The per-worker-hour approach allows direct comparison with other trades (plumber, electrician, HVAC tech) that use hourly billing. Unlike the total-job-cost approach, it normalizes for project size variation and isolates the labor productivity question. Unlike the "labor share of bill" approach (which requires knowing the materials split), it uses only the two most observable numbers: what the worker earns and what the customer pays.

## Sources

- BLS Occupational Employment and Wage Statistics, SOC 47-2181 (Roofers), May 2024: https://www.bls.gov/oes/current/oes472181.htm
- BLS Occupational Outlook Handbook — Roofers (median annual wage $50,970 in May 2024): https://www.bls.gov/ooh/construction-and-extraction/roofers.htm
- USAWage.com, Roofers median salary trend 2012–2022 (BLS OES median data compilation): https://www.usawage.com/usa/roofers-salary.php
- Recruiter.com, Roofer Salary for 2023–2024 (BLS-sourced mean annual wages 2004–2020): https://www.recruiter.com/salaries/roofers-salary/
- FRED, Employed full time: Wage and salary workers: Roofers occupations (LEU0254507100A): https://fred.stlouisfed.org/series/LEU0254507100A
- FRED, PPI: Asphalt Shingle Manufacturing, Prepared Asphalt and Tar Roofing Products (PCU3241223241222), 1984–2026: https://fred.stlouisfed.org/series/PCU3241223241222
- HomeAdvisor, "How Much Does Roof Replacement Cost? [2025 Data]": https://www.homeadvisor.com/cost/roofing/install-a-roof/
- Angi, "How Much Does Roof Replacement Cost? [2026]": https://www.angi.com/articles/how-much-does-roof-replacement-cost.htm
- This Old House, "How Much Does a Shingle Roof Cost? (2026 Guide)": https://www.thisoldhouse.com/roofing/shingle-roof-cost
- United Home Experts, "How Much Does A New Roof Cost? (2012)" (historical cost reference): https://unitedhomeexperts.com/how-much-does-a-new-roof-cost/
- Remodeling/JLC Cost vs. Value Report, Roofing Replacement — Asphalt Shingles (2005–2025 historical project costs): https://www.jlconline.com/cost-vs-value/roofing-replacement-asphalt-shingles/
- Data USA, Roofers profile (2023 avg salary $45,311, employment 81,175): https://datausa.io/profile/soc/roofers
- Chicago Fed Letter, "Understanding the (Relative) Rise and Fall of Construction Wages" (real hourly earnings 1970–2000): https://www.chicagofed.org/publications/chicago-fed-letter/2000/july-155
- BudgetingTheNest, "How Much Is the Percentage of Labor in a Roof Job?" (labor 40–60% of total): https://budgeting.thenest.com/much-percentage-labor-roof-job-23361.html
- FieldCamp, "How to Price a Roofing Job: Per-Square Pricing Formula" (cost structure breakdown): https://fieldcamp.ai/blog/how-to-price-a-roofing-job/
- Cedur, "How Much Does Roofing Labor Cost in 2025?" (labor cost ranges): https://www.cedur.com/roofing-labor-cost
- Rhoden Roofing, "How Long Does a Typical Roofing Replacement Project Take?" (crew size, timeline): https://rhodenroofing.com/how-long-does-a-regular-roof-replacement-project-take/
- Whitaker Roofing, "How Large of a Team Should There Be for a Roof Replacement?" (crew size 3–5): https://whitakerroofing.com/how-large-of-a-team-should-there-be-for-a-roof-replacement/
- ConsumerAffairs, "Roofing Industry Statistics 2026" (industry revenue $26.2B in 2022): https://www.consumeraffairs.com/homeowners/roofing-industry-statistics.html

## Notes

- **Materials explain the gap with plumbers.** A roofer's headline ratio (~20%) is lower than a plumber's (~32%), but this isn't because roofers are more exploited. Materials (shingles, underlayment, flashing, drip edge, nails, disposal fees) consume 35–45% of a roofing job's total cost. Plumbing materials are usually a small fraction of the bill. When you compare the roofer's wage against only the non-material portion of the customer cost, the ratio is ~31% — virtually identical to a plumber. The "overhead extraction" is the same; the materials overhead is additive.

- **Workers' comp insurance is the elephant in the room.** Roofing has the highest occupational fatality rate of any major occupation (about 47 deaths per 100,000 workers, vs. ~3.6 for all occupations). Workers' compensation insurance for roofing contractors runs 15–30% of payroll — one of the highest rates in any industry. This single cost item means that for every dollar a roofer earns, the employer pays an additional $0.15–$0.30 just in WC premiums. This is the largest single driver of the gap between "what the roofer gets" and "what the labor portion of the bill says."

- **Insurance-paid roofing inflates the ratio's denominator.** When a roof is replaced via a homeowner's insurance claim (storm damage, hail), the contractor charges the insurance company — not the price-sensitive homeowner. Insurance-funded jobs routinely run 20–40% higher than equivalent out-of-pocket jobs for the same scope of work. The roofer's wage doesn't change. On an insurance-paid $14,000 roof vs. an out-of-pocket $10,000 roof with identical scope, the worker ratio drops from 20% to 14%. The data in this table reflects a blended average, but the insurance-driven segment pulls the ratio downward.

- **Storm chasers are pure overhead extraction.** After major hurricanes or hail events, "storm chasing" roofing companies descend on affected areas, sign homeowners up, charge insurance at maximum rates, and subcontract the actual labor at rock-bottom rates ($25–35/square vs. $50–75/square for established local contractors). In these operations, the roofer's share can drop to 10–12% of the total customer/insurance cost. These operations are a significant portion of the roofing market in storm-prone regions (Florida, Texas, Oklahoma) and represent the worst-case scenario for worker ratio.

- **Immigrant labor has compressed wages.** An estimated 40–50% of roofers in the US are immigrants, many undocumented. This labor supply has kept roofing wages below other construction trades despite the extreme physical demands and injury risk. Roofers earn about 65% of what plumbers earn — a gap that has remained remarkably consistent over the 2004–2024 data period. The wage compression benefits customers (roofs would cost much more with plumber-level wages) and company owners (wider margins), but not the workers.

- **Pre-2004 data is the weakest.** The BLS OES data for roofers is reliable from 2004 onward. The 1990 and 2000 wage estimates are back-projections with ±15% uncertainty. Roof replacement cost estimates for 1990–2005 are based on PPI deflation and scattered historical references rather than systematic surveys. The directional trend (declining ratio) is robust, but the specific percentage points for 1990–2000 should be treated as approximate.

- **The ratio appears to have bottomed out.** From 2010 to 2024, the ratio has held in a narrow 19–20% band. Severe labor shortages in roofing (the industry has an aging workforce with insufficient new entrants) have put enough upward pressure on wages to match the rising cost of materials and overhead. Whether this floor holds depends on immigration policy (which affects labor supply), oil prices (which affect asphalt shingle costs), and the trajectory of workers' comp insurance rates.

<!-- COMPLETE -->
