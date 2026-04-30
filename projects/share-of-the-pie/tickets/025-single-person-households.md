# Ticket 025: Single-Person Household Share, 1960–2024

## What to research

Collect annual **percentage of all households that are one-person households**, 1960 through 2024.

Single-person households went from ~17% of all households in 1960 to ~29% today. This is relevant because per-capita household income for a single person equals their individual income — no economies of scale, no second earner to compensate. The rise of solo living partly explains why household-level metrics can be misleading.

## Data source hierarchy

1. **Census Bureau Historical Table HH-4** — Households by size. One-person count / total count.
2. **Census CPS ASEC** — Household type.
3. **Census decennial data** — For earlier years (1960, 1970).
4. **FRED** — May not have a direct series.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Single-Person Household Share (%) | percentage | One-person households / all households × 100 |

## What "good data" looks like

- 1960: ~15–17%
- 1970: ~17–18%
- 1980: ~23–24%
- 1990: ~25–26%
- 2000: ~26–27%
- 2010: ~27–28%
- 2024: ~28–30%
- Should show steady increase, with most of the growth 1960–1990

## Result format

Follow the standard result format from plan.md.

## Known issues

- Pre-1967 annual data may not be available. Decennial Census gives 1960, 1970 values. Interpolation between them is acceptable if flagged.
