---
product: "John Deere combine harvester (S-Series)"
parent_company: "Deere & Company"
panel: "b2b"
segment_used: "Production & Precision Ag segment"
fiscal_year: 2024
build_millions: 14237
sell_millions: 759
overhead_millions: 1325
profit_millions: 4514
revenue_millions: 20834
build_pct: 94.9
confidence: "high"
sources:
  - "Deere & Company FY2024 10-K (fiscal year ended October 27, 2024; filed with SEC EDGAR, December 2024)"
  - "Deere Q4 and Full Year FY2024 Earnings Release (PR Newswire, December 4, 2024)"
  - "MediaRadar John Deere advertising profile (third-party estimate, not from 10-K)"
---

## Build breakdown ($ millions)

- COGS — manufacturing materials, labor, plant depreciation, distribution (PPA-allocated, scaled): 13,251
- R&D / precision ag engineering — See & Spray, autonomous tractors, JD Operations Center, StarFire GPS (PPA-allocated, scaled): 986
- Customer support / parts (folded into segment COGS per Deere's reporting structure): ~0 additional

**Build total: 14,237**

## Sell breakdown ($ millions)

- Advertising / measured media — PPA share (~46.5%) of ~$100M company total: ~46
- Account management / regional field sales staff supporting independent dealer network: ~200
- Dealer support programs, trade shows (Farm Progress Show, Commodity Classic), co-op marketing contributions, dealer training (JD Dealer Academy): ~513

**Sell total: 759**

## Excluded overhead ($ millions)

- Corporate G&A, executive comp, legal, finance, investor relations, HR central — residual ~65% of non-advertising PPA SG&A: 1,325

**Overhead total: 1,325**

## Reconciliation

- Build + Sell + Overhead + Profit = 14,237 + 759 + 1,325 + 4,514 = **20,835**
- PPA segment net sales = **20,834**
- Variance = +$1M (~0.005%), rounding artifact. Well within 5% tolerance.

## Methodology notes

**Segment selection and Financial Services carve-out.** Used Deere's Production & Precision Ag (PPA) reportable segment exclusively. Deere reports four segments: PPA, Small Ag & Turf, Construction & Forestry, and Financial Services. Combines (S-Series, T-Series, X-Series) sit squarely in PPA. John Deere Financial Services — which booked $5,782M in revenue and $889M operating profit in FY2024 — is excluded entirely, matching the auto-OEM finco treatment from plan.md. Including it would mischaracterize Deere as a lender with a tractor arm attached. PPA net sales of $20,834M and PPA operating profit of $4,514M (21.7% margin) are reported directly in the segment footnotes of the FY2024 10-K.

**Cost allocation from consolidated to PPA.** Deere discloses COGS ($30,775M), R&D ($2,290M), and SG&A ($4,840M) at the consolidated income statement level; these are not broken out by segment. Pro-rated to PPA using PPA's share of total equipment operations net sales: $20,834M / $44,759M = **46.5%**. This yields pro-rated COGS of $14,310M, R&D of $1,065M, and SG&A of $2,250M (total: $17,625M). Because PPA's actual total cost base is $16,320M (revenue minus operating profit), a uniform scale-down factor of 92.6% is applied to each line to make the sum reconcile. This is the same residual-scaling approach used elsewhere in this dataset when segment-level cost disclosure is unavailable.

**R&D as a major build component.** Deere's company-wide R&D of $2,290M in FY2024 reflects sustained heavy investment in precision agriculture and autonomous equipment. Key programs in PPA: See & Spray (AI-driven targeted herbicide application), autonomous corn/soy tractors, JD Operations Center (cloud farm management), StarFire 7500 GPS receiver, ExactEmerge planting. The $986M PPA-allocated R&D is 4.7% of PPA revenue — high relative to most consumer products categories. All R&D counted as build per the rubric.

**Advertising is unusually small.** Deere does not disclose advertising separately in the 10-K. FASB requires disclosure if material; the absence suggests it is not material at the parent level. Third-party intelligence (MediaRadar) estimates total Deere measured-media spend at roughly $80–100M per year, which is ~0.2% of equipment revenue. Consumer brands like P&G spend 10–12× more as a share of revenue. This reflects Deere's dealer-driven go-to-market: the independent dealer network carries the selling burden. Deere's national advertising is primarily brand maintenance (green-and-yellow imagery, "Nothing runs like a Deere"), not demand-generation for specific equipment.

**Independent dealer network — the invisible selling machine.** Deere's ~5,200 independent dealer locations globally are not Deere employees. Their selling costs (sales staff, showrooms, demo days, local advertising) are not in Deere's P&L. What IS in Deere's books: dealer training programs (JD Dealer Academy, technician certification), trade show presence (Farm Progress Show, Commodity Classic), co-op marketing contributions, and regional account managers who support dealers. These are classified as sell. The dealer's own margin — earned by buying equipment from Deere at wholesale and selling at retail — is embedded in the spread between Deere's factory gate price and the ~$700K–$1M list price on the lot. Methodology caveat: the "true" sell cost including dealer economics is higher than the 5.1% shown here, but by an unknowable amount from Deere's filings alone.

**SG&A residual split.** After subtracting advertising (~$46M) from PPA's allocated SG&A ($2,084M, scaled), $2,038M remains. Applied a 35% sell / 65% overhead split, yielding $713M sell-like (account managers, dealer support programs, trade shows, co-op marketing) and $1,325M overhead-like (corporate admin, legal, finance, IR, exec comp). For a B2B heavy-equipment OEM with an independent dealer channel, 35% is conservative-to-middle on the sell spectrum; a CPG company would typically run 45–55% on the same residual. The 35/65 choice shifts build_pct by approximately ±1.5 percentage points.

**FY2024 context: a down year.** PPA net sales fell approximately 24% from ~$27.4B in FY2023. The ag equipment cycle peaked in 2022–2023; Deere intentionally managed dealer inventory lower in FY2024. Operating margin compressed from ~30%+ in FY2023 to 21.7% in FY2024. The cost structure shown here reflects a trough year; in peak years the profit line expands considerably with relatively fixed build costs, which would push build_pct even higher.

**Confidence: high.** Deere is a US-listed company with clean segment reporting, a disclosed R&D line, and segment operating profit that reconciles precisely against the consolidated statement. The main estimation step — splitting SG&A into sell vs. overhead — is the same judgment call used for every result in this dataset, and the uncertainty band is narrow (±1.5 ppt on build_pct). Dealer network cost invisibility is a structural limitation but does not affect confidence in the numbers Deere does disclose.

<!-- COMPLETE -->
