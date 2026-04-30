# Television — Cheapest Purchase Prices 1950-2025

## What to research

Build a time series of the **cheapest mainstream television purchase price** in the United States from 1950 to 2025. This is a "progress wins" commodity — the price dropped dramatically while quality improved.

## Target data points

Every 5 years from 1950 to 2025. TV technology had major generational shifts (B&W → color → flat panel → LCD → smart TV), so note what product category represents "cheapest TV" in each era.

## Data source hierarchy

1. **Sears/Montgomery Ward catalogs** — Best source for 1950s-1993. Record the cheapest TV set listed, with screen size and specs. The catalogs show the full product range, making it easy to identify the entry-level model.
2. **BLS CPI "Television" component** — Index, not absolute price. Useful for the deflation trend but doesn't give dollar amounts.
3. **Consumer Electronics Association (now CTA) data** — Average selling price for TV sets. Published annually for the modern era.
4. **Consumer Reports historical pricing** — Sometimes cited in technology histories.
5. **Modern retail pricing** — Current cheapest mainstream TV at Walmart/Amazon/Best Buy.

## Important notes

- **Technology transitions matter.** The "cheapest TV" in 1955 was a 12" B&W tabletop. In 1975, a 13" color TV. In 2005, a 27" CRT. In 2025, a 43" 4K smart TV. Each era's cheapest product is a radically different device. This is the POINT — the cheapest TV kept getting better.
- **Screen size normalization?** Don't try to normalize to price-per-inch. The graph should show what you actually pay for "a TV" at each point in time, not a size-adjusted price. The size increase is part of the progress story.
- **The 1950s TV was a major purchase.** A TV cost $200-500 in 1955 dollars — equivalent to several months of mortgage payments. This was a luxury item becoming a necessity.

## Output format

Follow the **Type 3: Price data** format from plan.md.

Unit = "one TV set". Product Description is CRITICAL — note screen size, type (B&W/color/LCD/LED), and any key specs. The product description tells the progress story.

| Year | Price (nominal $) | Unit | Product Description | Source | Confidence | Notes |
|------|-------------------|------|---------------------|--------|------------|-------|
| 1955 | 150 | TV set | 12" B&W tabletop, Sears Silvertone | Sears catalog | high | |
| 2025 | 200 | TV set | 43" 4K LED smart TV | Walmart.com | high | |

## What "good data" looks like

- At least 10 data points 1950-2025
- Product descriptions that show the technology progression
- Sears catalog citations for the early decades
- Clear downward price trend despite dramatic quality improvement
