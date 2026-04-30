# Childbirth (Midwife-Attended) — Certified Nurse-Midwife

## Summary

The midwife consistently captures 61–77% of what the customer pays — one of the highest fundamental worker ratios in the dataset. This is because the out-of-hospital birth model (home birth or birth center) has inherently minimal overhead: no hospital facility, no large administrative staff, no billing department. The ratio peaked around 2000 (~77%) when CNM salaries were rising faster than birth fees, then gradually declined to ~61% by 2024 as professionalization costs (malpractice insurance, credentialing, compliance) grew. For comparison, the OB-GYN delivering the same baby in a hospital captures only ~15% of the customer cost — the hospital system absorbs the rest.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1987 | ~40,000 | 1,548 | per birth (global fee) | ~40 | 64.6 | low |
| 1990 | 45,000 | 1,650 | per birth (global fee) | ~40 | 68.2 | med |
| 1995 | ~52,500 | 1,780 | per birth (global fee) | ~40 | 73.7 | low |
| 2000 | ~61,000 | 1,980 | per birth (global fee) | ~40 | 77.0 | low |
| 2005 | ~72,000 | 2,430 | per birth (global fee) | ~40 | 74.1 | low |
| 2010 | ~84,000 | 2,960 | per birth (global fee) | ~40 | 70.9 | low |
| 2012 | 89,600 | 3,150 | per birth (global fee) | ~40 | 71.1 | med |
| 2015 | 93,610 | 3,620 | per birth (global fee) | ~40 | 64.6 | med |
| 2018 | 106,910 | 4,080 | per birth (global fee) | ~40 | 65.5 | med |
| 2021 | ~118,000 | 4,650 | per birth (global fee) | ~40 | 63.4 | med |
| 2024 | 128,110 | 5,240 | per birth (global fee) | ~40 | 61.1 | med |

### OB-GYN / Hospital Comparison (same service, different model)

| Year | OB-GYN Comp (nominal $) | Hospital Birth Cost (nominal $) | Deliveries/Year | OB-GYN Ratio (%) | Midwife Ratio (%) |
|------|------------------------|---------------------------------|-----------------|-------------------|-------------------|
| 1990 | ~180,000 | ~4,000 | ~150 | 30.0 | 68.2 |
| 2000 | ~230,000 | ~6,000 | ~150 | 25.6 | 77.0 |
| 2010 | ~280,000 | ~10,000 | ~150 | 18.7 | 70.9 |
| 2021 | ~330,000 | 13,562 | ~150 | 16.2 | 63.4 |
| 2024 | ~355,000 | ~15,500 | ~150 | 15.3 | 61.1 |

## Methodology

**Ratio formula:** (CNM annual compensation / births attended per year) / customer cost per birth

**Worker compensation:** For CNM salary, used BLS Occupational Employment Statistics (SOC 29-1161) where available (2012 onward). Prior to 2012, BLS grouped nurse midwives with registered nurses, so earlier figures rely on ACNM membership surveys (1990 data: $45,229 mean for experienced full-time CNMs) with interpolation between known data points using a 3.2% annual growth rate derived from the 1990-to-2012 trajectory.

**Customer cost proxy:** Total "global fee" for a midwife-attended out-of-hospital birth (home birth or birth center). This fee includes all prenatal care (~10-15 visits), the birth itself, and postpartum care/newborn checks. Key data points: Anderson & Anderson surveys reported nominal fees of $1,548 (1987) and $1,711 (1991) from 57 midwifery practices in 29 states, and $1,828 nominal (1998) from 54 practices in 26 states. The 2021 PMC study (Bovbjerg et al., 129 practices, 49 states) found an average global fee of $4,650 (population-weighted: $5,135). Intermediate years interpolated at ~4.1% annual growth, which is the observed rate from 1998 to 2021.

**Why this proxy:** The global fee is the most direct measure of "what the customer actually pays" for midwife-attended birth. It's a flat fee covering the entire episode of care, making it a clean customer-cost metric. Unlike hospital billing, which fragments into facility fees, physician fees, lab fees, anesthesia, etc., the midwife model bundles everything into one price.

**Births per midwife per year:** Estimated at 40 for a full-time independent home birth/birth center practice. This is consistent with UK caseload midwifery data (34-36 women/year), US practice anecdotes (~3-5 births/month for solo practitioners), and a cross-check: at 40 births × $5,200 fee in 2024 = $208,000 revenue; minus ~$75,000 estimated overhead (malpractice insurance $20-30K, supplies $500/birth, assistant, car, continuing ed) = ~$133,000 net income, which closely matches the BLS mean CNM salary of $132,050.

**OB-GYN comparison data:** OB-GYN salaries from Medscape Physician Compensation Reports and BLS data (2024 BLS mean: $281,130; Medscape 2024-2025 reports: $350-375K total compensation). Hospital birth costs from HCCI, FAIR Health, and PMC comparative data. OB-GYN deliveries per year estimated at 150, consistent with industry range of 100-200.

**Important caveat on BLS salary data:** The BLS CNM salary reflects a mix of practice settings — the majority of CNMs work in hospitals, not independent home birth practices. However, the cross-check above shows that the BLS salary closely approximates the net income of an independent home birth midwife, making it a reasonable proxy across the time range.

## Sources

- ACNM 1990 Annual Membership Survey (via ScienceDirect): Mean annual income $45,229 for experienced full-time CNMs, $40,504 for new CNMs
- Anderson & Anderson, "The cost-effectiveness of home birth," Journal of Nurse-Midwifery, 1999: Average home birth charge $1,548 (1987), $1,711 (1991)
- Bovbjerg et al., "The Cost of Home Birth in the United States," Int. J. Environ. Res. Public Health, 2021 (PMC8507766): Average global fee $4,650, population-weighted $5,135; Anderson data inflation-adjusted to 2021 dollars ($3,413 for 1991, $3,039 for 1998)
- BLS Occupational Employment and Wage Statistics, SOC 29-1161 (Nurse Midwives): 2012 median $89,600; 2015 mean $93,610; 2017 mean $103,640; 2018 mean $106,910; 2023 mean $131,570; 2024 median $128,110 / mean $132,050
- Health Care Cost Institute, "The Price of Childbirth in the U.S. Tops $13,000 in 2020": Vaginal delivery average price $11,453 (2020)
- PMC comparative data: Hospital vaginal birth $13,562, birth center $8,309, home birth $4,650 (2021)
- GAO-23-105861, "Midwives: Information on Births, Workforce, and Midwifery Education" (2023): ~4 midwives per 1,000 live births in US; 12% of births midwife-attended (2021)
- AMCB Certification Data (Thumm 2023, via Wiley): 12,997 CNMs/CMs in US (2020)
- Midwifery Business Consultation: Practice overhead estimates, malpractice insurance $15,000-$40,000/year, supplies $500-$1,000/birth

## Notes

- **This ticket is a natural experiment.** The midwife and the OB-GYN are doing essentially the same job for low-risk births — catching a baby. The midwife captures ~4x the share of the customer cost that the OB-GYN does. The difference is entirely structural: the hospital system layers on facility fees, administrative overhead, billing infrastructure, and liability costs that dwarf the physician's compensation.

- **The midwife earns less in absolute terms** ($128K vs $355K), but delivers a service at 1/3 the price while keeping a much larger share. If you measured "value delivered to the worker per dollar the customer spends," midwifery is one of the most efficient service models in the dataset.

- **The ratio peaked around 2000** (~77%) during a period when CNM salaries were growing rapidly (professionalization, expanded scope of practice) but home birth fees had barely budged from 1990s levels (~$1,800-2,000). After 2000, home birth fees accelerated — partly because of rising malpractice insurance costs that got passed to customers, partly because of growing demand and mainstream acceptance.

- **Midwifery was nearly eliminated in the US by the 1960s** (AMA lobbying). Its resurgence since the 1980s means meaningful data only begins around 1987. The ACNM had just ~860 members in 1975. By 2000 there were ~8,000 CNMs; by 2020, ~13,000.

- **The 40 births/year estimate is the key assumption.** If actual caseloads are closer to 30 (some solo practitioners), the ratio increases to ~75-95%. If closer to 50 (busy practices), it drops to ~50-62%. The cross-check against BLS salary and practice economics supports 40 as a reasonable central estimate, but this number is not directly measured in any large-scale US dataset.

- **Most CNMs work in hospitals**, where the economic model is completely different. Hospital-employed CNMs attending 100+ births per year would have a per-birth ratio of ~8-10% against hospital charges — similar to or lower than OB-GYNs. The high ratio in this analysis is specific to the out-of-hospital midwife model (home birth / birth center).

- **Insurance coverage for home birth remains patchy.** Only 20.9% of midwifery practices charged differently for insured vs. uninsured clients (2021 data). The global fee is largely a cash-pay market, which is part of why it has stayed relatively affordable — there's no insurance-inflated pricing layer.

<!-- COMPLETE -->
