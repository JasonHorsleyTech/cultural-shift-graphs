# Commercial Aviation — Flight Attendant

## Summary

The flight attendant's share of airfare revenue has been remarkably stable for decades — hovering around 3% from 1970 through 2010, a flat line compared to the dramatic swings in the pilot ratio over the same period. This stability reflects offsetting forces: FA pay grew modestly while passenger loads per attendant increased proportionally. The ratio has begun climbing since 2015 (reaching ~4.4% by 2019), and the wave of 18–22% contract raises in 2023–2024 is pushing it toward ~5.6% — the highest it's been in the data. Plotted against the pilot line on the same airfare denominator, the two roles tell starkly different stories: the pilot captured 25% in 1970 and still holds ~16% today, while the flight attendant has always been in the 3–6% range.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1970 | $8,500 | $100 | Avg domestic ticket | 2,870 | 3.0% | low |
| 1985 | $22,000 | $250 | Avg domestic ticket | 2,982 | 2.9% | low |
| 1990 | $27,000 | $288 | Avg domestic ticket | 3,132 | 3.0% | low |
| 1995 | $32,247 | $292 | Avg domestic ticket | 3,373 | 3.3% | high |
| 2000 | $31,739 | $339 | Avg domestic ticket | 3,124 | 3.0% | high |
| 2005 | $39,800 | $310 | Avg domestic ticket | 3,979 | 3.2% | high |
| 2010 | $45,618 | $336 | Avg domestic ticket | 4,049 | 3.4% | high |
| 2015 | $50,826 | $377 | Avg domestic ticket | 3,870 | 3.5% | high |
| 2019 | $60,724 | $365 | Avg domestic ticket | 3,779 | 4.4% | high |
| 2024 | $70,000 | $384 | Avg domestic ticket | 3,210 | 5.6% | med |

2020 excluded: COVID collapsed passenger volumes ~60% while many FAs remained on payroll via CARES Act Payroll Support. The MIT Form 41 data actually shows the 2020 average jumping to $67,051 — not because FAs got raises, but because junior FAs were furloughed, skewing the average upward. The structural relationship is better captured by 2019 and 2024.

## Methodology

**Worker compensation:** Average annual wages and salaries for flight attendant personnel across all U.S. carrier types. For 1995–2020, sourced directly from the MIT Airline Data Project using DOT Form 41 data (Schedule P-6), which reports "Total All Sectors" averages. Key Form 41 values: 1995 = $32,247; 2000 = $31,739; 2005 = $39,800; 2010 = $45,618; 2015 = $50,826; 2019 = $60,724; 2020 = $67,051. Pre-1995 estimates rely on BLS wage surveys for certificated air carriers (1984 survey reported 57,000 FAs earning $1,000–$3,000/month), backward interpolation from the 1995 MIT anchor, and period-specific sources (1970 stewardess starting pay of ~$420/month from PSA recruitment data). The 2024 figure is estimated from the BLS OES May 2024 median of $67,130, adjusted upward to approximate a mean (~$70,000), reflecting partial impact of the 2023–2024 union contract raises (American 20.5%, Southwest 22.3%, Delta 5%).

**Customer cost:** Same proxy as the pilot ticket — average domestic itinerary fare from BTS Passenger Origin and Destination Survey (10% sample, fares ≥$50, yield ≤$3/mile). Nominal values: 1995 = $292, 2000 = $339, 2005 = $310, 2010 = $336, 2015 = $377, 2019 = $365, 2024 = $384. Pre-1995 derived from Airlines for America round-trip fare data. Using the same denominator as the pilot ticket allows direct comparison of how the fare dollar is allocated between the two primary customer-facing roles.

**Customers per worker:** Total domestic enplanements ÷ 2 ÷ total flight attendant employee equivalents. The ÷2 converts one-way boardings to approximate itinerary count. FA employee equivalents for 1995–2020 from MIT Airline Data Project (DOT Form 41). Key values: 1995 = 76,454; 2000 = 102,753; 2005 = 82,930; 2010 = 78,029; 2015 = 89,923; 2019 = 105,315. Pre-1995 employment estimated from BLS surveys (57,000 in 1984) and industry growth patterns. 2024 employment of ~130,800 from BLS OES. Domestic enplanements from FAA/BTS historical data.

**Why this proxy:** Using the same airfare denominator as the pilot ticket is the whole point of this ticket — the two lines against the same denominator show how airlines allocate fare revenue between their two customer-facing cabin roles. The ratio directly represents the flight attendant's share of aggregate passenger fare revenue.

## Sources

- MIT Airline Data Project, "Average Annual Wages and Salaries — Flight Attendant Personnel," DOT Form 41 data (1995–2020): https://web.mit.edu/airlinedata/www/2020%2012%20Month%20Documents/Employees%20and%20Compensation/FA/Average%20Annual%20Wages%20and%20Salaries%20-%20FLIGHT%20ATTENDANT%20PERSONNEL.htm
- MIT Airline Data Project, "Total Flight Attendant Employee Equivalents," DOT Form 41 data (1995–2020): https://web.mit.edu/airlinedata/www/2020%2012%20Month%20Documents/Employees%20and%20Compensation/FA/Total%20Flight%20Attendant%20Employee%20Equivalents.htm
- Bureau of Transportation Statistics, "Annual U.S. Domestic Average Itinerary Fare in Current and Constant Dollars" (1995–2024): https://www.bts.gov/air-fares
- Airlines for America, "Domestic Round-Trip Fares and Fees" (1979–present): https://www.airlines.org/dataset/annual-round-trip-fares-and-fees-domestic/
- Bureau of Labor Statistics, "Earnings of Employees in Certificated Air Carriers" (Monthly Labor Review, November 1985): https://www.bls.gov/opub/mlr/1985/11/rpt1full.pdf
- Bureau of Labor Statistics, Occupational Employment and Wage Statistics, SOC 53-2031 — Flight Attendants (May 2024): https://www.bls.gov/oes/current/oes532031.htm
- Bureau of Labor Statistics, Occupational Outlook Handbook — Flight Attendants (2024): https://www.bls.gov/ooh/transportation-and-material-moving/flight-attendants.htm
- Population Reference Bureau, "The Changing Demography of U.S. Flight Attendants" (wages declined 26% in real terms 1980–2007): https://www.prb.org/resources/the-changing-demography-of-u-s-flight-attendants/
- FAA Passenger Boarding (Enplanement) Data: https://www.faa.gov/airports/planning_capacity/passenger_allcargo_stats/passenger
- FRED, "Enplanements for U.S. Air Carrier Domestic, Scheduled Passenger Flights" (2000–2025): https://fred.stlouisfed.org/series/ENPLANED
- One Mile at a Time, "United Flight Attendants Getting Huge Raises" (2025 contract analysis): https://onemileatatime.com/news/united-flight-attendant-contract/
- APFA, "TA2024" — American Airlines flight attendant contract details: https://www.apfa.org/ta2024/

## Notes

- **The flattest line on the chart.** While the pilot ratio swung from 25% to 8% and back to 16%, the FA ratio sat between 2.9% and 3.5% for four straight decades (1970–2015). This isn't because nothing changed — FA pay, passenger volumes, and fares all moved substantially — but because the changes offset each other almost perfectly. Pay grew at roughly the rate that utilization increased.

- **Flight attendants are only paid from door-close to door-open.** Their nominal hourly rate understates their effective rate because boarding, deplaning, delays, and ground time are historically unpaid. The 2024 American Airlines contract added boarding pay for the first time; United's tentative 2025 agreement followed suit. This structural quirk means the Form 41 salary figures overstate per-hour-of-work compensation compared to what FAs actually experience, but the metric here is total annual compensation, which captures what they take home regardless.

- **FA pay actually declined in real terms from 1980 to 2007.** The PRB found a 26% drop in inflation-adjusted median hourly wages over this period, while the broader U.S. workforce saw 13% real growth. Deregulation, airline bankruptcies, two-tier pay scales, and aggressive cost-cutting all contributed. The Form 41 nominal salary data obscures this because nominal wages rose (from ~$22K to ~$39K), but inflation rose faster.

- **The 2000 dip is real, not a data error.** MIT Form 41 shows average FA salary dropping from $32,247 in 1995 to $31,739 in 2000 — a nominal decline. This reflects the explosive growth in low-cost carriers (Southwest, JetBlue, AirTran) that hired at lower pay scales, pulling down the industry average even as legacy FA salaries grew modestly. FA employment surged from 76,454 to 102,753 over the same period — a 34% increase in headcount, mostly at lower-paying carriers.

- **Pilot vs. FA: the fare dollar allocation.** Combined, the pilot (12.6% in 2019) and flight attendant (4.4%) captured about 17% of every domestic fare dollar for direct cabin crew compensation. The other 83% went to fuel, aircraft leases, airport fees, maintenance, ground staff, overhead, and profit. The pilot-to-FA ratio has compressed from about 8:1 in 1970 to about 3:1 in 2019, reflecting the narrowing of the gender-coded pay gap (stewardesses in 1970 were treated as semi-disposable; flight attendants in 2019 are career professionals with strong unions).

- **The 2024–2026 contract wave will push the ratio higher.** American (18–20.5% immediate), Southwest (22.3%), Delta (5%), and United (22–25% by 2025–2026) all delivered landmark FA contracts. The full impact won't show in Form 41 data until 2025–2026 filings. The ratio could reach 6–7% by 2026 — still modest compared to the pilot, but historically unprecedented for FAs.

- **Pre-1995 data carries higher uncertainty.** The MIT Airline Data Project begins in 1995. Pre-1995 FA salary and employment estimates rely on BLS surveys that use different methodology and sample different carrier populations. The 1970 estimate is particularly rough — stewardess pay data from that era is sparse and complicated by the transition from the "glamour era" (short careers, low pay, forced turnover) to the professionalized workforce. The directional story (stable ~3% ratio for decades, then rising) is robust, but pre-1995 specific values should be treated as approximations.

<!-- COMPLETE -->
