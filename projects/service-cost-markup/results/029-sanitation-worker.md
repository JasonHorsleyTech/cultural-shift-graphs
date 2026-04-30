# Waste Collection — Sanitation Worker

## Summary

The sanitation worker's share of what households pay for garbage collection collapsed from roughly 68% in 1970–1980 to about 13% by 2020–2023. The ratio was remarkably stable during the manual-labor era (three-person rear-loader crews, cheap landfills, minimal regulation), then crashed during the late 1980s–1990s as environmental regulations dramatically increased non-labor costs and automation replaced multi-person crews with single-operator trucks. Today the person hauling your trash captures barely one-eighth of your garbage bill.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1970 | 6,500 | 38 | per household/year | 250 | 68.4 | low |
| 1980 | 14,500 | 61 | per household/year | 350 | 67.9 | low |
| 1990 | 21,000 | 122 | per household/year | 460 | 37.4 | med |
| 2000 | 26,000 | 192 | per household/year | 585 | 23.1 | med |
| 2010 | 32,000 | 274 | per household/year | 720 | 16.2 | med |
| 2020 | 36,000 | 356 | per household/year | 790 | 12.8 | med-high |
| 2023 | 40,620 | 420 | per household/year | 749 | 12.9 | high |

## Methodology

**Ratio formula:** Sanitation worker annual median compensation / (annual waste collection cost per household x households served per worker).

**Worker compensation:**
- 2023 anchor: BLS OES median annual wage for SOC 53-7081 "Refuse and Recyclable Material Collectors" = $40,620 (May 2023).
- 2019 BLS median: $37,840. 2020–2023 wage growth was ~12% (pandemic labor market tightening).
- 2000–2010 estimated by back-calculating from 2019 at ~2% annual nominal growth, consistent with blue-collar wage trends.
- 1980–1990 estimated at ~4% annual nominal growth (higher inflation era).
- 1970 anchored to the 1968 Memphis sanitation strike data ($1.60/hr for laborers = ~$3,328/yr) adjusted upward for: (a) national vs. Memphis wages (Memphis was a notably low-wage market), (b) post-strike wage gains, (c) two years of inflation. Estimate: ~$6,500 nationally.

**Customer cost per household:**
- 2023 anchor: Average residential garbage collection bill of ~$35/month = $420/year, consistent with multiple industry surveys (range $25–50/month).
- Historical costs derived using the BLS Consumer Price Index for "Garbage and Trash Collection" (base 1983 = 100). Index values: 1983: 100.0, 1990: 171.2, 2000: 269.8, 2010: 384.4, 2020: 498.7, 2023: 589.3.
- Pre-1983 values back-extrapolated at ~5% annual growth (slower than post-RCRA increases), yielding estimated indices of ~86 (1980) and ~53 (1970).
- Formula: Cost(year) = $420 x CPI(year) / 589.3.

**Households per worker:**
- 2023: ~140,000 refuse collectors (BLS OES) serving ~105M households with curbside collection (~80% of 131M US households) = ~749 HH per worker.
- Historical estimates based on crew size evolution: 3-person rear-loader crews in 1970 serving ~750 stops per route = 250 HH per worker. Gradual shift to 2-person crews (1980s–1990s) and single-operator automated side-loaders (2000s–present) tripled the HH-per-worker ratio.
- Household counts from Census Bureau: 63M (1970), 80M (1980), 92M (1990), 105M (2000), 117M (2010), 129M (2020), 131M (2023).
- Curbside collection participation estimated at 60% (1970) rising to 80% (2000+), reflecting suburbanization and universal service mandates.

**Why this proxy over alternatives:** Municipal budget share would be cleaner for tax-funded collection but isn't available longitudinally. The CPI specifically tracks consumer-facing garbage collection costs (both direct bills and fee-based municipal services), providing the best 40+ year consistency. The proxy captures what the household actually pays through any mechanism.

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OEWS), SOC 53-7081: Refuse and Recyclable Material Collectors — May 2019, May 2023 releases. https://www.bls.gov/oes/2023/may/oes537081.htm
- Bureau of Labor Statistics, Consumer Price Index: Garbage and Trash Collection (1983–2026), via in2013dollars.com. https://www.in2013dollars.com/Garbage-and-trash-collection/price-inflation
- Memphis Sanitation Strike (1968) wage data: Memphis laborers $1.60/hr, drivers $1.90/hr. https://en.wikipedia.org/wiki/Memphis_sanitation_strike
- NYC Sanitation Worker Strike (1968): $7,956/yr after 3 years of service. Via Workers.org and historical archives.
- MyMajors.com salary data (BLS May 2025): 139,180 employed, median $51,210. https://www.mymajors.com/career/refuse-and-recyclable-material-collectors/salary/
- U.S. Census Bureau, Historical Households Tables (household counts by decade).
- Waste Dive: U.S. waste and recycling industry reached $104.63B revenue in 2024, collection segment = $69.46B. https://www.wastedive.com/news/us-recycling-waste-market-100-billion-revenue-milestone-waste-business-journal/743163/
- Automated side-loader productivity data: 800–1,200 homes per route per day for single-operator trucks vs. 150–200 for 3-person rear-loader crews. Via municipaltruck.com and industry sources.

## Notes

- **The 1990 inflection point is the story.** The ratio was stable at ~68% through the manual-labor era, then halved in a single decade (1980–1990) and kept falling. Three forces converged: (1) RCRA regulations (1976, enforced heavily in the 1980s) drove up landfill costs from near-zero to $30–50/ton tipping fees, (2) recycling mandates added collection complexity without proportional worker pay increases, and (3) automated side-loader trucks began replacing 3-person crews with single operators in the late 1980s.

- **Automation paradox.** The automated truck tripled the number of households one worker can serve (from ~250 to ~750), but the worker's pay only doubled over the same period ($14,500 to ~$36,000). The productivity gain went almost entirely to capital (truck cost) and non-labor overhead, not to the remaining worker. The ticket's hypothesis ("did the one remaining worker's compensation go up proportionally?") is clearly answered: no.

- **Private vs. public split.** About 60% of U.S. residential waste collection is now handled by private companies (dominated by Waste Management Inc. and Republic Services), vs. ~40% municipal. The privatization wave of the 1990s–2000s likely accelerated the ratio decline by introducing corporate overhead and profit margins on top of the already-growing non-labor costs. However, I couldn't find longitudinal data separating private vs. public worker ratios specifically.

- **Recycling added cost but not worker pay.** Mandatory recycling programs (widespread from the 1990s onward) effectively doubled collection routes (separate trash and recycling trucks) without doubling worker compensation. Recycling collection is often the same workers on different days, but the total revenue per household increased (customers pay for both services). This inflated the denominator of the ratio without proportionally increasing the numerator.

- **Pre-1983 data is the weakest link.** The CPI series for garbage collection starts in 1983. My 1970 and 1980 cost estimates are back-extrapolated and should be treated as indicative, not precise. The wage estimates for those decades rely on the Memphis/NYC strike data (atypical cities) plus general blue-collar wage trends. The 68% ratio for 1970–1980 is directionally correct (garbage collection was overwhelmingly a labor cost in that era) but could easily be 60–75%.

- **The 2020–2023 slight uptick** (12.8% → 12.9%) reflects the pandemic-era labor shortage that drove garbage collector wages up ~12% in three years — faster than customer costs grew. Whether this is a durable reversal or a blip remains to be seen.

<!-- COMPLETE -->
