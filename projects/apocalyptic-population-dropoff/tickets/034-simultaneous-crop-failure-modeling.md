# Ticket 034: Simultaneous Crop Failure — Multi-Breadbasket Failure Modeling

## What to research

What happens when 3 or more of the world's major breadbaskets fail simultaneously from climate/weather events, without a single catastrophic trigger like nuclear war or a supervolcano?

## Specific data needed

1. **Gaupp et al. (2020) — multi-breadbasket failure:**
   - Their modeling of simultaneous crop failures across major producing regions
   - Probability estimates: how likely is simultaneous failure?
   - Magnitude: how much production is lost in each scenario?
   - Historical precedent: has this ever happened?

2. **The world's breadbaskets:**
   - US Midwest (corn, soy, wheat)
   - China (rice, wheat)
   - India (rice, wheat)
   - Brazil (soy, corn)
   - EU (wheat)
   - Australia (wheat)
   - What fraction of global calories does each produce?

3. **Correlation of crop failures:**
   - Climate teleconnections: El Niño, jet stream patterns that affect multiple regions simultaneously
   - Gaupp et al. found higher correlation than previously assumed
   - Is the probability increasing with climate change?

4. **US-specific impact:**
   - If the US Midwest fails simultaneously with 2+ other breadbaskets:
     - No food imports available (everyone is short)
     - US domestic production down 30-70%
     - Strategic reserves (if any) depleted quickly
   - How does this compare to the food supply data from ticket 003?

5. **Timeline and severity:**
   - Breadbasket failure is seasonal — you discover it at harvest time
   - From failed harvest to famine: 3-6 months (existing stores depleted)
   - Duration: one bad year? Multiple years? (Climate conditions could persist)
   - Does society survive one bad year? Two? Three?

6. **Government/market response:**
   - Rationing, price controls, trade restrictions (export bans)
   - Historical: how have governments responded to food crises?
   - Could the US military/government maintain order through a 1-year famine?
   - Probably yes for 1 year, probably no for 2+ years

## Where to look

1. **Gaupp et al. (2020) — Nature Climate Change** — multi-breadbasket failure
2. **ALLFED** — food production catastrophe modeling
3. **FAO GIEWS** — Global Information and Early Warning System
4. **USDA Foreign Agricultural Service** — global crop production data
5. **Tigchelaar et al. (2018)** — climate change and crop failure probability
6. **Chatham House (2015)** — "Chokepoints and Vulnerabilities in Global Food Trade"

## Result format

Key Data Points:
- `simultaneous_failure_probability_per_decade`
- `us_production_loss_pct` — range for 3-breadbasket failure
- `global_caloric_shortfall_pct`
- `months_to_famine_onset`
- `famine_duration_years`

**Mortality Timeline** for a 3+ breadbasket failure lasting 2 years:

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|

## What good data looks like

- Gaupp et al. 2020 is the primary source — their correlation analysis is the key insight
- This is a SLOWER scenario than nuclear war or grid collapse — mortality ramps over months, not hours
- Government response is a bigger variable here than in other scenarios (society doesn't instantly collapse)
- Final mortality is probably lower than other scenarios: 10-40% if sustained for 2+ years, depending on government effectiveness
