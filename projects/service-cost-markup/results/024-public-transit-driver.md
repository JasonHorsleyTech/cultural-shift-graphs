# Municipal Transit — Public Transit Bus Driver

## Summary

The bus driver's share of total operating cost per trip has been cut nearly in half since 1960, falling from ~46% in the private-transit era to ~20–24% today. The sharpest decline occurred during the 1970s–1990s, as publicly-owned transit agencies built up administrative overhead, maintenance bureaucracies, and purchased-transportation contracts. Since 2000 the ratio has stabilized around 20–24%, with a slight recent uptick driven by pandemic-era driver shortages pushing wages higher. The driver didn't get cheaper — everything around the driver got more expensive.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | 5,500 | 0.20 | per passenger trip | 60,000 | 46 | low |
| 1970 | 8,500 | 0.46 | per passenger trip | 50,000 | 37 | low |
| 1980 | 18,000 | 1.10 | per passenger trip | 53,200 | 31 | low |
| 1990 | 25,000 | 1.84 | per passenger trip | 50,400 | 27 | med |
| 2000 | 30,000 | 2.75 | per passenger trip | 48,300 | 23 | med |
| 2005 | 32,500 | 3.26 | per passenger trip | 45,400 | 22 | med |
| 2010 | 35,500 | 4.15 | per passenger trip | 43,700 | 20 | med |
| 2015 | 40,000 | 4.36 | per passenger trip | 41,000 | 22 | med |
| 2019 | 47,000 | 5.39 | per passenger trip | 36,800 | 24 | med |
| 2024 | 57,440 | 7.24 | per passenger trip | 32,800 | 24 | med |

## Methodology

**What "customer cost" means here:** Total operating cost per unlinked passenger trip (UPT). This is the true societal cost of one bus ride — the sum of what riders pay in fares and what taxpayers pay in subsidy. It is a standard metric tracked by the FTA's National Transit Database.

**How it's computed:** The ratio simplifies algebraically to:

> Ratio = (Bus driver annual salary × Number of FTE bus drivers) / Total bus-mode operating expenses

This is equivalent to: what share of every dollar spent operating the bus system goes to the person actually driving the bus?

**Worker compensation:** Median annual wage for transit and intercity bus drivers (BLS SOC 53-3052, formerly 53-3021). For 2024, BLS reports $57,440. Earlier years estimated from BLS OES historical archives, FRED data (LEU0254521600A), and the general trend that transportation-sector hourly compensation rose ~51% from 2004–2018 (BLS). Pre-1990 estimates derived from BLS Union Wages and Hours reports for local-transit operating employees and decade-specific wage guides. These are wages only, not total compensation — fringe benefits (pension, healthcare) add another ~80% on top but are excluded for cross-industry comparability.

**Total bus operating expenses:** For 1991–2024, derived from FTA National Transit Database time-series data (TS2.1 — Service Data and Operating Expenses by Mode). Bus mode includes motor bus (MB) and is the largest single operating-expense category, representing about 45% of total transit OpEx in recent years (higher share in earlier decades when rail was less prominent). Pre-1991 estimates derived from APTA Public Transportation Fact Book historical tables (Appendix A) and CRS Report R47900. Key anchor: CRS reports bus modes at $23.0 billion in 2020.

**Bus ridership:** Unlinked passenger trips for bus mode, from NTD and APTA historical data. Bus UPT has declined from roughly 7.5 billion in 1960 to ~3.8 billion in 2024, driven by suburbanization, automobile availability, and post-pandemic ridership loss.

**Number of FTE bus drivers:** Estimated from total bus-mode vehicle revenue hours (VRH) divided by ~1,600 productive revenue hours per full-time-equivalent driver per year (accounting for training, sick leave, vacation, and non-revenue time). This yields approximately 100,000–125,000 FTE positions in the modern era. Cross-referenced against BLS employment data (162,850 bus operators in May 2020 pandemic trough; DataUSA/ACS reports 259,460 transit & intercity bus drivers in 2018, 235,379 in 2023). Note: headcount exceeds FTE due to part-time workers, split shifts, and the inclusion of intercity drivers in BLS counts.

**Operating cost per trip:** Total bus operating expenses ÷ bus unlinked passenger trips. This has risen from roughly $0.20/trip in 1960 to $7.24/trip in 2024 (nominal dollars). The CRS report (R47900) notes that inflation-adjusted operating cost per trip for all transit modes rose 744% between 1947 and 2019.

**Why this proxy and not fares?** Fares cover only 17–34% of operating costs (farebox recovery has fallen from near 100% in the private era to under 20% at many agencies today). Using fares alone would dramatically overstate the driver's share by ignoring the taxpayer-funded majority of the cost.

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OES): Transit and intercity bus drivers, SOC 53-3052 — May 2024 median annual wage $57,440. https://www.bls.gov/oes/current/oes533052.htm
- Bureau of Labor Statistics, Occupational Outlook Handbook: Bus Drivers. https://www.bls.gov/ooh/transportation-and-material-moving/bus-drivers.htm
- FRED (Federal Reserve Economic Data), Series LEU0254521600A: Median weekly earnings, bus driver occupations, 2000–2019. https://fred.stlouisfed.org/series/LEU0254521600A
- Congressional Research Service, "Federal Support of Public Transportation Operating Expenses" (R47900), January 2024. Key data: total transit OpEx breakdown by function and object class, bus mode expenses, 50-year cost-per-trip trends. https://www.congress.gov/crs-product/R47900 and https://www.everycrsreport.com/reports/R47900.html
- Federal Transit Administration, National Transit Database (NTD): TS2.1 Service Data and Operating Expenses Time Series by Mode (report years 1991–2024). https://www.transit.dot.gov/ntd/data-product/ts21-service-data-and-operating-expenses-time-series-mode-2
- Federal Transit Administration, National Transit Summaries and Trends (multiple years: 2009, 2016, 2018, 2020, 2021, 2023). Annual reports containing operating expense per UPT by mode. https://www.transit.dot.gov/ntd/annual-national-transit-summaries-and-trends
- American Public Transportation Association, Public Transportation Fact Book (2014, 2021, 2026 editions). Appendix A historical tables: operating expenses, ridership, and employment from the 1920s onward. https://www.apta.com/research-technical-resources/transit-statistics/public-transportation-fact-book/
- DataUSA, Bus Drivers Transit and Intercity occupation profile (ACS/BLS data): 2018 employment 259,460; 2023 employment 235,379; 2023 average salary $46,659. https://datausa.io/profile/soc/bus-drivers-transit-and-intercity
- BLS Urban Transit Systems Labor Productivity highlights. https://www.bls.gov/productivity/highlights/urban-transit-systems-labor-productivity.htm
- University of Missouri Library, "Prices and Wages by Decade" guides: historical bus driver union wages 1960s–1970s from BLS Union Wages and Hours reports. https://libraryguides.missouri.edu/pricesandwages/
- The Antiplanner (Randal O'Toole), NTD-derived transit cost analyses: bus operating cost $0.78/passenger-mile (2005); subsidy per trip analysis. https://ti.org/antiplanner/?p=88 and https://ti.org/antiplanner/?p=22423
- California Policy Center, "The Cost of Transit in California" (2024): inflation-adjusted operating cost per trip rose 744% from 1947–2019 nationally. https://californiapolicycenter.org/reports/the-cost-of-transit-in-california/
- Civic Federation (Chicago), CTA Productivity Measures and Fares: bus labor cost per UPT $1.88 (2014) to $2.26 (2018). https://www.civicfed.org/civic-federation/blog/comparison-cta-productivity-measures-and-fares
- Larry Littlefield, "NTD Comparative Operating Cost and Fare Revenue Trends 2008–2018": NYC bus operating cost per VRH $211.19 (2018), 2.45 employee hours per vehicle revenue hour. https://larrylittlefield.wordpress.com/2020/02/03/the-national-transit-database-comparative-operating-cost-and-fare-revenue-trends-from-2008-to-2018/

## Notes

- **The big inflection is public ownership, not any single policy.** Before the 1960s, transit was private and had to break even. Farebox recovery was near 100%, and operations were lean — the driver was the biggest cost. After the Urban Mass Transportation Act of 1964 triggered public takeover, subsidy decoupled revenue from costs. Agencies hired administrative staff, expanded maintenance operations, added compliance roles, and farebox recovery dropped steadily. The driver's wage share fell not because drivers got cheaper but because everything around them got more expensive.

- **Purchased transportation is a confounding factor.** Since the 1990s, many transit agencies contract with private operators (purchased transportation = ~15% of total transit OpEx in 2020). These contracted drivers' wages are bundled into the "purchased transportation" line item, not "salaries and wages." This means the ratio slightly understates the true share going to all humans driving buses. The effect is modest (~2–3 percentage points) but worth noting.

- **Post-pandemic distortion.** COVID-19 cratered ridership (bus UPT fell ~55% from 2019 to 2020) while agencies maintained most service. Operating cost per trip spiked to >$15 in 2020–2021. By 2024, ridership recovered to about 80% of 2019 levels but costs have not fallen proportionally, keeping cost-per-trip elevated at ~$7.24.

- **Driver shortage premium.** Since ~2021, severe bus driver shortages have pushed wages up faster than historical trends. The median wage jumped from ~$47K (2019) to $57.4K (2024), a 22% increase in five years. Many agencies now offer signing bonuses and above-contract pay. This has slightly increased the driver's ratio share in recent years, partially reversing the long-term decline.

- **Comparison to taxi/rideshare.** The ticket notes this as an interesting angle. A rideshare driver typically keeps 60–75% of the fare (before vehicle costs), while a transit bus driver gets ~22% of the total cost per trip. The difference: a transit agency wraps each driver in $150K+ of overhead (dispatch, supervision, maintenance, administration, facilities, compliance), while Uber wraps them in an app. Whether that overhead is "worth it" depends on your definition of a functioning transit system.

- **Fringe benefits are the hidden story.** Transit driver fringe benefits (pension, healthcare) are roughly 80% of base wages, among the highest fringe-to-wage ratios in any industry. If total compensation (wages + fringe) were used instead of wages alone, the driver's ratio would be approximately 37–42% in 2024 rather than 24%. The pension obligations are a recurring fiscal crisis for transit agencies.

<!-- COMPLETE -->
