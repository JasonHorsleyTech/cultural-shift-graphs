# Angle 01: Grounding the question with napkin math

## TL;DR

The question is ambitious and visceral, but on first inspection there's a methodology fork that will materially change the visual punchline. The rubric in `question.md` defines build% as `build / (build + sell)`, deliberately excluding profit and overhead. That's defensible, but it produces a *different* number than the lay reading of the question ("of every $1 you hand over, how much went to making the thing?"). I think we should pick one framing and commit, and I lean toward keeping the rubric as-is (it's the cleaner one to compute) but adding overhead and profit as visual context on the graph itself.

---

## Two concrete examples with napkin math

### Example A — Coca-Cola (the canonical "sell-heavy" guess)

Pulling from Coca-Cola Co.'s recent 10-K, ballpark figures (most recent full year, in round numbers):

- Revenue: ~$46B
- COGS: ~$18B (~40% of revenue)
- SG&A: ~$14B (~30% of revenue)
  - Advertising: ~$5B is broken out explicitly
  - Sales force, trade promotion, slotting fees, brand consultants: another ~$5B (estimate; not separately disclosed)
  - Exec comp, finance, legal, IR, HQ real estate: ~$4B (overhead per our rubric)
- Operating income: ~$13B (~30% of revenue)

Plug into the rubric:
- **Build** = COGS + minor distribution ≈ $18B
- **Sell** = advertising + sales force + trade promo ≈ $10B
- **Excluded overhead** ≈ $4B
- **Profit** ≈ $13B (not in numerator or denominator)

**Build % = 18 / (18 + 10) ≈ 64%**

Pause on that number. Coke — the prototypical sell-heavy product — comes out **64% build** by this rubric. That feels wrong on first read. The reason: Coke's *revenue* breakdown looks very different from its *build/sell* breakdown:

- Of every $1 of Coke's revenue: 40¢ build, 22¢ sell, 9¢ overhead, 29¢ profit
- The rubric ratio collapses the 100¢ to just (build + sell) = 62¢ and asks what fraction of that 62¢ was build. Answer: 64%.

Now layer in something the rubric ignores: **the consumer doesn't pay Coca-Cola Co. directly.** When you buy a $2 can at 7-Eleven, the chain looks like:

- 7-Eleven keeps maybe ~50¢ of your $2 (retail margin, store overhead).
- A Coca-Cola bottler (Reyes Holdings, Coca-Cola Consolidated, etc.) keeps maybe another 70¢ (their cost of bottling, trucking, route sales reps, profit).
- Coca-Cola Co. — the brand owner — receives maybe 80¢ for the concentrate.

Of that 80¢ Coca-Cola Co. takes home: 64% goes to "build" (mostly: making concentrate, which is genuinely cheap), the rest to selling and supporting the brand. **But from the consumer's $2, the build (concentrate + bottling raw materials + route trucking) is maybe 50-70¢.** The brand, marketing, and shelf real estate are by far the bigger chunk of the $2 once you include the bottler and retailer.

This means the *consumer-perspective* answer ("of $1 you spend, how much went to making the thing?") and the *parent-company-rubric* answer can diverge by 30+ percentage points for a CPG product with a long distribution chain.

### Example B — Boeing 737 (the canonical "build-heavy" guess)

Boeing 2023 10-K, round numbers:

- Revenue: ~$78B
- COGS: ~$75B (96%) — yes, really
- R&D: ~$3.4B (4%)
- SG&A: ~$5B (~6%)
  - Advertising: ~$0 (commercial aircraft are sold via direct sales force, not TV)
  - Sales force compensation: ~$300-500M (a few hundred salespeople, plus airshow/customer-event costs)
  - Exec comp, finance, legal, lobbying, IR: ~$4B+ (overhead)
- Operating loss: -$0.8B (Boeing is currently underwater)

Plug into the rubric:
- **Build** = COGS + R&D ≈ $78B
- **Sell** ≈ $0.4B (negligible)
- **Excluded overhead** ≈ $4B

**Build % = 78 / (78 + 0.4) ≈ 99.5%**

This is the Boeing rubric output. Note something striking: Boeing's build > revenue, because they're losing money on every plane right now. That's structurally different from Coke and worth surfacing. The rubric handles it fine — it just measures the cost structure of producing what consumers receive — but the graph reader will be confused if a single bar exceeds 100% of revenue, so we should be careful about visualizations.

Also notable: Boeing's *consumer* (an airline) negotiates directly with Boeing. There's no retailer or dealer markup. So in this case, parent-company ratio ≈ consumer-perspective ratio. That's true for most B2B/heavy industrial products on the list (F-35, MRI, combine, bus, wind turbine).

The methodology gap between Coke and Boeing is therefore not symmetric: the gap is huge for distributed CPG, and tiny for direct-sale industrial.

---

## Proposed initial metric

### What we measure

Per the rubric in `question.md`: **build_pct = build_$ / (build_$ + sell_$)**, where build and sell are classified per the rubric, computed from each parent company's most recent 10-K (or equivalent for private companies).

### What we graph

**Default chart: horizontal bar chart, 50 rows, sorted by build_pct ascending.**
- **Y axis:** product name (with parent-company badge for the multi-product parents)
- **X axis:** build %, 0–100%
- **Bar:** filled to build_pct, with the remainder (sell %) in a contrasting color
- **Annotation:** confidence indicator (high/medium/low) as an icon next to each row
- **Visual goal:** the eye scans down the list and is hit with the spread — the F-35 at 99% next to a Yankee Candle at 30% is the punchline

**Stretch chart: stacked bar showing the full revenue dollar.** This addresses the "rubric vs. consumer-perspective" issue head-on. For each product, four segments per bar:
- Build (per rubric)
- Sell (per rubric)
- Overhead (excluded from rubric, but real money)
- Profit (operating income / revenue)

This gives the reader the rubric-honest answer AND a tangible "where does the dollar go" feel. Sum to 100% of company revenue. The reader can see at a glance that Coke's "30% profit slice" and Boeing's "negative profit" are themselves part of the story.

We can build both, ship the simpler one as the headline, and treat the stacked version as a "click for detail" follow-on. Decide in the `plan` phase.

### Units

- Primary metric: percentage (0–100%)
- Secondary annotation: $ revenue per company (for context — a Big Mac vs an F-35 are both "$1 to consumer" but the absolute scale matters)

---

## Data sources

The question asks for "longitudinal" sources, but the project explicitly scopes time series as **out of scope**. So the real ask is: what sources have the financial granularity we need *for a recent snapshot*?

### 1. SEC EDGAR (primary, free, authoritative)

URL: sec.gov/edgar. 10-K and 10-Q filings for all US-listed public companies. Roughly 35–40 of the 50 products are owned by US-listed parents (P&G, Apple, Coca-Cola, Boeing, etc.).

What we get reliably:
- Revenue, COGS, SG&A, R&D — always disclosed
- Advertising expense — disclosed by some (P&G, Coke) under FASB rules; *not* always broken out separately
- Sales force comp — almost never disclosed at line-item granularity
- Capex on production assets — disclosed in cash flow statement, can be filtered by segment for diversified companies

Limit: the SG&A black box. Many companies bundle ad + sales + exec into a single SG&A line. We'll need to use 10-K narrative disclosures, MD&A discussion, and segment reporting to estimate the split. **For each ticket, we'll need a per-company classification pass — no regex shortcut.**

### 2. Kantar Media + Ad Age "Leading National Advertisers" report (for brand-level ad spend)

Kantar tracks measured media ad spend by brand, not just by company. This is the only reliable way to get *brand-level* (not parent-level) advertising for multi-brand giants like P&G and Mondelez. Ad Age publishes the top 200 advertisers annually with US measured media spend, often broken out by major brand.

Limit: only measured media (TV, print, digital display, radio, OOH). Misses influencer marketing, trade promotion, in-store displays, sponsorships. So Kantar undercounts total ad spend — but for cross-brand *relative* comparisons it's the best we have.

### 3. Companies House (UK), Bundesanzeiger (Germany), and other foreign filings

For private/foreign companies on the list:
- **Dyson** → UK Companies House (publishes filings for Dyson Technology Limited and parent group)
- **Rolex** → no direct filings (private foundation, Switzerland). Triangulate via Federation of Swiss Watch Industry data, plus public peers Swatch Group and Compagnie Financière Richemont (owns Cartier, IWC, etc.) for cost structure proxies.
- **IKEA** → Inter IKEA Group publishes annual financial summaries voluntarily
- **Casper** → was public 2020–2022, use last 10-K
- **In-N-Out, Patagonia, etc.** (not on this list, but if we add) → essentially impossible without industry triangulation

### 4. Trade press and industry analysts (supporting source)

- **Beverage Digest** for Coke/Pepsi mix
- **IBISWorld** for sector benchmarks (advertising-to-sales ratios by NAICS code; useful as sanity check)
- **Statista** for brand-level snapshots (often paywalled but our library access may help)
- **Aerospace journals** (Aviation Week, Flight Global) for Boeing/Lockheed cost breakdowns
- **AutoForecastSolutions** and dealer association data for auto cost stacks

This is a triangulation source, not a primary one — treat with skepticism, especially if it disagrees with 10-K data.

---

## Where the framing feels wobbly

These are real concerns I want to surface now rather than later.

### 1. The "consumer's $1" promise vs. the parent-company rubric

The headline of `question.md` is "when a consumer spends $1, how much went to building vs. selling." But the rubric uses parent-company financials, which capture only the brand owner's share — not the bottler, distributor, dealer, or retailer. For a Coke, this gap is enormous (the parent gets ~40% of the consumer's dollar). For a Boeing, it's near zero. We're going to systematically *understate* the sell-heaviness of CPG and luxury and *not* understate it for industrial — which actually exaggerates the rubric's headline finding.

**Suggested resolution:** be honest about it in the graph subtitle. Something like: "Build/sell ratio of the brand-owning company's operations. Doesn't include retailer, distributor, or dealer markup — those add 20–60% on top for CPG and luxury, near zero for industrial." Or commit to picking one framing and showing it, with the methodology page explaining the choice.

### 2. Overhead and profit are the silent majority

For Coke, 9% of every dollar is overhead and 30% is profit — together that's *more than the sell side*. Excluding both from the ratio is defensible (the rubric is asking a specific question), but a reader who sees "Coke is 64% build" might think "huh, I expected worse," when the more vivid number is "of every $1, only 40¢ funds making the thing — most of the rest is brand premium."

**Suggested resolution:** the stacked-bar version above. Show all four segments. Keep the rubric ratio as the sort key and the headline number, but expose the full revenue dollar for honesty.

### 3. P&G ratio applied to 7 products

P&G owns Tide, Gillette, Crest, Old Spice, Bounty, Febreze, Charmin — all 7 will get the same parent-company ratio if we use the default approach. That makes 7 of our 50 bars identical, which is visually weird and methodologically unsatisfying. If the chart shows 7 P&G products clustered at the same exact value, the reader will (correctly) sense that the data is faked at that level of precision.

**Suggested resolution:** for the multi-brand parents (P&G, Mondelez, Kraft Heinz, Apple, Whirlpool, VF Corp, Williams-Sonoma, Newell Brands), commit upfront to brand-level ad spend triangulation via Kantar. We can keep COGS at parent ratio (rarely disclosed by brand) but adjust the sell number. This will introduce *some* spread between sibling brands. Note in each ticket result.

### 4. The "gut test" for customer support is fuzzy

The rubric: "if you stopped spending, would the product still work for existing customers?" That's a clean rule for SaaS, but Apple's Genius Bar, Tesla's service centers, and Peloton's app all sit in a gray zone where the support *is* part of the ongoing product experience. I expect ticket-level researcher disagreement here — flag it as a methodology choice in each result.

### 5. R&D in tech and pharma is partly speculative

Apple's R&D includes work on the rumored car, Vision Pro v2, AR glasses, etc. — none of which is in the iPhone you're holding. Counting all R&D as "iPhone build" overstates iPhone build %. The rubric says default to parent-line R&D as build, which is fine, but for Apple, Tesla, and Lockheed (which has many programs beyond F-35), this will boost build % meaningfully.

**Suggested resolution:** acknowledge in each ticket. For Apple specifically, segment R&D if Apple discloses it (they don't, AFAIK), or note "all R&D counted; if iPhone-only R&D were used, build % would be lower." Don't try to be more precise than the data allows.

### 6. Franchise vs. corporate-owned

McDonald's is ~95% franchised. Of corporate revenue, the bulk comes from franchise fees and rent collected from franchisees, not Big Mac sales. The actual "Big Mac unit economics" are mostly the franchisee's P&L, which McDonald's doesn't report. We may end up with a McDonald's parent ratio that has very little to do with the Big Mac in your hand.

**Suggested resolution:** flag McDonald's as low-confidence and consider replacing with an alternative example (Chipotle? Mostly corporate-owned and reports by store) if we want a fast food data point. Keep the Big Mac entry but mark confidence: low and explain in the result.

### 7. "Famous, but not in your house" is a different question

The 9 industrial/medical/aerospace products will all cluster very high on build% (probably 95-99%). They're structurally capital-intensive — not because they're "honest" products in any moral sense, but because their TAM is small, their buyers are sophisticated, and they don't need TV ads. Including them in the same bar chart as a Yankee Candle invites the reader to draw a moral conclusion ("F-35 is more honest than a candle!") that the data doesn't support.

**Suggested resolution:** keep them in the graph but consider visually separating with a divider or different bar color for "industrial / direct-sale" vs "consumer / retail." The contrast is the point of the graph but we should let the reader see the structural reason, not infer a moral one.

---

## What pass 2 should stress-test

If pass 1 establishes the metric is computable, pass 2 should target:

1. **Whether brand-level Kantar data actually disambiguates the multi-brand parents** in the way I'm hoping. If P&G's Tide and Crest end up with nearly identical ad-to-revenue ratios in Kantar, the spread between them will be tiny and we have to either accept that or change methodology.
2. **Whether private-company estimates for Dyson, Rolex, IKEA can hit even "medium" confidence** — if we're going to handwave 3 of 50 entries, the chart loses credibility. Better to drop them and replace with similar-flavor public proxies.
3. **Whether "overhead" and "profit" as separate segments make the visual clearer or messier** — sketch both versions on paper and gut-check.
4. **The Coke/Boeing gap for the consumer-perspective number** — try to estimate the consumer-spend version for 5 representative products and see if the ratio order changes, or just shifts uniformly. If it shifts uniformly, the rubric ratio is fine. If the order changes, we have a deeper choice to make.
