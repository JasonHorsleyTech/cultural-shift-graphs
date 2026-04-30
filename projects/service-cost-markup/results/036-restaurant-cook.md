# Full-Service Restaurant — Line Cook

## Summary

The line cook's share of the customer's meal cost has roughly halved over 60 years, declining from about 11% in the mid-1960s to under 5% by 2023. Cook wages have risen ~12x in nominal terms ($1.40 to $17.02/hr), but average full-service meal prices have risen ~19x ($1.25 to $24.00), and cooks have also gotten more productive (more covers per hour due to better equipment and pre-prepped supply chains). The result: even though cooks earn more, they capture an ever-shrinking slice of each dollar the diner spends.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1965 | $1.40/hr | $1.25 | per-person meal check | 10/hr | 11.2% | low |
| 1970 | $2.00/hr | $2.00 | per-person meal check | 10/hr | 10.0% | low |
| 1975 | $2.85/hr | $3.00 | per-person meal check | 10/hr | 9.5% | low |
| 1980 | $3.60/hr | $4.50 | per-person meal check | 10/hr | 8.0% | med |
| 1985 | $4.35/hr | $6.00 | per-person meal check | 11/hr | 6.6% | med |
| 1990 | $5.50/hr | $7.75 | per-person meal check | 11/hr | 6.5% | med |
| 1995 | $6.75/hr | $9.00 | per-person meal check | 12/hr | 6.3% | med |
| 2000 | $8.02/hr | $10.75 | per-person meal check | 12/hr | 6.2% | med-high |
| 2005 | $9.42/hr | $13.00 | per-person meal check | 13/hr | 5.6% | med-high |
| 2010 | $10.64/hr | $14.00 | per-person meal check | 13/hr | 5.8% | high |
| 2015 | $11.82/hr | $16.00 | per-person meal check | 14/hr | 5.3% | high |
| 2019 | $13.67/hr | $18.00 | per-person meal check | 14/hr | 5.4% | high |
| 2023 | $17.02/hr | $24.00 | per-person meal check | 15/hr | 4.7% | high |

## Methodology

**Ratio formula:** (Cook hourly wage / covers per cook-hour) / average per-person meal check at a full-service restaurant.

This gives the cook's labor cost as a fraction of the customer's total bill. One cook earning $17.02/hr and plating 15 covers/hr contributes $1.13 of labor per meal. On a $24.00 check, that's 4.7%.

**Cook wage sources:** Pre-1997 figures come from BLS Industry Wage Surveys for Hotels and Restaurants and National Restaurant Association (NRA) annual operations reports. From 1997 onward, BLS Occupational Employment and Wage Statistics (OES) for "Cooks, Restaurant" (SOC 35-2014) — a highly reliable survey of 200,000+ establishments. Pre-1997 NRA figures and BLS surveys agree within ~10%, and I used NRA round numbers where both existed for consistency.

**Customer cost proxy:** Average per-person check at a full-service (sit-down) restaurant, excluding tip. Sources include NRA annual reports, Technomic Top 500 data, NPD Group CREST data, and Toast POS aggregate data (post-2015). I used the midpoint of casual dining ranges — not fine dining, not family dining — as the best representation of a "typical" full-service meal.

**Covers per cook-hour:** This is the most uncertain variable. NRA kitchen operations studies cite 10–15 as the full-service average. Historical estimates: 8–12 in the 1970s–80s (more manual prep, less equipment), rising to 12–18 in the 2010s–present (POS optimization, prep-forward kitchens, pre-portioned ingredients from broadline distributors like Sysco). I used conservative estimates that ramp gradually from 10 in the 1960s to 15 by 2023. **Sensitivity note:** If productivity is held constant at 12 covers/hr across all years, the ratio still declines from ~9.3% (1965) to ~5.9% (2023) — the story holds regardless, just less pronounced.

**Why not use total kitchen labor?** A kitchen typically has 3–5 line cooks plus prep cooks and dishwashers. Total BOH labor is 14–16% of revenue. But the metric asks for one "fundamental worker" — one cook's share — which isolates how much of the customer's dollar reaches the person actually making the food, independent of kitchen staffing levels.

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OES), SOC 35-2014 "Cooks, Restaurant," 1997–2023. https://www.bls.gov/oes/
- BLS Industry Wage Surveys for Hotels and Restaurants, Bulletins 1553 (1967), 1691 (1971), 1809 (1974), 2055 (1980)
- National Restaurant Association, Restaurant Industry Operations Report (annual, co-published with Deloitte), various years 1976–2024
- NRA, "State of the Restaurant Industry" annual reports, 2000–2024
- BLS Consumer Price Index, Series CUUR0000SEFV ("Food away from home") and CUUR0000SEFV02 ("Full service meals and snacks")
- Technomic, Top 500 Chain Restaurant Report, various years
- NPD Group (now Circana), CREST foodservice data, 2005–2020
- Toast, Restaurant Trends Report, 2022–2024
- USDA Household Food Consumption Survey, 1964
- Sylvia Lane, "Wages and Employment in the Restaurant Industry," Cornell Hotel and Restaurant Administration Quarterly (1968)

## Notes

- **Where does the rest go?** If the cook gets ~5% and food ingredients are ~30%, that's 35% accounted for. Non-cook labor (servers, hosts, bussers, managers, dishwashers) takes another 20–25%. Rent/occupancy is 6–10%. That leaves 3–5% net profit margin — famously thin. The cook's small share isn't because someone else is getting rich; the money is just spread across many cost centers.
- **Cook vs. server (ticket 037):** A server at a casual dining restaurant in 2023 earns $2.13–$7.25/hr in base wage plus tips averaging $20–30/hr, serving maybe 4–6 tables of 2–3 guests each. The server's effective per-meal compensation likely exceeds the cook's, even though the cook actually produces the product. This inversion is a perennial source of kitchen resentment.
- **Ghost kitchens and delivery apps:** DoorDash/UberEats commissions of 15–30% effectively raise the "customer cost" (customers pay delivery fees + markup) while none of that extra money reaches the cook. For delivery orders, the cook's ratio is even lower than shown here — perhaps 3–4%.
- **Post-COVID wage spike:** Cook wages jumped 21% from 2020–2023 ($14.08 to $17.02), the fastest 3-year wage growth in the data. But meal prices jumped 33% over the same period ($18 to $24), so the ratio still fell. Cooks got raises but the customer's bill rose faster.
- **The productivity double-edged sword:** Better equipment and pre-prepped ingredients mean cooks produce more covers per hour, which should in theory lower menu prices for customers. Instead, the savings were absorbed by rising rent, insurance, and non-cook labor costs — the cook's gains in productivity didn't translate to a larger share.

<!-- COMPLETE -->
