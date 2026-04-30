# Ticket 019: Employer-Sponsored Health Insurance Coverage Rate, 1960–2024

## What to research

Collect annual **percentage of workers (or population) covered by employer-sponsored health insurance**, 1960 through 2024.

The employer health cost per worker (ticket 018) only tells half the story. If fewer workers are covered, the aggregate impact on the labor force changes. Coverage peaked in the late 1990s and has declined since, as employers shifted to fewer covered workers paying higher premiums.

## Data source hierarchy

1. **Census Bureau CPS ASEC** — Health insurance coverage tables. Reports employer-sponsored coverage from ~1987.
2. **Kaiser Family Foundation** — Employer offer and take-up rates from 1999.
3. **BLS Employee Benefits Survey** — Historical coverage rates, available from the 1970s–1980s.
4. **EBRI (Employee Benefit Research Institute)** — Publishes historical coverage analyses going back further.
5. **For pre-1980:** Academic literature and Bureau of Labor Statistics bulletins.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| ESI Coverage Rate (%) | percentage | Share of non-elderly workers (or total pop) covered by employer-sponsored insurance |
| Population | text | "workers", "non-elderly", or "total" — note which denominator |

## What "good data" looks like

- Coverage should peak in the late 1970s or late 1990s (~70% of non-elderly population)
- Decline from ~70% to ~55% of non-elderly by 2013 (pre-ACA expansion)
- Partial recovery or stabilization post-2014 (ACA employer mandate)
- 2024: ~55–58% of non-elderly
- Pre-1980: patchy data, probably ~60–65%

## Result format

Follow the standard result format from plan.md. Note which population denominator is used for each source.

## Known issues

- Different sources use different denominators (workers, non-elderly adults, total population). Be consistent within any given stretch of years.
- The ACA (2014) changed the landscape: individual mandate, exchanges, and employer mandate all affected coverage rates.
