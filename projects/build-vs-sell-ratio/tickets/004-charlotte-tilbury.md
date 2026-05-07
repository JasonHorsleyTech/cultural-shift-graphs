# Ticket 004 — Charlotte Tilbury cosmetics

## Product

A Charlotte Tilbury lipstick or Magic Cream (representative SKU of the prestige cosmetics brand).

## Parent company

Puig (Spanish luxury group, IPO'd Madrid 2024). Owns Charlotte Tilbury (acquired 2020), Jean Paul Gaultier, Paco Rabanne, Dries Van Noten, Penhaligon's.

## Panel

consumer

## Segment to use

**Puig Beauty & Fashion segment** (Charlotte Tilbury sits within prestige beauty). If Puig reports a more granular Charlotte Tilbury number after IPO, use it; otherwise use the parent's prestige beauty segment.

## Source hierarchy

1. **Puig 2024 Annual Report / IPO prospectus** (May 2024 IPO). The prospectus has detailed segment financials and was prepared for institutional investors — most useful single source.
2. **Estée Lauder 10-K** as a public peer for prestige cosmetics cost-structure benchmarks (advertising / sales / R&D as % of revenue in luxury beauty).
3. **WWD / Beauty Independent trade press** for brand-specific revenue estimates.
4. **L'Oréal Luxe segment** as a secondary peer.

## Specific caveats for this product

- Prestige cosmetics is famously sell-heavy: 20-30% of revenue on advertising, plus heavy retail/counter spend (department-store counters, Sephora endcaps). Expect sell% well above mass-market CPG.
- COGS for cosmetics is typically 20-30% of revenue — small physical product, big perceived value.
- Influencer marketing is now a major sell-side line that pre-Kantar tracking missed. Note in caveats.
- If Puig doesn't break out Charlotte Tilbury post-IPO, fall back to using the segment ratio with a low-confidence flag.

## Output format

`results/004-charlotte-tilbury.md` per spec.

## What "good data" looks like

- IPO prospectus financials cited specifically (page references where possible).
- Build_pct probably in the 30-50% range — this product is meant to anchor the sell-heavy end.
- Confidence: **medium** if IPO prospectus has segment data, **low** otherwise.
