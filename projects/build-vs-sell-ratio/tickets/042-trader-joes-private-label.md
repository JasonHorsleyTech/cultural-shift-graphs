# Ticket 042 — Trader Joe's private-label item

## Product

A representative Trader Joe's private-label item (e.g. Joe-Joe's cookies, Mandarin Orange Chicken, Everything But The Bagel seasoning). Trader Joe's stocks ~80% private label across the store, so this is a "house brand retailer" entry analogous to ticket 040 (Costco Kirkland) but for a private, opaque company.

## Parent company

Trader Joe's Company (private — owned by the German Aldi Nord family trust via Albrecht-family holdings; structurally separate from US Aldi which is Aldi Süd).

## Panel

consumer

## Segment to use

**Trader Joe's consolidated, triangulated.** No public filings. Use Aldi Nord group disclosures (limited German group filings) only as background — Trader Joe's is operationally and financially distinct. Most reliable approach: use Costco/Kroger private-label cost structures as a comparable proxy and adjust for known TJ's differences (smaller store footprint, no advertising, no membership fees).

## Source hierarchy

1. **Trade press estimates** of Trader Joe's revenue (frequently cited at ~$16-20B annually, ~560 stores, very high sales-per-square-foot). Sources: Forbes, Supermarket News, Progressive Grocer.
2. **Industry benchmarks for grocery retailers** with high private-label penetration — IBISWorld "Supermarkets and Grocery Stores" (NAICS 445110), Daymon Worldwide private-label studies.
3. **Comparable cost structure**: Costco (ticket 040) and ALDI US disclosures where available. Kroger 10-K for a public benchmark on private-label-heavy grocery economics (Kroger reports ~30% private-label penetration vs TJ's ~80%).
4. **Trader Joe's own commentary**: limited press interviews with leadership; brand is famously secretive. Note that Trader Joe's reportedly does ~zero traditional advertising (only the Fearless Flyer mailer and word-of-mouth).

## Specific caveats for this product

- **Confidence is low by design.** This entry exists to represent the "secretive private retailer with extreme private-label mix" cell of the matrix. Be honest — no audited number is available.
- Like Kirkland, the "build" cost is the COGS Trader Joe's pays the supplier (which already includes the supplier's manufacturing markup). We're measuring the retailer's cost structure, not the manufacturer's.
- Trader Joe's runs near-zero traditional advertising. The Fearless Flyer mailer + minimal in-store signage = effectively all the "sell" spend you can identify. Most marketing is organic word-of-mouth + cult-brand reputation.
- No membership fees (unlike Costco) — so the operating model is even more dependent on merchandise margin.
- Stores are modestly sized retail real estate → sell per rubric. Note that TJ's footprint is much smaller per store than Costco/Kroger, which changes the absolute sell number but not necessarily the ratio.
- **Per the plan's confidence rubric, this is "low" — flag explicitly.**

## Output format

Write result to `results/042-trader-joes-private-label.md` per the YAML frontmatter spec in `plan.md`. Methodology section must explain:
1. Why we used proxy-based estimation rather than primary sources.
2. Which public peer's cost structure we anchored to (Kroger or Costco).
3. The directional adjustments made for TJ's-specific factors (no advertising, no membership, smaller stores).
4. The honest acknowledgment that the absolute numbers are estimates within ±10pp of build_pct.

## What "good data" looks like

- Revenue and store count cited from a trade-press source with year.
- Build_pct probably 92-97% (similar to Costco directionally — extreme build-heavy because near-zero advertising).
- Confidence: **low** — say so in frontmatter and explain in methodology.
- Methodology note: "this entry's value is the contrast it provides, not its precision."
