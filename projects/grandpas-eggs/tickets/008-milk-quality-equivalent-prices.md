# Milk — Quality-Equivalent Prices 1995-2025

## What to research

Build a time series of the price for **quality-equivalent milk** (matching the 1955 baseline as defined in results/006-milk-quality-rubric.md) from the earliest available year to 2025.

**Read results/006-milk-quality-rubric.md first.** If it doesn't exist yet, use "organic whole milk from grass-fed cows" as the working definition.

## Target data points

Annual from the earliest year this product existed at mainstream retail (~mid-1990s for organic milk) to 2025.

## Data source hierarchy

1. **USDA ERS Organic Prices** — Organic milk prices and premiums over conventional. Published annually since ~2004.
2. **USDA Agricultural Marketing Service** — Organic dairy price reports.
3. **Industry reports** — Organic Trade Association, dairy industry market reports.
4. **Retail price surveys** — Academic studies comparing organic vs. conventional milk pricing.
5. **Historical organic grocery pricing** — Early Whole Foods / natural food store pricing if available.

## Important notes

- **rBST-free vs. organic vs. grass-fed:** These are three different tiers. rBST-free is now the default even for conventional milk at many retailers (since ~2008 when Walmart went rBST-free). Organic addresses feed and antibiotics. Grass-fed addresses the diet dimension specifically. The quality-equivalent may require grass-fed organic, which is a narrower and more expensive product than standard organic.
- **The organic milk market changed dramatically** around 2005-2010 when Horizon Organic and Organic Valley became mainstream grocery staples. Early organic milk was specialty-store-only.

## Output format

Follow the **Type 3: Price data** format from plan.md. Unit = "gallon".

## What "good data" looks like

- Prices from at least 2000 to 2025
- Clear distinction between organic, grass-fed, and grass-fed organic if data allows
- Premium ratio over conventional documented (typically 1.5x-2.5x)
