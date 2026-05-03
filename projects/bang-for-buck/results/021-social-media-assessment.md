# Result: Social Media / Screen Time Reduction — Evidence Assessment

## Verdict: Exclude

## Rationale

There is no published cost-effectiveness analysis or QALY estimate for reducing social media or recreational screen time as a health intervention. The RCT evidence that does exist is short-term (1–4 weeks), largely limited to college-age populations, and meta-analyses disagree on whether effects are meaningful. Converting the available mental health outcome data to QALYs would require stacking multiple speculative conversions, producing a number too unreliable to plot alongside interventions with real CEA data.

## What the Evidence Shows

### Direct QALY / Cost-Effectiveness Evidence

**None found.** Searched Tufts CEA Registry, NICE, PubMed, and Cochrane for "social media," "screen time reduction," and "digital detox" in combination with QALY or cost-effectiveness terms. The only screen-time-related CEA data involves childhood obesity prevention interventions (reducing sedentary TV time), which is a fundamentally different intervention targeting a different population and outcome.

### RCT Evidence on Mental Health Outcomes

Several RCTs and meta-analyses examine social media restriction:

**Hunt et al. (2018)** — "No More FOMO." 143 University of Pennsylvania undergrads randomized to limit Facebook, Instagram, and Snapchat to 10 min/platform/day vs. usual use for 3 weeks. Found significant reductions in loneliness and depression in the limited-use group. Small sample, student-only, very short duration.

**Allcott et al. (2020)** — "The Welfare Effects of Social Media." Published in the American Economic Review. 2,743 Facebook users randomized; 4-week deactivation improved subjective well-being, reduced political polarization, and caused a persistent post-experiment reduction in Facebook use. The most rigorous single study, but measured welfare/well-being, not clinical depression or QALYs. Median willingness-to-accept for deactivation was ~$100/month, implying people value their social media use — restriction involves a real utility cost.

**Burnell et al. (2025)** — Meta-analysis in SSM Mental Health. 32 RCTs, 5,544 participants, 91 effect sizes. Restricting social media significantly improved subjective well-being with a small effect (ḡ = 0.17, 95% CI [0.08, 0.27]). Effects on depressive symptoms, anxiety, stress, self-esteem, and self-rated well-being were significant but small. Samples averaged 23 years old, 70% female.

**Competing meta-analysis (2025)** — A preregistered meta-analysis on social media abstinence (10 studies, N = 4,674) found **no significant effects** on positive affect (g = 0.03), negative affect (g = −0.01), or life satisfaction (g = 0.03). All confidence intervals crossed zero.

**JMIR meta-analysis (2025)** — Found larger effects (ES = 0.31–0.33 for depression/anxiety), but this included therapy-based social media interventions (e.g., CBT delivered via social media platforms), not just restriction of social media use. This conflates two very different interventions.

### The QALY Conversion Problem

Even if we accepted the more optimistic effect sizes, converting them to QALYs would require:

1. **Map standardized depression/anxiety effect sizes to PHQ-9 or GAD-7 score changes.** Most social media studies use varied instruments (BDI-II, CES-D, custom scales), not PHQ-9. Cross-instrument mapping introduces uncertainty.

2. **Map PHQ-9/GAD-7 changes to EQ-5D utility values.** Published mapping functions exist (e.g., equipercentile linking suggests a 2-point PHQ-9 improvement ≈ 0.1 EQ-5D ≈ ~0.09 QALY/year). But these mappings were developed in clinical depression populations, not general-population social media users with subclinical mood changes.

3. **Assume long-term persistence.** All RCTs are 1–4 weeks. There is no evidence that mental health benefits persist beyond the intervention period. The Allcott study found reduced Facebook use persisted, but did not measure whether well-being gains persisted.

Each step compounds uncertainty. The resulting QALY estimate would be a guess wrapped in a guess wrapped in a guess — three layers removed from real measurement.

### Rough Bounding Exercise (for reference, NOT for inclusion)

If we forced a number: Burnell's ḡ = 0.17 on depression scales, in a population averaging PHQ-9 ~5 (subclinical), might correspond to roughly a 0.5–1.0 PHQ-9 point improvement, which maps to approximately 0.02–0.05 EQ-5D improvement, yielding roughly 0.02–0.05 QALYs/year — IF effects persisted (unproven) and IF the mapping held for this population (doubtful). This is an order of magnitude below most medical interventions on our graph and sits well within the noise of measurement error.

### Additional Problems for Bob Specifically

- **Population mismatch:** Nearly all studies use college students (mean age ~23, 70% female). Bob is a 25th-percentile-income adult, likely older, with different social media usage patterns and different mental health baseline.
- **No adherence data:** There is no real-world adherence data for sustained social media reduction. RCTs last 1–4 weeks with active monitoring/compliance checks.
- **Utility loss unquantified:** People value social media use (Allcott: median WTA ~$100/month for deactivation). Any QALY gain must be net of the utility cost of giving up something enjoyable. No study accounts for this.
- **Intervention definition unclear:** "Reduce social media" could mean limiting to 30 min/day, complete abstinence, deleting apps, or using grayscale mode. These are different interventions with different effect profiles.

## Summary of Evidence Landscape

| Study/Meta-analysis | N | Duration | Effect on Well-being | Population |
|---|---|---|---|---|
| Hunt et al. 2018 | 143 | 3 weeks | Significant ↓ depression, loneliness | Penn undergrads |
| Allcott et al. 2020 | 2,743 | 4 weeks | Modest ↑ subjective well-being | US Facebook users |
| Burnell et al. 2025 | 5,544 | 1–4 weeks | ḡ = 0.17 (small, significant) | Mostly college-age, 70% F |
| Abstinence meta-analysis 2025 | 4,674 | 1–4 weeks | g = 0.03 (not significant) | Mixed adult |

## Conclusion

Social media reduction fails all three inclusion criteria from the ticket:

1. **No QALY or cost-effectiveness data exists.** Not in any registry, not in any study.
2. **Mental health effect sizes are small and contested.** Meta-analyses range from null to ḡ = 0.17.
3. **QALY conversion would be speculative.** Three layers of mapping, short-term data extrapolated to annual estimates, in the wrong population.

The intervention may well be beneficial, but the evidence is not in the same universe as the other interventions on this graph (walking, SSRIs, CBT, statins), all of which have direct QALY measurements from established CEA literature. Including social media reduction as a Tier 3 data point would imply a level of comparability that doesn't exist.

## Sources

- Hunt, M. G., Marx, R., Lipson, C., & Young, J. (2018). No More FOMO: Limiting Social Media Decreases Loneliness and Depression. *Journal of Social and Clinical Psychology*, 37(10), 751–768.
- Allcott, H., Braghieri, L., Eichmeyer, S., & Gentzkow, M. (2020). The Welfare Effects of Social Media. *American Economic Review*, 110(3), 629–676.
- Burnell, K., Meter, D. J., Andrade, F. C., Slocum, A. N., & George, M. J. (2025). The effects of social media restriction: Meta-analytic evidence from randomized controlled trials. *SSM - Mental Health*, 7, 100459.
- Preregistered meta-analysis on social media abstinence (2025). *Scientific Reports*. Found no significant effects on affect or life satisfaction (N = 4,674).
- Mapping PHQ-9 to EQ-5D: Equipercentile linking analysis (PMC8311092). ~2-point PHQ-9 change ≈ 0.09 QALY/year in clinical depression populations.

## Confidence Level

**High confidence in the exclusion verdict.** The absence of QALY data is not a gap that might be filled with more searching — it reflects the fundamental immaturity of this research domain. The RCT evidence is real but insufficient for cost-effectiveness comparison.

<!-- COMPLETE -->
