# Ticket 020: Carrington-Class Solar Storm — Transformer Damage and Grid Effects

## What to research

A Carrington-class geomagnetic storm (or larger) causes geomagnetically induced currents (GICs) that damage or destroy EHV transformers. How bad is it, how likely is it, and how long does recovery take?

## Specific data needed

1. **The Carrington Event (1859) baseline:**
   - What happened (telegraph systems sparked, operators received shocks)
   - Estimated geomagnetic disturbance intensity
   - Modern estimates of what a Carrington-class event would do to today's grid

2. **NAS (2008) — Severe Space Weather Events report:**
   - Key findings on grid vulnerability
   - Estimated number of at-risk EHV transformers
   - Geographic variation (higher latitudes more vulnerable)
   - Economic damage estimate ($1-2 trillion)
   - Recovery timeline

3. **Lloyd's / Atmospheric and Environmental Research (2013):**
   - Updated analysis of solar storm risk
   - Estimated transformer damage by storm intensity
   - 4-10 year recovery estimate for worst case

4. **Probability:**
   - Estimated probability of Carrington-class event per decade: ~12% (NAS)
   - Near-miss: July 2012 CME that would have been Carrington-class had it hit Earth
   - How does this compare to EMP attack probability?

5. **Differences from EMP:**
   - Solar storm produces E3-like effects (slow GIC) but NOT E1 (fast pulse)
   - This means transformers are damaged but consumer electronics are NOT
   - Cars, generators, radios, etc. survive a solar storm — only the grid goes down
   - This makes solar storm recovery potentially faster than EMP recovery

6. **Grid hardening efforts since NAS 2008:**
   - Have any of the NAS recommendations been implemented?
   - Current state of GIC monitoring and transformer protection
   - FERC (Federal Energy Regulatory Commission) standards

## Where to look

1. **NAS (2008) — "Severe Space Weather Events—Understanding Societal and Economic Impacts"**
2. **Lloyd's / AER (2013) — "Solar Storm Risk to the North American Electric Grid"**
3. **NERC — GMD (Geomagnetic Disturbance) standards and assessments**
4. **FERC Order 779 (2013)** — GMD reliability standards
5. **Hapgood, Mike — space weather research**
6. **NOAA Space Weather Prediction Center** — solar cycle data

## Result format

Key Data Points table:
- `transformers_at_risk` — number and percentage
- `recovery_time_years` — with range
- `event_probability_per_decade`
- `geographic_variation` — which regions are most/least vulnerable

Also a comparison table: solar storm vs. EMP attack — what's the same, what's different.

## What good data looks like

- NAS 2008 and Lloyd's 2013 as primary sources with clear numbers
- Explicitly compares to EMP: same grid-down outcome but electronics survive and geographic pattern differs
- Notes that solar storm probability is NON-negligible (~12%/decade) — this is the most likely of all scenarios
- Addresses whether any grid hardening has occurred since 2008 (spoiler: minimal)
