# Exploration Pass 2: Stress-Testing the Metric

## Mission

Break the proposed framework from Pass 1. The core claims to attack:

1. The meta-scatter metric (X: years to death, Y: income recovery at 10yr, Size: % workforce, Color: collapse type)
2. The "type predicts shape" hypothesis (9 categories, each with a characteristic decline curve)
3. The "effectively dead" threshold (<10% of peak workforce)
4. Cross-century comparability

For each failure: is it fatal, or just a scope boundary?

---

## Attack 1: Tech displacement isn't always slow

Pass 1's thesis: "Tech displacement is a slow bottom-up erosion." The handloom example (50 years) and travel agent example (22 years) support this. But:

### Counterexample: Kodak / film photography workforce

Kodak employed ~145,000 people at peak (1988). By 2003 they had begun mass layoffs. By 2012 they filed for bankruptcy with ~17,000 employees. That's ~88% workforce reduction in ~9 years from the digital tipping point (roughly 2003, when digital camera sales surpassed film). The shape looks more like a resource depletion cliff than a slow tech erosion.

Why? Because **platform shifts** behave differently from **tool improvements**. A power loom is a better loom — it erodes the market for hand weaving gradually. But digital photography isn't a better film camera — it's a different platform entirely, with network effects (sharing, storage, printing ecosystems) that create a tipping point. Once digital crosses a quality/price threshold, film collapses non-linearly.

### Counterexample: Video rental (Blockbuster)

~84,000 Blockbuster employees at peak (2004). Bankruptcy in 2010. Six years. Netflix streaming launched in 2007 and by 2010 the industry was gone. Again: not a slow erosion, a platform cliff.

### Counterexample: Human computers

ENIAC was 1945. By the mid-1950s, electronic computers were handling ballistics, census tabulation, and cryptography that had employed thousands of human computers. The transition was ~10 years, not 50. The "bottom of the hierarchy died first" pattern doesn't apply either — *all* human computation was displaced regardless of skill level, because the machine was faster at everything.

### Verdict: Not fatal, but the category needs splitting

The thesis survives if you distinguish **tool displacement** (better version of the same thing — slow, bottom-up) from **platform displacement** (entirely different paradigm — fast, total). This is a critical refinement because **AI displacement of software engineers is a platform shift, not a tool improvement.** If Jason's interest is "what's about to happen to me," lumping all tech together and concluding "tech is slow" is dangerously comforting and probably wrong.

**Recommended fix:** Split "technological displacement" into at least two sub-types: tool improvement (incremental, slow) and platform shift (discontinuous, fast). The meta-scatter should color these differently. This is the most important finding in this pass.

---

## Attack 2: The 9-category taxonomy breaks under real events

### Multi-causality isn't a footnote — it's the norm

Pass 1 acknowledged this but underestimated it. Let me list the events from question.md and count their causes:

| Event | Listed type | Actual causes |
|---|---|---|
| Handloom weavers | Tech | Tech (power loom) + Globalization (cotton imports) |
| Whalers | Tech | Tech (kerosene) + Resource depletion (whale stocks) + Regulation (later) |
| Switchboard operators | Tech | Tech (automated switches) + Consolidation (Ma Bell breakup reshuffled) |
| Travel agents | Tech | Tech (internet) + Regulation (airline deregulation of commissions) |
| Church organists | Cultural | Cultural (secularization) + Consolidation (megachurches) |
| Domestic servants | War/Cultural | War (WWI) + Cultural (class attitudes) + Tech (household appliances) + Economic (women entering workforce) |
| USSR collapse | Regime | Regime + Economic liberalization + Globalization (suddenly competing globally) |
| Samurai | Regime | Regime (Meiji) + Tech (guns) + Cultural (modernization ideology) |
| Cod fishers | Resource | Resource + Regulatory (moratorium) |
| Fur trappers | Resource | Resource + Cultural (anti-fur movement) + Regulatory (CITES) |
| US textiles | Globalization | Globalization + Tech (automation) + Regulatory (trade agreements) |
| Family farms | Consolidation | Consolidation + Tech (mechanization) + Globalization (commodity markets) + Regulatory (farm policy) |

**Every single event** has at least 2 causes. Several have 4. The "primary tag" workaround from Pass 1 just means "pick whichever cause feels most important," which is a subjective editorial choice that predetermines the clustering.

### Does the fastest cause determine the shape?

Pass 1 speculated that "the shape is determined by whichever factor moves fastest." This is testable:

- **Whalers:** Tech (kerosene, 1850s–60s) vs. resource depletion (whale stocks declining from 1840s onward). Both moved at roughly the same pace. Whaling fleet declined ~80% from 1846 (peak, 735 ships) to 1876 (~30 years). That's tech-speed, not resource-cliff-speed. So tech was the dominant shaper — supporting the hypothesis.
- **Domestic servants post-WWI:** War was the fastest factor (men gone, cultural rupture). The decline in British domestic service was ~40% from 1911 to 1931. That's ~20 years — faster than pure tech or cultural shift, but not cliff-fast like regime collapse. The shape is ambiguous.
- **Cod fishers:** The moratorium was regulatory, not resource depletion per se — the cod were still there (barely), but the government imposed a ban. The *cause* was resource depletion but the *mechanism* was regulatory. The cliff shape comes from the regulation, not the biology.

**Verdict: Partially fatal.** The "fastest cause determines shape" idea has some legs, but it means the 9 categories aren't really predicting shape — the *mechanism of displacement* (gradual market erosion vs. discrete policy action vs. platform tipping point) is what predicts shape. A simpler taxonomy of **3 displacement mechanisms** might work better:

1. **Gradual erosion** — market forces slowly erode demand (tool displacement, cultural drift, slow globalization)
2. **Tipping point** — nonlinear collapse once a threshold is crossed (platform shifts, resource depletion reaching critical level)
3. **Discrete shock** — a single event or decision kills it (regime collapse, regulatory ban, moratorium, war)

These 3 mechanisms might cluster on the scatter plot far more cleanly than 9 cause-based categories.

---

## Attack 3: The income recovery metric is deeply flawed

### Problem A: Whose income?

There are two completely different things you could measure:

1. **Income of people still in the profession** — this is what BLS reports. For travel agents, it went UP 80% because the bottom of the market exited. For handloom weavers, it went DOWN 80% because the remaining weavers competed for shrinking demand. Same metric, opposite dynamics, neither tells you what happened to the displaced *people*.

2. **Income of people who *were* in the profession at peak** — this tracks the actual displaced workers. But it requires longitudinal panel data (following specific individuals), which barely exists before 1970 and is patchy even after.

Pass 1 proposed "median real income of workers in that occupation **or its closest successor occupation**." But:
- Who decides what the "closest successor" is?
- A handloom weaver who became a factory worker AND a handloom weaver who became a beggar both count. The "successor" framing cherry-picks the positive outcome.
- For USSR, there was no "successor occupation" — a defense engineer might have become a security guard, a shuttle trader, a taxi driver, AND a part-time tutor simultaneously. Which one counts?

### Problem B: The 10-year window is arbitrary and misleading

| Event | Time to income trough | Time to recovery |
|---|---|---|
| Handloom weavers | ~30 years (1810→1840) | ~40 years (to factory-wage equivalence) |
| USSR collapse | ~9 years (1989→1998) | ~16 years (to 1991 wage levels) |
| Cod fishers | Immediate (1992) | 30+ years (many communities never recovered) |
| Travel agents | ~15 years (2000→2015 shakeout) | Ongoing (survivors thriving, displaced unknown) |

A 10-year snapshot catches:
- Handloom weavers **mid-collapse** (wages still falling in 1820)
- USSR workers at **the trough** (1998 was the absolute bottom)
- Cod fishers in **government-funded limbo** (TAGS payments, not real employment income)
- Travel agents in **active shakeout** (2010 was mid-restructuring)

The 10-year window doesn't capture the same phase of displacement for different events. It's comparing apples in March to oranges in October.

### Problem C: Pre-1900 income data is advocacy, not measurement

The handloom weaver wage data comes from the 1838 Royal Commission — a political body investigating destitution. Parliamentary blue books are not randomized surveys. They were gathered to build a case for intervention. The witnesses were disproportionately the worst-off (you don't testify before Parliament if you're doing fine). The "25 shillings in 1800 → 5 shillings in 1838" narrative may be directionally correct but the precision is false.

For pre-industrial events (samurai, colonial administrators, fur trappers), "income" may not even be the right concept. Samurai were paid in rice stipends within a feudal hierarchy. Converting that to a comparable income metric requires so many assumptions that the number is fictional.

### Verdict: Potentially fatal for the Y-axis

The income recovery metric as proposed doesn't survive scrutiny. Options:

**Option A: Abandon income, use workforce trajectory only.** The X-axis (years to death) is robust and measurable. Make the meta-scatter a 2D plot: X = decline duration, Y = decline severity (% of peak workforce lost in the fastest 5-year window). This captures the "shape" without relying on income data.

**Option B: Keep income but only for post-1970 events.** Restrict the Y-axis to events where BLS/census data exists. Pre-1900 events get plotted on the X-axis only (with Y marked as "insufficient data"). The scatter would have two tiers of confidence.

**Option C: Replace income with a composite "aftermath severity" index.** Combine what's actually measurable for each event: population change in affected region, unemployment duration, government spending on relief. This is messier but more honest.

**Recommendation:** Option B. It preserves the visual punch of the scatter while being honest about what we don't know. The pre-1900 dots can be vertical bars (known X range, unknown Y) rather than positioned points.

---

## Attack 4: The "effectively dead" threshold creates absurdities

### Family farming

US farm employment: ~10 million in 1950 (~14% of workforce), ~2.6 million in 2023 (~1.7%). That's 74% decline. Farming is clearly in massive displacement. But it's at 26% of peak — well above the 10% threshold. By the proposed metric, farming isn't "dead" yet. Is that right?

It produced more food than ever. Revenue is higher than ever. The *profession* has transformed, not died. But the *workers* were absolutely displaced — 7.4 million people lost farm employment. Does this event go on the scatter? If yes, what's the X-axis value? Farming hasn't reached 10% of peak, so X is undefined.

### Blacksmiths

There are ~5,000 blacksmiths in the US today (rough estimate from trade associations). Peak was probably ~200,000+ in the 1890s. That's well below 10% of peak. But modern blacksmiths earn $40K–80K doing artisanal/farrier/art metalwork. The profession "died" and was "reborn" as a niche craft. The income recovery for the modern remnant is excellent — but the 190,000 who left have no tracked outcome. Is this "dead with good survivor income" or "transformed"?

### Telephone operators / switchboard operators

BLS category 43-2021 shows ~155,000 in 2003, ~83,000 in 2023. Down 46%. But many "operators" were reclassified as "customer service representatives" (43-4051), which grew from ~2.0M to ~2.8M in the same period. Did the profession die, or did it get renamed? If you track the BLS code, it's in sharp decline. If you track the actual humans, many are doing similar work under a different title.

### Verdict: Scope boundary, not fatal

The 10% threshold works for clear-cut deaths (handlooms, cod, human computers) but breaks for transformations and reclassifications. Fix:

- **Include only events where the profession unambiguously ceased to exist in recognizable form.** Farming is out (still exists, just consolidated). Blacksmithing is out (niche revival). Handloom weaving is in (nobody hand-weaves cotton cloth commercially). Travel agents are borderline — include but note they may be a "contraction" rather than a "death."
- **Track BLS code discontinuities.** When a code is retired, note whether it was absorbed into another code or genuinely eliminated.

---

## Attack 5: Not enough data points for statistical clustering

The meta-scatter needs to show that collapse types cluster in different regions. With 15–20 events and 9 categories (or even 3 mechanisms), you have:

- 9 categories × 2 events each = 18 data points, ~2 per cluster
- 3 mechanisms × 6 events each = 18 data points, ~6 per cluster

Two dots do not make a cluster. Even six dots are thin. You cannot draw "tech displacement clusters in the upper-right" with 2–3 points. The visual will suggest patterns that aren't statistically robust.

### Is this fatal?

**Not for Jason's purpose.** The graph isn't a peer-reviewed paper — it's a conversation piece. "Look, the three tech displacements are all in this quadrant, and the three regulatory shocks are all over here" is compelling at a dinner party even if n=3 per cluster. The scatter is suggestive, not conclusive.

**But the narrative needs to match.** Don't frame it as "history proves tech displacement is slow" (statistical claim). Frame it as "across these N examples, a pattern emerges" (observational claim). The graph should invite the viewer to notice the clustering, not assert it.

### Recommendation: Increase N

Consider expanding beyond the current candidate list. Each collapse type should have at least 4–5 examples to make visual clustering defensible. Some additions:

- **Tech/platform:** Typesetting (Linotype → desktop publishing), film development/Fotomat, encyclopedia salesmen (Britannica → Wikipedia), taxi dispatchers (Uber)
- **Regulatory:** Alcohol-related professions during Prohibition, leaded gasoline industry
- **Consolidation:** Hardware stores (Home Depot effect), local pharmacies (CVS/Walgreens), local bookstores (Amazon)

Expanding to 25–30 events with 3 mechanism categories gives ~8–10 per cluster. Much more defensible visually.

---

## Attack 6: National workforce percentage distorts the picture

### The denominator problem

Pass 1 proposed bubble size = peak workforce as % of national labor force. This creates scaling absurdities:

- **Handloom weavers** (250K / ~6M British workforce in 1810) = ~4% → huge bubble
- **Cod fishers** (40K / ~14M Canadian workforce in 1992) = ~0.3% → tiny bubble
- **USSR defense workers** (5M / ~75M Soviet workforce) = ~6.7% → largest bubble
- **Travel agents** (124K / ~137M US workforce in 2000) = ~0.09% → invisible dot

The visual would be dominated by pre-industrial events (when workforces were small and single industries were a bigger slice) and mass events (USSR). Modern tech displacement examples would be invisible specks. The graph would accidentally argue "displacement used to be a big deal but isn't anymore" — which contradicts the thesis.

### The nationality problem

These events span 6+ countries across 200+ years. The "national workforce" denominator changes meaning entirely:
- 1810 Britain (pre-industrial island nation of ~12M)
- 1992 Canada (modern federated nation of ~28M)
- 1989 USSR (centrally planned superstate of ~290M)
- 2000 USA (world's largest economy, ~282M)

The bubbles compare fractions of incommensurable totals.

### Verdict: Scope boundary — fixable

**Option A: Use absolute numbers.** 250,000 displaced weavers and 40,000 displaced fishers are both meaningful human-scale numbers. Bubble size = log(absolute displaced workers). This avoids the denominator problem entirely.

**Option B: Use regional workforce percentage.** Cod fishers as 10% of Newfoundland's workforce is more honest than 0.3% of Canada. Handloom weavers as % of Lancashire's workforce. This captures the *felt impact* of displacement. Problem: inconsistent geographic granularity.

**Option C: Drop bubble size.** The scatter already has X, Y, and color. Bubble size adds a fourth dimension that's hard to make fair across centuries. Maybe just use dots.

**Recommendation:** Option A (log of absolute numbers). It's honest, comparable, and visually meaningful. Add a tooltip or annotation with regional context for events where local impact was disproportionate.

---

## Attack 7: Cross-century comparison — shapes vs. severity

Pass 1 argued that comparing *shapes* across centuries is valid even if *absolute outcomes* differ. Let me pressure-test this.

### The safety net problem is bigger than acknowledged

A handloom weaver displaced in 1830 could literally starve. A travel agent displaced in 2005 collects unemployment insurance, has transferable skills, and lives in a service economy with abundant low-skill employment.

This means:
- **The shape of the workforce curve** may be similar (slow bottom-up erosion for both), which supports cross-century comparison.
- **The income recovery curve** is incomparable. The 1830 weaver fell to subsistence. The 2005 travel agent fell to a different but livable job. Plotting them on the same Y-axis implies a comparison that doesn't hold.

### The information asymmetry problem

Modern displaced workers have access to information about alternatives (job boards, retraining programs, economic news). Historical workers often didn't know what was happening until it was too late. This doesn't affect the *shape* of displacement (which is driven by market forces, not individual decisions) but it completely changes the *foresight stories*. A weaver in 1820 couldn't Google "jobs near me." The survival strategies are era-specific and don't generalize.

### Verdict: The shapes comparison survives; the "what to do about it" framing is weaker

The meta-scatter of shapes/durations is valid cross-century. But the foresight stories (adapters, deniers, false movers) should be drawn primarily from post-1950 events where the labor market context resembles today's. Using 1830s survival strategies to advise a 2025 software engineer is a stretch.

---

## Refined proposal

### Keep

- **The meta-scatter concept** — it's the hero visual and it works
- **The per-event deep-dive panels** — the texture is what makes this compelling
- **The cross-century comparison of displacement shapes** — valid and visually powerful

### Change

1. **Replace the 9-category taxonomy with 3 displacement mechanisms:**
   - **Gradual erosion** (tool improvements, slow cultural shift, incremental globalization)
   - **Tipping point** (platform shifts, resource depletion thresholds, market collapses)
   - **Discrete shock** (regime change, regulatory ban, war, moratorium)

   Events can still carry cause-tags (tech, cultural, regulatory, etc.) as metadata, but the mechanism is what determines color on the scatter.

2. **Split the Y-axis into two tiers:**
   - Post-1950 events: income recovery at 10 years (BLS/census data)
   - Pre-1950 events: position on X-axis only, or use a qualitative severity rating (recovered / stagnated / permanent decline) based on available evidence. Display these as a different marker style.

3. **Use log(absolute displaced workers) for bubble size** instead of % of national workforce.

4. **Expand to 25–30 events** to get ~8–10 per mechanism category. The clustering argument needs density.

5. **Sharpen the "effectively dead" definition:**
   - Track continuous workforce trajectory, not a binary threshold.
   - For the X-axis, use "years from peak to 75% decline" rather than "years to 10% of peak." The 75% mark is reachable for almost all events and avoids the farming/blacksmith absurdity. The steepness of the 75% decline separates gradual erosion from cliff events.

6. **Add the "platform shift" insight prominently.** This is the single most decision-relevant finding for the AI question. AI displacing software engineers looks like a platform shift (Kodak, Blockbuster), not a tool improvement (power loom, travel agents). If the scatter shows platform shifts are fast and total, that's the honest and scary answer.

### Scope exclusions

Exclude events that are more "transformation" than "death":
- Family farming (consolidated, not dead)
- Blacksmithing (niche revival)
- Any profession where BLS code retirement was primarily a reclassification

Include only events where the profession **unambiguously ceased to employ the vast majority of its former workforce in recognizable form.**

---

## Spin-off ideas (note, don't pursue)

1. **"Geographic death spirals"** — when a company town or single-industry region loses its industry, what's the cascade? Map property values, population, school enrollment, crime, addiction metrics for places like Flint, MI or outport Newfoundland or coal country West Virginia. A different project, but the displaced-professions research will generate the raw data for it.

2. **"The Fotomat curve"** — a micro-project focused exclusively on platform shifts in the digital era (Kodak, Blockbuster, Borders, taxi medallions, newspapers' classified revenue). All happened 2000–2015, all have clean BLS data, all are fast collapses. This could be a standalone graph separate from the historical sweep.

---

## Bottom line

The framework from Pass 1 is **directionally sound but overconfident in two ways:**

1. It treats "tech displacement" as monolithic when there's a critical split between tool improvements (slow) and platform shifts (fast). For Jason's personal AI question, this distinction is the whole ballgame.

2. It proposes an income-recovery Y-axis that can't be measured consistently across centuries. The X-axis (decline duration) is robust. The Y-axis needs to be either restricted to modern events or replaced with something more measurable.

The 3-mechanism taxonomy (erosion / tipping point / shock) is cleaner, more predictive, and easier to test than the 9-cause taxonomy. The cause metadata is still worth collecting — it tells the *story* — but the mechanism determines the *shape*.

**The thesis "type predicts shape" survives this stress test in modified form: mechanism predicts shape.** That's a stronger, cleaner, and more useful claim.

**Next step:** If this metric survives a third look, advance to planning. The key decisions for planning: finalize the event list (targeting 25–30), define the exact data schema, and break into research tickets.
