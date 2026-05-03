# Result: QALY Methodology Normalization — Cross-Intervention Consistency Check

## Summary

After reviewing all 19 intervention result files (004–022), the QALY estimates are broadly consistent in methodology but have several systematic differences that the graph-building phase should acknowledge. The most important finding is that exercise interventions (walking, strength training, cycling) derive QALYs primarily from mortality reduction in observational cohorts, while pharmaceutical/therapy interventions (SSRIs, CBT, statins) use RCT-based utility measurement — these are different evidence types measuring the same outcome but with different biases. The second major issue is comparator asymmetry: exercise compares against "inactive/sedentary" (no treatment), while SSRIs and CBT compare against "usual care" or "placebo" (which includes some baseline care). This systematically inflates exercise QALYs relative to medical interventions. Finally, conditional vs. universal applicability creates a framing challenge — walking benefits all Bobs, but SSRIs only benefit the ~19% who are depressed, smoking cessation only the ~30% who smoke. The graph should use conditional framing (QALY if applicable) with clear annotations.

## Methodology Comparison Table

| Intervention | QALY Mid | QALY Source Type | Instrument | Comparator | Population | Time Horizon | Consistency Flag |
|---|---|---|---|---|---|---|---|
| Walking | 0.08 | Observational meta-analyses + direct QALY | SF-6D (Dunlop); mortality-based (Kelly, Moore) | Inactive/sedentary | General adults | Lifetime (mortality), 2-year (QoL) | **Summing concern** (see §1) |
| Strength Training | 0.07 | Observational meta-analyses, derived | Mortality-based (scaled from walking benchmark) | No resistance training | General adults | Lifetime (mortality) | **Derived, not measured** (see §2) |
| Yoga | 0.03 | RCTs with embedded CEA | EQ-5D-5L (Aboagye, Skjøth), SF-6D (Groessl) | Usual care / waitlist | Clinical (chronic pain, MSK, older adults) | 6–12 months | **Clinical population only** (see §3) |
| Cycling | 0.07 | Observational meta-analyses, derived | Mortality-based (scaled from walking benchmark) | No cycling | General adults, predominantly European | Lifetime (mortality) | **Derived, not measured; European bias** (see §2) |
| Generic SSRIs | 0.05 | RCTs + CEA models | EQ-5D (Peasgood utility weights) + STAR*D response rates | Placebo / usual care | Primary care adults with depression | 1–5 years | **Conditional on depression** (~19% of Bobs) |
| CBT (Depression) | 0.06 | RCT with direct QALY | EQ-5D (CoBalT) | Usual care (CoBalT); SGAs (Ross) | Treatment-resistant depression (CoBalT) | 12 months–5 years | **Conditional on depression; adjunct design** (see §4) |
| Bariatric Surgery | 0.08 | CEA models + long-term cohorts | EQ-5D (Borisenko, Patel) | Medical management | BMI ≥35–40 adults | 5-year to lifetime | **Conditional on severe obesity** (~35% of Bobs) |
| Statin Therapy | 0.02 | Meta-analyses + microsimulation CEA | Mortality-based + modeled utility weights | Placebo / no statin | Adults 40–75, no prior CVD | Lifetime (modeled) | OK — conservative and well-modeled |
| Diet Overhaul | 0.05 | Observational meta-analyses + microsimulation | Mortality-based + modeled QALYs | Lowest vs. highest diet quality | General adults | 12–30 years | **No direct QALY measurement** (see §2) |
| Sleep Hygiene / CBT-I | 0.03 | RCTs + Markov model | EQ-5D (Leerssen), ISI-to-EQ-5D mapping (Darden) | Usual care / waitlist | General adults with insomnia | 6 months (extrapolated) | **Short trial, extrapolated** (see §5) |
| Smoking Cessation | 0.20 | Cohort studies + CEA models | Mortality-based + EQ-5D utility differences | Continued smoking | Adult smokers | Lifetime | **Conditional on smoking** (~30% of Bobs); **largest QALY by far — methodologically sound** |
| Alcohol Reduction | 0.03 | RCTs + Markov models | Modeled through disease outcomes | No screening/intervention | Primary care hazardous drinkers | Lifetime (modeled) | **Conditional on hazardous drinking; no direct QALY** |
| Meditation / MBSR | 0.02 | RCTs with embedded CEA | EQ-5D (Herman) | Usual care / CBT | Chronic pain (Herman), recurrent depression (Pahlevan) | 12 months | **Clinical population only; weak generalization** |
| Community Groups | 0.03 | Quasi-experimental / pre-post | EQ-5D-5L (Munford, SPRING_NE) | Matched controls | Older UK adults, NHS patients | 18 months | **Tier 3; UK context; selection bias** |

## Identified Inconsistencies

### §1. Walking — Summing Concern (Minor, Acceptable)

Walking's 0.08 QALY is synthesized from two components: ~0.05 from mortality reduction (Kelly, Moore meta-analyses) and ~0.03 from quality-of-life improvement. These come from *different evidence streams* (mortality cohorts vs. the Dunlop SF-6D study), not from summing sub-domains within a single instrument.

**Assessment:** This is methodologically reasonable. The mortality and QoL components are conceptually distinct (living longer vs. living better), and the Dunlop study's direct 0.112 QALY/year measurement (which captures both dimensions simultaneously) actually *exceeds* the summed 0.08, suggesting the synthesis is conservative, not inflated. **No adjustment needed.**

### §2. Derived/Modeled QALYs vs. Direct Measurement

Four interventions lack direct QALY measurement and instead derive estimates from mortality data or modeling:

- **Strength training** (0.07): Mortality reduction (15%) proportionally scaled against walking's benchmark. No independent QALY validation.
- **Cycling** (0.07): Same approach — mortality reduction (10%) scaled from walking, with injury offset.
- **Diet overhaul** (0.05): Microsimulation + mortality meta-analyses. No RCT with QALY endpoints.
- **Alcohol reduction** (0.03): Modeled through disease outcomes (liver disease, CVD, injury), not direct utility measurement.

**Assessment:** These are weaker evidence than interventions with direct EQ-5D or SF-6D measurement (yoga, SSRIs, CBT, bariatric, sleep). The derived estimates could be off by ±30–50% without detection. Their evidence tiers already reflect this (strength training Tier 2, cycling Tier 2, diet Tier 2, alcohol Tier 1 but for different reasons). **Recommendation: No QALY adjustment needed, but the graph-building phase should note that evidence quality (bubble size) already captures this distinction.** Strength training and cycling QALYs are the most uncertain of the included interventions.

### §3. Clinical vs. General Population Studies

Several interventions derive QALY data exclusively from clinical populations:

| Intervention | Clinical Population | Bob Overlap |
|---|---|---|
| Yoga | Chronic LBP, MSK conditions, older adults with LTCs | ~30% of Bobs have chronic pain; ~12–14% depression |
| SSRIs | Clinical depression (PHQ-9 ≥ 10) | ~19% of Bobs |
| CBT | Treatment-resistant depression / clinical depression | ~19% of Bobs |
| Bariatric Surgery | BMI ≥35–40 with comorbidities | ~35% of Bobs |
| Smoking Cessation | Current smokers | ~30% of Bobs |
| Meditation | Chronic LBP, recurrent depression | ~30% pain, ~14% depression |

**Assessment:** The conditional framing (QALY given that the intervention applies to Bob) is the correct approach for the graph, as recommended in tickets 009 and 011. Walking, strength training, cycling, diet, sleep, and community groups are universal interventions — their QALYs apply to all Bobs. SSRIs, CBT, bariatric, smoking, and alcohol interventions have restricted applicability. **Recommendation: Use conditional QALY for the graph (what Bob gets if this intervention is relevant to him). Add a tooltip or annotation noting the applicable population fraction.** This is consistent with how health economics compares interventions — you don't discount a cancer drug's QALY because most people don't have cancer.

### §4. Comparator Asymmetry

This is the most systematic methodological issue:

| Comparator Type | Interventions Using It | Effect on QALY |
|---|---|---|
| No treatment / inactive / sedentary | Walking, strength training, cycling, diet | **Inflates** QALY — measures full gap between doing nothing and doing the intervention |
| Usual care (which includes some treatment) | SSRIs (vs. placebo), CBT (vs. usual care + meds), yoga (vs. usual care) | **Deflates** QALY — measures only the incremental gain above whatever care Bob already gets |
| Active comparator | CBT vs. SGAs (Ross et al.) | **Deflates further** — measures difference between two active treatments |
| Continued harmful behavior | Smoking cessation (vs. continued smoking), alcohol (vs. continued hazardous drinking) | **Inflates** — measures elimination of an active harm, not addition of a benefit |

**Magnitude of bias:**
- Walking's 0.08 QALY is measured against "sedentary." If instead measured against "usual care" (which might include occasional physical activity), the incremental QALY would be ~0.04–0.06.
- SSRIs' 0.05 QALY is measured against "placebo" — but placebo response in depression is 25–40%. If measured against "no treatment at all" (no doctor visit, no pill), the SSRI QALY might be 0.06–0.07.
- The net bias is roughly 0.01–0.03 in favor of exercise over medical interventions.

**Assessment:** This is a real but modest asymmetry. It doesn't change the rank order of interventions (walking would still outperform statins even after adjustment). It does mean the gap between walking and SSRIs/CBT is slightly exaggerated. **Recommendation: Do not adjust the QALY numbers — the bias is within the stated ranges and the evidence quality tiers already flag this. Note the comparator asymmetry as a caveat in the graph's methodology tooltip or footnote.**

### §5. Time Horizon Differences

| Time Horizon | Interventions | Issue |
|---|---|---|
| 6-month trial, extrapolated to annual | Sleep hygiene / CBT-I | Benefits may not persist beyond trial; annualization doubles the measured 6-month QALY |
| 12-month trial | Yoga (some studies), CBT (CoBalT year 1) | Reasonable for annual estimates |
| 1–5 year models | SSRIs (1-year), CBT (1–5 year), bariatric (5-year) | SSRIs lose benefit on discontinuation; CBT gains persist; bariatric front-loaded |
| Lifetime / mortality-based | Walking, strength training, cycling, statins, smoking, alcohol, diet | Annualized from lifetime gains; benefits assumed to persist with continued behavior |

**Assessment:** The critical issue is that **CBT and sleep hygiene are time-limited interventions** whose benefits are annualized differently. CBT's 0.06 QALY/year is the year-of-treatment estimate; the annualized value over a 3-year benefit horizon is ~0.043. This was discussed in ticket 011, which chose the year-of-benefit framing (0.06) as more appropriate for cross-intervention comparison. This is defensible — the graph shows "what you get per year of doing this," not "what you get per year of life." **Recommendation: Use the year-of-active-benefit estimate for time-limited interventions (CBT, sleep), consistent with tickets 011 and 017. Note that CBT's benefits persist after the course ends, making its true cost-effectiveness better than the annual snapshot suggests.**

### §6. QALY Instrument Sensitivity

Different utility instruments produce systematically different QALY estimates:

- **EQ-5D** (used for: yoga, SSRIs, CBT, bariatric, community groups): The standard for CEA in the UK and US. Five dimensions (mobility, self-care, usual activities, pain/discomfort, anxiety/depression). **Lacks sleep and sexual function domains** — relevant for sleep hygiene (underestimates benefit) and SSRIs (underestimates side-effect disutility).
- **SF-6D** (used for: walking [Dunlop], yoga [Groessl]): Six dimensions. Generally produces smaller utility differences than EQ-5D (ceiling effect is less pronounced, but discrimination at higher health states is better).
- **Mortality-based** (used for: strength training, cycling, diet, statins, smoking): Converts life-years gained to QALYs using assumed utility weights. Ignores morbidity improvements entirely unless explicitly added.

**Assessment:** The EQ-5D's missing domains are a known limitation but don't create a large enough bias to require adjustment. The SF-6D vs. EQ-5D difference is well-documented (SF-6D produces ~0.03–0.05 lower utility values than EQ-5D at comparable health states) — this means walking's Dunlop-derived QoL component (~0.03) might be ~0.04–0.05 if measured by EQ-5D, which would push walking's total slightly higher. **Recommendation: No adjustment. The ranges already capture instrument-related uncertainty.**

### §7. Double-Counting Check

**Walking:** The 0.08 estimate combines mortality (~0.05) and QoL (~0.03) from separate evidence streams. The Dunlop study's 0.112 all-in measurement exceeds this sum, confirming no double-counting. The depression-specific benefit (25% risk reduction) was explicitly noted as "partially captured in the all-cause QALY estimate" and NOT added. **No double-counting detected.**

**Strength training:** Mortality component (0.05) and QoL component (0.02, primarily from depression benefit) are from separate evidence streams. Depression benefit (SMD 0.66) is distinct from mortality data (which doesn't capture depression-specific QoL). Slight risk of overlap if mortality studies' healthy-user bias captures some of the "people who lift also feel better" effect. **Risk is minimal and within stated ranges.**

**Smoking cessation:** The 0.20 QALY is overwhelmingly mortality-based (~0.19) with a small QoL adjustment (+0.01–0.03). No sub-domain summing. **No double-counting.**

**All other interventions:** Use single-source QALY estimates (either a CEA model or a single RCT's utility measurement). **No double-counting risk.**

## Specific Adjustment Recommendations

### Adjustments to Make

None. After review, all QALY estimates fall within defensible ranges and are appropriately caveated by their evidence tiers. The inconsistencies identified above are real but do not warrant numerical adjustments — they are better handled through:

1. **Evidence tier (bubble size)** — already differentiates between strong and weak evidence
2. **Tooltips/annotations** — for comparator asymmetry, conditional applicability, and instrument limitations
3. **Ranges** — already wide enough to capture methodological uncertainty

### Recommendations for Graph-Building Phase

1. **Use conditional QALY framing.** Show the QALY each intervention delivers to the Bob it applies to, not population-weighted. Walking benefits all Bobs; SSRIs benefit depressed Bobs. The graph tells Bob "if you need this, here's what you get."

2. **Note comparator asymmetry in methodology section.** Exercise is measured against "doing nothing"; SSRIs/CBT against "usual care." The practical effect is ~0.01–0.03 QALY bias favoring exercise, which is within stated ranges.

3. **Time commitment for CBT: use active-treatment hours (1.5 hr/wk).** CBT is a 16-week course, not an ongoing commitment. The graph should show what it takes during treatment, with a note that benefits persist afterward.

4. **Walking cost: use $0 midpoint from ticket 004.** Ticket 005 provided a higher range ($0–$235) for all-in costs, but the $0 midpoint is the defensible graph value since walking shoes substitute for shoes Bob would buy anyway.

5. **Resolve the SSRI graph data discrepancy.** Ticket 009 uses `id: generic-ssri` with qalyMid 0.05, adherence 0.45. Ticket 010 uses `id: generic-ssris` with qalyMid 0.05, adherence 0.28, and adds cost data. The graph phase should merge these: use ticket 010's cost data and adherence rate (0.28, from real-world claims data) with ticket 009's QALY evidence. The correct `id` should be `generic-ssris` (matching the cost ticket which has the complete data row).

6. **Resolve the bariatric surgery cost discrepancy.** Ticket 013 used placeholder costs ($1,500/$4,500/$12,000); ticket 014 provided researched figures ($900/$8,700/$10,500). Use ticket 014's values.

## Interventions Ranked by Methodological Confidence

From highest to lowest confidence in QALY estimate accuracy:

1. **Smoking cessation** (0.20) — Massive cohort data (217,000+), simple biological mechanism, consistent across studies. The QALY is large enough that even substantial methodological error wouldn't change its position.
2. **Statins** (0.02) — Mature CEA literature, 175,000+ participant meta-analyses, well-validated microsimulation models. Conservative estimate.
3. **SSRIs** (0.05) — Deep CEA literature, STAR*D + PANDA RCTs, validated EQ-5D utility weights. Side-effect disutility is the main uncertainty.
4. **CBT** (0.06) — CoBalT trial provides direct QALY measurement. Ross et al. model corroborates. Long-term benefit trajectory adds some uncertainty.
5. **Walking** (0.08) — Enormous observational base (280,000–661,000 participants). The main uncertainty is residual confounding (healthy-user bias), not methodology.
6. **Bariatric surgery** (0.08) — Strong CEA literature, SOS study 20+ year follow-up. Front-loading of benefits and mental health risks add uncertainty to annualization.
7. **Alcohol reduction** (0.03) — Strong RCT base (69 trials, 33,642 participants) for the intervention, but QALY is modeled through disease pathways rather than directly measured.
8. **Sleep hygiene / CBT-I** (0.03) — Direct QALY data exists but from short trials (6 months). Extrapolation to annual benefit adds moderate uncertainty.
9. **Diet overhaul** (0.05) — Strong mortality data but no direct QALY measurement. Microsimulation is credible but involves many modeling assumptions. "Diet overhaul" is poorly standardized.
10. **Yoga** (0.03) — Direct QALY data from RCTs, but all from clinical populations (LBP, MSK). Generalization to Bob involves population mismatch.
11. **Meditation** (0.02) — QALY data exists from CEAs but from clinical populations (chronic pain, depression). Self-guided practice (Bob's path) differs from studied structured programs.
12. **Strength training** (0.07) — Derived from mortality proportional scaling against walking benchmark. No independent QALY validation. The 15% mortality reduction is well-evidenced, but the QALY conversion involves methodological leaps.
13. **Cycling** (0.07) — Same derivation approach as strength training, plus European population bias.
14. **Community groups** (0.03) — Weakest evidence. Quasi-experimental designs, UK social prescribing context doesn't transfer to Bob, selection bias unresolved.

## Population Applicability Summary

| Intervention | Applies to All Bobs? | If Conditional, % of Bobs |
|---|---|---|
| Walking | Yes | 100% |
| Strength Training | Yes | 100% |
| Cycling | Yes | 100% |
| Yoga | Yes | 100% |
| Diet Overhaul | Yes | 100% (degree of benefit varies by baseline diet) |
| Sleep Hygiene / CBT-I | Mostly | ~30–40% have clinically poor sleep |
| Statins | Mostly | ~50–60% meet ASCVD risk threshold (40–75 age bracket) |
| Meditation | Yes | 100% (degree of benefit varies) |
| Community Groups | Yes | 100% (benefit strongest for socially isolated) |
| Generic SSRIs | **No** — depression only | ~19% |
| CBT (Depression) | **No** — depression only | ~19% |
| Bariatric Surgery | **No** — severe obesity only | ~35% (BMI ≥35) |
| Smoking Cessation | **No** — smokers only | ~30% |
| Alcohol Reduction | **No** — hazardous drinkers only | ~15–20% |

## Final Notes

The QALY landscape across these 14 interventions is remarkably coherent given the diversity of evidence types. The main takeaway for the graph is that walking's position (high QALY, zero cost) survives methodological scrutiny — even if its QALY were discounted by 30% for healthy-user bias and comparator inflation, it would still sit in the top-left corner with the best cost-effectiveness ratio of any universal intervention. Smoking cessation dominates on raw QALY magnitude (0.20 vs. walking's 0.08) but applies to only 30% of Bobs. The graph's visual punchline — walking is the best bang-for-buck — is robust to methodological variation.

<!-- COMPLETE -->