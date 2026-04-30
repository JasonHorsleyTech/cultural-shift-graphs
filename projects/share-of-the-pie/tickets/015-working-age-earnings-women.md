# Ticket 015: Median Earnings, Full-Time Year-Round Women Age 25–64, 1960–2024

## What to research

Collect annual **median earnings for female full-time year-round workers aged 25–64** in nominal dollars, from the earliest available year through 2024.

Women's median earnings have risen dramatically both in absolute terms and relative to men's. This series is essential for understanding the dual-income household story: the median household's share of the pie shrank *despite* women entering the workforce en masse.

## Data source hierarchy

Same as ticket 014:
1. **Census Bureau Table P-36** — FTYR workers median earnings by sex.
2. **Census PINC-03** — Earnings by age and sex.
3. **Census P-60 reports** — Earlier years.
4. **FRED** — BLS weekly earnings series as fallback.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Median Earnings, Women 25–64 ($) | current US dollars | Median earnings, female FTYR workers age 25–64 |

**If age 25–64 is not available**, collect all-ages female FTYR median earnings and note it.

## What "good data" looks like

- Available from ~1960 through 2023/2024 (women's data may start later than men's if early surveys had fewer female FTYR workers)
- 1960: ~$3,200–$3,600 (women earned ~60% of men)
- 1980: ~$11,000–$12,000
- 2000: ~$27,000–$29,000
- 2023: ~$52,000–$56,000 (women now earn ~82–84% of men among FTYR workers)
- Should show steady upward trend, both nominal and relative to men

## Result format

Follow the standard result format from plan.md.

## Known issues

- In the 1950s–1960s, the number of female FTYR workers was small, so median estimates have wider confidence intervals. Note this.
- Same age-restriction caveat as ticket 014.
