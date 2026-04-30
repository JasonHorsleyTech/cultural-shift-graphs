# Auto Repair — Auto Mechanic

## Summary

The auto mechanic's share of the customer's labor dollar has been cut roughly in half since 1970, falling from ~38% to ~18% by 2024. The ratio peaked around 1970 when shops had minimal overhead and mechanic wages were rising fast, then declined steadily as diagnostic equipment costs, regulatory compliance, insurance, support staff, and facility expenses ballooned. A sharp post-COVID spike in shop labor rates (the CPI for motor vehicle maintenance jumped 33% from 2020 to 2024) widened the gap further, pushing the ratio to its lowest point.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | $3.00/hr | $9/hr | per hour of labor | 1 | 33.3% | low |
| 1970 | $5.00/hr | $12/hr | per hour of labor | 1 | 41.7% | low |
| 1980 | $9.50/hr | $27/hr | per hour of labor | 1 | 35.2% | med |
| 1990 | $12.00/hr | $43/hr | per hour of labor | 1 | 27.9% | med |
| 2000 | $13.60/hr | $59/hr | per hour of labor | 1 | 23.1% | med |
| 2005 | $15.60/hr | $68/hr | per hour of labor | 1 | 22.9% | med/high |
| 2010 | $16.80/hr | $82/hr | per hour of labor | 1 | 20.5% | med/high |
| 2015 | $18.40/hr | $90/hr | per hour of labor | 1 | 20.4% | med/high |
| 2020 | $21.20/hr | $101/hr | per hour of labor | 1 | 21.0% | high |
| 2024 | $23.88/hr | $135/hr | per hour of labor | 1 | 17.7% | high |

## Methodology

**Worker compensation** is the auto mechanic's median hourly wage — what the employer pays per clock hour of work. For 2005–2024, this uses BLS Occupational Employment and Wage Statistics (OES) data for SOC code 49-3023 (Automotive Service Technicians and Mechanics). Confirmed anchor points: $19.57/hr median in May 2018 (BLS The Economics Daily), $22.54/hr in 2021, $22.96/hr in 2023, and $23.88/hr in 2024 (BLS OES). Intervening years (2005, 2010, 2015, 2020) are interpolated from the trend of BLS OES releases. For 1960–1990, wages are estimated from BLS Industry Wage Surveys for automobile dealer repair shops (1984 BLS MLR reported $13.56/hr average at dealer shops), historical anecdotes (flat-rate pay of $4–7/hr at dealers in the early 1970s per forum accounts and trade sources), and general BLS wage data for skilled trades.

**Customer cost** is the shop's posted labor rate — what the customer is billed for one hour of mechanic time. Direct survey data exists only for recent years: 2025 national average $142.82/hr (autoGMS survey of 4,000 shops); 2013 anecdotal data of ~$120/hr at dealers, ~$90/hr at independents. For the full time series, I scaled from a 2025 anchor of $143/hr using the BLS Consumer Price Index for Motor Vehicle Maintenance and Repair (FRED series CUUR0000SETD, base 1982–84 = 100). The CPI index, available continuously from 1947, tracks what consumers actually spend on automotive maintenance and repair services. Scale factor: $0.3308 per CPI index point. This approach was validated against the known 1970 dealer rate of $12/hr (CPI-derived: $12.09) and the 2025 survey average of $143 (CPI-derived: $143). The CPI-derived estimate for 2013 is ~$86, somewhat below the blended dealer/independent average of ~$95, reflecting that the CPI captures productivity gains (modern diagnostics reduce total labor hours) while the posted hourly rate just rises.

**Customers per worker** is 1 because this is a direct per-hour comparison: one hour of customer billing maps to one hour of mechanic labor. Flat-rate pay (where book hours may differ from actual hours) complicates this slightly, but BLS median hourly wage data already reflects total compensation divided by actual hours worked.

**Why this proxy:** The hourly labor rate is the cleanest unit of comparison for auto repair. Unlike total repair bills (which mix labor and parts in varying proportions), the labor rate isolates the service markup. The ratio directly answers: of each dollar the customer pays for one hour of labor, how much goes to the mechanic?

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics, SOC 49-3023 (Automotive Service Technicians and Mechanics) — multiple years 2005–2024: https://www.bls.gov/oes/current/oes493023.htm
- BLS, "Job requirements and wages for auto mechanics in 2018," The Economics Daily, 2019: https://www.bls.gov/opub/ted/2019/job-requirements-and-wages-for-auto-mechanics-in-2018.htm
- BLS, "Area occupational pay in auto dealer repair shops," Monthly Labor Review, August 1984: https://www.bls.gov/opub/mlr/1984/08/rpt3afull.pdf
- BLS, Consumer Price Index — Motor Vehicle Maintenance and Repair (CUUR0000SETD), 1947–2026, via in2013dollars.com: https://www.in2013dollars.com/Motor-vehicle-maintenance-and-repair/price-inflation
- FRED, Motor Vehicle Maintenance and Repair CPI: https://fred.stlouisfed.org/series/CUUR0000SETD
- autoGMS, "2025 Auto Repair Labor Rates by US State," 2025 industry survey: https://myautogms.com/blog/auto-repair-labor-rates-by-state-2025-guide
- CarTalk Community, "Were dealership repairs this relatively costly back in the 70s and 80s?": https://community.cartalk.com/t/were-dealership-repairs-this-relatively-costly-back-in-the-70s-and-80s/81784
- Marinelli Auto Service, "The Difference Between Labor Rate and A Mechanic's Wages": https://www.marinelliautoservice.com/the-difference-between-labor-rate-and-a-mechanics-wages/
- UTI, "Automotive Technician Salary in the U.S. — A 2025 Guide": https://www.uti.edu/blog/automotive/technician-salaries
- Lincoln Tech, "Automotive Mechanic Salary Guide for the United States in 2024": https://www.lincolntech.edu/news/automotive/automotive-technology/automotive-mechanic-salary-guide-united-states
- WickedFile, "Average Mechanic Labor Rate for Auto Repair Shops in 2026": https://www.wickedfile.com/blogs/whats-the-right-labor-rate-for-my-auto-repair-shop-in-2026
- automechanicschools.com, "Auto Mechanic Salaries" (citing BLS 2021 data): https://automechanicschools.com/auto-mechanic-salary/

## Notes

- **The mechanic's hidden investment in tools.** Auto mechanics typically buy their own hand tools and specialty tools — a career investment of $30,000–$100,000+. Amortized over a 30-year career, that's $1,000–$3,300/year ($0.50–$1.60/hr), silently borne by the worker. If factored into the ratio, the mechanic's effective share drops another 2–5 percentage points. No other occupation in this study has the worker self-funding capital equipment at this scale.

- **Flat-rate vs. hourly pay distortion.** Most dealership mechanics are paid "flat rate" — they earn by the book hour, not the clock hour. A fast mechanic billing 50 flag hours in a 40-hour week effectively earns 25% more per clock hour than the flag rate. A slow or unlucky mechanic (waiting on parts, getting difficult jobs) might bill only 30 flags in 40 hours — earning 25% less. The BLS median hourly wage captures the blended average, but individual mechanic experience varies enormously.

- **Dealership vs. independent gap.** Dealerships charge 30–50% more per labor hour than independent shops ($150–200/hr vs $100–140/hr in 2025). Dealership mechanics are often paid more, but the higher labor rate primarily funds factory training programs, OEM diagnostic equipment subscriptions, franchise fees, and larger facilities. The mechanic's share of the labor dollar is similar at both types of shops.

- **Post-COVID rate surge.** The CPI for motor vehicle maintenance and repair jumped 33% from 2020 to 2024 (from 306 to 407), far outpacing the 12.6% growth in mechanic median wages over the same period ($21.20 to $23.88). This is the sharpest divergence in the dataset and explains the ratio's plunge from ~21% to ~18%.

- **Pre-1980 data quality.** Mechanic wages before 1999 are estimated from BLS industry wage surveys (which covered dealer shops specifically, not the full industry) and trade anecdotes. The 1960 estimate is especially rough — the BLS didn't systematically survey auto repair shop wages that far back. The 1970 peak ratio of ~42% is plausible (low shop overhead era) but rests on limited source data.

- **What the ratio captures and what it misses.** The ratio measures the mechanic's share of the labor charge specifically. It does not capture parts markup (where shops make 40–60% gross margin), ancillary fees, or diagnostic charges billed separately. The "total value extraction" from the customer is higher than the labor rate alone, which would make the mechanic's share of the total bill even smaller.

<!-- COMPLETE -->
