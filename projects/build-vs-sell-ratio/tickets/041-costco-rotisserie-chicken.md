# Ticket 041 — Costco rotisserie chicken

## Product

The famous $4.99 Costco rotisserie chicken. **Explicit loss-leader case** — Costco openly subsidizes this product as a traffic-driver.

## Parent company

Costco Wholesale Corporation (NASDAQ: COST).

## Panel

consumer

## Segment to use

**Costco consolidated** (same as ticket 040), with the loss-leader status flagged in methodology. Costco doesn't break out chicken-specific economics.

## Source hierarchy

1. **Costco FY2024 10-K** — same as ticket 040.
2. **Trade press / industry analysis** of rotisserie chicken margin (Costco operates own poultry-processing plant in Nebraska partly to control chicken cost).
3. **Costco investor day color** on rotisserie chicken as traffic-driver.

## Specific caveats for this product

- This product's unit economics are deliberately bad — Costco loses money on each chicken to bring members into the store.
- The "build" cost on the chicken is largely accurate (poultry processing, prep labor, packaging). The "sell" cost looks artificially low because Costco doesn't advertise the chicken specifically.
- **Methodology note:** the rotisserie chicken is structurally similar to PS5 / Nespresso machine — the value comes from the broader ecosystem (driving membership renewals, basket-builder for surrounding purchases). For consistency with how we treated PS5 (restructured to PS system) and Nespresso (restructured to system), one could argue the chicken should be measured as part of the membership business. **But:** the chicken IS the SKU, and is iconic enough to deserve its own entry. Decision: keep at consolidated Costco level (same as Kirkland) and flag the loss-leader nature explicitly. The numerical answer may be similar to ticket 040.
- This ticket may end up with build_pct ≈ ticket 040. **That's OK and honest** — it's a single retailer with one cost structure; the chicken-specific story is contextual, not ratio-changing at the parent level.

## Output format

`results/041-costco-rotisserie-chicken.md` per spec. Methodology must call out the loss-leader nature and explain why we're reporting consolidated Costco numbers anyway.

## What "good data" looks like

- Same data as ticket 040 likely, with different methodology section explaining the loss-leader story.
- Build_pct probably 92-98%.
- Confidence: **medium-to-high**.
