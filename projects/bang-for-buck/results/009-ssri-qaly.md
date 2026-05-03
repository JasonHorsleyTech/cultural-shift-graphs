# Result: Generic SSRIs — QALY Evidence for Depression

## Summary

Generic SSRIs (sertraline, fluoxetine, citalopram) have the richest cost-effectiveness literature of any depression treatment. For clinically depressed patients, the expected net QALY gain is approximately 0.05 per year of treatment, derived from EQ-5D utility weights across depression severity states combined with real-world remission rates from the STAR*D trial (~30%). The PANDA RCT confirmed sertraline is cost-effective in primary care with >95% probability at standard willingness-to-pay thresholds, though the absolute QALY increment over placebo was modest — consistent with high placebo response rates in depression trials. Side effects (sexual dysfunction in 30-50%, weight gain, emotional blunting) reduce the gross QALY gain by an estimated 0.01-0.02. Adherence is a major limitation: ~50% of primary care patients discontinue within 6 months, with low income being a significant predictor of nonadherence.

## QALY Evidence

- **Net QALY gain per year (best estimate):** 0.05
- **Range:** 0.03 – 0.08 (low – high)
- **Primary source:** Synthesis of utility-weight data (Peasgood et al. 2014), STAR*D remission rates (Rush et al. 2006), and CEA literature (Katon et al. 2005; Simon et al. 2001; Ross et al. 2019)
- **Study type:** Meta-analyses, RCTs, and decision-analytic cost-effectiveness models
- **Population studied:** Primary care adults with moderate-to-severe depression (STAR*D), primary care adults with depressive symptoms (PANDA), general depressed populations in CEA models
- **Population match to Bob:** Fair — most CEA studies use general depressed populations, not specifically low-income. STAR*D found lower remission rates among lower-income, less-educated, and minority patients, suggesting Bob's actual QALY gain may be slightly below the midpoint estimate.
- **Key caveats:**
  - SSRIs are only indicated for clinical depression — benefit is zero for non-depressed individuals
  - Bob has ~19% probability of current depression (PHQ-9 ≥10, per ticket 002), so population-weighted QALY for a random Bob is ~0.01
  - The 0.05 estimate assumes continuous adherent treatment; real-world adherence (~43-50% at 6 months) substantially reduces effective gains
  - Placebo response in depression trials is 25-40%, meaning some of the "SSRI benefit" would occur without medication

### Evidence Stream 1: Utility-Weight-Based Calculation

**Peasgood et al. (2014)** — Individual participant data analysis of EQ-5D utility scores across 10 RCTs for depression treatment.

| Depression State | EQ-5D Utility | 95% CI |
|---|---|---|
| Remission | 0.70 | 0.67–0.73 |
| Minor depression | 0.62 | 0.58–0.65 |
| Mild depression | 0.57 | 0.54–0.61 |
| Moderate depression | 0.52 | 0.49–0.56 |
| Severe depression | 0.39 | 0.35–0.43 |

The largest mean utility difference was between remission and severe depression: 0.34 (95% CI: 0.30–0.37). Moving from moderate depression to remission yields a utility gain of 0.18 per year in remission.

**STAR*D Trial (Rush et al. 2006)** — Real-world SSRI effectiveness in primary care.

- Level 1 (citalopram, up to 14 weeks): **28-33% remission rate** (depending on scale), **47% response rate**
- Reanalysis (Pigott et al. 2023): Adjusted cumulative remission may be lower (~18% with sustained remission)
- Lower remission rates associated with: lower income, less education, longer episode duration, comorbid anxiety or substance use — all of which describe Bob

**Calculated expected QALY gain for moderate depression on SSRIs:**

| Outcome | Probability | Utility | Weighted |
|---|---|---|---|
| Remission | 0.30 | 0.70 | 0.210 |
| Response (not remission) | 0.17 | 0.62 | 0.105 |
| Non-response | 0.53 | 0.52 | 0.276 |
| **Expected utility on treatment** | | | **0.591** |
| **Baseline (moderate depression)** | | | **0.52** |
| **Gross QALY gain** | | | **0.071** |
| **Side effect disutility** | | | **−0.015** |
| **Net QALY gain** | | | **~0.056** |

This calculation uses STAR*D's general-population remission/response rates. For Bob specifically (lower income, likely comorbidities), remission rates may be 20-25% rather than 30%, which would reduce the expected net QALY to ~0.04.

### Evidence Stream 2: PANDA RCT (Hollingworth et al. 2020)

Pragmatic double-blind RCT of sertraline vs. placebo in UK primary care (n=655), 12-week follow-up.

- EQ-5D-5L utility scores were marginally higher in the sertraline group at 6 and 12 weeks
- Sertraline had >95% probability of being cost-effective at a £20,000/QALY willingness-to-pay threshold
- The incremental QALY gain over 12 weeks was small — annualized to approximately 0.01-0.02 QALYs
- Key context: PANDA included patients with mild-to-moderate symptoms (PHQ-9 ≥ 10), where SSRI benefit is smaller; also, 12 weeks may not capture full treatment effect (SSRIs typically need 6-8 weeks to reach full efficacy)

The PANDA result is consistent with the lower bound of our estimate. The small QALY increment reflects the pragmatic design (many mild cases, high placebo response, short follow-up).

### Evidence Stream 3: CEA Literature

**Katon et al. (2005)** — Primary care depression intervention (collaborative care model including SSRIs).
- Mean incremental QALY effect: **0.041** (β = 0.04, p < 0.05)
- Cost per QALY: $9,592–$14,306
- Note: This is the full collaborative care model, not SSRIs alone — includes care management, which adds some QALY benefit beyond medication

**Simon et al. (2001)** — Stepped collaborative care for depression in primary care.
- Incremental cost-effectiveness: $21.44 per depression-free day
- Substantial treatment effectiveness increases with moderate cost increases

**Ross et al. (2019)** — Decision analytic model, CBT vs. second-generation antidepressants (SGAs), US setting, 5-year horizon.
- SGAs produced similar total QALYs to CBT (difference: 0.055 QALYs favoring CBT over 5 years, or ~0.011/year)
- At 1 year, SGAs had 64-77% probability of being cost-effective at $100,000/QALY
- Implied QALY for SGA-treated depression: approximately 0.73-0.74 per year (vs ~0.52 untreated baseline), suggesting ~0.04-0.05 net QALY gain per treatment year after adjusting for side effects and treatment cycling

**Woods (2003) ACNP Review** — Synthesis of SSRI cost-effectiveness studies.
- Nefazodone vs. imipramine: $4,065/QALY
- Fluoxetine vs. imipramine: $10,976/QALY
- Generic SSRIs broadly fall in the $2,000–$15,000/QALY range, well below standard cost-effectiveness thresholds

### Synthesis and Best Estimate Rationale

The best estimate of **0.05 QALY/year** reflects:

1. **Utility-weight calculation:** Gross QALY gain of ~0.07 for moderate depression, reduced to ~0.055 after side effect disutility — this is the strongest analytical approach since it uses direct utility measurement and real-world remission rates
2. **CEA literature corroboration:** Studies consistently find incremental QALY gains in the 0.03-0.06 range for depression treatment programs that include SSRIs
3. **PANDA RCT as lower bound:** The 0.01-0.02 annualized QALY from PANDA anchors the pessimistic end, reflecting pragmatic conditions with mild cases
4. **Adjustment for Bob:** Bob's lower-income profile predicts worse adherence and lower remission rates, pulling the estimate toward the lower end of the range. The midpoint of 0.05 already incorporates this conservatism (vs. the raw calculation of 0.056).

### Depression Severity Stratification

The QALY gain is not uniform across depression severity:

| Severity | Utility Gain if Remission | Remission Rate | Expected Net QALY/year |
|---|---|---|---|
| Mild (PHQ-9 10-14) | 0.13 | ~35% | 0.03-0.04 |
| Moderate (PHQ-9 15-19) | 0.18 | ~30% | 0.04-0.06 |
| Severe (PHQ-9 ≥20) | 0.31 | ~20-25% | 0.05-0.08 |

Paradoxically, severe depression has the highest potential QALY gain per remission but lower remission rates, resulting in a wide range. Mild depression has high remission rates but smaller utility gains per person — and higher placebo response rates, meaning the SSRI-attributable gain is smallest.

## Side Effects and Risks

### Sexual Dysfunction
- **Prevalence:** 30-50% of SSRI users (realistic estimate; some studies report up to 73%)
- **Manifestations:** Decreased libido, arousal difficulties, delayed/absent orgasm
- **QALY impact:** No formal disutility weight exists in the literature. Estimated at 0.01-0.03 based on general sexual dysfunction utility decrements. Applied as ~0.015 average across all SSRI users (accounting for prevalence and severity distribution)
- **Key concern for Bob:** Sexual dysfunction is a major driver of discontinuation, and the disutility is rarely captured in depression-focused EQ-5D instruments (which lack a sexual function domain)

### Weight Gain
- **Prevalence and magnitude:**
  - Sertraline: +0.25 lb at 6 months; 6.9% experience ≥7% weight gain
  - Citalopram: +0.75 lb at 6 months; 31.6% experience ≥7% weight gain
  - Fluoxetine: −0.5 lb at 6 months (weight-neutral to slightly negative short-term)
  - Long-term (>12 months): weight gain increases, affecting up to 55-65% of patients
- **QALY impact:** For Bob (already elevated BMI), additional weight gain compounds cardiovascular and metabolic risk. Estimated 0.002-0.005 QALY disutility

### Emotional Blunting
- **Prevalence:** Commonly reported (~40-60% in patient surveys) but inconsistently measured in trials
- **Manifestations:** Reduced emotional range, indifference, motivational reduction
- **QALY impact:** Difficult to quantify; partially captured in "response without remission" utility category
- **Note:** Some patients describe this as feeling "flat" rather than "better" — a meaningful quality-of-life concern not well-captured by standard depression instruments

### Withdrawal/Discontinuation Syndrome
- **Prevalence:** 56% experience symptoms on discontinuation (ANTLER trial)
- **Duration:** Typically 1-4 weeks; can persist longer in some cases
- **QALY impact:** Brief but significant disutility during discontinuation; partially mitigated by gradual tapering
- **Relevance for Bob:** If Bob starts and stops SSRIs repeatedly (common with adherence issues), discontinuation syndrome adds cumulative disutility

### GI Effects, Insomnia, Other
- Nausea, diarrhea: 15-25%, usually transient (first 2-4 weeks)
- Insomnia or drowsiness: 10-20%, varies by specific SSRI
- Headache: 10-15%, usually transient
- These early side effects are a major driver of the 28% who discontinue within the first month

## Adherence

- **Real-world adherence rate (6 months):** 43-50%
- **Real-world adherence rate (12 months):** ~30-35% (estimated from discontinuation trajectories)
- **Source:** Olfson et al. (2006), n=22,947 SSRI initiators; Sansone & Sansone (2012) review
- **Discontinuation timeline:**
  - Within 1 month: 28%
  - Within 3 months: 44%
  - Within 6 months: 50-57%
- **Income-specific factors:** Low income level combined with insurance status predicts nonadherence. Just-above-poverty family income and no health insurance increased risk of nonpersistence (Olfson et al. 2006; Rivero-Santana et al. 2020). Bob's profile places him at higher-than-average discontinuation risk.
- **Reasons for discontinuation:**
  - Side effects (especially sexual dysfunction): ~30% of discontinuers
  - Feeling better (premature stop): ~25%
  - Cost/access barriers: ~15-20%
  - Perceived ineffectiveness: ~15%
  - Forgot/logistical: ~10%
- **Notes:** The 0.05 QALY estimate assumes adherent treatment. Adjusting for real-world adherence (~45% at 6 months) reduces the effective population QALY gain to approximately 0.025-0.03 for the average SSRI initiator. This adherence adjustment is critical for the graph — it means the actual QALY delivered is roughly half the efficacy-based estimate.

## Evidence Quality

- **Tier:** 1
- **Tier 1** = Multiple RCTs or high-quality meta-analyses, Bob-adjacent populations
- **Rationale:** Pharmaceutical cost-effectiveness is the most mature area of health economics. SSRIs specifically have dozens of RCTs, multiple Cochrane reviews, and extensive CEA analyses. The STAR*D trial (n=4,041) is the largest real-world effectiveness study of antidepressants ever conducted. The PANDA RCT provides placebo-controlled QALY data in primary care.
- **Key studies:**
  - Rush et al. (2006) — STAR*D trial, SSRI real-world effectiveness (n=4,041)
  - Lewis et al. (2019) / Hollingworth et al. (2020) — PANDA RCT, sertraline cost-effectiveness in primary care (n=655)
  - Ross et al. (2019) — CBT vs. SGA decision analytic model, Annals of Internal Medicine
  - Peasgood et al. (2014) — EQ-5D utility weights by depression severity (10 pooled RCTs)
  - Katon et al. (2005) — Primary care depression intervention CEA
  - Cipriani et al. (2018) — Network meta-analysis of 21 antidepressants (n=116,477)
- **Limitations:**
  - QALY instruments (EQ-5D) don't capture sexual dysfunction or emotional blunting well — net QALY may be overestimated
  - Most CEA studies use general populations, not low-income specifically
  - STAR*D reanalysis (Pigott et al. 2023) suggests remission rates may be lower than originally reported
  - 12-week trials may not capture long-term QALY trajectory (benefits plateau, side effects accumulate)
  - High placebo response rates (25-40%) in depression trials mean the SSRI-attributable QALY gain is smaller than total improvement observed

## Population Weighting Note

SSRIs are only indicated for clinical depression. Bob has a ~19% probability of current depression (PHQ-9 ≥ 10) per ticket 002. The 0.05 QALY estimate is for a depressed Bob who takes SSRIs. For the graph, which shows interventions available to "Bob" generally, there are two valid framings:

1. **Conditional framing:** "If Bob has depression and takes SSRIs" → 0.05 QALY/year
2. **Population-weighted framing:** "Expected QALY for a random Bob prescribed SSRIs" → 0.05 × 0.19 ≈ 0.01 QALY/year (since a non-depressed Bob wouldn't be prescribed SSRIs and would gain nothing)

The synthesis tickets (023-025) should determine which framing to use for cross-intervention comparability. Walking and exercise benefit all Bobs; SSRIs benefit only depressed Bobs. The conditional framing (0.05) is recommended for the graph, with a clear annotation that this applies to the ~19% of Bobs who have depression.

## Data for Graph

Note: Cost fields will be completed by ticket 010. QALY values below use the conditional framing (depressed population).

| Field | Value |
|---|---|
| id | generic-ssri |
| name | Generic SSRIs (Depression) |
| category | mental-health |
| annualCostLow | |
| annualCostMid | |
| annualCostHigh | |
| qalyLow | 0.03 |
| qalyMid | 0.05 |
| qalyHigh | 0.08 |
| evidenceTier | 1 |
| weeklyHours | 0.1 |
| timeCategory | low |
| activationEnergy | medium |
| adherenceRate | 0.45 |

<!-- COMPLETE -->
