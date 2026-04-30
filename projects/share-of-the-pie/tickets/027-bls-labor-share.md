# Ticket 027: BLS Labor Share of Nonfarm Business Output, 1947–2024

## What to research

Collect annual **labor share of nonfarm business sector output**, 1947 through 2024.

This is the macro-level validation for the entire project. Labor share = total labor compensation / total output. If labor share is declining, it confirms that the "share of pie" story isn't an artifact of how we measure income — it's a real structural shift in how the economy distributes its output between labor and capital.

## Data source hierarchy

1. **BLS Major Sector Productivity and Costs** — Labor share (compensation / output). FRED series PRS85006173 or similar.
2. **FRED search "labor share"** — Multiple series available. Look for nonfarm business sector.
3. **BLS Productivity and Costs press releases** — Historical tables.
4. **Federal Reserve FRED** — May have BEA-derived labor share measures too.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| Labor Share (%) | percentage | Total labor compensation / nonfarm business output × 100 |

## What "good data" looks like

- 77–78 rows (1947–2024)
- 1947–2000: relatively stable around 63–66% (the "constant labor share" era)
- Post-2000: declining to ~56–58%
- The 2000–2010 decline is one of the most studied macroeconomic shifts of the 21st century
- Should show cyclicality (labor share rises in recessions because wages are sticky but output drops)

## Result format

Follow the standard result format from plan.md.

## Known issues

- The BLS labor share for nonfarm business is the standard measure, but it doesn't perfectly match "median income / GDP" because:
  1. It includes all compensation (wages + benefits), not just wages
  2. It covers the nonfarm business sector only (~75% of GDP), not the whole economy
  3. It's an average (mean), not median
- Despite these differences, if BLS labor share is declining and our median-to-GDP ratio is declining, the stories corroborate each other. If they diverge, something interesting is happening.
