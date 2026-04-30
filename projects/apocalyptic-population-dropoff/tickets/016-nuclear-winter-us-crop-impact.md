# Ticket 016: Nuclear Winter — US Crop Production and Famine Mortality

## What to research

Given the climate changes from ticket 015, what happens to US food production year by year, and how many people starve?

## Specific data needed

1. **Xia et al. (2022) US-specific crop data:**
   - Year-by-year caloric production as % of baseline for the US
   - Which crops are most affected? (Corn, wheat, soy, rice — by how much?)
   - At what point does US food production begin recovering?
   - Total caloric deficit per year

2. **Marine fishery impact:**
   - Xia et al. also model marine fish catch decline
   - US-specific fishery production under nuclear winter
   - Timeline to recovery

3. **Livestock impact:**
   - Without feed crops, how quickly do livestock populations collapse?
   - Slaughter of livestock provides a one-time caloric buffer — how much?
   - Timeline: livestock population over years 1-5

4. **Famine mortality modeling:**
   - Given X% caloric production, how many people can be fed?
   - Distribution problem: who gets the remaining food? (Government rationing vs. market collapse vs. violence)
   - Historical famine mortality rates as calibration (what % die when food drops to 50%, 25%, 10% of normal?)

5. **ALLFED alternative food in nuclear winter:**
   - Which alternative foods work without sunlight? (Mushrooms, stored biomass conversion)
   - How much can they offset the caloric deficit?
   - Denkenberger & Pearce estimates for nuclear winter food alternatives

6. **Year-by-year US mortality from famine:**
   - Combine crop data + stored food (ticket 003) + alternative food (ticket 011) + medical deaths (001/002)
   - Produce a year-by-year cumulative mortality estimate for the nuclear winter famine phase

## Where to look

1. **Xia et al. (2022) — Nature Food** — primary source, supplementary tables
2. **ALLFED publications** — alternative food in nuclear winter
3. **Denkenberger & Pearce — "Feeding Everyone No Matter What"**
4. **Historical famine mortality studies** — Sen, Amartya (famine economics); Ó Gráda, Cormac (famine history)
5. **USDA** — current US crop production by type for baseline
6. **FAO** — historical famine mortality data

## Result format

**Mortality Timeline** is the primary output:

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|

This should CONTINUE from tickets 013 + 014 cumulative totals, adding famine deaths from month 3 onwards through year 10.

Key Data Points for year-by-year crop production:
- `us_caloric_production_pct` for years 1-10 (as % of current baseline)

## What good data looks like

- Uses Xia et al. actual data tables, not just their headline "90% crop loss" figure
- Year-by-year numbers showing the trajectory (worst year, when recovery begins, when back to 50%)
- Famine mortality is calibrated against historical famines, not just "everyone without food dies"
- The nuclear war cumulative curve (blast + fallout + famine) should reach 50-90% mortality by year 5 for the Xia et al. scenario
