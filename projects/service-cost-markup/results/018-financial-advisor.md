# Wealth Management — Financial Advisor

## Summary

The financial advisor ratio tells a story of fee-structure engineering. During the commission era (1980s–1990s), advisors kept roughly 40% of relatively modest per-client revenue ($500–1,000/year in trade commissions). The shift to AUM-based fees in the late 1990s–2000s dramatically increased total revenue per client (to $3,000–5,500+/year as portfolios grew and the 1% fee compounded), but advisor compensation only roughly doubled. The ratio collapsed from ~40% to ~20% — the advisor's absolute pay rose, but the industry captured far more revenue per unit of advisor labor. The ratio has stabilized around 20% since 2015.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1985 | 40,000 | 500 | Annual brokerage commissions per client | 200 | 40% | low |
| 1990 | 52,000 | 700 | Annual brokerage commissions/fees per client | 175 | 42% | low |
| 1995 | 58,000 | 1,000 | Annual advisory/brokerage fees per client | 150 | 39% | low |
| 2000 | 72,000 | 1,800 | Annual advisory fees (blended commission + AUM) | 120 | 33% | low/med |
| 2005 | 90,000 | 3,200 | Annual advisory fees (AUM ~1%) | 110 | 26% | med |
| 2010 | 82,000 | 3,000 | Annual advisory fees (AUM ~1%) | 105 | 26% | med |
| 2015 | 95,000 | 4,200 | Annual advisory fees (AUM ~1%) | 100 | 23% | med |
| 2020 | 98,000 | 5,000 | Annual advisory fees (AUM ~1%) | 100 | 20% | med/high |
| 2024 | 108,000 | 5,500 | Annual advisory fees (AUM ~1%) | 100 | 20% | med/high |

## Methodology

**Worker compensation** is the average (mean) total compensation for personal financial advisors, using BLS Occupational Employment Statistics (SOC 13-2052) where available (2000+) and industry estimates for earlier decades. BLS captures W-2 wages, salary, bonuses, and commissions for employees. One caveat: BLS may undercount income for independent RIA owners whose compensation flows through K-1/business distributions rather than W-2 wages. This likely understates the ratio by 2-5 percentage points in the 2015–2024 period as the independent RIA channel grew.

**Customer cost** represents the average annual fee a household pays for financial advisory services:

- **1985–1995 (commission era):** Per-client costs estimated from average trade commissions. Pre-1975, fixed NYSE commissions were ~1–2% per trade ($49+ per 100 shares). After May Day 1975 deregulation, commissions fell by ~90% over two decades, but full-service brokers still charged $75–200 per trade. A typical retail client making 5–8 trades/year would pay $375–1,600/year. I used conservative mid-range estimates reflecting the average retail client (many small, some large).

- **2000 (transition):** Blended figure reflecting the industry's partial shift from commission to AUM fees. By 2000, roughly 40–55% of advisor revenue came from fee-based accounts (wrap fees, AUM), driven by the 1995 Tully Commission recommendation that level fees reduce churning incentives. The rest was still commission-based. The $1,800 blended figure reflects this mix.

- **2005–2024 (AUM era):** Primarily AUM-based fees. The industry standard is ~1% of assets under management on the first $1M, declining to 0.5–0.85% on larger portfolios. Customer cost = blended AUM rate × average advisory client portfolio size. Average advisory client portfolios grew from ~$300K (2005) to ~$500–550K (2024), driven by market appreciation and the advisory industry moving upmarket. By 2024, 86% of advisory firms use AUM as their primary fee model.

**Customers per worker** is the average number of client households per advisor. This declined from ~200 in the commission era (transaction-focused, less relationship-intensive) to ~100 in the AUM era (deeper planning relationships, more time per client). Current industry benchmarks show 50–150 clients per advisor, with ~100 as a common mid-range figure. Kitces Research shows optimal capacity at ~100 clients for solo advisors.

**Why AUM fee only, not total investment cost?** A client's total cost also includes fund expense ratios (~0.5–1.0%), custodian fees, and transaction costs. I excluded these because they flow to fund companies and custodians, not to the advisory firm employing the advisor. The AUM advisory fee is the direct cost of the advisor's service.

**The structural break:** The commission-to-AUM transition (roughly 1995–2005) makes true apples-to-apples comparison difficult. In the commission era, the client controlled their cost (fewer trades = lower fees). In the AUM era, the fee is automatic and scales with portfolio appreciation — the client pays more each year their portfolio grows, regardless of how much advisor attention they receive. This structural change is itself the most important finding.

## Sources

- Bureau of Labor Statistics, Occupational Employment and Wage Statistics: Personal Financial Advisors (SOC 13-2052), multiple years (2000–2024) — https://www.bls.gov/oes/current/oes132052.htm
- BLS Occupational Outlook Handbook: Personal Financial Advisors — https://www.bls.gov/ooh/business-and-financial/personal-financial-advisors.htm
- Kitces, Michael. "Transforming The 1% AUM Fee From Distribution To Advice" — https://www.kitces.com/blog/great-convergence-1-aum-fee-schedule-for-investment-advisers-and-12b-1-and-wrap-fees-for-brokers/
- Kitces, Michael. "How Financial Advisors Actually Charge For Their Services" — https://www.kitces.com/blog/financial-advisors-charge-services-fee-structure-advisory-firm-profession-aum-pricing-insight/
- Kitces, Michael. "Financial Advisor Success Requires Just 50 Great Clients" — https://www.kitces.com/blog/50-great-clients-how-many-clients-does-a-financial-advisor-need/
- Kitces, Michael. "New Kitces Research On What Improves Advisor Productivity" — https://www.kitces.com/blog/financial-advisor-productivity-revenue-per-advisor-experience-expertise-team-leverage/
- SmartAsset. "Financial Advisor Payout Grid Comparison" — https://smartasset.com/advisor-resources/financial-advisor-payout-grid-comparison
- SmartAsset. "Average Number of Clients Per Financial Advisor" — https://smartasset.com/advisor-resources/average-number-of-clients-per-financial-advisor
- Investment Adviser Association. "Industry Snapshots" — https://www.investmentadviser.org/industry-snapshots/
- Cerulli Associates. "Independent and Hybrid RIA Channels Lead in Advisor Headcount Growth" — https://www.cerulli.com/press-releases/independent-and-hybrid-ria-channels-lead-in-advisor-headcount-growth
- SEC Historical Society. "Ending Fixed Commission Rates" — https://www.sechistorical.org/museum/galleries/rev/rev02c.php
- 1975 Stock Brokerage Commission Deregulation — https://en.wikipedia.org/wiki/1975_Stock_Brokerage_Commission_Deregulation
- Congressional Budget Office. "Trends in the Distribution of Family Wealth, 1989 to 2022" — https://www.cbo.gov/publication/60807
- Federal Reserve. "Distribution of Household Wealth in the U.S. since 1989" — https://www.federalreserve.gov/releases/z1/dataviz/dfa/distribute/chart/

## Notes

- **The 1% fee is deceptively expensive.** A 1% AUM fee on a $500,000 portfolio costs $5,000/year. Kitces Research shows advisors spend roughly 12 hours/year per established client (meetings, plan updates, servicing). That's an effective billing rate of ~$417/hour for the firm — but the advisor personally keeps only ~$100/hour of that after firm overhead, compliance, technology, and profit.

- **Wirehouse payout grids vs. independent RIAs.** Wirehouse advisors (Merrill Lynch, Morgan Stanley, UBS, Wells Fargo) keep 34–51% of their production through payout grids. Independent RIA owners keep 70%+ of revenue but pay their own overhead (compliance, technology, office, staff), netting ~40–55% after expenses. The industry has shifted toward RIAs: wirehouse headcount declined ~10% from 2012–2022 while RIA headcount grew ~66%. This structural shift slightly raises the industry-wide ratio, but BLS wage data may not fully capture independent owner income.

- **Robo-advisors haven't moved the needle (yet).** Betterment, Wealthfront, and similar robo-advisors charge 0.25% AUM — one-quarter the human advisor fee. But they manage a small fraction of total industry assets. The human advisor industry has largely competed by adding comprehensive financial planning services (tax, estate, insurance) rather than cutting fees.

- **The fiduciary rule saga.** The DOL's 2016 fiduciary rule (partially struck down in 2018) aimed to shift advisors from commission-based (suitability standard) to fee-based (fiduciary standard) compensation. The practical effect accelerated the existing commission-to-AUM transition rather than changing the advisor's share. It relabeled the revenue stream more than it redirected it.

- **The ratio flatlined at 20%.** Since ~2015, the ratio has stabilized at roughly 20%. Advisor compensation has grown modestly ($95K → $108K), roughly matching the growth in average client portfolios and thus AUM revenue. Without a structural change (fee compression from robo-advisors, shift to flat-fee models), there's no clear catalyst for the ratio to move significantly in either direction.

- **What the client is really paying for has changed.** In the commission era, clients paid for trade execution. In the AUM era, clients pay for ongoing portfolio management and financial planning. Whether the value proposition justifies a 5–10x increase in annual fees is the central debate in the industry. The advisor does more holistic work per client today, but the fee scales with wealth, not with work.

<!-- COMPLETE -->
