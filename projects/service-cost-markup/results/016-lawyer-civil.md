# Legal Services (Civil Litigation) — Lawyer

## Summary

The civil litigation lawyer's share of what clients pay has been roughly halved over 54 years — from ~53% in 1970 to ~25% in 2024. Unlike most industries in this project where the worker is arguably underpaid, civil litigation lawyers are highly compensated in absolute terms ($151K median, $225K+ at BigLaw). The collapsing ratio isn't about depressed wages — it's about an ever-growing superstructure of overhead, technology, non-lawyer staff, and firm profit extraction built on top of the lawyer's billable hour. BigLaw associates represent the extreme case: billed at $895-1,000/hour but earning ~$118/hour, yielding a ratio of only ~12%.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1970 | $20,000 | $30 | per billable hour | 1,250 | 53% | low |
| 1980 | $40,000 | $65 | per billable hour | 1,500 | 41% | low |
| 1990 | $65,000 | $105 | per billable hour | 1,650 | 38% | med |
| 2000 | $90,000 | $160 | per billable hour | 1,750 | 32% | med |
| 2010 | $115,000 | $210 | per billable hour | 1,750 | 31% | med-high |
| 2016 | $120,000 | $232 | per billable hour | 1,750 | 30% | high |
| 2020 | $135,000 | $275 | per billable hour | 1,700 | 29% | med-high |
| 2024 | $151,000 | $341 | per billable hour | 1,750 | 25% | high |

### BigLaw contrast (2024, not included in main line)

| Segment | Worker Comp | Billing Rate | Billable Hours | Ratio |
|---------|-----------|-------------|---------------|-------|
| BigLaw 1st-year associate | $225,000 | $950 | 1,900 | 12% |
| BigLaw 8th-year associate | $435,000 | $1,500 | 1,900 | 15% |
| Am Law 100 equity partner | $3,150,000 (avg PEP) | $2,100 | 1,800 | 83% |

The partner ratio exceeds 100% of their own billings because partners also capture profit from associate billings (leverage). PEP includes both their own billing revenue and their share of associate-generated profit.

## Methodology

**Worker Comp** = Median annual earnings for all lawyers (BLS OES code 23-1011 for 1997+; Census occupational earnings data for earlier decades). Civil litigation lawyers specifically earn roughly in line with the all-lawyer median — the bimodal salary distribution (BigLaw peak vs. everyone else) means most civil litigators cluster near the median, not the BigLaw peak.

**Customer Cost** = Average hourly billing rate charged to clients. For 2016-2024, sourced from Clio Legal Trends Reports which track ~100,000+ legal professionals at small/mid firms. For earlier decades, estimated using the BLS Legal Services CPI (CUUR0000SEMC01), which tracks legal price inflation from 1986 onward, anchored to known survey data points (1989 Deseret News national survey: $150/hr for senior partners, $75-95/hr for associates; Clio 2010: $210/hr). Pre-1986 estimates are rougher, based on industry histories of pre-Goldfarb fee structures and early hourly billing adoption.

**Customers/Worker** = Annual billable hours. The ABA recommended 1,300 hours/year in 1958. Actual billable hours rose through the 1970s-1990s as hourly billing became dominant (post-Goldfarb v. Virginia State Bar, 1975) and billing targets increased. Modern targets are 1,700-2,000 hours depending on firm size (BigLaw pushes 1,900-2,200; small firms average 1,400-1,600). I used estimates reflecting the typical civil litigator at each period.

**Ratio** = Worker Comp / (Customer Cost x Customers/Worker). This represents: of every dollar clients collectively pay for one lawyer's time over a year, what fraction reaches the lawyer as compensation? The remainder goes to firm overhead (rent, technology, malpractice insurance), non-lawyer staff (paralegals, secretaries, IT), and firm profit (partner distributions above their own billing contribution).

**Why per-hour rather than per-case?** Per-case litigation costs vary wildly by case type ($43K median for auto tort, $122K for malpractice — IAALS/NCSC data). Using the billing rate as the unit of customer cost provides a clean, well-documented metric that's consistent across time. Total billings per lawyer (rate x hours) captures the full annual revenue a lawyer generates, against which their compensation can be measured.

**Cross-check against the "Rule of Thirds"**: The legal industry's traditional benchmark allocates law firm revenue as 1/3 compensation, 1/3 overhead, 1/3 profit. After accounting for realization (~80-83%) and collection (~84-91%) rates — meaning firms collect only ~70-80% of what they bill — the effective lawyer share of the billed dollar comes to roughly 23-27%. My 2024 ratio of 25% is consistent with this.

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics: Lawyers (SOC 23-1011), May 2024 — median $151,160, mean $182,760. https://www.bls.gov/oes/current/oes231011.htm
- BLS Legal Services Consumer Price Index (CUUR0000SEMC01) — 348% cumulative increase 1986-2024 (4.02% annually vs. 2.81% general CPI). https://www.bls.gov/cpi/
- Clio Legal Trends Reports (2016-2024) — average hourly billing rates: $232 (2016), $237 (2018), $243 (2019), $261 (2021), $268 (2022), $341 (2024). https://www.clio.com/resources/legal-trends/
- NALP Salary Distribution Curves and Associate Salary Surveys — bimodal distribution data, BigLaw starting salaries, historical trends 1985-2024. https://www.nalp.org/salarydistrib
- Above the Law / BigLaw Investor — Cravath scale history: $15K (1968), $83K (1992), $125K (2000), $160K (2007), $180K (2016), $225K (2024). https://www.biglawinvestor.com/biglaw-salary-scale/
- American Lawyer (AmLaw 100 rankings) — Revenue per Lawyer: $265K (1985) to $1.28M (2024); Profits per Equity Partner: $309K (1985) to $3.15M (2024). Via Above the Law, Lateral Link, LawFuel compilations.
- Deseret News, "Lawyers' Rates Are Charging Skyward," Sept 24, 1989 — national billing rate survey: senior partners $150/hr average, top rates $400+/hr. https://www.deseret.com/1989/9/24/18825001/lawyers-rates-are-charging-skyward-would-you-believe-400-an-hour
- Tillinghast-Towers Perrin / Towers Watson — U.S. Tort Costs: $5.4B (1960), $130B (1990), $260B (2004), $265B (2010). https://www.casact.org/sites/default/files/old/studynotes_towers-watson-tort-cost-trends.pdf
- ILR/Brattle Group — U.S. Tort Costs: $429B (2016), $443B (2020), $529B+ (2022). Only 46-57 cents of each tort dollar reaches claimants. https://instituteforlegalreform.com/research/tort-costs-in-america/
- Economic Report of the President (2004), Chapter 11 — tort system dollar breakdown: 54% to transaction costs (plaintiff attorneys ~19%, defense costs ~14%, insurance admin ~21%). https://www.govinfo.gov/content/pkg/ERP-2004/html/ERP-2004-chapter11.htm
- U.S. Census Bureau, Economic Census (NAICS 5411) — Legal services revenue: $127B (1997), $182B (2002), $239B (2007), $262B (2012), $298B (2017), $385B (2022).
- ABA National Lawyer Population Survey — lawyer counts: 286K (1960), 326K (1970), 574K (1980), 756K (1990), 1.02M (2000), 1.20M (2010), 1.36M (2020), 1.37M (2025). https://www.americanbar.org/news/profile-legal-profession/demographics/
- LeanLaw — Rule of Thirds framework and BigLaw billing rate analysis (partners $1,900-2,100/hr, associates approaching $1,000/hr at Am Law 50). https://www.leanlaw.co/blog/billable-rates-big-law-vs-small-law/
- SeltzerFontaine — history of billable hours: ABA recommended 1,300 hrs/yr (1958), modern expectations 1,900-2,200 hrs/yr. https://www.seltzerfontaine.com/the-billable-hours-crunch/
- ABA Litigation News — Am Law 100 realization rates: 83.1% (2021), 82.2% (2022), 80.9% (2023). https://www.americanbar.org/groups/litigation/resources/litigation-news/

## Notes

- **The adversarial duplication problem**: The ticket correctly identifies that civil litigation is an antagonistic cost — two $500/hour lawyers arguing against each other may produce the same outcome as two $100/hour lawyers. The ratio captures what each side's lawyer takes home of their own client's spending, but the total system cost is roughly double (both sides pay). The tort cost data shows total system costs of $529B+ (2022), of which only 46-57 cents on the dollar reaches claimants.

- **BigLaw vs. everyone else is a different universe**: The main data line uses median lawyer compensation and average small/mid firm billing rates, which represent the typical civil litigator. BigLaw associates have a ~12% ratio — they generate 6-8x their salary in revenue. BigLaw equity partners, conversely, show an apparent ratio above 80% because their compensation includes profits extracted from associate labor, not just their own billings.

- **The billable hour target ratchet**: Part of the ratio decline comes from increasing billable hour expectations. In 1958, the ABA recommended 1,300 hours/year. By 2001, it recommended 2,300 total hours (1,900 billable). Higher volume means more revenue per lawyer, but compensation hasn't scaled proportionally — the extra hours generate additional firm profit and overhead absorption.

- **Legal tech as cost amplifier**: E-discovery was supposed to make litigation cheaper. Instead, total U.S. e-discovery spending is ~$42B/year and growing at 8-10% annually. Document review consumes 80%+ of litigation spending. Technology enabled more discovery, not less — it expanded the scope of what could be searched and produced, creating new cost layers rather than eliminating old ones.

- **Tort cost inflation outpaces everything**: Legal services prices have inflated at 4.02% annually since 1986, vs. 2.81% for general CPI. U.S. tort costs as a share of GDP doubled from ~1% (1960) to ~2.2% (1990s-present). The U.S. spends roughly 2-3x more on its tort system as a share of GDP than any other developed country (Italy 1.7%, Germany 1.1%, UK 0.7%, Japan 0.8%).

- **The number of lawyers tripled per capita**: From ~15 lawyers per 10,000 people (1950) to ~40 per 10,000 (2020). More lawyers competing for work, combined with higher overhead structures, contributes to the declining worker ratio — there are more mouths to feed from each dollar of client spending.

- **Realization rate decline**: Am Law 100 firms' realization rate dropped from 83.1% (2021) to 80.9% (2023). Combined with collection rates of ~84-91%, firms collect only 70-80% of the theoretical value of hours worked. This means the effective customer cost is lower than the stated billing rate, but the lost revenue comes from the firm's pocket, not the client's — clients pay what they're billed.

- **Pre-1975 data caveat**: Before the Supreme Court struck down minimum fee schedules in Goldfarb v. Virginia State Bar (1975), hourly billing was rare. Many lawyers charged flat fees or retainers set by local bar associations. The 1970 data point is the least reliable because it attempts to convert a mixed flat-fee/hourly economy into an hourly-equivalent rate.

<!-- COMPLETE -->
