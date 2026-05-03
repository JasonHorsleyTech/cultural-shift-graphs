# Exploration Pass 1: Grounding "Bang for Buck"

## The question, restated plainly

For someone at the 25th percentile of US household income (~$41k as of 2024), which life interventions deliver the most quality-of-life improvement per dollar and per unit of effort? The hypothesis is that walking dominates by a comical margin.

---

## Concrete examples: napkin math

### Example 1: Walking vs. CBT for depression

**Bob's depression baseline:** Among adults earning <$25k/year, depression prevalence is roughly 15-20%, about double the rate of households earning >$75k. At the 25th percentile (~$41k), Bob's bracket sits between these poles — call it ~12-14% prevalence of current depressive episode, vs. ~7% for the top quartile.

**Walking intervention:**
- Cost: $0/year (shoes Bob already owns)
- Activation energy: Near zero. Walk out the front door.
- Time investment: 30 min/day = 182 hours/year
- Evidence: A meta-analysis in IJBNPA found walking at moderate intensity reduces all-cause mortality risk by ~11%. For depression specifically, a 2008 RCT of overweight/depressed elderly women found a 6-month walking program produced 0.132 incremental QALYs at a cost of ~$311/QALY (barely more than shoe wear). A 2025 BMC systematic review of physical activity interventions for mental health found cost-effectiveness ratios as low as ~$150/QALY.
- QALY gain estimate: ~0.05-0.13 QALYs/year (combining mortality reduction, depression relief, mobility improvement, cardiovascular benefit)

**CBT therapy:**
- Cost without insurance: $100-250/session. A standard course is 12-20 sessions = $1,200-$5,000. Annual maintenance: 6-12 sessions = $600-$3,000/year. For Bob at $41k gross (~$34k after taxes), this is 3.5-15% of take-home pay.
- With sliding scale/community clinic: $20-30/session, so $240-$600 for a full course. But availability is limited, wait times are months.
- Activation energy: High. Need to find a therapist, get on a waitlist, show up weekly, engage emotionally. Car or transit required.
- Evidence: CBT produces ~0.02-0.06 incremental QALYs over antidepressants alone for depression. Cost per QALY: $15,000-$33,000 from a societal perspective (Annals of Internal Medicine, 2019). At 5 years, CBT becomes more cost-effective than SSRIs because it has lasting effects and reduces relapse — but that's a long horizon.
- QALY gain estimate for Bob: ~0.03-0.06 QALYs/year (depression-specific only)

**The punchline:** Walking delivers a comparable or larger QALY gain to CBT at roughly 1/100th the financial cost. Even accounting for the time investment (182 hrs/year vs. ~20 hrs/year for CBT), walking's cost-per-QALY is an order of magnitude better.

### Example 2: Walking vs. bariatric surgery for obesity

**Bob's obesity baseline:** Adults earning <$15k have 37%+ obesity prevalence. At the 25th percentile, it's around 35-40% — significantly higher than the ~31% in the top income bracket (CDC MMWR, 2011-2014 data, pattern persists in recent surveys). Bob has roughly a 1 in 3 chance of being obese.

**Walking intervention (for an obese Bob):**
- Same cost as above: $0
- Evidence for weight management: Walking alone doesn't produce dramatic weight loss (typically 1-3 kg over 6-12 months without dietary changes), but it significantly reduces metabolic syndrome risk independent of weight loss. All-cause mortality reduction of 20-21% at 150-300 min/week of moderate activity (harmonized meta-analysis, AJPM 2024).
- QALY gain: ~0.05-0.10 QALYs/year

**Bariatric surgery:**
- Cost: $20,000-$35,000. Insurance coverage requires BMI >40 or BMI >35 with comorbidities, plus months of supervised diet. 35% of eligible patients lack adequate insurance.
- For Bob without insurance: Essentially inaccessible. Even with insurance, copays/deductibles on a $41k income are devastating.
- Activation energy: Extreme. Surgical consult, insurance pre-authorization, 6-month supervised diet, surgery, recovery (2-4 weeks off work), lifelong dietary restrictions, vitamin supplementation forever.
- Evidence: Cost per QALY of $7,000-$23,000. Net QALY gain of ~2.1 QALYs per person over a lifetime. That's substantial — but spread over 20-30 years, it's ~0.07-0.10 QALYs/year.
- Annual ongoing cost: Vitamins, follow-up visits, potential revision surgery. ~$500-1,500/year.

**The punchline:** Bariatric surgery produces similar annual QALY gains to walking but costs $20,000+ upfront and requires months of medical gatekeeping. For Bob's income, the upfront cost alone is ~50-85% of annual gross income. Walking costs zero.

### Example 3: Generic SSRIs — the "cheap medical intervention" benchmark

- Cost: Generic sertraline/fluoxetine = $5-20/month = $60-240/year. This is genuinely cheap.
- Activation energy: Moderate. Need a doctor visit ($100-250 without insurance), prescription, monthly pharmacy trips. Some stigma barrier.
- Evidence: SSRIs produce ~0.01-0.04 incremental QALYs for depression (conservative — effect sizes are debated, and this only addresses one QoL dimension).
- Risks: Side effects (sexual dysfunction 25-73%, weight gain, emotional blunting), withdrawal difficulty, long-term unknowns. These reduce net QALYs.
- Cost per QALY: $3,000-$15,000 range depending on the study and whether side effects are netted out.

**Vs. walking:** SSRIs are surprisingly affordable, but they only address one dimension (depression). Walking addresses depression AND cardiovascular health AND metabolic health AND mobility AND social isolation (if walking in a neighborhood). SSRIs might beat walking on depression alone for severe cases, but walking wins overwhelmingly on total QoL impact.

---

## Proposed metric

### X-axis: Total Annual Cost to Bob (composite)

A single number combining:
1. **Financial cost** ($/year) — normalized to Bob's ~$41k income. Express as percentage of gross income.
2. **Time cost** (hours/year) — valued at Bob's implied hourly wage (~$20/hr). Walking = 182 hrs = $3,640 in opportunity cost. CBT = 20 hrs = $400.
3. **Activation energy penalty** — a multiplier (1.0-3.0) reflecting barriers to starting. Walking = 1.0 (just go). Bariatric surgery = 3.0 (insurance, referrals, surgery, recovery). This is the wobbly part (see below).

**Combined formula possibility:** Total Cost = (Annual $ Cost) + (Hours/year x $20) + (One-time startup cost, amortized over 5 years)

This gives a single dollar figure per intervention per year.

### Y-axis: Annual QALY Gain (net)

Net QALYs gained per year, accounting for:
- Primary benefit (mortality reduction, symptom relief, functional improvement)
- Side effects and risks (medication side effects, surgical complications)
- Cross-dimensional spillover (exercise improves mood AND cardiovascular health AND sleep; SSRIs improve mood but may worsen sexual function)

Use published QALY estimates where available, note confidence level.

### Bubble size: Evidence confidence

- Large bubble = multiple RCTs, meta-analyses, high-quality systematic reviews
- Medium bubble = some RCTs, observational studies with strong effect sizes
- Small bubble = limited evidence, mostly observational, or extrapolated

### What one data point looks like

| Intervention | Annual $ Cost | Hours/Year | Startup Cost (amortized) | Total Annual Cost | Net QALY/Year | Confidence |
|---|---|---|---|---|---|---|
| Walking (30 min/day) | $0 | 182 | $0 | $3,640* | 0.08 | High |
| Generic SSRI | $150 | 12 | $50 | $440 | 0.02 | High |
| CBT (12 sessions) | $2,400 | 20 | $0 | $2,800 | 0.04 | High |
| Bariatric surgery | $1,000/yr | 50 | $5,000 | $6,500 | 0.08 | High |

*If we include time at opportunity cost. If we don't, walking = $0.

**Key decision: Should time be monetized?** If we value time at Bob's hourly wage, walking suddenly looks expensive because it takes 30 min/day. But nobody actually trades walking time for paid work — Bob isn't losing wages by walking. Time cost is more like "effort budget" than dollar cost. This needs resolution in pass 2.

---

## Data sources for longitudinal / cross-comparable estimates

### 1. Tufts Medical Center Cost-Effectiveness Analysis (CEA) Registry
The gold standard. Catalogs thousands of cost-effectiveness analyses from published literature. Searchable by intervention, disease, cost-per-QALY. This is where we get standardized QALY estimates across different interventions.

### 2. CDC BRFSS (Behavioral Risk Factor Surveillance System)
Annual survey of 400,000+ adults. Sliceable by income, state, demographics. Provides Bob's baseline health profile: obesity prevalence, depression prevalence, exercise frequency, healthcare access — all by income bracket. Data available from 1984-present, publicly accessible.

### 3. WHO-CHOICE and Global Health Cost-Effectiveness literature
WHO's database of cost-effectiveness estimates for health interventions. Less US-specific but provides a standardized framework and fills gaps where US-specific CEA data is thin (e.g., dog ownership, meditation, community participation).

### Supplementary sources
- **NHANES** (National Health and Nutrition Examination Survey) — objective health measurements (BMI, blood pressure, lab work) by income.
- **Medical Expenditure Panel Survey (MEPS)** — healthcare spending by income bracket.
- **Cochrane Reviews** — systematic reviews with meta-analyses for specific interventions.
- **NICE (UK)** — publishes cost-per-QALY thresholds and evaluations. Different healthcare system, but QALY methodology is transferable.

---

## What I'm unsure about — where the framing is wobbly

### 1. The "composite cost" axis is doing too much work

Financial cost and effort cost are fundamentally different things. $2,400/year for CBT and 182 hours/year for walking are both "costs" but they're not fungible. Should the X-axis be purely financial, with effort shown as a separate dimension (color, shape, annotation)? Or should we commit to a composite? A composite is cleaner for the scatter plot but requires defensible conversion rates (what's an hour of effort worth?).

**Risk:** If we monetize time, walking looks middling. If we don't, walking looks like it's cheating by ignoring its main cost. Either way, the axis definition biases the visual.

### 2. QALY estimates aren't apples-to-apples across interventions

Published QALY gains for walking come from cardiovascular/mortality studies. Published QALY gains for SSRIs come from depression studies. Published QALY gains for bariatric surgery come from obesity/diabetes studies. These are measuring different aspects of quality-of-life through different lenses. When we line them up on the same Y-axis, we're implicitly claiming they're comparable — but a QALY gained from "not dying of a heart attack" is measured differently than a QALY gained from "being less depressed."

**Mitigation:** QALYs are *designed* to be cross-comparable — that's the whole point of the metric. But the confidence intervals are wide, and the populations studied often don't match Bob's profile. We should flag this and use ranges rather than point estimates.

### 3. Walking is multi-dimensional; most other interventions are single-dimensional

Walking improves cardiovascular health, reduces depression, improves sleep, increases social contact (if done outside), improves mobility, and reduces all-cause mortality. Most published QALY estimates for walking capture only one or two of these dimensions. The "true" QALY gain of walking may be significantly higher than any single study suggests, because no single study measures all the dimensions simultaneously.

Conversely, SSRIs and surgery have side effects that reduce net QALYs, and single studies often don't fully account for these.

**Risk:** If we naively use published point estimates, we may undercount walking's benefits and overcount narrow interventions. But if we try to aggregate across dimensions, we risk double-counting.

### 4. Interventions interact — they're not independent

Walking + SSRIs together may produce more than the sum of their parts (exercise enhances SSRI efficacy). Bariatric surgery + walking is more effective than either alone. The scatter plot implies independence, but reality is synergistic. This is a known limitation of the format — worth noting in the graph's methodology but not a dealbreaker.

### 5. "Bob" is a distribution, not a person

The 25th percentile income bracket contains wildly different people: a single 25-year-old making $41k has different needs than a family of four at the same household income. Depression rates, obesity rates, and intervention accessibility all vary within the bracket. We need to be transparent that "Bob" is a statistical composite anchored on the median characteristics of this bracket, not a specific individual.

### 6. Some interventions lack rigorous QALY data

Dog ownership, meditation, volunteering, religious participation, and "joining a club" have real but poorly quantified benefits. The evidence base is mostly observational with small effect sizes and high confounding risk. These interventions might cluster in the "low cost, uncertain benefit" zone of the graph — which is honest but less visually dramatic than the walking-vs-surgery comparison.

---

## Initial verdict on the hypothesis

The hypothesis that walking dominates is **likely correct on the financial axis** — nothing else delivers measurable QALY gains at $0/year. But:

- If we include time cost, the picture gets muddier.
- If we compare walking to generic SSRIs for depression *specifically*, SSRIs may win on a per-hour basis (12 hrs/year of doctor visits vs. 182 hrs/year of walking, for a similar depression-specific QALY gain).
- Walking's ace is that it's **multi-dimensional** — it doesn't just fix depression OR cardiovascular risk OR obesity risk. It does all of them partially. No other intervention in the list has that breadth at that price.

The graph will be most honest and most visually striking if the X-axis is purely financial cost and the time/effort dimension is shown separately (perhaps as a secondary chart or as annotations). That way, walking genuinely sits in the top-left corner ($0, high QALY), and the visual punchline lands without the axis definition doing the persuading.

---

## Recommendations for Pass 2

1. **Decide on the cost axis:** Pure financial cost vs. composite. I lean toward pure financial cost as the primary X-axis with effort as a secondary dimension. Stress-test this against edge cases.
2. **Stress-test the QALY comparability problem:** Can we find a single source that estimates QALYs across multiple interventions using the same methodology? The CEA Registry is the best bet. If not, we need explicit confidence bands.
3. **Identify which interventions to drop:** Some (yoga, reading, continuing education) may have such thin QALY evidence that including them weakens the graph. Better to have 10 solid data points than 17 shaky ones.
4. **Probe the "walking is free" claim:** Is it really? What about safety (walking in Bob's neighborhood), weather, disability/mobility limitations, and the opportunity cost of time? These are real barriers even if the dollar cost is zero.
