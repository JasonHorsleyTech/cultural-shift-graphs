# Commercial Aviation — Airline Pilot

## Summary

The pilot's share of airfare revenue has undergone a dramatic transformation. In the regulated era (pre-1978), pilots captured roughly 25% of what passengers paid — a function of high fares, small aircraft, and powerful unions. Deregulation halved this ratio almost overnight, stabilizing around 12% through the 1990s. The post-9/11 crisis, airline bankruptcies, and continuous efficiency gains pushed it down to a nadir of ~8% by 2010. The current pilot shortage has driven a sharp recovery: landmark union contracts in 2023–2024 delivered 18–46% cumulative raises, pushing the ratio back toward ~16% — still well below its regulated-era peak.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1970 | $42,000 | $100 | Avg domestic ticket | 1,700 | 24.7% | low |
| 1978 | $60,000 | $180 | Avg domestic ticket | 2,500 | 13.3% | low |
| 1985 | $90,000 | $250 | Avg domestic ticket | 2,938 | 12.2% | med |
| 1990 | $110,000 | $288 | Avg domestic ticket | 3,107 | 12.3% | med |
| 1995 | $122,484 | $292 | Avg domestic ticket | 3,335 | 12.6% | high |
| 2000 | $132,295 | $339 | Avg domestic ticket | 3,700 | 10.5% | high |
| 2005 | $133,283 | $310 | Avg domestic ticket | 4,341 | 9.9% | high |
| 2010 | $132,125 | $336 | Avg domestic ticket | 4,675 | 8.4% | high |
| 2015 | $191,995 | $377 | Avg domestic ticket | 5,398 | 9.4% | high |
| 2019 | $236,239 | $365 | Avg domestic ticket | 5,144 | 12.6% | high |
| 2024 | $270,000 | $384 | Avg domestic ticket | 4,500 | 15.6% | med |

2020 excluded from main table: COVID collapsed passenger volumes 60% while pilots remained on payroll via CARES Act Payroll Support Program, producing a misleading ratio of ~37%. The structural relationship between pilot pay and airfares is better captured by 2019 (pre-COVID) and 2024 (post-recovery).

## Methodology

**Worker compensation:** Average annual wages and salaries for airline pilots and copilots across all carrier types (network, low-cost, hybrid, ULCC). For 1995–2020, sourced from the MIT Airline Data Project using DOT Form 41 data (Schedule P-6 & P-10), which reports "Total All Sectors" averages. Pre-1995 estimated from BLS wage surveys for scheduled airlines (1970, 1975 surveys via FRASER), industry reports, and backward projection from the 1995 Form 41 anchor. These pre-1995 figures represent a weighted average across captains, first officers, and flight engineers — captain pay was substantially higher, but copilots earned 40–60% of captain rates. The 2024 figure estimated from BLS OES median ($226,600 in May 2024), reported 2023–2024 ALPA contract raises (18–21% immediate, 34–46% cumulative), and upward adjustment from median to mean.

**Customer cost:** Average domestic itinerary fare — the average price paid per ticket (round-trip or one-way, as purchased). For 1995–2024, sourced from BTS Passenger Origin and Destination Survey (10% sample of domestic airline tickets, fares ≥$50, yield ≤$3/mile). Key confirmed BTS nominal values: 1995 = $292, 2020 = $292 (all-time nominal low), 2024 = $384, 2014 = $396 (nominal peak). Pre-1995 derived from Airlines for America round-trip fare data, converted from inflation-adjusted figures to nominal dollars using general CPI. Cross-checked against AEI analysis of A4A data (1980 = $611.76 in 2011$, 1991 = $477.11 in 2011$).

**Customers per worker:** Domestic ticket-buying passengers per pilot per year. Calculated as total domestic enplanements ÷ 2 ÷ total airline pilots employed. The ÷2 converts enplanements (one-way boardings) to approximate itinerary count, since most tickets are round-trip. Enplanement data from FAA/BTS. Pilot employment estimated from BLS OES occupation 53-2011, GAO workforce reports, and industry data (~50K in 1970, growing to ~100K in 2024).

**Why this proxy:** Average itinerary fare is the most natural "customer cost" for aviation — it's what the passenger actually pays. Dividing by itineraries-per-pilot captures both fare levels and pilot utilization efficiency. The ratio directly represents what fraction of aggregate passenger fare revenue goes to the pilot workforce.

## Sources

- MIT Airline Data Project, "Average Annual Wages and Salaries — Pilot and Co-Pilot Personnel," DOT Form 41 data (1995–2020): http://web.mit.edu/airlinedata/www/Employees&Compensation.html
- Bureau of Transportation Statistics, "Annual U.S. Domestic Average Itinerary Fare in Current and Constant Dollars" (1995–2024): https://www.bts.gov/air-fares
- Airlines for America, "Domestic Round-Trip Fares and Fees" (1979–present): https://www.airlines.org/dataset/annual-round-trip-fares-and-fees-domestic/
- Bureau of Labor Statistics, Occupational Employment and Wage Statistics, SOC 53-2011 — Airline Pilots, Copilots, and Flight Engineers: https://www.bls.gov/oes/current/oes532011.htm
- BLS Monthly Labor Review, "Earnings of Employees in Certificated Air Carriers" (November 1985): https://www.bls.gov/opub/mlr/1985/11/rpt1full.pdf
- BLS Wage Survey, "Scheduled Airlines, August 1970" (FRASER/St. Louis Fed): https://fraser.stlouisfed.org/files/docs/publications/bls/bls_1734_1972.pdf
- FAA Passenger Boarding (Enplanement) Data: https://www.faa.gov/airports/planning_capacity/passenger_allcargo_stats/passenger
- American Enterprise Institute, "Even with Fees, the 'Miracle of Flight' Remains a Real Bargain" (A4A airfare analysis): https://www.aei.org/carpe-diem/even-with-baggage-fees-the-miracle-of-flight-remains-a-real-bargain-average-2011-airfare-was-40-below-1980-average/
- GAO-14-232, "Aviation Workforce: Current and Future Availability of Airline Pilots" (2014): https://www.gao.gov/assets/gao-14-232.pdf
- Human Progress / Airlines for America, "Air Travel is Getting Cheaper": https://humanprogress.org/trends/air-travel-is-getting-cheaper/
- US Inflation Calculator, "Airfare Inflation: Airline Ticket Prices (1964–2026)" (BLS CPI data): https://www.usinflationcalculator.com/inflation/airfare-inflation/

## Notes

- **Deregulation is the inflection point.** The Airline Deregulation Act of 1978 is the single biggest structural break in this data. Pre-deregulation, the Civil Aeronautics Board set fares high enough to guarantee airline profitability, and pilots — through ALPA — captured a large share. Post-deregulation, fares fell, competition intensified, and new entrants (People Express, New York Air, etc.) hired at dramatically lower rates. The ratio dropped from ~25% to ~12% within a decade.

- **The ratio decline is driven by efficiency, not falling real pay.** Pilot salaries grew ~6.4× from 1970 to 2024 ($42K → $270K), actually outpacing fare growth of ~3.8× ($100 → $384). The ratio fell because each pilot now serves ~2.6× more passengers (1,700 → 4,500 tickets per pilot), driven by larger aircraft (100-seat 707s → 180+ seat 737 MAXs), higher load factors (55% → 87%), and more productive scheduling.

- **Regional vs. mainline is a different universe.** The table uses industry-wide averages, which masks a stark divide. Regional first officers earned as little as $16,000–$23,000 as recently as 2009 (Colgan Air first officer salary was $23,900; the copilot of crashed Flight 3407 earned $16,000/year). Post-Colgan safety rules (1,500-hour ATP minimum, 2013) and the pilot shortage have since driven regional starting salaries to ~$108,000 — a 546% increase since 2000.

- **Post-9/11 and bankruptcy era crushed pilot pay.** Multiple airline bankruptcies (US Airways 2002/2004, United 2002, Delta/Northwest 2005) resulted in abrogated union contracts and permanent pay cuts of 20–40%. The MIT Form 41 data shows industry average pilot salary declining from $132K in 2000 to $120K in 2006 — while the rest of the economy experienced wage growth. This, combined with more passengers per pilot, drove the ratio to its all-time low of ~8.4% in 2010.

- **Post-COVID salary spike is historic.** ALPA negotiated landmark contracts in 2023–2024 delivering immediate 18–21% raises with cumulative increases of 34–46%. Senior captains at American, Delta, and United now earn $350–500K+. This represents the largest sustained improvement in pilot compensation since the regulated era and is driven by genuine scarcity: mandatory retirements, the 1,500-hour rule constraining supply, and post-pandemic travel demand.

- **Pre-1995 data carries higher uncertainty.** The MIT Airline Data Project (Form 41) begins in 1995. Pre-1995 salary estimates rely on BLS wage surveys that use different methodology and sample different carrier populations. Pre-1995 airfare estimates are reverse-engineered from inflation-adjusted A4A figures. Pilot employment counts before 2000 are rough industry estimates. The directional story (high ratio → collapse → partial recovery) is robust, but the specific pre-1995 ratio values (especially 1970) should be treated as approximations.

<!-- COMPLETE -->
