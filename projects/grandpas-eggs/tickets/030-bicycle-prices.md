# Bicycle — Prices 1950-2025 (Cheapest and Quality-Equivalent)

## What to research

Build time series for both **cheapest** and **quality-equivalent** bicycle prices in the United States from 1950 to 2025. Since bicycle price data is sparser than food data, both tiers are combined in one ticket.

**Read results/029-bicycle-quality-rubric.md first** to understand the quality-equivalent definition.

## Target data points

Every 5-10 years from 1950 to 2025. Bicycle retail price data is harder to find than food prices — catalog snapshots at key years are fine.

## Data to collect

**Line A (cheapest new adult bicycle at a mainstream retailer):**
- 1950s-1990s: Cheapest adult bike in Sears catalog
- 2000s-2025: Cheapest adult bike at Walmart/Target

**Line B (quality-equivalent — the "standard good bike a normal person buys"):**
- 1950s-1990s: Mid-range adult bike in Sears catalog (the Schwinn-equivalent)
- 2000s-2025: Entry-level bike-shop bike (Trek FX, Giant Escape, Specialized Sirrus equivalent)

## Data source hierarchy

1. **Sears catalog archives** — Best source for 1950s-1993. Record cheapest and mid-range adult bicycles with descriptions.
2. **Montgomery Ward catalog** — Alternate/supplement to Sears.
3. **BLS CPI "Bicycles" component** — Index only, but useful for trend direction.
4. **Schwinn company history / price lists** — Schwinn dominated mid-century American cycling. Their catalog prices are well-documented in cycling history books.
5. **Modern retail pricing** — Current prices from Walmart (cheapest) and Trek/Giant/Specialized (quality-equivalent).
6. **Bicycle industry reports** — NBDA (National Bicycle Dealers Association) annual reports sometimes include average selling prices.

## Important notes

- **The Walmart BSO problem:** The cheapest new bike in 2025 (~$100-150 at Walmart) is arguably a different product category than the cheapest new bike in 1955. It's designed to be disposable. If the rubric addresses this, note which line the BSO belongs on.
- **The 10-speed/mountain bike booms:** The 1970s 10-speed craze and 1980s-90s mountain bike revolution dramatically expanded the price range. Before the 1970s, the gap between cheapest and best was modest. After, it exploded.
- **Accessories that were standard:** 1955 bikes came with fenders, chain guard, sometimes lights. Modern equivalent accessories add $50-100 to the purchase price. Note this but don't add it to the price — keep it consistent (bike only).

## Output format

Follow the **Type 3: Price data** format from plan.md. Include both lines in one result:

| Year | Cheapest Price ($) | Cheapest Description | QE Price ($) | QE Description | Source | Confidence |
|------|-------------------|---------------------|-------------|----------------|--------|------------|
| 1955 | 40 | Sears 26" cruiser, single-speed | 55 | Schwinn Hornet, 3-speed | catalog | high |
| 2025 | 120 | Walmart Huffy, 7-speed | 500 | Trek FX 1, 21-speed hybrid | retail | high |

## What "good data" looks like

- At least 8 data points spanning 1950-2025
- Product descriptions at each data point showing how both tiers evolved
- Sears catalog entries for the 1950s-1980s
- The data should tell the "progress wins" story (or reveal that it doesn't)
