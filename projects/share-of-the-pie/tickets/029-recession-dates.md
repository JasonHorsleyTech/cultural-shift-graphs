# Ticket 029: NBER Recession Dates and GDP Impact, 1947–2024

## What to research

Collect all **NBER-defined recession periods from 1947 to 2024**, with peak-to-trough GDP decline for each.

This is needed for chart annotations. The share-of-pie ratio spikes artificially during recessions (GDP drops but income is sticky), so recession shading helps the viewer understand these temporary distortions.

## Data source hierarchy

1. **NBER Business Cycle Dating Committee** — Official recession start/end dates. Published at nber.org/research/data/us-business-cycle-expansions-and-contractions.
2. **FRED series USREC** — Binary recession indicator (1 = recession month). Can derive start/end dates.
3. **BEA GDP data** — For peak-to-trough magnitude.

## What to collect

| Column | Unit | Description |
|--------|------|-------------|
| Recession Name | text | Common name or date range |
| Peak Date | YYYY-MM | Business cycle peak (start of recession) |
| Trough Date | YYYY-MM | Business cycle trough (end of recession) |
| Duration (months) | integer | Peak to trough |
| Peak-to-Trough Real GDP Change (%) | percentage | Real GDP decline from peak to trough |
| Years Affected | text | Calendar years with at least one quarter of recession (for the isRecession flag) |

## What "good data" looks like

Post-1947 recessions:
- 1948–1949, 1953–1954, 1957–1958, 1960–1961
- 1969–1970, 1973–1975, 1980, 1981–1982
- 1990–1991, 2001, 2007–2009, 2020

That's approximately 12 recessions. Each should have:
- Clear start/end dates
- Duration ranging from 2 months (2020) to 18 months (2007–2009)
- GDP decline ranging from -0.3% to -5.1%

## Result format

Follow the standard result format from plan.md. Also provide a simple list of all calendar years that should be flagged as recession years (any year where at least one month was in recession).

## Known issues

- The 2020 recession was only 2 months long (shortest ever) but the GDP impact was dramatic. Include it.
- Some recessions span calendar years (e.g., 2007–2009). Both/all affected years should be flagged.
