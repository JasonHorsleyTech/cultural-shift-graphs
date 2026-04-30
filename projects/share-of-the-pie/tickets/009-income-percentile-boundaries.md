# Ticket 009: Household Income Percentile Boundaries (P20, P50, P80, P95), 1967–2024

## What to research

Collect annual **household income at the 20th, 50th, 80th, and 95th percentiles** in nominal dollars, 1967 through 2024.

These boundaries define the distribution. When divided by GDP per capita, they show whether the shrinking share is concentrated at the bottom (bottom quintile collapsing while top holds steady) or universal (everyone's share shrinking, but bottom more than top).

## Data source hierarchy

1. **Census Bureau Historical Income Table H-1** — Income limits for each fifth and top 5% of households. This is the primary source. It gives the upper income limit at the 20th, 40th, 60th, 80th percentiles, and the lower limit of the top 5%.
2. **Census Table H-3** — Mean income by quintile (not the same as boundaries, but useful cross-check).
3. **FRED** — May have individual series for some percentile boundaries.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| P20 ($) | current US dollars | Upper income limit of the lowest quintile |
| P50 ($) | current US dollars | Median (should match ticket 003) |
| P80 ($) | current US dollars | Upper income limit of the fourth quintile |
| P95 ($) | current US dollars | Lower income limit of the top 5% |

## What "good data" looks like

- ~57 rows (1967–2024)
- P20 should always be well below median; P80 well above; P95 well above P80
- The P80/P20 ratio should grow over time (rising inequality)
- Example for 2023: P20 ~$30k, P50 ~$80k, P80 ~$160k, P95 ~$260k (rough)
- P50 should closely match the median household income from ticket 003

## Result format

Follow the standard result format from plan.md.

## Known issues

- Census Table H-1 gives quintile *upper limits* (the income below which 20%, 40%, etc. of households fall). This is exactly what we want for P20 and P80.
- The 2013 CPS redesign may create discontinuities. Note if the Census publishes dual estimates for the overlap year.
- "P50" from this table should match ticket 003's median. If it doesn't, note the discrepancy.
