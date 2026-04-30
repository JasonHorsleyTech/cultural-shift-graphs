# Ticket 018: Nuclear Autumn — Reisner et al. Alternative Scenario

## What to research

Reisner et al. at Los Alamos used higher-resolution fire models than Robock/Xia and found significantly less soot reaching the stratosphere. This produces a "nuclear autumn" rather than full winter — still bad, but survivably bad. This ticket builds the ALTERNATIVE nuclear war curve.

## Specific data needed

1. **Reisner et al. (2018, 2019) findings:**
   - Soot reaching stratosphere: how much less than Xia et al.'s 150 Tg?
   - Temperature change: 1-4°C cooling vs. Xia et al.'s 10°C+
   - Duration of cooling
   - Why less soot? (More concrete/less wood in modern cities, fire behavior modeling differences, soot rainout)

2. **Crop impact under nuclear autumn:**
   - At 1-4°C cooling, what happens to US crop production?
   - Historical analogues: 1816 "Year Without a Summer" (Tambora, ~1°C cooling) — crop failures but not total
   - Growing season shortening: how many days lost per degree of cooling?
   - Could US agriculture adapt within 1-2 seasons? (Shift to cold-tolerant crops, earlier/later planting)

3. **Mortality curve under nuclear autumn:**
   - Blast + fallout casualties are the same (same exchange, same bombs)
   - But famine is dramatically less severe
   - Estimated US mortality: blast/fallout/EMP + moderate famine, but NOT civilizational collapse
   - Stabilization timeline: probably 2-5 years vs. 5-10 for full winter

4. **Scientific community assessment:**
   - Where does the scientific consensus lean? Xia/Robock or Reisner?
   - Key papers critiquing each side
   - Is there a middle-ground estimate?

5. **Constructing the alternative curve:**
   - Year-by-year cumulative mortality for nuclear autumn variant
   - Compare: 30-50% mortality (autumn) vs. 70-90% (winter) — is that the right ballpark?

## Where to look

1. **Reisner et al. (2018) — JGR Atmospheres** — fire modeling
2. **Reisner et al. (2019) — JGR Atmospheres** — updated analysis
3. **1816 "Year Without a Summer" literature** — historical analogue for moderate cooling
4. **Robock responses to Reisner** — the scientific back-and-forth
5. **Coupe et al. (2019)** — additional nuclear winter modeling
6. **USDA cold-climate agriculture data** — crop yields under temperature stress

## Result format

**Mortality Timeline** for the full nuclear autumn scenario (from hour 0 to year 10):

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|

This is a COMPLETE curve for the nuclear autumn variant — not additive to other tickets. It shares blast/fallout numbers with tickets 013-014 but diverges at the famine phase.

Key Data Points for:
- `soot_injection_reisner_tg` — Reisner's soot estimate
- `temperature_change_reisner_c` — Reisner's cooling estimate
- `us_crop_loss_reisner_pct` — crop production loss under nuclear autumn

## What good data looks like

- Clearly explains WHY the two models disagree (fire behavior, soot lofting, city composition)
- The nuclear autumn curve should show the same initial drop as nuclear winter (same blast/fallout) but diverge starting around month 6 (less severe famine)
- Final mortality should be 30-60% instead of 70-90%
- Honest about which model is more likely correct (or if it's genuinely uncertain)
