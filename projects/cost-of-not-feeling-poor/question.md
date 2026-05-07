# The Cost of Not Feeling Poor

## Core question

For each product Americans buy primarily to avoid feeling poor, what does it cost and how much shame does it avert? Which products give the best **shame averted per dollar**, and which are the worst extractive scams?

## Why it's interesting

These products exist because of *shared common knowledge* — once everyone knows you're "supposed to" have it, opting out feels like signaling poverty. The whole category is a manufactured shame market. The graph asks: given that the game is rigged, which moves on the board are good value and which are pure theft?

The expected punchline is an inversion of conventional wisdom. A $5,000 wedding ring amortized over a 15-year marriage is ~$28/month of "not feeling poor." A $5/month whitening toothpaste also averts shame, but a much smaller amount. The most-maligned products (rings, weddings, funerals) may have *better* shame-per-dollar than the daily continuous goods.

## Reference class

Average middle-class Americans, **including poor Americans who spend disproportionately to avoid acknowledging poverty**. The poor-American angle is morally serious — the floor falls hardest on people who can least afford it, and they often pay the highest premiums (rent-to-own furniture, payday-financed sneakers, "we have to host the party at the right place"). The graph should make this visible.

Note: "feeling poor" and "feeling anxious" overlap heavily here. Poverty is anxiety-inducing, and these products buy reduction in poverty-flavored anxiety. Health insurance for healthy 20-somethings is included even though usage is rare — the buyer pays for anxiety reduction, not actuarial value.

## Three categories of floor goods

### A. Continuous floor goods
Daily/weekly low-grade signal. Skipping = persistent low-grade shame. Examples: whitening toothpaste, recent iPhone, AirPods, Lululemon, decent haircut, manicure, branded sneakers, designer handbag, stainless appliances, quartz counters, cage-free eggs, branded pantry items, streaming bundle, gym membership.

### B. Event floor goods
Single occasions where opting out is socially impossible. Third party (officiant, funeral director, photographer) primes the purchase. Comparison-shopping is taboo, decision is emotional, can't postpone. Examples: engagement ring, wedding dress, wedding venue, photographer, honeymoon, funeral casket, funeral home services, kids' birthday party at a venue, Christmas presents per child, prom.

### C. Risk-insurance floor goods
You're not paying for the thing — you're paying to avoid a *visible breakdown moment* that broadcasts poverty. Examples: new car premium over equivalent used, auto lease premium, health insurance for healthy 20-somethings, extended warranties, brand-name OTC medicine vs. generic, AppleCare, pet insurance, home warranty.

## Initial item list (33 items)

**Continuous (15):** whitening toothpaste, recent iPhone (premium over budget Android), AirPods, Apple Watch, Lululemon leggings, decent haircut, manicure visits, branded sneakers, mid-tier designer handbag, stainless appliances, quartz countertops, cage-free/organic eggs, olive oil + branded pantry, streaming bundle, gym membership.

**Event (10):** engagement ring, wedding dress, wedding venue + reception, wedding photographer, honeymoon, funeral casket, funeral home services, kids' birthday party at a venue, Christmas presents per child, prom dress + tickets + activities.

**Risk-insurance (8):** new car premium over equivalent used, auto lease premium, health insurance for healthy 20-somethings, extended electronics warranties, brand-name OTC medicine vs. generic, AppleCare, pet insurance, home warranty.

The list isn't sacred — explore phase may add, drop, or substitute. Aim for ~30 final items so the scatter plot has substance without becoming illegible.

## Methodology: how to quantify shame

Direct shame measurement is impossible. Instead, **four measurable proxies combined into a composite, with sensitivity analysis on the weights.**

### 1. Conformity rate (0–1)
Of the eligible population, what fraction buys it? 95% of brides have an engagement ring = 0.95. Sources: industry surveys (The Knot, NFDA, Experian, BLS Consumer Expenditure Survey).

### 2. Income flatness (0–1)
Penetration across income deciles. A floor good has near-flat penetration regardless of budget. Score = 1 − |Spearman correlation of penetration with income decile|. Sources: BLS CES for continuous goods; per-decile conformity rates for events.

### 3. Commodity markup ratio (0–1)
Where applicable, the shame premium is *directly* measurable. Score = (retail − functional equivalent cost) / retail.
- Engagement ring vs. cubic zirconia: ~0.95
- Branded medicine vs. generic: variable
- New car premium minus actuarial reliability gain: variable
- Doesn't apply to everything (no "generic funeral"). Where it applies, this is the cleanest signal we have.

### 4. Shame language signal (0–1)
Normalized frequency of "I can't afford X" / "I felt poor without X" mentions in r/povertyfinance, r/personalfinance, r/frugal, parenting subreddits, etc. Mentions per product / total subreddit volume × scaling. Captures lived shame.

### Composite shame score
Weighted sum, default weights:
- 0.4 conformity
- 0.25 flatness
- 0.25 markup (or redistributed when N/A)
- 0.1 shame language

Range 0–1. **All four components published alongside the composite.** Include a sensitivity analysis showing how rankings shift under alternative weight choices. If rankings are robust to reweighting → conclusion stands. If not → say so explicitly.

This is honest measurement of an inherently fuzzy thing. It satisfies the research-honesty rule: the methodology asymmetries are surfaced, not hidden behind a black-box score.

### Where the scoring lives in the pipeline
- **Research tickets** gather raw data only: median spend, conformity %, per-decile penetration, commodity-equivalent cost (if any), scraped Reddit/forum mention counts. **No scoring at the ticket level.**
- **Plan phase** locks the rubric and weights *after* seeing what the data looks like, to prevent premature weight-baking.
- **Graph component** computes the composite + renders the sensitivity analysis.

## Amortization rule (the X-axis)

Each product needs annualized cost so it's comparable across categories:
- **Continuous:** cost × frequency per year (toothpaste $5/mo × 12 = $60/yr; iPhone Pro premium ÷ 3-yr replacement cycle).
- **Event:** cost ÷ expected years between events (wedding ring ÷ ~12 yr median US marriage; funeral casket ÷ ~25-30 yr per adult lifetime parent loss; kid's birthday party × ~10 yr of childhood).
- **Risk-insurance:** annual premium minus expected actuarial payout. The gap = pure shame premium.

## Each research ticket should produce

1. Median US spend (point estimate + range)
2. Amortization period justification
3. Conformity rate with source
4. Per-income-decile penetration data (if available)
5. Commodity-equivalent cost (if applicable)
6. Shame-language signal (Reddit mention frequency in shame contexts)
7. Annualized cost = spend ÷ amortization period
8. Notes on data quality, edge cases, reference-class caveats

No scoring at the ticket level. The plan phase combines components into the composite.

## Likely graph form

Scatter plot:
- X: annualized cost (log scale likely)
- Y: composite shame score (0–1)
- Color: category (continuous / event / risk-insurance)
- Bubble size: total US category spending per year
- Diagonal lines: shame-per-dollar ratio bands (best deal corner / worst deal corner)
- Side panel or hover: sensitivity analysis showing rank shifts under alternative weights

The story the graph tells: which floor goods are best-priced per shame averted, which are most extractive, and which categories systematically over- or under-charge for the floor.

## Scope decisions already locked

- **One graph, color-coded by category** (not three small multiples). The cross-category comparison is the punch.
- **Snapshot only.** Drift over decades (AC / dishwashers / smartphones moving from luxury to floor) is a great follow-up project but out of scope for this one.

## Related projects

- `keeping-up-with-the-joneses.md` (still messy idea) — the macro version: total work-hours to maintain a median lifestyle. This project is the micro decomposition.
- `share-of-the-pie` (graduated) — what fraction of GDP per capita the median person captures.
- `grandpas-eggs` (graduated) — quality-equivalent commodity costs in productivity-adjusted labor-hours.
