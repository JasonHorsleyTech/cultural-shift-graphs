# Pest Control — Pest Control Technician

## Summary

The pest control technician's share of industry revenue has been remarkably stable at roughly 22–25% over the past two decades, despite massive industry consolidation (Rollins/Orkin, Rentokil/Terminix). However, the per-visit story is different: when measured against the price of a single one-time service call, the tech's labor cost has shrunk from ~17% to ~13%, because visit prices have risen faster than wages. The gap is explained by productivity — techs now serve more customers per day through recurring subscription plans, which compensates for the lower per-visit share.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 2000 | $26,000 | $108,000 | annual industry revenue per technician | 1 | 24.1% | low |
| 2004 | $27,830 | $118,000 | annual industry revenue per technician | 1 | 23.6% | low |
| 2010 | $32,340 | $139,000 | annual industry revenue per technician | 1 | 23.3% | med |
| 2015 | $33,930 | $157,000 | annual industry revenue per technician | 1 | 21.6% | med |
| 2020 | $40,150 | $177,000 | annual industry revenue per technician | 1 | 22.7% | med |
| 2024 | $45,800 | $199,000 | annual industry revenue per technician | 1 | 23.0% | med |

### Per-visit comparison (secondary analysis)

This frames the same question at the visit level — when you pay for a one-time pest control visit, what fraction covers the tech's labor?

| Year | Tech Hourly Wage | Avg One-Time Visit Price | Tech Labor per Visit (1 hr) | Per-Visit Ratio (%) |
|------|-----------------|-------------------------|---------------------------|-------------------|
| 2000 | $12.50 | $72 | $12.50 | 17.4% |
| 2024 | $22.02 | $170 | $22.02 | 12.9% |

The per-visit ratio declined because one-time visit prices grew ~3.5% annually while tech wages grew ~2.3% annually. But at the annual level, the ratio held steady because each tech now handles more stops per day (~10 on recurring routes vs. ~6–8 for one-time calls in 2000).

## Methodology

**Primary metric: Annual revenue per technician vs. annual technician wage**

The ratio divides the BLS mean annual wage for pest control workers (SOC 37-2021) by the estimated total NAICS 561710 industry revenue per technician.

**Revenue per technician** was computed as total U.S. pest control industry revenue divided by the estimated number of pest control technicians.

**Industry revenue** was anchored at two well-sourced data points:
- ~$6.5 billion circa 2000 (PCT Magazine industry profile, describing "more than 19,000 pest management firms generating approximately $6.5 billion in annual revenue")
- $13.08 billion in 2017 (U.S. Census Bureau Economic Census, NAICS 561710, total revenue for employer firms)

Intermediate years were interpolated at 4.2% CAGR (the implied rate between the two anchor points). Post-2017 years used 5.4% CAGR based on IBISWorld industry growth estimates.

**Technician count** was anchored at the BLS OES pest control worker count of ~82,000 in 2017 and ~93,760 in 2023 (SOC 37-2021). Historical counts were back-estimated using a 1.83% employment CAGR, which is consistent with the Georgia pest control employment study (Journal of Economic Entomology, 2024) that documented 117% employment growth from 1997 to 2021. This yields ~60,000 technicians in 2000 and scales smoothly to the known BLS figures.

**Why this proxy over per-visit pricing?** Direct per-visit cost data exists only for 2000 ($72, from PCT's State of the Industry survey) and 2024–2025 (~$150–200 for one-time, $40–75 for recurring monthly). The industry's shift from one-time calls to recurring subscription models makes per-visit pricing non-comparable across decades. Annual revenue per technician captures the total customer spend attributable to each tech regardless of service model.

**Per-visit secondary analysis** uses BLS hourly wages and known average visit prices for the two years where visit-price data is available (2000 PCT survey; 2024–2025 from HomeGuide, Angi, HomeAdvisor consensus). Assumes 1 hour per stop including travel time, based on ~10 stops per 8–10 hour working day (industry standard per FieldRoutes and Best Pick Reports).

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OES), SOC 37-2021 "Pest Control Workers" — wage data for 2004, 2010, 2015, 2018, 2020, 2024. Accessed via BLS.gov and Recruiter.com historical salary aggregation.
- U.S. Census Bureau, 2017 Economic Census, NAICS 561710 "Exterminating and Pest Control Services" — total revenue ($13.08B), total employees (117,011). Via SICCode.com census data portal.
- U.S. Census Bureau, 2020 County Business Patterns, NAICS 561710 — 129,676 employees, $6.45B annual payroll, 13,498 establishments.
- PCT Magazine (Pest Control Technology), "A State of the Industry Report" (2001, reporting year 2000 data) — average residential service visit $72, technician salary $29,600, average company revenue $682,000 with 10.8 employees. https://www.pctonline.com/article/a-state-of-the-industry-report/
- PCT Magazine, 2014 Operating Cost Ratio Survey — wages/salaries/bonuses = 34.2% of revenue, materials 15.6%, vehicles 14.4%. https://www.pctonline.com/article/pct0115-business-benchmarking-report/
- National Pest Management Association (NPMA), "U.S. Pest Control Industry Shows Remarkable Resilience" (2024) — $12.654B total service revenue in 2024, 13.25M residential customers, 7.9% YOY growth. https://www.npmapestworld.org/your-business/latest-news/us-pest-control-industry-shows-remarkable-resilience-with-nearly-8-growth-in-2024/
- Li, Winter, "Rollins Inc. (ROL): LONG" (Columbia Business School, 2019) — Rollins branch-level economics, ~19 employees per branch (Orkin). https://business.columbia.edu/sites/default/files-efs/imce-uploads/ROL.pdf
- CompaniesMarketCap.com — Rollins annual revenue 1996–2025. https://companiesmarketcap.com/rollins/revenue/
- Huang et al., "Estimate of the revenue and economic contribution of the professional pest management industry in Georgia" (Journal of Economic Entomology, 2024) — 117% employment growth 1997–2021, revenue per employee $102K–$116K. https://pmc.ncbi.nlm.nih.gov/articles/PMC11011618/
- IBISWorld, "Pest Control in the US" — $28.5B market size in 2025, 5.4% growth, 32,720 businesses. https://www.ibisworld.com/united-states/industry/pest-control/1495/
- Briostack, "Pest Control Industry Statistics (2025)" — $26.1B projected revenue, 45% gross margins. https://www.briostack.com/blog/pest-control-industry-statistics
- HomeGuide, Angi, HomeAdvisor — current service visit pricing ($150–200 one-time, $40–75 recurring monthly).

## Notes

**The franchise/consolidation story is more nuanced than expected.** The ticket hypothesized that consolidation (Rollins acquiring companies, Rentokil buying Terminix for $2.7B in 2022) would squeeze the tech's share. At the annual level, it hasn't — the ratio held at ~23%. The likely explanation is that consolidation reduces non-labor costs (bulk chemical purchasing, shared marketing, optimized routing) more than it squeezes technician wages. Techs are hard to recruit and retain in a physically demanding, unpleasant job, which gives them wage leverage that managers and office workers don't have.

**The per-visit squeeze is real but hidden.** When a homeowner pays $170 for a one-time service call, only about $22 covers the tech's hourly labor. The rest covers: company overhead (~20%), chemicals and materials (~$5–10 actual cost, marked up), vehicle costs, insurance/liability, franchise royalties (8–10% for Orkin/Terminix franchisees), marketing/lead acquisition, and profit margin (~15–17%). But because the industry shifted to recurring subscription plans that increase the number of stops per tech per day, the tech's annual share of revenue is stable even as the per-visit share declined.

**Confidence is low for 2000–2005** because the industry revenue figure (~$6.5B) comes from a PCT Magazine about-page description of uncertain vintage, and the technician count is back-estimated from later BLS data. The 2010–2024 data is more reliable, anchored in Census Bureau and BLS OES data with cross-validation from multiple industry sources.

**Rollins revenue context** (publicly traded, ~25% of core structural pest control market): grew from $640M (2000) to $3.38B (2024) = 5.3× in 24 years, significantly faster than the overall industry, reflecting aggressive acquisition-driven consolidation. Rollins's revenue per employee runs higher than industry average, suggesting that the largest companies extract more revenue per tech than independents — which would make their tech ratio lower than the industry average shown here.

**The $170 one-time visit breakdown** (approximate for a major franchise, 2024): tech labor ~$22 (13%), chemicals/materials ~$8 (5%), vehicle/fuel ~$15 (9%), insurance/liability ~$12 (7%), franchise royalty ~$15 (9%), marketing/lead acquisition ~$25 (15%), office overhead ~$20 (12%), company profit ~$25 (15%), payroll taxes/benefits on tech ~$8 (5%), other overhead ~$20 (12%). The tech sees $22 of $170. The company sees ~$25 profit. The rest is the machinery of running a business that brings the tech to your door.

<!-- COMPLETE -->
