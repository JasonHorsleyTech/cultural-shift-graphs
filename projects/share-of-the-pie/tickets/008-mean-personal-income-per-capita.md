# Ticket 008: Mean Personal Income Per Capita (BEA), 1947–2024

## What to research

Collect annual **per capita personal income** (mean, not median) from BEA national accounts, 1947 through 2024.

This is the numerator for the "mean sanity check" line. Since mean personal income = total personal income / population, and total personal income is a large fraction of GDP, this ratio against GDP per capita should be relatively stable (~70–80%). If it's stable while the median ratio declines, that confirms the divergence is distributional.

## Data source hierarchy

1. **FRED series A792RC0A052NBEA** — Per capita personal income. This is the go-to.
2. **BEA NIPA Table 7.1** — Per capita income, line 4 (personal income).
3. **BEA NIPA Table 2.1** — Total personal income (line 1), divided by population.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Per Capita Personal Income ($) | current US dollars | BEA personal income / midyear population |

## What "good data" looks like

- 77–78 rows (1947–2024)
- 1947: ~$1,300–$1,400
- 1970: ~$4,000–$4,200
- 2000: ~$30,000–$32,000
- 2024: ~$65,000–$70,000
- Should be roughly 70–80% of GDP per capita throughout (personal income is the largest component of GDP by income approach, but excludes corporate retained earnings and some government revenue)
- Should be monotonically increasing in nominal terms

## Result format

Follow the standard result format from plan.md.

## Known issues

- BEA personal income includes transfer payments (Social Security, Medicare, etc.). This is standard and appropriate for the "mean" line.
- BEA revises these figures; use the latest vintage.
