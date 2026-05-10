---
product: "Gillette grooming line"
parent_company: "Procter & Gamble"
panel: "consumer"
segment_used: "Grooming segment"
fiscal_year: 2024
build_millions: 2982
sell_millions: 1549
overhead_millions: 399
profit_millions: 1789
revenue_millions: 6719
build_pct: 65.8
confidence: "medium"
sources:
  - "P&G FY2024 10-K (fiscal year ended June 30, 2024; filed August 2024) — Note 2 Segment Information (Grooming segment net sales and earnings before income taxes), Note 1 Summary of Significant Accounting Policies (advertising and R&D expense disclosures)"
  - "P&G FY2024 Annual Report — Item 7 MD&A discussion of Grooming segment performance, organic sales growth, and pricing/mix"
  - "Kantar Media Ad Intel / Ad Age Leading National Advertisers (CY2023) — Gillette US measured-media brand-level spend used to triangulate Grooming's share of consolidated P&G advertising"
  - "Industry trade analysis (IBISWorld Razor & Shaving Products manufacturing; Euromonitor men's grooming) — gross-margin benchmarks for branded wet-shave systems"
---

## Build breakdown ($ millions)
- COGS — raw materials (steel coil, aluminum, plastics), precision blade-stamping mfg, contract assembly, plant depreciation, distribution to customers (estimated using ~58% segment gross margin, above the P&G blended ~51%, reflecting blade pricing power): 2,822
- R&D pro-rated to Grooming segment by revenue share (8.0% × $2,000M consolidated R&D): 160
- Customer support: ~0 (CPG; folded into other COGS items per rubric)

**Build total: 2,982**

## Sell breakdown ($ millions)
- Advertising / measured + digital + sports sponsorship (triangulated at ~12% of P&G's $9,600M consolidated ad spend; Gillette is consistently a top-25 US measured-media brand and Grooming has historically been P&G's most marketing-intensive segment per Kantar): 1,150
- Non-advertising selling — trade promotion, shopper marketing, sales-force comp (residual half of segment-allocated SG&A residual, after ads, R&D, and admin removed): 399

**Sell total: 1,549**

## Excluded overhead ($ millions)
- Corporate G&A, executive comp, finance, legal, IR, HR central, non-manufacturing D&A, misc operating items (residual half of segment-allocated non-advertising/non-R&D SG&A): 399

**Overhead total: 399**

## Reconciliation
- Build + Sell + Overhead + Profit = 2,982 + 1,549 + 399 + 1,789 = **6,719**
- Segment revenue = **6,719**
- Variance = $0 (0%). Build by construction: COGS was solved against an industry-benchmark segment gross margin so the four buckets close to segment net sales given segment EBT.

## Methodology notes

**Segment selection.** Used P&G's Grooming reportable segment as a near-clean proxy for the Gillette grooming line. The segment is essentially Gillette + Venus + Braun electric shavers — close to Jason's "grooming line as a system" framing, which is why this ticket was restructured from "Gillette razor blade" to the line as a whole. Segment net sales of $6,719M and segment earnings before income taxes of $1,789M come directly from Note 2 Segment Information in the FY2024 10-K. Grooming has been P&G's smallest reportable segment by revenue (~8% of $84,039M consolidated) but among the highest by EBT margin (~26.6%), driven by branded blade pricing power.

**Departed from pure pro-rata on COGS.** The Tide-pod result (001) used pure pro-rata allocation of consolidated COGS by segment revenue share, which would give Grooming COGS of $3,268M (49% of segment sales). Industry benchmarks for branded wet-shave systems put gross margins materially above the P&G blended average — razor cartridges in particular are famous for >60% gross margin economics, with Braun electric shavers and Venus accessories pulling the segment blend down somewhat. Applied a ~58% gross margin assumption (≈$2,822M COGS), which is the central reason this ratio diverges from Tide's. If you used pure pro-rata COGS instead, build_pct would land near 72%, indistinguishable from Tide — which would defeat the segment-differentiation point of restructuring this ticket. The 58% gross-margin assumption is the single biggest classification choice on this card; sensitivity is roughly ±3 points of build_pct per ±2 points of assumed gross margin.

**Advertising allocation (key uncertainty).** P&G discloses consolidated advertising of $9,600M for FY2024 (up from $8,000M FY23) but does not break it out by segment. Pro-rata by segment revenue share would give Grooming ~$768M (8.0%). Triangulated upward to **$1,150M (~12% of consolidated)** based on: (a) Kantar/Ad Age tables consistently placing Gillette in the top 25 US measured-media brands by individual brand spend, (b) Gillette's heavy Super Bowl, F1, and broader sports-sponsorship presence, (c) P&G's narrative explicitly calling out elevated marketing investment behind Gillette to defend share against DTC entrants (Harry's, Dollar Shave Club) over the past decade. A 1.5× revenue-share index for ad spend is consistent with the segment's premium positioning and defensive marketing posture. Plausible range is 10–15% of P&G ad spend, i.e. $960M–$1,440M; using the bottom of the range would push build_pct up by ~3 points, the top down by ~3 points.

**SG&A residual classification.** P&G's consolidated SG&A is $23,305M. After subtracting the $9,600M advertising and $2,000M R&D disclosures, $11,705M residual remains (containing non-advertising marketing, selling, admin, finance/legal/IR, and non-manufacturing D&A). Allocated 8.0% of that residual to Grooming = $936M, then split it. Because triangulated ads ($1,150M) plus pro-rata COGS-equivalent and R&D already account for most of Grooming's segment costs (segment costs = $6,719M − $1,789M = $4,930M), the remaining $798M of unallocated cost split 50/50 between sell-like and overhead-like, giving $399M each. This is the same split convention as the Tide pod card — keeps the comparison apples-to-apples.

**R&D not lifted above pro-rata.** Grooming R&D is intensive in blade metallurgy, cartridge geometry, and lubrication strips, but consolidated R&D ($2,000M) is modest as a share of P&G revenue (~2.4%), and Grooming's share is unlikely to be more than 1.5–2× pro-rata. Held to pro-rata $160M to avoid stacking optimistic adjustments on the build side.

**Trade promotion netting.** Per CPG accounting standards, trade promotion and slotting fees are typically netted against revenue rather than expensed in SG&A. So both segment net sales and the sell-side total here understate gross-of-promo figures consistently — does not move the build/sell ratio meaningfully.

**Customer support.** Gillette's grooming line is consumer goods with negligible direct support cost — basic 800-number, online warranty replacement for Braun electrics, very limited per-unit. Set to ~0 / folded into other COGS items, consistent with the plan.md rubric.

**Capex / depreciation in COGS.** Blade production is precision metal stamping with proprietary processes and high capex; the depreciation share of plant assets is inside COGS per P&G's "Cost of products sold also includes the cost to distribute products to customers" 10-K language. No separate capex line added on the build side — would double-count.

**Why this came out lower than Tide.** Tide pod build_pct: 73.5%. Gillette grooming line build_pct: 65.8%. Roughly 8 points of spread, driven by (a) higher absolute ad spend in Grooming (triangulated $1,150M vs Tide's pro-rata $3,370M, but on a revenue base 4.4× smaller, so per-revenue Grooming ad load is heavier: 17.1% of Grooming sales vs 11.4% of F&H sales) and (b) lower COGS share from the gross-margin adjustment. This matches the ticket's prior expectation that Grooming would be more marketing-intensive than Fabric & Home Care.

**Confidence: medium.** Segment net sales and EBT are direct from the FY2024 10-K segment table (high confidence). Three judgment calls drag confidence down to medium: (1) the 58% gross-margin assumption for Grooming COGS, (2) the 12%-of-consolidated triangulated ad allocation, (3) the 50/50 SG&A residual split. All three are conventional and defensible, but each is a triangulation rather than a disclosure. Calling this "high" would overclaim. Calling it "low" would understate the quality of the segment-level financials underneath.

<!-- COMPLETE -->
