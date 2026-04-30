# Apocalyptic Population Drop-off

## Core question

After a civilization-disrupting event, what does the US population survival curve look like over time — and how long do you have to survive before you've "made the cut"?

## Why it's interesting

330 million Americans, roughly 1 acre of usable land per person, most of which isn't arable without modern inputs. Most people can't farm, can't make fertilizer, can't do basic dentistry. The die-off isn't smooth — it comes in waves: immediate (life support), weeks (medication-dependent), months (starvation, disease, violence), then a long tail to stabilization. The question is: at what point does the remaining population reach equilibrium with pre-industrial carrying capacity?

Jason wants to look at this graph and know: "If event X happens, how many months do I need to survive to make it?"

## The graph

- **X-axis:** Time post-event (days → months → years, likely log-scale or segmented)
- **Y-axis:** US population as % of current (starts at 100%, drops to stabilization)
- **Multiple scenarios** as separate lines, each a different color
- **UI:** Buttons to toggle individual scenarios on/off, plus "Show All" to overlay everything
- **Library:** Probably Chart.js or similar — needs good multi-line support with toggleable datasets

## Scenarios to research (~10)

Based on preliminary survey of scientific literature, these are the scenarios with enough research backing to construct plausible die-off curves:

1. **Full-scale nuclear war (US-Russia exchange)** — The gold standard. Xia, Robock et al. 2022 (Nature Food) is the best single paper: ~150 Tg soot, ~90% caloric production loss, 5+ billion dead globally from famine. Princeton Plan A: 91.5M US casualties in first hours alone. Die-off: hours (blast) → years (nuclear winter famine).

2. **Nuclear EMP / prolonged grid collapse** — Congressional EMP Commission (2004/08/17) testified "9 of 10 Americans within a year." NIAC 2018 study confirmed existing plans would be overwhelmed. Die-off: weeks (medication-dependent) → 12 months (starvation, disease).

3. **Carrington-class solar storm** — NAS 2008, Lloyd's/AER 2013. Same grid-down curve as EMP but potentially wider geographic scope. 4-10 year transformer recovery. Could merge with EMP as "prolonged grid collapse" variants or keep separate since trigger probabilities differ (12% per decade for solar vs. deliberate attack for EMP).

4. **Catastrophic engineered pandemic** — Johns Hopkins exercises (Dark Winter, Clade X), RAND 2023. Clade X modeled 150M global deaths. Toby Ord rates this 1-in-30 per century. Die-off: days → months (disease + infrastructure collapse).

5. **Supervolcano (Yellowstone VEI-8)** — USGS, Toba catastrophe studies, WEF 2012. Meters of ash in Rockies, volcanic winter lasting years, Midwest breadbasket buried. Die-off: days (pyroclastic) → years (volcanic winter famine).

6. **Asteroid impact (km-scale)** — NASA CNEOS/ATAP, Chicxulub analogue. Impact winter similar to nuclear winter. Die-off: hours (impact zone) → years (crop failure).

7. **Climate tipping cascades (4C+ warming)** — Kemp et al. PNAS 2022, Lenton et al. 2019, AMOC collapse studies. Anderson estimates ~10% survival at 4C. Different shape: decades-long decline rather than sharp drop. May need different x-axis treatment.

8. **Global breadbasket failure** — ALLFED, Gaupp et al. 2020. Simultaneous crop failures without a single triggering event. Months → years.

9. **Catastrophic cyberattack on grid** — CISA/NIAC 2018, RAND. Converges with grid-down curve if sustained physical damage achieved. Much analysis is classified.

10. **Bioterrorism (smallpox release)** — DHS National Planning Scenarios 2006, Dark Winter exercise. Could cascade into scenario #4 if sustained person-to-person transmission achieved.

## Methodological notes

- **Older studies need updating.** NAS solar storm report is from 2008, Toba/supervolcano modeling from 2012. US population demographics have shifted significantly: higher rates of medication dependency (antidepressants, ADHD meds, insulin), aging population, urbanization. The medication-dependent wave of die-off would be larger today than older models predict.
- **Xia et al. 2022 is the benchmark.** Most recent, peer-reviewed in Nature Food, actual caloric production modeling. Use its methodology as the standard to critique older scenario estimates against.
- **Grid-down scenarios (EMP, solar, cyber) share a curve.** The cause differs but the die-off mechanics are identical. Research each trigger separately but the population curve may be nearly the same — the interesting variable is geographic scope and recovery timeline.
- **The 90% EMP Commission figure is controversial.** It's Congressional testimony, not peer-reviewed modeling. Research should evaluate this critically.
- **Climate cascades are a different beast.** Decades-long timeline vs. months. Include it but acknowledge it's a fundamentally different shape.

## Key sources to pull

- Xia, Robock et al. (2022) — Nature Food nuclear famine study
- Congressional EMP Commission reports (2004, 2008, 2017)
- NAS (2008) — Severe Space Weather Events
- NIAC (2018) — Catastrophic Power Outage Study
- Princeton SGS Plan A (2019)
- Kemp et al. (2022) — PNAS Climate Endgame
- Lloyd's/AER (2013) — Solar Storm Risk
- Johns Hopkins exercises — Dark Winter, Clade X, Event 201
- ALLFED / Gaupp et al. (2020) — breadbasket failure
- Toby Ord, "The Precipice" (2020) — risk probabilities
