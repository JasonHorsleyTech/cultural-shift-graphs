# Ticket 006: Average Household Size, 1947–2024

## What to research

Collect annual **average number of persons per household** for the United States, 1947 through 2024.

This is needed to convert household income to per-capita income. Household size shrank from ~3.3 in the late 1940s to ~2.5 today, meaning raw household income comparisons overstate how much per-person income has kept up.

## Data source hierarchy

1. **Census Bureau Historical Table HH-4** — Households by size, 1960–present. Average can be computed from the distribution.
2. **Census Bureau Current Population Survey** — Annual average household size.
3. **FRED series USHSIZE** or similar — If it exists.
4. **Census decennial data** — For 1947–1959, use decennial figures (1950, 1960) and interpolate linearly. Note which years are interpolated.
5. **Historical Statistics of the United States** — For the earliest years.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Average Household Size | persons | Mean number of persons per household |
| Source | text | "Census CPS", "decennial", or "interpolated" |

## What "good data" looks like

- 77–78 rows (1947–2024)
- 1947: ~3.3–3.4
- 1960: ~3.3
- 1970: ~3.1
- 1980: ~2.8
- 1990: ~2.6
- 2000: ~2.6
- 2010: ~2.6
- 2020: ~2.5
- Should decline fairly smoothly, with most of the drop happening 1960–1985

## Result format

Follow the standard result format from plan.md. Mark interpolated years clearly in the Source column.

## Known issues

- Pre-1960 annual data may not exist. Decennial Census gives 1950 and 1960 values. Linear interpolation between them is acceptable but must be flagged.
- The definition of "household" is consistent throughout this period (all persons occupying a housing unit), so no major methodology breaks.
