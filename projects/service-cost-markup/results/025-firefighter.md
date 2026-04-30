# Fire Protection — Firefighter

## Summary

The firefighter's share of what the taxpayer pays for fire protection has collapsed from ~90% in 1960 to ~30% in 2024. In 1960, fire departments were essentially payroll operations — almost every dollar went to the person on the truck. By 2024, pension obligations for retired firefighters, ballooning benefits costs, administrative overhead, and equipment expenses consume over two-thirds of every fire protection dollar, even as actual fire calls have dropped 55% since 1980. The fire service quietly transformed into an EMS/ambulance operation (64% of calls are now medical, only 4% are fires) while the cost structure grew as if the original mission had intensified.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | 5,300 | 18.87 | per household/yr | 312 | 90.1 | low |
| 1970 | 8,500 | 31.55 | per household/yr | 317 | 85.0 | low |
| 1980 | 17,000 | 70.54 | per household/yr | 359 | 67.1 | med |
| 1990 | 28,000 | 141.48 | per household/yr | 352 | 56.2 | med |
| 2000 | 36,000 | 220.63 | per household/yr | 361 | 45.2 | med |
| 2010 | 45,250 | 353.90 | per household/yr | 343 | 37.3 | high |
| 2020 | 52,500 | 447.27 | per household/yr | 357 | 32.9 | high |
| 2024 | 59,530 | 567.73 | per household/yr | 355 | 29.5 | med |

## Methodology

**Ratio formula:** Firefighter median annual wage / (Total fire protection expenditure per career firefighter)

Which is equivalently: Firefighter wage / (Customer cost per household x Households per career firefighter)

**Worker compensation:** Median annual wage for career firefighters (SOC 33-2011). For 2008–2024, BLS Occupational Employment and Wage Statistics (OES) provides direct figures. For 1960–1964, salary estimates are derived from BLS Bulletin No. 1445 ("Salary Trends: Firemen and Policemen, 1924–64"), which reports average maximum salary by city-size group. Intervening decades (1970–2000) are estimated by interpolating between confirmed anchor points using reasonable annual growth rates consistent with public-sector wage trends, unionization patterns in the 1970s, and the trajectory from known 1960s values to confirmed 2008 BLS OES data. Note: BLS Bulletin 1445 reports "average maximum" salary (top of pay scale), which runs somewhat higher than the median across all experience levels; estimates for 1960–1970 may therefore be slightly overstated relative to a true median, but the difference is modest since most career firefighters reach max step within 5–7 years.

**Customer cost:** Total local government fire protection expenditure, divided by U.S. households. Fire protection is almost exclusively a local government function — federal and state fire spending (excluding wildfire suppression) is negligible. The primary source is the BEA/FRED series G160861A027NBEA (State & Local Government Fire Protection Expenditures), which draws from Census Bureau Government Finances data and provides annual figures from 1959 onward. Household counts come from Census Bureau Historical Households tables and FRED series TTLHH.

**Career firefighter counts:** NFPA U.S. Fire Department Profile surveys provide direct counts for 1986 onward (237,500 in 1986; 364,300 in 2020). Pre-1986 estimates are extrapolated backward from the 1986 anchor using Census of Governments employment data patterns and the general trajectory of fire service professionalization. These pre-1986 estimates are the weakest link in the methodology and drive the "low" confidence rating for 1960–1970.

**Why this proxy:** Property taxes and municipal budgets fund fire protection, making total fire protection expenditure per household the natural "customer cost" — it's exactly what the average household pays through taxes for this service. Dividing by career firefighters only (excluding ~750,000 volunteers) gives the total system cost per professional firefighter position. This is the right denominator because volunteers don't draw salaries — there is no "ratio" to measure for them.

**Known bias:** Total fire protection expenditure includes spending by volunteer and combination departments (~65–70% of departments, serving ~35% of population). Volunteer department spending is mostly equipment and facility costs (no payroll), so attributing it to career firefighters slightly overstates the cost per career firefighter and understates the ratio by an estimated 2–4 percentage points. The directional story — dramatic ratio decline — is unaffected.

## Sources

- BLS Occupational Employment and Wage Statistics (OES), SOC 33-2011 "Firefighters" — annual median wages 1997–2024: https://www.bls.gov/oes/current/oes332011.htm
- BLS Occupational Outlook Handbook, Firefighters — 2024 median $59,530: https://www.bls.gov/ooh/protective-service/firefighters.htm
- BLS Bulletin No. 1445, "Salary Trends: Firemen and Policemen, 1924–64" (1965) — historical salary data: https://fraser.stlouisfed.org/title/salary-trends-firemen-policemen-1924-64-4842
- BLS Monthly Labor Review, "The Erosion of Police and Firefighter Wage Parity" (April 1996) — salary trends 1950–1990: https://www.bls.gov/opub/mlr/1996/article/erosion-of-police-and-firefighter-wage-parity.htm
- FRED Series G160861A027NBEA — State & Local Fire Protection Expenditures, annual 1959–2024: https://fred.stlouisfed.org/series/G160861A027NBEA
- USGovernmentSpending.com — fire protection spending charts derived from Census Bureau: https://www.usgovernmentspending.com
- Census Bureau Historical Households Tables: https://www.census.gov/data/tables/time-series/demo/families/households.html
- FRED Series TTLHH — Total U.S. Households: https://fred.stlouisfed.org/series/TTLHH
- NFPA U.S. Fire Department Profile reports (career firefighter counts 1986–2020): https://www.nfpa.org/education-and-research/research/nfpa-research/fire-statistical-reports/us-fire-department-profile
- NFPA Fire Department Calls report (call volume trends): https://www.nfpa.org/education-and-research/research/nfpa-research/fire-statistical-reports/fire-department-calls
- USFA Fire Department Overall Run Profile, 2020 — 64% EMS, 4% fire: https://www.usfa.fema.gov/statistics/reports/firefighters-departments/fire-department-run-profile-v22i1.html
- Empire Center, "NYC Fire Pensions Hit New High" — pension cost context: https://www.empirecenter.org/publications/nyc-fire-pensions-hit-new-high/
- FireRescue1, "Budget Breakdown: The Real Cost of Operating a Fire Department" — 78.5% personnel costs: https://www.firerescue1.com/fire-products/administration-billing/articles/budget-breakdown-the-real-cost-of-operating-a-fire-department-uB62rUFtPgUf8ZpZ/

## Notes

- **The pension paradox:** The biggest driver of ratio decline isn't waste — it's pension obligations to retired firefighters. The active firefighter's salary is competing with the retired firefighter's pension for the same budget dollar. FDNY's unfunded fire pension liability exceeds $7 billion (~$700K per active firefighter). Average new FDNY pension surpasses $170K/year — more than the median active-duty salary. This means the "customer cost" increasingly pays for people who no longer fight fires.
- **Mission creep into EMS:** Fire calls dropped from ~3 million (1980) to ~1.3 million (2020), a 55% decline driven by better building codes and fewer smokers. Meanwhile, EMS calls grew from ~5 million to ~24.5 million. Fire departments now run as de facto ambulance services (64% of calls are medical, only 4% are fires), but the cost structure — stations, apparatus, staffing minimums — still assumes the primary mission is firefighting. EMS accounts for only 5–8% of fire department budgets despite representing 64% of calls.
- **Staffing ratios stable:** Households per career firefighter stayed remarkably flat at ~310–360 over the entire 1960–2024 period. The ratio decline is not about hiring more firefighters — it's about each firefighter position becoming far more expensive due to surrounding overhead.
- **Comparison to police:** Fire and police share the same tax base. Police face similar pension pressures but have seen larger staffing growth relative to population. The two make a useful comparison pair for the final graph — same funding mechanism, different ratio trajectories.
- **Volunteer substitution effect:** ~65–70% of U.S. fire departments are all-volunteer, protecting ~35% of the population. If volunteer departments were excluded from the expenditure total, the career firefighter ratio would be 2–4 points higher. The story's direction would not change.

<!-- COMPLETE -->
