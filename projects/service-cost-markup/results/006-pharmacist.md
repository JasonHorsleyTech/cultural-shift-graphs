# Pharmacy — Pharmacist

## Summary

The pharmacist's share of every prescription dollar has collapsed from roughly 30–36% in the 1960s–1980s to about 9% today. The steepest decline occurred in the late 1980s and 1990s — precisely when PBMs consolidated power, blockbuster drugs sent prices soaring, and chain pharmacies replaced independents. Since 2000, the ratio has slowly ground lower as drug spending growth continues to outpace pharmacist salary gains.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | 8,500 | 23,478 | Rx spending per pharmacist | 1 | 36.2 | low |
| 1970 | 13,000 | 44,000 | Rx spending per pharmacist | 1 | 29.5 | low |
| 1980 | 25,500 | 77,419 | Rx spending per pharmacist | 1 | 32.9 | low-med |
| 1990 | 45,000 | 230,286 | Rx spending per pharmacist | 1 | 19.5 | med |
| 2000 | 65,000 | 576,190 | Rx spending per pharmacist | 1 | 11.3 | med-high |
| 2010 | 113,000 | 920,364 | Rx spending per pharmacist | 1 | 12.3 | high |
| 2020 | 128,000 | 1,138,730 | Rx spending per pharmacist | 1 | 11.2 | high |
| 2024 | 137,000 | 1,531,148 | Rx spending per pharmacist | 1 | 8.9 | high |

### Per-prescription decomposition (supplementary)

The aggregate ratio above can be decomposed into cost-per-prescription × prescriptions-per-pharmacist:

| Year | Avg Cost/Rx ($) | Est. Rx/Pharmacist | Total Rx (B) | Pharmacists |
|------|----------------|--------------------|-------------|-------------|
| 1960 | ~3.00 | ~7,800 | ~0.9 | ~115,000 |
| 1970 | ~3.85 | ~11,400 | ~1.4 | ~125,000 |
| 1980 | ~8.40 | ~9,200 | ~1.4 | ~155,000 |
| 1990 | 22.00 | ~10,500 | ~1.8 | ~175,000 |
| 2000 | 46.00 | ~12,500 | ~2.6 | ~210,000 |
| 2010 | 63.40 | ~14,500 | ~4.0 | ~275,000 |
| 2020 | 82.10 | ~13,900 | ~4.4 | ~315,000 |
| 2024 | 95.30 | ~16,100 | ~4.9 | ~305,000 |

## Methodology

**Ratio formula:** Pharmacist annual salary / (Total U.S. retail prescription drug spending / Number of pharmacists)

This gives the share of total prescription spending that goes to pharmacist compensation. The "Customer Cost" column in the main table is total retail Rx spending divided by the number of pharmacists — the total prescription revenue flowing through each pharmacist's hands.

**Pharmacist salary sources:**
- 1960: Estimated from professional earnings benchmarks. Physicians earned ~$25,000; pharmacists historically earned 30–35% of physician income. Cross-referenced with general professional salary levels for 5-year degree holders in 1960.
- 1970: Back-calculated from documented 1990 salary ($45,000) and 1999 BLS figure ($60,090) using estimated annual growth rates of 7% (1970s, high inflation), 6% (1980s), 3% (1990s). Yields ~$13,000.
- 1980: Back-calculated from "pharmacist salaries were $80,000 in today's dollars" (Student Doctor Network, circa 2019). CPI adjustment (2019→1980) yields ~$25,500. Cross-checked against growth rate back-calculation from BLS 1999 data.
- 1990: Documented. PubMed study (PMID 1570786) reports men $46,661, women $42,668. Blended ~$45,000.
- 2000: Interpolated from BLS 1999 ($60,090) with estimated 4% annual growth during early pharmacist shortage. ~$65,000.
- 2010: BLS OES, mean annual wage ~$113,000.
- 2020: BLS OES, mean annual wage ~$128,710.
- 2024: BLS OES, mean annual wage $137,210.

**Total retail prescription drug spending** comes from CMS National Health Expenditure (NHE) historical data. The "retail prescription drugs" category includes community/retail pharmacies and mail-order, but excludes hospital drug spending (which falls under "hospital care"). Key figures: $2.7B (1960), $5.5B (1970), $12B (1980), $40.3B (1990), $121B (2000), $253.1B (2010), $358.7B (2020), $467B (2024).

**Number of pharmacists** is the weakest data point for early decades:
- 2008–2024: BLS Occupational Employment and Wage Statistics (OEWS). Direct counts: 266,410 (2008), 286,400 (2012), 312,500 (2016), 311,200 (2019), ~305,000 (2024).
- 2000: Bureau of Health Professions projected 196,000; BLS reported 230,000 in 2002. Used ~210,000 as a midpoint.
- 1990: Estimated ~175,000 based on BHP model's 1991 baseline extrapolation.
- 1960–1980: Estimated from NCHS "Health Manpower Source Book" references, pharmacy graduate trends, and backward extrapolation from known 2000 count. Capitation grants in the 1970s expanded pharmacy school enrollment; grants expired in 1980. Estimates: ~115,000 (1960), ~125,000 (1970), ~155,000 (1980).

**Why this proxy over alternatives:** Using total retail Rx spending per pharmacist rather than individual prescription prices avoids the thorny question of what counts as "one prescription" (30-day vs. 90-day, new vs. refill). It also captures the full economic picture: every dollar spent on prescriptions, from all payers (out-of-pocket, private insurance, Medicare, Medicaid), measured against the pharmacist's salary. Since the ratio divides two nominal dollar amounts from the same year, inflation cancels out.

**Why "Customers/Worker" = 1:** The Customer Cost column already represents the total cost normalized per pharmacist (total spending / pharmacists), so no additional multiplier is needed. The per-prescription decomposition table provides the breakout for anyone who wants to see volume vs. price dynamics.

## Sources

- CMS National Health Expenditure Historical Data — total retail prescription drug spending 1960–2024. https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data
- NorthwestPharmacy historical spending timeline citing CMS NHE data: $2.7B (1960), $5.5B (1970), $12B (1980), $40.3B (1990), $121B (2000), $253.1B (2010), $358.7B (2020). https://www.northwestpharmacy.com/special-features/high-drug-prices/when-did-prescriptions-become-so-expensive-in-the-us
- BLS Occupational Employment and Wage Statistics (OEWS), Pharmacists (SOC 29-1051). Mean annual wages and employment counts 2000–2024. https://www.bls.gov/oes/current/oes291051.htm
- Mott DA. "Pharmacists' compensation and work patterns, 1990-91." PubMed PMID: 1570786. Documented 1990 salary: men $46,661, women $42,668.
- Mott DA. "Trends in full-time pharmacists' labor market characteristics." PubMed PMID: 10665246. Longitudinal labor market trends 1968–1996 from CPS data.
- Drug Channels. "Pharmacist Salaries and Employment in 2024." Employment trends, retail vs. hospital split, 2024 salary $137,210. https://www.drugchannels.net/2025/06/pharmacist-salaries-and-employment-in.html
- Trends in the Pharmacist Workforce and Pharmacy Education. PMC6418852. Historical pharmacist supply: 196K (2000), 230K (2002), 243K (2006), 286K (2012), 312K (2016). https://pmc.ncbi.nlm.nih.gov/articles/PMC6418852/
- Examining the Pharmacist Labor Supply in the United States. PMC6789639. BLS employment data: 266,410 (2008), 309,330 (2017). https://pmc.ncbi.nlm.nih.gov/articles/PMC6789639/
- PMC4106630 (Trends in Pharmaceutical Expenditures). Average cost per Rx: $22 (1990), $46 (2000). Prescriptions per capita: 7.3 (1993) to 10.4 (2000). https://pmc.ncbi.nlm.nih.gov/articles/PMC4106630/
- Bureau of Health Professions supply projections: 196,011 (2000), 224,524 (2010), 249,086 (2020). https://www.japha.org/article/S0003-0465(15)32980-3/abstract
- Prescription Drug Payment Policy: Past, Present, and Future. PMC4193453. https://pmc.ncbi.nlm.nih.gov/articles/PMC4193453/
- PBM history and market evolution. Wikipedia and Edgeworth Economics. https://en.wikipedia.org/wiki/Pharmacy_benefit_management / https://www.edgewortheconomics.com/antitrustprescription-evolution-of-PBMs
- Prescription drug CPI inflation data 1947–2026. https://www.in2013dollars.com/Prescription-drugs/price-inflation
- Student Doctor Network forums. Historical salary comparison thread (circa 2019): "1980 pharmacist salaries were $80,000 in today's dollars." https://forums.studentdoctor.net/threads/salary-and-tuition-numbers-in-1990-verse-today.1374889/

## Notes

- **The PBM inflection is real and dramatic.** PBMs didn't exist before 1968 (first one: Pharmaceutical Card System). By the late 1980s they were a "major force." By 2024, three PBMs (CVS Caremark, Express Scripts, OptumRx) control 80% of the market covering 275 million Americans across a ~$600B market. The pharmacist's ratio collapse from ~33% to ~12% between 1980 and 2000 maps almost perfectly onto PBM consolidation.

- **The 1970s were peak pharmacist.** Drug prices grew slower than general inflation in the 1970s (Rx CPI grew ~53% vs. ~112% general CPI), while pharmacist salaries kept up with inflation. Result: pharmacists briefly captured a higher share (~33%) of the Rx dollar. Then the 1980s changed everything.

- **The 1980–1990 decade was the Great Collapse.** Total Rx spending tripled ($12B → $40B) while pharmacist salaries less than doubled ($25.5K → $45K). The ratio went from 33% to 20% in a single decade. Contributing factors: introduction of blockbuster drugs (Prozac 1987, Prilosec 1989), PBM growth, shift from independent to chain pharmacy, and the beginning of third-party payment dominance (out-of-pocket share dropped from 70% in 1988 to 50% by mid-1990s).

- **Chain vs. independent matters enormously.** In 1960, most pharmacies were independently owned; the pharmacist-owner captured much more of the prescription dollar (including profit margin, not just salary). The shift to chain pharmacy (CVS, Walgreens, Rite Aid) meant pharmacists became employees. Their salary is now a cost to be minimized rather than a profit to be maximized. Pharmacy owner earnings in 2023 were ~$190K for single-pharmacy owners vs. $135K average for employed pharmacists.

- **Pharmacist salary has been remarkably stagnant since 2010.** From $113K (2010) to $137K (2024) is 1.4% annual growth — below inflation for most of that period. Meanwhile, total Rx spending nearly doubled ($253B → $467B). The pharmacist's share continues to erode.

- **Retail pharmacy employment is collapsing.** Drug Channels reports retail pharmacist employment dropped to its lowest level since tracking began (~170K in 2024, down from a peak near 200K). Hospital pharmacy is growing (+7.3% in 2024), but total pharmacist employment peaked around 2019 (~311K) and has declined to ~305K.

- **Pre-1990 data is rough.** Pharmacist workforce counts before 1990 are estimated from NCHS health manpower reports and backward extrapolation. Salary data before 1990 is derived from CPI adjustments and growth rate modeling. The 1960–1970 rows should be treated as directional, not precise. The story is robust even with ±20% uncertainty on those early numbers — the collapse from ~30%+ to ~12% is unmistakable regardless.

- **The ratio may be approaching a floor.** At 8.9% in 2024, the pharmacist's share is approaching the point where the salary itself is under pressure. Retail pharmacy already struggles to attract pharmacists (hence the shortage that drove 2000s salary spikes). If the ratio drops further, pharmacist compensation will either decouple from retail Rx economics (funded by clinical services, not dispensing) or pharmacy models will fundamentally change.

<!-- COMPLETE -->
