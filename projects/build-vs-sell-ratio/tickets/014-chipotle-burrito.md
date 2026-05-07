# Ticket 014 — Chipotle burrito

## Product

A standard burrito at Chipotle.

## Parent company

Chipotle Mexican Grill (NYSE: CMG).

## Panel

consumer

## Segment to use

**Chipotle consolidated (single-segment).** Crucial: Chipotle is ~100% corporate-owned (no franchising), so the parent-rubric ratio actually reflects burrito unit economics. This is why we picked Chipotle over McDonald's.

## Source hierarchy

1. **Chipotle FY2024 10-K** — single segment, detailed unit economics in MD&A.
2. **Chipotle earnings calls and investor presentations** — Chipotle reports restaurant-level operating margin, food/labor/occupancy as % of revenue. This is gold for our purposes.
3. **National Restaurant Association** for fast-casual benchmarks.

## Specific caveats for this product

- Restaurant cost structure is unusual — labor is a huge build cost (food prep, line cooks). In our rubric, labor on the line counts as build (without it, no burrito).
- Occupancy (rent on the storefront) is the main ambiguity — under our rubric it's "retail real estate (storefronts, not factories)" → sell. **But for a restaurant the storefront IS the factory.** Note this choice and split the call: occupancy at a fast-casual is closer to "production facility" than "advertising real estate." Counted as build with explicit note.
- Marketing for Chipotle is relatively low (5-7% of revenue) — they rely on word-of-mouth and digital. Less TV.
- App and digital ordering technology counts as a build/sell hybrid — most counts as build (it's the product delivery channel).
- Unit-level ratios are reported clean, which makes Chipotle a high-confidence entry.

## Output format

`results/014-chipotle-burrito.md` per spec. Methodology notes should explicitly address occupancy classification.

## What "good data" looks like

- Restaurant-level operating margin cited from 10-K.
- Build_pct probably 80-90% — physical product, lots of labor, not ad-heavy.
- Confidence: **high**.
