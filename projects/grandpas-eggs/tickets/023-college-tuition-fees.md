# State College — Tuition and Fees 1960-2025

## What to research

Build a time series of **average annual tuition and required fees at public four-year institutions** for in-state students, from 1960 to 2025. This is Line A — the standard sticker price.

## Target data points

Annual from 1963 to 2025 (College Board data starts ~1963). For 1960-1962, use NCES or other historical sources if available.

## Data source hierarchy

1. **College Board — Trends in College Pricing** — Annual publication with average published tuition and fees at public four-year institutions. The standard source, widely cited. Available from academic year 1963-64 onward.
2. **NCES Digest of Education Statistics** — Table 330.10 (or similar): average tuition and required fees. Overlaps with College Board data but may extend slightly further back.
3. **Historical Statistical Abstract** — Higher education cost tables for pre-1963 data.

## Important notes

- **Tuition and fees ONLY.** Do not include room and board, books, or other costs of attendance. Tuition + required fees is the clean, consistent number.
- **In-state only.** Out-of-state tuition is a different product.
- **Public four-year only.** Not community college, not private.
- **Published (sticker) price, not net price.** The net-price-after-aid story is important but is a different graph. This ticket captures what the university charges.
- **Structural breaks to annotate:**
  - GI Bill era (1944-1956): effectively free for veterans, distorts the market
  - State funding golden age (1960s-1970s): tuition low because states funded most costs
  - State funding cuts begin (1980s): tuition starts rising faster than inflation
  - Federal loan expansion (1990s-2000s): fuels further tuition increases (Bennett hypothesis)
  - Post-2008 acceleration: states cut higher ed budgets during Great Recession and never fully restored them

## Output format

Follow the **Type 3: Price data** format from plan.md.

Unit = "academic year". Product = "average published tuition and required fees, public 4-year, in-state."

## What "good data" looks like

- Continuous annual series 1963-2025 from College Board or NCES
- Pre-1963 data points if available (even 2-3 points from NCES historical tables)
- Prices: ~$175 in 1960, ~$600 in 1975, ~$2,000 in 1990, ~$5,000 in 2005, ~$11,000 in 2025
- Structural break years noted
