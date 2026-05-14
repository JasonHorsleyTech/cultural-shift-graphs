---
product: "Bud Light 6-pack"
parent_company: "AB InBev"
panel: "consumer"
segment_used: "North America segment (US + Canada beer business; US is ~87% of segment revenue)"
fiscal_year: 2024
build_millions: 7709
sell_millions: 1700
overhead_millions: 1177
profit_millions: 4069
revenue_millions: 14655
build_pct: 81.9
confidence: "high"
sources:
  - "AB InBev 2024 Annual Report (English, dated February 26, 2025) — Consolidated income statement (page 62), Operating activities by region (pages 39-44), Note 5 Segment reporting (page 84), Note 10 Additional information on operating expenses by nature (page 87)"
  - "AB InBev FY2024 results press release (BusinessWire, February 26, 2025) — North America EBITDA, volume, capex commentary"
  - "Beer Marketer's Insights / Beverage Digest — Bud Light volume share and 2023 boycott context"
  - "Statista / MediaRadar — AB InBev US measured-media spend triangulation (~$1.5B/yr Bud Light + Michelob Ultra + Busch Light combined)"
---

## Build breakdown ($ millions)

- Cost of sales (raw materials — barley, hops, water, yeast; packaging — cans, glass, cardboard; brewing labor; brewery depreciation; primary brewing capex amortization): 6,236
- Distribution expenses share (outbound freight from brewery to wholesaler, route trucks, kegs, distribution-center warehousing, distribution D&A): 1,473
- R&D / engineering: 0 (not separately disclosed; new-product development — flavored malt beverages, low-cal innovations — is folded into S&M and brewery operations rather than a standalone R&D function)
- Customer support: 0 (B2B customer is the wholesaler/distributor; routine account management is bundled in S&M sales-force costs)

**Build total: 7,709**

## Sell breakdown ($ millions)

- Sales and marketing expenses share (measured-media advertising — Super Bowl, NFL/NBA/NHL/NASCAR/F1 sponsorships, digital/CTV; trade promotion to wholesalers and retailers; sales force compensation; sampling and on-premise activations; point-of-sale materials; brand-team payroll; S&M D&A): 1,700

**Sell total: 1,700**

## Excluded overhead ($ millions)

- Administrative expenses share (executive comp, corporate G&A, finance, legal, IT, IR, regulatory affairs — net of $7M Other operating income for the segment): 1,177

**Overhead total: 1,177**

## Reconciliation

- Build + Sell + Overhead + Profit = 7,709 + 1,700 + 1,177 + 4,069 = **$14,655M**
- North America segment revenue = **$14,655M**
- Variance = $0 (forced to balance by allocating SG&A pro-rata; see methodology)

## Methodology notes

**Segment, not SKU.** Bud Light is one brand inside AB InBev's North America segment (which is essentially the Anheuser-Busch US business plus Labatt Canada plus a small export sliver). Per plan.md decision #4, this ticket measures the segment's controllable cost structure rather than attempting a Bud-Light-only carve. AB InBev does not disclose brand-level COGS, S&M, or operating margin. Bud Light's marketing intensity inside the segment is roughly proportional to its volume share (Bud Light + Bud Light family was ~13% of US beer volume pre-2023 and ~9-10% post-Mulvaney, making it one of three or four brands — alongside Michelob Ultra, Busch Light, and Budweiser — that absorb the majority of NA segment marketing dollars). The headline number here describes Anheuser-Busch's North America cost profile; the true "Bud Light specific" S&M ratio is likely directionally similar but not separately observable.

**Three-tier distribution caveat — parent vs. 6-pack.** Beer is sold via three-tier distribution in the US (brewer → independent wholesaler → retailer). AB InBev's books (and therefore this ticket) capture only the brewer step. The wholesaler markup (~15-20% on cost) and retailer markup (~25-30% on cost) are downstream and invisible. A consumer's $12 for a 6-pack of Bud Light therefore decomposes very differently from this brand-owner ratio. This is the same parent-vs-can issue the Coca-Cola ticket flagged, but materially smaller in magnitude because (a) wholesaler markup is smaller than the bottler markup KO faces, and (b) AB InBev does some of its own pre-prohibition direct distribution and owns route-to-market data through its BEES platform. The "consumer dollar anatomy" decomposition is filed as a separate idea per plan.md.

**Income statement directly disclosed; segment SG&A allocated pro-rata.** AB InBev's consolidated income statement (Note 5 / page 62 of the 2024 Annual Report) cleanly separates four operating-expense lines: Cost of sales ($26,744M), Distribution expenses ($6,201M), Sales and marketing expenses ($7,156M), and Administrative expenses ($4,983M). This is unusually detailed disclosure — most CPG peers lump Distribution + S&M + Administrative into a single SG&A line. The North America segment table (Note 5 / page 84 and the management commentary on page 42) reports SG&A as a single $4,358M aggregate, not broken into the three sub-lines. I allocated NA's $4,358M SG&A using consolidated proportions:
- Distribution: 6,201 / 18,341 = 33.81% × 4,358 = **$1,473M**
- Sales and marketing: 7,156 / 18,341 = 39.02% × 4,358 = **$1,700M**
- Administrative: 4,983 / 18,341 = 27.17% × 4,358 = **$1,184M**

This is the key classification choice in the ticket. A reasonable alternative — that NA is more S&M-intensive than emerging-market segments — would push S&M up by maybe $200-300M and pull distribution down by a similar amount. That would lower build_pct from 81.9% to ~80%. Headline conclusion is robust to the allocation choice; the ratio sits in the low-80s either way.

**Build_pct came in well above the ticket's 50-65% hypothesis. Why.** The ticket spec guessed 50-65% based on "beer S&M expense is high — typically 25-35% of net revenue." AB InBev's *own* S&M line is only 12.0% of consolidated revenue and 11.6% of NA revenue — well below the 25-35% benchmark. The discrepancy is a definitional one: when industry sources cite "beer S&M as 25-35% of revenue," they typically mean the bundled selling-and-distribution function (advertising + sales force + trade promo + route logistics + warehousing). AB InBev splits Distribution onto its own line, and per plan.md's classification rubric (Distribution = build, S&M = sell), the "build" side eats the distribution dollars. Globally, AB InBev spent $6,201M on Distribution and $7,156M on S&M in 2024 — Distribution is ~87% the size of S&M and absorbs a large chunk of what intuition would call "marketing spend." If we re-bucketed Distribution into Sell, build_pct for NA would drop to **66.3%** (build = $6,236M COGS, sell = $1,473M distribution + $1,700M S&M = $3,173M), squarely in the ticket's expected range. The honest answer per the rubric is 81.9%; the "intuitive industry frame" answer is 66%; the right framing on the chart is the former with a callout that beer's Distribution line is a large pseudo-Sell expense per industry vernacular.

**Comparison to Coca-Cola (ticket 005).** KO's build_pct was 66.8% with its 50/50 selling-vs-distribution split inside a bundled SG&A line. Per the same plan.md rubric, AB InBev's NA segment looks more build-heavy — but only because AB InBev's books separate distribution explicitly while KO's blend it. On a like-for-like basis (KO's bundled selling-and-distribution line treated as fully sell-side), KO's build_pct would jump from 66.8% to ~71%, narrowing the gap with AB InBev's adjusted 66%. The two companies' build vs. sell economics are more similar than the headline ratios suggest; the gap is ~5-10 points, not 15.

**Excise taxes are netted against revenue.** AB InBev's revenue line is "Turnover less excise taxes" — gross sales to wholesalers, minus federal/state excise taxes which AB InBev collects and remits. US federal excise on beer is $18/bbl for big brewers (>2M bbls); state excise varies materially ($0.02/gal in Wyoming to $1.29/gal in Tennessee). The aggregate excise impact on revenue presentation is consistent with industry-standard "turnover less excise" reporting and doesn't affect build_pct because it nets out the same way at top-line and at "S&M as % of net revenue."

**2023 Bud Light boycott / Mulvaney distortion — reduced but not gone.** April 2023 Bud Light volume crashed ~25-30% after the Dylan Mulvaney sponsored-can incident. FY2023 NA volumes fell ~9% as a result. FY2024 was a partial-stabilization year — NA volumes were down 3.8% organic vs. FY2023, indicating Bud Light continued losing share to Modelo Especial (which overtook it as #1 US beer brand in 2023) but the rate of decline moderated. AB InBev redirected marketing weight toward Michelob Ultra and Busch Light — the press release explicitly calls out these two as "the #1 and #2 volume share gainers in the industry" in 4Q24. This means FY2024 S&M dollars are not specifically reduced (the segment kept spending) but the *brand mix* of where the spend went shifted away from Bud Light. For the ticket's purpose (segment-level ratio), this doesn't change the numbers; it just affects the narrative. FY2024 also benefited from "two additional selling-days" per the press release, modestly inflating volume and revenue by ~0.5%.

**D&A allocation across line items.** Per Note 10, total NA segment D&A is $722M ($4,791M EBITDA − $4,069M EBIT). Allocated across consolidated D&A proportions: COGS ~$420M (58%), Distribution ~$61M (8%), S&M ~$120M (17%), Admin ~$113M (16%). This depreciation is already inside the line items as reported; not double-counted in build.

**Capex carve.** NA segment gross capex 2024 was $454M (per Note 5 page 84) — only 11.7% of AB InBev's $3,863M consolidated gross capex despite NA being 24.5% of revenue. NA breweries (Houston, St. Louis, Cartersville, Williamsburg, etc.) are mature and well-amortized; capacity expansion is concentrated in Mexico and Africa where volumes are growing. This means NA D&A as % of revenue (4.9%) is meaningfully higher than current capex (3.1%), reflecting prior-cycle investment now amortizing. Not a concern for build_pct (which is computed off P&L expenses, not cash capex), but worth noting that the underlying asset base is older than the capex run-rate suggests.

**No captive finco to carve out.** Per plan.md decision #6, carmakers' financing arms are stripped before computing the ratio. AB InBev has no captive finance subsidiary; share of results of associates ($329M income in 2024 globally) consists of bottling/brewing JV partners and is below operating income, so it doesn't affect operating-cost allocation.

**FTE for context.** NA segment headcount is 16,492 (Note 5 page 84). At ~$140K average loaded comp (US/Canada brewery-and-corporate blend), NA payroll is roughly $2.3B — distributed across COGS (brewery production labor — bulk of FTE), Distribution (warehouse and route-truck workers), S&M (sales force, brand managers, marketing payroll), and Administrative (corporate staff). This is consistent with the cost-line totals I've allocated.

**Confidence: high.** AB InBev publishes unusually detailed expense classification (Distribution as a separate line is rare in CPG), normalized segment-level EBITDA and EBIT, segment-level D&A, segment-level capex, and segment-level FTE. The largest classification uncertainty is the pro-rata allocation of NA SG&A ($4,358M) across the three sub-lines using consolidated mix; the alternative allocations swing build_pct by at most ±2 points. The framing caveats (segment-vs-Bud-Light, brewer-vs-shelf-price, Distribution = build per rubric vs. industry intuition) are interpretive issues for the chart, not data-quality issues. Calling this "high" reflects clean primary-source data.

<!-- COMPLETE -->
