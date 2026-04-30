# Result: Nuclear Autumn — Reisner et al. Alternative Scenario

## Summary

Reisner et al. (2018) at Los Alamos used higher-resolution fire models than Robock/Toon and found that only ~6.5% of soot from nuclear fires reaches the stratosphere (vs. ~80% assumed by Robock), producing a "nuclear autumn" with 1–5°C cooling instead of 10–16°C nuclear winter. The scientific community has largely criticized Reisner's methodology (dry-plume modeling, unrealistic fuel loading, suburban target selection), but the debate reveals genuine uncertainty of 2–3× in soot injection. A middle-ground estimate (~20–50 Tg stratospheric soot for a full US-Russia exchange, vs. Robock's 150 Tg) produces moderate cooling that severely stresses agriculture but doesn't collapse it. Under this alternative scenario, blast and fallout mortality are identical to the nuclear winter curve (same bombs), but famine deaths are dramatically lower — the US loses roughly 50–55% of its population over 10 years instead of 85–90%.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| soot_injection_reisner_tg | 0.2 | 0.1 | 1.3 | Tg | regional scenario (100×15-kt) | Reisner et al. 2018 | medium |
| soot_injection_middle_ground_tg | 30 | 15 | 50 | Tg | full US-Russia exchange | Denkenberger median / Rodriguez synthesis | low |
| soot_total_produced_reisner_tg | 3.7 | 2.0 | 5.0 | Tg | regional scenario | Reisner et al. 2018 | medium |
| stratospheric_fraction_reisner_pct | 6.5 | 4.0 | 25.0 | pct | of total soot produced | Reisner 2018 / Wagman 2020 | low |
| stratospheric_fraction_robock_pct | 80 | 60 | 90 | pct | of total soot produced | Robock/Toon assumed | medium |
| temperature_change_reisner_c | -3 | -1 | -5 | degrees_c | year 1-3 (central nuclear autumn) | middle-ground extrapolation | low |
| temperature_change_reisner_pure_c | -0.5 | -0.2 | -1.5 | degrees_c | year 1-2 (if Reisner fully correct) | Reisner extrapolated to full exchange | low |
| us_crop_loss_reisner_pct | 30 | 15 | 50 | pct | year 1-3 | Xia 2022 (interpolated 27-47 Tg range), PNAS 2020 | low |
| us_crop_loss_year_1_pct | 25 | 10 | 40 | pct | year 1 | Xia 2022, Jägermeyr et al. 2020 | low |
| us_crop_loss_peak_pct | 35 | 18 | 55 | pct | year 2-3 | Xia 2022 (27-47 Tg interpolation) | low |
| us_crop_recovery_year | 4 | 3 | 6 | years | return to 90%+ of baseline | extrapolated from Xia recovery curves | low |
| global_calorie_reduction_27tg_pct | 30 | 20 | 50 | pct | peak (year 2-3) | Xia et al. 2022 | medium |
| global_calorie_reduction_47tg_pct | 50 | 35 | 65 | pct | peak (year 2-3) | Xia et al. 2022 | medium |
| climate_recovery_years | 4 | 3 | 7 | years | atmospheric temperature recovery | Wagman 2020 (~4 yr), Robock extrapolated | low |
| growing_season_reduction_days | 15 | 5 | 30 | days | year 1-3, US corn belt | extrapolated from cooling per degree | low |
| famine_deaths_us_pct | 12 | 5 | 22 | pct | years 1-5 cumulative | derived from caloric deficit modeling | low |
| total_mortality_nuclear_autumn_pct | 52 | 40 | 68 | pct | 10-year cumulative | synthesized from blast + fallout + moderate famine | low |
| fuel_loading_reisner_g_cm2 | 0.14 | 0.14 | 0.14 | g_per_cm2 | target area used | Reisner et al. 2018 | high |
| fuel_loading_robock_targets_g_cm2 | 15 | 2 | 35 | g_per_cm2 | India-Pakistan top 50 cities | Mills et al. 2014, Robock 2019 | medium |
| tambora_1816_cooling_c | 0.55 | 0.4 | 0.7 | degrees_c | 1816 global average | Stothers 1984, multiple | high |
| tambora_1816_ne_crop_loss_pct | 75 | 50 | 90 | pct | New England 1816 | NPS, USGS, historical records | medium |
| wagman_stratospheric_injection_pct | 40 | 20 | 50 | pct | at 16 g/cm² fuel loading | Wagman et al. 2020 | medium |

## Reisner et al. Methodology and Findings

### What Reisner found (2018)

Reisner et al. at Los Alamos modeled the same India-Pakistan regional exchange (100 × 15-kt weapons) that Robock/Toon had used as their benchmark scenario. Their high-resolution fire model produced dramatically different results:

- **Total soot produced:** 3.7 Tg (vs. Robock's assumed 5 Tg)
- **Soot reaching stratosphere:** 0.2 Tg worst case (6.5% of total)
- **With unlimited fuel assumption:** still max 1.3 Tg stratospheric soot
- **Climate impact:** negligible — no nuclear winter effect predicted
- **Fire duration:** fires subsided in ~40 minutes (much shorter than firestorm models predict)

### Why Reisner predicts less soot

1. **No firestorm formation.** Reisner's model predicts that oxygen starvation and rubble choking prevent firestorms from developing, even in cities. The intense convective columns that loft soot into the stratosphere require firestorm conditions.

2. **Soot scavenging.** 93.5% of soot is removed by rain-out and other mechanisms before reaching the stratosphere. Only small particles in the upper part of the plume penetrate.

3. **Modern city composition.** More concrete, steel, and less wood than WWII cities means less fuel and different fire behavior. Reisner argues Hamburg/Dresden-style firestorms are less likely in modern construction.

4. **Dry convection modeling.** Reisner used dry convection (no moisture/latent heating), which produces lower plume heights and less stratospheric injection.

### Criticisms of Reisner (Robock et al. 2019 comment, Tarshish & Romps 2022)

1. **Wrong target:** Reisner chose suburban Atlanta near the East Lake Golf Club (33.750°N, 84.305°W), >5 km from downtown. The area included a golf course, playground, and houses with large yards. Fuel loading was 0.14 g/cm² — 15 to 110× lower than actual Indian/Pakistani urban targets in Mills et al. (2014).

2. **Dry plume is invalid.** Tarshish & Romps (2022) demonstrated that latent heating from moisture is essential for firestorm plume lofting. Their finding: "dry simulations should not be used to investigate firestorm plume lofting." This undermines Reisner's core methodology.

3. **Fire model not reproducible.** Reisner's fire code has not been made available to other researchers. It has not been validated against known historical firestorms (Hamburg, Dresden, Hiroshima).

4. **Historical firestorms did occur.** Firestorms occurred in ~50% of WWII nuclear/incendiary city attacks. Reisner's model says they wouldn't form, contradicting direct observation.

5. **Short fire duration unexplained.** Reisner claimed fires subsided at 40 minutes but didn't publish energy release rates to verify fuel was actually consumed vs. the model simply ending.

### Reisner's reply (2019)

Reisner acknowledged some points but maintained that even with "unlimited fuel levels," stratospheric soot would not exceed 1.3 Tg. They emphasized nonlinearities in combustion and argued that simple fuel-loading scaling from small fires to urban conflagrations is incorrect.

## Scientific Community Assessment

### Where consensus leans

The Rutgers/NASA group (Robock, Xia, Toon, Coupe) has **stronger evidential support**:
- Wet lofting validated by Tarshish & Romps (2022)
- Historical firestorms confirm the mechanism
- Multiple independent models (ModelE, WACCM4) agree on severity
- Wagman et al. (2020) at Lawrence Livermore found significant stratospheric injection begins at ≥5 g/cm² fuel loading, and at 16 g/cm² ~40% of soot reaches the stratosphere — intermediate between Reisner (~6%) and Robock (~80%)

### Why uncertainty persists

- The number of research groups is small; many papers share authors
- No full-scale nuclear war has occurred to validate any model
- The gap between modeled regional exchanges and full US-Russia exchanges is extrapolation
- Fire behavior in modern cities is genuinely uncertain — no modern city has experienced a nuclear firestorm
- Soot particle size distribution, aging, and removal rates have wide error bars

### Middle-ground estimates

| Source | Stratospheric soot (full exchange) | Cooling estimate |
|---|---|---|
| Robock/Xia consensus | 150 Tg | -8 to -16°C |
| Denkenberger median | ~30 Tg | -2 to -4°C |
| Rodriguez/EA synthesis | 20-50 Tg | -2 to -6°C |
| Bean (skeptic) | 0.3-3 Tg | -0.02 to -0.2°C |
| Reisner extrapolated | 1-5 Tg | -0.1 to -1°C |
| Wagman (LLNL) | varies by fuel loading | ~4 yr climate shock |

A reasonable middle-ground estimate for the nuclear autumn scenario: **20–50 Tg of stratospheric soot, producing 2–5°C global cooling for 3–5 years.** This assumes firestorms do form in some cities (contradicting Reisner) but that fewer cities burn completely than Robock assumes (less than 150 Tg).

## Crop Impact Under Nuclear Autumn

### Temperature-crop relationship

The 1816 Year Without a Summer (Mount Tambora, 0.4–0.7°C cooling) provides the best historical analogue for moderate volcanic/nuclear cooling:
- New England crop yields fell 50–90% in the worst areas due to killing frosts in June, July, and August
- European grain harvests failed widely
- But global civilization survived — migration, trade, and regional variation absorbed the shock
- Overall global agricultural impact: severe but not existential

For nuclear autumn cooling of 2–5°C (4–10× worse than 1816):
- **At 2°C cooling** (27 Tg scenario from Xia): US crop losses 18–41% (5-year average), growing season shortened 10–15 days. Corn heavily affected; winter wheat more resilient. Global calorie reduction ~30%.
- **At 3–4°C cooling** (40–50 Tg scenario): US crop losses 30–50%, growing season shortened 15–25 days. Corn belt marginal for corn in years 1–2. Global calorie reduction 40–50%.
- **At 5°C cooling** (upper bound of autumn): US crop losses 45–60%, corn belt non-viable for corn in year 1. Approaches lower end of nuclear winter territory. Global calorie reduction 50–65%.

### Critical difference from nuclear winter

Under nuclear winter (150 Tg, -10 to -16°C): agriculture is **impossible** for 2–3 years. Below-freezing temperatures year-round in the US corn belt. 90% crop loss globally. Civilization collapses.

Under nuclear autumn (20–50 Tg, -2 to -5°C): agriculture is **stressed but functional**. Growing seasons are shorter, yields are reduced, frost events are more frequent, but crops can still grow. The US can produce 50–80% of baseline calories in years 1–2 and recover to near-normal by year 4–5.

### Adaptation potential

- **Crop switching:** Move from corn to cold-tolerant wheat, barley, potatoes. 10% production boost (Penn State 2025).
- **Geographic shift:** Southern states less affected; shift production south.
- **Earlier/later planting:** Avoid frost windows.
- **Livestock integration:** Emergency slaughter provides 50–120 days of buffer.
- **Rationing:** With 200M survivors and 50–80% crop production, rationing can maintain survival-level calories for most.

These adaptations are NOT available under nuclear winter (too cold for any crops in years 1–3). They ARE available under nuclear autumn, which is why famine mortality diverges so dramatically between the two scenarios.

## Mortality Timeline

This curve shares hours 0–4320 (blast + fallout) with the nuclear winter scenario, then diverges as moderate rather than catastrophic famine sets in. Blast/fallout baseline from tickets 013 and 014.

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|
| 1 | 10.0 | 8.0 | 20.0 | blast / thermal / firestorm | Princeton SGS 2019, Postol 1986 |
| 6 | 12.0 | 9.0 | 25.0 | firestorm completion / prompt radiation | Princeton SGS 2019, Glasstone & Dolan |
| 24 | 15.0 | 10.0 | 33.0 | early fallout / untreated injuries | OTA 1979, ticket 013 |
| 168 | 30.0 | 24.0 | 36.0 | ARS (gastrointestinal/hematopoietic) | ticket 014, Glasstone & Dolan |
| 720 | 34.0 | 27.0 | 41.0 | ARS deaths at wartime LD50 | ticket 014, OTA 1979 |
| 2160 | 38.0 | 30.0 | 46.0 | delayed ARS + immune-compromise disease | ticket 014, Johnston's Archive |
| 4320 | 40.0 | 32.0 | 49.0 | radiation disease + early malnutrition onset | ticket 014 |
| 8760 | 45.0 | 36.0 | 56.0 | moderate famine + disease + infrastructure collapse | Xia 2022 (interpolated), ALLFED |
| 17520 | 48.0 | 38.0 | 60.0 | continued famine (peak crop stress year) + disease | Xia 2022 (27-47 Tg), Jägermeyr 2020 |
| 26280 | 50.0 | 39.0 | 63.0 | famine easing, disease/violence continue | extrapolation from caloric deficit |
| 43800 | 52.0 | 40.0 | 65.0 | residual disease + violence + rebuilding losses | extrapolation |
| 87600 | 55.0 | 42.0 | 68.0 | cancer + chronic illness + residual losses | extrapolation |

### Divergence analysis: autumn vs. winter

| time_hours | winter_central | autumn_central | difference | why |
|---|---|---|---|---|
| 4320 (6 mo) | 42% | 40% | 2% | Nearly identical — famine just beginning |
| 8760 (1 yr) | 55% | 45% | 10% | Winter: stored food exhausted, 15% crop production. Autumn: 50-80% production sustains most survivors. |
| 17520 (2 yr) | 72% | 48% | 24% | Winter: peak soot, 5-8% production, mass starvation. Autumn: 40-60% production, food stress but not mass death. |
| 26280 (3 yr) | 80% | 50% | 30% | Winter: worst crop year, population halved. Autumn: agriculture recovering, deaths slowing. |
| 43800 (5 yr) | 85% | 52% | 33% | Winter: slow recovery, 70-80M survivors. Autumn: near-normal agriculture, 160M survivors. |
| 87600 (10 yr) | 88% | 55% | 33% | Winter: 40-60M survivors. Autumn: 150M survivors (45% of pre-war). |

The curves are **identical for the first 6 months** (same bombs, same fallout), then diverge dramatically. By year 2, the gap is 24 percentage points; by year 5, it's 33 points. The entire difference is driven by famine severity.

### Timeline narrative

**Months 0–6 (identical to winter):** Blast, firestorm, and fallout kill ~40% of the US population. EMP collapses the grid. Medical system is destroyed. These casualties are physics-driven and independent of climate modeling assumptions.

**Months 6–12 (divergence begins):** Under nuclear autumn, the first post-war growing season is impaired but productive. With 2–5°C cooling, the US corn belt loses 25–40% of production. Southern states, less affected by cooling, produce closer to normal yields. Combined with stored grain (68–77 days of global reserves), emergency livestock slaughter (50–70 days of buffer), and rationing, survivors (~200M) face severe food stress but not total caloric collapse. Deaths from malnutrition, disease amplified by poor nutrition, and violence over food add ~5% to cumulative mortality. Compare to nuclear winter: stored food exhausted, 85% crop loss, mass starvation begins.

**Year 2 (peak stress):** Worst agricultural year as soot concentration (even at moderate levels) peaks. US crop production drops to 40–60% of baseline. With population reduced to ~175M through cumulative losses, this equates to roughly 75–115% of survival-level needs (1,900 cal/day). Distribution failures and regional variation mean some areas face acute shortage while others are adequate. An additional 3% die from famine-related causes. Under nuclear winter, crop production is at 5–8% and mass starvation kills millions per month.

**Years 3–5 (recovery):** Soot settles, temperatures normalize. Agriculture returns to 70–90% of baseline by year 4. The surviving population of ~160M can be sustained. Deaths continue from cancer (radiation-induced, latency 2+ years), chronic illness in the malnourished/irradiated population, and violence/social breakdown, adding ~4% over three years. Under nuclear winter, soot persists, agriculture is still at 15–25%, and famine continues.

**Years 5–10 (stabilization):** Full agricultural recovery. Population stabilizes at ~150M (45% of pre-war 335M). Excess cancer mortality adds ~3% over the decade from the irradiated population. By year 10, the US is a severely damaged but functioning agricultural society, with about 45% of its pre-war population. Compare to nuclear winter: ~12–18% survival.

### Ballpark check

The ticket hypothesized "30–50% mortality (autumn) vs. 70–90% (winter)." Based on detailed research:
- **Blast + fallout alone** kills 32–49% (central ~40%). This is a hard floor — no amount of food production can undo it.
- **Nuclear autumn total** (blast + fallout + moderate famine): 42–68% (central ~52–55%).
- **Nuclear winter total** (blast + fallout + severe famine): 72–96% (central ~85–88%).

The 30% floor in the ticket's hypothesis is too optimistic — it doesn't account for the severity of blast/fallout from a 4,400-warhead exchange. The corrected range is ~42–68% for nuclear autumn vs. ~72–96% for nuclear winter.

## Data Gaps

- **Reisner never modeled a full-scale exchange.** All Reisner data is for the India-Pakistan 100×15-kt scenario. Extrapolation to 4,400 warheads (mostly 100–500 kt) is speculative. The higher yields, more targets, and more urban detonations would produce substantially more soot even under Reisner's conservative assumptions.
- **No crop model exists for the 20–50 Tg range with US-specific data.** Xia et al. (2022) modeled discrete scenarios (5, 16, 27, 47, 150 Tg). The 27–47 Tg range is the closest to our nuclear autumn estimate, but US-specific year-by-year production data at these levels is behind a paywall and partially interpolated here.
- **Infrastructure damage compounds famine independently of climate.** Even with adequate aggregate food production, the destroyed transport network, collapsed grid, and disrupted supply chains mean regional starvation can occur alongside national sufficiency. This amplifier is not well-quantified in any model.
- **Social dynamics.** Under nuclear autumn, organized society is more likely to survive (less severe food crisis leaves government/military functional). But conversely, more survivors means more competition for damaged infrastructure. Whether this net helps or hurts survival is genuinely unknown.
- **The 1816 analogue is imperfect.** Tambora produced 0.4–0.7°C cooling with no infrastructure damage. Nuclear autumn produces 2–5°C cooling WITH grid collapse, radiation, and medical system destruction. The temperature analogue is useful but the compounding factors make it much worse.
- **Middle-ground soot estimate is itself uncertain.** The ~30 Tg median from Denkenberger is one expert's judgment, not a modeled consensus. The true range (3–150 Tg) spans nearly two orders of magnitude.

## Sources

- Reisner, J., D'Angelo, G., Koo, E., et al. (2018). "Climate Impact of a Regional Nuclear Weapons Exchange: An Improved Assessment Based on Detailed Source Calculations." *Journal of Geophysical Research: Atmospheres*, 123. https://agupubs.onlinelibrary.wiley.com/doi/10.1002/2017JD027331 — Los Alamos fire model: 3.7 Tg total soot, 0.2 Tg stratospheric (6.5%), max 1.3 Tg with unlimited fuel.
- Reisner, J., et al. (2019). "Reply to Comment by Robock et al." *Journal of Geophysical Research: Atmospheres*. https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JD031281 — Defends methodology; maintains max 1.3 Tg even with unlimited fuel.
- Robock, A., Toon, O.B., et al. (2019). "Comment on 'Climate Impact of a Regional Nuclear Weapon Exchange' by Reisner et al." *Journal of Geophysical Research: Atmospheres*. https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JD030777 — Critiques suburban Atlanta target (0.14 g/cm², 15–110× lower than actual urban targets), unreproducible fire model, 40-min fire duration.
- Wagman, B.M., Lundquist, K.A., et al. (2020). "Examining the Climate Effects of a Regional Nuclear Weapons Exchange Using a Multiscale Atmospheric Modeling Approach." *Journal of Geophysical Research: Atmospheres*. https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2020JD033056 — Lawrence Livermore bridging analysis: at 16 g/cm² fuel loading, ~40% of soot directly injected into stratosphere; climate shock persists ~4 years.
- Tarshish, N. & Romps, D.M. (2022). "Latent heating is required for firestorm plume rise." *Journal of Geophysical Research: Atmospheres*. https://romps.berkeley.edu/papers/pubs-2021-water.html — Demonstrates dry simulations (Reisner's method) are invalid for firestorm plume modeling.
- Xia, L., Robock, A., et al. (2022). "Global food insecurity and famine from reduced crop, marine fishery and livestock production due to climate disruption from nuclear war soot injection." *Nature Food*, 3, 586–596. https://www.nature.com/articles/s43016-022-00573-0 — Six soot scenarios: 5 Tg → 7% global calorie drop; 27 Tg → ~30% drop; 47 Tg → ~50% drop; 150 Tg → 90% drop. At 5 Tg, US crop losses ~18% (5-yr avg).
- Jägermeyr, J., et al. (2020). "A regional nuclear conflict would compromise global food security." *PNAS*, 117(13), 7071–7081. https://www.pnas.org/doi/10.1073/pnas.1919049117 — 5 Tg soot: US crop losses 18% (5-yr avg, up to 41% in worst year). Growing season shortened; exceeds Dust Bowl impacts.
- EA Forum (2024). "Nuclear winter — Reviewing the evidence, the complexities, and my conclusions." https://forum.effectivealtruism.org/posts/pbMfYGjBqrhmmmDSo/nuclear-winter-reviewing-the-evidence-the-complexities-and — Comprehensive synthesis; author estimates 2–6°C cooling for full exchange; Denkenberger median ~30 Tg.
- EA Forum (2022). "Nuclear winter scepticism." https://forum.effectivealtruism.org/posts/Ysq53coRwgSWHHz2x/nuclear-winter-scepticism — Bean's skeptical analysis: estimates Robock overestimates by 48–468×; acknowledges Reisner has the only sophisticated fire model.
- Penn State University (2025). "Simulating the unthinkable: Models show nuclear winter food production plunge." https://www.psu.edu/news/research/story/simulating-unthinkable-models-show-nuclear-winter-food-production-plunge — 80% corn yield reduction under full winter; adaptation potential of 10% via cold-tolerant varieties.
- National Park Service. "1816 — The Year Without Summer." https://www.nps.gov/articles/000/1816-the-year-without-summer.htm — Tambora cooling 0.4–0.7°C; New England crop losses 50–90%; frost in June/July/August.
- USGS (2016). "New England's 1816 'Mackerel Year.'" https://www.usgs.gov/news/featured-story/new-englands-1816-mackerel-year-volcanoes-and-climate-change-today — Detailed New England agricultural impacts of Tambora.
- Princeton Science & Global Security, "Plan A" (2019). https://sgs.princeton.edu/the-lab/plan-a — 91.5M casualties from blast/thermal in US-Russia exchange.
- Previous tickets 013, 014, 015, 016 in this project — blast/fallout/climate/crop baselines.

<!-- COMPLETE -->
