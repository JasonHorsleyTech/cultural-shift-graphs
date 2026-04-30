# Plumbing Services — Plumber

## Summary

The plumber's share of the customer's labor dollar has eroded from roughly 50% in 1960 to about 32% in 2024 — a 36% decline over six decades. Unlike healthcare or education where ratios collapsed dramatically, plumbing shows a slow, steady slide driven by the cumulative weight of insurance, regulation, technology, and benefits costs. The trade's strong union tradition and licensing barriers have protected wages better than most blue-collar occupations, but overhead has grown faster than wages in every decade since 1970. The myth that "trades are honest industries where the worker keeps a fair share" is partially true — plumbers do better than auto mechanics (18%) or nurses (1.4%) — but the trend line points firmly downward.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | $3.75/hr | $7.50/hr | per hour of labor | 1 | 50.0 | low |
| 1970 | $6.50/hr | $13.00/hr | per hour of labor | 1 | 50.0 | low |
| 1980 | $12.50/hr | $27.00/hr | per hour of labor | 1 | 46.3 | med |
| 1990 | $16.50/hr | $38.00/hr | per hour of labor | 1 | 43.4 | med |
| 2000 | $20.50/hr | $50.00/hr | per hour of labor | 1 | 41.0 | med |
| 2005 | $21.50/hr | $55.00/hr | per hour of labor | 1 | 39.1 | med/high |
| 2010 | $24.00/hr | $65.00/hr | per hour of labor | 1 | 36.9 | med/high |
| 2015 | $26.00/hr | $75.00/hr | per hour of labor | 1 | 34.7 | med/high |
| 2020 | $27.50/hr | $85.00/hr | per hour of labor | 1 | 32.4 | high |
| 2024 | $30.27/hr | $95.00/hr | per hour of labor | 1 | 31.9 | high |

## Methodology

**Worker compensation** is the plumber's median hourly wage — what the employer pays per clock hour of work. For 2004–2024, this uses BLS Occupational Employment and Wage Statistics (OES) data for SOC code 47-2152 (Plumbers, Pipefitters, and Steamfitters). Confirmed anchor points: mean annual wage $44,110 in 2004, $50,410 in 2010, $55,240 in 2015, $58,160 in 2018, $61,050 in 2020 (recruiter.com series sourcing BLS OES data). BLS OES confirmed median annual wage of $60,090 in May 2022 and $62,970 ($30.27/hr) in May 2024. For the table, I converted mean annual wages to approximate median hourly figures by dividing by 2,080 hours and adjusting down ~5% (the typical mean-to-median gap for this occupation, reflecting right-skew from master plumbers and high-COL areas).

For 1960–1990, wages are estimated from BLS "Union Wages and Hours in the Building Trades" bulletins (published 1936–1981, available via FRASER/St. Louis Fed) and the 1980 Census Special Report on Earnings by Occupation. Union journeyman plumber hourly rates were approximately $4.00/hr in 1960, $7.25/hr in 1970, and $14.50/hr in 1980. Non-union plumbers earned roughly 10–20% less; the table figures represent a blended average weighted toward union (which represented ~70% of construction employment in the 1960s, declining to ~20% by 2000). The 1990 figure is interpolated between the 1980 BLS building trades data and the earliest BLS OES data from the late 1990s.

**Customer cost** is the average hourly labor rate charged to the homeowner — what appears on the invoice for one hour of plumber time, excluding materials and service/trip fees. The 2024 anchor of $95/hr is derived from multiple 2025–2026 industry surveys (Angi, HomeGuide, HomeAdvisor, Yelp) that consistently report a national average of $90–120/hr, with most homeowners paying around $90/hr. I used $95 as the central estimate. For earlier decades, customer rates are estimated by working backward from the 2024 anchor using three cross-checks: (1) the industry-standard multiplier of 2.5–3x base wage (documented by Jobber, HouseCall Pro, ServiceTitan, and BuildOps), (2) the known trajectory of overhead costs (insurance went from "incidental" in 1957 to ~15% of revenue by 2021 per Balkan Drain Cleaning), and (3) the labor-as-percentage-of-revenue benchmark (currently 40–60% of total bill per industry sources). These are rough estimates — no consistent time series of plumber hourly rates exists before the mid-2010s.

**Customers per worker** is 1 because this is a direct per-hour comparison: one hour of customer billing maps to one hour of plumber labor. Unlike flat-rate auto repair, most residential plumbing is still billed by time and materials, making this a clean comparison.

**Why this proxy:** The hourly labor rate is the most natural unit for plumbing. Unlike total job costs (which vary wildly from a $200 faucet repair to a $15,000 sewer line replacement and mix labor with materials), the hourly rate isolates the service markup and directly answers: of each dollar the customer pays for one hour of plumber time, how much goes to the plumber?

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics, SOC 47-2152 (Plumbers, Pipefitters, and Steamfitters), May 2024: https://www.bls.gov/oes/current/oes472152.htm
- Bureau of Labor Statistics, OES archived data, May 2022: https://www.bls.gov/oes/2022/may/oes472152.htm
- BLS Occupational Outlook Handbook — Plumbers, Pipefitters, and Steamfitters (median annual wage $62,970 in May 2024): https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm
- Recruiter.com, "Plumber, Pipefitter, and Steamfitter Salary for 2023–2024" (BLS-sourced mean annual wages 2004–2020): https://www.recruiter.com/salaries/plumbers-pipefitters-and-steamfitters-salary/
- FRED, Employed full time: Wage and salary workers: Pipelayers, plumbers, pipefitters, and steamfitters (LEU0254506800A), 2000–2019: https://fred.stlouisfed.org/series/LEU0254506800A
- FRASER/St. Louis Fed, "Union Wages and Hours in the Building Trades" (BLS bulletins 1936–1981): https://fraser.stlouisfed.org/title/4200
- BLS Bulletin 2091, "Union Wages and Benefits: Building Trades, July 1, 1980": https://fraser.stlouisfed.org/files/docs/publications/bls/bls_2091_1981.pdf
- University of Missouri Libraries, "Prices and Wages by Decade" (1950s–1990s wage reference guides): https://libraryguides.missouri.edu/pricesandwages/1960-1969
- Data USA, Plumbers, Pipefitters, and Steamfitters profile (2023 avg salary $64,046, employment 563,405): https://datausa.io/profile/soc/plumbers-pipefitters-and-steamfitters
- Angi, "How Much Does Plumbing Repair Cost? [2026 Data]" ($45–$200/hr range): https://www.angi.com/articles/plumber-cost.htm
- HomeGuide, "2026 Plumber Cost Per Hour" ($70–$120/hr before trip fees): https://homeguide.com/costs/plumber-cost
- HouseCall Pro, "2026 Plumbing Price Guide" (labor rate calculation methodology, 2.5–3x markup): https://www.housecallpro.com/resources/marketing/how-to/how-to-price-plumbing-jobs/
- Jobber, "How to Price Plumbing Jobs" (labor rate formula, 2.5–3x multiplier): https://www.getjobber.com/academy/plumbing/how-to-price-a-plumbing-job/
- BuildOps, "Guide to Plumbing Pricing: Build Profit Into Every Bid" (overhead and margin benchmarks): https://buildops.com/resources/plumbing-pricing/
- BT Academy, "Plumbing Business Profit Margin Benchmarks" (60–70% gross margin, 15–25% net): https://www.btacademy.com/blog/plumbing-business-profit-margins
- FinancialModelsLab, "7 Plumbing Service KPIs" (71% gross margin, $445 avg order value): https://financialmodelslab.com/blogs/kpi-metrics/plumber
- Balkan Drain Cleaning, "Ever Wonder How Much Plumbing Prices Changed Over the Years?" (1957 vs 2021 cost comparison, insurance as 15% of revenue): https://www.balkandraincleaning.com/plumbing-prices-over-the-years-change/
- ServiceTitan, "Plumbing Labor Rate Calculator" (labor cost includes wage + taxes + benefits): https://www.servicetitan.com/tools/plumbing-labor-rate-calculator

## Notes

- **The "honest trade" myth is half-true.** Plumbers do keep a larger share of the customer dollar (~32%) than many service workers — compare to auto mechanics (~18%), registered nurses (~1.4% of healthcare spending), or college professors (~12%). But the share has been declining steadily, and a plumber today keeps about two-thirds of what a plumber in the 1960s kept, relative to the customer price. The trade is more "honest" than most, but less honest than it used to be.

- **Insurance is the biggest overhead growth story.** The Balkan Drain Cleaning article documents that insurance was "an incidental cost" for plumbing contractors in 1957. Today, plumbing companies pay an average of ~$115/month for general liability, ~$195/month for workers' compensation per employee, and ~$166/month for a business owner's policy. Insurance now represents approximately 15% of annual contractor revenue. This single cost center accounts for a large share of the ratio's decline.

- **The emergency premium goes to the company, not the plumber.** Emergency plumber rates are 1.5–3x regular rates ($100–$350/hr), but the plumber typically receives only standard overtime pay (1.5x their base wage). On a $200/hr emergency call where the plumber earns $45/hr (1.5x of $30), the company captures 77% of the customer payment versus 68% during regular hours. The emergency premium disproportionately benefits the owner, not the worker.

- **Union decline has dampened wages but not killed them.** Construction union membership dropped from ~40% in 1970 to ~13% in 2024. Plumbing has held up better than most trades because licensing requirements (4–5 year apprenticeship, journeyman exam, master plumber certification) create a natural barrier that functions like a union floor — you can't just hire cheaper, unlicensed labor. This is why plumber wages have kept up better than, say, carpenter or general laborer wages.

- **The shift to flat-rate pricing obscures the real ratio.** Many modern plumbing companies (especially larger ones like Roto-Rooter) have moved from time-and-materials to flat-rate pricing, where the customer pays a fixed price per job regardless of how long it takes. A faucet replacement might be billed at $350 regardless of whether it takes 30 minutes or 2 hours. Under flat-rate, a fast plumber generates more revenue per hour for the company, widening the gap between their wage and the effective hourly revenue they produce. The ratio as measured here (wage vs. posted hourly rate) may slightly overstate the plumber's share compared to a revenue-per-plumber-hour calculation.

- **Pre-1990 data is the weakest.** Historical hourly rates charged to customers for plumbing are essentially undocumented. The 1960–1980 customer cost figures are estimates based on the known overhead structure of the era, the documented wage multiplier norms in the trades, and cross-referencing with specific cost data points (like the 1957 $395 sewer line job from the Balkan article). The wage data for those decades is better sourced (BLS building trades bulletins) but still requires adjustment for union/non-union mix. Treat the pre-1990 ratios as directional, not precise.

- **Plumber real wages have actually declined.** CPI increased approximately 10x from 1960 to 2024. The 1960 plumber wage of $3.75/hr in 2024 dollars is roughly $41 — about 35% higher than the current median of $30.27. Meanwhile, the customer rate went from $7.50 (≈$82 in 2024 dollars) to $95 — a real increase of about 16%. The plumber is cheaper in real terms; the service is more expensive. The entire gap is overhead.

<!-- COMPLETE -->
