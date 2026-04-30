# AI & Data Center Water Usage

## What to research

Build a detailed picture of **water consumption by data centers in the United States**, with a focus on the AI-driven growth since ~2020. This is the thing everyone is panicking about — we need the real numbers to show whether the panic is proportionate.

## What to find

### Historical data center water use (2015-2025)
- Total US data center water consumption per year
- Break out **direct** (on-site cooling) vs **indirect** (water used to generate the electricity the data center consumes)
- Track the growth rate year over year

### AI-specific vs traditional data center
- What fraction of data center water use is attributable to AI workloads (training + inference) vs traditional cloud/enterprise computing?
- How much more water-intensive is a GPU-heavy AI training cluster vs a traditional CPU server rack?
- Per-query comparisons: water per Google search vs water per ChatGPT query (this is a popular stat — find the primary source and verify it)

### Projections (2025-2030)
- Major projections for data center water consumption growth
- What are the assumptions? (GPU efficiency improvements, new cooling tech like immersion cooling, geographic shifts to cooler/wetter climates)

### Company-level data
- Microsoft, Google, Meta, Amazon have published water usage in sustainability reports. What do they say?
- How much has each company's water usage grown since 2020 (pre-AI boom)?

### Comparison context
- Data center water use as a percentage of total US water withdrawal
- Data center water use compared to: one golf course, residential lawn watering in Phoenix, the almond industry, a single coal plant
- What specific comparisons make the scale tangible?

## Data source hierarchy

1. **Company sustainability reports** — Microsoft (2023, 2024), Google Environmental Report, Meta Sustainability Report. These have actual consumption figures.
2. **International Energy Agency (IEA)** — Reports on data center energy and water use.
3. **Lawrence Berkeley National Lab** — "United States Data Center Energy Usage Report" series.
4. **Brookings Institution** — "AI, data centers, and water" (2024/2025 analysis).
5. **EESI (Environmental and Energy Study Institute)** — "Data Centers and Water Consumption" briefing.
6. **Shehabi et al.** — Academic papers on data center resource consumption.
7. **Uptime Institute** — Industry reports on data center infrastructure trends.
8. **Li et al. (2023)** — "Making AI Less Thirsty" (UC Riverside). Widely cited paper on AI water consumption per query.

## Output format

### Time series table
```
| Year | Direct Water (Bgal/year) | Indirect Water (Bgal/year) | Total (Bgal/year) | Total (Mgal/day) | % of US Total Withdrawal | Source |
```

### Comparison table
```
| Item | Water Use (Mgal/day) | Context |
```
e.g., "All US data centers" vs "All US golf courses" vs "Residential lawns in Arizona"

### Per-query table
```
| Service | Water per query (liters) | Source | Notes |
```

## What "good data" looks like

- Clear trend line from 2015-2025 showing the AI-era inflection
- Direct water is small (~48 Mgal/day in 2023 from initial research); indirect is larger (~578 Mgal/day)
- Even the high-end 2028 projections should still be <1% of total US water withdrawal
- Company-level data corroborates the national estimates
- The comparison table makes the scale viscerally clear (e.g., "all AI data centers in the US use less water than the golf courses in Maricopa County, Arizona")
