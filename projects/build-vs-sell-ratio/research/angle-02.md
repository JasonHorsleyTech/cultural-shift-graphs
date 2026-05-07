# Angle 02: Stress-testing the metric — what breaks?

## TL;DR

Pass 1 was good. It identified the consumer-$1-vs-parent-rubric mismatch, the multi-brand parent problem, and the McDonald's franchise issue. But pass 1 *softened* those concerns into "be honest in the subtitle." I think several of them are harder than that — they're not annotation problems, they're structural breaks in the metric.

The headline problem: the rubric (`build_$ / (build_$ + sell_$)` from parent 10-K) and the headline question ("where does your $1 go?") are answering different questions, and for at least 6 product categories on the list, they give answers off by **30+ percentage points in opposite directions** — which would change the *order* of products in the sorted bar chart. That's not a footnote; that's the chart being wrong.

Below, I separate the issues into **fatal breaks** (metric must change), **scope boundaries** (the metric works if we exclude or annotate), and **spin-offs** (different questions to file away).

The recommendation at the end:

1. **Drop the "consumer's $1" framing in favor of a "brand-owner's cost structure" framing**, and rewrite the chart subtitle and methodology page to match. This is the honest move and Pass 1 hinted at it but didn't commit.
2. **Split the chart into two visually-separated panels**: consumer-retail products (where sell-heavy is the interesting story) and B2B / industrial / institutional (where it's structural). Don't pretend they're on the same axis.
3. **Drop or restructure 6 products** that the metric can't handle without lying: Big Mac, F-35, GE MRI, Cessna 172, Peloton, Nespresso. Replace some with cleaner examples; mark others as deliberately-different categories.
4. **Address the razors-and-blades / loss-leader problem head-on** for Gillette, Nespresso, PS5, Switch, and Peloton with an explicit annotation, because the standalone product number is misleading for these.

---

## Fatal breaks

These are issues where the metric, as stated, gives an answer that is wrong, not just incomplete. Patching them with footnotes won't save the chart's credibility.

### 1. The B2B products are answering a different question

The list includes 9 products under "Famous, but not in your house": Boeing 737, Cessna 172, John Deere combine, Cat D9, F-35, GE wind turbine, GE MRI, Peloton, Blue Bird school bus.

Eight of these (everything except Peloton) are **B2B**. They have no consumer. United Airlines doesn't shop for a 737 at Costco. The Pentagon doesn't see a TV ad for the F-35. A hospital's MRI procurement is a 6-month sales cycle with onsite installation training. The "consumer's $1" framing literally does not apply.

Pass 1 noticed this and suggested "visually separating with a divider." That's underselling the problem. Three reasons:

- **The numerator and denominator measure different things for B2B.** "Sales force compensation" for Lockheed is a massive program-management organization that interfaces with the DoD for years per contract. It's not "selling" in the consumer-product sense — it's *contract negotiation and customer engineering*. Calling it "sell" tars it with a brush meant for TV ads, which is misleading.
- **R&D for many of these is pre-paid by the customer.** F-35 development was paid by the DoD as a separate development contract (~$60B+ over decades, not in Lockheed's R&D line in the way a TV company's R&D is). So Lockheed's *current* R&D line is **artificially low** — it understates the "build" cost of an F-35. If we add the historical DoD development spend properly amortized, build% goes from "very high" to "essentially 100% because there is no sell." The chart bar maxes out for trivial reasons.
- **The B2B products will all cluster at 95–100% build%**, and the only spread between them will be noise from how each company classifies sales-engineering vs. account management. The chart will show a clump of 9 indistinguishable bars at the right edge. That's not a finding.

**Recommendation:** Drop Cessna 172, GE MRI, F-35, and Caterpillar D9 from this graph. Keep Boeing 737 and John Deere combine and GE wind turbine and Blue Bird school bus only as a "structural baseline" — visually segregate them, label them clearly, and use them to anchor the right edge of the chart. State explicitly: "These products are sold to institutional buyers, not consumers. They show what 'build-heavy' looks like as a structural property of B2B."

Replacing the dropped slots with consumer products that test the hypothesis better:
- **A Costco kirkland-brand product** (private label, near-zero advertising, distribution-heavy) — would be very build-heavy
- **Liquid Death** or **Olipop** (DTC/social-marketing-heavy beverage) — would be very sell-heavy in a way Coke isn't
- **Beats by Dre** (acquired by Apple, famously high-margin, marketing-heavy) — would test sell-heavy in electronics
- **A Stanley cup** or **Owala bottle** — viral marketing categories
- **A Casper-style competitor that's still public** like Sleep Number or Tempur Sealy

### 2. Razors-and-blades / loss-leader products break the snapshot

For these products, the standalone unit economics are deliberately bad because the company makes money on a downstream consumable:

- **Gillette razor (handle):** sold cheap, blades are the profit center. Looking at "Gillette razor" alone misrepresents the strategy.
- **Nespresso machine:** Nestlé sells the machine at thin margin; capsule pods are the profit. The machine is closer to *sell* (a customer acquisition cost for the pod business) than build.
- **PS5:** historically sold at or below cost; Sony makes money on game licensing fees, accessories, and PlayStation Plus subscriptions. The PS5's "build%" is mechanically near 100% — but the framing is wrong.
- **Nintendo Switch:** Nintendo is more profitable on the hardware than Sony on PS5, but still relies heavily on first-party game sales (Mario, Zelda, etc.) for the bulk of profit.
- **Peloton bike:** the bike is sold near cost (and was being subsidized for a while), with the $40/month membership generating long-term value. Pass 1 didn't address this.

These products are doing something the rubric fundamentally can't measure: their build/sell allocation only makes sense across the *full product ecosystem*, not the named SKU. Classifying the Nespresso machine alone as "78% build" (or whatever it works out to) is technically defensible but is the wrong story.

**Two ways to handle:**

- **Option A (preferred):** for these 5 products, redefine the "product" to be the system not the SKU. "Nespresso (machine + pods)" looks at Nestlé's coffee division; "PS5 (console + games)" looks at Sony's interactive entertainment segment; "Peloton (bike + membership)" uses Peloton's full company numbers. This gives a more honest answer to "where does your money go to enjoy this product."
- **Option B:** keep them as SKU-level entries, but mark them with a special annotation ("loss-leader") and add a footnote explaining the cross-subsidy. Risky — readers will skim past the footnote and the headline will be misleading.

I lean toward Option A. It loses some product-name visceral hook (everyone knows "Gillette razor," fewer people think "Gillette+Venus+Braun grooming-aid line") but the data tells a more honest story.

### 3. Coca-Cola Co. literally doesn't make Coke

Pass 1 covered this, but I want to escalate it. **Coca-Cola Co.'s 10-K is mostly about syrup concentrate.** The actual making of the can — bottling, carbonation, packaging, last-mile distribution — happens at independently-owned bottlers (Reyes Holdings, Coca-Cola Consolidated, Arca Continental, etc.). Coca-Cola Co.'s COGS is concentrate ingredients + concentrate manufacturing. That's a tiny fraction of the can-in-your-hand.

If we use Coca-Cola Co.'s 10-K to compute "Coke build%", we're computing "what fraction of Coca-Cola Co.'s controllable spending is build vs. sell" — *which is dominated by its role as a brand-licensing and concentrate-supply business*. The actual physical building of the can is mostly downstream from Coca-Cola Co.'s books.

Pass 1 noted that Coca-Cola Co. captures ~40% of consumer revenue, with bottlers and retailers taking the rest. That means **for a Coke entry on this graph, ~60% of the consumer's dollar isn't in the parent's 10-K at all**. The build% we'd compute (64% in pass 1's napkin math) is the build% of the *one-third of the dollar that flows to the brand owner*, and almost all of *that* one-third is concentrate manufacturing (build) — because Coca-Cola Co. is mostly a syrup factory plus a marketing department.

The honest reading is closer to:
- Of $2 paid by the consumer for a Coke,
- ~$0.50 = 7-Eleven margin (mostly retail overhead, employees, store ops — call this overhead-or-build for the retailer)
- ~$0.70 = bottler revenue (mostly build: bottling, carbonation, distribution, plus bottler overhead and profit)
- ~$0.80 = Coca-Cola Co. revenue (mostly *marketing and brand* — the concentrate is genuinely cheap; Coca-Cola Co. is the marketing entity in the chain)

So the "real" build/sell ratio of a $2 Coke depends mostly on how you classify the retailer and bottler operations. They are structurally build-heavy because they handle physical product. Layering them in moves the answer toward "Coke is mostly build."

**Conclusion:** the parent-rubric "Coke is 64% build" is technically true of Coca-Cola Co.'s books and **misleading** about a can of Coke. We're going to systematically misclassify any product where the brand owner is upstream of the actual making — which includes:
- All beer (AB InBev licenses brewing in some markets)
- Most spirits to some extent
- Many CPG via co-packers
- Anything where the parent does design + marketing and outsources manufacturing (Apple uses Foxconn, but Apple's books include payments to Foxconn as COGS, so this one is actually OK; the bottler model is worse because the bottler is a separate company)

**Recommendation:** include a methodology disclosure that for products with separate-entity bottlers/co-packers downstream of the brand owner, we are measuring the brand owner's cost structure only. This systematically *understates* build% for those products. **Or:** don't include Coke at all and replace with a vertically-integrated equivalent (PepsiCo's Frito-Lay snacks? Mostly self-distributed.) Or: keep Coke and accept the systematic bias as a known limitation.

### 4. Multi-product parent ratios are still going to look fake

Pass 1 said "use Kantar to differentiate sell-side per brand for multi-brand parents." That helps but doesn't go far enough. P&G has 7 products on the list. Even with brand-level Kantar measured-media spend, we'll have:

- Same parent-company COGS ratio applied to all 7 (since brand-level COGS isn't disclosed)
- Different brand-level *advertising* numbers from Kantar
- Same parent-level R&D, sales force comp, executive comp, distribution allocation

The result is that 7 P&G bars will move *only* by the brand-level advertising delta, but everything else will be identical. The visual will still show 7 P&G products clustered tightly together with small advertising-driven differences. Compared to non-P&G products, the visible "spread" will be artificial — driven by which company we have brand-level data for, not by actual brand-level economics.

**Recommendation:** pick one P&G product as a representative (Tide is the iconic one) and drop the other 6 P&G entries. Same surgery for Mondelez (one product), Kraft Heinz (one product), Apple (one product), Whirlpool (one product). The graph is more honest with 1 P&G bar than 7 nearly-identical P&G bars.

This brings the list from 50 to ~38. Add back products from new categories (DTC brands, private-label, niche-luxury) to reach 50.

---

## Soft breaks (scope boundaries — fixable by annotation or exclusion)

These don't kill the metric but should be explicitly addressed in `plan.md`.

### Big Mac → drop

McDonald's is 95% franchised. Corporate revenue is mostly rent and royalties. The Big Mac unit economics live in the franchisee's P&L, which McDonald's doesn't disclose. Pass 1 already flagged this.

**Decision:** drop. Replace with **Chipotle burrito** (mostly corporate-owned restaurants, reports unit-level economics in 10-K) or **Starbucks latte** (also mostly corporate-owned in US).

### Rolex / Dyson / IKEA → low-confidence, but keep

Private companies. Pass 1 suggested triangulation. I think these are fine to keep as long as we mark confidence: low and disclose the source. Triangulation will give "right order of magnitude" answers, which is what the chart needs.

But: **don't expect the Rolex number to shock anyone.** Luxury watch brands have ~30-40% gross margin and spend big on retail boutiques, sponsorships, and watch trade shows. The number we'll get is "Rolex is sell-heavy" which is unsurprising and not very visceral. The Rolex slot might be better spent on something where the *number* surprises rather than confirms.

### Distribution as "build" is a labeling choice that could go either way

The rubric counts distribution as build. That's a real choice — you could argue distribution is "getting it to the buyer," which is structurally about completing the sale, hence sell-side. The argument the rubric makes is "the product literally doesn't reach you without it." OK, fine, but with that logic the entire retailer apparatus is also "build" since the product doesn't sit on a shelf without retail real estate.

**Recommendation:** stick with the rubric's choice but disclose it in the methodology page. Distribution as build is defensible. But note that Coke's distribution is actually mostly bottler-side, not Coca-Cola Co. side, which we lose anyway (see fatal break #3).

### Customer support gut-test ambiguity (Apple Genius Bar, Tesla service centers)

Pass 1 flagged this. I think the gut test ("would the product still work if you stopped spending?") is actually fine for most of the list. The Apple Genius Bar is a small fraction of Apple's spend; reasonable people can disagree but it doesn't move the iPhone number much. Same for Tesla service.

**Decision:** keep the gut test. Note in each ticket result if the choice is non-obvious.

### R&D speculation (Apple's secret car, Lockheed's other programs)

For Apple, R&D is ~7% of revenue. If even 30% of that is non-iPhone (Vision Pro, AR glasses, the rumored car, etc.), then the iPhone-attributable R&D is ~5% of Apple's revenue, not 7%. That's a small enough difference to not change the chart significantly.

For Lockheed, this is bigger because they have many programs (F-35, F-16, missiles, satellites, helicopters). But we're already proposing to drop F-35 from the chart, so this is less of an issue.

**Decision:** default to including all parent R&D as build, note the imprecision in each ticket. The chart's claim is "this is the parent's overall cost structure as a proxy for the product's cost structure" and that claim should be on the methodology page.

### Toyota dealer markup — invisible to Toyota's books

When you buy a Camry for $30K, Toyota's revenue is the wholesale price (~$26K). Dealer keeps ~$4K (markup, financing, service). Toyota's 10-K doesn't show the dealer's economics. So "Camry build%" computed from Toyota's books understates the consumer dollar's flow to "sell" because the dealer is doing real selling work.

But this is symmetric: Ford F-150 has the same issue. So *relatively*, Camry vs. F-150 is comparable. Tesla, however, is direct-sale — no dealer. Tesla's 10-K shows the full revenue stack. So Tesla's build% will be apples-to-oranges with Toyota's because the boundary of the company differs.

**Recommendation:** explicitly note this in each auto ticket. Tesla is *more honest* (more of the consumer's dollar shows up on Tesla's books) but that means Tesla's build% will look *lower* than Toyota's not because Tesla spends more on sell but because Toyota's sell happens at a separate company we don't see. The correction goes the wrong way for the headline — the more vertically-integrated company looks worse.

This is a real methodology problem and I don't have a clean fix. Best we can do: disclose, and consider showing dealer-inclusive estimate as a sensitivity.

### Toyota Financial / Ford Motor Credit / Ferrari Financial — financial services

Toyota Financial Services is a major profit center for Toyota. ~10% of Toyota's revenue and ~20% of operating income comes from financing customer purchases. Same for Ford Motor Credit. Ferrari has Ferrari Financial Services. Tesla doesn't (or much less so). Apple has Apple Card.

Pass 1 didn't address this. Where do these go? Options:

- **Exclude entirely** (financing is a separate service, not part of "the product"). Cleanest. We'd need to subtract financing revenue and financing costs from each carmaker's books.
- **Include as overhead** (it's not build, not sell). Defensible, but inflates the overhead bucket.
- **Include as sell** (financing exists to make the car easier to buy). This is closer to truth — auto OEMs heavily subsidize financing as a sales tool. But it's also a real revenue source.

**Recommendation:** exclude entirely. Subtract finco revenue, COGS, and OpEx before computing the ratio. This is more work per ticket but cleaner. Same treatment for Apple Card if material (probably immaterial relative to Apple's scale).

---

## Refined metric

Putting it all together:

### Headline metric

**`build_pct = build_$ / (build_$ + sell_$)`** where build and sell are classified per the rubric in `question.md`, computed from the brand-owning parent's most recent annual report.

**This measures the brand-owning company's cost structure.** It is *not* an answer to "where does every dollar of consumer spending go" — that question requires retailer/dealer/bottler data we mostly don't have. The chart subtitle should reflect this honestly: something like "**Of the brand owner's controllable spending, what fraction made the thing vs. sold the thing.**"

### Reframed question for the page

Replace "Where does your $1 actually go?" with something like:

> "When you pay for a product, the brand-owning company captures some fraction of that money. Of the money the brand owner gets, how much funds making the thing vs. selling the thing? The answer ranges from 30% to 99%, and which bucket each product lands in is often surprising."

This is less viscerally hooky, but it's true. The hooky version was a lie.

### Adjusted product list (revised composition)

Drop:
- Big Mac (franchise model)
- F-35, GE MRI, Cessna 172, Cat D9 (B2B, structural cluster)
- 6 of 7 P&G products (parent-ratio sameness) — keep Tide only
- Maybe drop Old Spice / Crest / Bounty / Febreze / Charmin / Gillette → keep Tide as P&G representative

Restructure:
- Gillette razor → "Gillette grooming line" (P&G grooming segment, includes razors+blades)
- Nespresso machine → "Nespresso (machine + pods)" using Nestlé's coffee segment
- PS5 → "PlayStation division" (Sony's interactive entertainment segment)
- Switch → "Nintendo overall" (one segment, hardware+software co-mingled)
- Peloton bike → "Peloton overall" (includes membership)

Add (~12 new slots to keep at 50):
- Liquid Death or Olipop (sell-heavy DTC beverage)
- Costco Kirkland (private-label, build-heavy)
- Beats by Dre (sell-heavy electronics, Apple-owned)
- Stanley cup / Owala bottle (viral marketing)
- Tempur Sealy mattress (replacing Casper)
- Chipotle burrito (replacing Big Mac)
- Starbucks latte
- A Trader Joe's private-label item (build-heavy private label)
- Costco rotisserie chicken (loss-leader, deliberately so)
- A Lululemon-equivalent like ALO Yoga or Vuori (DTC athleisure)
- A Patagonia-equivalent that's public, e.g., Columbia Sportswear (publishes filings)
- Maybe a piece of Sephora-exclusive cosmetics (Drunk Elephant, Charlotte Tilbury)

### Two-panel layout

- **Panel A: Consumer products** (sorted by build%, ~38 products)
  This is the headline graph. The story is the spread among consumer products that compete in retail/distribution.
- **Panel B: B2B / institutional / structural** (~5-7 products)
  Visually de-emphasized, smaller, shown for reference. Boeing 737, John Deere combine, Blue Bird school bus, GE wind turbine. State explicitly: "structurally build-heavy by virtue of the buying process — listed for reference, not direct comparison."

### Confidence tiers

- **High:** US-listed, single-product or single-segment company with detailed 10-K segment reporting (Apple iPhone? actually medium because R&D spillover; Boeing; Tesla; Ferrari).
- **Medium:** US-listed multi-product parent (P&G, J&J, Kraft Heinz). Use Kantar for sell-side differentiation.
- **Low:** private (Dyson, Rolex, IKEA), franchise-heavy (already excluded), or cross-subsidized (Nespresso machine standalone — already restructured).

Display confidence as an icon next to each bar. Readers can decide how much weight to put on low-confidence entries.

---

## What to test in pass 3 (if needed)

I think pass 3 might not be needed — the metric is now clearly defined, the scope is bounded, and the methodology hazards are explicit. But if there's a pass 3, it should target:

1. **Validate the consumer-product spread looks interesting before committing.** Take 5 representative products and run rough numbers. If 38 consumer products all cluster between 60-80% build, the chart isn't visually compelling and we need a different metric. If they spread from 30-95%, we're golden.
2. **Sanity-check the Kantar approach for one P&G brand.** Get Kantar measured-media spend for Tide for a recent year. Estimate Tide's revenue (Statista, internal P&G presentations sometimes leak it). Compute Tide-specific advertising/revenue. Compare to P&G's overall advertising/revenue ratio. If they're within 1-2 percentage points, brand-level data adds nothing — collapse to parent ratio. If they're materially different, we have signal.
3. **Try estimating one full-consumer-dollar number for honesty.** Take Coca-Cola: estimate retailer margin + bottler margin + Coca-Cola Co. share, classify each component as build/sell/overhead/profit, and compute a consumer-dollar build%. Compare to the parent-rubric build%. If they're very different, decide what to show.

---

## Spin-off ideas (file these, don't pursue here)

These emerged during stress-testing. Each is a separate project worth its own `ideas/<slug>.md`:

1. **Where does your $1 actually go (full distribution chain).** The "honest" version of this question — bottlers, retailers, dealers, financing all included. Much harder, much more interesting if doable. Project name candidate: `consumer-dollar-anatomy`.
2. **Razors-and-blades cross-subsidy map.** For each "system" product (Nespresso, PS5, Switch, Peloton, Keurig, Gillette, Kindle), what's the cross-subsidy? How much does the company lose on the device to make money on the consumable? Visually interesting as a "loss-leader depth chart." Project name candidate: `loss-leader-economics`.
3. **Build/sell ratio over time, single industry.** How has the carbonated beverage industry's marketing spend / revenue ratio shifted from 1980 to today? More TV ads then, more digital + influencer + sports sponsorships now? Time series, single category. Project name candidate: `marketing-intensity-over-time`.
4. **Private-label vs. branded build/sell comparison.** Costco Kirkland Cola vs. Coca-Cola. Trader Joe's mac & cheese vs. Kraft. Same product category, very different cost structures. Probably 6-10 product pairs. Project name candidate: `private-label-vs-brand`.
5. **Quality-adjusted build/sell.** Cross with Consumer Reports / JD Power / similar quality scores. Does sell-heavy actually correlate with worse product? (Already noted as out-of-scope in `question.md`, but worth filing as `quality-vs-marketing-correlation`.)

I'll let Jason decide if any of these are worth promoting from `ideas/` — for now, parking.
