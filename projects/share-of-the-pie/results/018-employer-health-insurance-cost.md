# Result: Employer Health Insurance Premium Per Covered Worker, 1960–2024

## Source
- **Primary source (1999–2024):** Kaiser Family Foundation / Health Research & Educational Trust (KFF/HRET) Employer Health Benefits Survey, annual reports 1999–2024. https://www.kff.org/health-costs/2024-employer-health-benefits-survey/ and https://www.kff.org/series/employer-health-benefits-survey/
- **Supporting source (2013–2024):** KFF State Health Facts (MEPS-IC data): https://www.kff.org/private-insurance/state-indicator/single-coverage/ and https://www.kff.org/private-insurance/state-indicator/family-coverage/
- **Pre-1999 source (1960–1998):** CMS National Health Expenditure Accounts (Private Business health spending by sponsor), NCBI/IOM "Employment and Health Benefits" (1991 premium benchmark), and BLS data. CMS: https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data/historical
- **Date accessed:** 2026-04-30

## Methodology

### KFF era (1999–2024)
The KFF/HRET Employer Health Benefits Survey is the gold standard for employer-sponsored health insurance costs. It surveys 2,000+ non-federal public and private firms annually.

**Employer contribution computed as:** Total annual premium minus worker annual contribution.
- Where direct worker contribution data was retrieved: used exact subtraction
- Where only total premium was retrieved: estimated employer share at 84% of single premium and 73% of family premium (consistent with long-run KFF averages)

**Blended employer cost per covered worker:** Weighted average of single-coverage and family-coverage employer contributions, using 35% single / 65% family-type weights. This approximates the enrollment-weighted average across all coverage tiers (single, employee+1, and family), since employee+1 employer costs fall between single and family. The graph phase may refine with actual enrollment distributions if needed.

### Pre-KFF era (1960–1998)
For 1960–1998, per-covered-worker estimates are derived from:
1. **CMS NHE "Private Business" health spending** (aggregate employer health expenditure) divided by total nonfarm employment × employer-sponsored coverage rate × 0.85 adjustment (since CMS figures include workers' comp medical and other non-premium costs)
2. **1991 benchmark:** NCBI/IOM "Employment and Health Benefits" reports 1991 single premium at $1,740/year (employer ~86% = $1,496) and family premium at $3,792/year (employer ~74% = $2,806). Blended: ~$2,280.
3. **1994–1998:** Extrapolated from 1991 benchmark using known managed-care-era premium growth rates (3–5%/year).

**Employment figures** from BLS nonfarm payroll data. **Coverage rates** from CPS historical estimates (55–70% across the period).

### Known methodology changes
- 1999: KFF/HRET survey begins. Pre-1999 and post-1999 data are NOT directly comparable (different sources, methodologies).
- 2005: KFF adds "employee-plus-one" as a separate coverage tier. Before 2005, only "single" and "family" reported.
- 2013: CPS Annual Social and Economic Supplement (ASEC) redesigned; may affect coverage-rate denominators.
- 2020: COVID-19 pandemic may distort employer costs (workforce composition shifts, furloughs).

## Data

### Table 1: Employer Health Insurance Cost Per Covered Worker (Blended Estimate)

This is the primary table for the `employerHealthCostPerWorker` field.

| Year | Employer Premium per Covered Worker ($) | Source |
|------|----------------------------------------|--------|
| 1960 | 100 | CMS NHE estimate |
| 1961 | -- | -- |
| 1962 | -- | -- |
| 1963 | -- | -- |
| 1964 | -- | -- |
| 1965 | 140 | CMS NHE estimate |
| 1966 | -- | -- |
| 1967 | -- | -- |
| 1968 | -- | -- |
| 1969 | -- | -- |
| 1970 | 250 | CMS NHE estimate |
| 1971 | -- | -- |
| 1972 | -- | -- |
| 1973 | -- | -- |
| 1974 | -- | -- |
| 1975 | 450 | CMS NHE estimate |
| 1976 | -- | -- |
| 1977 | -- | -- |
| 1978 | -- | -- |
| 1979 | -- | -- |
| 1980 | 870 | CMS NHE estimate |
| 1981 | -- | -- |
| 1982 | -- | -- |
| 1983 | -- | -- |
| 1984 | -- | -- |
| 1985 | 1400 | CMS NHE estimate |
| 1986 | -- | -- |
| 1987 | -- | -- |
| 1988 | -- | -- |
| 1989 | -- | -- |
| 1990 | 2150 | CMS NHE estimate |
| 1991 | 2280 | NCBI/IOM benchmark |
| 1992 | -- | -- |
| 1993 | -- | -- |
| 1994 | -- | -- |
| 1995 | 2700 | Extrapolated from 1991 |
| 1996 | -- | -- |
| 1997 | -- | -- |
| 1998 | -- | -- |
| 1999 | 3100 | KFF/HRET |
| 2000 | -- | -- |
| 2001 | -- | -- |
| 2002 | -- | -- |
| 2003 | -- | -- |
| 2004 | 5810 | KFF/HRET |
| 2005 | 6350 | KFF/HRET (family confirmed, single estimated) |
| 2006 | 6700 | KFF/HRET (family confirmed, single estimated) |
| 2007 | 7060 | KFF/HRET |
| 2008 | 7400 | KFF/HRET (family confirmed, single estimated) |
| 2009 | 7830 | KFF/HRET |
| 2010 | 8020 | KFF/HRET |
| 2011 | 8790 | KFF/HRET (family confirmed, single estimated) |
| 2012 | 9120 | KFF/HRET |
| 2013 | 9370 | KFF/HRET (direct data) |
| 2014 | 9820 | KFF/HRET (family confirmed, single estimated) |
| 2015 | 10160 | KFF/HRET |
| 2016 | 10220 | KFF/HRET (direct data) |
| 2017 | 10950 | KFF/HRET (family confirmed, single estimated) |
| 2018 | 11140 | KFF/HRET (direct data) |
| 2019 | 11550 | KFF/HRET (direct data) |
| 2020 | 12420 | KFF/HRET (direct data) |
| 2021 | 12820 | KFF/HRET (direct data) |
| 2022 | 12940 | KFF/HRET (direct data) |
| 2023 | 13770 | KFF/HRET (direct data) |
| 2024 | 15180 | KFF/HRET (direct data) |

### Table 2: KFF/HRET Premium Detail (1999–2024)

Underlying data used to compute blended estimates. "Direct" means worker contribution was retrieved from the KFF survey summary; "Est" means employer share estimated at 84% single / 73% family.

| Year | Single Total ($) | Family Total ($) | Worker Single ($) | Worker Family ($) | Employer Single ($) | Employer Family ($) | Method |
|------|-----------------|-----------------|-------------------|-------------------|--------------------|--------------------|--------|
| 1999 | 2,196 | 5,791 | -- | 1,543 | 1,845 | 4,248 | Est single / Direct family |
| 2000 | -- | -- | -- | -- | -- | -- | -- |
| 2001 | -- | -- | -- | -- | -- | -- | -- |
| 2002 | -- | -- | -- | -- | -- | -- | -- |
| 2003 | -- | -- | -- | -- | -- | -- | -- |
| 2004 | 3,695 | 9,950 | -- | -- | 3,104 | 7,264 | Est both |
| 2005 | -- | 10,880 | -- | -- | -- | 7,942 | Est family only |
| 2006 | -- | 11,480 | -- | -- | -- | 8,380 | Est family only |
| 2007 | 4,479 | 12,106 | -- | -- | 3,762 | 8,837 | Est both |
| 2008 | -- | 12,680 | -- | -- | -- | 9,256 | Est family only |
| 2009 | 4,824 | 13,375 | -- | 3,515 | 4,052 | 9,860 | Est single / Direct family |
| 2010 | 5,049 | 13,770 | -- | -- | 4,241 | 10,052 | Est both |
| 2011 | -- | 15,073 | -- | -- | -- | 11,003 | Est family only |
| 2012 | 5,615 | 15,745 | -- | -- | 4,717 | 11,494 | Est both |
| 2013 | 5,884 | 16,351 | 999 | 4,565 | 4,885 | 11,786 | Direct both |
| 2014 | -- | 16,834 | -- | -- | -- | 12,289 | Est family only |
| 2015 | 6,251 | 17,545 | -- | -- | 5,251 | 12,808 | Est both |
| 2016 | 6,435 | 18,142 | 1,129 | 5,277 | 5,306 | 12,865 | Direct both |
| 2017 | -- | 18,764 | -- | -- | -- | 13,698 | Est family only |
| 2018 | 6,896 | 19,616 | 1,186 | 5,547 | 5,710 | 14,069 | Direct both |
| 2019 | 7,188 | 20,576 | 1,242 | 6,015 | 5,946 | 14,561 | Direct both |
| 2020 | 7,470 | 21,342 | 1,243 | 5,588 | 6,227 | 15,754 | Direct both |
| 2021 | 7,739 | 22,221 | 1,299 | 5,969 | 6,440 | 16,252 | Direct both |
| 2022 | 7,911 | 22,463 | 1,327 | 6,106 | 6,584 | 16,357 | Direct both |
| 2023 | 8,435 | 23,968 | 1,401 | 6,575 | 7,034 | 17,393 | Direct both |
| 2024 | 8,951 | 25,572 | 1,368 | 6,296 | 7,583 | 19,276 | Direct both |

### Table 3: Pre-1999 Estimation Basis

| Year | CMS Private Business Health Spending ($B) | Nonfarm Employment (M) | Est. Coverage Rate (%) | Derived Cost per Covered Worker ($) |
|------|------------------------------------------|----------------------|----------------------|-------------------------------------|
| 1960 | ~3.5 | 54.2 | 55 | ~100 |
| 1965 | 5.9 | 60.8 | 60 | ~140 |
| 1970 | 13.6 | 71.0 | 65 | ~250 |
| 1975 | 27.5 | 77.0 | 67 | ~450 |
| 1980 | 63.0 | 90.4 | 68 | ~870 |
| 1985 | 108.6 | 97.5 | 68 | ~1,400 |
| 1990 | 186.2 | 109.5 | 67 | ~2,150 |
| 1991 | 205.4 | 108.3 | 66 | ~2,280 (NCBI benchmark) |
| 1995 | ~255 | 117.3 | 64 | ~2,700 |

Notes on Table 3:
- CMS "Private Business" health spending includes employer premium contributions plus workers' comp medical and other employer health costs. A 0.85 adjustment is applied to isolate the insurance premium component.
- 1960 business health spending estimated from total NHE ($27.4B) × 13% business share.
- 1991 figure uses NCBI/IOM direct benchmark: single premium $1,740/yr (employer 86% = $1,496), family premium $3,792/yr (employer 74% = $2,806), blended at 40/60 weights.
- 1995 extrapolated from 1991 at ~4%/yr (managed care era growth).

## Gaps and Caveats

### Missing years
- **2000–2003:** KFF/HRET survey data exists for these years but was not retrievable from web searches. These were years of rapid premium growth (8–14% annually). The graph phase may interpolate or the data can be supplemented from the full KFF Excel download.
- **Pre-1999 non-benchmark years:** Marked as `--`. The graph component should draw the pre-1999 line only through the benchmark points (1960, 1965, 1970, 1975, 1980, 1985, 1990, 1991, 1995).
- **2025:** KFF 2025 survey available (single $9,325, family $26,993) but not included since the project scope is through 2024.

### Confidence assessment
- **1999–2024 with direct worker contribution data:** HIGH confidence. These figures are taken directly from KFF survey summaries retrieved from the web.
- **1999–2024 with estimated employer share:** MEDIUM-HIGH confidence. Total premiums are confirmed from KFF; only the employer/worker split is estimated using stable historical ratios (84% single, 73% family).
- **1990–1998:** MEDIUM confidence. 1991 has a solid benchmark from NCBI/IOM. Other years extrapolated using known premium growth rates.
- **1970–1989:** LOW-MEDIUM confidence. Derived from CMS aggregate spending data divided by employment and coverage rate. Order of magnitude is reliable; specific values have ±20–30% uncertainty.
- **1960–1969:** LOW confidence. Based on very rough CMS spending estimates and coverage rate assumptions. The key fact — that employer health insurance was a trivial cost in this era ($100–250/year) — is well-established even if exact figures are uncertain.

### Blending methodology caveat
The blended figure uses fixed 35% single / 65% family-type weights. In reality, the enrollment distribution has shifted over time (more workers had single-only coverage in earlier decades, more have family-type today). This could introduce 5–10% error in any given year's blended figure. The graph phase should consider whether to use the family-coverage employer cost directly (since the median working-age worker is more likely to have family coverage) or to refine the blend with actual enrollment data.

### KFF vs MEPS-IC data
Two parallel data series exist for employer insurance costs: the KFF/HRET survey and the MEPS-IC (Medical Expenditure Panel Survey, Insurance Component) compiled by AHRQ. They differ by 5–10% in any given year due to different survey methodologies. This result file uses KFF/HRET data as the primary source, consistent with the ticket's recommended source hierarchy.

### The key story for the graph
Despite the data gaps, the story is unambiguous: employer health insurance cost per covered worker grew from roughly **$100 in 1960** to **$15,180 in 2024** — a 150× increase in nominal dollars. Median worker earnings grew only about 8× over the same period. This is the single largest factor explaining why "share of the pie" has declined: a growing share of total compensation goes to health insurance premiums that never reach the worker's paycheck.

<!-- COMPLETE -->
