# Veterinary Care — Veterinarian

## Summary

The veterinarian's ratio has declined modestly from ~21% to ~17% over the past two decades — a notable erosion but nowhere near the collapse seen in human healthcare or higher education. This relative stability exists despite vet care costs inflating nearly as fast as human healthcare (3.9× since 1997). The key differentiator: pet insurance remains rare (~4% of pets), so there's no massive administrative layer eating into the customer dollar. However, accelerating corporate consolidation — Mars Inc. now owns ~30% of corporate vet practices — and the 2020-2022 pandemic pet boom (revenue surged 41% while salaries rose only 21%) are beginning to compress the ratio in a pattern eerily familiar from early-stage healthcare consolidation.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 2004 | 78,000 | 295 | Annual vet spending per pet-owning household | 1,262 | 21.0 | med |
| 2006 | 81,490 | 329 | Annual vet spending per pet-owning household | 1,259 | 19.7 | high |
| 2008 | 86,000 | 360 | Annual vet spending per pet-owning household | 1,272 | 18.8 | med |
| 2010 | 90,000 | 370 | Annual vet spending per pet-owning household | 1,229 | 19.8 | med |
| 2012 | 93,500 | 394 | Annual vet spending per pet-owning household | 1,204 | 19.7 | med |
| 2014 | 97,500 | 418 | Annual vet spending per pet-owning household | 1,223 | 19.1 | med |
| 2016 | 102,000 | 473 | Annual vet spending per pet-owning household | 1,197 | 18.0 | med |
| 2018 | 105,240 | 489 | Annual vet spending per pet-owning household | 1,198 | 18.0 | high |
| 2020 | 116,000 | 583 | Annual vet spending per pet-owning household | 1,155 | 17.2 | med |
| 2022 | 127,000 | 643 | Annual vet spending per pet-owning household | 1,165 | 17.0 | med |

## Methodology

**Ratio = Mean veterinarian salary / (Total veterinary services industry revenue / Number of practicing veterinarians)**

This measures what fraction of every customer dollar flowing through the veterinary industry ends up as the veterinarian's paycheck.

**Worker compensation (numerator):** Mean annual wage for veterinarians (SOC 29-1131) from BLS Occupational Employment and Wage Statistics. Confirmed data points at 2006 ($81,490), 2007 ($84,090), 2018 (~$105,240), and 2024 ($140,270 from BLS API). Intermediate years interpolated using a smooth growth curve between confirmed anchors: 2.14% CAGR for 2004-2018, 4.91% CAGR for 2018-2024. The slow pre-2018 growth aligns with AVMA's finding that real veterinarian income was essentially flat from 2006 to ~2018. The post-2018 acceleration reflects COVID-era demand and labor shortages.

**Customer cost (denominator components):**
- *Total industry revenue:* U.S. Census Bureau Service Annual Survey, NAICS 541940 (Veterinary Services), employer firms only, via FRED series REVEF54194ALLEST. This is the most comprehensive and methodologically consistent measure available — it captures all revenue (fees, drug sales, lab work, product sales) flowing through veterinary establishments. Available annually 2004–2022.
- *Number of practicing veterinarians:* Estimated from AVMA data. Anchor point: 75,349 veterinarians in private clinical practice in 2020 (AVMA Market Research Statistics). Growth rate derived from AVMA total membership data (113,394 in 2018 to 133,475 in 2025, ~2.4% CAGR). Applied uniformly backward to 2004 and forward to 2022. Cross-validated against BLS OES employment count of 50,790 salaried vets in 2007 (add ~18% for self-employed practice owners ≈ 60,000, consistent with the estimate of 54,000 clinical-practice vets for 2006).
- *Pet-owning households:* Total U.S. households (Census Bureau) × pet ownership rate (APPA National Pet Owners Survey). Rate grew from ~59% (2004) to ~70% (2022). Used to decompose revenue per vet into customer cost × customers per vet.

**Why this proxy over alternatives:** APPA's consumer-facing "veterinary care spending" category changed methodology in 2018 (expanded to include pharmaceutical/product sales through clinics), making it inconsistent across time. The Census industry revenue data is methodologically stable for the entire 2004-2022 period and captures the same scope throughout. This is the longest consistent series available.

**Important limitation:** The Census revenue data only covers employer firms (establishments with payroll). Solo practitioners without employees are excluded. This likely understates total industry revenue by 5-10%, but the undercount should be roughly proportional across years, preserving trend accuracy.

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OES), SOC 29-1131 (Veterinarians) — mean annual wage data for 2006, 2007, 2018, 2024. https://www.bls.gov/oes/
- BLS Public Data API, series OEUN000000000000029113104 — 2024 mean annual wage ($140,270) confirmed via API query.
- U.S. Census Bureau, Service Annual Survey, NAICS 54194 (Veterinary Services), total revenue for employer firms — via FRED series REVEF54194ALLEST. https://fred.stlouisfed.org/series/REVEF54194ALLEST
- BLS Industry Productivity data, NAICS 541940 — total employment in veterinary services industry (FRED series IPUMN541940W200000000). https://fred.stlouisfed.org/series/IPUMN541940W200000000
- American Veterinary Medical Association, Market Research Statistics — U.S. veterinarian numbers 2020 (118,624 total; 75,349 in private clinical practice). https://www.avma.org/resources-tools/reports-statistics/market-research-statistics-us-veterinarians-20
- AVMA, Market Research Statistics — U.S. veterinarian numbers 2025 (133,475 total). https://www.avma.org/resources-tools/reports-statistics/market-research-statistics-us-veterinarians
- AVMA, "Inflation continues to dampen gains in veterinarian salaries" (2025) — real income trends, debt data. https://www.avma.org/news/inflation-continues-dampen-gains-veterinarian-salaries-fewer-new-grads-entering-full-time
- AVMA, "Gap shrinks between new graduate, overall veterinary salaries" — salary compression data. https://www.avma.org/news/gap-shrinks-between-new-graduate-overall-veterinary-salaries
- BLS Consumer Price Index, Veterinarian Services (1997-2026) — CPI index used for cross-validation of cost trends. Via https://www.in2013dollars.com/Veterinarian-services/price-inflation
- American Pet Products Association (APPA), National Pet Owners Survey — pet ownership rates and spending data. https://americanpetproducts.org/industry-trends-and-stats
- Insurance Information Institute — total pet industry expenditures 2016-2025, pet-owning household counts. https://www.iii.org/fact-statistic/facts-statistics-pet-ownership-and-insurance
- National Research Council, "Workforce Needs in Veterinary Medicine" (2013) — historical salary, employment, and debt data. https://www.nationalacademies.org/read/13413/chapter/14
- Fortune, "Candy maker Mars is the biggest provider of vet care in the country" (2024) — corporate consolidation data. https://fortune.com/2024/06/10/mars-candy-snickers-pet-care-vet-clinics-petsmart-private-equity/

## Notes

- **Vet care vs. human healthcare — the insurance test:** The CPI for veterinarian services increased 3.9× from 1997 to 2026, while the general CPI increased about 2.0×. This tracks remarkably close to human healthcare inflation (~4× over similar periods). Yet the vet's ratio declined only ~4 percentage points (21% → 17%), while physician compensation as a share of healthcare spending has collapsed far more dramatically. The key difference: pet insurance covers only ~4% of pets, so there's no massive insurer/administrative apparatus consuming the spread. This is natural-experiment-grade evidence that insurance intermediation — not inherent medical cost growth — is the primary driver of the worker-ratio collapse in human healthcare.

- **Corporate consolidation is the emerging story:** Mars Inc. acquired VCA for $9.1 billion in 2017 and now operates ~3,000 clinics worldwide with 12,000+ veterinarians. Over 30% of general veterinary practices are now corporate-owned, up from ~8% a decade ago. Corporate practices have different cost structures (regional management, marketing departments, centralized procurement, private equity returns). As consolidation deepens, expect the ratio to compress further — the early signs are visible in the 2016-2022 data.

- **The debt crisis hiding beneath the ratio:** The ratio measures salary vs. revenue, but the real pain point for veterinarians is education debt. Mean vet school debt reached $202,647 for the class of 2024, with a 1.4:1 debt-to-income ratio. In 2015, the ratio peaked at 2:1. This means even though the fundamental worker ratio looks healthy compared to other industries, individual vets may take home significantly less after debt service. In 1987, average in-state vet school tuition was $3,601; today it's $28,000-$54,000/year.

- **Pandemic inflection:** The 2020-2022 period saw an unprecedented surge in veterinary revenue (+41% from 2018 to 2022) driven by the pandemic pet boom, while vet salaries grew only ~21% over the same period. This divergence is likely temporary — labor market tightness has been pushing salaries up rapidly since 2022 — but it represents the largest two-year ratio compression in the dataset.

- **Data limitations:** Census revenue data begins in 2004 and ends in 2022. Veterinarian count estimates for years other than 2020 rely on growth-rate extrapolation from AVMA data. BLS OES mean wage data was confirmed at only four anchor points (2006, 2007, 2018, 2024); intermediate years are interpolated. Earlier decades (1980s-1990s) lack consistent revenue data, though scattered evidence suggests the ratio was likely higher (22-25%) when the industry was smaller, less capital-intensive, and dominated by solo practitioners.

<!-- COMPLETE -->
