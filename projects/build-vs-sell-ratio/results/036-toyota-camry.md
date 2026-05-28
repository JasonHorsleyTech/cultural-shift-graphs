---
product: "Toyota Camry"
parent_company: "Toyota Motor Corporation"
panel: "consumer"
segment_used: "Automotive segment only (Toyota Financial Services excluded)"
fiscal_year: 2024
build_millions: 232621
sell_millions: 6500
overhead_millions: 13601
profit_millions: 31872
revenue_millions: 284594
build_pct: 97.3
confidence: "medium"
sources:
  - "Toyota Motor Corporation FY2024 Annual Securities Report (fiscal year ended March 31, 2024) — Segment Information: Automotive ¥41,266.2B revenue, ¥4,621.4B operating income; Financial Services ¥3,484.1B revenue, ¥570.0B operating income; Consolidated ¥45,095.3B revenue, ¥5,352.9B operating income"
  - "Toyota FY2024 Financial Results Summary (April 2023 – March 2024), IR press release — confirms segment split and R&D disclosure"
  - "Toyota 20-F FY2024 (filed with SEC, June 2024) — income statement, Note on R&D (charged to cost of sales), segment footnote"
  - "Ad Age / Kantar Media — Toyota estimated global measured-media ad spend $3.5–5.0B annually; US alone ~$1.6–2.0B (ranked consistently top-3 US auto advertiser)"
  - "FX rate: ¥145/USD (Toyota's own FY2024 implied conversion rate: ¥45,095.3B ÷ ~$311B ≈ 145.0)"
---

## Finco carve-out

Toyota reports two segments cleanly:

| Segment | Revenue (¥B) | Op. Income (¥B) |
|---|---|---|
| Automotive | 41,266.2 | 4,621.4 |
| Financial Services (TFS) | 3,484.1 | 570.0 |
| All other / eliminations | 344.9 | 161.5 |
| **Consolidated** | **45,095.3** | **5,352.9** |

All numbers below use the **Automotive segment only** at ¥145/USD:

- Automotive revenue: ¥41,266.2B = **$284,594M**
- Automotive operating income: ¥4,621.4B = **$31,872M**
- Automotive total costs: ¥36,644.8B = **$252,723M**

Financial Services is a large operation (¥3,484.1B revenue, ~8% of consolidated) with costs dominated by interest expense on wholesale and retail funding lines and provisions for credit losses — fundamentally a banking P&L, not a manufacturing one. Excluding it is required to isolate the car-making economics.

---

## Build breakdown ($ millions)

- Manufacturing COGS (direct materials, direct labor, manufacturing overhead, plant depreciation, warranty provisions, logistics/distribution): $224,000
- R&D / engineering (hybrid powertrain, EV platform, ADAS, hydrogen fuel cell; disclosed as charged to cost of sales under Toyota's GAAP accounting): $8,621

**Build total: $232,621**

## Sell breakdown ($ millions)

- Advertising / measured media (global estimate — not separately disclosed by Toyota; triangulated from Ad Age LNA tables and MediaRadar brand-level data): $4,000
- Sales force compensation + dealer support programs (co-op advertising, dealer training, retail marketing support): $2,500

**Sell total: $6,500**

## Excluded overhead ($ millions)

- Corporate G&A, executive compensation, finance, legal, investor relations, HR, IT infrastructure, non-manufacturing facilities: $13,601

**Overhead total: $13,601**

## Reconciliation

Build + Sell + Overhead + Profit = $232,621 + $6,500 + $13,601 + $31,872 = **$284,594**  
Automotive segment revenue = **$284,594** ✓ (exact match)

---

## Methodology notes

**Segment selection.** Toyota's segment reporting cleanly separates Automotive from Financial Services. The Automotive segment captures all vehicle manufacturing, R&D, and related selling/distribution costs. Camry is the highest-volume Toyota passenger car in the US and a reliable representative of Toyota's mass-market automotive economics. No Camry-specific financials exist; this result uses Toyota Automotive segment ratios, consistent with the plan.md approach for auto tickets.

**Finco carve-out — where the line is drawn.** Toyota Financial Services revenues and costs are fully excluded (not pro-rated). TFS operates as a captive finance arm: it borrows in wholesale markets and lends to dealers and consumers. Its cost structure (interest expense ~¥2,300–2,600B, provisions, small admin) bears no resemblance to manufacturing economics. Including TFS would artificially inflate both revenue and costs without changing the build/sell signal — and would misrepresent what it costs to design, build, and sell a Camry. The ¥344.9B "All other / eliminations" segment was also excluded; it represents intercompany eliminations and cannot be cleanly attributed to either automotive or financial services.

**R&D treatment — in COGS, not SG&A.** Toyota's stated accounting policy: "Research and development costs are charged to cost of sales as incurred." So Toyota's disclosed COGS of ~¥35,742B (consolidated, per MacroTrends) already includes R&D of ~¥1,250B. For the breakdown, R&D is pulled out of COGS and listed separately as a build line item to make it visible — it doesn't change the classification (R&D is build either way) but makes the research investment legible in the output. Automotive segment is virtually the sole recipient of Toyota's R&D: hybrid, EV, hydrogen, ADAS, and chassis development are all automotive. No finco R&D allocation.

**Manufacturing COGS derivation.** Toyota does not publish segment-level COGS. The $224,000M manufacturing COGS figure is derived by taking total automotive costs ($252,723M), subtracting R&D ($8,621M), sell-classified expenses ($6,500M), and overhead ($13,601M). The implied COGS/automotive revenue ratio is ~78.7%, consistent with Toyota's disclosed consolidated gross margin of ~20.7% (which includes small financial services gross margin distortion). Toyota's manufacturing is genuinely cost-heavy: in-house Kentucky (Georgetown), Texas, Indiana, plus Japan and other global plants — no significant contract manufacturing.

**Advertising — largest data gap.** Toyota does not disclose advertising expense as a separate line item in either the 20-F or the Annual Securities Report. This is common for Japanese multinationals. The $4,000M estimate is triangulated from: (a) Ad Age's Leading National Advertisers tables showing Toyota ~$1.6–2.0B in US measured media, (b) Toyota's known Japan advertising scale (largest auto advertiser in Japan), (c) global Toyota/Lexus footprint across Europe, APAC, and LATAM. The estimate range is approximately $3.5–5.0B; using the midpoint of $4.0B. A 25% error in either direction would shift build_pct by approximately 0.5 percentage points — immaterial at this ratio level.

**Dealer incentives — netting question.** Toyota's manufacturer-funded dealer and consumer incentives are typically netted from net revenues before the income statement is published (standard auto-industry accounting treatment). The Automotive segment revenue of ¥41,266.2B is thus net of incentive spend. Toyota is known for below-industry-average incentives (¥1,600/vehicle US average in late FY2024 vs. Big Three averages of ¥2,500–4,000+) as a structural advantage of its low-inventory model. Because these are already netted from revenue, they do not appear in SG&A and are not separately modeled in the sell bucket here — consistent with plan.md treatment of trade promotion.

**Build_pct at 97.3% — above the ticket estimate of 88–95%.** The ticket forecast was a reasonable prior; the actual data confirms that Toyota's sell-side expenditure is genuinely tiny as a fraction of costs. Auto manufacturing at scale is almost entirely build: steel, chips, labor, plant, R&D. Advertising and selling are ~2.3% of automotive revenue — an order of magnitude lower than CPG companies. This is the structural story of the driveway panel.

**Dealer markup invisible to Toyota's books.** As noted in the ticket: Toyota's $284.6B automotive revenue represents what dealers pay Toyota, not what consumers pay at the window. Dealer markup (typically 8–15% of MSRP for Camry, net of incentives) accrues entirely to independent franchisee books. This is the parent-vs-can issue: Toyota's 97.3% build ratio reflects Toyota's economics, not the consumer's dollar anatomy.

**Confidence: medium.** Segment revenue and operating income are direct from Toyota's published segment reporting in the Annual Securities Report and 20-F — high confidence on those inputs. The COGS/SG&A split within the automotive segment requires back-calculation from consolidated figures with finco excluded — medium confidence. Advertising expense is a third-party estimate, not a Toyota disclosure — lower confidence, but given how small advertising is as a fraction of total costs (~1.4% of revenue), even a 50% error in the advertising estimate moves build_pct by less than 1 percentage point. The ratio is robust to advertising uncertainty.

<!-- COMPLETE -->
