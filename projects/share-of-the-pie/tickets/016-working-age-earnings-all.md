# Ticket 016: Median Earnings, Full-Time Year-Round All Workers Age 25–64, 1960–2024

## What to research

Collect annual **median earnings for all full-time year-round workers aged 25–64** (both sexes combined) in nominal dollars, from the earliest available year through 2024.

This is the numerator for the primary graph line: working-age median earnings / GDP per capita. It blends the men's and women's stories into a single "what does the typical worker earn?" number.

## Data source hierarchy

1. **Census Bureau Table P-36** — FTYR workers median earnings, "Both sexes" row.
2. **Census PINC-03** — Earnings by age, "Both sexes."
3. **If only sex-specific data is available** from tickets 014/015, note this. The graph phase can compute a combined figure using labor force weights, but a direct Census "both sexes" number is preferred.
4. **FRED series LEU0252881600A** or similar — Median usual weekly earnings, full-time, both sexes (annualize by ×52). Different population but workable fallback.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Median Earnings, All Workers 25–64 ($) | current US dollars | Median earnings, all FTYR workers age 25–64 |

**If age 25–64 is not available**, collect all-ages both-sexes FTYR median earnings and note it.

## What "good data" looks like

- Available from ~1960 through 2023/2024
- Should be between the men's and women's medians, but closer to men's (since men are a larger share of FTYR workers, especially historically)
- 2023: ~$57,000–$62,000
- The trend should show: slow growth 1973–1995 (men flat, women rising), then acceleration as women's convergence lifts the combined median

## Result format

Follow the standard result format from plan.md. Note whether age 25–64 was achieved or all-ages was used.

## Known issues

- The combined median is NOT the average of men's and women's medians. It's the median of the combined distribution. This matters because the share of FTYR workers who are women has changed over time.
- If Census only publishes sex-specific medians, note this and the graph phase will handle it.
