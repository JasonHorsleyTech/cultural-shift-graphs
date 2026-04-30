# Result: Nuclear War — Fallout and Extended Radiation Mortality

## Summary

After a full US-Russia exchange (~4,400 warheads), radioactive fallout from ~1,000-1,500 ground bursts (primarily on ICBM fields and hardened military targets) drifts east on prevailing westerlies across the most populated regions of the US. An estimated 10-30 million additional Americans die from acute radiation syndrome (ARS) in the first 30-60 days, on top of ~90 million blast/thermal deaths. The US has no maintained fallout shelter program (federal funding ended in the 1970s), so realistic shelter behavior is far worse than Cold War planners assumed. Critically, 50-80 million survivors receive sub-lethal but immune-compromising doses (>0.5 Sv), dramatically amplifying disease mortality in subsequent months.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| ground_bursts_on_us | 1200 | 800 | 1500 | detonations | day 0 | OTA 1979, Princeton Plan A | medium |
| fallout_lethal_zone_outdoor_population | 100000000 | 70000000 | 140000000 | people | day 0-2 | Johnston's Archive, OTA 1979 | medium |
| fallout_lethal_zone_sheltered_deaths | 35000000 | 15000000 | 50000000 | people | day 1-60 | OTA 1979, Glasstone & Dolan | low |
| fallout_additional_deaths_30days | 15000000 | 5000000 | 30000000 | people | day 1-30 | OTA 1979, Johnston's Archive | medium |
| fallout_additional_deaths_60days | 25000000 | 10000000 | 40000000 | people | day 1-60 | Johnston's Archive | low |
| immune_suppression_population_moderate | 70000000 | 50000000 | 90000000 | people | day 1-180 | NCBI, Glasstone & Dolan | low |
| immune_suppression_population_severe | 35000000 | 20000000 | 50000000 | people | day 1-180 | NCBI, Glasstone & Dolan | low |
| us_avg_outdoor_dose_full_exchange | 6 | 3 | 12 | sv | day 0-14 | Johnston's Archive (scaled from 18k to 4.4k warheads) | low |
| wartime_ld50_no_medical_care | 2.5 | 2.2 | 3.5 | sv | day 1-60 | Rotblat 1986, NCBI | medium |
| peacetime_ld50_with_care | 4.5 | 4.0 | 5.0 | sv | day 1-60 | RERF, multiple sources | high |
| shelter_pf_wood_frame | 2.5 | 2.0 | 3.0 | factor | immediate | Glasstone & Dolan 1977 | high |
| shelter_pf_basement_concrete | 30 | 20 | 40 | factor | immediate | Glasstone & Dolan 1977 | high |
| shelter_pf_designated_shelter | 100 | 40 | 1000 | factor | immediate | Glasstone & Dolan 1977 | high |
| us_shelter_program_capacity | 0 | 0 | 0 | pct | current | FEMA, multiple | high |
| soil_safe_for_farming_cs137 | 30 | 10 | 100 | years | post-event | Chernobyl data, IAEA | medium |
| global_grain_reserves_buffer | 73 | 68 | 77 | days | current | FAO, Nature Food 2022 | high |
| disease_deaths_from_immune_suppression | 10000000 | 5000000 | 20000000 | people | year 1 | Johnston's Archive | low |

## Mortality Timeline

Note: Starting from blast/thermal casualties at 24 hours (~27% of 335M). Ticket 013 results were not available; baseline uses Princeton Plan A estimates. This timeline adds fallout/radiation mortality cumulatively.

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|
| 24 | 27.0 | 22.0 | 32.0 | blast and thermal radiation | Princeton Plan A 2019 |
| 72 | 28.5 | 23.0 | 34.0 | early ARS (>10 Sv cerebrovascular syndrome) | Glasstone & Dolan 1977 |
| 168 | 30.0 | 24.0 | 36.0 | ARS (>8 Sv gastrointestinal syndrome, death in 1-14 days) | Glasstone & Dolan 1977, REMM |
| 720 | 34.0 | 27.0 | 41.0 | ARS (4-8 Sv hematopoietic syndrome, wartime LD50 deaths) | OTA 1979, Rotblat 1986 |
| 2160 | 38.0 | 30.0 | 46.0 | delayed ARS at wartime LD50 (2.5-4 Sv) + untreated radiation injuries | OTA 1979, Johnston's Archive |
| 4320 | 40.0 | 32.0 | 49.0 | lingering radiation deaths + early immune-compromise disease | Johnston's Archive, NCBI |

## Fallout Pattern Analysis

### Ground burst distribution
A full exchange targets three categories with ground bursts (which produce heavy fallout):
- **ICBM fields** (~900+ warheads on 450 silos across Montana, North Dakota, Wyoming/Nebraska/Colorado): 2+ warheads per silo, producing the largest contiguous fallout zones
- **Hardened military facilities** (submarine bases, bomber bases, C3 bunkers): ~200-400 ground bursts
- **Leadership/continuity targets**: ~50-100 ground bursts

City attacks are predominantly **airbursts** (maximizing blast radius), which produce minimal local fallout. This means fallout mortality is driven primarily by counterforce targeting of ICBM fields.

### Prevailing wind patterns and downwind population
US prevailing westerlies carry fallout **east and northeast**:
- **From Montana (Malmstrom)**: across the Dakotas, Minnesota, Wisconsin → Minneapolis-St. Paul (3.7M metro)
- **From North Dakota (Minot)**: across Minnesota, Wisconsin, Michigan → Minneapolis, Milwaukee (1.6M), Detroit (4.3M)
- **From Wyoming/Colorado (F.E. Warren)**: across Nebraska, Iowa, Illinois → Omaha (1.0M), Des Moines (0.7M), Chicago (9.5M)

The entire upper Midwest corridor (population ~40-50M) lies directly downwind of ICBM fields. With hundreds of ground bursts producing overlapping fallout plumes, outdoor doses in this region would reach **tens of Sv** within 48 hours.

### Fallout decay (Seven-Ten Rule)
Dose rate drops by a factor of 10 for every 7x increase in time:
- 1 hour post-detonation: 1,000 R/hr (reference)
- 7 hours: 100 R/hr
- 49 hours (~2 days): 10 R/hr
- 343 hours (~2 weeks): 1 R/hr
- Most areas safe for brief outdoor exposure: **3-5 weeks** post-detonation

With overlapping plumes from hundreds of detonations, the initial dose rates are cumulative and decay applies to each detonation's fallout independently.

## Shelter Effectiveness Analysis

### Protection factors by building type
| Shelter type | Protection factor | Dose reduction | Source |
|---|---|---|---|
| Open air | 1 | None | Glasstone & Dolan |
| Wood frame house | 2-3 | 50-67% | Glasstone & Dolan |
| Brick/concrete building | 10-15 | 90-93% | Glasstone & Dolan |
| Basement (wood frame) | 10-20 | 90-95% | Glasstone & Dolan |
| Basement (concrete) | 20-40 | 95-97.5% | Glasstone & Dolan |
| Designated fallout shelter | 40-1000 | 97.5-99.9% | Glasstone & Dolan |

### Why shelter assumptions matter enormously
At a representative outdoor dose of 6 Sv (scaled estimate for 4,400-warhead exchange):
- **Open air**: 6 Sv → universally fatal without medical care
- **Wood frame house (PF 2.5)**: 2.4 Sv → near wartime LD50, ~50% fatal
- **Basement (PF 20)**: 0.3 Sv → survivable but immune-compromising
- **Designated shelter (PF 100)**: 0.06 Sv → minimal health impact

The problem: **the US has no maintained shelter program.** Federal shelter funding ended in the 1970s. New York City began removing shelter signs in 2017. Switzerland shelters 114% of its population; the US shelters effectively 0% through organized programs.

### Realistic shelter behavior
With no public education since the Cold War and no maintained shelters:
- An estimated 60-70% of survivors shelter in ordinary buildings (PF 2-10)
- An estimated 10-20% attempt to evacuate, driving through fallout plumes (PF ~1)
- An estimated 10-20% access adequate shelter (basements, concrete structures, PF 20+)

This means the majority of the surviving population receives doses in the 0.5-3 Sv range — straddling the line between immune suppression and lethality under wartime conditions.

## Contaminated Food and Water

### Critical isotopes
| Isotope | Half-life | Primary risk | Timeline | Source |
|---|---|---|---|---|
| Iodine-131 | 8 days | Thyroid (especially children via milk) | Weeks | IAEA |
| Cesium-137 | 30 years | Uniform body distribution, soil contamination | Decades | Chernobyl studies |
| Strontium-90 | 29 years | Bone deposition (mimics calcium) | Decades | Atmospheric testing data |

### Agricultural contamination timeline
- **Weeks 1-4**: I-131 contaminates all exposed food/water, especially dairy. Children at highest risk.
- **Months 1-12**: Cs-137 and Sr-90 contaminate soil and water. Crops grown in contaminated soil are unsafe.
- **Years 1-30+**: Cs-137 persists in soil. Post-Chernobyl, reindeer in Scandinavia still exceeded safety limits 26 years later. Heavily contaminated zones (near ground bursts) may be unfarmable for **decades to centuries**.
- **Groundwater**: Contaminated for **10+ years**; complete purification takes hundreds to thousands of years for heavily contaminated areas.

From atmospheric testing alone (1950s-60s): children born in St. Louis in 1963 had Sr-90 levels 50x higher than 1950 births. A full exchange would produce contamination orders of magnitude worse.

## Longer-Term Radiation Effects

### Cancer (from RERF Life Span Study, 86,611 A-bomb survivors, 1950-2003)
- Excess relative risk per Gy for solid cancers: 0.42 (95% CI: 0.32-0.53) at age 70, exposed at age 30
- Risk increases 29% per decade decrease in exposure age (children much more vulnerable)
- Dose-response is **linear with no threshold** — any dose increases risk
- Leukemia latency: **2 years**; solid tumors: **10-40 years**
- Population estimate: 10 million person-Sv of exposure produces **0.4-1.25 million excess cancers** (0.17-0.5 million fatal)

### Immune suppression
- Lymphocytes are the most radiosensitive blood cells; detectable depletion at **0.25 Sv**
- At 0.5-2 Sv: significant lymphocyte depletion lasting weeks to months
- In a post-nuclear environment with no antibiotics, no sanitation, and crowded survivors: epidemic disease becomes the primary killer
- Johnston's Archive models **10 million US disease deaths** in the year following exchange, including ~1 million from plague

### Reproductive effects
- Temporary male sterility: 0.1 Sv (low sperm count for ~1 year)
- Permanent male sterility: 4 Sv
- Temporary female sterility: 1-2 Sv
- Permanent female sterility: 4 Sv
- In utero exposure at 1 Sv: fatal cancer risk increases from ~25% baseline to ~100%

## Data Gaps

- **Shelter behavior is the single largest uncertainty.** The difference between the low and high mortality estimates is almost entirely driven by shelter assumptions. No modern data exists on how Americans would actually behave — the last civil defense drills were in the 1980s.
- **Wartime LD50 is poorly constrained.** Rotblat's 2.2 Gy estimate and standard models at 2.5-3.5 Gy are based on Hiroshima survivors who were otherwise healthy and had some medical access. Post-nuclear survivors would face dehydration, stress, burns, and zero medical care — the effective LD50 could be even lower.
- **Overlapping fallout plumes from hundreds of ground bursts on ICBM fields are not well-modeled.** Most fallout models consider single detonations. The cumulative effect of 900+ ground bursts across three ICBM fields is extrapolated, not directly simulated.
- **Scaling from Johnston's Archive.** Johnston's scenario uses ~18,000 warheads (8,500 MT) — Cold War peak arsenals. Scaling to modern ~4,400 warheads is not linear. Fewer warheads means less total fallout, but counterforce targeting of ICBM silos (the primary fallout source) would be similar in both scenarios. The average outdoor dose estimate of ~6 Sv is rough.
- **No model captures the interaction between radiation injury, burns, trauma, dehydration, and psychological stress.** Each factor lowers the effective lethal dose, but the combined effect is guesswork.
- **The 30-day fallout death estimate (5-30M) exceeds the ticket's expected 5-20M at the high end** because: (1) wartime LD50 is significantly lower than peacetime, (2) the US has zero organized shelter capacity, and (3) realistic shelter behavior puts most survivors in PF 2-10 buildings, yielding doses near or above wartime LD50 in heavy fallout zones.

## Sources

- **Glasstone, S. & Dolan, P.J. (1977).** "The Effects of Nuclear Weapons," 3rd edition. US Department of Defense / Department of Energy. The standard reference for blast, thermal, and fallout effects including protection factors and dose-response relationships.
- **Office of Technology Assessment (1979).** "The Effects of Nuclear War." US Congress OTA. Provides counterforce and full exchange casualty estimates with varying shelter assumptions.
- **Princeton Science and Global Security, Plan A (2019).** "Plan A" nuclear war simulation. Estimates 90+ million immediate casualties in a US-Russia exchange from blast/thermal alone, explicitly excluding fallout.
- **Johnston's Archive (2003-2015).** Nuclear war scenario modeling. 18,000-warhead worst case: 110M US dead day 1, 160M by 2 months, 170M by 1 year. Average US outdoor dose 1,200 rem. Includes disease mortality estimates.
- **Rotblat, J. (1986).** "Acute Radiation Mortality in a Nuclear War." London. Estimated wartime LD50 at 2.2 Gy based on Hiroshima data adjusted for wartime conditions.
- **NCBI Bookshelf NBK219165.** "The Medical Implications of Nuclear War." Institute of Medicine. Discusses wartime LD50 of 2.5 Gy and population-scale radiation effects.
- **Ozasa, K. et al. (2012).** "Studies of the Mortality of Atomic Bomb Survivors, Report 14, 1950-2003." Radiation Research, 177(3):229-243. RERF Life Span Study establishing linear no-threshold dose-response for cancer.
- **Xia, L. et al. (2022).** "Global food insecurity and famine from reduced crop, marine, and livestock production due to climate disruption from nuclear war soot injection." Nature Food, 3:586-596.
- **FEMA / Ready.gov (2024).** Nuclear explosion preparedness guidance. Recommends 24-hour minimum shelter-in-place.
- **REMM / HHS.** Radiation Emergency Medical Management dose estimator and ARS reference tables.
- **IAEA.** Chernobyl and Fukushima contamination studies; isotope half-lives and environmental persistence data.
- **Federation of American Scientists / ICAN (2024-2025).** Current US and Russian nuclear arsenal counts and deployment data.

<!-- COMPLETE -->
