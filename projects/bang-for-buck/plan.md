# Bang for Buck — Research Plan

## Summary

Collect cost-effectiveness data for ~15 common life interventions, measured in net QALYs gained per year vs. annual financial cost, for an American at the 25th percentile of household income (~$30k). The graph is a scatter/bubble chart where the visual punchline is that walking sits alone in the top-left corner: maximum health benefit, zero dollars.

## Bob's profile

"Bob" is a statistical composite anchored on the **25th percentile of US household income (~$30,000)**. Not a specific person — the median characteristics of that bracket:

- **Physical:** Elevated BMI (~35% obesity prevalence), higher rates of chronic conditions, sedentary lifestyle more likely
- **Mental:** ~12-14% depression prevalence (vs ~7% top quartile), elevated anxiety and stress
- **Financial:** ~$30k gross household income, limited or no health insurance, minimal savings, constrained disposable income
- **Access:** May lack reliable transportation, limited provider availability (especially mental health), shift work reduces scheduling flexibility
- **Geography:** Mix of rural (no sidewalks) and urban (safety concerns), with access barriers varying accordingly

Tickets 001-003 will flesh this out with real data from CDC BRFSS, Census, BLS, and NHANES.

## Graph design

- **X-axis:** Annual Financial Cost ($) — pure dollar cost, no monetized time
- **Y-axis:** Net QALY Gain per Year — midpoint estimate, with range available for tooltips
- **Bubble size:** Evidence quality tier (1=large/strong, 2=medium/moderate, 3=small/weak)
- **Color:** Time commitment category (low <1 hr/wk, medium 1-3 hr/wk, high 3+ hr/wk)

## Data format specification

### Baseline profile tickets (001-003)

These produce reference documents, not graph data points. Format:

```markdown
# Result: [Title]

## Source
- **Primary source:** [Name, URL]
- **Date accessed:** YYYY-MM-DD

## Findings
[Structured data about Bob's baseline in this dimension]

## Key Statistics
| Metric | Value | Source |
|--------|-------|--------|
| [metric] | [value] | [citation] |

## Gaps and Caveats
- [Known gaps or methodology issues]
```

### Intervention tickets (004-022)

Each intervention ticket produces a result file with both narrative context and a structured data table. The graph phase will compile the data tables into `src/data/bang-for-buck.ts`.

```markdown
# Result: [Intervention Name]

## Summary
One-paragraph summary of findings for this intervention.

## QALY Evidence
- **Net QALY gain per year (best estimate):** X.XX
- **Range:** X.XX – X.XX (low – high)
- **Primary source:** [Citation with year]
- **Study type:** [Meta-analysis / RCT / Observational / Cost-effectiveness analysis]
- **Population studied:** [Description]
- **Population match to Bob:** Good / Fair / Poor
- **Key caveats:** [List any issues with applicability, methodology, etc.]

## Cost Analysis (for Bob at ~$30k household income)
- **Annual direct cost:** $X
- **One-time startup cost:** $X
- **Startup cost amortized over 3 years:** $X/year
- **Total annual cost (best estimate):** $X
- **Cost range:** $X – $X (low – high)
- **With insurance (if applicable):** $X
- **Without insurance:** $X
- **Cost notes:** [What's included, regional variation, assumptions]

## Time Commitment
- **Hours per week:** X
- **Category:** Low (<1 hr/wk) / Medium (1-3 hr/wk) / High (3+ hr/wk)

## Access and Barriers
- **Activation energy:** Low / Medium / High
- **Barriers for Bob:**
  - [Barrier 1]
  - [Barrier 2]

## Side Effects and Risks
- [Risk 1 with severity/frequency if known]
- [Risk 2]

## Adherence
- **Real-world adherence rate:** X%
- **Source:** [Citation]
- **Notes:** [Why people drop off, what helps]

## Evidence Quality
- **Tier:** 1 / 2 / 3
- **Tier 1** = Multiple RCTs or high-quality meta-analyses, Bob-adjacent populations
- **Tier 2** = Some RCTs, or strong observational data, or good data but population mismatch
- **Tier 3** = Limited evidence, mostly observational, high confounding, or extrapolated
- **Key studies:** [2-4 most important citations]
- **Limitations:** [Methodological concerns]

## Data for Graph

| Field | Value |
|---|---|
| id | [kebab-case-slug] |
| name | [Display Name] |
| category | [physical-activity / mental-health / medical / surgical / lifestyle] |
| annualCostLow | [number] |
| annualCostMid | [number] |
| annualCostHigh | [number] |
| qalyLow | [number, 2 decimal places] |
| qalyMid | [number, 2 decimal places] |
| qalyHigh | [number, 2 decimal places] |
| evidenceTier | [1, 2, or 3] |
| weeklyHours | [number, 1 decimal place] |
| timeCategory | [low / medium / high] |
| activationEnergy | [low / medium / high] |
| adherenceRate | [0.00-1.00] |
```

### Evidence assessment tickets (020-022)

These evaluate borderline interventions. They produce either a full intervention result (same format as above) if the data supports inclusion, or an exclusion recommendation:

```markdown
# Result: [Intervention Name] — Evidence Assessment

## Verdict: Include / Exclude

## Rationale
[Why the data does or doesn't support inclusion]

## If Include: [Full intervention result format above]
## If Exclude: [Summary of what was found and why it's insufficient]
```

### Synthesis tickets (023-025)

These don't produce graph data points. They produce methodology notes and normalization guidance for the graph-building phase.

### Rules for data values

1. **All costs in 2024 US dollars.** If source data is in older dollars, inflate using CPI. Note the original year.
2. **QALY estimates prefer all-cause or general-QoL measures** over domain-specific sums, to avoid double-counting multi-dimensional benefits.
3. **Net QALYs** — subtract side effects, risks, and complications from gross benefits.
4. **Annual costs for Bob without insurance** as the primary cost figure. Note the with-insurance cost separately where relevant.
5. **Startup costs amortized over 3 years** (not 5 — shorter time horizon for lower-income individuals).
6. **Missing data = "insufficient data"** — never fabricate numbers. If QALY data doesn't exist for an intervention, say so. The evidence assessment tickets (020-022) exist to handle this.
7. **Ranges are mandatory.** Never report a single point estimate without a plausible range. The graph will use the midpoint but the range matters for confidence.

## Target TypeScript type (for graph phase)

```typescript
export type TimeCategory = 'low' | 'medium' | 'high';
export type EvidenceTier = 1 | 2 | 3;
export type ActivationEnergy = 'low' | 'medium' | 'high';
export type InterventionCategory =
  | 'physical-activity'
  | 'mental-health'
  | 'medical'
  | 'surgical'
  | 'lifestyle';

export interface Intervention {
  id: string;
  name: string;
  category: InterventionCategory;
  annualCostLow: number;
  annualCostMid: number;
  annualCostHigh: number;
  qalyLow: number;
  qalyMid: number;
  qalyHigh: number;
  evidenceTier: EvidenceTier;
  weeklyHours: number;
  timeCategory: TimeCategory;
  activationEnergy: ActivationEnergy;
  adherenceRate: number;
  description: string;
}
```

## Data proxy strategy

Different interventions have fundamentally different evidence landscapes. Each category uses the best available proxy, with internal consistency within that category being the priority.

| Category | Primary QALY proxy | Fallback | Notes |
|----------|-------------------|----------|-------|
| Exercise (walking, gym, yoga) | All-cause mortality reduction from meta-analyses, converted to QALYs | Cost-effectiveness analyses from CEA Registry | Exercise studies rarely use EQ-5D; mortality-based QALYs are more available and avoid double-counting |
| Pharmaceuticals (SSRIs, statins) | RCT-based cost-effectiveness analyses | NICE technology appraisals | Pharma has the richest CEA literature; studies usually match clinical populations |
| Psychotherapy (CBT) | CEA studies comparing CBT vs usual care | Cochrane reviews + external QALY conversion | Population often depression-diagnosed, which matches a subset of Bobs |
| Surgery (bariatric) | Long-term cohort studies with QALY outcomes | CEA Registry entries | Bariatric CEA is mature; studies use EQ-5D and SF-6D instruments |
| Lifestyle (diet, sleep, smoking) | Varies by intervention — see individual tickets | Epidemiological risk reduction converted to QALYs | Most heterogeneous category; each ticket specifies its own proxy |

## Data source hierarchy (for research agents)

Search in this order. Stop when you find a defensible estimate.

1. **Tufts CEA Registry** — gold standard for cost-per-QALY estimates across interventions
2. **Cochrane Systematic Reviews** — highest-quality evidence synthesis
3. **NICE Technology Appraisals** (UK) — rigorous cost-effectiveness assessments; QALY methodology is transferable, but costs need US adjustment
4. **CDC / BRFSS / NHANES** — for Bob's baseline profile and epidemiological data
5. **BLS / Census** — for financial profile, time use, access data
6. **PubMed meta-analyses** — for specific intervention effect sizes
7. **WHO-CHOICE** — for interventions where US-specific data is thin
8. **Individual RCTs** — last resort; prefer meta-analyses

## Known data gaps

- **Exercise QALY estimates are predominantly from general-population studies**, not low-income populations specifically. Bob's baseline health is worse, so marginal gains may be larger — but we can't quantify the difference. Flag as "population match: Fair."
- **Lifestyle interventions (diet, sleep, social media)** have weak or nonexistent QALY literature. These may end up as Tier 3 evidence or excluded entirely.
- **Cost data for uninsured Americans** is scattered. No single source covers all interventions. Tickets will need to piece together from GoodRx, FAIR Health, community health center schedules, etc.
- **Interaction effects are out of scope.** Walking + SSRIs together may be more than the sum of parts. The scatter plot assumes independence. Note this limitation but don't try to model it.
- **Adherence rates for Bob's specific bracket** are rarely reported separately from general-population adherence. Use general rates and note the limitation.

## Intervention list and rationale

### Definite includes (10 interventions)

These have established cost-effectiveness literature with QALY estimates:

1. **Walking (30 min/day)** — The hypothesis. Free, multi-dimensional, strong mortality evidence.
2. **Strength training / gym** — Distinct from cardio; different cost profile (membership fee), growing QALY literature.
3. **Yoga** — Growing cost-effectiveness literature, distinct mind-body profile.
4. **Generic SSRIs** — The cheap pharmaceutical benchmark. Strong CEA data.
5. **CBT (12-session course)** — The psychotherapy benchmark. Good CEA data, interesting cost contrast with SSRIs.
6. **Bariatric surgery** — The expensive-but-effective anchor. Strong long-term QALY data.
7. **Diet overhaul (home cooking)** — Relevant to Bob's likely fast-food-heavy diet. Some CEA data via dietary intervention trials.
8. **Sleep hygiene** — Low-cost, emerging QALY data via insomnia intervention studies.
9. **Smoking cessation** — Not in original question.md list but critical for Bob's bracket (25-30% smoking rate vs ~10% upper quartile). Extremely strong CEA data. One of the most cost-effective interventions known.
10. **Statin therapy** — Added during planning. Bob's cardiovascular risk profile makes this highly relevant. Excellent CEA data, very low cost.

### Added during planning (2 interventions)

11. **Alcohol reduction** — Higher rates of heavy drinking in lower-income brackets. Good CEA data from brief intervention studies.
12. **Cycling/swimming (alternative cardio)** — Different cost and access profile from walking. Worth one ticket to see if data exists.

### Borderline — assess before including (3 interventions)

13. **Meditation/MBSR** — Some QALY data exists for clinical MBSR programs. Ticket 020 will determine if it's enough.
14. **Social media/screen time reduction** — Emerging evidence, probably too thin. Ticket 021 decides.
15. **Community group participation / social prescribing** — UK NHS has some QALY data. Ticket 022 decides.

### Dropped (from original question.md list)

- **Dog ownership** — No QALY data. High annual cost ($1,500-3,000). Can't be compared on the same axis.
- **Volunteering** — Confounding too severe (healthy people volunteer; volunteering may not cause the benefit).
- **Religious community participation** — Same confounding problem, plus cultural sensitivity.
- **Reading regularly** — No QALY data exists.
- **Learning a new skill / continuing education** — No QALY data exists.
- **Joining a club** — Subsumed by community participation assessment (ticket 022).

## Ticket overview

25 tickets organized into 8 blocks.

### Block 1: Bob's Baseline (3 tickets)
Establish the health, mental health, financial, and access profile of the 25th-percentile American. All intervention tickets reference these results.

- **001** — Physical health baseline (BMI, chronic conditions, activity levels, diet)
- **002** — Mental health and social baseline (depression, anxiety, social isolation, substance use)
- **003** — Financial, access, and time-use baseline (insurance, transportation, disposable income, time availability)

### Block 2: Walking — The Hypothesis (2 tickets)
Walking gets extra scrutiny because it's the hypothesized winner. Two tickets ensure thorough coverage.

- **004** — Walking: QALY evidence from meta-analyses and CEA studies
- **005** — Walking: Cost analysis, safety, and access barriers for Bob

### Block 3: Other Exercise (3 tickets)
- **006** — Strength training / gym membership: QALY evidence and cost
- **007** — Yoga: QALY evidence and cost
- **008** — Cycling / swimming: QALY evidence and cost

### Block 4: Mental Health Interventions (4 tickets)
SSRIs and CBT each get two tickets because they're the primary comparison points to walking for depression, and their cost structures are complex for uninsured/underinsured Americans.

- **009** — Generic SSRIs: QALY evidence for depression
- **010** — Generic SSRIs: Cost and access for uninsured/underinsured
- **011** — CBT: QALY evidence for depression and anxiety
- **012** — CBT: Cost and access barriers for Bob

### Block 5: Medical / Surgical (3 tickets)
- **013** — Bariatric surgery: QALY evidence and long-term outcomes
- **014** — Bariatric surgery: Cost, insurance requirements, and access
- **015** — Statin therapy: QALY evidence and cost

### Block 6: Lifestyle Modifications (4 tickets)
- **016** — Diet overhaul (home cooking vs. fast food): QALY evidence and cost
- **017** — Sleep hygiene improvements: QALY evidence and cost
- **018** — Smoking cessation (NRT, varenicline, counseling): QALY evidence and cost
- **019** — Alcohol reduction (brief interventions): QALY evidence and cost

### Block 7: Borderline Assessments (3 tickets)
Each of these produces either a full data point or an exclusion recommendation.

- **020** — Meditation / MBSR: evidence assessment
- **021** — Social media / screen time reduction: evidence assessment
- **022** — Community group participation / social prescribing: evidence assessment

### Block 8: Synthesis (3 tickets)
Run after all intervention tickets are complete. These ensure the data is internally consistent and ready for graph building.

- **023** — QALY methodology normalization (cross-intervention consistency check)
- **024** — Cost normalization (standardize all figures to 2024 dollars)
- **025** — Final data compilation (compile all results into a single summary table, flag outliers)
