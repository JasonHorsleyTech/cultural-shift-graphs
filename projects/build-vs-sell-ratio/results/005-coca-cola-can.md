---
product: "Coca-Cola can"
parent_company: "The Coca-Cola Company"
panel: "consumer"
segment_used: "Consolidated (KO is mostly concentrate + marketing; bottling is independently owned)"
fiscal_year: 2024
build_millions: 19587
sell_millions: 9720
overhead_millions: 7762
profit_millions: 9992
revenue_millions: 47061
build_pct: 66.8
confidence: "high"
sources:
  - "The Coca-Cola Company FY2024 10-K (fiscal year ended December 31, 2024; filed February 20, 2025) — Consolidated Statements of Income, Note 1 Significant Accounting Policies (advertising disclosure), Note 17 Operating Segments (capex, D&A by segment), MD&A SG&A breakdown table"
  - "The Coca-Cola Company Q4 2024 Earnings Release (February 11, 2025) — full-year revenue, capex, comparable-vs-reported reconciliations, BodyArmor impairment ($760M) and fairlife contingent-consideration remeasurement ($3,109M) disclosures"
  - "Beverage Digest 2024 industry mix tables — concentrate vs. finished product mix context"
  - "Coca-Cola Consolidated (NASDAQ: COKE) FY2024 10-K — used as cost-structure context for the bottling step (NOT folded into the primary number)"
---

## Build breakdown ($ millions)

- Cost of goods sold (concentrate raw materials, sweeteners, finished-beverage inputs in Bottling Investments, manufacturing labor, plant depreciation, primary distribution): 18,324
- Distribution share of "Selling and distribution expenses" within SG&A (50% of $2,525M — freight, warehousing): 1,263
- R&D / engineering: 0 (not separately disclosed in the 10-K; beverage-development costs are folded into "Other operating expenses" or COGS, not material as a standalone line)
- Customer support: 0 (Coca-Cola Co.'s customers are bottlers and large-account fountain customers; routine support is bundled into selling and distribution)

**Build total: 19,587**

## Sell breakdown ($ millions)

- Advertising expenses (disclosed Note 1; FASB-required given materiality): 5,146
- Selling share of "Selling and distribution expenses" within SG&A (50% of $2,525M — sales-force and customer-facing comp): 1,262
- Sell-side share of "Other operating expenses" within SG&A (50% of $6,625M — non-advertising marketing, trade promo not netted against revenue, sponsorship/PPM, fountain-customer incentives, in-store programs, sampling): 3,312

**Sell total: 9,720**

## Excluded overhead ($ millions)

- Stock-based compensation expense (disclosed within SG&A): 286
- Overhead share of "Other operating expenses" within SG&A (50% of $6,625M — corporate G&A, finance, legal, IR, IT, charitable donations, insurance, professional services): 3,313
- "Other operating charges" line below SG&A (impairments and restructuring): 4,163
  - fairlife contingent-consideration fair-value remeasurement: 3,109
  - BODYARMOR trademark impairment: 760
  - Productivity & reinvestment / restructuring residual: 294

**Overhead total: 7,762**

## Reconciliation

- Build + Sell + Overhead + Profit = 19,587 + 9,720 + 7,762 + 9,992 = **$47,061M**
- Net operating revenues = **$47,061M**
- Variance = $0 (forced to balance because the SG&A "Other operating expenses" residual is split 50/50 between sell and overhead, which is the classification choice rather than a separately disclosed split)

## Methodology notes

**Critical framing caveat — parent-vs-can.** This number measures **The Coca-Cola Company's controllable cost structure**, not the cost of a 12oz can in a consumer's hand. Coca-Cola Co. is mostly a concentrate-manufacturer-and-marketer; bottling, canning, primary retail distribution, and shelf placement happen at independently-owned bottlers (Coca-Cola Consolidated, Reyes/CCBSS, Arca Continental, etc.) and at retailers. Per Coca-Cola Co.'s own disclosure: 59% of FY2024 net operating revenues came from concentrate sales (sold B2B to bottlers, reported gross-of-bottler-markup), and 41% from finished product operations (mostly the Bottling Investments segment where Coca-Cola Co. operates bottling itself). The brand owner's books capture about half the value chain on a finished-can basis; the bottler step (heavy in metal/glass/PET, plant capex, route distribution, and merchandising labor) and the retail margin are downstream. **A "consumer's $1" attribution would look very different** — likely 10-25% of the can price is concentrate + brand-owner marketing, and the rest is bottler manufacturing, distribution, and retail markup. That's a different research project (see `consumer-dollar-anatomy` idea); this ticket sticks to the brand-owner rubric per plan.md decision #1.

**Concentrate vs. finished product mix matters.** Coca-Cola Co.'s reported COGS of $18,324M (39% of revenue) is the blended average across two very different cost structures: concentrate operations (very low COGS, high gross margin — concentrate is mostly sweetener, flavor, and small-batch chemistry plus packaging for shipment to bottlers) and finished product operations (much higher COGS — actual cans, bottles, fill, labor). If we restricted to concentrate-only revenue (~$27.7B per Note 3), the build% would be materially lower because concentrate COGS as a share of concentrate revenue is much smaller than the consolidated 39% blended ratio. This is consistent with KO consolidated coming out higher build% than a "pure" concentrate-only KO would.

**Advertising — directly disclosed, not estimated.** $5,146M for FY2024 is taken straight from the 10-K MD&A SG&A breakdown table (Note 1 also discloses advertising under accounting policies). FY2023 was $5,010M, FY2022 was $4,237M — meaningful step-up over two years that captures the Coke Studio refresh, FIFA World Cup activation, Olympics, and increased fairlife/Topo Chico/Costa marketing. No Kantar triangulation needed; KO's disclosure is sufficiently granular.

**SG&A "Other operating expenses" residual classification ($6,625M).** The 10-K MD&A table breaks SG&A into four lines: Selling and distribution expenses ($2,525M), Advertising expenses ($5,146M), Stock-based compensation ($286M), and Other operating expenses ($6,625M). The "Other operating expenses" bucket is a mixed bag — KO's MD&A specifically calls out "increased charitable donations" as one driver of the YoY increase, plus other operating expenses including IT, professional services, insurance, travel, non-advertising marketing programs, and trade promotions not netted against revenue. Plan.md fallback is a 50/50 split when a sell-vs-overhead split inside a SG&A residual is not disclosed. Used 50/50 here ($3,312M each side). A more sell-heavy split (60/40 toward sell) would push build_pct down to ~64%; a more overhead-heavy split (40/60) would push it up to ~70%. The headline conclusion (mid-60s) is robust to the split choice. This is the largest single classification uncertainty.

**Selling and distribution expenses ($2,525M) split.** KO does not separately disclose the split between sales-force/customer-facing selling labor (sell-side per rubric) and outbound freight/warehousing not in COGS (build-side per rubric — distribution is build per plan.md). Used 50/50. Note that primary distribution from concentrate plant to bottler is already in COGS per typical KO accounting language; the SG&A "Selling and distribution expenses" line is more weighted toward the finished-product / Bottling Investments side (where KO owns the route) plus large-account selling. A more freight-heavy split (60% build) would push build_pct to ~67.3%; a more selling-heavy split (40% build) would push it to ~66.4%. Trivial swing; not a meaningful uncertainty.

**Other operating charges ($4,163M) — fairlife earn-out and BodyArmor impairment.** This line below SG&A is dominated by two non-cash one-time items unique to FY2024: a $3,109M remeasurement of the fairlife contingent-consideration liability (the 2020 acquisition included an earn-out that performed far better than projected, mechanically increasing the booked liability — a sort of "we underpaid on the original deal" accounting catch-up), and a $760M BODYARMOR trademark impairment driven by revised future-results projections plus higher discount rates. These are NOT recurring brand-owner cost structure; they are deal-related fair-value remeasurements and goodwill/intangible writedowns. Classified as overhead per plan.md's "Excluded overhead" framing because they're neither build (no product cost contribution) nor sell (no customer-facing spend). Excluding them entirely from the $47,061M revenue base would force the breakdown to under-allocate $4.2B somewhere — placing them in overhead is the cleanest treatment that preserves the revenue identity. **They do not affect build_pct** (which is build/(build+sell), independent of overhead/profit allocation). On a "comparable" basis (KO's own non-GAAP measure that strips these items), comparable operating income was $14,007M (29.8% margin); the build_pct of 66.8% reported here is identical on a comparable basis because the items live in overhead/profit, not in build or sell.

**Stock-based comp ($286M).** Allocated to overhead. Most of it goes to executive and corporate-staff comp; a defensible alternative would split it pro-rata across functions (which would push ~$80M each into build, sell, and overhead). Doesn't change build_pct meaningfully.

**Capex ($2,064M) and D&A ($1,075M) treatment.** Capex is the cash spend on PP&E this year ($2,064M for FY2024 per Note 17 segment table; mostly North America bottling and Bottling Investments). D&A ($1,075M) is the period charge against earlier capex. Per plan.md rule, D&A is the in-year cost that flows through COGS (manufacturing depreciation) and SG&A (corporate D&A). Current-year capex itself is not double-counted. The D&A figure is consistent with KO's relatively asset-light brand-owner model — much smaller than peer CPG companies like P&G ($3.4B FY2024 D&A on $84B revenue) on a revenue ratio basis, because KO's bottlers carry the heavy bottling capex on their own balance sheets. A useful sanity check: COKE (Coca-Cola Consolidated, the largest US bottler) reports its own D&A around $230M on $7B revenue, supporting that bottlers carry ~3% of their revenue in D&A vs. KO's 2.3%.

**R&D not separately disclosed.** Coca-Cola Co. does not break out an R&D line in the income statement and does not appear to disclose an R&D number anywhere in the FY2024 10-K (zero hits for "Research and development" as a phrase in the document). KO's product innovation is dominated by recipe, packaging, and category extension work that is conducted within marketing, brand-management, and supply-chain budgets rather than as a separate engineering function. This is consistent with treating KO's "innovation" as marketing-adjacent rather than build-adjacent. For comparability with other tickets where R&D is a meaningful line, consider this a ~$0–100M true R&D number that's already absorbed into the sell side or COGS.

**Concentrate distribution is build, per ticket spec.** Plan.md and the ticket explicitly call out that distribution costs on Coca-Cola Co.'s books — primarily concentrate shipping to bottlers, plus the finished-product distribution within the Bottling Investments segment — are build per the rubric (a value-chain step of getting product to the customer who then sells onward, not a sales-and-marketing activity). This is captured by COGS plus the build-side share of "Selling and distribution expenses."

**Carmaker-style finco carve-out N/A.** Coca-Cola Co. has no captive financing arm; it does have substantial equity-method investments in bottlers (Note 6 reports $1,770M of equity income in 2024), but this lives below operating income and does not affect operating-cost allocation.

**Confidence: high.** Net operating revenues, COGS, SG&A line-item breakdown, Other operating charges, and Operating income are all directly disclosed in the FY2024 10-K. Advertising expense is directly disclosed (not estimated from Kantar). The largest classification uncertainty is the 50/50 split of the $6,625M SG&A "Other operating expenses" residual between sell and overhead, but the headline conclusion (build_pct in the mid-60s) is robust to ±10 percentage-point swings inside that band. The framing caveat (parent vs. can) is the dominant interpretive issue, not a data-quality issue. Calling this "high" reflects clean primary-source data; readers should still hold the framing limitation in mind when comparing this row against, say, a fully integrated CPG like P&G's Tide pod where the brand owner does its own retail distribution to mass-market customers.

<!-- COMPLETE -->
