# Ticket 002 — Gillette grooming line

## Product

**Gillette grooming line** (handles + blades + Venus + Braun electric shavers as a system). Restructured from "Gillette razor blade" because razors-and-blades is a cross-subsidy and the standalone razor SKU misrepresents the economics. The line as a whole is the honest unit.

## Parent company

Procter & Gamble (NYSE: PG).

## Panel

consumer

## Segment to use

**P&G Grooming segment.** This segment is essentially Gillette + Venus + Braun. Use segment revenue and segment operating income directly.

## Source hierarchy

1. **P&G FY2024 10-K** — Grooming segment revenue, operating income, segment-specific MD&A discussion of advertising and innovation.
2. **P&G CAGNY presentation deck** for any per-segment color.
3. **Kantar Media measured-media spend** for Gillette specifically (US 2023). Compare to Grooming segment pro-rata of consolidated P&G ad spend.
4. **Industry data** — IBISWorld razor/shaving products sector for benchmarks.

## Specific caveats for this product

- Grooming segment has historically been a heavier-marketing segment for P&G (Gillette TV ads, Super Bowl spots, sports sponsorships). Expect sell% higher than Fabric & Home Care.
- Capex is meaningful — blade manufacturing is precision metal stamping with proprietary processes. Don't underweight build.
- Direct-to-consumer competitors (Harry's, Dollar Shave Club) eroded Gillette's share over the past decade — P&G responded with heavy ad spend. The current ratio reflects that defensive posture.
- Customer support is near-zero for blades.

## Output format

Write result to `results/002-gillette-grooming-line.md` with YAML frontmatter per `plan.md`. Body must include build/sell/overhead breakdowns and Methodology notes.

## What "good data" looks like

- Segment revenue and operating income cited from the 10-K segment table.
- Build_pct likely lower than Tide (Grooming is more marketing-intensive). If it ends up identical to Tide, suspect the segment differentiation didn't take.
- Confidence: **medium-to-high** — segment-level data is solid, but advertising allocation requires triangulation.
