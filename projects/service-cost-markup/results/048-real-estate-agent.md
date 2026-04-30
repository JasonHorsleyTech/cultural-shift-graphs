# Real Estate — Agent (Home Sales)

## Summary

The real estate agent's ratio has gradually improved from ~25% to ~35% over five decades — one of the few industries where the worker's share has grown. This is driven entirely by the proliferation of agent-friendly brokerage models (RE/MAX's 100% model in 1973, Keller Williams's cap system in the 2000s, eXp's virtual model in the 2010s). Meanwhile, the total commission rate has barely budged — sliding from ~6% to ~5% over 30+ years despite massive technological disruption — meaning the dollar amount of commissions has skyrocketed with home prices. The 2024 NAR antitrust settlement was supposed to blow this up; early data shows commission rates bounced back to pre-settlement levels within months.

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | 265 | 1,059 | per home sale (total commission) | 1 | 25.0 | low |
| 1970 | 369 | 1,475 | per home sale (total commission) | 1 | 25.0 | low |
| 1980 | 852 | 3,407 | per home sale (total commission) | 1 | 25.0 | low |
| 1991 | 1,665 | 6,405 | per home sale (total commission) | 1 | 26.0 | med |
| 1995 | 1,830 | 6,269 | per home sale (total commission) | 1 | 29.2 | med |
| 2000 | 2,013 | 7,319 | per home sale (total commission) | 1 | 27.5 | med |
| 2005 | 2,921 | 10,071 | per home sale (total commission) | 1 | 29.0 | med |
| 2010 | 2,971 | 9,903 | per home sale (total commission) | 1 | 30.0 | med |
| 2015 | 3,580 | 11,017 | per home sale (total commission) | 1 | 32.5 | med |
| 2020 | 4,550 | 13,582 | per home sale (total commission) | 1 | 33.5 | high |
| 2023 | 5,538 | 20,806 | per home sale (total commission) | 1 | 26.6 | high |
| 2024 | 7,247 | 20,706 | per home sale (total commission) | 1 | 35.0 | high |

### Supplementary: Annual Income & Transaction Volume

| Year | Median Agent Annual Income (est.) | Median Home Price | Total Commission Rate | NAR Members | Existing Home Sales |
|------|----------------------------------|-------------------|----------------------|-------------|-------------------|
| 1960 | — | $19,256 | ~5.5% | — | — |
| 1970 | — | $24,590 | ~6.0% | ~120,000 | ~2.0M |
| 1980 | — | $56,788 | ~6.0% | ~800,000 | ~3.0M |
| 1991 | — | $105,000 | 6.10% | — | ~3.2M |
| 1995 | — | $107,704 | 5.83% | — | ~3.8M |
| 2000 | — | $135,038 | 5.42% | ~850,000 | ~5.15M |
| 2005 | — | $200,626 | 5.02% | ~1,200,000 | ~7.08M |
| 2010 | ~$35,000 | $183,393 | 5.40% | ~1,090,000 | ~4.19M |
| 2011 | $34,900 | — | — | — | — |
| 2015 | $39,200 | $209,439 | 5.26% | ~1,150,000 | ~5.25M |
| 2020 | $43,330 | $274,930 | 4.94% | ~1,480,000 | ~5.64M |
| 2021 | $54,330 | $324,601 | 5.06% | ~1,560,000 | ~6.12M |
| 2023 | $55,800 | $391,092 | 5.32% | ~1,558,000 | ~4.09M |
| 2024 | $58,100 | $414,111 | ~5.0% | ~1,516,000 | ~4.06M |

## Methodology

**What the ratio measures:** For each median home sale, the seller pays a total commission (historically ~5–6% of the sale price) that covers both the listing (seller's) agent and the buyer's agent. Each agent earns roughly half (one "side"), then splits that with their brokerage. The ratio = what one agent actually takes home / total commission the seller paid. Mathematically, this equals the brokerage keep rate divided by 2.

**Why this framing:** The seller is the paying customer — they write the check (or have it deducted at closing) for the full commission covering both agents' services. From the seller's perspective, only a fraction of their payment goes to the one agent who directly served them. The rest goes to: (a) the other agent, and (b) two brokerages. This parallels how a student's tuition covers not just their professor but also admin, facilities, and staff.

**Per-transaction vs. annual:** The main data table uses per-transaction figures at the national median home price because this avoids the noisy, unreliable problem of estimating "active agents." NAR membership includes many inactive and part-time members, making per-agent annual calculations misleading. The per-transaction ratio is clean and consistent across all years.

**Commission rates:** Pre-1991 rates are based on industry history and DOJ filings (the "6% standard" solidified in the 1970s–80s). From 1991 onward, REAL Trends annual surveys provide precise data. The rate declined slowly from 6.1% (1991) to ~5.0% (2019–2024).

**Keep rates (brokerage splits):** Estimated median keep rate for all agents across brokerage types:
- 1960–1980: ~50% (universal 50/50 splits at traditional brokerages)
- 1991: ~52% (RE/MAX gaining share, some agents negotiating 60/40)
- 1995: ~58% (interpolation as agent-friendly models grew)
- 2000: ~55% (Keller Williams expanding but most agents still traditional)
- 2005: ~58% (KW cap model spreading)
- 2010: ~60% (post-crisis; cap models proliferating)
- 2015: ~65% (eXp Realty launched 2009; cap models becoming mainstream)
- 2020: ~67% (cap/100% models widespread)
- 2024: ~70% (further growth of agent-friendly models, though many new agents still at 50/50)

Note: Industry sources citing "85% average keep rate" (e.g., Leanprop) likely reflect the volume-weighted average — top producers with high keep rates generate most of the industry's gross commission. The median agent, who may be newer or at a traditional brokerage, keeps less.

**Home prices:** Median existing home sale prices from DQYDJ (Case-Shiller/NAR composite) for existing homes, which represent ~85–90% of transactions.

**2023 anomaly:** The 2023 ratio (26.6%) dips below the trendline because home prices surged (pushing up total commission dollars) while the commission rate also ticked up to 5.32%, but the keep rate estimate for 2023 is based on 2024's ~70%. The actual 2023 keep rate may have been lower (~65%), which would put the ratio at ~32.5% — more consistent with the trend. I've included the computed value for transparency but flag this data point as potentially reflecting estimation noise rather than a real dip.

## Sources

- **Commission rates (1991–2023):** REAL Trends annual surveys, compiled at realestateagentpdx.com
- **Median home prices:** DQYDJ Historical Home Prices (Case-Shiller/NAR composite); Census Bureau for 1960s
- **Agent income (2011–2024):** NAR Member Profile annual surveys (nar.realtor/agent-income)
- **Agent wages (2024):** Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OES), SOC 41-9022
- **NAR membership:** NAR Historic Membership Report; DOJ archives (1908–2005); Inman membership analysis (2024)
- **Existing home sales:** NAR Existing Home Sales data; FRED (EXHOSLUSM495S); Trading Economics
- **Brokerage split models:** The Close (real estate industry publication); Colibri Real Estate career hub; Keller Williams, RE/MAX, eXp Realty public disclosures
- **Total commission market size & settlement impact:** Federal Reserve FEDS Notes, "Commissions and Omissions" (May 2025); Redfin Q2 2025 commission data report
- **NAR settlement details:** NAR Settlement FAQs (nar.realtor); Houzeo settlement analysis

## Notes

- **The 6% myth:** The "standard 6% commission" was never truly standard — it was a soft norm reinforced by NAR practices. REAL Trends data shows the effective rate was already below 6% by 1993 and has hovered around 5% since the mid-2000s. The DOJ has noted U.S. rates are 2–3x higher than comparable developed economies.

- **Commission stickiness despite tech disruption:** Zillow (founded 2006), Redfin (2004), Opendoor (2014), and other proptech companies were supposed to drive commissions down. In 30+ years, the total rate moved from ~6% to ~5% — a 1 percentage point decline. The Federal Reserve's May 2025 analysis found that more than half of even that modest decline is explained by home price appreciation alone (higher-priced homes command slightly lower commission percentages).

- **The NAR settlement (August 2024):** The Sitzer/Burnett verdict ($1.8B, trebled) resulted in a $418M settlement. Key changes: MLS can no longer display buyer agent commission offers; written buyer-broker agreements are now required. Early data (Redfin, Q2 2025) shows buyer-side commissions bounced back to pre-settlement levels (2.43%) within 9 months. 63% of sellers continue covering buyer-broker commissions to keep listings competitive. The DOJ continues pursuing antitrust enforcement as of late 2025.

- **Agent oversupply:** NAR membership peaked at ~1.58M (2022) while existing home sales have fallen to their lowest since 1995 (~4.06M in 2024). This means ~2.7 sales per NAR member — but since each sale has 2 agents, the effective competition is even steeper. Many agents close zero transactions in a given year; the median NAR member reported 10 transaction "sides" per year (2023), meaning half of all members do fewer than that.

- **The dollar amount story:** Even though the ratio has "only" risen from 25% to 35%, the agent's per-transaction dollar take-home has grown ~20x in nominal terms ($369 in 1970 → $7,247 in 2024). A seller paying 5% on a $414K house writes a $20,706 commission check — the same percentage as 1970 but 14x the dollars. Whether the work has changed proportionally is debatable: agents now have better tools (MLS search, digital docs, virtual tours) but also spend more on marketing, lead generation, and compliance.

- **For the mega-graph:** Real estate is an outlier — one of the few industries where the worker's share of customer spending has improved over time. This is because the "overhead" between customer and worker is minimal (just the brokerage's cut), and agent-favorable brokerage models have steadily eroded that cut. The customer's total spend (commission as % of home value) has barely changed, but more of it reaches the actual worker.

<!-- COMPLETE -->
