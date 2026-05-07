# Plan: Build vs. Sell Ratio

## Decisions carried forward from exploration

The exploration phase (see `research/angle-01.md` and `research/angle-02.md`) settled several material questions. This plan commits to those resolutions:

1. **Framing.** The headline is the brand-owner's cost structure, not a per-consumer-dollar attribution. Subtitle on the page will say so explicitly. We do NOT try to triangulate retailer/dealer/bottler markup — that's a different, harder project (`consumer-dollar-anatomy`, filed as an idea).
2. **Two panels.** Consumer products (~44 entries) form the headline panel. A small B2B/structural panel (~4 entries) anchors the right side as a structural baseline, visually separated.
3. **Restructured "products".** Where the named SKU is a loss-leader or cross-subsidized device, we measure the system not the SKU: Nespresso (machine + pods), PlayStation system (Sony Game & Network Services segment), Nintendo overall, Gillette grooming line.
4. **Segment-level when available.** For multi-product parents (P&G, Apple, Whirlpool, Sony), use segment financials when the company reports them. This produces meaningful spread between sibling products. Note in each ticket which segment was used.
5. **Dropped products.** Big Mac (95% franchised — McDonald's books don't reflect the burger), F-35, GE MRI, Cessna 172, Caterpillar D9 (B2B clusters with no spread), Nest thermostat (buried in Alphabet), and 5 of 7 P&G overlaps (Crest, Old Spice, Bounty, Febreze, Charmin) — kept Tide and Gillette as P&G representatives across two segments.
6. **Carmaker financing carve-out.** Toyota Financial, Ford Motor Credit, Ferrari Financial Services revenue and costs are subtracted before computing the ratio. We measure the auto-making business only.

## Data format

Every result file is a markdown file with YAML frontmatter, named to match the ticket (e.g. `001-tide-pod.md`). The frontmatter is the structured data that feeds the TypeScript data file. The body is free-form analysis and citations.

### Required frontmatter fields

```yaml
---
product: "Tide pod"                         # Display name on the chart
parent_company: "Procter & Gamble"          # Brand-owning entity
panel: "consumer"                           # "consumer" or "b2b"
segment_used: "Fabric & Home Care segment"  # Which segment of parent's books we used
fiscal_year: 2024                           # Year of the filing/data used
build_millions: 8500                        # Build $ in millions USD
sell_millions: 3500                         # Sell $ in millions USD
overhead_millions: 1500                     # Excluded overhead $ in millions USD
profit_millions: 4200                       # Operating profit $ in millions (for stacked-bar visual)
revenue_millions: 17700                     # Total revenue (sanity check; ≈ build+sell+overhead+profit)
build_pct: 70.8                             # build / (build + sell), as percentage, rounded 1dp
confidence: "high"                          # "high", "medium", or "low"
sources:
  - "P&G FY2024 10-K (filed August 2024)"
  - "Kantar Media measured-media, 2023 estimate"
---
```

### Build / sell breakdowns (in body)

Each result must include a section showing the dollar breakdown:

```markdown
## Build breakdown ($ millions)
- COGS (raw materials, contract mfg): 5000
- R&D / engineering: 700
- Manufacturing capex (depreciation share): 1200
- Distribution / logistics: 1300
- Customer support: 300
**Build total: 8500**

## Sell breakdown ($ millions)
- Advertising / measured media: 2200
- Sales force compensation: 600
- Trade promotion / slotting / dealer incentives: 700
**Sell total: 3500**

## Excluded overhead ($ millions)
- Executive comp + corporate G&A: 1100
- Finance, legal, IR: 400
**Overhead total: 1500**
```

Numbers can be approximate where precise breakdowns aren't disclosed. Show the work — readers can audit the classification choices.

### Methodology notes (in body)

A required section called `## Methodology notes` listing:
- Which segment of the parent's books was used and why.
- Any line items where the build/sell classification was non-obvious, with the choice made.
- Any data gaps (e.g., "advertising not separately disclosed; estimated as X% of SG&A based on industry benchmark").
- Anything surprising in the numbers — not punchline-driven, just honest.

### Confidence rubric

- **high** — US-listed, single-product or single-segment company with detailed segment reporting, advertising line broken out. Clean classification path.
- **medium** — US-listed multi-segment parent (P&G, Apple), or foreign public company (Toyota, Samsung) with reasonable disclosure. Some triangulation required (Kantar for ad spend, etc.).
- **low** — private company (Dyson, Rolex, IKEA, Stanley/PMI, Vuori), or company where the SKU economics are obscured by the parent (Yankee Candle inside Newell, Costco Kirkland inside Costco). Best-effort with disclosed limitations.

## Source hierarchy

Every ticket should follow this hierarchy (specific tickets call out exceptions):

1. **Most recent annual report** (10-K for US, 20-F for foreign, equivalent for non-US). Look at: income statement, segment reporting, MD&A discussion of advertising and R&D, footnote on advertising expense (FASB requires disclosure for many companies).
2. **Earnings call transcripts and investor day decks** for line-item color the 10-K omits.
3. **Kantar Media / Ad Age "Leading National Advertisers"** for brand-level US measured-media ad spend when parent doesn't break it out.
4. **Industry trade press** (Beverage Digest for beverages, Aviation Week for aerospace, IBISWorld for sector ratios) as a triangulation source — never as primary.
5. **For private companies**: Companies House (UK), Bundesanzeiger (Germany), voluntary disclosures (IKEA), industry-association data (Federation of Swiss Watch Industry for Rolex), public peers as cost-structure proxies.

## Known data gaps to flag rather than guess

- **Brand-level COGS** is almost never disclosed. Default: use parent or segment ratio.
- **Sales force compensation** is rarely broken out. Estimate from headcount + industry-typical comp, OR lump into a "non-advertising sell" residual after subtracting advertising and known G&A from SG&A.
- **Trade promotion / slotting fees** for CPG are often netted against revenue (so revenue is reported net of promo). Note this — it understates both revenue and the sell number consistently, but doesn't change the ratio much.
- **Customer support** for hardware companies is bundled into G&A. Estimate from segment narrative or default to 1-2% of revenue.
- **R&D speculation** (Apple Vision Pro R&D, Lockheed multi-program R&D): default is to count all parent R&D as build; note in caveats.
- **Capex amortization vs. expensing.** Ratio is computed against current-year operating expenses. Capex appears as depreciation in COGS; current-year capex itself is not double-counted in build.

## Why this format

- **YAML frontmatter** makes every result file machine-readable. The graph build script can parse all 48 files into a single TS data array without per-file custom code.
- **Free-form body** preserves the per-product reasoning that's the actual research. The chart shows numbers; a "click for detail" can show methodology if we want.
- **Mandatory build/sell breakdown** forces the researcher to actually do the classification work rather than copying a single ratio off a screen. Readers should be able to audit any cell.

## Ticket inventory

48 tickets total: 44 consumer-panel + 4 B2B-panel.

### Consumer panel (44)

**Bathroom / personal care (4)**
- 001 Tide pod (P&G, Fabric & Home Care segment)
- 002 Gillette grooming line (P&G, Grooming segment) [restructured: line not razor]
- 003 Tylenol bottle (Kenvue, Self Care segment)
- 004 Charlotte Tilbury cosmetics (Puig)

**Kitchen & pantry (8)**
- 005 Coca-Cola can (Coca-Cola Co.) [carries known parent-vs-can caveat]
- 006 Box of Cheerios (General Mills, North America Retail segment)
- 007 Pack of Oreos (Mondelez)
- 008 Heinz ketchup (Kraft Heinz)
- 009 Kraft Mac & Cheese (Kraft Heinz)
- 010 Bud Light 6-pack (AB InBev)
- 011 Jack Daniel's bottle (Brown-Forman)
- 012 Liquid Death water (private — DTC beverage example)

**Cleaning closet (1)**
- 013 Clorox bleach (Clorox)

**Restaurants (2)**
- 014 Chipotle burrito (Chipotle — corporate-owned model)
- 015 Starbucks latte (Starbucks)

**Electronics (6)**
- 016 iPhone (Apple, derived from Apple total with caveats)
- 017 MacBook Pro (Apple, Mac segment)
- 018 AirPods (Apple, Wearables/Home/Accessories segment)
- 019 Samsung 65" TV (Samsung, Visual Display business)
- 020 PlayStation system (Sony, Game & Network Services segment) [restructured]
- 021 Nintendo overall (Nintendo) [restructured from Switch]

**Appliances (4)**
- 022 Dyson vacuum (Dyson — UK Companies House)
- 023 Whirlpool washing machine (Whirlpool, North America segment)
- 024 KitchenAid stand mixer (Whirlpool — small appliances within North America)
- 025 Nespresso system (Nestlé, Coffee category) [restructured: machine + pods]

**Furniture / decor (4)**
- 026 Tempur Sealy mattress (Tempur Sealy) [replaces Casper]
- 027 IKEA Billy bookcase (Inter IKEA Group)
- 028 West Elm sofa (Williams-Sonoma, West Elm brand)
- 029 Yankee Candle (Newell Brands, Home Fragrance segment)

**Wear (6)**
- 030 Lululemon leggings (Lululemon)
- 031 Nike Air Force 1s (Nike, NIKE Brand)
- 032 Levi's 501s (Levi Strauss & Co.)
- 033 Columbia Sportswear fleece (Columbia Sportswear) [replaces North Face]
- 034 Rolex Submariner (Rolex — triangulation)
- 035 Vuori joggers (Vuori — private DTC athleisure)

**Driveway (4)**
- 036 Toyota Camry (Toyota, Automotive segment, ex-finco)
- 037 Ford F-150 (Ford, Ford Blue segment, ex-finco)
- 038 Tesla Model 3 (Tesla, Automotive segment)
- 039 Ferrari 488 (Ferrari, ex-finco)

**Private label / loss-leader (3)**
- 040 Costco Kirkland Signature (Costco — house-brand proxy)
- 041 Costco rotisserie chicken (Costco — explicit loss-leader case)
- 042 Trader Joe's private-label item (Trader Joe's — private, very low confidence)

**Viral / DTC (2)**
- 043 Stanley Quencher tumbler (PMI Worldwide / Stanley — private)
- 044 Drunk Elephant skincare (Shiseido, Other segment)

### B2B / structural panel (4)

- 045 Boeing 737 (Boeing, Commercial Airplanes segment)
- 046 John Deere combine harvester (Deere, Production & Precision Ag segment)
- 047 GE wind turbine (GE Vernova, Wind segment)
- 048 Blue Bird school bus (Blue Bird Corp)

## What "good data" looks like overall

A good result has:
- All four numbers (build, sell, overhead, profit) summing to within ~5% of total revenue. Discrepancies are flagged.
- Sources cited with year and document name (not just "10-K").
- Confidence rating that matches the rubric — don't claim "high" when triangulating.
- A methodology notes section that surfaces 2-3 specific classification choices made for this product, not boilerplate.
- A build_pct that's the result of computation shown in the breakdown — readers can audit.

## What we explicitly do NOT need

- Per-unit economics ($ per Tide pod, per can of Coke). The ratio is the answer; absolute scale is in the company's revenue.
- Time-series data. Snapshot only.
- Quality / customer-satisfaction overlay (filed as `quality-vs-marketing-correlation` idea).
- Competitor benchmarking within a category (e.g. Tide vs. Persil).
