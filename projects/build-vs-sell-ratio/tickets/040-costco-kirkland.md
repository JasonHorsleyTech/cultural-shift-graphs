# Ticket 040 — Costco Kirkland Signature

## Product

A Kirkland Signature private-label item (representative — could be the rotisserie chicken, a 2-pack of Kirkland olive oil, paper towels, vodka, etc. Pick a typical packaged-goods item).

## Parent company

Costco Wholesale Corporation (NASDAQ: COST).

## Panel

consumer

## Segment to use

**Costco consolidated.** Kirkland is ~30% of Costco merchandise sales but isn't reported as a separate segment. Use Costco's consolidated cost structure as the proxy; note this is the Costco-as-retailer cost structure, not the supplier-side cost structure of who actually makes Kirkland products.

## Source hierarchy

1. **Costco FY2024 10-K** (fiscal year ending Sep 2024) — full income statement. Costco notably does NOT have a separate advertising line of any size — almost zero traditional advertising.
2. **Costco investor commentary** for Kirkland brand context (Costco talks about Kirkland as a margin-and-loyalty driver).
3. **Trade press** (Supermarket News, RetailDive) for category context.
4. **For comparison:** look at private-label industry benchmarks (Daymon, IRI).

## Specific caveats for this product

- **Crucial caveat:** Kirkland is private-label, often co-packed by major branded manufacturers (e.g., Kirkland vodka allegedly from Grey Goose distillery, etc.). The "build" for Kirkland on Costco's books is just the COGS Costco pays the supplier — which already includes the supplier's manufacturing markup. We're measuring Costco's retailer cost structure, not the manufacturer's.
- Costco famously runs near-zero advertising (under 0.2% of revenue in recent years). The membership model substitutes for advertising.
- Costco warehouses are retail real estate → sell per rubric. **But** the warehouses are also the distribution channel and are highly utilitarian. Note this gray zone — defaults to sell per rubric (storefronts).
- Membership fees are nearly all profit → flow through to operating income. Note this carefully — Costco's operating income / revenue is tiny but operating income / (revenue - merchandise COGS) is meaningful.
- Distribution is significant (Costco runs its own depots) → build.

## Output format

`results/040-costco-kirkland.md` per spec. Methodology must explain the retailer-vs-manufacturer view.

## What "good data" looks like

- Income statement cited; advertising line confirmed near-zero.
- Build_pct probably 92-98% — Costco is famously build-heavy / advertising-thin.
- Confidence: **medium-to-high** for Costco-as-retailer; the manufacturer-side cost structure of Kirkland items is invisible.
