# Eggs — Cheapest Retail Prices 1950-2025

## What to research

Build a time series of the **cheapest mainstream retail price for a dozen eggs** in the United States from 1950 to 2025.

"Cheapest mainstream retail" = the lowest-priced dozen eggs you'd find at a typical grocery store (Walmart, Kroger, Safeway). Not a specialty discount store, not a loss-leader sale price — the everyday shelf price for conventional eggs.

## Target data points

Annual data from 1950 to 2025. Monthly data from BLS is even better for the periods it covers — record annual averages.

## Data source hierarchy

1. **BLS Average Price Data (APU series)** — "Eggs, grade A, large, per dozen." Series ID: APU0000708111. Available monthly from approximately 1980. This is the primary source for 1980-2025.
2. **USDA Economic Research Service** — Historical retail egg prices. May extend further back than BLS.
3. **USDA Statistical Bulletins / Agricultural Statistics yearbooks** — Farm-level and retail egg prices going back to the 1900s. Available digitized through USDA archives.
4. **Historical Statistical Abstract of the United States** — Retail food prices table, available for most years from 1950 onward.

## Important notes

- **Avian flu spikes:** Egg prices spiked dramatically in 2015 and 2022-2023 due to avian influenza outbreaks. Record the actual prices (including spikes) and note them. The graph phase will decide on smoothing.
- **Before quality tiers existed (~pre-1990):** The cheapest egg WAS the only egg. The price reported here is also the quality-equivalent price for that period. Note this in the results.
- **Grade:** Use Grade A Large throughout for consistency. If older data doesn't specify grade, note the ambiguity.

## Output format

Follow the **Type 3: Price data** format from plan.md.

| Year | Price (nominal $) | Unit | Product Description | Source | Confidence | Notes |
|------|-------------------|------|---------------------|--------|------------|-------|

Unit = "dozen". Product Description = brief note on what was being measured (e.g., "Grade A large, conventional" or "Grade A large, all types").

## What "good data" looks like

- Continuous annual series 1950-2025 with no missing decades
- Prices match known checkpoints: ~$0.60/doz in 1950, ~$0.80 in 1970, ~$0.90 in 1990, ~$1.50 in 2010, ~$3-4 in 2025 (non-spike)
- Avian flu spike years (2015, 2022-2023) show elevated prices, documented
- Source transitions (USDA → BLS) are clearly documented
