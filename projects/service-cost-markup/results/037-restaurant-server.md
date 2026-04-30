# Full-Service Dining — Restaurant Server

## Summary

The server's ratio is one of the most stable in the entire dataset, hovering between 14% and 18.5% across 55 years. This stability exists despite the federal tipped minimum wage being frozen at $2.13/hr since 1991 — the tipping mechanism acts as an automatic cost-of-living adjustment that few other industries enjoy. The ratio peaked around 1980 (~18.5%) when the base wage was relatively generous, and has gradually settled to ~14-15% as the frozen base wage's contribution eroded from ~8% of the ratio to ~2%. Rising tip norms (12% actual average in 1970 → 20% in 2024) partially compensated, but didn't fully offset the base wage collapse.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1970 | 1.75/hr | 2.52 | per meal, per person (incl. tip) | 4/hr | 17.4 | low |
| 1975 | 2.50/hr | 3.67 | per meal, per person (incl. tip) | 4/hr | 17.0 | low |
| 1980 | 4.20/hr | 5.67 | per meal, per person (incl. tip) | 4/hr | 18.5 | med |
| 1985 | 5.00/hr | 7.36 | per meal, per person (incl. tip) | 4/hr | 17.0 | med |
| 1990 | 5.90/hr | 9.14 | per meal, per person (incl. tip) | 4/hr | 16.2 | med |
| 1995 | 6.50/hr | 10.29 | per meal, per person (incl. tip) | 4/hr | 15.8 | med |
| 2000 | 7.25/hr | 11.79 | per meal, per person (incl. tip) | 4/hr | 15.4 | med |
| 2005 | 7.90/hr | 13.61 | per meal, per person (incl. tip) | 4/hr | 14.5 | med |
| 2010 | 9.00/hr | 15.97 | per meal, per person (incl. tip) | 4/hr | 14.1 | med |
| 2015 | 10.50/hr | 16.96 | per meal, per person (incl. tip) | 4/hr | 15.5 | med |
| 2020 | 11.50/hr | 19.83 | per meal, per person (incl. tip) | 4/hr | 14.5 | med |
| 2024 | 16.23/hr | 27.60 | per meal, per person (incl. tip) | 4/hr | 14.7 | high |

## Methodology

**Ratio formula:** Server hourly compensation (base wage + tips) / (Customer total out-of-pocket per meal × customers served per server per hour).

This measures what fraction of the total revenue a server generates goes to that server. The denominator includes the tip because it is part of the customer's total cost; the tip also appears in the numerator as part of the server's compensation. The base wage, paid by the restaurant from menu-price revenue, appears only in the numerator.

### Server compensation (Worker Comp)

**Pre-2000:** Derived from the federal tipped minimum wage (base) plus estimated tip income. Tip income = average actual tip rate × average meal cost × customers per hour × tip retention rate (after tipouts to bussers, bartenders, hosts, runners).

**2000–2024:** Anchored to BLS Occupational Employment and Wage Statistics (OES) data for occupation 35-3031 (Waiters and Waitresses). BLS wage data explicitly includes tips. Key anchor points:
- May 2008 BLS OES mean: $9.26/hr (median estimated ~$8.50)
- 2013–2016 NELP/ROC study median: $10.11/hr including tips
- May 2022 BLS OES median: ~$14.00/hr
- May 2024 BLS OES median: $16.23/hr

Intermediate years interpolated. BLS figures likely undercount cash tip income, so the true ratio may be 1-2 percentage points higher than reported.

### Customer cost (total out-of-pocket per meal)

Average full-service meal cost per person derived from the BLS Consumer Price Index for Food Away from Home (CUUR0000SEFV), scaled to an anchor of $23.00 per person in 2024 (consistent with National Restaurant Association casual dining data, e.g. Olive Garden fiscal 2024 average check of $23/person). The tip component uses historical average actual tip rates, which differ from stated norms due to non-tippers, low tippers, and rounding:

| Era | Stated norm | Estimated actual average |
|-----|------------|------------------------|
| 1970s | 10–15% | ~12% |
| 1980s | 15% | ~13% |
| 1990s | 15–18% | ~14–15% |
| 2000s | 15–18% | ~16–17% |
| 2010s | 18–20% | ~17.5–18.5% |
| 2020s | 20%+ | ~19.5–20% |

Actual tip rate trajectory corroborated by NPD Group data showing 14.4% in 1982 rising to 18.9% in 2016.

### Customers per server per hour

Set at 4 across all years. This reflects a typical full-service casual dining environment: 4 tables at a time, ~2.5 guests per table, ~75-minute turnover, averaged over the full shift (including setup, sidework, and slow periods). Calibrated against the 2024 BLS figure: at 4 customers/hr, the model yields $16.30/hr (vs. BLS $16.23) with a tip retention rate of ~77%.

### Tip retention

Servers tip out a portion of tips to support staff. Retention rates have trended downward as tip pooling has become more common:
- 1970–1985: ~90% (minimal tipout norms)
- 1990–2000: ~85%
- 2005–2015: ~80%
- 2020–2024: ~77%

### Why this proxy

The tipping mechanism makes restaurants structurally different from almost every other industry in this dataset. The customer directly sets roughly 85% of the server's compensation in real time. The restaurant's role in server pay is minimal — just the $2.13/hr base in most states. This means the ratio is inherently self-correcting: as menu prices rise, tip amounts rise proportionally, automatically adjusting the server's compensation to inflation. No other industry in this project has this characteristic.

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OES), Occupation 35-3031 — Waiters and Waitresses, May 2024 (https://www.bls.gov/oes/current/oes353031.htm)
- Bureau of Labor Statistics, Occupational Outlook Handbook — Waiters and Waitresses (https://www.bls.gov/ooh/food-preparation-and-serving/waiters-and-waitresses.htm)
- Bureau of Labor Statistics, Consumer Price Index — Food Away from Home (CUUR0000SEFV) via FRED (https://fred.stlouisfed.org/series/CUUR0000SEFV)
- CPI Food Away from Home historical data via in2013dollars.com (https://www.in2013dollars.com/Food-away-from-home/price-inflation)
- Congressional Research Service, "The Tip Credit Provisions of the Fair Labor Standards Act" (R43445), via EveryCRSReport (https://www.everycrsreport.com/reports/R43445.html) — complete federal tipped minimum wage history
- U.S. Department of Labor, History of Changes to the Minimum Wage Law (https://www.dol.gov/agencies/whd/minimum-wage/history)
- U.S. Department of Labor, Minimum Wages for Tipped Employees — Historical Tables (https://www.dol.gov/agencies/whd/state/minimum-wage/tipped/History)
- National Employment Law Project (NELP), "Wait Staff and Bartenders Depend on Tips for More Than Half of Their Earnings" — median $10.11/hr including tips (2013-2016 data) (https://www.nelp.org/insights-research/wait-staff-and-bartenders-depend-on-tips-for-more-than-half-of-their-earnings/)
- NPD Group restaurant tipping data, as cited in Michael Lynn, "How Have U.S. Restaurant Tips Changed Over Time?" (International Journal of Hospitality Management, 2024) — 14.4% actual average in 1982 to 18.9% in 2016
- National Restaurant Association, industry statistics and average check data (https://restaurant.org/research-and-media/research/industry-statistics/)
- Economic Policy Institute, "Twenty-Three Years and Still Waiting for Change" (https://www.epi.org/publication/waiting-for-change-tipped-minimum-wage/)

## Notes

- **The frozen base wage story is real but overblown in isolation.** The federal tipped minimum has been $2.13/hr since 1991 — 33 years without a change. This sounds catastrophic, but its contribution to total server comp has shrunk from ~45% (1970) to ~13% (2024). The server was never really dependent on the base wage; they were always primarily dependent on tips. The base wage's collapse from 8% of the ratio to 2% is noticeable but not devastating because tips auto-adjust.

- **State-level variation is enormous.** Seven states (CA, OR, WA, NV, MT, MN, AK) require the full state minimum wage before tips. In California, the server base wage is $16.00/hr (2024). A California server's ratio would be significantly higher — probably 20-22%. The data above reflects the federal/national median, which blends high-base-wage states with $2.13 states.

- **Tip income is systematically underreported.** BLS wages "include tips" but rely on employer records (OES survey) or worker self-reports (CPS). Cash tips are notoriously underreported to both employers and the IRS. The true server hourly comp is almost certainly higher than BLS figures, meaning the true ratio is likely 1-3 percentage points above what's shown.

- **"Tipflation" is real but mostly affects the customer, not the ratio.** Tipping norms have risen from 10-15% to 18-20%, and POS tablet prompts now suggest 20-25%. But since higher tips increase both the numerator (server comp) and the denominator (customer total cost), the ratio impact is small. The main effect is a modest increase in the tip-contribution portion of the ratio.

- **Tip pooling/sharing is the quiet threat.** The growing practice of tip pooling — and 2018 DOL rule changes allowing employers to include back-of-house in tip pools — redistributes tips away from servers to cooks, dishwashers, etc. This erodes the server's individual ratio even as the total tipped-worker ratio remains stable. The declining tip retention rate (90% → 77%) captures this trend.

- **Counter-service "tipping" is a different phenomenon entirely.** The expansion of tipping to counter-service (iPad prompts at coffee shops, fast-casual, etc.) is not captured in this analysis. Those workers are not servers in the traditional sense, and the tip goes to a fundamentally different role. This ticket covers full-service sit-down dining only.

- **COVID-19 created a temporary spike.** The 2020-2024 period saw both higher tip percentages (customers tipping generously for "essential workers") and severe labor shortages driving up total compensation. The jump from $11.50 to $16.23 in four years (~41% increase) is historically unusual and reflects pandemic-era dynamics.

<!-- COMPLETE -->
