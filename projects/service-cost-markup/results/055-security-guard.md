# Private Security — Security Guard (Unarmed, Contract)

## Summary

The security guard's share of what clients pay has been remarkably stable at roughly 60–67% over decades — one of the flattest lines in this entire dataset. Real wages have been essentially stagnant since at least 2003 ($17.05/hr in 2024 dollars then vs. $17.03 in 2022), but billing rates moved in lockstep, keeping the ratio steady. The real story isn't a collapsing ratio — it's that both the numerator and denominator are anchored near the bottom of the labor market, and the ~35–40% spread covers a well-documented stack of payroll taxes, workers' comp insurance, liability coverage, supervision, and a thin 10–15% profit margin.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1980 | $4.50 | $6.75 | per guard-hour billed to client | 1 | 66.7% | low |
| 1990 | $6.25 | $9.50 | per guard-hour billed to client | 1 | 65.8% | low |
| 2000 | $9.00 | $14.00 | per guard-hour billed to client | 1 | 64.3% | med |
| 2005 | $10.50 | $16.25 | per guard-hour billed to client | 1 | 64.6% | med |
| 2010 | $11.90 | $18.00 | per guard-hour billed to client | 1 | 66.1% | med |
| 2015 | $12.50 | $19.50 | per guard-hour billed to client | 1 | 64.1% | med |
| 2019 | $13.72 | $23.00 | per guard-hour billed to client | 1 | 59.7% | high |
| 2022 | $16.00 | $25.00 | per guard-hour billed to client | 1 | 64.0% | med-high |
| 2024 | $18.45 | $30.00 | per guard-hour billed to client | 1 | 61.5% | high |

## Methodology

**Worker compensation** is the security guard's hourly wage (median, national). For 2019 and 2024, this comes directly from BLS Occupational Employment and Wage Statistics (SOC 33-9032): $13.72/hr median in May 2019, $18.45/hr median in May 2024. The 2003 figure ($10.06/hr nominal) is derived from the Center for American Progress analysis showing $17.05/hr in 2024-adjusted dollars. Earlier decades (1980, 1990) are estimated from minimum wage context — the Hallcrest Report II (1990) noted guards were paid at or slightly above minimum wage ($3.35/hr in 1981, rising to $4.25 by 1991), with typical hourly rates running $1–3 above the federal minimum. The 2000–2015 figures are interpolated from the 2003 and 2019 anchors plus the known fact that real wages were flat throughout this period.

**Customer cost** is the average hourly billing rate a contract security company charges its client per guard-hour of unarmed service. The best direct measurement comes from the IFPO/TrackforceValiant Pay and Bill Rate Benchmark Report (2019), which analyzed 2 million shifts across 83,000 officers at 12,000+ client sites: median commercial bill rate was $23/hr against median pay of $15/hr. For 2024–2025, multiple industry sources (Overton Security, Belfry Software, Bark, Thumbtack, AF Guards) consistently cite unarmed guard billing rates of $25–40/hr, with the national average for standard unarmed posts around $28–32/hr. I use $30/hr as the 2024 figure — a midpoint estimate for a standard unarmed commercial post.

For years before 2019, billing rates are derived two ways:
1. **PPI extrapolation:** The BLS Producer Price Index for Security Guard Services (PCU5616125616121, base Dec 2004 = 100) reached ~170.8 by January 2024, indicating billing rates rose ~71% from 2004 to 2024. This is used to estimate the 2005 and 2010 figures.
2. **Industry markup multiplier:** The standard markup of 1.5–1.7x guard wages has been well-documented across decades. For 1980 and 1990, I apply a ~1.5x multiplier (lower end, reflecting less regulatory burden and insurance cost in earlier decades).

**Customers per worker** is 1 in all years. A security guard provides an exclusive, per-hour service — one guard stands at one post for one client at a time. The billing rate IS the total cost per worker to the client.

**Why this proxy over alternatives?** Contract security is one of the cleanest industries for this calculation. Unlike healthcare or education, there's no insurance intermediary, no government subsidy layer, and no ambiguity about the unit of service. One guard-hour is billed at one rate. The guard's wage divided by that rate is a direct, unambiguous fundamental worker ratio.

**Important caveat on BLS wages:** BLS OES data for security guards (33-9032) includes both contract and in-house (proprietary) guards. Contract guards tend to earn slightly less than in-house guards. The IFPO 2019 benchmark found a median contract guard pay of $15/hr vs. the BLS national median of $13.72/hr, likely because the IFPO surveyed larger, more professionalized firms. I use the BLS figure for consistency across the time series, which may slightly understate the ratio. The 2019 row using BLS data ($13.72/$23 = 59.7%) would be 65.2% using the IFPO's own pay figure ($15/$23).

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OEWS), SOC 33-9032 "Security Guards" — May 2019, May 2023, May 2024 releases. https://www.bls.gov/oes/current/oes339032.htm
- Center for American Progress, "Low Standards Hurt Security Officers' Ability To Make Ends Meet" (2024) — key finding: real wages flat from 2003 ($17.05/hr in 2024$) to 2022 ($17.03/hr in 2024$); 60% of guards now employed by contract firms (up from <50% in 2004); annual turnover 50.8%. https://www.americanprogress.org/article/low-standards-hurt-security-officers-ability-to-make-ends-meet/
- IFPO/TrackforceValiant, "Benchmarking Security Guard Pay and Bill Rates" (2020) — analyzed December 2019 data from 200+ security firms, 500+ divisions, 12,000+ client sites, 83,000 officers, ~2 million shifts. Median commercial pay $15/hr, median commercial bill $23/hr, markup ~55%. https://ifpo.org/wp-content/uploads/2020/04/PBR_TFV_eBook.pdf
- Overton Security Services, "How Do Security Guard Services Determine a Bill Rate?" — detailed cost breakdown: direct labor 65–75% of bill rate, operational overhead 10–15%, technology 3–5%, profit margin 10–15%. Labor burden multiplier of 1.3–1.4x base wage. https://www.overtonsecurity.com/how-do-security-guard-services-get-to-a-bill-rate-for-their-services/
- SilverTrac Software, "Security Owners: What Are Good Pay and Bill Rates?" — corroborates IFPO data: commercial median pay $15/hr, bill $23/hr; government median pay $25/hr, bill $46/hr; armed premium: 9% higher billing but 23% higher pay (margin compression). https://www.silvertracsoftware.com/extra/good-security-pay-and-bill-rates
- BLS Producer Price Index, Security Guard Services (FRED series PCU5616125616121) — base Dec 2004 = 100, reached 170.8 by Jan 2024. https://fred.stlouisfed.org/series/PCU5616125616121
- Cunningham, Strauchs, and Van Meter, "Private Security Trends, 1970–2000: The Hallcrest Report II" (1990), U.S. Department of Justice — total private security expenditures $22 billion in 1980, employment 1.1–1.25 million in 1982. https://www.ojp.gov/library/publications/hallcrest-report-ii-private-security-trends-1970-2000
- Building Security Services, "Security Guard Industry Statistics 2026" — contract security grew from $22B (2014) to $33B (2022), a 50% increase. https://www.buildingsecurity.com/statistics/security-guard-industry/
- Belfry Software, "How Much Does a Security Company Make Per Guard?" (2025) — markup 1.5–2x guard wage, unarmed billing $20–40/hr, armed $30–60/hr. https://www.belfrysoftware.com/blog/how-much-does-a-security-company-make-per-guard
- FRED, Total Revenue for Security Guards and Patrol Services (REVEF561612ALLEST) — $11.5B in 1998, $32.2B in 2022. https://fred.stlouisfed.org/series/REVEF561612ALLEST

## Notes

- **The flattest ratio in the dataset?** Security guards may be the most boring line on the mega-graph — and that's the point. Unlike healthcare or higher education where layers of administration, insurance, and bureaucracy have ballooned the spread between worker pay and customer cost, contract security is a transparent pass-through business. The guard's share stays high because there's barely anything else in the product. No IP, no R&D, no complex supply chain — just a person standing somewhere.

- **The markup is well-understood and justified.** The ~35–40% that doesn't go to the guard covers: FICA/payroll taxes (7.65%), workers' compensation insurance (15–18% — security is a high-risk classification), unemployment insurance (3%), general liability insurance, uniforms and equipment, field supervision, recruitment/training, back-office overhead, and net profit (10–15%). This is not a bloated middleman — it's the actual cost of employing someone in a regulated, insured, liability-heavy profession.

- **The 2019 dip (59.7%) vs. the usual ~64–66% is likely a measurement artifact.** The billing rate ($23) comes from IFPO's survey of contract firms, while the wage ($13.72) comes from BLS which includes lower-paid in-house guards. Using IFPO's own contract-guard pay figure ($15/hr), the ratio is 65.2% — right in line with the historical range.

- **Armed vs. unarmed is a fascinating sub-story.** Security companies charge clients ~9% more for armed guards but must pay armed guards ~23% more. Armed services compress the company's margin. The liability insurance premium for armed guards is dramatically higher and goes entirely to the company, not the guard. This means armed guards actually have a LOWER ratio than unarmed guards despite earning more.

- **Turnover is the hidden cost driver.** Industry turnover runs 50–300% annually (50.8% in 2023, down from historical norms of 100–300%). Every departure costs the company $3,000–5,000 in recruitment, screening, and training. This cost is embedded in the markup and is the single biggest argument for why the guard's share can't go much higher without the business model breaking.

- **The private security workforce is enormous.** Roughly 1.2 million guards in the U.S. — about 3x the number of sworn police officers. The shift from in-house to contract security has accelerated (from <50% contract in 2004 to 60% in 2023), which means more workers are subject to the billing markup structure.

- **Technology hasn't replaced guards — it's changed the markup composition.** Cameras and access control systems haven't reduced guard headcount; they've added a technology cost layer (3–5% of billing rate per Overton) while the guard still stands there. Revenue per guard has gone up, but the guard's cut hasn't changed much.

<!-- COMPLETE -->
