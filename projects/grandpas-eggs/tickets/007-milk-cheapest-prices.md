# Milk — Cheapest Retail Prices 1950-2025

## What to research

Build a time series of the **cheapest mainstream retail price for a gallon of whole milk** in the United States from 1950 to 2025.

Use whole milk throughout for consistency, even though reduced-fat became the best-selling type in the 1990s-2000s. The quality-equivalent comparison is against 1955 whole milk.

## Target data points

Annual from 1950 to 2025.

## Data source hierarchy

1. **BLS Average Price Data (APU series)** — "Milk, fresh, whole, fortified, per gallon." Series ID: APU0000709112. Monthly from ~1980.
2. **USDA Economic Research Service** — Retail dairy prices, may go further back.
3. **USDA Agricultural Statistics yearbooks** — Farm and retail milk prices, historical.
4. **Historical Statistical Abstract** — Retail food price tables.

## Important notes

- Milk pricing is heavily influenced by federal milk marketing orders (price regulation). Note any significant policy changes that affected retail prices.
- The shift from home delivery to store purchase (1950s-1970s) affected pricing. Early data may include delivery prices; later data is store-bought. Note the transition.
- Use whole milk prices throughout, not the cheapest available (which might be store-brand skim).

## Output format

Follow the **Type 3: Price data** format from plan.md.

Unit = "gallon". Product = "whole milk, conventional."

## What "good data" looks like

- Continuous annual series 1950-2025
- Prices: ~$0.85-0.95/gal in 1950, ~$1.30 in 1970, ~$2.30 in 1990, ~$3.50-4.00 in 2020
- Federal marketing order changes noted
- Delivery vs. store-bought transition documented
