# Ground Beef — Cheapest Retail Prices 1950-2025

## What to research

Build a time series of the **cheapest mainstream retail price for a pound of ground beef** in the United States from 1950 to 2025.

"Cheapest mainstream" = regular ground beef (typically 73/27 or 80/20 lean/fat), conventional, at a standard grocery store.

## Target data points

Annual from 1950 to 2025.

## Data source hierarchy

1. **BLS Average Price Data (APU series)** — "Ground beef, 100% beef, per lb." Series ID: APU0000703112. Monthly from ~1980. Also check "Ground chuck, 100% beef" (APU0000703111) for the cheapest tier.
2. **USDA Economic Research Service** — Retail beef prices, livestock and meat price spreads.
3. **USDA Agricultural Statistics yearbooks** — Historical retail meat prices.
4. **Historical Statistical Abstract** — Retail food price tables.

## Important notes

- **Cattle cycle volatility:** Beef prices have ~10-year cycles driven by herd expansion/contraction. Record raw annual prices; the graph phase handles smoothing.
- **Fat ratio matters:** The cheapest ground beef has shifted from ~70/30 to ~80/20 as the standard designation. If fat ratios changed, note the transition.
- **LFTB ("pink slime"):** Lean finely textured beef was widely used in ground beef from the 1990s-2012, reducing costs. The 2012 controversy led many retailers to drop it. This is a real quality-relevant cost change — note it.

## Output format

Follow the **Type 3: Price data** format from plan.md.

Unit = "pound". Product = "ground beef, conventional, regular/80-20."

## What "good data" looks like

- Continuous annual series 1950-2025
- Prices: ~$0.45/lb in 1950, ~$0.65/lb in 1970, ~$1.50/lb in 1990, ~$4.00/lb in 2020
- Cattle cycle peaks and troughs visible in the data
- Fat ratio changes documented
