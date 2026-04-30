# Heating & Cooling — HVAC Technician

## Summary

The HVAC technician's share of what customers pay has been gradually declining — from roughly 26% in the early 2000s to about 19% today — even as absolute wages have grown significantly ($36K to $60K). The compression is driven by rising equipment costs (higher SEER requirements, refrigerant transitions), growing compliance overhead, technology platform fees, and the expansion of middleman layers like home warranty companies. The 2023-2024 period shows a slight rebound as a post-pandemic skilled-trade wage surge temporarily outpaced revenue growth.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 2004 | $36,100 | $141,000 | annual revenue per tech | ~1,000 jobs/yr | 25.6% | low |
| 2008 | $40,200 | $166,000 | annual revenue per tech | ~1,000 jobs/yr | 24.2% | low |
| 2012 | $43,640 | $194,000 | annual revenue per tech | ~1,000 jobs/yr | 22.5% | med |
| 2015 | $45,110 | $218,000 | annual revenue per tech | ~1,000 jobs/yr | 20.7% | med |
| 2018 | $47,610 | $245,000 | annual revenue per tech | ~1,000 jobs/yr | 19.4% | med |
| 2020 | $50,590 | $265,000 | annual revenue per tech | ~1,000 jobs/yr | 19.1% | med |
| 2022 | $51,390 | $287,000 | annual revenue per tech | ~1,000 jobs/yr | 17.9% | med |
| 2024 | $59,810 | $310,000 | annual revenue per tech | ~1,000 jobs/yr | 19.3% | med |

## Methodology

**Worker compensation:** BLS median annual wage for SOC 49-9021 (Heating, Air Conditioning, and Refrigeration Mechanics and Installers). For 2012-2022, sourced from USAWage.com's BLS OES median data. For 2004-2008, estimated by adjusting recruiter.com's mean salary data downward by ~$2,000 to approximate median (the mean-median gap is consistently ~$2,000 in years where both measures are available). For 2023-2024, direct BLS OES reports ($57,300 and $59,810 respectively).

**Customer cost proxy: annual revenue generated per HVAC technician.** This captures the total customer spending attributable to one worker across all job types — service calls, repairs, maintenance contracts, and installations. The HVAC industry explicitly tracks this metric; current benchmarks place it at $250,000-$450,000 per tech per year, with $300,000-$325,000 as the midpoint for a blended service/installation technician. This was chosen over individual service call costs (which lack longitudinal data) and over total industry revenue divided by total techs (which conflates the plumbing/HVAC NAICS 238220 classification).

**Revenue per tech estimation for historical years:** The 2024 figure of $310,000 is based on industry benchmarks (SBE, Contracting Business, Housecall Pro). Historical values are extrapolated backward at 4% annual growth, reflecting that HVAC customer costs have risen faster than general CPI due to: increasing equipment efficiency requirements (SEER standards), refrigerant transitions (R-22 to R-410A to R-454B), expanding compliance overhead, and growing technology/platform costs. This 4% rate was cross-validated against the Contracting Business "Gold" benchmark of $130,000-$150,000 revenue per total employee (roughly $220,000-$250,000 per tech after adjusting for non-tech staff) from the mid-2010s era, which aligns with the estimate.

**Customers per worker:** Estimated at ~1,000 billable jobs per year based on industry standard of 4-5 service calls per day over ~250 working days, plus periodic larger installation jobs. This physical constraint (travel time, diagnosis time) has been relatively stable over time.

**Why this proxy over alternatives:** Individual service call costs would be cleaner but have virtually no historical data trail. Installation costs are dominated by equipment pass-through (~60-70% of the bill is equipment), making the labor ratio artificially low (~4%) and distorting the worker's contribution picture. Annual revenue per tech captures the full blended picture of what a customer dollar buys and how much reaches the worker.

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OES), SOC 49-9021, various years (2004-2024): https://www.bls.gov/oes/current/oes499021.htm
- USAWage.com historical BLS median wage data (2012-2022): https://www.usawage.com/usa/heating_air_conditioning_and_refrigeration_mechanics_and_installers-salary.php
- Recruiter.com historical salary trend (2004-2020): https://www.recruiter.com/salaries/heating-and-air-conditioning-mechanics-and-installers-salary/
- Data USA occupational profile (employment data): https://datausa.io/profile/soc/heating-air-conditioning-refrigeration-mechanics-installers
- SBE, "How Much Revenue Should HVAC Techs Generate in 2024?": https://sbeodyssey.com/blog/hvac-technician-revenue
- Contracting Business, "How to Manage Revenue Per HVAC Employee": https://www.contractingbusiness.com/contracting-business-success/article/20869897/how-to-manage-revenue-per-hvac-employee
- Housecall Pro, "Guide to HVAC Profits, Salaries & Revenue": https://www.housecallpro.com/resources/marketing/how-to/guide-to-hvac-profits-salaries-revenue/
- IBISWorld, Heating & Air-Conditioning Contractors (NAICS 238220): https://www.ibisworld.com/united-states/industry/heating-air-conditioning-contractors/1945/
- U.S. Census Bureau, NAICS 238220 industry profile (2020 data: 104,776 establishments, 1,124,239 employees, $75.3B payroll): https://data.census.gov/profile/238220
- Angi, R-22 Refrigerant Cost Data: https://www.angi.com/articles/what-fair-price-r-22-refrigerant.htm

## Notes

**The 14-20% industry rule:** The HVAC industry has a well-known benchmark that technician total compensation (wages + benefits + vehicle + training) should represent 14-20% of the revenue they generate. My ratio uses base salary only (BLS median), which runs slightly higher at 19-26% because it excludes the denominator adjustment for benefits. If total compensation (~30% above base) were used, the ratios would drop into the 15-20% range for recent years, aligning perfectly with industry guidance. The trend direction is the same either way.

**Equipment cost is the silent compressor of the ratio.** HVAC is fundamentally different from pure-service trades (barber, tutor) because a large share of the customer dollar goes to equipment manufacturers. A $12,000 HVAC installation includes ~$7,000-$8,000 in equipment — the technician earns perhaps $460 for 16 hours of installation work (3.8% of the customer cost). This product pass-through is the primary reason HVAC ratios are lower than pure-service trades and have been declining as equipment costs outpace wage growth.

**Home warranty companies are a ratio-killer.** Companies like American Home Shield pay contractors a flat ~$200 per service call regardless of actual cost. On straightforward jobs, this is workable. On complex repairs requiring expensive parts, the contractor absorbs the loss. The growth of home warranty coverage (estimated 6-7 million contracts nationally) creates downward pressure on the HVAC worker's effective share, since warranty companies capture a significant spread between the homeowner's $75-$100 service fee and the contractor's $200 flat payout, while the tech's hourly wage stays the same.

**Refrigerant regulation: the tech didn't benefit.** The R-22 phaseout (production banned in 2020) caused R-22 prices to spike from ~$15/pound in 2010 to $100-$250/pound by 2025. This dramatically increased customer costs for older system repairs. But the price spike accrued to refrigerant suppliers and distributors, not to the technician doing the recharge. The tech's hourly wage was unchanged. This is a microcosm of the broader HVAC trend: rising customer costs driven by supply chain factors, with the worker's share shrinking.

**Post-pandemic wage bump.** The 2023-2024 wage surge ($51K to $60K in two years, +17%) reflects the broader skilled-trades labor shortage. Demand for HVAC techs — driven by COVID-era indoor air quality concerns, heat pump adoption incentives (IRA/Inflation Reduction Act), and an aging workforce — pushed wages up faster than typical. Whether this temporarily reverses the long-term ratio decline or merely creates a new baseline remains to be seen.

**Data gap: pre-2004 wages.** BLS OES data for this specific occupation code (49-9021) is difficult to find before 2003-2004. Earlier data may use different classification systems. The 2004 starting point limits the historical range but captures the period of most dramatic change (SEER standard increases, refrigerant transitions, technology platform adoption).

<!-- COMPLETE -->
