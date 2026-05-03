# Result: Community Group Participation / Social Prescribing — Evidence Assessment

## Verdict: Include (Tier 3)

## Rationale

Unlike social media reduction (ticket 021), community group participation does have published QALY and EQ-5D outcome data — primarily from UK social prescribing evaluations. At least three studies report EQ-5D or QALY outcomes from controlled or quasi-experimental designs, meeting the inclusion threshold. However, the evidence is weak: effect sizes are small and often non-significant in intention-to-treat analyses, study designs are predominantly pre-post or quasi-experimental with limited blinding, and the UK social prescribing model (link workers, NHS-funded community referrals) doesn't directly translate to an American at the 25th income percentile joining a community group on their own. This warrants inclusion as Tier 3 evidence with wide uncertainty ranges.

The confounding concern flagged in the ticket — healthy people join groups — remains partially unresolved. The better studies use matched controls or quasi-experimental designs that mitigate this somewhat, but no large RCT exists that definitively separates selection effects from causal effects of community participation.

## QALY Evidence

- **Net QALY gain per year (best estimate):** 0.03
- **Range:** 0.01 – 0.06 (low – high)
- **Primary source:** Munford et al. (2020), "Community asset participation and social medicine in England," Journal of Public Health; NASP cost-effectiveness case study (2024); SPRING_NE multimethod study (Moffatt et al., 2023)
- **Study type:** Quasi-experimental / before-after with controls / economic modelling
- **Population studied:** UK adults, primarily older adults (65+) with long-term conditions; some studies include working-age adults with mental health conditions
- **Population match to Bob:** Poor — UK healthcare context, older populations, NHS-supported referral pathways. Bob is a working-age American without the structured link-worker system.
- **Key caveats:**
  - The best controlled QALY estimate (0.056 over 18 months ≈ 0.037/year) comes from a study of 4,377 older adults with long-term conditions — different demographic from Bob
  - The SPRING_NE RCT-like evaluation found only 0.004 QALYs in intention-to-treat analysis (non-significant), but 0.071 EQ-5D-5L utility improvement for the subgroup who attended 3+ sessions — suggesting engagement level is the critical moderator
  - The NASP cost-effectiveness model (£2,548/QALY) used EQ-VAS conversions, which is a weaker instrument than EQ-5D for QALY estimation
  - No US-specific QALY data for community group participation exists
  - Holt-Lunstad's meta-analyses (2010, 2015) establish that social isolation increases mortality risk by 26-29% (OR 1.26-1.29), comparable to Grade 2-3 obesity, providing biological plausibility for the QALY gains — but these are observational associations, not intervention effects

## Cost Analysis (for Bob at ~$30k household income)

- **Annual direct cost:** $0–150
- **One-time startup cost:** $0
- **Startup cost amortized over 3 years:** $0/year
- **Total annual cost (best estimate):** $350
- **Cost range:** $100 – $800 (low – high)
- **With insurance (if applicable):** N/A
- **Without insurance:** N/A
- **Cost notes:** Most community groups (church groups, walking clubs, volunteer organizations, library programs, community gardens) charge nothing or nominal dues ($0–100/year). The primary cost for Bob is transportation: at the 25th income percentile, reliable transportation is a significant barrier. Estimated at $5–15/trip for gas or public transit, 1–2x/week = $260–780/year. Lower bound assumes a walkable group; upper bound assumes driving. No equipment or membership fees for most community activities. Food costs for potlucks or social meals are not included as they would substitute for meals Bob would eat anyway.

## Time Commitment

- **Hours per week:** 2.5
- **Category:** Medium (1-3 hr/wk)

## Access and Barriers

- **Activation energy:** High
- **Barriers for Bob:**
  - Transportation: unreliable access to a car or limited public transit, especially in rural areas
  - Social anxiety / discomfort: joining a new group is psychologically demanding, especially for someone who may already be socially isolated
  - Schedule conflicts: shift work and irregular hours make regular group attendance difficult
  - Awareness: knowing what groups exist and how to join them; no US equivalent of NHS link workers to connect people to community resources
  - Cultural mismatch: available groups may not match Bob's interests, age, or social background
  - Childcare: if Bob has children, attending evening/weekend groups requires arranging care

## Side Effects and Risks

- Minimal physical risks
- Potential for negative social experiences (conflict, exclusion, social pressure)
- Time displacement from other beneficial activities
- Possible financial pressure if group activities involve spending (meals out, supplies, dues)

## Adherence

- **Real-world adherence rate:** 0.50
- **Source:** Estimated from multiple social prescribing evaluations. SPRING_NE found that meaningful engagement (3+ sessions) occurred in a subset of referred participants. Australian social prescribing study showed 79% retention at 8 weeks. German study found social prescribing improved return visits vs. self-referral. However, these are all structured programs with link worker support — self-initiated community group participation likely has lower retention. General community group membership data (not health-specific) shows high initial dropout.
- **Notes:** Adherence is highly dependent on group fit, social support, and logistical barriers. The UK social prescribing model uses trained "link workers" who actively connect patients to community groups and follow up — this support structure is absent in the US. Without link worker support, adherence likely drops significantly. The 50% estimate reflects the gap between structured UK programs (~75-90% short-term retention) and the reality of self-initiated community participation.

## Evidence Quality

- **Tier:** 3
- **Tier 3** = Limited evidence, mostly observational, high confounding, or extrapolated
- **Key studies:**
  - Munford et al. (2020), "Community asset participation and social medicine in England" — quasi-experimental, 4,377 older adults, 0.056 QALY gain at 18 months
  - Moffatt et al. (2023), SPRING_NE study — NIHR-funded multimethod evaluation of social prescribing for type 2 diabetes in North East England, 8,400 patients, minimal ITT QALY gain (0.004), subgroup benefit with engagement
  - NASP cost-effectiveness case study (2024) — modelled £2,548/QALY based on EQ-VAS improvements from 6,000+ patients across NHS social prescribing pathways
  - Holt-Lunstad et al. (2015), "Loneliness and Social Isolation as Risk Factors for Mortality" — meta-analysis of 70 studies, OR 1.26 for loneliness, OR 1.29 for social isolation (provides the biological plausibility, not the intervention effect)
  - Röhricht et al. (2024), "Disutility associated with social isolation and loneliness in Germany" — population survey finding EQ-5D-5L disutility from social isolation comparable to chronic diseases
- **Limitations:**
  - No RCTs of "joining a community group" as a standalone intervention with QALY outcomes
  - All QALY data comes from UK social prescribing programs, which include link worker support not available to Bob
  - Selection bias in observational studies remains the elephant in the room — Holt-Lunstad acknowledges this but can't fully resolve it
  - Pre-post designs in the NASP model don't control for regression to the mean
  - US community infrastructure and social safety net differ substantially from the UK
  - The heterogeneity of "community group participation" makes it almost impossible to standardize — a church choir is a different intervention than a gardening club

## Data for Graph

| Field | Value |
|---|---|
| id | community-groups |
| name | Community Group Participation |
| category | lifestyle |
| annualCostLow | 100 |
| annualCostMid | 350 |
| annualCostHigh | 800 |
| qalyLow | 0.01 |
| qalyMid | 0.03 |
| qalyHigh | 0.06 |
| evidenceTier | 3 |
| weeklyHours | 2.5 |
| timeCategory | medium |
| activationEnergy | high |
| adherenceRate | 0.50 |

<!-- COMPLETE -->
