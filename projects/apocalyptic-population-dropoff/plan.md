# Plan: Apocalyptic Population Drop-off

## What we're building

A graph showing US population survival curves over time after various civilization-disrupting events. X-axis is time post-event (log-scale, day 1 to year 10). Y-axis is surviving population as % of current (~335M = 100%). Each scenario is a separate curve with uncertainty bands and labeled inflection points.

## Scenarios (8 curves)

Each scenario is pinned to a specific, modeled sub-case — not a vague category.

| # | Scenario | Specific parameters | Primary data source |
|---|---|---|---|
| 1 | Full nuclear war (winter) | US-Russia exchange, ~4,400 warheads, 150 Tg soot | Xia et al. 2022 (Nature Food), Princeton Plan A |
| 2 | Full nuclear war (autumn) | Same exchange, lower soot reaching stratosphere | Reisner et al. 2018/2019 (Los Alamos) |
| 3 | Prolonged grid collapse | EMP or Carrington-class solar storm; 4-10 year transformer recovery | EMP Commission, NAS 2008, NIAC 2018 |
| 4 | Catastrophic engineered pandemic | Airborne pathogen, 30-50% CFR, 6-month spread | Dark Winter, Clade X, historical analogues |
| 5 | Supervolcano (Yellowstone VEI-8) | Full caldera eruption, meters of ash in Rockies, volcanic winter | USGS, Toba catastrophe studies |
| 6 | Asteroid impact (10 km) | Chicxulub-class land impact, impact winter | NASA CNEOS, Chicxulub geological record |
| 7 | Global breadbasket failure | Simultaneous failure of 3+ major breadbaskets, no single trigger | Gaupp et al. 2020, ALLFED |
| 8 | Climate tipping cascades (4°C+) | Multiple tipping points crossed, AMOC collapse, decades-long | Kemp et al. 2022 (PNAS), Lenton et al. 2019 |

**Note on scenarios 1 & 2:** These are the same event with different climate modeling assumptions. Xia et al. predict severe nuclear winter (90% crop loss); Reisner et al. predict a milder nuclear autumn (1-4°C cooling). Both are legitimate scientific positions. Showing both brackets the uncertainty honestly.

**Note on scenario 8:** Climate cascades unfold over decades, not months. This curve will look fundamentally different from the others — a slow decline rather than a sharp drop. It should be visually differentiated (dashed line or separate panel) and may need different x-axis treatment.

## Data format

### Result file structure

Every ticket result is a markdown file with the following sections. Not all sections apply to every ticket — foundation tickets won't have mortality timelines, scenario tickets won't always have standalone data points.

```markdown
# Result: [Ticket Title]

## Summary
2-3 sentence overview of findings.

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| example_metric | 8400000 | 7500000 | 9200000 | people | current | ADA 2024 | high |

## Mortality Timeline (scenario tickets only)

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|
| 6 | 27.0 | 22.0 | 32.0 | blast/radiation | Princeton Plan A 2019 |

## Data Gaps
- What couldn't be found
- What's highly uncertain and why

## Sources
- Full citations with URLs where available
```

### Field definitions

**Key Data Points table:**
- `parameter`: Descriptive name of what's measured (snake_case)
- `value`: Central/best estimate as a number
- `range_low` / `range_high`: Plausible bounds. For mortality estimates, "low" = fewer deaths (optimistic), "high" = more deaths (pessimistic)
- `unit`: `people`, `pct` (of 335M), `years`, `months`, `calories_per_day`, `degrees_c`, etc.
- `timeframe`: When this applies (e.g., "day 0-1", "month 1-6", "year 1-5", "current")
- `source`: Short citation (author year or institution year)
- `confidence`: `high` (peer-reviewed, multiple sources agree), `medium` (institutional reports, single study), `low` (extrapolation, contested, or speculative)

**Mortality Timeline table:**
- `time_hours`: Cumulative hours post-event. Use: 1, 6, 24 (hours), 168 (1 week), 720 (1 month), 2160 (3 months), 4320 (6 months), 8760 (1 year), 17520 (2 years), 26280 (3 years), 43800 (5 years), 87600 (10 years). Not every row is needed — use the time points that capture inflection points in the curve.
- `cumulative_deaths_pct`: Central estimate of total cumulative deaths as % of 335M
- `deaths_pct_low`: Optimistic bound (fewer deaths)
- `deaths_pct_high`: Pessimistic bound (more deaths)
- `primary_cause`: Main driver of mortality in this period
- `source`: Primary source for this estimate

### Consistency rules

- All population figures use 335M as the US baseline.
- All percentages are of that 335M baseline (not of remaining population).
- Time is always measured from event onset in hours.
- Deaths are cumulative, not per-period. Each row's `cumulative_deaths_pct` must be ≥ the previous row's.
- Confidence ratings are relative to THIS project's needs: "high" means we can draw a line with a narrow band; "low" means the band is wide enough to be almost meaningless.
- When sources disagree, report the range rather than picking a winner. Note the disagreement in Data Gaps.

## Data proxies by scenario category

Different scenarios have fundamentally different data landscapes. Each category uses the best available proxy, optimized for internal consistency over time rather than absolute accuracy.

### Nuclear war
**Proxy:** Peer-reviewed climate/crop modeling + government casualty simulations.
- Immediate casualties: Princeton Plan A simulation (hour-by-hour modeling)
- Climate effects: Xia et al. 2022 soot injection → temperature → crop yield models (year-by-year, by country)
- Radiation: DTRA/FEMA fallout modeling
- **Strength:** Best-sourced of all scenarios. Actual numbers exist.
- **Gap:** Post-famine social dynamics are not modeled in the papers — caloric math exists but violence/disease amplifiers are extrapolation.

### Prolonged grid collapse (EMP / solar storm)
**Proxy:** Infrastructure dependency analysis + historical partial analogues.
- Grid damage: EMP Commission (2004/08/17), NAS 2008, Lloyd's/AER 2013
- Cascade effects: NIAC 2018 Catastrophic Power Outage study
- Recovery timeline: Transformer manufacturing data, utility industry reports
- **Strength:** Infrastructure dependencies are well-documented. The cascade logic is solid.
- **Gap:** No real-world analogue for nationwide permanent grid loss. Puerto Rico 2017 is the closest but had external aid. The "90% within a year" EMP Commission figure is testimony, not modeling.

### Catastrophic pandemic
**Proxy:** Historical pandemic mortality curves + modern exercise modeling.
- Historical: 1918 flu (well-documented weekly mortality), Black Death, smallpox in Americas
- Modern modeling: Johns Hopkins exercises (Dark Winter, Clade X), RAND 2023
- **Strength:** 1918 flu provides a real mortality curve shape. Disease modeling is mature.
- **Gap:** Infrastructure cascade from a pandemic bad enough to be civilizational is speculative. No modern precedent for a pandemic that *also* collapses infrastructure.

### Supervolcano
**Proxy:** Geological record + volcanic winter climate modeling.
- Ash distribution: USGS Yellowstone modeling
- Climate: Toba catastrophe theory, VEI-8 eruption climate models
- **Strength:** Geological record provides ground truth for eruption scale.
- **Gap:** Toba bottleneck theory (that Toba nearly wiped out humans) is contested. Modern population effects are extrapolation from climate models, not direct observation.

### Asteroid impact
**Proxy:** Chicxulub geological record + impact simulation codes.
- Impact effects: NASA CNEOS, Alvarez hypothesis data
- Climate: Impact winter modeling (analogue to nuclear winter)
- **Strength:** Chicxulub is well-studied. Impact physics is well-modeled.
- **Gap:** Modern human response to impact winter is speculative. Population effects extrapolated from climate → crop models.

### Breadbasket failure
**Proxy:** Agricultural modeling + historical famine mortality.
- Crop failure: Gaupp et al. 2020 multi-breadbasket failure modeling
- Historical: Great Famine (Ireland), Bengal famine, Chinese Great Leap Forward famines
- Food alternatives: ALLFED research
- **Strength:** Famine mortality curves are well-documented historically.
- **Gap:** Simultaneous global failure at the scale modeled has no historical precedent.

### Climate cascades
**Proxy:** Climate model projections + extrapolation.
- Climate: IPCC AR6, Kemp et al. 2022, Lenton tipping point research
- Mortality: Extrapolation from economic/agricultural models at extreme temperatures
- **Strength:** Climate projections are well-modeled.
- **Gap:** Weakest scenario for mortality estimation. Decades-long timescale makes population modeling highly speculative. Anderson's "10% survival at 4°C" is a single estimate, not a modeled curve.

## Known data gaps

These gaps exist across the literature and should be flagged rather than papered over:

1. **Social dynamics post-collapse.** No model accounts for organized violence, cooperation, or population movement. All mortality estimates beyond immediate casualties are caloric/medical math that assumes passive populations. This is the biggest gap.

2. **Year 1 carrying capacity.** The gap between "pre-industrial US could support ~75-130M" and "post-collapse US with no farming infrastructure could support ???" is enormous and under-studied. ALLFED has some work on alternative foods but not on the transition period.

3. **Compounding scenarios.** Nuclear war causes EMP + nuclear winter + radiation + infrastructure collapse simultaneously. Each is modeled separately; the compound effect is guesswork.

4. **Medication dependency cascade.** Hard numbers exist for immediately life-threatening dependencies (insulin, dialysis), but the broader cascade (cardiac events from stress + medication loss, elderly fragility, neonatal mortality) is not well-quantified.

5. **Nuclear winter intensity.** Xia et al. vs. Reisner et al. disagree by a factor of 2-3x on cooling. This is an active scientific debate with no consensus.

## Ticket structure

42 tickets organized in 9 groups:

- **Foundation (001-012):** Cross-cutting research that feeds into all scenario curves. Medical dependencies, food supply, carrying capacity, historical patterns, demographics.
- **Nuclear war (013-018):** Blast casualties, fallout, nuclear winter/autumn climate and crop effects.
- **Grid collapse (019-023):** EMP and solar storm infrastructure damage, cascade effects, recovery timelines.
- **Pandemic (024-027):** Historical mortality curves, engineered pathogen modeling, infrastructure cascade.
- **Supervolcano (028-030):** Ash distribution, volcanic winter, historical analogues.
- **Asteroid (031-033):** Impact modeling, impact winter, location variation.
- **Breadbasket failure (034-036):** Crop failure modeling, trade disruption, famine mortality.
- **Climate cascades (037-039):** 4°C+ scenarios, AMOC collapse, compound risks.
- **Calibration (040-042):** Risk probabilities, recovery rates, pre-Columbian population as lower bound.

Tickets are independent — no ticket requires another ticket's results. Foundation tickets will be researched first (by filename ordering), giving the scenario tickets better context, but each ticket stands alone.
