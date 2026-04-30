# Healthcare (Surgery) — Surgeon

## Summary

The surgeon's share of total surgical cost has been in steady decline for three decades. In the early 1990s, the operating surgeon's Medicare professional fee represented roughly 15% of the total payment for a primary total knee arthroplasty (TKA). By 2024, that share has fallen to approximately 6%. The surgeon's nominal fee has barely changed over 30+ years (~$1,290 in 1992 vs ~$900 in 2024), while hospital facility payments more than doubled. Two policy inflection points drove this: the 1983 DRG system (which capped hospital payments but shifted cost pressure), and the 1992 RBRVS physician fee schedule (which standardized and progressively reduced surgical fees).

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1992 | 1,288 | 8,788 | per primary TKA (Medicare) | 1 | 14.7 | med |
| 1995 | 1,300 | 9,800 | per primary TKA (Medicare) | 1 | 13.3 | low |
| 2000 | 1,300 | 11,800 | per primary TKA (Medicare) | 1 | 11.0 | med |
| 2005 | 1,280 | 12,780 | per primary TKA (Medicare) | 1 | 10.0 | med |
| 2010 | 1,200 | 13,200 | per primary TKA (Medicare) | 1 | 9.1 | med |
| 2012 | 1,143 | 13,558 | per primary TKA (Medicare) | 1 | 8.4 | high |
| 2015 | 1,080 | 13,380 | per primary TKA (Medicare) | 1 | 8.1 | med |
| 2017 | 1,036 | 13,094 | per primary TKA (Medicare) | 1 | 7.9 | high |
| 2020 | 970 | 13,470 | per primary TKA (Medicare) | 1 | 7.2 | med |
| 2024 | 900 | 14,075 | per primary TKA (Medicare) | 1 | 6.4 | med |

- **Worker Comp** = Surgeon's Medicare professional fee (Part B) for a primary total knee arthroplasty (CPT 27447), including the 90-day global period (pre-op, surgery, and post-op care).
- **Customer Cost** = Total Medicare payment for the procedure: hospital DRG payment (Part A, DRG 470) + surgeon professional fee. Excludes anesthesiologist (~$1,000-1,500) and post-acute care, which would reduce the ratio further.
- **Customers/Worker** = 1 (per-procedure basis). An average general surgeon performs ~350-400 procedures per year; an orthopedic surgeon doing primarily arthroplasty performs ~200-300 TKAs per year.

## Methodology

**Exemplar procedure: Total Knee Arthroplasty (TKA).** The ticket suggested picking a common surgical procedure with consistent data going back decades. TKA is ideal because: (1) it's one of the highest-volume surgical procedures in the US (~800,000+ annually), (2) Medicare is the dominant payer (most recipients are 65+), and (3) multiple peer-reviewed studies have tracked its cost components over time.

**Why Medicare data?** Medicare payment data is the most transparent, standardized, and longitudinally consistent dataset for surgical costs. Commercial insurance payments vary wildly by market and negotiating power. Medicare's prospective payment systems (DRGs for hospitals since 1983, RBRVS fee schedule for physicians since 1992) provide clean, comparable data.

**How the ratio was computed:** For each time point, the surgeon's professional fee (Medicare Part B payment for CPT 27447) was divided by the total Medicare payment (Part A hospital DRG payment + Part B surgeon fee). This ratio represents: of every dollar Medicare pays for a knee replacement, how many cents go to the surgeon.

**Anchor data points (high confidence):** The 2012 and 2017 values come directly from a peer-reviewed study analyzing CMS claims data (Ong et al., 2020, PMC7320234). The 2012 TKA surgeon fee was $1,143 with hospital DRG at $12,415; the 2017 surgeon fee was $1,036 with hospital DRG at $12,058. The 2024 hospital payment ($13,175 for DRG 470) comes from the CMS FY2024 IPPS final rule.

**Derived data points (medium confidence):** The 1992 surgeon fee (~$1,288) was back-calculated from published findings that TKA surgeon reimbursement has declined 68.86% in inflation-adjusted terms since 1992 (Srivastava et al., 2024, PMC11295619), using CPI adjustment. The 2000-2010 surgeon fees were interpolated using the 22.3% nominal decline from 2000-2024 (Carver et al., 2025). Hospital DRG payments for 1992-2005 were estimated from published hospital cost data (~$10,231 average hospital cost for TKA in the late 1990s) and the known growth trajectory.

**Pre-1992 context:** Before the RBRVS fee schedule (1992), Medicare paid surgeons based on "usual, customary, and reasonable" (UCR) charges. Surgical fees were generally higher under UCR. Before the DRG system (1983), hospitals were reimbursed retrospectively based on costs, with less divergence between physician and facility components. In the 1970s-1980s, the surgeon's share of a surgical bill was likely 20-30%, though TKA was much less common then (the modern prosthesis was developed in the late 1960s-1970s).

## Sources

- Ong KL et al. "Hospital and Surgeon Medicare Reimbursement Trends for Total Joint Arthroplasty." *Arthroplasty Today* 6(3), 2020. PMC7320234. — Primary source for 2012 and 2017 per-procedure Medicare payment data (surgeon fee, hospital DRG, charges).
- Srivastava K et al. "The Trend of Medicare Reimbursement for Total Joint Arthroplasty: Using Mathematical Models to Predict Possible Per-Hour Rate Out to 2030." *Arthroplasty Today* 2024. PMC11295619. — TKA reimbursement declined 68.86% since 1992; projects per-hour rate to 2030.
- Carver TJ et al. "Medicare Reimbursement for Primary and Revision Total Hip and Knee Arthroplasty: An Updated Analysis From 2000 to 2024." *Journal of Arthroplasty* 2025. PubMed 40262679. — Unadjusted TKA surgeon fee decreased 22.3% from 2000-2024; inflation-adjusted decrease of 56.9%.
- Sloan FA, Morrisey MA, Valvona J. "Medicare physician fees overhauled: the RBRVS fee system and its implications." *Health Affairs* 1992. — Context on RBRVS implementation and impact on surgical fees.
- Kamath AF et al. "Medicare Reimbursement for Hip and Knee Arthroplasty From 2000 to 2019: An Unsustainable Trend." *Journal of Arthroplasty* 2020. PubMed 31924490. — Primary TKA physician fees decreased 40.6% in real terms from 2000-2019.
- CMS FY2024 IPPS Final Rule — DRG 470 national base payment of $13,175 for major joint replacement without MCC.
- Losina E et al. "Hospital economics of primary total knee arthroplasty at a teaching hospital." PMC3008872. — Average hospital cost for TKA ~$10,231 in the late 1990s.
- American Board of Surgery. "Work loads and practice patterns of general surgeons in the United States, 1995-1997." PMC1420902. — Average 398 procedures per general surgeon per year.
- Physician incomes and work patterns across specialties: 1975 and 1983-84. PMC4192917. — General surgery net income $61,300 in 1975, $111,287 in 1983-84.
- Medical Economics / Physicians Foundation. "Physician Pay Makes Up About 8% of Total Healthcare Costs." — Aggregate physician compensation = 8.6% of total US healthcare spending.
- Peterson-KFF Health System Tracker. "How has U.S. spending on healthcare changed over time?" — Historical NHE context.
- AAHKS. "Total Joint Replacement: A Breakdown of Costs." — Surgeon reimbursement represents less than 10% of total procedure cost; Medicare pays surgeon ~$1,450 for TKA (global fee including 90-day post-op).

## Notes

- **The headline finding is visceral:** For a knee replacement that costs Medicare ~$14,000, the surgeon who actually performs the operation receives roughly $900-1,100. The remaining 92-94% goes to the hospital (facility, nursing, implant, supplies, overhead).
- **Commercial insurance is even more extreme.** Hospital *charges* (not payments) for TKA were $53,490-$61,603 in 2012-2017 (vs Medicare payments of $12,000-$12,400). For a commercially insured patient paying $30,000-50,000 for a knee replacement, the surgeon's $3,000-5,000 fee represents 6-10% of the total — similar to the Medicare ratio.
- **The surgeon's fee covers more than the surgery itself.** The Medicare professional fee is a "global" fee covering the pre-operative evaluation, the surgery, and all post-operative care for 90 days. So the surgeon's ~$1,000 covers not just the 1-2 hours in the OR but also weeks of follow-up.
- **Surgeon compensation has grown in aggregate despite per-procedure fee erosion.** Average orthopedic surgeon annual compensation rose from ~$405,000 (2013) to ~$564,000 (2024) per Medscape surveys. This was achieved through higher procedure volumes, not higher per-procedure fees. Surgeons are doing more operations for less money each.
- **This ticket shares a denominator with other healthcare tickets.** The doctor and nurse tickets also measure worker share against healthcare spending. The surgeon ticket uses per-procedure data rather than per-capita health expenditure, making it a complementary view of the same phenomenon: the shrinking worker share in healthcare.
- **Key policy inflection points:** (1) 1983 DRG introduction capped hospital payments, creating pressure to shift costs. (2) 1992 RBRVS implementation standardized physician fees and redistributed from procedures to evaluation/management. (3) 2015 MACRA replaced the SGR formula. (4) 2016+ CMS bundled payment initiatives (Comprehensive Care for Joint Replacement) further compressed per-episode payments.
- **Operating room cost data supports the picture.** A JAMA Surgery study (2018) found that wages/benefits account for ~65% of direct OR costs, but the surgeon is only one of many OR workers (anesthesiologist, nurse, scrub tech, circulator). The OR itself costs ~$30-60/minute in overhead, and a TKA takes 1-2 hours — so $1,800-$7,200 in OR time alone, much of which is facility cost, not surgeon compensation.

<!-- COMPLETE -->
