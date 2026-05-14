---
product: "Pack of Oreos"
parent_company: "Mondelez International"
panel: "consumer"
segment_used: "Mondelez consolidated (FY2024). Oreo is a global brand spanning all four reportable segments. Brand-level cost-line decomposition is not disclosed; consolidated figures are used as the cleanest anchor with the North America segment shown as a comparison point. Oreo brand global net revenues are estimated at ~$4.2B in FY2024 (per Mondelez CEO Dirk Van de Put's Feb 2023 LinkedIn announcement that Oreo had crossed $4B, plus ~5% mid-single-digit growth assumed for 2024)."
fiscal_year: 2024
build_millions: 22554
sell_millions: 4585
overhead_millions: 2958
profit_millions: 6345
revenue_millions: 36441
build_pct: 83.1
confidence: "medium"
sources:
  - "Mondelez International FY2024 10-K (fiscal year ended December 31, 2024; filed February 5, 2025) — Consolidated Statements of Earnings, segment reporting (Note on Reportable Segments), Note on Significant Accounting Policies (revenue recognition with trade promotion netting, advertising production cost policy)"
  - "Mondelez International Q4/FY2024 Earnings Release (February 4, 2025) — full-year segment net revenues, segment operating income, capex, free cash flow"
  - "Mondelez International FY2023 10-K — prior-year R&D disclosure ($346M FY2023); used to interpolate FY2024 R&D estimate"
  - "Statista 'Mondelez International ad spend 2013-2024' — worldwide measured-media advertising of $1.67B (FY2022), $2.06B (FY2023); used as basis for FY2024 advertising estimate"
  - "Dirk Van de Put LinkedIn post (February 2023) — Oreo crossed $4B in global net revenues milestone; basis for estimating Oreo brand contribution"
  - "Mondelez 2024 CAGNY presentation context — 'power brand' strategy concentrating marketing on top-tier brands including Oreo, Cadbury, Milka, Toblerone"
---

## Build breakdown ($ millions)

Consolidated allocations follow Mondelez's reported income-statement structure. R&D is included within reported SG&A but disclosed separately in 10-K notes; allocated to build per plan.md rubric.

- Cost of sales (raw materials including cocoa/wheat/sugar/dairy, packaging, manufacturing labor and overhead, plant depreciation, distribution costs to customers — Mondelez bundles outbound logistics into COGS per their accounting policy): 22,184
- Research and development (FY2024 estimate based on FY2023 disclosure of $346M and FY2025 indication of ~$400M; product reformulation, new SKU development, packaging engineering): 370
- Manufacturing capex (depreciation share): already inside cost of sales (consolidated D&A is approximately $900M-$1.0B, the majority flowing through COGS)
- Distribution / logistics: already inside cost of sales (Mondelez self-distributes via DSD in some markets and warehouse delivery in others; both lines hit COGS)
- Customer support: 0 (CPG; minimal customer-support function)

**Build total: 22,554**

## Sell breakdown ($ millions)

- Advertising and consumer promotion expense (FY2024 estimate of ~$2,100M based on FY2023 worldwide ad spend of $2.06B per Statista, modestly increased to reflect continued power-brand investment with some moderation due to cocoa cost pressure): 2,100
- Sell-side share of residual SG&A (50% of $4,969M residual after subtracting allocated R&D and advertising from consolidated $7,439M SG&A — sales force comp, brand-management comp, non-advertising marketing programs, in-store activation, large-account selling to retail and convenience channels, DSD field-sales overhead): 2,485

**Sell total: 4,585**

## Excluded overhead ($ millions)

- Overhead-side share of residual SG&A (50% of $4,969M — corporate G&A, finance, legal, IT, ERP-related operating expenses): 2,485
- Asset impairment, exit, and other charges (FY2024 reported gross profit minus SG&A is $6,818M vs. operating income of $6,345M — implying ~$473M of below-SG&A charges including the disclosed $153M Q3 intangible-asset impairment for biscuit/candy brands in Europe/AMEA/LatAm and other restructuring/exit costs): 473

**Overhead total: 2,958**

## Reconciliation

- Build + Sell + Overhead + Profit = 22,554 + 4,585 + 2,958 + 6,345 = **$36,442M**
- Mondelez consolidated net revenues = **$36,441M**
- Variance = $1M (rounding; effectively forced to balance by the residual-SG&A back-solve and impairment plug)

Segment cross-check (sum of segment operating income): $532 (LatAm) + $1,192 (AMEA) + $2,068 (Europe) + $2,492 (NA) = **$6,284M**, vs. consolidated operating income $6,345M. The $61M gap reflects unallocated corporate items and reconciling charges that Mondelez excludes from segment OI but includes in consolidated OI.

## Methodology notes

**Consolidated vs. North America framing.** The ticket explicitly allowed either Mondelez consolidated or the Mondelez North America segment as the anchor, noting that "Oreo is a global brand — the parent's overall ratio is reasonable." Used consolidated as the headline because Oreo is in fact Mondelez's flagship global power brand: it is a market leader in the United States, a top-three biscuit brand in China and India (built through the LU/Kraft/Cadbury heritage portfolios), and a major presence across Europe and Latin America. The North America segment alone would understate the brand's reach. As a sanity check, the segment-by-segment operating margins for FY2024 are: NA 22.84%, AMEA 16.34%, Europe 15.54%, LatAm 10.80%. NA is by far the highest-margin segment — using NA-only would tilt the operating-profit and overhead allocations more favorably. The build_pct headline is fairly stable across the choice of anchor (consolidated 83.1%; if computed at the NA segment level with proportional consolidated-cost allocations it lands near 84-85%) because COGS and gross margin are similar across segments; the variation is mostly in operating-margin / profit-allocation, which lives in the "profit" bucket, not the build/sell numerator/denominator.

**Brand-level economics for Oreo are not disclosed.** Mondelez does not break out brand-level COGS, advertising, or operating profit. The $4B+ global revenue milestone for Oreo announced by CEO Dirk Van de Put in February 2023 is the most authoritative public anchor; with ~5% growth (consistent with Mondelez's 4.3% organic growth in 2024) Oreo is plausibly at $4.2-4.5B in FY2024 net revenues — roughly 11-12% of Mondelez consolidated revenue. Per the ticket's caveats, Mondelez's "power brand" strategy concentrates marketing on top brands like Oreo, Cadbury, Milka, and Toblerone — so Oreo's brand-specific advertising-to-revenue ratio is likely higher than parent-average (parent-average is ~5.8%; brand-specific for power brands likely 8-10%). If we ran a brand-specific Oreo allocation with $4,200M revenue and a 1.5x parent ad intensity (~$363M brand advertising), proportional COGS at $2,557M, proportional R&D at $43M, and proportional residual SG&A allocated 50/50, the brand-specific build_pct lands at ~80% — modestly lower than consolidated 83.1% because the elevated brand-ad intensity shifts mix toward sell. This is a meaningful but not dominant adjustment; reported the consolidated number for consistency with how Cheerios was handled (parent/segment level, with brand-specific caveat noted).

**Advertising — not directly disclosed at the line-item level in the FY2024 income statement; estimated from Kantar/Statista triangulation.** Mondelez does NOT separately itemize advertising as a line on the consolidated income statement — it is bundled inside SG&A. The FY2023 worldwide advertising figure of $2.06B (per Statista) is the most recent direct disclosure available in the public sources accessed. FY2022 was $1.67B; the year-over-year jump of 23% reflected the 2023 power-brand investment ramp. For FY2024, in the absence of a directly disclosed figure, the estimate is ~$2,100M — slight increase reflecting continued power-brand investment, with some assumed moderation due to cocoa cost pressure on margins. Per Mondelez investor commentary throughout 2024, the company maintained brand investment despite raw-material headwinds, but did not signal a step-change increase. The estimate could reasonably range from $1,900M to $2,300M; this $400M of uncertainty moves the consolidated build_pct by about 1.5 percentage points (lower advertising → higher build_pct because sell denominator shrinks). Reported as "medium" confidence partly for this reason.

**R&D — interpolated from disclosed adjacent years.** FY2023 R&D was $346M (disclosed in FY2023 10-K notes). FY2025 R&D appears around $400M based on third-party reports. FY2024 estimate is $370M, midway through that trajectory. R&D is small relative to revenue (1.0%) — typical for CPG snacks where innovation is recipe, packaging, and category extensions rather than capital engineering. The R&D classification is "build" per plan.md rubric. Even if R&D were materially higher (e.g., $500M), the build_pct moves by less than 0.5 percentage points.

**Cost of sales is the dominant build driver — and contains some sell-adjacent items.** Mondelez's accounting policy (per multi-year 10-K disclosures) records shipping/distribution as part of cost of sales, similar to General Mills. This means COGS captures both manufacturing AND outbound logistics. For a multi-channel CPG company, the DSD (direct-store-delivery) operations in some markets — the field force that visits convenience stores, gas stations, and small-format retailers to merchandise and re-stock — show up partly in COGS (delivery driver labor and trucks) and partly in SG&A (sales-rep labor, brand-merchandiser labor). Per plan.md, distribution and merchandising labor are classified as build (delivery) vs. sell (selling activity). Because these are bundled, the actual sell number is somewhat understated; if 5-10% of "COGS distribution" is reclassified to sell, build_pct would drop by 2-4 percentage points. Noted as a structural caveat — comparable to the same issue in Coca-Cola's bottler economics and General Mills' DSD/warehouse mix.

**Trade promotion is netted against revenue — same as General Mills.** Mondelez net revenues of $36,441M are after-trade-promotion. Trade promo for biscuits/snacks/chocolate at retail typically runs 12-20% of gross sales; the missing trade-promo bucket on the books is conceptually $4.5-7.0B. If we added trade promo back to both revenue (as gross sales) and to sell (as a trade-spend line), the consolidated build_pct would drop from 83.1% to roughly 70-72%. This matches the ticket's "55-70%" expected range — confirming that the ticket author was anticipating the trade-promo-included framing. Following plan.md's as-disclosed convention (and Cheerios' treatment) for cross-product comparability. The Mondelez vs. General Mills comparison (Mondelez 83% vs. General Mills 91%) is therefore directionally meaningful — Mondelez is more marketing-intensive than General Mills — but both are inflated by the same trade-promo-netting convention.

**SG&A residual classification ($4,969M).** Consolidated SG&A is $7,439M. Subtracting estimated advertising ($2,100M) and R&D ($370M) leaves $4,969M of "residual" SG&A. Per plan.md fallback, this is split 50/50 between sell and overhead — $2,485M each. Sensitivity: a 60/40 sell-heavy split would yield build_pct of 81.7%; a 40/60 overhead-heavy split would yield 84.5%. CPG-typical residual SG&A is sell-heavy because trade-marketing/category-management/large-account selling is large relative to corporate G&A, but Mondelez has a global corporate footprint (Chicago HQ, regional offices in São Paulo, Singapore, Zurich) that adds genuine overhead weight. 50/50 is the defensible default.

**Asset impairment / exit costs ($473M plug).** Reported gross profit ($14,257M) minus SG&A ($7,439M) is $6,818M, but operating income is $6,345M — implying $473M of below-SG&A charges. The disclosed Q3 2024 intangible-asset impairment was $153M ($153M total for Europe biscuit, AMEA biscuit, and LatAm candy/biscuit brands). The remaining $320M is likely a mix of additional asset write-downs, restructuring/exit costs, and net amortization of intangibles, but the FY2024 10-K notes are needed to confirm the breakdown. Classified as overhead per plan.md framing (neither product cost contribution nor customer-facing spend). Material to the operating-profit number but immaterial to build_pct (a $473M overhead plug doesn't enter the build/sell numerator or denominator at all).

**Cocoa cost volatility note.** The 2024 cocoa price run-up (cocoa hit ~$10,000/ton at one point, vs. historical $2,000-3,000/ton) put significant pressure on Mondelez's chocolate-heavy COGS — particularly in Europe (Cadbury, Milka, Toblerone, Côte d'Or) and AMEA. Oreo is biscuit, not chocolate, so the brand-specific COGS impact for Oreo is smaller (cocoa is a relatively small recipe input in Oreo crème filling and chocolate-flavored coatings, but wheat/sugar/dairy/oil dominate). However, since we're using consolidated, Oreo benefits from chocolate-driven gross-margin compression that doesn't apply to it specifically. CEO Dirk Van de Put explicitly flagged "unprecedented cocoa cost inflation" as the dominant 2025 headwind — implying 2024 already had material cocoa drag in COGS that makes the consolidated build% somewhat elevated relative to a normalized cocoa year.

**Why the build_pct is so high (83.1%).** Similar structural factors to General Mills:
1. **Vertical integration.** Mondelez owns major manufacturing facilities globally (Chicago/Naperville biscuit plant, Salinas in Brazil, Bournville/Cadbury chocolate in UK, multiple European biscuit plants). Unlike Coca-Cola, the make-and-ship chain is on Mondelez's books rather than franchised out.
2. **Commodity-heavy COGS.** Cocoa, sugar, wheat, dairy, oils, and packaging dominate. Cocoa volatility in 2024 amplified this. Consolidated COGS is 60.9% of net sales — significantly higher than KO's 39%.
3. **Trade promo netting.** ~$5-7B of trade-promo-equivalent sell spend is netted from revenue, mechanically inflating the build_pct by ~10-12 percentage points.
4. **Brand-level marketing concentration.** Oreo specifically gets disproportionately more advertising than the parent average — but at the consolidated level we're averaging Oreo with hundreds of smaller brands across regions, many of which receive minimal media support, dragging the parent ratio down.

**Power brand strategy context.** Mondelez has publicly committed for years to concentrating marketing investment on a smaller set of "power brands" globally: Oreo, Cadbury Dairy Milk, Milka, Toblerone, Trident, Halls, Lu, belVita, Chips Ahoy. The CAGNY/investor day commentary historically discusses this in qualitative terms (e.g., "we're putting more A&CP behind power brands and less behind tail brands") but rarely with brand-specific dollar figures. This is what drives the brand-vs-parent caveat — Oreo's true brand-specific build_pct, if ever disclosed, would likely be 3-5 percentage points lower than consolidated due to higher advertising loading.

**Confidence: medium.** Consolidated income-statement line items (net revenues, COGS, SG&A, operating income), segment-level revenue and operating income, and net earnings are all directly disclosed in the FY2024 10-K and Q4/FY earnings release. The medium rating reflects three layers of estimation: (1) FY2024 advertising is not directly disclosed and is estimated from FY2023 Statista data plus trajectory assumption; (2) R&D for FY2024 is interpolated between FY2023 ($346M) and FY2025 (~$400M); (3) SG&A residual sell-vs-overhead split is the plan.md 50/50 default rather than a directly disclosed allocation. The headline build_pct of 83.1% is robust to these assumptions individually (range 81-85% across reasonable advertising/R&D/split assumptions) but the dominant interpretive issue is trade-promo netting — adding it back symmetrically would push build_pct down to 70-72%, in line with the ticket's "55-70%" expected range. Following the as-disclosed convention for cross-product comparability with Cheerios, Coca-Cola, and the rest of the consumer panel.

<!-- COMPLETE -->
