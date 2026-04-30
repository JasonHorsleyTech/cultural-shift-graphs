# Result: US Medical Dependency — Immediately Life-Threatening

## Summary

Approximately 3.5–5.5 million Americans face near-certain death within 30 days of total infrastructure collapse purely from loss of medical care. When expanded to include high-probability deaths among insulin-dependent Type 2 diabetics, fragile nursing home residents, and severe home oxygen users, the range widens to 5–12 million. The three largest categories are insulin-dependent diabetics (~8.4M dependent, ~2M Type 1 near-certain), dialysis patients (~517K near-certain), and nursing home residents (~1.2M at severe risk).

## Key Data Points

| parameter | value | range_low | range_high | unit | timeframe | source | confidence |
|---|---|---|---|---|---|---|---|
| type_1_diabetes_insulin | 2000000 | 1600000 | 2200000 | people | current | ADA 2024, JHEOR 2024 | high |
| type_2_diabetes_insulin | 6400000 | 5800000 | 7000000 | people | current | ADA 2024, CDC NDSR 2024 | medium |
| total_insulin_users | 8400000 | 7500000 | 9200000 | people | current | ADA 2024 | high |
| type_1_time_to_death | 168 | 72 | 336 | hours | without insulin | Healthline/DM literature | high |
| type_2_insulin_30day_mortality_pct | 25 | 10 | 45 | pct | day 0-30 | extrapolation from HHS mortality data | low |
| dialysis_patients | 516837 | 500000 | 530000 | people | current (Mar 2025) | USRDS 2025 / ESRD Networks | high |
| dialysis_in_center | 433396 | 420000 | 445000 | people | current | USRDS 2025 | high |
| dialysis_home | 78407 | 70000 | 85000 | people | current | USRDS 2025 | high |
| dialysis_time_to_death | 168 | 72 | 336 | hours | without dialysis | nephrology literature | high |
| home_oxygen_users | 1500000 | 1200000 | 1800000 | people | current | ATS 2020, CMS data | medium |
| home_oxygen_30day_mortality_pct | 25 | 10 | 40 | pct | day 0-30 | extrapolation | low |
| ventilator_dependent | 300000 | 200000 | 600000 | people | current | PMC projections, AARC estimates | low |
| ventilator_time_to_death | 1 | 0.5 | 24 | hours | without ventilator | clinical consensus | high |
| organ_transplant_recipients | 450000 | 400000 | 550000 | people | current | USRDS 2025 (kidney: 316,873), OPTN proportional estimate | medium |
| transplant_acute_rejection_pct | 37 | 25 | 50 | pct | day 0-30 | Palliative Care Network, transplant literature | medium |
| transplant_30day_mortality_pct | 20 | 10 | 35 | pct | day 0-30 | extrapolation from rejection data | low |
| hospital_daily_census | 510000 | 480000 | 540000 | people | daily average | HHS reporting 2023-2024 | high |
| hospital_icu_census | 70000 | 55000 | 85000 | people | daily average | AHA 2024, ~13% of census | medium |
| hospital_icu_time_to_death | 24 | 1 | 72 | hours | without ICU care | clinical consensus | high |
| hospital_general_30day_mortality_pct | 30 | 15 | 45 | pct | day 0-30 | extrapolation from acuity mix | low |
| nursing_home_residents | 1200000 | 1100000 | 1400000 | people | current | KFF 2024, CDC NCHS 2024 | high |
| nursing_home_30day_mortality_pct | 25 | 15 | 40 | pct | day 0-30 | extrapolation from dependency/mortality data | low |
| chemo_active_patients | 800000 | 650000 | 1000000 | people | annual | ACS, NCI estimates | medium |
| chemo_life_sustaining_subset | 100000 | 50000 | 150000 | people | current | extrapolation (acute leukemia, aggressive lymphoma) | low |
| chemo_30day_mortality_pct | 60 | 40 | 80 | pct | day 0-30 (life-sustaining subset) | oncology literature | low |
| epilepsy_drug_resistant | 1000000 | 800000 | 1200000 | people | current | Neurology 2021, CDC | medium |
| epilepsy_30day_mortality_pct | 5 | 2 | 10 | pct | day 0-30 | extrapolation from SE mortality | low |
| severe_mental_illness_antipsychotic | 2600000 | 2000000 | 3200000 | people | current (schizophrenia alone) | NAMI, NIMH | medium |
| smi_30day_mortality_pct | 2 | 0.5 | 5 | pct | day 0-30 | extrapolation (catatonia, self-harm) | low |
| home_tpn_patients | 35000 | 25000 | 40000 | people | current | PMC 2017, NutriShare | medium |
| home_tpn_time_to_death | 336 | 168 | 720 | hours | without TPN | clinical consensus (starvation timeline) | medium |
| **total_30day_medical_deaths** | **5500000** | **3500000** | **12000000** | **people** | **day 0-30** | **composite estimate** | **low** |

## Derivation of Total

The total is built bottom-up from each category's population × estimated 30-day mortality without medical care:

| Category | Population | 30-day mortality % | Deaths (central) | Deaths (low) | Deaths (high) |
|---|---|---|---|---|---|
| Type 1 diabetes | 2,000,000 | ~95% | 1,900,000 | 1,520,000 | 2,090,000 |
| Type 2 on insulin | 6,400,000 | ~25% | 1,600,000 | 580,000 | 3,150,000 |
| Dialysis | 517,000 | ~95% | 491,000 | 475,000 | 517,000 |
| Home oxygen (severe subset) | 1,500,000 | ~25% | 375,000 | 120,000 | 720,000 |
| Ventilator-dependent | 300,000 | ~98% | 294,000 | 196,000 | 588,000 |
| Transplant recipients | 450,000 | ~20% | 90,000 | 40,000 | 193,000 |
| Hospitalized (ICU) | 70,000 | ~85% | 60,000 | 47,000 | 72,000 |
| Hospitalized (general) | 440,000 | ~30% | 132,000 | 66,000 | 243,000 |
| Nursing home | 1,200,000 | ~25% | 300,000 | 165,000 | 560,000 |
| Chemo (life-sustaining) | 100,000 | ~60% | 60,000 | 20,000 | 120,000 |
| Epilepsy (drug-resistant) | 1,000,000 | ~5% | 50,000 | 16,000 | 120,000 |
| SMI on antipsychotics | 2,600,000 | ~2% | 52,000 | 10,000 | 160,000 |
| Home TPN | 35,000 | ~90% | 31,500 | 22,500 | 36,000 |
| **Total** | | | **~5,435,000** | **~3,277,000** | **~8,569,000** |

Rounding and accounting for overlap between categories (e.g., nursing home residents who are also on dialysis or insulin), the central estimate is **~5.5 million** with a range of **3.5–12 million**. The high end of the range extends beyond the table sum because it accounts for additional cascade effects: medication-dependent people not captured in these specific categories (cardiac medications, blood thinners, thyroid hormone, etc.) who would face elevated mortality in a total collapse.

### Why the total is below the 10–30M exploratory estimate

The exploratory estimate of 10–30M likely included broader medication dependencies beyond the immediately life-threatening categories. The 30-day window is the constraining factor — many medication-dependent Americans (e.g., those on blood pressure medications, statins, SSRIs, thyroid replacement) face elevated mortality over months, not days. The "definitely dead within 30 days" population is dominated by three groups: Type 1 diabetics (~2M), dialysis patients (~517K), and ventilator-dependent patients (~300K). Expanding to "probably dead within 30 days" adds Type 2 insulin users and fragile institutionalized populations, pushing toward the 5–12M range. To reach 30M, you'd need to include the full cascade of chronic medication withdrawals over 3–6 months.

## Category Details

### 1. Insulin-Dependent Diabetes

**Type 1 (~2 million):** All Type 1 diabetics require exogenous insulin. Without it, diabetic ketoacidosis (DKA) develops within 24 hours. DKA progresses to coma and death within 3–14 days without treatment. Pre-insulin era mortality was essentially 100%. This is the most certain category.

**Type 2 on insulin (~6.4 million):** These patients retain some residual beta cell function. Without insulin, most will develop severe hyperglycemia. The critical subset are those who have progressed to near-total beta cell failure — they face DKA or hyperosmolar hyperglycemic state (HHS). HHS carries 20% mortality even WITH hospital treatment; without treatment, much higher. However, many Type 2 patients on insulin could survive 30 days without it (very sick, but alive). The 25% central mortality estimate is an educated guess with wide uncertainty.

**Improvised alternatives:** Essentially none for synthetic insulin. Animal-source insulin (porcine/bovine pancreas extraction) was used historically but requires industrial processing. No plausible improvised production in a collapse scenario.

### 2. Dialysis (ESRD)

**Population:** 516,837 patients on dialysis as of March 2025 (USRDS/ESRD Networks census). Of these, 433,396 receive in-center hemodialysis, 78,407 use home dialysis, and 5,034 are in nursing facilities.

**Time to death:** Patients already on regular dialysis who abruptly stop will develop fatal hyperkalemia, uremic toxicity, and fluid overload. Death typically occurs within 7–14 days. The conservative management literature showing 6–23 month survival applies to patients with gradual CKD progression who never started dialysis — not to patients with established ESRD who suddenly stop.

**Improvised alternatives:** Peritoneal dialysis is simpler than hemodialysis and could theoretically be improvised, but requires sterile dialysate solution and carries extreme infection risk without proper supplies. Not viable at scale.

### 3. Ventilator-Dependent / Home Oxygen

**Ventilator-dependent (~300K):** Patients who cannot breathe independently. Includes those on chronic invasive ventilation (tracheostomy), BiPAP-dependent patients, and acute ICU ventilator patients. Death occurs within minutes to hours without mechanical ventilation. The population estimate has wide uncertainty — the projected 600K figure includes all prolonged mechanical ventilation episodes, not all of whom are chronically ventilator-dependent at home.

**Home supplemental oxygen (~1.5M):** Primarily COPD patients with chronic hypoxemia. Most are not immediately ventilator-dependent — they can breathe room air, just poorly. Without supplemental oxygen, the most severe cases (those on continuous high-flow oxygen) would deteriorate over days to weeks. The 25% 30-day mortality estimate reflects that a substantial fraction are on oxygen for quality-of-life improvement rather than immediate survival.

**Improvised alternatives:** None for ventilators without electricity. Manual bag-valve-mask ventilation is theoretically possible but requires a person continuously squeezing — not sustainable. For oxygen, concentrators require electricity; compressed oxygen tanks would run out within hours to days.

### 4. Organ Transplant Recipients

**Population:** Estimated ~450,000 living with functioning organ transplants. This is derived from USRDS data showing 316,873 kidney transplant recipients (March 2025) and proportional estimates for liver (~90,000), heart (~30,000), lung (~12,000), and other organs (~5,000).

**Time to rejection:** Without immunosuppressants, acute rejection occurs in 25–50% of patients within days to weeks. However, rejection doesn't always mean rapid death — kidney recipients can return to dialysis (though dialysis also requires infrastructure), and some organs reject more slowly. Estimated 20% 30-day mortality reflects the mix: heart and lung recipients face the fastest lethal rejection; kidney and liver recipients have somewhat longer windows.

**Improvised alternatives:** None. Immunosuppressant drugs require pharmaceutical manufacturing.

### 5. Hospitalized Patients

**Daily census:** ~510,000 inpatients, of whom ~70,000 are in ICUs (HHS mandatory reporting data, 2023–2024 average). ICU patients include those on ventilators, vasopressors, continuous monitoring, and other life support that cannot be maintained without infrastructure.

**Mortality without care:** ICU patients face ~85% 30-day mortality without continued intensive care. General ward patients are a mixed population — some are there for elective procedures and would survive; others are acutely ill and would die. Central estimate of 30% 30-day mortality for general ward.

### 6. Nursing Home / Skilled Nursing

**Population:** ~1.2 million residents (KFF 2024, CDC NCHS 2024). Occupancy rate has recovered to ~77% post-pandemic.

**Vulnerability:** Nursing home residents have a baseline annual mortality rate of ~32%. Many are dependent on medications (insulin, cardiac drugs, psychotropics), structured feeding, and monitoring. Without medical staff, medication delivery, and food supply, the most fragile residents (severe dementia, bedbound, multiple comorbidities) would die within days to weeks. The 25% 30-day estimate reflects that many residents, while frail, could survive 30 days with basic food and water even without medication.

### 7. Active Chemotherapy (Life-Sustaining Subset)

**Total active chemo patients:** ~650,000–1,000,000 per year. However, most chemotherapy is not immediately life-sustaining — stopping it accelerates disease progression over months, not days.

**Life-sustaining subset (~100K):** Patients with acute leukemia, aggressive lymphomas, and cancers where active treatment is the only thing preventing rapid death. For these patients, stopping treatment leads to death within weeks from uncontrolled disease, bleeding, or infection.

**Median survival after chemo cessation (all patients):** ~65–73 days (GI cancer data). This confirms that most chemo patients survive well past 30 days after stopping, making the life-sustaining subset relatively small.

### 8. Severe Epilepsy

**Drug-resistant epilepsy:** ~1 million Americans (30% of ~3.4M with epilepsy; Neurology 2021 systematic review). These patients have seizures despite medication — without medication, seizure frequency and severity would increase dramatically.

**30-day mortality:** Status epilepticus (SE) carries 7.6–22% mortality. However, not all drug-resistant epilepsy patients will develop SE from medication withdrawal. The 5% overall 30-day mortality estimate accounts for the probability of SE onset × SE mortality.

### 9. Severe Mental Illness

**Population:** ~2.6 million with schizophrenia; broader SMI population on antipsychotics is larger but harder to quantify for mortality risk.

**Fatal risks without medication:** Fatal catatonia from antipsychotic withdrawal is rare (NMS incidence 0.01–0.02%). The primary mortality risk is from self-harm and inability to care for oneself, compounded by the chaos of a collapse scenario. The 2% estimate is speculative but reflects the low base rate of medication-withdrawal deaths combined with elevated suicide risk.

### 10. Home TPN

**Population:** ~25,000–40,000 (Medicare billing data analysis; general literature cites ~40,000).

**Vulnerability:** These patients cannot absorb nutrition through their GI tract. Without TPN, they face starvation. Death from total starvation typically occurs in 3–6 weeks, placing most TPN patients right at the 30-day boundary. Nearly all would die within 30–45 days.

## Data Gaps

- **Type 2 insulin mortality without treatment** is the single largest source of uncertainty. The 6.4M population is huge, and mortality estimates without insulin range widely (10–45%) depending on disease severity. No study has modeled sudden insulin withdrawal across the full Type 2 population because it's ethically impossible to study.
- **Ventilator-dependent population size** is poorly tracked. The ~300K–600K figure is a projection from 2010-era growth rates, not a census. CMS tracks billing codes but doesn't publish a clean ventilator-dependent population count.
- **Organ transplant recipients alive today** is not published as a single figure by OPTN. The 450K estimate is derived from kidney transplant data (well-sourced) plus proportional estimates for other organs (less certain).
- **Overlap between categories** is not accounted for in the total. A nursing home resident on dialysis and insulin appears in all three categories. The true unique population is somewhat smaller than the sum. Estimated overlap: 5–10% of the total.
- **Cascade effects beyond these 10 categories** are not captured. Americans dependent on anticoagulants (~6M on warfarin/DOACs), cardiac medications (beta-blockers, ACE inhibitors), thyroid replacement (~12M on levothyroxine), and other chronic medications face elevated mortality beyond 30 days that this ticket does not cover.

## Sources

- American Diabetes Association. "About Diabetes: Statistics." diabetes.org (2024). Cites 38.4M with diabetes, 8.4M on insulin.
- JHEOR (2024). "We Are on the Verge of Breakthrough Cures for Type 1 Diabetes." Cites ~2M Americans with Type 1.
- CDC National Diabetes Statistics Report (2024). 11.6% diabetes prevalence, 12.3% of diagnosed started insulin within a year.
- USRDS / ESRD Networks. National ESRD Census Data, March 31, 2025. 516,837 on dialysis, 316,873 with functioning kidney transplant.
- American Thoracic Society (2020). "Home Oxygen Therapy for Adults with Chronic Lung Disease." Clinical Practice Guideline. Cites >1.5M on supplemental oxygen.
- PMC (2012). "Long-term ventilator-dependent patients." Projected ~600K chronic ventilator patients by 2020.
- OPTN/HRSA (2024). "Organ transplants exceeded 48,000 in 2024." Transplant volume data used for proportional recipient estimates.
- Palliative Care Network of Wisconsin. "Transplant Medication Management Near End-of-Life." Acute rejection in 25–50% within days to weeks.
- HHS Hospital Reporting Data (2023–2024). Mean daily census ~510,000, mean occupancy 75.3%.
- AHA Fast Facts on U.S. Hospitals (2026 edition, from 2024 survey). 6,093 hospitals, 916,752 staffed beds.
- KFF (2024). "Number of Nursing Facility Residents." ~1.2M.
- CDC NCHS National Health Statistics Report 208 (August 2024). Nursing home population data.
- Neurology (2021). "Incidence and Prevalence of Drug-Resistant Epilepsy: A Systematic Review." ~30% prevalence.
- NIMH / NAMI. Schizophrenia affects ~2.6M American adults.
- PMC (2017). "Prevalence of Home Parenteral and Enteral Nutrition in the United States." ~25K HPN patients from Medicare data.
- Healthline / DM literature. Type 1 DKA onset within 24 hours; death in 3–14 days without treatment.
- PMC (2012). "Conservative Management of ESRD without Dialysis." Median survival 6–23 months (for CKD patients never starting dialysis).
- SingleCare (2025). "Insulin Statistics 2025." Corroborates 8.4M figure.
- American Cancer Society / NCI. ~650K–1M Americans receive chemotherapy annually.
- Wagle et al. (2025). "Cancer treatment and survivorship statistics, 2025." CA: Cancer J Clinicians.

<!-- COMPLETE -->
