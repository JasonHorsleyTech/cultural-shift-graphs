# Bread — Cheapest Retail Prices 1950-2025

## What to research

Build a time series of the **cheapest mainstream retail price for a loaf of white bread** in the United States from 1950 to 2025.

Use white bread (1 lb loaf or closest standard size) throughout for consistency. This is the industrialized, preservative-laden product at the bottom of the bread shelf.

## Target data points

Annual from 1950 to 2025.

## Data source hierarchy

1. **BLS Average Price Data (APU series)** — "Bread, white, pan, per lb." Series ID: APU0000702111. Monthly from ~1980.
2. **USDA Economic Research Service** — Historical bread prices.
3. **USDA Agricultural Statistics yearbooks** — Retail bread prices going back further.
4. **Historical Statistical Abstract** — Retail food price tables.

## Important notes

- Loaf sizes have changed over time. A "standard loaf" was typically 1 lb in the 1950s-1970s. Modern cheap bread is often sold in 20 oz loaves. BLS tracks per-pound prices, which controls for this — use per-pound if available, or normalize to per-pound if reporting per-loaf.
- Bread is less volatile than eggs or beef, but wheat price spikes (2008, 2022) did affect retail bread prices modestly.

## Output format

Follow the **Type 3: Price data** format from plan.md.

Unit = "pound" (or "loaf" with weight noted). Product = "white bread, cheapest mainstream."

## What "good data" looks like

- Continuous annual series 1950-2025
- Prices: ~$0.14/lb in 1950, ~$0.25/lb in 1970, ~$0.70/lb in 1990, ~$1.50/lb in 2020
- Unit consistency (per-pound throughout, or clear conversion)
