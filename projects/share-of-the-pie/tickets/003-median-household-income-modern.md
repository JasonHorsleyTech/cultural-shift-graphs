# Ticket 003: Median Household Income (Nominal), 1967–2024

## What to research

Collect annual **median household income in nominal (current) dollars** for the United States, 1967 through 2024 (or latest available).

This is the primary numerator for the "naive" version of the share-of-pie ratio. Combined with household size (ticket 006), it produces per-capita median income.

## Data source hierarchy

1. **Census Bureau Historical Income Table H-6** — Median income of households by type. The "All races" row is what we want.
2. **FRED series MEHOINUSA646N** — Median household income in the US (nominal). Same Census data, convenient format.
3. **Census Table H-8** — Alternative if H-6 is hard to find.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year (income year, not survey year) |
| Median Household Income ($) | current US dollars | 50th percentile of household income distribution |

## What "good data" looks like

- ~57 rows (1967–2024)
- 1967: ~$7,100–$7,500
- 1980: ~$17,700–$18,000
- 2000: ~$42,000–$43,000
- 2019 (pre-pandemic peak): ~$68,700
- 2023/2024: ~$77,000–$81,000
- Should show general upward trend in nominal terms, with dips/plateaus around recessions

## Result format

Follow the standard result format from plan.md. Note:
- The Census redesigned the CPS in 2013, which created a small discontinuity. Mark this in the methodology notes.
- If the Census publishes both "old" and "new" methodology for the overlap year, include both and note the difference.

## Known issues

- Census income data runs with a ~1 year lag (the 2024 survey collects 2023 income). Note which income year each row represents.
- The 2013 CPS redesign added new income questions that raised measured income by ~3%. Some tables show two columns for 2013 (old vs new methodology). Record both if available.
