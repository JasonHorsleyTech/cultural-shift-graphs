# Ticket 014: Nuclear War — Fallout and Extended Radiation Mortality

## What to research

After the initial blasts, radioactive fallout drifts downwind for days to weeks. How many additional Americans die from radiation exposure in the weeks following a full exchange?

## Specific data needed

1. **Fallout pattern modeling:**
   - Prevailing wind patterns over the US — where does fallout go?
   - Which population centers are downwind of major targets?
   - DTRA/FEMA fallout prediction models — what dose rates at what distances?

2. **Radiation dose and mortality:**
   - Acute radiation syndrome (ARS) thresholds: LD50 (~4-5 Sv), LD90, etc.
   - Time to death at various dose levels (days to weeks)
   - Population in fallout zones receiving lethal doses

3. **Shelter effectiveness:**
   - How much does sheltering reduce dose? (Concrete buildings: 10-100x reduction)
   - What % of Americans would shelter effectively vs. flee into fallout?
   - Historical: fallout shelter program data from the 1960s (are any shelters still stocked/maintained?)

4. **Contaminated food and water:**
   - How long until fallout contaminates local water sources?
   - Can contaminated crops be eaten? At what risk?
   - Long-term radiation in soil — when is it safe to farm?

5. **Longer-term radiation effects (months to years):**
   - Increased cancer rates — but these kill over years/decades, not immediately
   - Immune suppression from sub-lethal doses — this amplifies disease mortality
   - Reproductive effects (sterility, birth defects)

## Where to look

1. **Glasstone & Dolan — "Effects of Nuclear Weapons"** — the definitive fallout reference
2. **DTRA — HPAC (Hazard Prediction and Assessment Capability)** — fallout modeling
3. **FEMA fallout shelter survey data**
4. **Atomic bomb survivor studies (Hiroshima/Nagasaki Life Span Study)**
5. **Chernobyl and Fukushima health studies** — long-term radiation effects
6. **OTA (1979) — "The Effects of Nuclear War"** — fallout casualty estimates

## Result format

**Mortality Timeline** extending from day 1 to month 6:

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|

This should CONTINUE from ticket 013's figures (start from their 24-hour cumulative total and add fallout deaths on top).

Key Data Points:
- `fallout_lethal_zone_population` — Americans receiving >4 Sv without shelter
- `fallout_additional_deaths_30days` — deaths from ARS in first month
- `immune_suppression_population` — Americans receiving sub-lethal but immune-compromising doses

## What good data looks like

- Fallout modeling uses actual US wind patterns and target locations
- Distinguishes between immediate radiation deaths (ARS, days to weeks) and long-term effects (cancer, years)
- The 30-day fallout death estimate adds maybe 5-20M on top of blast casualties — if much higher or lower, explain why
- Notes that immune suppression from sub-lethal doses will amplify disease mortality in later months (connects to ticket 008)
