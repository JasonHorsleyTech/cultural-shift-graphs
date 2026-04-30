# Funeral Services — Funeral Director

## Summary

The funeral director's share of the funeral dollar has been in steady decline since the 1960s, dropping from roughly 15–18% to around 8–10%. Funeral costs have risen 11.7× since 1960 (from $708 to $8,300), dramatically outpacing funeral director wage growth (~9× over the same period). The main drivers are industry consolidation by corporations like Service Corporation International, rising casket and facility markups, and growing corporate overhead — the classic pattern where the customer pays more but the worker doesn't see it. The FTC Funeral Rule (1984) and the cremation revolution haven't reversed the trend.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | 6,200 | 708 | 1 funeral (burial w/ casket) | 55 | 15.9 | low |
| 1970 | 10,500 | 1,050 | 1 funeral (burial w/ casket) | 55 | 18.2 | low |
| 1980 | 19,500 | 1,809 | 1 funeral (burial w/ casket) | 55 | 19.6 | low |
| 1985 | 24,000 | 2,737 | 1 funeral (burial w/ casket) | 57 | 15.4 | low |
| 1990 | 28,000 | 3,800 | 1 funeral (burial w/ casket) | 60 | 12.3 | low |
| 1996 | 34,000 | 4,830 | 1 funeral (burial w/ casket) | 67 | 10.5 | med |
| 2000 | 39,000 | 5,180 | 1 funeral (burial w/ casket) | 73 | 10.3 | med |
| 2006 | 47,000 | 6,195 | 1 funeral (burial w/ casket) | 80 | 9.5 | med |
| 2012 | 50,000 | 7,045 | 1 funeral (burial w/ casket) | 82 | 8.7 | med |
| 2014 | 52,000 | 7,181 | 1 funeral (burial w/ casket) | 80 | 9.1 | med |
| 2019 | 55,000 | 7,640 | 1 funeral (burial w/ casket) | 76 | 9.5 | med |
| 2023 | 57,000 | 8,300 | 1 funeral (burial w/ casket) | 73 | 9.4 | med |

## Methodology

### Worker compensation

**Funeral director** (employee, not owner-operator) annual salary. Sources vary by era:

- **1960–1980:** Estimated from census occupational earnings data and general wage trends for professional service workers. No direct BLS occupational wage series exists for funeral directors before the mid-1990s. These estimates carry low confidence but are anchored to known data points: median family income in 1960 was ~$5,600, and funeral directors as licensed professionals earned modestly above median. By 1980, with median family income at ~$21,000, funeral director wages tracked the professional services band.
- **1990–1996:** Anchored to the Congressional Research Service report (RL30697, 2000), which cites 1994 data: employee funeral directors/embalmers earned $26,410–$34,172 depending on establishment size. BLS 1996 data shows the middle 50% earning $23,244–$44,148 annually.
- **2000–2005:** BLS Occupational Employment Statistics. Median annual wage for funeral directors was $47,630 in 2005.
- **2010–2023:** BLS OES data (SOC 39-4031: Morticians, Undertakers, and Funeral Arrangers). Note: the 2018 SOC reclassification split "funeral directors" into this category plus "Funeral Home Managers" (11-9171, median $76,830 in 2024). The worker comp figures here use the non-management funeral arranger/mortician category for consistency with the "fundamental worker" concept. The 2023 average was $65,112 (DataUSA) but the median was closer to $55,000–$57,000, which I use here as more representative.

**Important caveat on owner-operators:** In the 1960s–1980s, most funeral directors were owner-operators of small family businesses. Their total compensation (salary + profit) was significantly higher than employee wages — the CRS report notes owner/managers averaged ~$67,000 in 1994 vs. $26–34K for employees. The ratio table uses employee wages to track the fundamental worker's share, but the true "director's take" in the family-operation era was much higher. The shift from owner-operators to corporate employees is itself part of the story.

### Customer cost

NFDA General Price List Survey median cost of a funeral with viewing and burial (casket, basic services, embalming, facilities, hearse, service car, memorial package). This is NFDA's longest-running consistent series, tracked biennially since the 1960s. **Does not include vault** (~$1,300–$1,700 additional) or cemetery/plot costs.

Data points sourced directly from NFDA publications:
- 1960: $708 | 1975: $1,285 | 1980: $1,809 | 1985: $2,737 | 1995: $4,626 | 2000: $5,180 | 2006: $6,195 | 2009: $6,560 | 2012: $7,045 | 2014: $7,181 | 2019: $7,640 | 2021: $7,848 | 2023: $8,300

Intervening years (1970, 1990, 1996) are interpolated from surrounding data points. The 1990 estimate (~$3,800) aligns with the NFDA-reported 47% cost increase during the 1980s decade and the documented 25% increase during 1991–1998.

**Why burial cost, not blended?** Cremation was negligible before 1990 (3.6% in 1960, ~17% in 1990), so the burial figure IS the market average for most of the time series. By 2023, cremation reached 60%+, and its median cost ($6,280) is lower — meaning the true average transaction has shrunk. Using the burial figure throughout maintains longitudinal consistency. The cremation shift is noted as a compounding factor in the ratio decline but isn't baked into the customer cost column.

### Customers per worker (funerals per director)

Estimated as: total U.S. deaths per year / total funeral directors employed.

- **U.S. deaths:** CDC/NCHS vital statistics (1.71M in 1960, 1.92M in 1970, 1.99M in 1980, 2.15M in 1990, 2.40M in 2000, 2.47M in 2010, ~2.90M in 2023).
- **Funeral directors employed:** BLS (33,000 in 1996, 40,345 in 2023), CRS report (~50,000 directors and embalmers combined in late 1990s; ~33,000 directors specifically). Earlier decades estimated from the number of funeral homes (~23,000–25,000 in the 1960s–1990s, declining to ~15,400 by 2025) multiplied by average directors per home (~1.3–1.5).

This metric has risen over time from ~50–55 funerals/director in the 1960s to ~70–80 by the 2000s, reflecting consolidation: fewer, larger operations handling more volume per worker.

### Ratio computation

Ratio = Annual salary / (Funeral cost × Funerals per director per year)

This represents the funeral director's compensation as a percentage of the total funeral revenue they generate. The remainder goes to caskets, facilities, vehicles, corporate overhead, embalming supplies, and profit.

## Sources

- NFDA General Price List Survey, various years (1960–2023): historical median funeral costs. Referenced via nfda.org/news/statistics and NFDA press releases for 2015, 2019, 2021, 2023 survey editions.
- Congressional Research Service, "Funeral Services: The Industry, Its Workforce, and Labor Standards" (RL30697, 2000): 1994–1997 wage data, industry employment, and establishment counts. https://www.everycrsreport.com/reports/RL30697.html
- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OES): SOC 39-4031 (Morticians, Undertakers, Funeral Arrangers), various years. https://www.bls.gov/oes/2023/may/oes394031.htm
- BLS Occupational Outlook Handbook: Funeral Service Workers. https://www.bls.gov/ooh/personal-care-and-service/funeral-service-occupations.htm
- DataUSA: Morticians, Undertakers, & Funeral Directors profile (2014–2023 wage and employment data). https://datausa.io/profile/soc/morticians-undertakers-funeral-directors
- FRED/St. Louis Fed: LEU0257876000A (Employed full-time funeral directors weekly earnings, 2011–2024). https://fred.stlouisfed.org/series/LEU0257876000A
- CDC/NCHS Vital Statistics: annual death counts by year. https://www.cdc.gov/nchs/
- Self.inc, "Cost of Dying in America" report: compiled NFDA data 2006–2021. https://www.self.inc/info/cost-of-dying-in-america-report/
- Service Corporation International (SCI): Wikipedia article and investor filings for consolidation history. https://en.wikipedia.org/wiki/Service_Corporation_International
- Cremation Association of North America (CANA): historical cremation rate data. https://www.cremationassociation.org/industrystatistics.html

## Notes

- **The "monopoly of grief" is real, but the worker doesn't benefit.** Funeral costs have risen 11.7× since 1960 while funeral director wages have risen ~9×. The surplus goes to casket manufacturers (burial casket prices rose 230% between 1986–2017, far exceeding general inflation), corporate parent companies, and facility overhead — not to the person embalming the body and consoling the family.

- **Consolidation is the hidden story.** Service Corporation International went from 0 to ~1,800 funeral homes, conducting 1 in 10 U.S. funerals. SCI's 1995 profit margin was 11%, extracted from revenue that in the family-operation era would have been the director's income. The shift from owner-operator to corporate employee represents a massive transfer of the funeral dollar away from the fundamental worker.

- **The FTC Funeral Rule (1984) had ambiguous effects.** It required itemized pricing, which theoretically empowered consumers. But funeral homes adapted by maintaining high line-item prices and using emotional pressure at the point of sale. Consumer comparison shopping remained below 10% until 2018 (jumping to 33.5% by 2022). The ratio shows no visible inflection around 1984.

- **Jessica Mitford's "The American Way of Death" (1963)** generated enormous public attention but no measurable impact on the ratio. The funeral industry's pricing power is structurally embedded in the context of purchase: time pressure, emotional devastation, social norms, and the body already being at the funeral home.

- **Cremation is reshaping the industry without improving the ratio.** Cremation went from 3.6% (1960) to 63.4% (2025, projected). A cremation funeral costs ~$6,280 vs. $8,300 for burial. This shrinks total revenue per case, but the funeral director's wage hasn't adjusted proportionally — they still earn roughly the same salary while handling a mix of lower-revenue cremation cases and traditional funerals. The ratio for cremation-only services would actually be higher (director wage is a larger fraction of a cheaper service), but the industry's response has been to add upcharges to cremation packages.

- **The 2018 SOC reclassification complicates recent data.** "Funeral directors" were split into "Morticians/Undertakers/Funeral Arrangers" (SOC 39-4031, median ~$50K) and "Funeral Home Managers" (SOC 11-9171, median ~$77K). The pre-2018 "funeral director" title encompassed both roles. This means comparing 2005 ($47,630 median) to 2024 ($49,800 median for 39-4031) understates actual wage growth for the occupation, since the higher-paid management role was carved out.

- **Pre-1990 wage data carries low confidence.** No consistent BLS occupational wage series for funeral directors exists before the mid-1990s. Earlier figures are estimated from census data, general professional wage trends, and the CRS report's 1994 anchor point. The trend direction (declining ratio) is confident; the exact magnitude in early decades is not.

<!-- COMPLETE -->
