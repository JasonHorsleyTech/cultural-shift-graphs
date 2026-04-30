# Ticket 001: GDP Per Capita (Nominal), 1947–2024

## What to research

Collect annual **nominal GDP per capita** for the United States, 1947 through 2024 (or latest available year).

This is the denominator for the primary metric. Every other series in this project gets divided by this number to produce a "share of the pie" ratio.

## Data source hierarchy

1. **FRED series A792RC0A052NBEA** — GDP per capita (current dollars). This is the BEA's official number republished by FRED. Start here.
2. **BEA NIPA Table 7.1** — Per capita product and income, line 1. Same data, different interface.
3. **World Bank / OECD** — Fallback only if FRED/BEA is unavailable.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Year | integer | Calendar year |
| GDP Per Capita ($) | current US dollars | Nominal GDP divided by midyear population |

## What "good data" looks like

- 77–78 rows (1947 through 2024)
- Values should be monotonically increasing in nominal terms (no drops except *maybe* 2009 and 2020)
- 1947 should be roughly $1,500–$1,800
- 1970 should be roughly $5,000–$5,500
- 2000 should be roughly $36,000–$38,000
- 2024 should be roughly $82,000–$90,000

## Result format

Follow the standard result format from plan.md. Include:
- The full year-by-year table
- The exact FRED series ID or BEA table number used
- Any notes on revisions or methodology changes

## Known issues

- BEA revises GDP figures periodically. Use the latest available vintage.
- 2024 may be preliminary or only available through Q3. Note which quarters are included if the full year isn't final.
