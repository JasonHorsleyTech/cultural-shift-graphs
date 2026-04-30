# Incarceration — Corrections Officer

## Summary

The corrections officer's share of what taxpayers pay to incarcerate inmates has declined from roughly 32% in 1990 to about 21% in 2024. Officer wages have grown at roughly 2.7% annually over this period, but the cost of incarceration has grown at roughly 3.6% annually — with the gap driven primarily by exploding inmate healthcare costs, administrative overhead, and legal compliance mandates. The inmate-to-officer ratio has remained remarkably stable at approximately 5:1 across the entire period, so the story here is not about staffing changes but about non-personnel costs swelling around a stagnant workforce.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1990 | 23,000 | 16,000 | avg annual state prison cost per inmate | 4.5 | 31.9 | low |
| 1995 | 26,500 | 20,000 | avg annual state prison cost per inmate | 4.7 | 28.2 | low |
| 2000 | 30,000 | 22,650 | avg annual state prison cost per inmate | 5.3 | 25.0 | med |
| 2005 | 36,000 | 25,500 | avg annual state prison cost per inmate | 5.3 | 26.6 | med |
| 2010 | 42,780 | 28,300 | avg annual state prison cost per inmate | 5.2 | 29.1 | high |
| 2015 | 44,400 | 33,300 | avg annual state prison cost per inmate | 5.0 | 26.7 | high |
| 2020 | 47,400 | 40,000 | avg annual state prison cost per inmate | 5.3 | 22.4 | med |
| 2024 | 57,970 | 50,000 | avg annual state prison cost per inmate | 5.1 | 22.7 | med |

## Methodology

**Worker compensation:** Mean annual wage for BLS occupation code 33-3012 "Correctional Officers and Jailers." BLS OES data is available from approximately 2000 onward. Key verified anchor points: May 2009 mean $42,620 (calculated from $20.49/hr), May 2010 mean $42,780, May 2011 mean $43,550, 2023 mean $62,332 (DataUSA/BLS), May 2024 median $57,970 (BLS OOH). Pre-2000 figures are estimated by extrapolating backward using Census/CPS data for protective service occupations, applying roughly 2.8% annual nominal wage growth consistent with the broader occupation group.

**Customer cost proxy:** Average annual cost of incarceration per state prisoner. This is the total state corrections expenditure divided by the state prison population. Sources: BJS "State Prison Expenditures, 2001" ($22,632 per inmate), BJS "State Corrections Expenditures FY 1982-2010" ($28,323 per inmate in 2010), Vera Institute "Price of Prisons 2015" ($33,274 per inmate). The federal Bureau of Prisons COIF (Cost of Incarceration Fee) provides a cross-check: FY2000 $21,601, FY2010 $28,284, FY2020 $39,158, FY2024 $47,162. Pre-2000 and post-2015 state figures are estimated by interpolation from these sources and cross-referenced against the federal COIF trend.

**Why state costs, not federal?** Approximately 87% of US prisoners are held in state facilities. State per-inmate costs are the more representative "customer cost" for the typical taxpayer. Federal costs are used as a cross-check. The two track closely (within ~10-15%) except in recent years when state costs have diverged upward faster than federal, likely due to state-specific healthcare mandates and union contracts.

**Customers per worker (inmates per officer):** Derived from total incarcerated population (state + federal + local jail) divided by total BLS-reported employment of correctional officers and jailers. Census of State and Federal Correctional Facilities (BJS) provides direct officer counts: 270,317 in 2000, with approximately 264,201 total corrections employees in 1990 and 347,320 in 1995 (of which roughly 63% were custody/security officers). BLS OES reported ~455,000 officers in 2009 and ~361,000 in 2023. US incarcerated population peaked at ~2.36 million in 2008-2010 and declined to ~1.7 million during COVID (2020) before partially recovering to ~1.9 million by 2024. The ratio has remained remarkably stable at approximately 5:1 to 5.3:1 across the entire study period, though it varies significantly by facility type: federal prisons average ~10:1, state prisons ~5-6:1, and local jails ~3-4:1.

**Ratio computation:** Officer salary / (cost per inmate × inmates per officer). This gives the corrections officer's share of the total cost of the inmates they oversee.

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OES/OEWS), SOC 33-3012 "Correctional Officers and Jailers," multiple years (2000-2024) — https://www.bls.gov/oes/current/oes333012.htm
- Bureau of Labor Statistics, Occupational Outlook Handbook: Correctional Officers and Bailiffs — https://www.bls.gov/ooh/protective-service/correctional-officers.htm
- Bureau of Justice Statistics, "State Prison Expenditures, 2001" — https://bjs.ojp.gov/content/pub/pdf/spe01.pdf
- Bureau of Justice Statistics, "State Corrections Expenditures, FY 1982-2010" — https://bjs.ojp.gov/content/pub/pdf/scefy8210.pdf
- Vera Institute of Justice, "The Price of Prisons: Examining State Spending Trends, 2010-2015" — https://www.vera.org/publications/price-of-prisons-2015-state-spending-trends
- Vera Institute of Justice, "The Price of Prisons: What Incarceration Costs Taxpayers" (2012, updated 2014) — https://www.vera.org/publications/price-of-prisons-what-incarceration-costs-taxpayers
- Federal Bureau of Prisons, Annual Determination of Average Cost of Incarceration Fee (COIF), Federal Register notices (FY2000-FY2024) — https://www.federalregister.gov/documents/2024/12/06/2024-28743/annual-determination-of-average-cost-of-incarceration-fee-coif
- GAO Report GGD-97-15, "Federal and State Prisons: Inmate Populations, Costs, and Projection Models" (1996) — https://www.govinfo.gov/content/pkg/GAOREPORTS-GGD-97-15/html/GAOREPORTS-GGD-97-15.htm
- Bureau of Justice Statistics, Census of State and Federal Correctional Facilities, 1995 and 2000 — https://bjs.ojp.gov/library/publications/census-state-and-federal-correctional-facilities-2000
- The Sentencing Project, "Mass Incarceration Trends" — https://www.sentencingproject.org/reports/mass-incarceration-trends/
- GAO Report GAO-17-379, "Bureau of Prisons: Better Planning and Evaluation Needed to Understand and Control Rising Inmate Health Care Costs" (2017) — https://www.gao.gov/products/gao-17-379
- Data USA, Correctional Officers and Jailers profile — https://datausa.io/profile/soc/correctional-officers-and-jailers

## Notes

**The ratio is surprisingly stable in the middle period, then drops sharply.** From 1990-2015, the ratio bounces between 25-32%. From 2015 onward, it drops to ~21-23%. The inflection point correlates with the acceleration of inmate healthcare costs — the BOP's per-capita healthcare obligations grew 36% (inflation-adjusted) from FY2009 to FY2016 alone. As the prison population ages (median age has risen steadily since the tough-on-crime sentencing era of the 1990s), healthcare is consuming an ever-larger share of corrections budgets.

**Personnel costs are still the majority of corrections spending, but the officer's individual share is small.** Vera found that personnel costs (salaries, overtime, benefits for ALL staff) comprised 68% of total state prison expenditures in 2015. But "personnel" includes administrators, case managers, healthcare workers, maintenance, clerical staff, etc. — not just corrections officers. The officer is the fundamental worker, but they share the personnel budget with a growing administrative apparatus.

**Private prisons: supposed to be cheaper, often aren't.** A 2018 Georgia state audit found private prisons cost $49.07 per inmate per day vs. $44.56 for state-run facilities — about 10% more. The corrections officer's ratio in private prisons is likely lower because private prison companies (CoreCivic, GEO Group) typically pay officers less while charging taxpayers similar or higher rates, with the delta going to corporate overhead and profit. Private prisons hold about 8% of US prisoners.

**The staffing crisis complicates recent data.** The number of federal corrections officers dropped from ~20,000 at its mid-2010s peak to ~11,800 by 2025. State systems face similar shortages. This means remaining officers work more overtime (boosting their actual compensation above base salary) while facilities operate with dangerously thin staffing. The BLS mean wage figures may undercount total compensation because overtime pay has become a significant component.

**COVID-19 disrupted 2020 data.** The incarcerated population dropped sharply in 2020 (from ~2.1M to ~1.7M) due to emergency releases and reduced court operations, but corrections budgets didn't shrink proportionally (fixed costs, pandemic safety measures). This artificially inflated the per-inmate cost for that year.

**Pre-2000 data carries significant uncertainty.** BLS OES data for correctional officers begins in the late 1990s. Before that, wage estimates rely on Census CPS data for the broader "protective service" occupation group and scattered state-level reports. The per-inmate cost estimates for 1990 and 1995 are back-calculated from the BJS 2001 report using historical corrections spending growth rates from the GAO. These earlier data points should be treated as rough estimates (±15-20%).

<!-- COMPLETE -->
