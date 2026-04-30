# Freight — Long-Haul Truck Driver

## Summary

The long-haul truck driver's share of industry revenue per driver seat has collapsed from roughly 44% in 1980 to a low of about 14% in 2015, before partially recovering to ~19% by 2024. The Motor Carrier Act of 1980 (deregulation) is the single largest inflection point — within a decade, the driver's share was cut nearly in half. The continued decline through the 2000s–2010s reflects the compounding effects of freight brokers (a middleman layer that barely existed before deregulation), rising non-labor operating costs (fuel, equipment, insurance, compliance), and industry revenue growing far faster than driver wages.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1980 | 38,618 | 87,500 | annual revenue per driver seat | 1 | 44.1 | low |
| 1990 | 26,000 | 108,700 | annual revenue per driver seat | 1 | 23.9 | low |
| 2000 | 30,000 | 157,100 | annual revenue per driver seat | 1 | 19.1 | med |
| 2005 | 33,000 | 226,300 | annual revenue per driver seat | 1 | 14.6 | med |
| 2010 | 36,500 | 249,200 | annual revenue per driver seat | 1 | 14.6 | med |
| 2015 | 40,260 | 289,800 | annual revenue per driver seat | 1 | 13.9 | high |
| 2020 | 47,000 | 268,400 | annual revenue per driver seat | 1 | 17.5 | high |
| 2024 | 57,440 | 295,600 | annual revenue per driver seat | 1 | 19.4 | high |

## Methodology

**Ratio = Median driver annual compensation / (Total industry gross freight revenue / Total number of truck drivers)**

This measures the fundamental worker's share of what the customer (shipper) collectively pays for trucking services, normalized per driver seat. The ratio captures the full shipper-to-driver chain, including broker margins, carrier overhead, fuel, equipment, insurance, and profit.

**Worker compensation (numerator):**
- 2015–2024: BLS Occupational Employment and Wage Statistics (OES) median annual wage for Heavy and Tractor-Trailer Truck Drivers (SOC 53-3032).
- 2000–2010: Estimated by backward extrapolation from the 2015 BLS figure using historical wage growth trends (~2% nominal annual growth in this period, consistent with industry accounts and BLS sector-level data).
- 1990: Estimated from industry accounts of post-deregulation wage compression. Multiple sources document that real wages fell 30–50% in the decade after the Motor Carrier Act of 1980. Nominal wages barely grew while inflation roughly doubled costs. Consistent with driver accounts of $0.23–$0.30/mile at 100K miles/year.
- 1980: Widely cited average trucker salary of $38,618 (nominal), sourced from BLS data and confirmed by multiple industry analyses. Equivalent to ~$111,000 in 2015 dollars — a figure frequently cited by Money magazine, Overdrive, and the Economic Policy Institute to illustrate the post-deregulation wage collapse.

**Customer cost (denominator):**
- 2015–2024: ATA (American Trucking Associations) total gross freight revenue ("freight bill"), which represents the total amount shippers pay for trucking services. Divided by BLS OES total truck driver employment count.
- 2000–2010: ATA gross freight revenue (partially estimated for years where exact figures weren't publicly available; cross-validated against GDP-proportional estimates with trucking at ~4–4.5% of GDP). Driver counts from BLS OES.
- 1990: Revenue estimated as ~4.2% of 1990 GDP ($5.98T), yielding ~$250B. Driver count estimated at ~2.3M based on backward extrapolation from the 1997 BLS OES figure of 2.64M, accounting for post-deregulation driver population growth.
- 1980: Revenue estimated at ~$140B total (interstate trucking earned $67B per BTS data, representing ~50% of total trucking activity including local and private carriage). Driver count estimated at ~1.6M — fewer than post-deregulation due to regulated entry barriers.

**Why this proxy over alternatives:**
- The ATRI (American Transportation Research Institute) per-mile cost breakdown (available 2008–2024) was considered but only covers for-hire carrier operating costs, missing the shipper-to-carrier chain (broker margins, carrier profit). It also only goes back to 2008, missing the critical deregulation story.
- Per-mile freight rates (DAT, etc.) are too fragmented before 2000 and vary wildly by mode (TL vs LTL, spot vs contract) to provide a consistent denominator.
- The macro industry-revenue approach, while requiring estimates for earlier decades, provides the most longitudinally consistent proxy for "what does the customer pay, total, per driver in the system."

**Methodological caveat:** The BLS OES driver count excludes self-employed owner-operators (~10–15% of drivers), while the ATA freight bill includes freight they move. This makes revenue-per-driver slightly higher than true, and the ratio slightly lower. However, this bias is roughly stable across the time series, so trends remain valid.

## Sources

- BLS Occupational Employment and Wage Statistics (OES), SOC 53-3032 — Heavy and Tractor-Trailer Truck Drivers: https://www.bls.gov/oes/current/oes533032.htm (2024 median: $57,440; 2015 median: $40,260)
- BLS, "10-4! Employment and wages of truck drivers in 2015": https://www.bls.gov/opub/ted/2016/10-4-employment-and-wages-of-truck-drivers-in-2015.htm
- BLS, "Is the U.S. labor market for truck drivers broken?" (2019 Monthly Labor Review): https://www.bls.gov/opub/mlr/2019/article/is-the-us-labor-market-for-truck-drivers-broken.htm
- American Trucking Associations, Economics and Industry Data: https://www.trucking.org/economics-and-industry-data (2024 freight bill: $906B; 2022: $941B; 2018: $797B; 2016: $676B; 2015: $726B)
- BLS OES historical truck driver employment data via ConsumerShield: https://www.consumershield.com/articles/how-many-truck-drivers (1997–2024 annual driver counts)
- Bureau of Transportation Statistics, Freight Facts and Figures: https://www.bts.gov/product/freight-facts-and-figures
- Bureau of Transportation Statistics, "Average Freight Revenue per Ton-Mile": https://www.bts.gov/content/average-freight-revenue-ton-mile
- Money magazine, "How Trucking Went From One of the Best Jobs in America to One of the Worst": https://money.com/trucking-worst-job/ (1980 average salary of $38,618; equivalent to $110K+ in 2015 dollars)
- Overdrive, "Trucker pay has plummeted in the last 30 years": https://www.overdriveonline.com/business/article/14889914/trucker-pay-has-plummeted-in-the-last-30-years-analyst-says
- Econlib, "Trucking Deregulation" by Thomas Gale Moore: https://www.econlib.org/library/enc/TruckingDeregulation.html/
- ATRI, Operational Costs of Trucking (annual reports, 2008–2024): https://truckingresearch.org/about-atri/atri-research/operational-costs-of-trucking/
- ATRI 2025 report: total operating cost $2.260/mi (2024), driver wages ~$0.80/mi: https://www.fleetmaintenance.com/equipment/article/55301363/american-transportation-research-institute-atri-breakdown-of-atri-2025-operational-costs-report
- U.S. Census Bureau, "Number of Truckers at All-Time High" (2019): https://www.census.gov/library/stories/2019/06/america-keeps-on-trucking.html
- FMCSA, Truck Driver Market Update (July 2021): https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/2021-07/MCSAC%20Truck%20Driver%20Market%20Update%20-%20July%202021.pdf
- Wikipedia, "Motor Carrier Act of 1980": https://en.wikipedia.org/wiki/Motor_Carrier_Act_of_1980

## Notes

- **The Motor Carrier Act of 1980 is the defining event.** Before deregulation, the ICC set rates and controlled market entry. Carriers simply passed along costs (including high Teamster wages) to shippers. After deregulation, the number of licensed carriers exploded from ~18,000 to over 100,000 within a decade. Rate competition crushed margins, and driver wages were the largest controllable expense.

- **Freight brokers are the hidden story.** Before deregulation, freight brokers barely existed. By 2008, brokerages handled ~10% of freight; by the 2020s, ~20%. Brokers take 15–25% of the shipping rate without touching cargo. This entire middleman layer sits between the shipper's dollar and the driver's paycheck, compressing the ratio even when freight rates rise.

- **Owner-operators vs. company drivers tell different stories.** Company drivers (the majority) earn $50K–$65K and have no equipment risk. Owner-operators gross 65–85% of line-haul revenue but pay their own fuel (~$70K/year), truck payments, insurance, and maintenance. After expenses, owner-operator net income is often comparable to or lower than company driver wages. Both groups have seen their relative share of the shipper dollar decline.

- **The 2020–2024 partial recovery is real but fragile.** COVID-era freight demand spikes, genuine driver shortages, and political attention to trucker conditions pushed wages up faster than in decades. But the structural middleman layer (brokers, technology platforms) and rising equipment costs mean the ratio is unlikely to return to pre-deregulation levels.

- **Cross-validation with ATRI per-mile data:** ATRI reports driver wages at ~$0.80/mile out of $2.26/mile total operating cost in 2024 (35.4% of carrier cost). My macro ratio of 19.4% is lower because the macro measure includes the full shipper-to-driver chain (broker margins, carrier profit margins, non-carrier overhead) while ATRI measures only the carrier's internal cost allocation. The ~16 percentage-point gap is consistent with broker take (~5%), carrier profit margin (~5%), and the denominator including private fleet revenue not captured by the carrier cost model.

- **Pre-1997 data quality is poor.** The 1980 and 1990 data points rely on widely cited industry figures and reasonable estimates rather than official statistical series. The directional story (massive decline post-deregulation) is well-documented and robust, but the specific ratio values for 1980 and 1990 should be treated as approximate.

<!-- COMPLETE -->
