# Ticket 016 — iPhone

## Product

iPhone (any current model — using the family rather than a specific SKU).

## Parent company

Apple Inc. (NASDAQ: AAPL).

## Panel

consumer

## Segment to use

**Apple iPhone product category.** Apple discloses revenue by product category (iPhone, Mac, iPad, Wearables, Services) but does NOT disclose operating expenses by product category. So:

- **Revenue:** iPhone-specific (disclosed).
- **COGS:** estimate using Apple's products vs. services gross margin disclosure (Apple breaks out products GM% vs. services GM%; iPhone is in products).
- **R&D, SG&A, advertising:** allocate using iPhone's share of products revenue.

## Source hierarchy

1. **Apple FY2024 10-K** (fiscal year ending September 28, 2024). Segment by category in revenue, segment by geography in MD&A, R&D and SG&A consolidated only.
2. **Apple investor presentations and earnings calls** for any color on per-category margins.
3. **Counterpoint Research / IDC** for iPhone unit volumes and ASP estimates.
4. **Kantar Media** for iPhone-specific US ad spend (Apple is one of the largest advertisers; brand-level spend is well tracked).

## Specific caveats for this product

- **R&D speculation issue:** Apple's R&D includes Vision Pro, the rumored car (cancelled 2024 but ate years of R&D), AR glasses, etc. Allocating all to iPhone overstates iPhone R&D. **Default approach per plan.md:** allocate by revenue share, accept overstatement, note in caveats.
- Apple Stores are retail real estate → sell per rubric. Apple discloses store count and rent expense indirectly.
- Apple Care is customer support → build.
- Foxconn manufacturing payments flow through COGS — captured correctly as build.
- iPhone is unusual: the cost structure measured at parent level is roughly representative of the product (unlike Coke, where the can isn't on the parent's books).

## Output format

`results/016-iphone.md` per spec. Methodology notes must explain the revenue-share allocation and R&D overstatement.

## What "good data" looks like

- Revenue, gross margin (products), R&D, SG&A all cited from the 10-K with allocation math shown.
- Build_pct probably 80-90% — Apple is genuinely build-heavy in dollar terms (massive COGS on Foxconn) despite being marketing-iconic.
- Confidence: **medium** (allocation assumptions material).
