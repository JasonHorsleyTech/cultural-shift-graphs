# Ticket 014: Median Earnings, Full-Time Year-Round Men Age 25–64, 1960–2024

## What to research

Collect annual **median earnings for male full-time year-round workers aged 25–64** in nominal dollars, from the earliest available year through 2024.

This is one component of the refined primary metric. Male earnings are the classic "breadwinner" benchmark — comparing this to GDP per capita shows whether the traditional single-earner's share of the pie has shrunk.

## Data source hierarchy

1. **Census Bureau Table P-36** — Full-time, year-round workers: median earnings by sex. May have age-specific breakdowns or may need to use all-ages as proxy.
2. **Census PINC-03** — Earnings of full-time year-round workers by age and sex. Detailed age brackets.
3. **Census P-60 reports** — For earlier years, published median earnings for year-round full-time workers.
4. **FRED series LES1252881600Q** or similar — BLS median usual weekly earnings (can annualize, but this is a different population).

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Median Earnings, Men 25–64 ($) | current US dollars | Median earnings, male FTYR workers age 25–64 |

**If age 25–64 is not available**, collect all-ages male FTYR median earnings and note that it includes younger (16–24) and older (65+) workers. The 25–64 restriction is preferred but all-ages is an acceptable fallback.

## What "good data" looks like

- Available from ~1960 (possibly 1955 from P-60 reports) through 2023/2024
- 1960: ~$5,400–$6,000
- 1973 (peak in real terms for men): ~$11,000–$12,000
- 2000: ~$38,000–$40,000
- 2023: ~$62,000–$66,000
- In real terms, male median earnings were famously flat from 1973 to ~2015. In nominal terms they rose, but slower than GDP per capita.

## Result format

Follow the standard result format from plan.md. Note whether the age restriction (25–64) was achievable or whether all-ages was used instead.

## Known issues

- "Full-time year-round" means 35+ hours/week, 50+ weeks/year. This definition has been consistent, but the share of workers who qualify has changed.
- Pre-1967 data comes from P-60 reports and may use slightly different definitions. Note any breaks.
