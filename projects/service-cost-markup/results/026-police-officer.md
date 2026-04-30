# Law Enforcement — Police Officer (Patrol)

## Summary

The patrol officer's share of police spending has been cut roughly in half — from ~58% in 1960 to ~29% in 2024. Unlike firefighters, who started at 90% because their departments were pure payroll operations, police departments always had more overhead (patrol cars, specialized units, civilian staff). But both converge to roughly the same ~29% by 2024, driven by the same forces: ballooning pension obligations, rising benefits costs, expanding civilian staffing, technology investments, and legal liability. The steepest decline occurred 1980–2000 during the "tough on crime" era, when police budgets swelled with SWAT teams, forensics labs, surveillance systems, and administrative growth — none of which flowed to the street-level officer.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | 5,400 | 38.58 | per household/yr | 240 | 58.3 | low |
| 1970 | 9,500 | 82.76 | per household/yr | 211 | 54.4 | low |
| 1980 | 19,000 | 180.24 | per household/yr | 202 | 52.2 | med |
| 1990 | 31,000 | 367.01 | per household/yr | 194 | 43.5 | med |
| 2000 | 43,000 | 641.90 | per household/yr | 175 | 38.4 | med |
| 2010 | 55,620 | 944.33 | per household/yr | 182 | 32.3 | high |
| 2020 | 68,500 | 1,179.56 | per household/yr | 193 | 30.1 | med |
| 2024 | 74,910 | 1,352.73 | per household/yr | 193 | 28.7 | med |

## Methodology

**Ratio formula:** Patrol officer mean annual wage × Number of patrol officers / Total state & local police protection expenditure

Equivalently: Patrol officer wage / (Customer cost per household × Households per patrol officer)

**Worker compensation:** Mean annual wage for SOC 33-3051 "Police and Sheriff's Patrol Officers" from BLS Occupational Employment and Wage Statistics (OES). Confirmed OES data points: Nov 2003 ($45,560, 612,420 employed), May 2005 ($47,270, 624,130), May 2008 ($52,810, 633,710), May 2010 ($55,620, 644,300), May 2011 ($56,260, 636,410), May 2015 ($61,270, 653,740), May 2019 ($67,600, 665,280), May 2021 ($70,750, 665,380), May 2023 ($74,910, ~683,000). Pre-OES estimates (1960–2000) are derived from BLS Bulletin No. 1445 ("Salary Trends: Firemen and Policemen, 1924–64"), the BLS Monthly Labor Review article "The Erosion of Police and Firefighter Wage Parity" (April 1996), and backward extrapolation from confirmed OES anchor points. Police historically earned at rough parity with firefighters through the 1960s, then pulled ahead by 10–15% by 1990 as police unionization patterns diverged.

**Important caveat on overtime:** BLS OES reports straight-time wages. Police overtime — a massive budget item in many departments — is not fully captured. Some patrol officers earn 30–50% above base through overtime. This means the reported "worker comp" understates what the taxpayer actually pays the patrol officer, and the true ratio is somewhat higher than shown (perhaps 3–5 points). However, overtime pay IS included in the total police expenditure denominator, so the ratio as computed represents the straight-time patrol payroll share. For consistency with other tickets in this project, OES mean wage is used without overtime adjustment.

**Customer cost:** Total state & local government current expenditure on police protection, from BEA National Income and Product Accounts via FRED series G160851A027NBEA. This series covers all police spending including wages, benefits, pension contributions, equipment, vehicles, facilities, and purchased services. Divided by total U.S. households from FRED series TTLHH (Census Bureau). Key expenditure values (billions, nominal): 1960 $2.037, 1970 $5.247, 1980 $14.558, 1990 $34.258, 2000 $67.210, 2010 $110.997, 2020 $151.515, 2024 $178.858.

**Patrol officer employment:** BLS OES employment for SOC 33-3051 provides confirmed counts from 2003 onward (612,420 in Nov 2003, growing to ~683,000 by May 2023). Pre-OES estimates are derived from FBI UCR Police Employee Data trends and BJS Law Enforcement Officers publications. The 1960 estimate of ~220,000 is the weakest — it assumes roughly 80% of total sworn officers (~270,000) performed patrol duties. By 2000, the COPS program (1994 Violent Crime Control Act) had funded 100,000+ new positions, pushing employment to ~600,000. Employment peaked around 2019 at 665,000 before the widely reported post-2020 staffing crisis.

**Why this proxy:** Police protection is funded primarily through local property and sales taxes, making total police protection expenditure per household the natural "customer cost." The BEA NIPA series captures all state & local police spending in a consistent methodology from 1959 onward — the longest continuous series available. Dividing by patrol officers specifically (not all sworn) isolates the street-level officer the ticket asks about.

## Sources

- BLS Occupational Employment and Wage Statistics (OES), SOC 33-3051 "Police and Sheriff's Patrol Officers" — annual mean wages and employment, 2003–2023: https://www.bls.gov/oes/current/oes333051.htm (archived years accessed via Wayback Machine)
- FRED Series G160851A027NBEA — State & Local Government Current Expenditures: Police, annual 1959–2024 (BEA NIPA Table 3.16): https://fred.stlouisfed.org/series/G160851A027NBEA
- FRED Series TTLHH — Total U.S. Households, annual 1960–2024 (Census Bureau): https://fred.stlouisfed.org/series/TTLHH
- BLS Bulletin No. 1445, "Salary Trends: Firemen and Policemen, 1924–64" (1965): https://fraser.stlouisfed.org/title/salary-trends-firemen-policemen-1924-64-4842
- BLS Monthly Labor Review, "The Erosion of Police and Firefighter Wage Parity" (April 1996): https://www.bls.gov/opub/mlr/1996/article/erosion-of-police-and-firefighter-wage-parity.htm
- Bureau of Justice Statistics, "State and Local Government Expenditures on Police Protection in the U.S., 2000–2017": https://bjs.ojp.gov/library/publications/state-and-local-government-expenditures-police-protection-us-2000-2017
- Bureau of Justice Statistics, "Law Enforcement Officers, 1975–1998 (Sworn Personnel)": https://bjs.ojp.gov/library/publications/law-enforcement-officers-1975-1998-sworn-personnel
- FBI Uniform Crime Reports, Police Employee Data: https://ucr.fbi.gov/crime-in-the-u.s/2019/crime-in-the-u.s.-2019/topic-pages/police-employee-data
- Urban Institute, Criminal Justice Expenditures backgrounder: https://www.urban.org/policy-centers/cross-center-initiatives/state-and-local-finance-initiative/state-and-local-backgrounders/criminal-justice-police-corrections-courts-expenditures
- Governing.com, "Data: Police Spending Increased Over Past Two Decades": https://www.governing.com/finance/Data-Police-Spending-Increased-Over-Past-Two-Decades.html
- USAFacts, police officer salaries by state: https://usafacts.org/articles/which-states-have-the-highest-police-officer-salaries/

## Notes

- **Convergence with firefighters:** Fire and police share the same tax base and face the same structural pressures. Fire started at 90% ratio in 1960 (pure payroll operations) and collapsed to ~30%. Police started at ~58% (always more complex) and declined to ~29%. Both converge to roughly the same place by 2024 — about 29 cents of every police/fire dollar reaches the fundamental worker. The parallel decline suggests systemic forces (pensions, benefits, administrative bloat) rather than industry-specific dynamics.
- **The pension problem mirrors fire:** Police pension obligations are massive. NYPD pension costs alone exceed $5 billion annually. Many retired officers receive pensions exceeding the salary of active patrol officers. The BEA NIPA "current expenditure" data captures annual pension contributions but not unfunded liabilities — the true cost may be worse than shown.
- **Overtime is the hidden story:** The ticket correctly flags overtime as a massive budget item. In cities like Boston, San Francisco, and New York, dozens of officers earn $200K–$400K/year with overtime, often exceeding the police chief's salary. Overtime spending can represent 15–25% of a department's total payroll. Because BLS OES reports straight-time wages, the ratio shown here understates the patrol officer's actual take from the budget. If overtime were fully captured, the ratio might be 3–5 points higher (roughly 33% instead of 29% in 2024).
- **Staffing density increased, then reversed:** Households per patrol officer dropped from 240 (1960) to 175 (2000) — meaning more officers per household. This reflects the massive law enforcement expansion of 1965–2000 (crime wave response, War on Drugs, COPS program). After 2010, the trend reversed: recruitment crises and budget pressures pushed the ratio back up to ~193 households per officer by 2020–2024. The US has fewer officers per capita now than it did in 2000.
- **The "defund" debate barely registers:** Whether police budgets increase or decrease in any given year, the structural share going to patrol officers has been declining for 60 years. The "defund" movement (2020) produced no visible inflection point in the data — total police spending actually continued to rise ($151.5B in 2020 → $178.9B in 2024). The ratio decline is driven by cost structure, not political movements.
- **Comparison note:** Police departments employ far more civilian staff than fire departments (IT, forensics, records, legal, dispatch, administration). This partly explains why the police ratio started lower than fire. By 2024, civilian employees represent ~30% of total police department headcount in many agencies, up from ~15% in 1960.

<!-- COMPLETE -->
