# Exploration Pass 2: Stress-Testing the Metric

## What I'm testing

Pass 1 proposed: **US surviving population as % of current (~335M = 100%), plotted over time (log-scale or segmented), one curve per scenario, with step-down inflection points at medical collapse / starvation / stabilization.**

The key anchoring claims:
- Medical cliff kills ~12M (~3.6%) in first 30 days across all grid-down scenarios
- Caloric carrying capacity without modern agriculture is ~76M (the 1900 US population proxy)
- Stabilization occurs at 12–24 months for most scenarios
- Nuclear war is the best-sourced curve (Xia et al. 2022 + Princeton Plan A)

Below I try to break each of these.

---

## Failure 1: The 1900 anchor is not a carrying capacity — it's a snapshot

**The problem:** Pass 1 uses "76 million (1900 US population)" as the proxy for pre-industrial carrying capacity. But the US population in 1900 was not at carrying capacity — it was growing at 2% per year. By 1910 it was 92M, by 1920 it was 106M. The 1900 figure is just "who was alive," not "the maximum the land could feed."

Worse, the comparison cuts both directions:

- **The 1900 population was too LOW to be a ceiling.** The US had enormous uncultivated arable land in 1900. Agricultural expansion continued for decades. A better ceiling might be 1940 (132M), which was still pre-synthetic-fertilizer for most farms and pre-mechanization for many.
- **But 1900 had infrastructure that post-collapse America doesn't.** 21 million draft animals, established seed lines, generations of farming knowledge, functioning rural communities, working water mills, blacksmiths, coopers. Post-collapse 2026 has none of this. So the year-1 carrying capacity could be far *below* 1900 levels.

**How bad is this?** The 1900 anchor gives us "9–22% of current population" as the stabilization range. But depending on which direction the error goes:

- *Optimistic:* More land is arable than 1900 utilized, modern knowledge of crop science helps, fishing/foraging supplements farming. Maybe 100–150M can survive (30–45%).
- *Pessimistic:* Without draft animals or tools, year-1 food production is a fraction of 1900 levels. Carrying capacity in year 1 might be closer to pre-Columbian native populations (estimates range 2–18M depending on source — the scholarly range is genuinely that wide). Population doesn't reach 1900 levels until draft animal herds are rebuilt (decades).

**Verdict: Not fatal, but the 1900 number needs to be presented as a rough midpoint in a very wide range, not a reliable anchor.** The research phase should establish separate carrying capacity estimates for year 1, year 5, and year 20+ rather than treating it as a single number.

---

## Failure 2: "Stabilization at 12–24 months" is almost certainly wrong

**The problem:** Pass 1 says "if you're alive at the 2-year mark, you're likely in a community that has figured out food production." This is the answer to Jason's core question — "how long do I need to survive to make the cut?" — and it's probably off by a factor of 2–5x.

**Why 12–24 months is too optimistic:**

1. **Agricultural lag.** You can't eat crops you haven't planted. If collapse happens in October, you have 6 months of winter before you can even begin planting — and that first spring, you're planting with no tools, no seeds (where do you get seeds for 200 acres?), no draft animals, no irrigation. First harvest is small. Second year is better but still learning. Year 1-2 food production is overwhelmingly dependent on stored food and forage, not farming.

2. **Disease waves come AFTER the initial die-off, not during it.** When urban water treatment fails, cholera, typhoid, and dysentery follow — but these peak weeks to months after collapse, not immediately. Crowding of refugees, unburied dead, untreated sewage. The 1918 flu killed 50–100M people in a world WITH functioning hospitals. Post-collapse disease could produce a second massive die-off at months 3–12 that pass 1 didn't model as a distinct wave.

3. **Post-collapse populations don't stabilize — they oscillate.** The Irish Famine reduced Ireland's population from 8.2M (1841) to 6.6M (1851) to 4.4M (1901) — it kept declining for 60 years. Cambodia after the Khmer Rouge kept declining for years after the regime fell. The initial die-off creates secondary crises (fewer farmers → less food next year → more die → even fewer farmers). You don't reach equilibrium in 2 years. You reach it when the death rate finally matches the birth rate in a post-collapse society, which takes a generation.

4. **Seasonal die-off spikes.** Even after "stabilization," every winter would produce another spike of deaths from cold, malnutrition, and disease. The curve doesn't flatten — it becomes a sawtooth with diminishing peaks. "You made it" isn't a single moment; it's a rolling probability that improves year over year.

**Verdict: Probably fatal to the "12–24 month" claim, but not to the graph itself.** The stabilization point should be pushed out to 3–5 years for most scenarios, with the caveat that "stabilization" means "the steep decline ends," not "life is safe." The graph should show this — maybe an annotation like "ongoing elevated mortality" after the curve flattens.

---

## Failure 3: The scenario categories are too vague to produce single curves

**The problem:** "Nuclear war" isn't one scenario. It's a spectrum:

| Variant | US casualties (immediate) | Climate effect |
|---|---|---|
| Limited exchange (India-Pakistan, 5 Tg soot) | ~0 direct US casualties | Modest cooling, minor crop disruption |
| Regional exchange (100 warheads on US) | 10–30M | Negligible nuclear winter |
| Full US-Russia exchange (4,400 warheads, 150 Tg soot) | 90M+ (Princeton Plan A) | Full nuclear winter, 90% crop loss |

These aren't variants of one curve — they're completely different events. The same problem exists for every category:

- **"Engineered pandemic"** — 10% CFR vs. 50% CFR vs. 90% CFR are different worlds.
- **"Solar storm"** — Carrington-class (damages some transformers) vs. a hypothetical 10x-Carrington event (all transformers) are different events.
- **"Asteroid"** — 1 km vs. 10 km vs. 100 km impactor; ocean impact vs. land impact.
- **"Supervolcano"** — VEI-7 vs. VEI-8; Yellowstone vs. Long Valley vs. Campi Flegrei.

If each scenario is defined loosely enough to cover its whole category, the uncertainty band is so wide it's meaningless. If defined narrowly enough to be precise, you need 30+ curves, not 10.

**Verdict: Not fatal, but the research phase needs to pin each scenario to a SPECIFIC sub-case.** "Nuclear war" should mean "full US-Russia exchange, 4,400 warheads, 150 Tg soot" — the Xia et al. scenario. "Solar storm" should mean "Carrington-class, 4–10 year transformer recovery." Each ticket should define the exact parameters. The graph can include a "range" variant (limited nuclear exchange as a lighter line alongside full exchange) but the primary curve must be a specific, modeled case.

---

## Failure 4: The violence variable swamps the caloric math

**The problem:** Pass 1 treats violence/social collapse as an "amplifier, hard to model separately." But historical evidence suggests that in severe enough collapses, organized violence becomes the *primary* cause of death, not a modifier.

**Historical data points:**

- **Siege of Leningrad (1941–44):** ~1.5M died (over 50% of population), mostly from starvation — but this was WITH an organized government, military defense, and partial supply routes. Without those, it would have been worse.
- **Rwandan genocide (1994):** 500,000–800,000 killed in 100 days. Organized violence killed faster than any famine could.
- **Cambodian genocide (1975–79):** 1.5–2M out of 8M (20–25%) killed, largely by organized violence and forced labor, not caloric shortage alone.
- **Post-Soviet Russia (1991–2003):** 3–7M excess deaths from societal disruption alone — and this was a controlled decline with international aid, functioning infrastructure, and no physical catastrophe.

In a full US collapse, the violence question dominates the middle portion of the curve (months 1–12). The model currently treats food availability as the primary constraint, but if armed groups seize food stockpiles (as they would), effective food availability for the average person drops far below the theoretical average. The "competition" phase could produce death rates that make the caloric math irrelevant.

**The counterargument:** Maybe violence is already implicitly included in the carrying capacity estimate, since historical populations also experienced violence. But historical populations were structured around subsistence — they had food production embedded in their communities. Post-collapse America would have 330M people with access to 400M firearms and about 30 days of food. That's a historically unprecedented situation.

**Verdict: Not fatal — the graph is about die-off curves, and violence is part of the die-off. But it means the curves can't be derived purely from caloric modeling.** The research phase should include a "social collapse dynamics" ticket that looks at historical collapses and violence-driven mortality, not just food math. This is probably the single biggest source of uncertainty in the curves.

---

## Failure 5: "US population" isn't a meaningful unit post-collapse

**The problem:** Pass 1 flagged the geographic variation (Manhattan vs. rural Iowa) but treated it as a presentation problem (shaded bands, annotations). It's actually a measurement problem. After any grid-down event, there is no "US population." There are thousands of isolated communities with survival rates ranging from 0% to 90%+.

Consider the extremes:
- **Manhattan (1.6M people, 23 sq miles):** Essentially 100% mortality within months. No food production, no water treatment, no sanitation, no ability to evacuate 1.6M people on foot. Every building above the 6th floor becomes uninhabitable without elevators/pumps.
- **Rural Montana homestead (family of 5, 200 acres, well water, livestock, root cellar):** Maybe 70–90% survival probability.
- **Military installations (active duty + dependents + supplies):** High survival, organized, armed, with 30–90 day supply reserves.
- **Mormon communities in Utah (~2M people with a cultural tradition of 1-year food storage):** Dramatically different survival profile from surrounding populations.

A national average curve masks the reality that "making the cut" is almost entirely a function of WHERE you are at hour 0, not how long you survive after. Someone in rural Oregon with farming skills has already "made the cut" at hour 1. Someone in downtown Phoenix hasn't made the cut regardless of how many months they survive.

**Verdict: Not fatal to the graph concept, but the framing needs to shift slightly.** The national average curve is still useful as an overview — it answers "what fraction of America survives." But Jason's personal question ("how long do I need to survive?") depends more on location/preparation than on the national curve. The graph could address this by including a "rural prepared" vs. "urban unprepared" variant, or by adding annotations for key population segments.

---

## Failure 6: The medical cliff estimate (12M / 3.6%) is too clean

**The problem:** Pass 1's 30-day medical die-off estimate of ~12M is based on the immediately life-threatening dependencies (insulin, dialysis, ventilators, etc.) in stable conditions. But post-collapse conditions are not stable.

**Complicating factors:**

1. **Stress-induced medical crises.** The 610,000 Americans who die from heart disease annually — a huge number of those are kept alive by daily medications AND low-stress lifestyles. Under collapse-level stress, the cardiac event rate would spike. Same for stroke, seizure disorders, severe asthma.

2. **Compounding failures.** The ventilator-dependent population (1.5M) is the first to go, but the deaths cascade: ICU patients who would have survived with a few more days of care now die, freeing no resources because the resources don't exist, while new trauma patients from the collapse have no access to care.

3. **Pediatric and neonatal mortality.** 10,000 NICU patients at any given time in the US. Premature infants, congenital conditions, birth complications — the neonatal mortality rate would spike to pre-industrial levels (~30–50% of live births dying in the first year) almost immediately. This isn't captured in the "medical cliff" estimate.

4. **Elderly mortality.** 54M Americans are 65+. In pre-industrial societies, life expectancy was 35–45. Many of the elderly who aren't currently "medically dependent" in the immediate sense would die within months from compounded inability to survive without modern comforts (heating, cooling, easy food access, minor medical interventions).

**Revised estimate:** The 30-day medical die-off is probably 15–25M, not 12M, when you account for stress-induced crises, elderly fragility, and neonatal/pediatric mortality. And the 90-day figure (before starvation dynamics dominate) could be 30–50M when you add early disease outbreaks and untreated trauma.

**Verdict: Not fatal. The medical cliff is real and well-grounded. But the 12M figure should be treated as a floor, not a central estimate.** Research tickets should include an expanded medical die-off model that accounts for these secondary effects.

---

## Failure 7: Nuclear winter science is less settled than pass 1 implies

**The problem:** Xia et al. 2022 is cited as "the gold standard," and it IS the best recent peer-reviewed work. But the nuclear winter debate is far from settled.

**Key uncertainties:**

1. **Soot injection estimates.** Xia et al. use 150 Tg of soot for a full US-Russia exchange. But how much soot urban fires actually inject into the stratosphere depends on fire behavior modeling that has changed significantly since the original Turco et al. (1983) "nuclear winter" paper. Some critics argue the soot estimates are too high because modern cities have more concrete and less wood than the models assume. Others argue they're too low because petrochemical industrial fires aren't fully modeled.

2. **The "nuclear autumn" alternative.** Reisner et al. (2018, 2019) at Los Alamos used higher-resolution fire models and found significantly less soot reaching the stratosphere than Robock's models predict — more of a "nuclear autumn" than a full winter. The cooling was real but more like 1–4 degrees for 2–3 years, not 10+ degrees for a decade. This is an ongoing scientific dispute.

3. **Crop response modeling.** Xia et al.'s crop models assume current agricultural systems. But post-nuclear-war, there are no "current agricultural systems" — there are survivors with whatever seeds and tools they can find. The relevant question isn't "how much does Iowa corn yield decline?" but "can someone grow potatoes in New England with residual soil heat and ash fertilizer?" That's not what the paper models.

**Verdict: Not fatal — Xia et al. is still the best source, and the uncertainty should make the graph MORE interesting, not less.** But the nuclear war curve should probably show two variants: one based on Xia et al.'s 150 Tg scenario and one on a more moderate "nuclear autumn" scenario. The range between them is large (maybe 80% die-off vs. 50% die-off).

---

## Failure 8: The "you made the cut" framing has a philosophical problem

**The problem:** Jason's question is "how long do I need to survive to make it?" But "making it" is undefined and possibly incoherent.

**Surviving the die-off is not the same as surviving.** Life expectancy in pre-industrial societies was 35–45 years. Even after "stabilization," survivors face:
- No antibiotics (tooth infections become fatal again)
- No surgery (appendicitis is a death sentence)
- Childbirth mortality returns to 1–2% per birth
- Infant mortality at 30–50%
- Violence as the primary dispute resolution mechanism
- Chronic malnutrition for years/decades
- Mental health crisis (PTSD, grief, depression) with zero treatment

"Making the cut" past the initial die-off means you've entered a world where your life expectancy is maybe 50 from that point. That's worth graphing too — but it's a different graph.

**Verdict: Not fatal — in fact, it's a feature.** The graph answers the question it claims to: "when does the steep die-off end?" What happens after stabilization is a spin-off question (see below). But the graph should include an annotation at the stabilization point that says something like "surviving past this point means pre-industrial life conditions" to set expectations.

---

## What should change in the metric

### Refinements that survive the stress test:

1. **Pin each scenario to a specific sub-case** with explicit parameters. "Nuclear war" = "US-Russia full exchange, 4,400 warheads, ~150 Tg soot injection." Document what's being modeled.

2. **Replace the single 1900 carrying capacity anchor with a time-varying estimate.** Year-1 capacity, year-5 capacity, year-20 capacity. The curve shape depends on this trajectory, not a single number.

3. **Push the "stabilization" estimate from 12–24 months to 3–5 years** for most scenarios. The initial steep decline may slow by month 12, but continued mortality from disease, violence, and agricultural failure extends the die-off well beyond 2 years.

4. **Expand the medical die-off model** from "immediately life-threatening dependencies" to include stress-induced crises, elderly fragility, neonatal mortality, and early disease outbreaks. Floor of ~15–25M in 30 days, not 12M.

5. **Add a violence/social dynamics component** to the curve. Can't be caloric math only. The research phase should include a ticket specifically on historical societal collapse mortality patterns.

6. **Show two variants for nuclear war**: full nuclear winter (Xia et al.) and nuclear autumn (Reisner et al.) to bracket the scientific debate.

### Scope rules (what to exclude or caveat):

- **Climate cascades (4C+ warming):** Keep it but put it in a separate panel or visually differentiate it. It's decades-scale and doesn't fit the same framing. Could show it as a "slow baseline decline" annotation.
- **Limited/regional nuclear exchanges:** Exclude from main graph. The question is about civilization-ending events, not limited wars. Could be a footnote.
- **Individual survival probability:** Out of scope. The graph shows national population curves, not "will Jason survive." That's a function of location, preparation, and luck — not the national average. Acknowledge this in the graph's framing text.

### The refined metric:

**Y-axis:** US surviving population as % of current (~335M = 100%). Show as a band (optimistic/pessimistic) rather than a single line where possible.

**X-axis:** Time post-event, log-scale from day 1 to year 10. (Log-scale naturally handles the compression problem and is honest about the uncertainty at longer timescales.)

**Curves:** 6–8 specifically-defined scenarios (not broad categories). Each curve shows:
- Central estimate (solid line)
- Uncertainty range where data supports it (shaded band)
- Labeled inflection points (medical cliff, food exhaustion, first harvest, stabilization)

**"Made the cut" indicator:** A marker on each curve where the monthly mortality rate drops below some threshold (e.g., <1% per month) — not where the curve "flattens" but where the acute crisis is over.

---

## Potential spin-off ideas

1. **Post-stabilization life expectancy graph.** If you survive the die-off, what does your life look like? Life expectancy, infant mortality, cause-of-death breakdown in a post-collapse society vs. pre-industrial historical data.

2. **The geographic survival lottery.** A heat map of the US showing estimated survival probability by county for a given scenario. This is the graph that actually answers "should I move to Montana?"

3. **The preparation ROI graph.** For various levels of preparation (none, 30-day food supply, homestead, full prepper compound), how much does your survival probability change across scenarios? Answers the question "is prepping worth it or am I cosplaying?"

These are interesting but separate from the current project. If Jason wants them, drop them in `ideas/`.

---

## Summary for pass 3

The metric *works* but needs tightening:

- **The concept is solid:** survival curves over time per scenario is graphable and interesting.
- **The anchoring numbers need widening:** carrying capacity, medical cliff, and stabilization timeline all have wider uncertainty than pass 1 assumed.
- **Scenarios need pinning:** each must specify exact parameters, not just a category name.
- **Social/violence dynamics need modeling:** can't be caloric math alone.
- **Nuclear winter science needs both sides:** Xia et al. vs. Reisner et al.
- **"Made the cut" needs reframing:** not a moment but a threshold (monthly mortality rate falling below X%).

The question is sharp enough to advance to planning IF pass 3 confirms that the uncertainty ranges are narrow enough to produce a graph that says something meaningful. If the ranges are so wide that "somewhere between 10% and 80% survive" is the honest answer for every scenario, the graph is uninformative. The research phase needs to establish whether the data can constrain the curves tightly enough to be worth drawing.
