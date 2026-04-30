# Home Construction — General Contractor

## Summary

The general contractor's share of a new home's sale price has been remarkably stable at 14-18% over the past quarter century, averaging about 15.5%. This is measured as builder profit plus overhead/general expenses from NAHB surveys — which represents the GC/builder's total compensation after paying subcontractors, materials, land, and other costs. Meanwhile, total construction labor (all trades combined) accounts for roughly 30% of the final home price, and this share has been similarly stable despite massive nominal price increases. The big story isn't the GC's cut — it's that the GC ratio barely moves while the home price itself has quintupled since 1970.

## Data

### GC/Builder Ratio (Profit + Overhead as % of Home Sale Price)

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1970 | $3,510 | $23,400 | per home | 1 | 15.0 | low |
| 1980 | $9,690 | $64,600 | per home | 1 | 15.0 | low |
| 1990 | $18,435 | $122,900 | per home | 1 | 15.0 | low |
| 1998 | $22,723 | $152,500 | per home | 1 | 14.9 | high |
| 2002 | $32,830 | $187,600 | per home | 1 | 17.5 | high |
| 2004 | $34,476 | $221,000 | per home | 1 | 15.6 | high |
| 2007 | $45,118 | $247,900 | per home | 1 | 18.2 | high |
| 2009 | $30,988 | $216,700 | per home | 1 | 14.3 | high |
| 2017 | $51,472 | $321,700 | per home | 1 | 16.0 | med |
| 2019 | $45,136 | $322,400 | per home | 1 | 14.0 | high |
| 2022 | $72,884 | $479,500 | per home | 1 | 15.2 | high |
| 2024 | $71,192 | $426,300 | per home | 1 | 16.7 | high |

### Total Construction Labor Ratio (All Trades Combined as % of Home Sale Price)

| Year | Est. Labor Cost (nominal $) | Customer Cost (nominal $) | Cost Unit | Ratio (%) | Confidence |
|------|----------------------------|--------------------------|-----------|-----------|------------|
| 1970 | $7,020 | $23,400 | per home | ~30.0 | low |
| 1980 | $19,380 | $64,600 | per home | ~30.0 | low |
| 1990 | $36,870 | $122,900 | per home | ~30.0 | low |
| 1998 | $42,700 | $152,500 | per home | ~28.0 | med |
| 2007 | $59,660 | $247,900 | per home | 24.1 | med |
| 2009 | $63,926 | $216,700 | per home | 29.5 | med |
| 2017 | $89,433 | $321,700 | per home | 27.8 | med |
| 2019 | $98,493 | $322,400 | per home | 30.6 | med |
| 2022 | $145,767 | $479,500 | per home | 30.4 | med |
| 2024 | $137,268 | $426,300 | per home | 32.2 | med |

## Methodology

### GC/Builder Ratio

**What counts as GC compensation:** The general contractor in residential new construction is typically the builder — the entity that manages the project, hires subcontractors, purchases materials, and sells the finished home. Their compensation comes from two line items in the NAHB Construction Cost Survey: **builder profit** (pre-tax) and **overhead/general expenses** (office, insurance, accounting, staff, etc.). Together these represent the GC/builder's total take-home from each home sold, after all direct costs.

**Data source for 1998-2024:** NAHB's "Cost of Constructing a Home" survey series, conducted roughly every two years. The survey asks builders to report a detailed breakdown of their average home sale price into seven categories: finished lot, construction costs, financing costs, overhead & general expenses, marketing costs, sales commissions, and profit.

**Confirmed NAHB percentages used:**

| Year | Profit % | Overhead % | Combined % |
|------|----------|------------|------------|
| 1998 | 9.2 | 5.7 | 14.9 |
| 2002 | 12.0 | 5.5 | 17.5 |
| 2004 | 9.8 | 5.8 | 15.6 |
| 2007 | 11.2 | 7.0 | 18.2 |
| 2009 | 8.9 | 5.4 | 14.3 |
| 2017 | 10.7 | ~5.3 | ~16.0 |
| 2019 | 9.1 | 4.9 | 14.0 |
| 2022 | 10.1 | 5.1 | 15.2 |
| 2024 | 11.0 | 5.7 | 16.7 |

Note: 2017 overhead is estimated (~5.3%) based on the trend from adjacent years. The long-run average profit since 1998 is 9.8%.

**Dollar amounts:** Calculated by applying NAHB percentages to Census Bureau/HUD median new home sale prices for each year. This is a cross-dataset approximation — the NAHB survey uses their own average sale price (which skews higher, ~$485k in 2019 vs Census median $322k) — but the percentages are what matter for the ratio, and these are consistent.

**Pre-1998 estimates (1970, 1980, 1990):** No NAHB survey data exists before 1998. The GC/builder markup model hasn't fundamentally changed: the standard GC fee has been 10-20% of construction cost since at least the mid-20th century, and builder profit margins have traditionally run 8-12%. I estimate the combined profit + overhead at ~15% for these decades, which falls squarely in the middle of the 14.0-18.2% range observed in all post-1998 surveys. Marked as low confidence.

**Customer cost proxy:** Median sales price of new single-family homes sold in the United States, from Census Bureau/HUD (FRED series MSPNHSUS). This includes land, construction, and all builder costs.

### Total Labor Ratio

**What counts as labor:** All on-site construction labor (framing, electrical, plumbing, HVAC, roofing, drywall, painting, concrete, site work, etc.) including both direct employees and subcontractor labor. Does NOT include the GC/builder's own compensation (already captured above).

**Estimation method:** Construction labor is approximately 50% of hard construction costs. This ratio has been remarkably stable — Construction Physics (Brian Potter) documented that labor was ~50% of residential construction costs in both 1945 and 2021. Labor's share varies by trade (10-20% for prefabricated components like cabinets, 60-70% for site-built work like framing and painting) but averages to ~50% across all trades.

The total labor share of home sale price = (construction cost as % of sale price) × 0.50.

Construction costs as % of sale price (NAHB):
- 2007: 48.1% (anomalous — housing bubble inflated lot costs to 24.5%)
- 2009: 59.0%
- 2013: 61.7%
- 2015: 61.8%
- 2017: 55.6%
- 2019: 61.1%
- 2022: 60.8%
- 2024: 64.4%

Pre-1998: estimated at ~60% based on the premise that land was a smaller share of home prices historically (cheaper suburban land), offset by potentially lower overhead/marketing. Marked low confidence.

## Sources

- NAHB, "Cost of Constructing a Home in 2024," Eric Lynch, January 2025 — https://www.nahb.org/news-and-economics/housing-economics-plus/special-studies/special-studies-pages/cost-of-constructing-a-home-in-2024
- NAHB, "Cost of Constructing a Home in 2022," Eric Lynch, February 2023 — https://www.nahb.org/-/media/NAHB/news-and-economics/docs/housing-economics-plus/special-studies/2023/special-study-cost-of-constructing-a-home-2022-february-2023.pdf
- NAHB, "Cost of Constructing a Home" (2019 data), Carmel Ford, January 2020 — https://www.nahb.org/-/media/8F04D7F6EAA34DBF8867D7C3385D2977.ashx
- NAHB Blog, "Cost to Construct a Home Rose Significantly Over Last Two Years," January 2025 — https://www.nahb.org/blog/2025/01/cost-of-construction-survey-2024
- Eye on Housing, "Cost of Constructing a Home in 2024," January 2025 — https://eyeonhousing.org/2025/01/cost-of-constructing-a-home-in-2024/
- Eye on Housing, "Cost of Constructing a Home in 2022," March 2023 — https://eyeonhousing.org/2023/03/cost-of-constructing-a-home-in-2022/
- Construction Physics (Brian Potter), "Construction Cost Breakdown and Partial Industrialization" — https://www.construction-physics.com/p/construction-cost-breakdown-and-partial
- FRED, Median Sales Price for New Houses Sold (MSPNHSUS) — https://fred.stlouisfed.org/series/MSPNHSUS
- Census Bureau / HUD, "Median and Average Sales Prices of New Homes Sold" — https://www2.census.gov/programs-surveys/nrs/tables/time-series/historical-nrs/uspricemon.pdf
- FedPrimeRate.com, "Average & Median Sale Price for A New Home" — https://www.fedprimerate.com/new_home_sales_price_history.htm
- BLS, Occupational Employment and Wage Statistics, Construction Managers (11-9021) — https://www.bls.gov/oes/current/oes119021.htm
- NAHB, "Government Regulation in the Price of a New Home," May 2021 — https://www.nahb.org/-/media/NAHB/news-and-economics/docs/housing-economics-plus/special-studies/2021/special-study-government-regulation-in-the-price-of-a-new-home-may-2021.pdf
- ProSales, "Construction Costs Took 59% of Total Home Price in 2009: NAHB" — https://www.prosalesmagazine.com/news/industry-trends/construction-costs-took-59-of-total-home-price-in-2009-nahb_o

## Notes

- **The GC is the builder in most residential construction.** Unlike commercial construction where a separate GC manages the project, in residential new construction the builder IS the general contractor. The NAHB profit + overhead data directly measures their compensation. A fee-only GC (hired by a homeowner to manage a custom build) would typically earn just 10-20% of construction costs, which works out to roughly 6-13% of total home price — less than the builder model.

- **2007 is an outlier for total labor share.** During the housing bubble, lot costs ballooned to 24.5% of sale price (vs. 13-21% in other years), which compressed the construction cost share to 48.1%. This made labor's share of the total home price appear to drop to ~24%, but labor's share of *construction costs* didn't change — it was the denominator (home price) that was inflated by land speculation.

- **The GC ratio is strikingly flat.** Despite massive changes in home prices, building technology, regulation, and market conditions, the GC/builder's combined profit + overhead has stayed in a narrow 14-18% band since 1998. This suggests the residential construction market is reasonably competitive — builders can't extract outsized margins for long because entry barriers are low.

- **Regulatory costs are a growing "hidden" component.** NAHB estimates regulations added $93,870 per home in 2021 (23.8% of sale price), up 44% from $65,224 in 2011. These costs are embedded within construction costs, lot costs, and overhead — they don't appear as a separate line item. This regulatory burden is a growing share of what the customer pays but does NOT flow to the GC as compensation.

- **Land vs. labor is the real story.** The most dramatic shift in home construction economics is land cost compression in recent years (from 24.5% in 2007 to 13.7% in 2024). Meanwhile, construction costs (which include labor) have risen from 48% to 64% of sale price. This doesn't mean construction got more expensive relative to everything else — it means lot costs temporarily spiked during the bubble and have since normalized while construction costs grew steadily.

- **Total labor is the dominant cost in home building.** At ~30% of the final home price and ~50% of construction costs, labor is the single largest cost component in residential construction. This has been true since at least 1945 and shows no sign of changing — residential construction remains one of the most labor-intensive industries in the economy.

- **Production builders vs. custom builders:** The NAHB survey captures mostly production/spec builders. Custom builders (building one home at a time for a specific client) may have higher overhead percentages but similar profit margins. The ratio differences between these models are small and don't change the overall picture.

<!-- COMPLETE -->
