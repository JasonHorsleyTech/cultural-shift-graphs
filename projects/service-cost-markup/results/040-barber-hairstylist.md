# Personal Grooming — Barber / Hairstylist

## Summary

Even in the "control case" of barbering — perhaps the purest one-worker-one-customer service that exists — the fundamental worker ratio has declined substantially, from roughly 85% in 1960 to about 50–56% today. The decline tracks the shift from owner-operator barbershops to chain employment (Supercuts, Great Clips) and rising commercial overhead. A modest recovery since ~2018 coincides with the "barber revival" (premium independent shops, booth-rental model, tight labor market), but the ratio remains far below its mid-century peak.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | $4,000 | $1.50 | per men's haircut | 3,100 | 86% | low |
| 1970 | $6,000 | $2.75 | per men's haircut | 2,900 | 75% | low |
| 1980 | $11,500 | $5.50 | per men's haircut | 2,800 | 75% | low |
| 1990 | $16,500 | $10.00 | per men's haircut | 2,600 | 63% | med |
| 2000 | $20,000 | $14.50 | per men's haircut | 2,500 | 55% | med |
| 2005 | $22,000 | $16.60 | per men's haircut | 2,500 | 53% | med |
| 2010 | $24,000 | $18.70 | per men's haircut | 2,500 | 51% | med |
| 2015 | $24,850 | $20.10 | per men's haircut | 2,500 | 49% | high |
| 2020 | $32,470 | $23.05 | per men's haircut | 2,500 | 56% | high |
| 2024 | $38,960 | $28.00 | per men's haircut | 2,500 | 56% | high |

## Methodology

**Ratio formula:** Barber median annual income / (Average haircut price × estimated annual haircuts per barber)

**Worker compensation:**
- **2012–2024:** BLS Occupational Employment and Wage Statistics (OEWS), SOC 39-5011 "Barbers," median annual wage. 2023 and 2024 derived from BLS-reported median hourly wages ($17.38 and $18.73) × 2,080 hours. Source data via usawage.com compilation of BLS OES.
- **2000–2010:** Estimated by backward extrapolation from the 2012 BLS data point ($25,090), using general service-occupation wage growth trends. The BLS OES started publishing barber data in 1999, but archived figures were not directly accessible.
- **1960–1990:** Estimated from U.S. Census decennial data on occupational earnings for service workers. Census reports show barber income tracking at or slightly below the median for male service workers. The 1949 Census recorded black barber median income at $1,678; by 1959, all-race barber income was likely ~$3,500–$4,500. Subsequent decades estimated using Census median income trends for service occupations.

**Customer cost (haircut price):**
- **1997–2024:** Derived from BLS Consumer Price Index for "Haircuts and other personal care services" (series begun 1997, baseline = 100). The CPI index was anchored to a 2024 average men's barbershop haircut of $28.00 (based on multiple industry surveys reporting $28–$35 national average), then back-calculated for each year using the CPI ratio. For example: 2010 CPI = 140.10, so 2010 price = $28.00 × (140.10/209.81) = $18.70.
- **Pre-1997:** Estimated from historical price reports: 1966 national average was $1.95 (BLS/Census); 1975 Supercuts launched at $6.00 (budget chain, so traditional barbershops were likely $3.50–$4.50); 1980s Supercuts was $6.50–$8.00. Pre-1997 estimates are cross-checked against CPI trends for personal care services.

**Customers per worker (annual haircuts per barber):**
- Industry sources consistently report 8–12 haircuts per day per barber, with 10 as a standard average. Modern barbers work approximately 250 days/year (5-day weeks, 50 weeks).
- For earlier decades, barbers likely performed more cuts per day (simpler styles, 15–20 min vs. modern 25–40 min) and often worked 5.5–6 day weeks. Estimates: 1960 = 3,100/year (12/day × 260 days), declining gradually to 2,500/year by 2000 as haircut duration increased and work weeks shortened.

**Why this proxy over alternatives:** The haircut price is the most direct possible customer cost for barbering — unlike healthcare or education, there's no insurance layer, no bundled services, no indirect payment. The customer hands the barber cash (or card) for a defined service. This makes barbering the cleanest ratio on the graph. The only complication is that barbers historically offered additional services (shaves, tonics, products), meaning the haircut price alone slightly understates total customer spending per visit. This effect was larger in earlier decades.

## Sources

- BLS Occupational Employment and Wage Statistics (OEWS), SOC 39-5011 "Barbers" — median annual wage data 2012–2024: https://www.bls.gov/oes/current/oes395011.htm
- BLS OES historical data compiled by usawage.com — median salary trend 2012–2022: https://www.usawage.com/usa/barbers-salary.php
- BLS Occupational Outlook Handbook — Barbers, Hairstylists, and Cosmetologists: https://www.bls.gov/ooh/personal-care-and-service/barbers-hairstylists-and-cosmetologists.htm
- BLS Consumer Price Index — "Haircuts and other personal care services" (1997–2026): https://www.in2013dollars.com/Haircuts-and-other-personal-care-services/price-inflation (uses BLS CPI data)
- FRED — CPI Urban Consumer: Personal Care Services (CUUR0000SEGC), 1952–2026: https://fred.stlouisfed.org/series/CUUR0000SEGC
- Sprouse, R. — "Haircut Prices vs. Inflation, Essentials, and Living Costs (2000–2025)," Medium: https://medium.com/@hsprouse/haircut-prices-vs-inflation-essentials-and-living-costs-2000-2025-441ae78d3b32
- University of Missouri Libraries — Prices and Wages by Decade (1960s, 1970s, 1980s): https://libraryguides.missouri.edu/pricesandwages/
- U.S. Census Bureau — Historical Income Tables, occupational earnings by decade: https://www.census.gov/data/tables/time-series/demo/income-poverty/historical-income-people.html
- SQUIRE — booth rental vs. commission economics: https://getsquire.com/business-edge/what-new-barbers-need-to-know-about-booth-rent-vs-commission-shops
- barber-license.com — chair rental vs. commission comparison: https://www.barber-license.com/renting-a-chair-vs-working-on-commission-as-a-barber/
- Blurred Lines Barbershop — daily haircut volume benchmarks: https://blurredlinesbarbershop.com/how-many-haircuts-can-a-barber-do-in-a-day/
- Data USA — Barbers occupation profile: https://datausa.io/profile/soc/barbers
- FRED — Total Revenue for Barber Shops (NAICS 812111): https://fred.stlouisfed.org/series/REVEF812111ALLEST

## Notes

- **Booth rental vs. employment massively affects the ratio.** A booth-renting barber paying $200–$400/week ($10,000–$20,000/year) keeps everything above rent, yielding a ratio of 70–85%. A commission employee at a 50/50 or 60/40 split yields 50–60%. An hourly employee at a chain may earn even less. The BLS median wage data captures mainly W-2 employees, not self-employed booth renters, so it systematically understates the average barber's actual take-home. This means the "true" ratio for the typical barber is probably 5–15 percentage points higher than shown, especially in recent years where booth rental has grown.

- **Tips are a significant hidden factor.** Barbers typically receive 15–20% tips, which are often underreported. BLS wage data may not fully capture tips, meaning barber actual income is higher than reported. On the customer cost side, tips represent real additional cost to the customer. Neither side is well-captured in official statistics.

- **The 1960 ratio (86%) reflects owner-operator economics.** In 1960, most barbers owned their shops. Their Census-reported income included both wage-equivalent and business profits. Overhead was minimal: a lease, a chair, scissors, combs, and maybe a part-time assistant. The customer paid for labor with very little intermediation. By 2000, the industry had corporatized significantly.

- **The 2020 spike is a pandemic artifact.** Pent-up demand after lockdowns, combined with reduced barber supply (many left the profession), drove both prices and wages up sharply. The 2021 dip in wages ($29,970 vs. $32,470 in 2020) reflects lingering disruption.

- **The "barber revival" is real but bifurcated.** Premium barbershops charging $40–$60+ per cut have proliferated since ~2015, but budget chains ($15–$20) also persist. The industry is splitting into two tiers, and the BLS median captures the blended middle. The premium tier likely has a higher worker ratio (skilled independent barbers commanding high prices with booth-rental autonomy), while the chain tier has a lower ratio (corporate overhead, hourly wages).

- **Historical haircut price data pre-1997 is sparse.** The BLS CPI for haircuts specifically only begins in 1997. Pre-1997 prices are estimated from scattered historical reports and general CPI trends. The 1960s data is the most reliable (Census reports specific haircut prices), while 1970s–1980s estimates carry more uncertainty.

- **The ratio decline from 86% → 49% (1960–2015) represents both real and measurement effects.** The real effect is genuine corporatization of barbering — more intermediaries, higher commercial rents, insurance costs, licensing overhead, franchise fees. The measurement effect is that BLS increasingly captured employee barbers (who earn less) while missing self-employed barbers (who earn more). Both effects are real, but the measurement shift overstates the decline somewhat.

<!-- COMPLETE -->
