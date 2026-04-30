# Men's Suit — Cheapest Retail Prices 1950-2025

## What to research

Build a time series of the **cheapest mainstream retail price for a men's two-piece suit** in the United States from 1950 to 2025.

"Cheapest mainstream" = the lowest-priced new suit at a department store or major retailer. Not secondhand, not a costume. A suit a man would wear to a job interview.

## Target data points

Every 5 years from 1950 to 2025, or more frequent if data allows. Suit prices don't change as frequently as food — 5-year intervals are fine.

## Data source hierarchy

1. **Sears catalog / JCPenney catalog archives** — Best source for 1950s-1993 (Sears stopped general merchandise catalogs in 1993). Record the cheapest men's two-piece suit listed, with product description.
2. **BLS CPI Apparel indices** — "Men's suits" component. Useful for TRENDS between catalog data points but doesn't give absolute prices.
3. **Department store archives and retail surveys** — Post-1993, use JCPenney, Macy's, Men's Wearhouse pricing as proxies.
4. **Modern fast-fashion pricing** — H&M, Zara, Amazon Essentials for the current cheapest tier.
5. **Academic studies on apparel pricing trends.**

## Important notes

- **The Sears catalog is the killer source.** Digitized catalogs are available for most years from 1950-1993. Each entry includes price, fabric description, and sometimes construction details. This is the backbone of the series.
- **Post-1993 is harder.** Without the catalog, cheapest-suit pricing requires retail surveys or industry reports.
- **Suit prices dropped dramatically** in nominal terms relative to other goods starting in the 1990s as manufacturing moved offshore. A $400 suit in 1985 became a $200 suit in 2005 in nominal dollars.
- **Definition consistency:** Two-piece (jacket + trousers), men's, new. Not separates sold individually.

## Output format

Follow the **Type 3: Price data** format from plan.md.

Unit = "suit (two-piece)". Product Description should note fabric/construction if available from catalog.

## What "good data" looks like

- Sears catalog entries for at least 5 data points between 1955-1993
- Post-1993 data from retail surveys or equivalent sources
- Product descriptions included so the quality trajectory is visible alongside the price
