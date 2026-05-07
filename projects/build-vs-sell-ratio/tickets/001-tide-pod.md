# Ticket 001 — Tide pod

## Product

Tide pod (P&G's iconic detergent brand).

## Parent company

Procter & Gamble (NYSE: PG).

## Panel

consumer

## Segment to use

**P&G Fabric & Home Care segment.** P&G reports five segments; Fabric & Home Care is the cleanest proxy for Tide's economics (Tide is by far the largest brand in the segment). Use the segment's revenue, segment operating income, and apply parent-level ratios for any line item not broken out at segment level.

## Source hierarchy

1. **P&G FY2024 10-K** (fiscal year ending June 30, 2024). Look for: segment revenue and operating income (Item 7 MD&A), advertising expense (in footnote — P&G does break this out for the consolidated company), R&D expense (income statement).
2. **P&G FY2024 Annual Report and CAGNY presentation deck** for any per-segment color on advertising/marketing intensity.
3. **Kantar Media measured-media spend, 2023 calendar year** for Tide-specific US advertising. Compare Tide's measured-media to P&G's Fabric & Home Care segment ad allocation; if Kantar's Tide number is materially different from segment-pro-rata, use Kantar.
4. **IBISWorld "Soap and Detergent Manufacturing" (NAICS 32561)** as a sanity check on industry-typical advertising/sales ratios.

## Specific caveats for this product

- P&G's consolidated advertising expense is disclosed but allocation across segments isn't. Default: pro-rate by segment revenue, then adjust if Kantar shows Tide's brand-specific measured-media is significantly off the pro-rata.
- Trade promotion and slotting fees for CPG are partially netted against revenue. Note this in methodology.
- Distribution: P&G self-distributes most CPG via wholesale; counted as build per rubric.
- Customer support is minimal for a CPG good — fold into "other COGS" or set to zero with a note.

## Output format

Write result to `results/001-tide-pod.md` using the exact YAML frontmatter spec in `plan.md`. Body must include build/sell/overhead breakdowns and a Methodology notes section.

## What "good data" looks like

- Segment revenue, segment operating income, and parent advertising expense all cited with the specific line item from the 10-K.
- Build_pct ends up in the 60-80% range (this would match napkin math from angle-01); if it's outside that band, double-check classification before submitting.
- Confidence: **high** if 10-K data is fresh and Kantar agrees; **medium** if material triangulation was needed.
