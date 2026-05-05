# Freight: Total Freight Ton-Miles 1990–2022

## What to Research

Total US freight ton-miles moved (all modes combined, with trucking and rail broken out), annually from 1990–2022. This is the **consumption metric** for the freight domain — did we move more or less stuff as freight became more efficient?

## Where to Look

1. **Primary:** BTS Freight Facts and Figures / National Transportation Statistics — Table on "US Ton-Miles of Freight by Mode."
2. **Secondary:** BTS Commodity Flow Survey (1993, 1997, 2002, 2007, 2012, 2017) — most authoritative but only every 5 years.
3. **Tertiary (rail):** AAR annual reports — Class I railroad revenue ton-miles (annual, precise).
4. **Tertiary (truck):** ATA American Trucking Trends — annual estimates of truck ton-miles.
5. **Recommended:** ORNL Transportation Energy Data Book has ton-miles by mode going back to ~1970.
6. **For total freight energy:** EIA transportation sector energy consumption by mode (diesel for trucks, diesel for rail).

## Scope

- **All domestic freight modes:** Truck, rail, pipeline, water (inland + coastal). Exclude air freight (tiny by ton-miles, though important by value).
- Report total and by mode (truck and rail are the big ones — they're ~85% of non-pipeline ton-miles combined).
- Also report total freight sector energy consumption (to complement the efficiency metric from ticket 022).

## Output Format

### Total US Freight Ton-Miles (All Modes)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** billions of ton-miles
**Source:** BTS National Transportation Statistics / ORNL
**Coverage:** All domestic freight modes (truck, rail, water, pipeline)
**Confidence:** medium (truck component has uncertainty)

### Truck Freight Ton-Miles

| Year | Value | Notes |
|------|-------|-------|

**Unit:** billions of ton-miles
**Source:** BTS / ATA / ORNL
**Confidence:** medium (estimated from surveys)

### Rail Freight Ton-Miles

| Year | Value | Notes |
|------|-------|-------|

**Unit:** billions of ton-miles
**Source:** AAR / BTS
**Confidence:** high

### Total Freight Transportation Energy

| Year | Value | Notes |
|------|-------|-------|

**Unit:** quads (quadrillion BTU)
**Source:** EIA / ORNL
**Coverage:** All freight modes
**Confidence:** medium-high

## Data Gaps

- Truck ton-miles between CFS years are estimated and may not perfectly align with CFS data points.
- Pipeline ton-miles are sometimes excluded from freight statistics (they're huge in absolute terms but mostly oil/gas, not "commerce").
- COVID (2020) effect was smaller for freight than passenger travel (goods still moved).

## Methodology Notes

- US freight ton-miles have been growing steadily, driven by:
  - E-commerce (more individual shipments, more truck miles)
  - Globalization (goods manufactured far from consumption → more domestic distribution miles after import)
  - Just-in-time inventory (smaller, more frequent shipments)
  - Economic growth generally
- The key ratio for our graph: freight ton-miles / GDP. If this is flat or declining, freight is becoming less "transport-intensive" per unit of economic output. If rising, we're shipping more per dollar of GDP.

## What "Good Data" Looks Like

- Total ton-miles (all modes): ~3,500-4,000 billion (1990) → ~5,000-5,500 billion (2019). About 40-50% growth.
- Truck: ~850-1,000 billion (1990) → ~1,500-1,800 billion (2019).
- Rail: ~1,000-1,100 billion (1990) → ~1,500-1,700 billion (2019).
- GDP grew ~90% (real) over the same period. So freight ton-miles grew ~40-50% while GDP grew ~90% — meaning freight intensity per GDP actually fell. This domain may show positive EDC (efficiency gains partially captured in lower freight-per-GDP).
- Total freight energy: relatively flat or modestly growing (~25-30%) despite 40-50% more ton-miles — reflecting real efficiency gains in the fleet.
