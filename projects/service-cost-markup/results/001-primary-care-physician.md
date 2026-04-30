# Healthcare — Primary Care Physician

## Summary

The primary care physician's share of total healthcare spending has collapsed from roughly 8% in 1960 to 1.3% in 2024 — an 83% decline. The steepest drop occurred between 1960 and 1975, driven by the post-Medicare explosion in healthcare spending and a simultaneous shrinkage of the GP workforce as medicine specialized. Since 2000, the ratio has stabilized at historically low levels around 1.3–1.8%, as PCP compensation growth has roughly matched the rate at which healthcare spending per capita is growing — but the damage was already done.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | $18,000 | $146 | NHE per capita | 1,582 | 7.8 | low |
| 1970 | $32,000 | $355 | NHE per capita | 2,095 | 4.3 | med |
| 1975 | $44,800 | $627 | NHE per capita | 2,000 | 3.6 | high |
| 1980 | $63,000 | $1,108 | NHE per capita | 1,917 | 3.0 | high |
| 1984 | $73,579 | $1,616 | NHE per capita | 1,830 | 2.5 | high |
| 1990 | $100,000 | $2,843 | NHE per capita | 1,700 | 2.1 | med |
| 2000 | $130,000 | $4,855 | NHE per capita | 1,503 | 1.8 | med |
| 2010 | $175,000 | $8,394 | NHE per capita | 1,485 | 1.4 | med |
| 2020 | $242,000 | $12,637 | NHE per capita | 1,506 | 1.3 | high |
| 2024 | $287,000 | $15,474 | NHE per capita | 1,460 | 1.3 | high |

## Methodology

**Ratio formula:** PCP annual compensation / (NHE per capita x population per PCP)

This measures: of all the healthcare dollars spent by a PCP's patient panel, what fraction actually reaches the PCP as compensation? The remainder goes to specialists, hospitals, pharmaceuticals, insurance administration, medical devices, public health programs, and the massive administrative apparatus.

**Worker compensation:** General practitioner / family practice physician net income (after practice expenses, before taxes). Sources vary by era:
- 1960: Estimated by backcasting from 1975 survey data using observed 7% nominal annual growth rates and cross-referencing 1950s physician income data (~$11,000 all-physician average). Low confidence — could plausibly be $14,000–$25,000.
- 1970: Backcast from 1975 anchor ($44,800) at 6.8% compound annual growth (the rate observed 1970–1980).
- 1975, 1984: National Physicians' Practice Costs and Income Survey (HCFA/CMS). High confidence — direct survey data for general practice.
- 1980: AMA data reported in NCBI (GP/pediatrician range floor at $63,000). High confidence.
- 1990: Extrapolated from 1989 AMA data ($95,900 family physician average). Medium confidence.
- 2000: Extrapolated from 1999 Medical Economics Survey ($128,000 family practice net income). Medium confidence.
- 2010: Estimated from MGMA primary care data ($214,100 in 2008, which includes higher-paid internists) adjusted down ~18% for family medicine specifically, and cross-referenced with Medscape 2015 data ($195,000). Medium confidence.
- 2020, 2024: Medscape Physician Compensation Reports ($242,000 and $287,000 for primary care). High confidence.

**Customer cost proxy:** Total National Health Expenditure (NHE) per capita from CMS National Health Expenditure Accounts. This captures all healthcare spending — insurance, Medicare, Medicaid, out-of-pocket, employer contributions — in one number. It's the best available proxy for "what the customer actually pays for healthcare" because individual visit costs are meaningless when insurance obscures the true price. NHE per capita has been tracked consistently since 1960.

**Customers per worker:** U.S. resident population divided by the number of active primary care physicians (general practice/family medicine + general internal medicine). Physician counts come from CDC Health United States Table 85 (1960–2010) and AAMC/HRSA data for recent years. Post-2010 figures are estimated from workforce growth trends (~0.5–1% per year). The 2020 and 2024 estimates assume ~220,000 and ~230,000 GP/FM + general IM physicians respectively, consistent with AAMC workforce reports showing approximately 280,000 total PCPs including pediatricians.

**Why this proxy over alternatives:** Individual visit costs (copays, average billed amounts) would only capture the visible transaction and would miss the vast majority of healthcare spending that happens invisibly through premiums, taxes, and employer contributions. NHE per capita is the most honest denominator because it represents the full economic burden of healthcare on each person the PCP is nominally responsible for.

## Sources

- CMS National Health Expenditure Accounts, Historical Data (NHE per capita 1960–2024): https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data/historical
- CMS NHE Fact Sheet (2019–2024 per capita data): https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data/nhe-fact-sheet
- NCBI Health United States 2019, Table 44 — GDP, NHE, per capita amounts (1960–2018): https://www.ncbi.nlm.nih.gov/books/NBK569311/table/ch3.tab44/
- KFF National Health Expenditures per Capita, 1960–2023: https://www.kff.org/health-costs/national-health-expenditures-per-capita-1960-2023/
- CDC Health United States 2017, Table 85 — Doctors of medicine in primary care by specialty (1960–2015): https://www.cdc.gov/nchs/data/hus/2017/085.pdf
- National Physicians' Practice Costs and Income Survey, 1975 and 1983–84 (GP net income data): https://pmc.ncbi.nlm.nih.gov/articles/PMC4192917/
- NCBI — Forms and Levels of Physician Compensation (1980 AMA data): https://www.ncbi.nlm.nih.gov/books/NBK222742/
- AMA physician income data via CSMonitor 1991 (1989–1990): https://www.csmonitor.com/1991/1121/21071.html
- HSChange — Behind the Times: Physician Income, 1995–99: http://www.hschange.org/CONTENT/544/
- HSChange — Losing Ground: Physician Income, 1995–2003: http://www.hschange.org/CONTENT/851/
- MGMA primary care compensation 2008–2017 via PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC7388019/
- Medscape Physician Compensation Reports 2015–2025 (family medicine data): https://www.medscape.com/slideshow/2025-compensation-overview-6018103
- White Coat Investor — Golden Age of Medicine (historical physician salary analysis): https://www.whitecoatinvestor.com/golden-age-of-medicine/
- Student Doctor Network — Average physician salary by decade (1937–1990s): https://forums.studentdoctor.net/threads/average-physician-salary-by-decade.1139365/
- JAMA — Trends in Earnings of Health Care Professionals, 1987–2010: https://jamanetwork.com/journals/jama/fullarticle/1456053
- AAMC U.S. Physician Workforce Data Dashboard: https://www.aamc.org/data-reports/report/us-physician-workforce-data-dashboard

## Notes

- **The 1960–1970 cliff is the story.** NHE per capita grew 143% ($146 → $355) while GP income grew only ~78% ($18K → $32K). Simultaneously, the GP/FM workforce shrank 34% (88,023 → 57,948) as medicine specialized post-WWII. The PCP ratio nearly halved in a single decade. Medicare and Medicaid (1965) were the accelerant — they poured federal money into a system that routed it toward hospitals and specialists, not primary care.

- **The administrative explosion is the elephant in the room.** In 1970, the ratio of physicians to administrators in U.S. healthcare was roughly 1:1. By 2020, administrators outnumber physicians approximately 10:1. The PCP's collapsing share isn't because PCPs got poorer (their nominal income grew 16x from 1960 to 2024). It's because everything else in healthcare grew faster — administration, compliance, insurance overhead, specialist procedures, pharmaceuticals, and medical technology.

- **Customers/worker stabilized after 1980.** The population-per-PCP ratio dropped from 2,095 in 1970 (when GPs were vanishing) to about 1,500 by 2000 and has held relatively steady since. This means the post-2000 ratio decline is driven almost entirely by NHE per capita growing faster than PCP compensation — not by workforce changes.

- **The ratio may be bottoming out.** From 2010 to 2024, the ratio held remarkably steady at 1.3–1.4%. PCP compensation grew ~64% ($175K → $287K) while NHE per capita grew ~84% ($8,394 → $15,474), but the slight decline in pop/PCP partially offset this. Whether this floor holds depends on whether the healthcare spending growth rate moderates or PCP compensation catches up.

- **1960 income estimate is the weakest data point.** The 7.8% ratio for 1960 could plausibly be anywhere from 6% to 11% depending on the true GP income figure ($14K–$25K range). Even at the low end, the story is the same: a dramatic collapse from the pre-specialization era.

- **Medscape vs. AMA vs. MGMA income data are not perfectly comparable.** Medscape surveys are self-reported and tend to run lower; MGMA surveys medical groups and tends higher; AMA Socioeconomic Monitoring surveys are the historical gold standard but stopped being published in the mid-2000s. I used the best available source for each era and tried to maintain consistency within the GP/family practice specialty.

- **Why use GP/FM + general IM for the denominator?** Both serve as primary care physicians (the doctor you see for routine visits and illness). Excluding general internists would overstate the population per PCP, especially after 1970 when internal medicine grew rapidly as general practice shrank. Including pediatricians would muddy the picture because they serve a different patient population.

<!-- COMPLETE -->
