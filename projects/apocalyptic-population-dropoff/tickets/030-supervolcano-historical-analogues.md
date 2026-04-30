# Ticket 030: Supervolcano — Historical Eruptions and Population Effects

## What to research

Compile data from historical volcanic eruptions to calibrate the supervolcano mortality curve. How did past eruptions affect nearby and global populations?

## Specific eruptions to cover

1. **Tambora (1815, Indonesia, VEI-7):**
   - Direct deaths: ~10,000-12,000 (pyroclastic flows, tsunami)
   - Indirect deaths from famine: estimated 50,000-90,000
   - 1816 crop failures: what was the actual mortality increase in affected regions?
   - Population recovery timeline

2. **Krakatoa (1883, Indonesia, VEI-6):**
   - Direct deaths: ~36,000 (mostly tsunami)
   - Global cooling: 1.2°C average for 1 year
   - Agricultural impact: minimal at global scale
   - Key lesson: VEI-6 is dramatic but not civilizational

3. **Pinatubo (1991, Philippines, VEI-6):**
   - Direct deaths: ~800
   - Global cooling: 0.5°C for 2 years
   - Best-instrumented eruption: detailed climate data
   - Key lesson: precise climate data for scaling to larger eruptions

4. **Toba (~74,000 BP, Indonesia, VEI-8):**
   - Genetic bottleneck theory: human population may have dropped to ~10,000-30,000
   - Counter-evidence: some archaeological sites show continuous occupation through Toba
   - Current consensus leaning toward "significant but not near-extinction"
   - Most relevant analogue but worst data (74K years ago)

5. **Oruanui eruption (~26,500 BP, New Zealand, VEI-8):**
   - Taupo volcano's largest eruption
   - Less studied than Toba for population effects
   - Useful for climate modeling comparison

6. **Scaling relationships:**
   - VEI-6 (Pinatubo) → VEI-7 (Tambora) → VEI-8 (Yellowstone) scaling
   - Each VEI level is ~10x more material
   - Does climate impact scale linearly? (Probably sub-linearly due to saturation effects)

## Where to look

1. **Global Volcanism Program (Smithsonian)** — eruption database
2. **Self, Stephen** — scaling laws for volcanic eruptions
3. **Oppenheimer, Clive — "Eruptions that Shook the World"**
4. **Ambrose, Stanley** — Toba genetic bottleneck
5. **Newhall et al.** — VEI classification and eruption characteristics
6. **Climate modeling papers** — Pinatubo as calibration for volcanic aerosol effects

## Result format

Key Data Points table. For each eruption:
- `vei` — eruption intensity
- `direct_deaths`
- `indirect_deaths` (famine, disease)
- `global_cooling_c` — temperature change
- `cooling_duration_years`
- `crop_impact_pct` — agricultural production change
- `population_impact_pct` — if available

## What good data looks like

- Pinatubo is the precision anchor (best instrumented); Tambora is the severity anchor (closest to VEI-8 effects); Toba is the scale anchor (actual VEI-8 but ancient)
- Builds a clear scaling ladder from VEI-6 → VEI-7 → VEI-8
- Notes where the scaling breaks down (aerosol saturation, geographic specifics)
- Toba discussion is balanced: presents both the bottleneck theory and its critics
