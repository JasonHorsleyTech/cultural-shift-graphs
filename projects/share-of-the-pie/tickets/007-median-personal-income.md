# Ticket 007: Median Personal Income (Individual), 1947–2024

## What to research

Collect annual **median personal income for individuals** (not households) in nominal dollars, 1947 through 2024.

This provides an individual-level view that avoids household composition issues entirely. One person, one income, no division by household size needed.

## Data source hierarchy

1. **FRED series MEPAINUSA672N** — Real median personal income (inflation-adjusted). If only real is available, note the base year and collect as-is; the graph phase can cross-reference with CPI.
2. **Census Bureau Table P-8** — Total money income of persons, median, by sex. Use "Both sexes" total.
3. **Census Bureau PINC-01** — Selected characteristics of people, income ranges. Median can be extracted.
4. **Census P-60 reports** — For earlier years.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Median Personal Income ($) | current US dollars (preferred) or constant dollars with base year noted | 50th percentile of individual income, all persons 15+ with income |

## What "good data" looks like

- As many years as available (ideally 1947–2024, but may only go back to 1967 or 1974)
- 2023 value: ~$40,000–$42,000 (nominal)
- Should be lower than median household income (households often have multiple earners)
- Should show a gender convergence story if broken out by sex

## Result format

Follow the standard result format from plan.md. Critically important: note whether values are nominal or real (inflation-adjusted), and if real, what base year.

## Known issues

- FRED's MEPAINUSA672N is real (2022 dollars), not nominal. If you can only find the real series, collect it and note the deflator/base year. The graph phase can convert.
- "Persons with income" excludes those with zero income (children, non-working adults). This is the standard Census definition but it's worth noting.
- Pre-1974 individual income data may be limited. Note the first reliable year.
