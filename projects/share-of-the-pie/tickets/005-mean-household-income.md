# Ticket 005: Mean Household Income (Nominal), 1967–2024

## What to research

Collect annual **mean (average) household income in nominal dollars** for the United States, 1967 through 2024.

The gap between mean and median household income is a direct measure of income skew. If mean income tracks GDP per capita while median doesn't, it proves that growth is flowing to the top. The mean line serves as a "sanity check" — it should be relatively stable as a share of GDP.

## Data source hierarchy

1. **Census Bureau Historical Income Table H-6** — Has both median and mean household income by race. Use "All races."
2. **FRED series MAFAINUSA646N** — Mean family income, or similar mean household series.
3. **Census Table H-3** — Mean income by quintile and top 5% (can compute overall mean from this).

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Mean Household Income ($) | current US dollars | Average household income |

## What "good data" looks like

- ~57 rows (1967–2024)
- Mean should always be higher than median (income distribution is right-skewed)
- The mean/median ratio should grow over time (~1.2 in 1967 → ~1.4+ today), reflecting increasing skew
- 1967: ~$8,500–$9,000
- 2000: ~$57,000–$60,000
- 2023/2024: ~$110,000–$115,000

## Result format

Follow the standard result format from plan.md. Note the 2013 CPS redesign discontinuity if applicable.
