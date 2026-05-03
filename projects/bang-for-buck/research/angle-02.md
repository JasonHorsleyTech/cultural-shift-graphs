# Exploration Pass 2: Stress-Testing the Metric

The job of this pass is to try to break the framing from Pass 1. If the metric survives, we sharpen it. If it doesn't, we fix it or scope it.

---

## Housekeeping: the income anchor is inconsistent

`question.md` says "25th percentile of household income (~$30k)." Pass 1 uses ~$41k. The Census Bureau's 2023 ACS puts the 25th percentile of household income at roughly $30,000-$33,000. The ~$41k figure may be confusing household income with individual full-time earnings. This matters because at $30k, interventions that cost $2,400/year (CBT) consume 8% of gross income, not 6%. Bariatric surgery copays become even more devastating. **Lock this down in planning: use Census household income data, not individual wage data.** The difference is not cosmetic — it changes Bob's insurance status, disposable income, and access barriers meaningfully.

---

## Attack 1: The QALY comparison is less apples-to-apples than claimed

Pass 1 acknowledged this but underestimated the severity. Here's the specific problem:

**Different baselines, different gains.** QALY studies for walking typically use general-population or sedentary-adult cohorts. QALY studies for SSRIs use clinically depressed populations. QALY studies for bariatric surgery use morbidly obese populations. When we put these on the same Y-axis, we're comparing:
- Walking's effect on a "typical sedentary person" (who may or may not be depressed or obese)
- SSRIs' effect on someone with diagnosed major depressive disorder
- Bariatric surgery's effect on someone with BMI > 40

Bob might be any combination of these. If Bob is clinically depressed and morbidly obese, SSRIs and bariatric surgery are being measured against his actual condition, while walking's QALY estimate is drawn from a population that doesn't match him. If Bob is mildly overweight and not depressed, the walking studies fit but the SSRI/surgery numbers are irrelevant.

**How bad is this?** Moderate. It doesn't kill the project, but it means we can't naively plot a single QALY number per intervention. We need to either:
- (a) Pick a fixed Bob profile (e.g., "obese, mildly depressed, sedentary, no diagnosed conditions requiring surgery") and filter QALY studies to match, or
- (b) Show ranges per intervention and be explicit that the baseline population differs.

**Verdict: scope boundary, not fatal flaw.** Option (a) is cleaner for the graph. Define Bob's health profile explicitly during the planning phase and match studies accordingly. Interventions where we can't find QALY data for Bob's profile get flagged with low confidence.

---

## Attack 2: "Walking is free" is doing rhetorical work that won't survive scrutiny

The $0 cost claim is the visual punchline — walking alone in the top-left corner. Let's stress-test it.

### 2a: Safety is a real cost for Bob's bracket

Bob lives in a neighborhood correlated with the 25th percentile income: likely lower-density suburban or rural (where there are no sidewalks), or urban with higher crime rates. Walking 30 min/day means:
- **No sidewalks:** 28% of US roads lack sidewalks. In rural and suburban areas where lower-income housing is common, this rises to 50%+. Walking on road shoulders carries real injury risk.
- **Crime exposure:** In lower-income urban neighborhoods, walking — especially early morning or after dark (when shift workers have free time) — carries elevated risk of assault, robbery, or harassment. This is especially true for women in Bob's bracket.
- **Traffic danger:** Pedestrian fatality rates are 2x higher in low-income areas (GHSA, 2022). This isn't a "soft" cost — it's a literal QALY reduction that should be netted against walking's QALY gains.

This doesn't make walking expensive, but it means "$0 and zero barriers" is overstated for Bob specifically. The honest framing is: walking is near-free financially but carries non-trivial safety costs that vary by geography and demographics. Some Bobs can walk safely; others genuinely can't without driving to a safe walking location (which adds car costs, time, and activation energy).

**Verdict: scope boundary.** Note it honestly. Maybe add a "safety-adjusted" variant for Bob in a high-risk pedestrian environment. Don't pretend the barrier doesn't exist.

### 2b: Shoes are not free, but this is a weak objection

Pass 1 says "shoes Bob already owns." Fair enough — Bob has shoes. Dedicated walking shoes improve comfort and reduce injury risk but aren't strictly necessary. This objection doesn't hold. Walking is genuinely near-$0 in direct financial cost.

### 2c: Weather and climate

Bob in Phoenix walks in 115F heat. Bob in Minneapolis walks in -20F wind chill. Bob in Seattle walks in rain 150 days a year. Indoor alternatives (mall walking, treadmill) either require transportation or equipment cost. Year-round outdoor walking is genuinely impractical for a significant percentage of Bobs.

**Verdict: real but addressable.** Note geographic variability. Don't claim walking is universally zero-barrier.

---

## Attack 3: The time cost problem is the crux — and Pass 1 didn't resolve it

Pass 1 flagged this as "needs resolution" but I think it's more fundamental than that. There are three coherent positions, and the choice determines whether walking wins:

### Position A: Don't monetize time. X-axis = pure dollars.
- Walking = $0, top-left corner, punchline lands.
- **Problem:** This is intellectually dishonest. 182 hours/year is a massive commitment. An intervention that costs $500/year but takes zero time (e.g., a daily pill) is "more expensive" than one that takes 30 minutes every single day for the rest of your life? That defies common sense. Readers will object.

### Position B: Monetize time at opportunity cost ($20/hr).
- Walking = $3,640/year. Suddenly it's in the middle of the pack, not the clear winner.
- **Problem:** As Pass 1 noted, Bob isn't actually forgoing $20/hr by walking. He's not choosing between walking and an extra hour of paid work. The opportunity cost framing is wrong for most people's actual time allocation. Bob's alternative to walking is watching TV or scrolling his phone, not earning wages.

### Position C: Two-axis display. Financial cost on X, time cost shown separately.
- Cleanest intellectually but makes the graph harder to read. A scatter plot with two X-dimensions is either a 3D chart (unreadable) or requires a dual-chart layout.
- **Problem:** The visual punchline gets diluted across two charts.

### My proposed resolution: Reframe the X-axis as "Annual Dollar Cost (excluding time)"

Be explicit in the axis label and methodology that time is excluded from the X-axis. Add a secondary visual element — color coding or a small glyph — showing time commitment category (Low: <1 hr/week, Medium: 1-3 hr/week, High: 3+ hr/week). This way:
- The scatter plot is clean and the punchline lands (walking at $0).
- Time cost is visible but doesn't pollute the financial axis.
- Readers can see that walking is free-but-time-intensive without it being hidden.
- The honest takeaway becomes: "Walking gives you the most QALY per dollar, but it asks for your time." That's actually a *stronger* punchline than "walking wins at everything" because it's true.

**Verdict: not fatal, but requires an explicit design decision before planning.** I recommend Position C with the color-coding approach.

---

## Attack 4: Adherence rates blow a hole in the comparison

This is the attack I think is most damaging and that Pass 1 completely missed.

**The QALY estimates for every intervention assume adherence.** Walking delivers 0.08 QALYs/year *if Bob actually walks every day.* SSRIs deliver 0.02 QALYs/year *if Bob takes the pill every day.* CBT delivers 0.04 QALYs/year *if Bob completes 12+ sessions.*

Real-world adherence rates destroy the picture:
- **Walking/exercise programs:** 50% dropout within 6 months (Dishman, 1988; updated meta-analyses show similar). Among lower-income adults, adherence is even lower due to time constraints, fatigue from physical labor jobs, and lack of safe walking environments.
- **SSRIs:** ~50% discontinue within 6 months, but those who continue have high daily adherence (it's a pill — low effort per day).
- **CBT:** ~30-50% complete a full course. Dropout is front-loaded (sessions 1-4).
- **Bariatric surgery:** You can't un-have surgery. Post-surgical dietary compliance is ~60-70%, but the anatomical changes produce benefits regardless. Adherence is essentially 100% for the primary intervention.

If we multiply QALY gains by real-world adherence rates, the picture shifts:
- Walking: 0.08 x 0.50 = 0.04 effective QALYs/year
- SSRIs: 0.02 x 0.50 = 0.01 effective QALYs/year
- Bariatric surgery: 0.08 x ~1.0 = 0.08 effective QALYs/year
- Dog ownership: very high "adherence" (the dog still needs walking whether you feel like it or not)

Walking still beats SSRIs on a per-dollar basis, but bariatric surgery now clearly beats walking on raw QALY output. The "walking dominates everything" punchline weakens.

**How to handle this:** I see two options:
1. **Ignore adherence.** Plot the "if you actually do it" numbers. Note the limitation. This is what most cost-effectiveness analyses do.
2. **Show adherence-adjusted values as a secondary view.** A toggle or dual chart: "ideal" vs. "real-world." This is more honest and produces an interesting secondary insight: the interventions that are hardest to quit (surgery, dog ownership, medication with withdrawal effects) outperform on a real-world basis.

**Verdict: not fatal, but too important to ignore.** I recommend option 1 (plot ideal adherence) with a clear methodological note. An adherence-adjusted companion chart could be a spin-off graph.

---

## Attack 5: Multi-dimensional benefits create a double-counting risk

Pass 1 identified walking's multi-dimensional benefit as an advantage. But it's also a measurement trap.

If we sum walking's QALY gains from separate studies:
- Cardiovascular mortality reduction: +0.05 QALYs/year
- Depression improvement: +0.03 QALYs/year
- Diabetes risk reduction: +0.02 QALYs/year
- Sleep improvement: +0.01 QALYs/year

Adding these naively gives 0.11 QALYs/year. But these aren't independent effects — they share causal pathways. Improved sleep partially mediates depression improvement. Cardiovascular gains partially mediate diabetes risk reduction. The true combined effect is less than the sum.

Meanwhile, SSRIs' QALY estimate comes from a single domain (depression), so there's no double-counting risk. The comparison becomes biased: walking gets credit for benefits that are partially overlapping, while narrow interventions get a single clean number.

**How to handle this:**
- Use QALY estimates from studies that measure all-cause mortality or general health-related quality of life (e.g., EQ-5D instruments), not domain-specific studies summed together.
- For walking, the best single-source estimate is from all-cause mortality meta-analyses (which implicitly capture multi-dimensional benefits through a single endpoint). This gives a lower but more defensible number.
- For interventions with side effects (SSRIs, surgery), use net estimates that already account for harms.

**Verdict: scope boundary.** Solvable with careful source selection. Note it in methodology. Use all-cause or general-QoL QALY estimates where available, domain-specific only as fallback.

---

## Attack 6: Publication bias favors exercise interventions

Exercise research is subject to strong publication bias:
- Exercise studies are almost never blinded (participants know they're exercising).
- Positive results about exercise are more publishable (they align with public health messaging).
- Many exercise studies compare "exercise vs. nothing" rather than "exercise vs. active control." SSRIs are compared against placebo pills (proper blinding); walking is compared against sitting (no blinding possible).
- The exercise-depression literature has been specifically criticized for small sample sizes and high heterogeneity (Cooney et al., Cochrane 2013).

This means walking's QALY estimates may be systematically inflated compared to pharmacological interventions, which face stricter trial design requirements.

**How bad is this?** Real but hard to quantify. The signal for exercise benefits is strong enough that publication bias probably inflates the magnitude but doesn't create a false positive. Walking almost certainly helps; the question is whether it helps 0.08 QALYs/year or 0.04 QALYs/year.

**Verdict: methodological caveat, not fatal.** Use conservative estimates for exercise. Note the confidence differential between pharmaceutical-grade RCTs and exercise observational studies. This is what the bubble-size (confidence) dimension is for.

---

## Attack 7: Some proposed interventions are unmeasurable in QALYs

Pass 1's list includes: dog ownership, meditation, volunteering, religious participation, reading, learning a new skill, joining a club. For these:

- **Dog ownership:** No published cost-effectiveness analysis in QALYs. Benefits are inferred from observational studies on loneliness, cardiovascular health, and physical activity (dog walking is a subset of walking). Cost is high ($1,000-$3,000/year for a healthy dog; more for vet emergencies). You can't convert "dog owners report 0.2 fewer points on the UCLA Loneliness Scale" into QALYs without massive hand-waving.
- **Meditation:** Some QALY data exists for mindfulness-based stress reduction (MBSR) programs, but it's thin and usually in clinical populations (cancer patients, chronic pain). General-population QALY estimates for meditation are essentially nonexistent.
- **Volunteering, religious participation, reading, clubs:** These have observational associations with longevity and well-being, but confounding is extreme (healthy, social, financially stable people are more likely to volunteer — the volunteering may not be causing the benefit). No QALY-based cost-effectiveness analyses exist.

**How to handle this:**
- Drop interventions without any QALY-adjacent evidence from the main scatter plot. This likely means dropping: dog ownership, volunteering, religious participation, reading, learning a skill.
- Keep: walking, gym/structured exercise, SSRIs, CBT, bariatric surgery, diet overhaul, meditation (if MBSR data suffices), sleep hygiene (some QALY data exists), strength training, yoga (small but growing QALY literature), social media reduction (emerging evidence).
- Or: create a secondary table of "interesting but unquantifiable" interventions with qualitative assessments.

**Verdict: scope boundary.** Trim the intervention list to those with defensible QALY data. Better 10 solid points than 17 shaky ones (Pass 1 said the same thing — I'm reinforcing it).

---

## Attack 8: The "Bob" composite hides meaningful subgroups

Pass 1 flagged this. Let me sharpen it with specific failure cases.

**Bob #1: 24-year-old single male, $30k/year, no health conditions, mild anxiety.**
- Walking helps, but his QALY gain is small because his baseline health is decent.
- CBT or SSRIs for anxiety might deliver higher marginal QALYs.
- Bariatric surgery is irrelevant — he's not obese.

**Bob #2: 55-year-old woman, $30k household with dependent, BMI 38, type 2 diabetes, knee pain.**
- Walking is physically painful and potentially dangerous (fall risk, joint damage).
- Bariatric surgery could be transformative (2+ lifetime QALYs).
- SSRIs are irrelevant — she's not depressed, she's in pain.

**Bob #3: 40-year-old man, $30k, obese, depressed, no car, rural area.**
- Walking could help both conditions — but no sidewalks, no safe routes, and he's too depressed to initiate.
- SSRIs + walking together would be ideal — but the scatter plot doesn't show combinations.
- CBT is inaccessible (no therapists within 50 miles, no car, no telehealth literacy).

The "which intervention wins" answer changes depending on which Bob you're profiling. The hypothesis "walking dominates for everyone" is false — walking dominates for the *average* Bob on the *average* health dimension. For specific Bobs with specific conditions, targeted interventions win.

**How to handle this:**
- Be explicit that the graph shows the *average* person at the 25th percentile, not every person.
- In the methodology note, acknowledge that individual optimal interventions vary.
- This is actually fine for the graph's purpose — we're showing the general shape of cost-effectiveness, not prescribing individual treatment plans.

**Verdict: acceptable limitation, not a flaw.** Every population-level analysis has this issue. Acknowledge it; don't try to solve it.

---

## Refined metric proposal

After the stress test, here's what survives:

### X-axis: Annual Financial Cost ($)
Pure dollar cost per year to Bob. Includes:
- Direct cost (medications, fees, equipment)
- Startup costs amortized over 3 years (not 5 — Bob's time horizon is shorter; lower-income individuals are less likely to maintain 5-year commitments to novel interventions)
- Does NOT include time monetized at hourly wage (this was the weakest part of Pass 1's composite)

### Y-axis: Net QALY Gain per Year
- From studies matching Bob's profile as closely as possible (sedentary, lower-income, elevated BMI, mildly elevated depression risk)
- All-cause or general-QoL measures preferred over domain-specific QALY sums
- Net of side effects and risks
- Plotted as midpoint of a range, with the range shown as error bars or in a data tooltip

### Bubble size: Evidence Quality
- Tier 1 (large): Multiple RCTs or high-quality meta-analyses with Bob-adjacent populations
- Tier 2 (medium): Some RCTs, or strong observational data, or good data but mismatched populations
- Tier 3 (small): Limited evidence, mostly observational, high confounding risk, or extrapolated

### Color/glyph: Time Commitment Category
- Green: < 1 hr/week
- Yellow: 1-3 hr/week
- Red: 3+ hr/week

This encodes the "walking is free but time-intensive" insight without distorting the financial axis.

### Interventions to include (trimmed list)
1. Walking (30 min/day)
2. Strength training / gym
3. Yoga
4. Generic SSRIs
5. CBT (standard 12-session course)
6. Bariatric surgery
7. Diet overhaul (cooking at home)
8. Sleep hygiene improvements
9. Meditation / MBSR (if QALY data holds up in research)
10. Quitting/reducing social media (if evidence exists)

### Interventions to drop or demote to a secondary table
- Dog ownership (no QALY data)
- Volunteering (confounding too severe)
- Religious community participation (confounding, cultural sensitivity)
- Reading (no QALY data)
- Learning a new skill / continuing education (no QALY data)
- Joining a club (no QALY data)

---

## Spin-off ideas (noted, not pursued)

1. **Adherence-adjusted bang-for-buck:** Same data, but multiply QALY gains by real-world adherence rates. Shows which interventions work in practice, not just in theory. Dog ownership and surgery jump up; voluntary daily habits drop.
2. **The time vs. money tradeoff for Bob:** A graph showing how Bob's time is actually spent (BLS American Time Use Survey) and where "30 minutes of walking" would come from. The answer is almost certainly TV/phone time — making the opportunity cost argument even weaker.

---

## Summary: What's sharp and what's still wobbly

**Sharp (ready for planning):**
- The core metric ($/year vs. net QALYs/year) is sound.
- The intervention list is trimmed to defensible entries.
- Time commitment is shown as a secondary dimension, not baked into the cost axis.
- Bob's profile is anchored on 25th-percentile household income (~$30k) with correlated health statistics.

**Still wobbly (needs resolution in planning or early research):**
- Whether QALY data exists that matches Bob's profile for all 10 interventions (vs. general-population data).
- Whether the confidence/bubble-size dimension can be operationalized consistently (what distinguishes a "Tier 2" from a "Tier 3"?).
- The amortization period for startup costs (3 years vs. 5 years — minor but should be decided).
- Whether meditation and social media reduction have enough QALY-adjacent data to include.

**None of these wobbly items are fatal.** They're decisions to make during planning, informed by what the research tickets turn up. The metric and framing survive the stress test. Advance to planning.
