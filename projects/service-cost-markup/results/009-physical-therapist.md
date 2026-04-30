# Rehabilitation — Physical Therapist

## Summary

The physical therapist's share of what customers pay has been remarkably stable at ~29-32% over the past 25 years, making PT one of the most ratio-stable services in this dataset. This stability reflects the fundamental nature of PT: it is irreducibly a one-therapist, one-patient, one-hour service. You can't offshore it, automate it, or split it across a larger customer base. The main disruption was the COVID-19 pandemic in 2020, which temporarily spiked the ratio to ~36% as visit volumes cratered while salaries held — but the ratio snapped back as volumes recovered. Underneath this stability, PT salaries have roughly doubled in nominal terms since 2000, but so has per-visit revenue, keeping the ratio locked.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 2000 | 57,710 | 75 | per visit (all payers avg) | 2,400 | 32.1 | low |
| 2005 | 64,000 | 82 | per visit (all payers avg) | 2,600 | 30.0 | low-med |
| 2010 | 78,270 | 92 | per visit (all payers avg) | 2,800 | 30.4 | med |
| 2015 | 86,520 | 98 | per visit (all payers avg) | 2,900 | 30.5 | med |
| 2020 | 91,010 | 100 | per visit (all payers avg) | 2,500 | 36.4 | med |
| 2024 | 101,020 | 110 | per visit (all payers avg) | 3,000 | 30.6 | med |

## Methodology

**Ratio formula:** PT Mean Annual Wage / (Average Revenue per Visit × Annual Visits per PT)

This directly measures: of every dollar the customer (patient + insurer + government) spends on a PT visit, what fraction ultimately reaches the physical therapist as compensation? The remainder covers clinic rent, equipment, support staff, billing/admin overhead, and profit margin.

**Why per-visit rather than per-capita:** PT is the purest 1:1 service in healthcare — one therapist physically working with one patient for 30-60 minutes. Unlike a physician who can order labs or prescribe from a desk, a PT's output is literally measured in billable time units spent touching the patient. Per-visit revenue is therefore the most honest denominator. Using NHE per capita (as in the physician/nurse tickets) would yield a very small ratio (~0.5%) that obscures the PT-specific economics.

**Worker compensation (numerator):** BLS Occupational Employment and Wage Statistics (OEWS) mean annual wage for Physical Therapists, SOC code 29-1123. Data points:

- **2000:** $57,710 mean annual wage. BLS OES May 2000 survey. Employment ~132,000.
- **2005:** ~$64,000 estimated. BLS OES showed steady ~4% annual growth through the mid-2000s. Cross-referenced with APTA Practice Profile surveys showing median gross income of $55,000 (entry-level DPT, 2005) scaling up with experience. Employment ~155,000.
- **2010:** $78,270 mean annual wage. BLS OES May 2010 survey. Employment ~198,500.
- **2015:** ~$86,520 mean annual wage. BLS OES May 2015. APTA wage data confirms wages matched or exceeded inflation through 2013, then stalled. Employment ~215,000.
- **2020:** $91,010 median annual wage. BLS OES May 2020 (confirmed by multiple sources). Mean was ~$92,920. Employment 247,700 but lower effective headcount due to pandemic furloughs.
- **2024:** $101,020 median annual wage. BLS OES May 2024 (confirmed). Employment ~260,000+.

**Customer cost (denominator — per visit):** Average total revenue collected per PT visit across all payer types (Medicare, commercial insurance, self-pay, workers' comp). This is the "allowed amount" — what the system actually pays, not the chargemaster price. Estimated by triangulating:

1. **Medicare reimbursement as backbone:** A typical 45-60 minute PT follow-up visit involves 3-4 billing units across CPT codes 97110 (therapeutic exercise), 97140 (manual therapy), 97112 (neuromuscular reeducation), etc. Medicare pays ~$28-36 per unit depending on code and year, yielding $84-$144 per visit. The Medicare Physician Fee Schedule conversion factor has been remarkably flat in nominal terms: $36.61 (2000) → $35.80 (2015) → $36.09 (2020) → $33.29 (2024), meaning real Medicare reimbursement has been declining. However, units billed per visit have increased from ~2.5-3.0 in 2000 to ~3.5-4.0 in 2024 as documentation and billing became more sophisticated, partially offsetting the per-unit decline.

2. **Payer mix blending:** Commercial insurance typically reimburses 1.2-1.5× Medicare. Workers' comp and auto cases pay higher still. Self-pay/cash-based PT (which grew from ~15% of practices in 2010 to >40% by 2021) charges $100-$150/session. Medicaid pays below Medicare. Blended average is estimated at roughly 0.9-1.1× Medicare total per visit depending on the practice's payer mix.

3. **Current benchmarks:** Multiple sources confirm average collected revenue per PT visit of $100-$120 in 2024-2025, with $100/visit commonly cited as a rule-of-thumb benchmark by practice management firms (WebPT, StrataPT, Boost My Claims). The illustrative StrataPT example uses $83-$86/visit as a baseline for practices seeking improvement.

**Estimated per-visit revenue trajectory:**
- 2000: ~$75 — Lower billing units per visit (2.5-3 units typical), Medicare CF was ~$36.61 but commercial rates were proportionally lower in that era. Industry was less sophisticated in maximizing billable units.
- 2005: ~$82 — Gradual increase in billing optimization, more units per visit.
- 2010: ~$92 — Continued billing sophistication, 3-3.5 units common, but the 2012 CF dip to $34.04 compressed reimbursement.
- 2015: ~$98 — CF recovered to $35.80, average 3.5 units per visit.
- 2020: ~$100 — CF at $36.09 but pandemic disruptions; telehealth visits at lower rates mixed in.
- 2024: ~$110 — Units per visit at 3.5-4.0, cash-pay practices pulling up the average, but CF dropped to $33.29.

**Customers per worker (visits per PT per year):** Derived from daily patient load × productive working days:

- Average patients per day has increased over time as productivity expectations rose: ~9-10/day in 2000 → 12-13/day in 2024 (confirmed by APTA, WebPT, and practice management data showing weighted average of 12.7 per 8-hour day). This increase was driven by private equity and health system consolidation pushing higher caseloads, and the shift from 1-hour to 45-minute sessions.
- Productive working days estimated at ~240/year (accounting for vacation, continuing education, administrative time, holidays).
- 2020 is anomalous: pandemic shutdowns and reduced volume dropped effective visits to ~2,500/year.

## Sources

- BLS Occupational Employment and Wage Statistics (OEWS), Physical Therapists (29-1123): https://www.bls.gov/oes/current/oes291123.htm
- BLS Occupational Outlook Handbook, Physical Therapists: https://www.bls.gov/ooh/healthcare/physical-therapists.htm
- APTA Physical Therapist Median Income data: https://www.apta.org/your-career/careers-in-physical-therapy/workforce-data/pt-median-income
- APTA Physical Therapy Workforce Data: https://www.apta.org/your-career/careers-in-physical-therapy/workforce-data
- APTA Wage Report 2021-22: https://www.apta.org/contentassets/136f54b002a741009b76061f070d5d62/2023-apta-wage-report.pdf
- Medicare Conversion Factor History (FastRVU): https://fastrvu.com/articles/medicare-conversion-factor-2025
- AMA History of Medicare Conversion Factors: https://www.ama-assn.org/system/files/cf-history.pdf
- Medicare PT Payment Guide (BTE Technologies): https://www.btetechnologies.com/therapyspark/how-much-does-medicare-pay-for-physical-therapyper-visit/
- Therapy Reimbursement Guide 2026 (OT Potential): https://otpotential.com/blog/therapy-reimbursement
- Physical Therapy Practice Profitability (Boost My Claims): https://boostmyclaims.com/how-profitable-is-a-pt-clinic/
- Revenue Metrics for PT Practices (WebPT): https://www.webpt.com/blog/revenue-metrics-every-pt-private-practice-owner-should-know
- Average Reimbursement Per Visit (StrataPT): https://www.stratapt.com/article/whats-your-average-reimbursement-per-visit
- PT Caseload and Productivity (WebPT): https://www.webpt.com/blog/the-surprising-metric-that-will-help-you-set-the-right-patient-load
- 74 Physical Therapy Statistics (AmbitionSABA, citing BLS May 2020): https://www.ambitionsaba.com/resources/physical-therapy-statistics
- 59 Physical Therapy Statistics (CrossRiverTherapy): https://www.crossrivertherapy.com/research/physical-therapy-statistics
- PT Industry Market Analysis: https://blog.marketresearch.com/strong-demand-for-53-billion-u.s.-physical-therapy-clinics-industry
- Data USA Physical Therapists profile: https://datausa.io/profile/soc/physical-therapists
- Medicare Therapy Cap history (NARANET): https://www.naranet.org/blog/post/capping-problems-more-than-just-a-dollar-amount
- Balanced Budget Act impact on PT (PMC): https://pmc.ncbi.nlm.nih.gov/articles/PMC3560913/

## Notes

- **PT is the flattest line in the healthcare cluster.** While physicians saw their ratio collapse from ~8% to ~1% (against NHE) and even dentists fell from 63% to 22% (against dental spending), PT's per-visit ratio has barely budged from ~30% over 25 years. The reason is structural: PT is one of the few healthcare services where the worker IS the product. You can add billing software, EMR systems, and reception staff, but you cannot do physical therapy without a physical therapist physically present for the entire session.

- **The Balanced Budget Act of 1997 was the big structural shock — but it's before our data window.** The BBA imposed $1,500 annual caps on PT spending, causing outpatient therapy spending to drop from $2.1B (1998) to $1.4B (1999). The caps were suspended in 2000 and bounced between moratoria and partial implementation until permanent repeal in 2018. This created a chaotic regulatory environment but, paradoxically, didn't significantly change the PT:customer ratio because both revenue per visit and PT salaries were affected similarly.

- **Private equity consolidation is the trend to watch.** PT clinics are increasingly being acquired by PE-backed chains. ATI Physical Therapy, U.S. Physical Therapy (USPH), and Athletico dominate the consolidation wave. In theory, consolidation should reduce the ratio (more overhead, more corporate extraction). In practice, the ratio hasn't budged much yet — possibly because PE firms maintain revenue by pushing higher patient volumes per therapist rather than cutting therapist pay.

- **The PTA question.** Physical Therapist Assistants (PTAs) earn ~$62,000 (median 2024) and perform much of the same hands-on work as PTs. In many states, PTAs handle 40-60% of treatment visits. If we included PTAs in the denominator (total therapy labor comp / total therapy revenue), the effective ratio would be higher. This analysis isolates the PT specifically, which is a conservative measure.

- **The 2020 pandemic spike is real but misleading.** The ratio jumped to ~36% in 2020 because visit volumes collapsed (clinics closed, patients avoided in-person care) while PT salaries were relatively sticky — you can't cut a salaried professional's pay as fast as you can cancel appointments. By 2024 the ratio was back to ~30% as volumes recovered and exceeded pre-pandemic levels.

- **Confidence is lowest for 2000-2005 data.** BLS OES data for PT salaries is well-established, but per-visit revenue estimates for the early 2000s are reconstructed from Medicare conversion factor data and industry norms. The blended revenue per visit could plausibly be $65-85 in 2000, which would shift the ratio to anywhere from 28-37%. The relative stability of the ratio over time, however, is robust even at the extremes of these estimates.

- **Cash-pay PT is growing fast and may eventually shift the ratio.** Direct-pay PT practices charge $120-$200/session with no insurance middleman, but pay their PTs similar salaries to insurance-based practices. If cash-pay continues growing (15% of practices in 2010 → 40%+ by 2021), the per-visit revenue will increase while PT salaries lag, which would compress the ratio. This hasn't materialized yet in aggregate data but is worth watching.

<!-- COMPLETE -->
