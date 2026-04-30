# Ticket 001: US Medical Dependency — Immediately Life-Threatening

## What to research

The population of Americans who will die within 30 days of a total infrastructure collapse purely from loss of medical care — no starvation, no violence, just the medication/treatment cliff.

## Specific data needed

For each dependency category, find:
- Current US population dependent
- Time to death without treatment/medication
- Whether any improvised alternatives exist

**Categories to cover:**
1. Insulin-dependent diabetes (Type 1 + insulin-requiring Type 2) — separate the two
2. Dialysis patients (ESRD)
3. Ventilator-dependent / home oxygen
4. Organ transplant recipients on immunosuppressants
5. Currently hospitalized patients (daily census, ICU vs. general)
6. Nursing home / skilled nursing facility residents
7. Patients on life-sustaining chemotherapy (active cancer treatment)
8. Severe epilepsy controlled only by medication
9. Severe mental illness requiring antipsychotics (risk of fatal catatonia, self-harm)
10. Home TPN (total parenteral nutrition) patients

## Where to look

1. **CDC NHANES** — medication use surveys
2. **ADA (American Diabetes Association)** — insulin-dependent population stats
3. **USRDS (US Renal Data System)** — dialysis population
4. **CMS (Centers for Medicare & Medicaid)** — nursing home census, hospitalization data
5. **UNOS (United Network for Organ Sharing)** — transplant recipient registry
6. **AARC (American Association for Respiratory Care)** — ventilator/oxygen data

## Result format

Use the standard Key Data Points table from plan.md. Each row should be one dependency category.

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|

Include a summary row: `total_30day_medical_deaths` with the sum and propagated uncertainty range.

## What good data looks like

- Each category has a current population number from a named source (not "estimated")
- Time-to-death ranges are sourced from medical literature, not guessed
- The total is 10-30M (based on exploratory research). If you get a number outside this range, explain why
- Distinguish between "will definitely die" (insulin-dependent Type 1) and "high probability of death" (nursing home residents who may have family to take them in)
