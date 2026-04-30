# Electrical Services — Electrician

## Summary

The electrician's share of the customer's labor dollar has declined from roughly 50% in 1960 to about 33% in 2024 — a 33% decline over six decades. The trajectory is nearly identical to plumbing: same union heritage, same apprenticeship model, same slow overhead creep. The "licensing moat" from strict electrical codes doesn't meaningfully protect the ratio — it boosts absolute wages slightly but also adds compliance overhead that cancels much of the benefit. The ratio has stabilized somewhat since 2010, holding in the 33–36% range rather than continuing to freefall, suggesting the trades may be approaching an overhead ceiling.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | $4.00/hr | $8.00/hr | per hour of labor | 1 | 50.0 | low |
| 1970 | $7.00/hr | $14.00/hr | per hour of labor | 1 | 50.0 | low |
| 1980 | $13.50/hr | $29.00/hr | per hour of labor | 1 | 46.6 | med |
| 1990 | $17.50/hr | $40.00/hr | per hour of labor | 1 | 43.8 | med |
| 2000 | $20.00/hr | $50.00/hr | per hour of labor | 1 | 40.0 | med |
| 2005 | $21.00/hr | $55.00/hr | per hour of labor | 1 | 38.2 | med/high |
| 2010 | $23.50/hr | $65.00/hr | per hour of labor | 1 | 36.2 | med/high |
| 2015 | $25.50/hr | $72.00/hr | per hour of labor | 1 | 35.4 | med/high |
| 2020 | $28.00/hr | $82.00/hr | per hour of labor | 1 | 34.1 | high |
| 2024 | $30.00/hr | $90.00/hr | per hour of labor | 1 | 33.3 | high |

## Methodology

**Worker compensation** is the electrician's median hourly wage — what the employer pays per clock hour of work. For 2004–2024, this uses BLS Occupational Employment and Wage Statistics (OES) data for SOC code 47-2111 (Electricians). Confirmed anchor points from the BLS OES time series (sourced via recruiter.com): mean annual wage $44,900 in 2004, $51,700 in 2010, $55,420 in 2015, $58,990 in 2018, $61,330 in 2020. BLS Occupational Outlook Handbook reports median annual wage of $62,350 ($30.00/hr) in May 2024. For the table, mean annual wages were converted to approximate median hourly figures by dividing by 2,080 hours and adjusting down ~5% (the typical mean-to-median gap for this occupation, reflecting right-skew from master electricians and high-COL areas).

For 1960–1990, wages are estimated from BLS "Union Wages and Hours in the Building Trades" bulletins (published 1936–1981, available via FRASER/St. Louis Fed). Union journeyman electrician (inside wireman) hourly rates ran approximately $4.25–4.50/hr in 1960, $7.50–8.00/hr in 1970, and $15.00–16.50/hr in 1980. Non-union electricians earned roughly 10–20% less. The table figures represent a blended average weighted toward union rates (union represented ~70% of construction employment in the 1960s, declining to ~20% by 2000). Electricians historically earned a 5–10% premium over plumbers in the building trades, reflecting the higher danger and stricter licensing of electrical work — this is consistent with the data. The 1990 figure is interpolated between the 1980 BLS building trades data and the earliest BLS OES data from the late 1990s.

**Customer cost** is the average hourly labor rate charged to the homeowner — what appears on the invoice for one hour of electrician time, excluding materials and service/trip fees. The 2024 anchor of $90/hr is derived from multiple 2025–2026 industry surveys (Angi, HomeGuide, HomeAdvisor, Fuse Service, HouseCall Pro) that consistently report a national average of $50–$130/hr, with a central tendency of $75–$95/hr. Electrician rates are very similar to plumber rates, with slightly more downward pressure from competition with handymen on simple tasks (outlets, switches) and slightly less emergency premium (burst pipes create more urgency than flickering lights). For earlier decades, customer rates are estimated by working backward from the 2024 anchor using the industry-standard multiplier of 2.5–3x base wage (documented by HouseCall Pro, ServiceTitan, and industry pricing guides), the known trajectory of overhead costs (insurance, vehicle, licensing), and the labor-as-percentage-of-revenue benchmark (currently 30% of total revenue per typical electrical contractor breakdown). No consistent time series of electrician hourly rates exists before the mid-2010s.

**Customers per worker** is 1 because this is a direct per-hour comparison: one hour of customer billing maps to one hour of electrician labor.

**Why this proxy:** The hourly labor rate is the most natural unit for electrical work. Unlike total job costs (which vary wildly from a $150 outlet replacement to a $12,000 panel upgrade and mix labor with materials), the hourly rate isolates the service markup and directly answers: of each dollar the customer pays for one hour of electrician time, how much goes to the electrician?

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics, SOC 47-2111 (Electricians), May 2024: https://www.bls.gov/oes/current/oes472111.htm
- Bureau of Labor Statistics, OES data for Electricians, May 2023: https://www.bls.gov/oes/2023/may/oes472111.htm
- Bureau of Labor Statistics, OES data for Electricians, May 2019: https://www.bls.gov/oes/2019/may/oes472111.htm
- BLS Occupational Outlook Handbook — Electricians (median annual wage $62,350 in May 2024): https://www.bls.gov/ooh/construction-and-extraction/electricians.htm
- Recruiter.com, "Electricians Salary" (BLS-sourced mean annual wages 2004–2020): https://www.recruiter.com/salaries/electricians-salary/
- FRED, Employed full time: Wage and salary workers: Electricians occupations: 16 years and over (LEU0254506300A), 2000–2025: https://fred.stlouisfed.org/series/LEU0254506300A
- FRED, Median usual weekly nominal earnings: Electricians (LEU0254559700A): https://fred.stlouisfed.org/series/LEU0254559700A
- FRASER/St. Louis Fed, "Union Wages and Hours in the Building Trades" (BLS bulletins 1936–1981): https://fraser.stlouisfed.org/title/union-wages-hours-building-trades-4200
- BLS Bulletin 1709, "Union Wages and Hours: Building Trades, July 1, 1970": https://fraser.stlouisfed.org/files/docs/publications/bls/bls_1709_1971.pdf
- BLS Bulletin 2091, "Union Wages and Benefits: Building Trades, July 1, 1980": https://fraser.stlouisfed.org/files/docs/publications/bls/bls_2091_1981.pdf
- BLS Bulletin 1487, "Union Wages and Hours: Building Trades, July 1, 1965 and Trend 1907–65": https://fraser.stlouisfed.org/files/docs/publications/bls/bls_1487_1966.pdf
- University of Missouri Libraries, "Prices and Wages by Decade" (1950s–1990s): https://libraryguides.missouri.edu/pricesandwages/1960-1969
- Angi, "How Much Does It Cost to Hire an Electrician? [2026 Data]": https://www.angi.com/articles/how-much-does-it-cost-hire-electrician.htm
- HomeGuide, "Electrician Cost Per Hour (2026)": https://homeguide.com/costs/electrician-cost-per-hour
- HomeAdvisor, "How Much Do Electricians Charge? [2025 Data]": https://www.homeadvisor.com/cost/electrical/hire-an-electrician/
- Fuse Service, "How Much Does an Electrician Cost? Hourly Rates Explained": https://fuseservice.com/how-much-does-an-electrician-cost/
- HouseCall Pro, "Electrical Contractor Profit Margin: How Much Do Owners Make?": https://www.housecallpro.com/resources/electrical-contractor-profit-margin/
- HouseCall Pro, "2026 Electrician Prices: Average Costs & How to Price Jobs": https://www.housecallpro.com/resources/how-to-price-electrical-work/
- Build-Folio, "Electrical Contractor Pricing Guide (2026)": https://build-folio.com/contractor-guides/electrical-contractor-pricing-guide/
- FieldEdge, "Plumber vs. Electrician Salary: Comparing Compensation in the Trades": https://fieldedge.com/blog/plumber-vs-electrician-salary/
- Insureon, "Electrician Insurance Costs": https://www.insureon.com/construction-contracting-business-insurance/electricians/cost
- ContractorNerd, "Electrician Insurance Cost & Quotes (2026)": https://www.contractornerd.com/electrician-insurance/cost/

## Notes

- **Near-identical to plumber.** The electrician ratio trajectory (50% → 33%) is strikingly similar to the plumber's (50% → 32%). Both trades share the same structural DNA: strong union tradition, mandatory apprenticeship, licensing barriers, similar overhead growth. This isn't a coincidence — it's the same economic forces acting on the same type of business. If anything, the similarity is the story: the skilled trades are all being squeezed by the same overhead ratchet.

- **The "licensing moat" is real but double-edged.** Electrical work is more strictly licensed than almost any other trade (for obvious safety reasons — bad wiring kills people). Every new circuit needs inspection. Many states require separate licenses for residential, commercial, fire alarm, and low-voltage work. This does protect wages: electricians earn a slight premium over plumbers (~5–10% historically in union trades, converging to near parity today). But the licensing also adds overhead: inspection fees, continuing education requirements, specialty certifications, and the compliance burden of staying current with the National Electrical Code (updated every 3 years). The moat protects the worker's absolute wage but not the ratio, because the overhead scales too.

- **Solar and EV work: new categories, old economics.** Solar panel installation has created a booming subcategory of electrical work, and EV charger installation is growing fast. Solar installers earn less than traditional electricians (median $51,860 vs $62,350 in 2024), and labor represents only 10–25% of total system cost (the rest is panels, inverters, racking, permitting). The ratio for solar work is dramatically lower than traditional electrical — the electrician's share of what the customer pays is perhaps 8–12%. EV charger installation is closer to traditional electrical work in cost structure. Both categories could eventually pull down the blended ratio if they become a larger share of total electrical work.

- **The overhead structure mirrors plumbing.** A typical electrical contractor's revenue breaks down roughly as: materials 31%, direct labor wages 30%, labor burden/benefits 13%, overhead (insurance, vehicles, office, licensing) 13%, subcontractor expenses 5%, and net profit 3–10%. General liability insurance for an electrical contractor runs 0.6–1.3% of revenue; workers' compensation runs ~$3,275/year per employee. The gross margin target is 65–67%, and the net margin target is 10–20% (most contractors hit closer to 10%). These numbers are virtually interchangeable with plumbing.

- **Emergency premium goes to the company, not the worker.** Emergency/after-hours electrical rates are 1.5–2x regular rates ($100–$200/hr), but the electrician typically receives only standard overtime (1.5x base wage). On a $150/hr emergency call where the electrician earns $45/hr, the company captures 70% vs ~67% during regular hours. Same pattern as plumbing.

- **Pre-1990 customer cost data is the weakest link.** As with plumbing, historical hourly rates charged by electrical contractors to customers are essentially undocumented before the mid-2010s. The 1960–1990 customer rate estimates rely on the known markup multiplier norms in the trades (2x–2.5x in earlier decades, rising to 3x today), the documented growth of insurance and compliance costs, and cross-referencing with the labor-as-percentage-of-revenue benchmark. The wage data for those decades is better sourced (BLS Union Wages bulletins) but still requires adjustment for the declining union share of construction employment. Treat pre-1990 ratios as directional, not precise.

- **Electrician real wages have declined.** CPI increased approximately 10x from 1960 to 2024. The 1960 electrician wage of $4.00/hr in 2024 dollars is roughly $44 — about 47% higher than the current median of $30. Meanwhile, the customer rate went from $8.00 (≈$88 in 2024 dollars) to $90 — essentially flat in real terms. The electrician is cheaper in real terms; the service costs the same. The entire gap is overhead.

<!-- COMPLETE -->
