---
product: "Tesla Model 3"
parent_company: "Tesla"
panel: "consumer"
segment_used: "Automotive segment (vehicle sales + leasing; ex-Energy Generation & Storage, ex-Services & Other)"
fiscal_year: 2024
build_millions: 66471
sell_millions: 1107
overhead_millions: 3493
profit_millions: 5999
revenue_millions: 77070
build_pct: 98.4
confidence: "high"
sources:
  - "Tesla FY2024 10-K (fiscal year ended December 31, 2024; filed January 29, 2025) — Consolidated Statements of Operations, automotive segment gross margin disclosures, R&D and SG&A operating expense lines"
  - "Tesla Q4 and Full Year 2024 Financial Results (Form 8-K exhibit, January 29, 2025) — segment revenue and quarterly gross margin disclosures"
  - "stockdividendscreener.com: Tesla operating expense breakdown — R&D $4.54B, SG&A $5.15B, restructuring $0.68B (sourced from FY2024 10-K); advertising/promotional costs $155M (10-K footnote disclosure)"
  - "Tesla Investor Relations / multiple financial aggregators for full-year 2024 automotive gross margin of 18.4% (including regulatory credits)"
---

## Build breakdown ($ millions)

- Automotive COGS — raw materials (lithium, steel, aluminum, semiconductors), manufacturing labor at Gigafactories, factory overhead and depreciation, outbound logistics and distribution, warranty provisions, Autopilot/FSD hardware embedded in vehicles: 62,889
- R&D pro-rated to automotive segment (78.9% share of $4,540M total company R&D): 3,582
  - Covers: FSD/Autopilot software and hardware development, next-generation vehicle platforms (Cybertruck, Model 2/next-gen), Giga Press and manufacturing innovation, battery cell chemistry R&D, early-stage Optimus robotics

**Build total: 66,471**

## Sell breakdown ($ millions)

- Advertising, marketing, and promotional costs (pro-rated 78.9% of $155M disclosed total): 122
- Non-advertising selling costs — showroom and gallery operations (leases, utilities, retail staff), delivery center operations, online sales platform — estimated at 25% of remaining pro-rated SG&A ($3,941M × 25%): 985

**Sell total: 1,107**

## Excluded overhead ($ millions)

- Corporate G&A, executive compensation, finance, legal, IR, HR, IT (estimated 75% of remaining pro-rated SG&A: $3,941M × 75%): 2,956
- Pro-rated restructuring and other charges (Q2 2024 workforce reduction of ~14,000 employees; 78.9% of $680M): 537

**Overhead total: 3,493**

## Reconciliation

- Build + Sell + Overhead + Profit = 66,471 + 1,107 + 3,493 + 5,999 = **77,070**
- Automotive segment revenue = **77,070**
- Variance: 0 — exact by construction (profit is the residual)

Sanity check on profit: Automotive gross profit ($77,070M × 18.4%) = $14,181M; minus pro-rated OpEx ($3,582M R&D + $4,063M SG&A + $537M restructuring = $8,182M) = $5,999M operating income proxy ✓

## Methodology notes

**Segment selection.** Used Tesla's Automotive segment (vehicle sales + leasing + regulatory credits) as directed by ticket. This excludes Energy Generation & Storage ($10,090M revenue) and Services & Other ($10,530M revenue). The ticket explicitly targets automotive operations only. Tesla does not formally report separate segments in its 10-K (it views its operations as one reportable segment); the automotive/energy/services split is revenue-category reporting on the income statement, not formal FASB segment reporting.

**Vertical integration caveat — the apples-to-oranges problem.** This is the single most important methodological note for Tesla and the main reason this result cannot be directly compared to Toyota (ticket 036) or Ford (ticket 037) without adjustment. Traditional automakers sell through franchised dealer networks. Dealers are separate legal entities; their selling costs — showroom leases, floor staff, local advertising, vehicle inventory financing — do not appear anywhere in Toyota's or Ford's financial statements. Those costs are entirely invisible to this analysis. Tesla, by contrast, is a direct-to-consumer company. Its ~350 showrooms/galleries, ~150 delivery centers, and online sales infrastructure are wholly owned and operated, meaning their costs show up in Tesla's SG&A. In principle, this should make Tesla's build_pct *lower* than Toyota's (more sell costs visible). In practice, the opposite is true (Tesla build_pct ~98.4% vs. anticipated Toyota ~90-95%), because Tesla's advertising is so small (~$155M vs. Toyota's multi-billion global ad spend) that it swamps the showroom cost effect. The right interpretation: Tesla's build_pct *would be higher* than it already is if Tesla used franchised dealers, because the showroom costs would disappear from Tesla's books — but the actual number is already near-ceiling due to near-zero advertising.

**Correction of ticket's build_pct estimate.** The ticket anticipated 80–90%. The actual computed figure is 98.4%. The 80–90% range would imply sell costs of $7–14B against a $66B build base — far larger than any reasonable estimate of Tesla's selling infrastructure. The ticket's estimate appears to have confused build/(build+sell+overhead+profit) as a percentage of revenue (~86%) with the plan.md ratio build/(build+sell). Under the plan.md formula, Tesla's minimal advertising ($155M total vs. $97.7B in revenue — 0.16% of revenue) and modest showroom cost base make a near-ceiling build_pct mathematically correct.

**Advertising disclosure.** Tesla disclosed marketing, advertising, and promotional costs of $155M in FY2024 (up from $96M in FY2023, a $59M increase cited in 10-K MD&A). Tesla began its first paid advertising programs in 2023 under Elon Musk's direction after years of zero advertising. The $155M figure is explicitly disclosed in the 10-K's notes to financial statements. Note that some financial data vendors report Tesla's advertising as "not disclosed" or "immaterial" — this reflects Tesla's pre-2023 practice; as of FY2024, the figure is disclosed. Tesla's advertising spend remains a rounding error relative to its $77B automotive revenue (0.2% of total revenue; GM and Ford run ~1.6–2.0%).

**Non-advertising sell estimate.** Tesla's ~350 showrooms/galleries and ~150 delivery centers worldwide generate meaningful facility costs (prime mall and high-street leases at ~$1–5M/year each) and staffing costs (retail associates, delivery specialists). Of Tesla's $5.15B total SG&A, advertising represents ~3%. The remaining $4.995B covers: employee compensation for corporate and retail staff, facilities (showrooms, offices, delivery centers), stock-based compensation (Tesla's total FY2024 SBC was ~$1.65B, a substantial portion allocated to SG&A), IT infrastructure, and professional services (legal, audit, consulting). Tesla's 10-K does not itemize SG&A further. An estimated 25% of non-advertising, pro-rated SG&A is classified as sell (showrooms, delivery centers, sales staff) and 75% as overhead (corporate G&A, finance, legal, HR, central IT). This split reflects Tesla's retail network as a meaningful but minority share of SG&A; varying the assumption to 40% sell would move build_pct from 98.4% to 97.5% — immaterial. The non-advertising sell estimate is the main uncertainty in this result.

**R&D classification.** Tesla's R&D of $4.54B is entirely classified as build. This is appropriate per plan.md and per the gut test: Tesla's R&D is overwhelmingly directed at vehicle technology (FSD, Autopilot, next-gen platforms, battery manufacturing), not at demand creation. The partial allocation to Optimus robotics and non-automotive R&D is noted but not separately stripped — the automotive revenue share pro-ration (78.9%) already scales it down proportionally. In practice, R&D is probably even more automotive-skewed than the revenue share suggests, meaning the auto segment's R&D allocation is slightly understated.

**Service centers — classified as build.** Tesla operates ~600–700 service centers globally for vehicle maintenance, warranty repair, and collision repair. Per the rubric: "stop spending, existing cars don't get serviced" — clearly build. Service center costs are largely captured in Services & Other COGS (which is excluded from this automotive segment analysis). This is correct: we are not double-counting service revenue while excluding service costs — both are excluded from the Automotive segment scope.

**Supercharger network.** Tesla opened the Supercharger network to non-Tesla EVs in 2023–2024. Supercharger revenue and costs are in Services & Other, excluded here. No adjustment needed for the Automotive segment analysis.

**Regulatory credits.** The $77,070M automotive revenue includes regulatory credit sales ($2,762M estimated annual; Q4 2024 alone was $692M). Regulatory credits are essentially 100%-margin revenue (no COGS). They elevate the automotive gross margin to 18.4% vs. what it would be on vehicle sales alone (~17%). The ticket does not call for stripping these out; they are included consistently in both revenue and gross profit.

**Tesla Financial Services.** The ticket notes Tesla Financial Services (TFS) is small and integrated; no finco carve-out was applied. This is correct: TFS is not separately reported and is not material enough to require the adjustment applied to Toyota Financial Services (ticket 036) or Ford Motor Credit (ticket 037).

**Restructuring.** Tesla's April 2024 workforce reduction ($680M total restructuring charge, including severance) is classified as overhead and pro-rated to automotive (78.9%). This is a one-time charge with no clear build or sell character; overhead is the appropriate bucket.

**Confidence: high.** Tesla is US-listed and files detailed 10-Ks. Automotive gross margin (18.4%) is disclosed. R&D ($4.54B) and SG&A ($5.15B) are reported as separate line items. Advertising ($155M) is disclosed in notes. The only estimate is the sell/overhead split of non-advertising SG&A, which has immaterial impact on build_pct (±1 percentage point across a wide range of assumptions).

<!-- COMPLETE -->
