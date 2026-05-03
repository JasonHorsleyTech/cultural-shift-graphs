# Result: Final Data Compilation and Consistency Check

## Summary

All 24 prior tickets are complete. After compiling data from intervention tickets 004–022 and applying normalization guidance from tickets 023 (QALY methodology) and 024 (cost normalization), the final dataset contains **14 interventions** ready for the graph phase. One borderline intervention was excluded (social media/screen time reduction — no QALY data exists), two were included (meditation as Tier 2, community groups as Tier 3). No numerical adjustments to QALY or cost figures were required — the normalization tickets confirmed internal consistency. Several data reconciliation decisions were made where two tickets covered the same intervention (walking 004/005, SSRIs 009/010, CBT 011/012, bariatric 013/014).

## Master Data Table

| id | name | category | annualCostLow | annualCostMid | annualCostHigh | qalyLow | qalyMid | qalyHigh | evidenceTier | weeklyHours | timeCategory | activationEnergy | adherenceRate |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| walking | Walking (30 min/day) | physical-activity | 0 | 0 | 235 | 0.04 | 0.08 | 0.15 | 1 | 3.5 | high | low | 0.50 |
| strength-training | Strength Training | physical-activity | 0 | 250 | 400 | 0.03 | 0.07 | 0.11 | 2 | 2.5 | medium | medium | 0.35 |
| yoga | Yoga | physical-activity | 5 | 60 | 300 | 0.01 | 0.03 | 0.05 | 2 | 2.0 | medium | low | 0.25 |
| cycling | Cycling (recreational) | physical-activity | 75 | 120 | 250 | 0.03 | 0.07 | 0.13 | 2 | 2.5 | medium | medium | 0.40 |
| generic-ssris | Generic SSRIs | mental-health | 150 | 455 | 1200 | 0.03 | 0.05 | 0.08 | 1 | 0.3 | low | medium | 0.28 |
| cbt-depression | CBT (Depression) | mental-health | 60 | 330 | 1333 | 0.03 | 0.06 | 0.10 | 1 | 1.5 | medium | high | 0.65 |
| bariatric-surgery | Bariatric Surgery | surgical | 900 | 8700 | 10500 | 0.05 | 0.08 | 0.12 | 1 | 2.0 | medium | high | 0.62 |
| statin-therapy | Statin Therapy | medical | 100 | 150 | 250 | 0.01 | 0.02 | 0.04 | 1 | 0.1 | low | medium | 0.48 |
| diet-overhaul | Diet Overhaul (Home Cooking) | lifestyle | 0 | 250 | 700 | 0.03 | 0.05 | 0.08 | 2 | 5.0 | high | high | 0.30 |
| sleep-hygiene | Sleep Hygiene / CBT-I | lifestyle | 15 | 50 | 200 | 0.02 | 0.03 | 0.05 | 2 | 0.8 | low | medium | 0.47 |
| smoking-cessation | Smoking Cessation | lifestyle | 0 | 150 | 500 | 0.10 | 0.20 | 0.30 | 1 | 0.3 | low | high | 0.20 |
| alcohol-reduction | Alcohol Reduction (Brief Intervention) | lifestyle | 0 | 30 | 150 | 0.01 | 0.03 | 0.07 | 1 | 0.1 | low | medium | 0.35 |
| meditation | Meditation / Mindfulness | mental-health | 0 | 50 | 200 | 0.01 | 0.02 | 0.04 | 2 | 2.0 | medium | medium | 0.30 |
| community-groups | Community Group Participation | lifestyle | 100 | 350 | 800 | 0.01 | 0.03 | 0.06 | 3 | 2.5 | medium | high | 0.50 |

## Data Reconciliation Decisions

Where two tickets covered the same intervention, the following merge rules were applied per ticket 023 (QALY normalization) recommendations:

### Walking (tickets 004 + 005)
- **Cost:** Ticket 005 (dedicated cost ticket) provides $0/$0/$235. The $0 midpoint is retained because walking shoes substitute for shoes Bob would buy anyway. The $235 high reflects full all-in incremental spending (dedicated shoes, weather gear, sunscreen). Ticket 004's narrower $0/$0/$20 was superseded.
- **QALY:** Ticket 004 (dedicated QALY ticket): 0.04/0.08/0.15. Unchanged.
- **Other fields:** Ticket 004 values used for all non-cost fields.

### Generic SSRIs (tickets 009 + 010)
- **Cost:** Ticket 010 (dedicated cost ticket): $150/$455/$1,200. Used as-is.
- **QALY:** Ticket 009 (dedicated QALY ticket): 0.03/0.05/0.08. Ticket 010 independently estimated 0.02/0.05/0.10 — a wider but consistent range. The QALY-dedicated ticket's tighter range is preferred.
- **Adherence:** Ticket 010's 0.28 (from real-world claims data, >520,000 patients) overrides ticket 009's 0.45 (from in-trial data). Real-world adherence for this income bracket is lower than trial adherence.
- **Weekly hours:** Ticket 010's 0.3 hrs/wk (includes pharmacy trips and doctor visits) preferred over ticket 009's 0.1 (pill-taking only).
- **ID:** `generic-ssris` (ticket 010's slug, which has the complete data row).

### CBT (tickets 011 + 012)
- Both tickets produce identical QALY, evidence tier, time, activation energy, and adherence values. Ticket 012 fills in cost fields. No conflicts — merged directly.

### Bariatric Surgery (tickets 013 + 014)
- **Cost:** Ticket 014 (dedicated cost ticket): $900/$8,700/$10,500. Replaces ticket 013's placeholder estimates ($1,500/$4,500/$12,000). Low = Medicaid scenario, Mid = uninsured amortized, High = uninsured higher-end.
- **QALY and other fields:** Ticket 013 values used. No conflicts.

## Normalization Applied

### QALY Normalization (ticket 023)
- **No numerical adjustments required.** All QALY estimates are internally consistent and appropriately caveated by evidence tiers.
- **Comparator asymmetry noted:** Exercise interventions are measured against "inactive/sedentary" while medical interventions against "usual care/placebo." This inflates exercise QALYs by ~0.01–0.03 relative to medical interventions. The bias is within stated ranges and does not change rank order.
- **Conditional framing adopted:** The graph shows QALY per year *if the intervention applies to Bob*, not population-weighted. Walking benefits all Bobs; SSRIs benefit the ~19% who are depressed; smoking cessation benefits the ~30% who smoke.
- **Time commitment for CBT:** Uses active-treatment hours (1.5 hr/wk during the 16-week course), not annualized (~0.46 hr/wk). Consistent with showing "what it takes while you're doing it."

### Cost Normalization (ticket 024)
- **No numerical adjustments required.** All cost figures are already in 2024 US dollars. Research agents priced Bob's costs using current market rates (GoodRx, Walmart $4 lists, FQHC sliding scales, current retail), not inflated historical study costs.
- **Diet overhaul** uses a 2013 food-cost premium (Rao et al.) as one input, but the CPI-adjusted impact (~$50–100 increase) is within the stated $0–$700 range.
- **Regional variation** is captured by the low/high ranges. Mid-estimates use nationally available pricing (Walmart, GoodRx, FQHCs, free apps).

## Consistency Checks

### Range validity (low ≤ mid ≤ high)
All 14 interventions pass. No inversions detected in cost or QALY ranges. ✓

### Cost sanity checks
- Walking at $0 mid: correct — incremental cost above existing footwear is negligible. ✓
- Bariatric surgery at $8,700 mid: highest by far, reflecting $20,000+ surgical cost amortized over 3 years plus $1,300/year ongoing. Next highest is SSRIs at $455. The gap is real. ✓
- Alcohol reduction at $30 mid: cheapest non-zero intervention. Reflects adding screening to an existing visit. ✓
- Smoking cessation at $150 mid: reflects blended free (quitline) and paid (OTC NRT) quit attempts. Below SSRIs despite being the highest-QALY intervention. ✓

### QALY sanity checks
- Smoking cessation at 0.20 mid: 2.5× the next highest (walking/bariatric at 0.08). This is methodologically sound — quitting at age 35–44 gains ~9 life-years. The magnitude is earned. ✓
- Walking at 0.08 mid: higher than strength training (0.07), cycling (0.07), and SSRIs (0.05). Consistent with 11% mortality reduction from 280,000-participant meta-analysis. ✓
- Statin therapy at 0.02 mid: lowest of any included intervention. Reflects that primary prevention benefits are spread across a low per-person probability of cardiovascular events. Consistent with published CEA models. ✓
- Yoga at 0.03 mid: lower than other exercise forms. Correct — yoga has no mortality evidence after adjustment (Jeter et al. 2015); its QALY is quality-of-life only. ✓

### Visual story check (does the scatter plot tell a coherent story?)
- **Top-left (high QALY, low cost):** Walking ($0, 0.08), Smoking cessation ($150, 0.20). These are the clear winners — free or cheap with large health gains. Walking is the universal winner; smoking cessation is the conditional winner.
- **Middle cluster:** Strength training ($250, 0.07), Cycling ($120, 0.07), Diet overhaul ($250, 0.05), SSRIs ($455, 0.05), CBT ($330, 0.06). Moderate cost, moderate benefit.
- **Bottom-left (cheap but modest):** Sleep hygiene ($50, 0.03), Alcohol reduction ($30, 0.03), Meditation ($50, 0.02), Yoga ($60, 0.03), Statin therapy ($150, 0.02). Low cost, lower QALY — still good value.
- **Far right (expensive):** Bariatric surgery ($8,700, 0.08). High QALY but dramatic cost barrier.
- **Bottom-right (expensive, modest benefit for the dollar):** Community groups ($350, 0.03). Weak evidence, moderate cost from transportation.
- The hypothesis survives: Walking is the best bang-for-buck universal intervention. ✓

### Outliers flagged
1. **Smoking cessation QALY (0.20)** — Not an error. Well-evidenced, but the graph should visually note that this applies to smokers only (~30% of Bobs). Without annotation, it could imply everyone should prioritize quitting something they don't do.
2. **Bariatric surgery cost ($8,700)** — Not an error. The dramatic cost gap between this and all other interventions will dominate the X-axis scale. The graph builder may want to use a log scale for cost or handle this point specially (e.g., annotation with an arrow off-chart).
3. **Community groups evidence tier (3)** — The weakest evidence on the chart. The bubble should be visually smallest to convey uncertainty.

## Excluded Interventions

| Intervention | Ticket | Verdict | Reason |
|---|---|---|---|
| Social media / screen time reduction | 021 | Exclude | No QALY or cost-effectiveness data exists. RCT mental health effects are small and contested (meta-analyses range from null to g=0.17). Converting to QALYs would require three layers of speculative mapping. |
| Swimming | 008 | Exclude | Insufficient QALY evidence and extreme population mismatch. Chase et al. (2008) is the only major cohort (all white, well-educated men). No swimming-specific QALY or CEA analyses found. |
| Dog ownership | plan.md | Dropped at planning | No QALY data; high annual cost ($1,500–3,000). |
| Volunteering | plan.md | Dropped at planning | Confounding too severe (healthy-user selection). |
| Religious community | plan.md | Dropped at planning | Same confounding problem plus cultural sensitivity. |
| Reading regularly | plan.md | Dropped at planning | No QALY data exists. |
| Learning a new skill | plan.md | Dropped at planning | No QALY data exists. |

## Final Intervention Count

**14 data points** will appear on the graph:
- 4 physical activity (walking, strength training, yoga, cycling)
- 3 mental health (generic SSRIs, CBT for depression, meditation/mindfulness)
- 1 medical (statin therapy)
- 1 surgical (bariatric surgery)
- 5 lifestyle (diet overhaul, sleep hygiene, smoking cessation, alcohol reduction, community groups)

## Population Applicability Notes (for graph annotations)

| Intervention | Applies to | % of Bobs |
|---|---|---|
| Walking | All Bobs | 100% |
| Strength Training | All Bobs | 100% |
| Yoga | All Bobs | 100% |
| Cycling | All Bobs | 100% |
| Diet Overhaul | All Bobs (degree varies by baseline diet) | 100% |
| Sleep Hygiene / CBT-I | Mostly (clinically poor sleep) | ~30–40% |
| Statin Therapy | Moderate-to-high ASCVD risk (age 40–75) | ~50–60% |
| Meditation | All Bobs (degree varies) | 100% |
| Community Groups | All Bobs (strongest for socially isolated) | 100% |
| Generic SSRIs | Depression only | ~19% |
| CBT (Depression) | Depression only | ~19% |
| Bariatric Surgery | Severe obesity (BMI ≥35) only | ~35% |
| Smoking Cessation | Current smokers only | ~30% |
| Alcohol Reduction | Hazardous drinkers only | ~15–20% |

## Notes for Graph Builder

1. **All costs are 2024 US dollars, without insurance, annual.** One-time startup costs have been amortized over 3 years per plan.md.

2. **Conditional QALY framing:** Each data point shows the QALY gain for a Bob to whom the intervention applies. The graph should annotate conditional interventions (SSRIs, CBT, bariatric, smoking, alcohol) with their applicable population fraction.

3. **Comparator asymmetry caveat:** Exercise QALYs are measured vs. inactivity; medical QALYs vs. usual care. This inflates exercise QALYs by ~0.01–0.03 relative to medical interventions. Worth noting in a methodology footnote.

4. **X-axis scale consideration:** Bariatric surgery at $8,700/year is ~19× more expensive than SSRIs ($455), the next most expensive intervention. A log scale or axis break may be needed to prevent the other 13 interventions from being compressed into the left edge.

5. **Description field:** The TypeScript type includes a `description` field. Each intervention's result file (004–022) contains a summary paragraph suitable for this field. The graph builder should extract these during compilation.

6. **Evidence quality ranking** (for reference, from ticket 023): Smoking cessation > Statins > SSRIs > CBT > Walking > Bariatric > Alcohol > Sleep > Diet > Yoga > Meditation > Strength training > Cycling > Community groups.

## Sources

All sources are documented in individual result files (004–022). Key cross-cutting methodology sources:

- BLS CPI-U conversion factors (ticket 024) — inflation adjustment verification
- Plan.md data format specification — TypeScript type definition, amortization rules, evidence tier definitions
- Ticket 023 QALY normalization — comparator asymmetry analysis, double-counting checks, instrument sensitivity review
- Ticket 024 cost normalization — CPI verification, regional variation check

## Confidence Level

**High.** The master data table is complete with no missing values. All costs are in 2024 dollars. QALY estimates are consistently measured (conditional framing, evidence tiers reflecting methodological confidence). The data tells a coherent story that supports the original hypothesis — walking is the best bang-for-buck universal intervention — while honestly showing that smoking cessation has the highest absolute QALY gain for the ~30% of Bobs who smoke. No adjustments were needed from the normalization tickets, which is itself a positive signal about the internal consistency of the research across 22 intervention tickets.

<!-- COMPLETE -->
