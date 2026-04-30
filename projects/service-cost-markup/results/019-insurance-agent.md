# Insurance — Insurance Agent

## Summary

The insurance agent's share of the customer's premium dollar has been in steady decline for six decades, falling from roughly 15% in 1960 to under 9% today. The driver isn't collapsing commission rates per policy — agents who sell still earn 8–15% — it's the growing market share of direct-to-consumer channels (GEICO, Progressive online, USAA) that bypass agents entirely. The customer hasn't benefited proportionally: premiums rose tenfold while the agent's slice shrank by a third. The savings from cutting out the middleman went mostly to insurer profits and rising claims costs, not to lower prices.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | 18 | 120 | per auto policy, annual | 280 | 15.0 | low |
| 1970 | 25 | 175 | per auto policy, annual | 300 | 14.3 | low |
| 1980 | 45 | 335 | per auto policy, annual | 320 | 13.4 | low |
| 1990 | 66 | 530 | per auto policy, annual | 380 | 12.5 | med |
| 2000 | 79 | 685 | per auto policy, annual | 420 | 11.5 | med |
| 2003 | 88 | 830 | per auto policy, annual | 430 | 10.6 | med |
| 2010 | 83 | 791 | per auto policy, annual | 480 | 10.5 | med |
| 2015 | 90 | 897 | per auto policy, annual | 490 | 10.0 | med |
| 2020 | 100 | 1,048 | per auto policy, annual | 500 | 9.5 | high |
| 2024 | 117 | 1,300 | per auto policy, annual | 500 | 9.0 | med |

## Methodology

**Ratio definition:** Agent commission per policy ÷ average annual auto insurance premium = the fraction of each premium dollar that goes to the agent who sold the policy.

**Customer cost proxy:** Average annual auto insurance expenditure per insured vehicle. For 2003–2022, this uses NAIC Auto Insurance Database figures (total written premiums ÷ liability car-years). For 2000 and earlier, estimates are derived by back-calculating from the 2003 anchor using the BLS Consumer Price Index for Motor Vehicle Insurance (CPI series). The CPI-based estimates for 1960–1990 carry higher uncertainty because coverage patterns changed significantly (liability-only was common in the 1960s; comprehensive/collision became standard by the 1990s). The 2024 figure reflects premium growth trends extrapolated from 2022 NAIC data and recent CPI increases (~17% CPI jump 2022–2024).

**Worker compensation proxy:** Commission earned per auto policy, computed as commission rate × average premium. The commission rate is the P&C industry-wide commission and brokerage expense ratio — total commission/brokerage expenses paid by insurers divided by net premiums written. This includes commissions to both captive and independent agents/brokers but excludes other insurer operating expenses (salaries of insurer employees, rent, taxes, etc.). For 2020–2021, S&P Global Market Intelligence reports net commission and brokerage expense of $73.9B (2020) and $78.7B (2021) on approximately $680B and $730B in net P&C premiums, yielding a ~10.9% commission rate. The P&C industry expense ratio (which includes commissions plus all other underwriting expenses) averaged 27.1% of premiums from 2012–2025 per CEIC/NAIC data, with commissions comprising roughly 40–45% of total expenses.

For earlier decades, the commission rate is estimated based on market structure: in 1960, virtually all P&C insurance was sold through agents (captive agents at 5–10%, independents at 10–20%), yielding an estimated industry blended rate of ~15%. As direct writers grew — GEICO (founded 1936, accelerated under Buffett post-1996), Progressive (launched online quoting late 1990s), USAA — the industry blended rate declined because a growing share of premiums carried zero agent commission.

**Customers per worker:** Estimated auto policies per producing P&C agent. Industry data suggests a typical P&C agent manages 400–800 active auto policies (per InsuranceBee, agency KPI benchmarks). The estimate grows from ~280 in 1960 to ~500 in 2020, reflecting technology enabling larger books of business. These figures are calibrated so that (commission per policy × policies per agent) approximates BLS median annual income for insurance sales agents ($52,180 in 2020, $60,370 in 2024).

**Why auto insurance as the proxy:** Auto has the best longitudinal data (NAIC database, BLS CPI series back to 1935) and is the most common P&C product. Home insurance would tell a similar story. Life insurance has a very different commission structure (40–100% first-year, 2–5% renewal) and would distort comparison with other service industries.

**Why this proxy over alternatives:** The commission rate directly answers the ticket's question: "what fraction of the premium goes to the agent?" Alternative approaches — like comparing agent income to total industry premiums — would double-count because one agent's income already represents commissions from many policies. The per-policy ratio is the clean, apples-to-apples metric.

## Sources

- NAIC Auto Insurance Database Reports & Average Premium Supplements (2003–2022 expenditure per vehicle data): https://content.naic.org/sites/default/files/aut-db.pdf
- Insurance Information Institute, Facts & Statistics: Auto Insurance (historical expenditure tables, combined ratio data): https://www.iii.org/fact-statistic/facts-statistics-auto-insurance
- BLS Consumer Price Index for Motor Vehicle Insurance, 1935–2024 (CPI series used for pre-2003 premium estimates): https://www.in2013dollars.com/Motor-vehicle-insurance/price-inflation
- BLS Occupational Employment and Wage Statistics, SOC 41-3021 Insurance Sales Agents (employment and wage data): https://www.bls.gov/oes/current/oes413021.htm
- BLS Occupational Outlook Handbook, Insurance Sales Agents (568,800 employed in 2024, $60,370 median wage): https://www.bls.gov/ooh/sales/insurance-sales-agents.htm
- S&P Global Market Intelligence (net commission and brokerage expense data, 2020–2021): https://www.spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/us-p-c-insurers-expense-ratio-falls-to-lowest-level-in-5-years-69621363
- CEIC Data, U.S. P&C Insurance Combined Ratio and Expense Ratio (2012–2025 industry financial snapshots): https://www.ceicdata.com/en/united-states/property--casualty-insurance-industry-financial-snapshots/property--casualty-insurance-combined-ratio
- Consumer Federation of America, "Higher Agent/Broker Commissions in Home and Auto Insurance Often Mean Higher Rates, But Not Better Service" (2017, commission rate analysis): https://consumerfed.org/press_release/higher-agentbroker-commissions-in-home-and-auto-insurance-often-mean-higher-rates-but-not-better-service/
- InsuranceBee, US Insurance Agent Industry Statistics (agent employment, demographics, book of business data): https://www.insurancebee.com/blog/insurance-agent-industry-statistics
- Data USA, Insurance Sales Agents profile (employment and wage trends 2014–2023): https://datausa.io/profile/soc/insurance-sales-agents
- Independent Insurance Agents & Brokers of America (Big "I"), 2025 Market Share Report (distribution channel market share data): https://www.independentagent.com/news/big-i-releases-2025-market-share-report/
- NAIC 2021 Annual Property & Casualty Insurance Industry Report: https://content.naic.org/sites/default/files/inline-files/2021%20Annual%20Property%20&%20Casualty%20and%20Title%20Insurance%20Industry%20Report.pdf

## Notes

- **The "cut out the middleman" paradox.** Direct-to-consumer insurers like GEICO save ~6 percentage points on operating costs by not paying agent commissions. But premiums for direct writers are not consistently cheaper — CFA found that low-commission insurers averaged 3.9% commission while high-commission insurers averaged 7.7%, with the savings not reliably passed to consumers. When the agent is removed, the savings tend to flow to insurer marketing budgets (GEICO spent $2.1B on advertising in 2022), technology investment, and shareholder returns rather than lower premiums.

- **Distribution channel shift.** Independent agents wrote 39% of personal lines premiums in 2024 (up from 35.7% in 2020), captive agents about 35% (down from 37% in 2018), and direct writers about 26% (roughly stable). The long-term trend since the 1970s has been away from exclusive/captive agents toward both independent agents and direct channels, but the most recent data shows independents clawing back share — possibly because the complexity of modern insurance products makes professional advice more valuable.

- **Commission rate vs. commission income.** Individual agent commission rates per policy haven't changed dramatically — an independent agent still earns 10–15% on a new auto policy. What's changed is (a) more policies are sold without any agent, dragging down the industry average, and (b) agents now manage larger books of business with technology, earning more total income from more policies at similar per-policy rates.

- **Pre-2000 data is rough.** The NAIC auto insurance database in its current form starts around 2003. Pre-2000 premium estimates rely on the BLS CPI for motor vehicle insurance, which tracks price for a standardized basket of coverage. Since actual coverage levels changed significantly (many drivers carried only liability in the 1960s vs. full coverage today), the CPI-derived premium estimates for 1960–1980 may understate actual spending per vehicle. Commission rate estimates for this period are based on market structure analysis rather than direct measurement.

- **Auto vs. other lines.** This analysis uses auto insurance as the premium proxy because it has the best longitudinal data. Home insurance commission rates are similar (10–15% for independents). Life insurance has dramatically higher first-year commissions (40–100%) but much lower renewals (2–5%), making it structurally different. Commercial lines commissions are higher (12–20%) and have actually *increased* per premium dollar over the last decade.

- **The loss ratio context.** The P&C industry loss ratio (claims paid ÷ premiums collected) has averaged 65–75% over the past several decades, with the combined ratio (losses + expenses) typically near 100%. This means roughly 25–35 cents of every premium dollar goes to non-claims expenses. Of that, commissions represent about 10–11 cents — the single largest expense category. The rest covers insurer salaries, technology, marketing, taxes, and profit.

<!-- COMPLETE -->
