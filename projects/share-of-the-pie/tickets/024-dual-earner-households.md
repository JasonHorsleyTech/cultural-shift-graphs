# Ticket 024: Dual-Earner Household Share, 1960–2024

## What to research

Collect annual **percentage of married-couple households with both spouses employed**, 1960 through 2024.

The shift from one-earner to two-earner families is a major confound in the "share of pie" story. Household income stayed closer to GDP per capita partly because families added a second earner. If you zoom in on single-earner families, the decline is steeper.

## Data source hierarchy

1. **BLS "Families" data** — From the Current Population Survey. Published annually in "Employment Characteristics of Families" (Table 4 or similar). Shows married-couple families by employment status of husband and wife.
2. **Census CPS ASEC** — Household type by employment status.
3. **FRED** — May not have a direct series, but BLS data is on FRED.
4. **BLS Historical Tables** — For earlier years.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Dual-Earner Share (%) | percentage | Married-couple families where both husband and wife are employed / all married-couple families × 100 |

## What "good data" looks like

- 1960: ~35–40% (most married women didn't work)
- 1970: ~45–50%
- 1980: ~55–58%
- 1990: ~60–63%
- 2000: ~63–65%
- 2010: ~58–60% (recession impact)
- 2024: ~60–63%
- Should show rapid increase 1960–1990, then plateau with cyclical dips during recessions

## Result format

Follow the standard result format from plan.md.

## Known issues

- Pre-1967 data may be scarce. BLS annual "Families" data starts in the late 1960s for most tables. Earlier figures may need to be estimated from decennial Census data on women's employment status by marital status.
- Definition matters: "employed" includes part-time. A family with two part-time earners is counted as dual-earner.
- This only covers married-couple families, not all households. Cohabiting couples and single-parent families are excluded.
