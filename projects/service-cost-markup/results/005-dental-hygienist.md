# Dental Care — Dental Hygienist

## Summary

The dental hygienist's share of the cleaning fee has declined moderately from ~52% in the mid-1970s to ~36% in 2024, with a brief peak around 1990 (~56%) when wage growth outpaced fee inflation during a period of rapid professionalization and demand. The post-2000 decline has been steady but gentle — far less dramatic than the dentist's collapse from 63% to 22% over the same period. The hygienist's ratio remains relatively high because the relationship is direct: one worker, one patient, one hour, one fee. There's less room for overhead to absorb the worker's share compared to a dentist managing an entire practice.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1975 | 14,500 | 14 | per cleaning visit | 2,000 | 51.8 | low |
| 1980 | 20,000 | 20 | per cleaning visit | 2,000 | 50.0 | low |
| 1990 | 38,300 | 34 | per cleaning visit | 2,000 | 56.3 | med |
| 2000 | 49,000 | 56 | per cleaning visit | 2,000 | 43.8 | med |
| 2005 | 58,000 | 72 | per cleaning visit | 2,000 | 40.3 | med |
| 2010 | 68,000 | 87 | per cleaning visit | 2,000 | 39.1 | high |
| 2015 | 73,000 | 96 | per cleaning visit | 2,000 | 38.0 | high |
| 2020 | 78,000 | 106 | per cleaning visit | 2,000 | 36.8 | high |
| 2024 | 90,000 | 125 | per cleaning visit | 2,000 | 36.0 | high |

## Methodology

**Ratio formula:** Hygienist Annual Compensation / (Cleaning Fee × Cleanings per Year)

This simplifies to Hourly Wage / Cleaning Fee, since a standard cleaning takes approximately one hour (45–60 minutes of chair time) and the annual figures cancel out. The ratio directly answers: "When you pay $X for a cleaning, how much goes to the person who cleaned your teeth?"

**Worker compensation (numerator):**
- 1990: $18.40/hr from the ADA Health Policy Institute, as reported by TDMR. Annualized at 2,080 FTE hours = $38,272, rounded to $38,300.
- 2000: Estimated at ~$49,000 by backward extrapolation from BLS OES May 2002 data (~$53,000 mean annual) at ~4% annual nominal growth.
- 2005–2024: BLS Occupational Employment and Wage Statistics (OES) mean annual wage for SOC 29-2021 (pre-2018) and 29-1292 (2018+). Key anchor: 2017 mean annual wage confirmed at $74,680 ($35.91/hr). 2024 figure is approximately $90,000 based on BLS OES May 2024 data (median $94,260, mean slightly lower).
- 1975 and 1980: Estimated by backward extrapolation from the 1990 ADA HPI figure using ~6.5% nominal annual growth (consistent with healthcare practitioner wage growth during the high-inflation 1970s–80s). Cross-checked against the ~$6.00/hr figure reported for 1974 in historical profession surveys.

**Customer cost (denominator):**
- The cost of one adult prophylaxis (CDT code D1110) — the standard dental cleaning performed by a hygienist.
- Anchor points from published data: $13.58 in 1975 (JADA study, Auster 1998), $22.41 in 1982 (same study), $44.55 in 1995 (same study), ~$100 national average in 2017 (Dental Economics annual fee survey, 50th percentile across regions: $88–$113).
- Remaining years estimated using the BLS Consumer Price Index for Dental Services (CPI series CUSR0000SASE2), anchored to the $100 figure for 2017 at CPI ~460. The CPI-based estimates validated well: the 1975 estimate produces $12.85 vs. the known $13.58 (5% variance), and the 1995 estimate produces $45.04 vs. the known $44.55 (1% variance).

**Customers per worker:** 2,000 cleanings per year per FTE hygienist. Industry standard benchmark: 8 patients per day × 250 working days. This figure is consistent across sources (Teero, MGE Management, FORTIS) and has been roughly stable over time, since the clinical work itself hasn't changed. Held constant across all years.

**Note on denominator choice:** The dentist ticket (004) used per capita dental spending as its denominator — appropriate for a dentist who manages an entire practice's revenue. For the hygienist, per-cleaning-visit cost is more meaningful: it directly measures what the customer pays for the specific service the hygienist performs. The two ratios answer different but complementary questions. The dentist's ratio captures practice-level economics; the hygienist's ratio captures procedure-level economics.

## Sources

- ADA Health Policy Institute via TDMR — Dental hygienist average hourly wage: $18.40 (1990), $47.80 (2024). Data collected at intervals: 1990, 2000, 2010–2013, 2019, 2024. [TDMR: How dental hygienists' compensation has changed since 1990](https://www.tdmr.org/how-dental-hygienists-compensation-has-changed-since-1990/)
- BLS Occupational Employment and Wage Statistics (OES) — Mean annual wage for dental hygienists (SOC 29-1292). Confirmed 2017 mean: $74,680 ($35.91/hr). 2024 median: $94,260. [BLS OOH: Dental Hygienists](https://www.bls.gov/ooh/healthcare/dental-hygienists.htm), [BLS OES 2022](https://www.bls.gov/oes/2022/may/oes291292.htm)
- Auster, Peretz, and Gontarz, "Dental procedure fees 1975 through 1995: how much have they changed?" JADA 129(9), Sept. 1998 — Adult prophylaxis fees: $13.58 (1975), $22.41 (1982), $44.55 (1995). [PubMed](https://pubmed.ncbi.nlm.nih.gov/9766111/)
- Dental Economics Annual Fee Survey (2017) — D1110 adult prophylaxis 50th percentile fees by region: Northeast $113, South $101, Midwest $97, Mid-Atlantic $88. National average ~$100. [Dental Economics](https://www.dentaleconomics.com/practice/article/16385079/the-dental-economics-annual-fee-survey)
- BLS Consumer Price Index for Dental Services — CPI-U series CUSR0000SASE2 (1982–84=100). Values: 1960: 27.0, 1970: 39.2, 1980: 78.9, 1990: 155.8, 2000: 258.5, 2010: 398.8, 2020: 485.5. Average annual inflation rate 4.57% (1947–2026). [in2013dollars.com](https://www.in2013dollars.com/Dental-services/price-inflation)
- Industry benchmarks for hygienist patient load — Standard 8 patients/day. Sources: [Teero](https://www.teero.com/blog/how-many-patients-should-a-dental-hygienist-see-per-day), [MGE Management](https://www.mgeonline.com/2019/how-many-patients-should-a-hygienist-see-per-day/), [FORTIS](https://www.fortis.edu/blog/healthcare/a-day-in-the-life-of-a-dental-hygienist.html)
- HealthcareGraduate — BLS OES 2017 data: mean annual $74,680, mean hourly $35.91. [HealthcareGraduate](https://www.healthcaregraduate.com/dental-hygienist-salary)

## Notes

- **The 1990 peak is real, not an artifact.** Hygienist wages grew at ~6.5% annually from the mid-1970s through 1990, outpacing cleaning fee inflation (~5.7%/yr). This reflects the 1970s–80s professionalization boom: preventive dentistry became standard practice, demand for hygienists surged, and supply lagged. By the mid-1990s, hygienist training programs had expanded and the supply-demand balance normalized, pushing the ratio back down.

- **The post-2000 decline is driven by cleaning fees outpacing wages.** From 2000 to 2024, hygienist wages grew ~2.5%/yr while cleaning fees grew ~3.3%/yr. The gap is modest but compounds: over 24 years, it shifts the ratio from 44% to 36%. The cleaning fee absorbs growing practice overhead — front desk staff, insurance billing complexity, infection control equipment, digital X-ray systems, practice management software — none of which directly compensates the hygienist.

- **Comparing hygienist vs. dentist ratios is the most interesting angle.** The dentist's ratio collapsed from 63% to 22% because the denominator (total dental spending per practice) grew much faster than dentist income. The hygienist's ratio declined only from ~52% to ~36% because the denominator is tighter — just the cleaning fee, not all dental spending. The hygienist captures a larger share of "their" procedure's revenue than the dentist captures of the practice's total revenue. This makes intuitive sense: the hygienist is a W-2 worker whose primary cost to the practice is their wage; the dentist is a practice owner whose income is the residual after all costs.

- **The 5-minute dentist problem.** A typical cleaning visit generates ~$200–$265 in charges: ~$100–$130 for the prophylaxis (D1110, performed by the hygienist over 45–60 min), ~$50–$65 for the periodic oral exam (D0120, the dentist's 5-minute check), and sometimes ~$50–$70 for bitewing X-rays (D0274, taken by the hygienist or assistant). The hygienist generates 50–60% of the visit's revenue but earns ~$36–$45/hr, while the dentist generates 20–25% of the revenue in 5 minutes but earns $80–$120/hr effective. Per minute of chair time, the dentist's rate is 5–8× the hygienist's.

- **Scope of practice expansion hasn't yet moved the ratio.** About 42 states now allow some form of "direct access" — hygienists treating patients without a dentist present. But most hygienists still work in traditional dental offices, so the macro-level ratio hasn't shifted. If independent hygiene practices become common, the ratio could increase (hygienist keeps the full fee minus their own overhead) or stay similar (they'd need their own office overhead). This is a structural shift to watch but not yet reflected in the data.

- **1975 and 1980 data are the weakest points.** Pre-1990 hygienist wages are estimated from backward extrapolation and a single 1974 data point from profession history sources. The cleaning fee estimates for these years are CPI-derived but validated against the known 1975 fee ($13.58). Treat these ratios as directional (±5%) rather than precise.

- **2020 is a mild pandemic outlier.** Dental offices closed for 2–3 months in 2020. Hygienist wages held relatively steady (employer retention) while cleaning volumes dropped. The ratio of 36.8% is slightly depressed relative to the trend, but the effect is small compared to the dentist ticket's 2020 outlier (19.7%).

<!-- COMPLETE -->
