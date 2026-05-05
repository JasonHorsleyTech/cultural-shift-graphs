# Computing: Data Center Electricity Consumption 1990–2022

## What to Research

Total US electricity consumed by data centers and computing infrastructure, annually from 1990–2022 (or earliest available).

This is the **consumption metric** for the computing domain. Despite enormous efficiency gains per computation, total electricity for computing has grown because we do vastly more computing.

## Where to Look

1. **Primary:** Koomey (2011) "Growth in Data Center Electricity Use 2005 to 2010" — the landmark study. Updated by Shehabi et al. (2016) for DOE/LBNL: "United States Data Center Energy Usage Report."
2. **Secondary:** IEA "Data Centres and Data Transmission Networks" reports (2019, 2020, 2021, 2022) — include US estimates.
3. **Tertiary:** Masanet et al. (2020) "Recalibrating global data center energy-use estimates" in Science — has US and global figures.
4. **Fallback:** Uptime Institute annual surveys; industry reports from Cisco, Gartner.

Note: pre-2000 data center electricity is very poorly documented. Early estimates may only be available for 2000+.

## Scope

- **Include:** Electricity consumed by servers, storage, networking equipment in dedicated data centers AND in enterprise server rooms/closets. Include cooling (PUE-adjusted total).
- **Exclude:** End-user devices (PCs, laptops, phones). We want infrastructure computing, not the entire electronics ecosystem.
- If total computing electricity (including end-user) is available as a separate number, include it as a supplemental series.

## Output Format

### US Data Center Electricity Consumption

| Year | Value | Notes |
|------|-------|-------|

**Unit:** TWh per year
**Source:** [exact study/report and table]
**Coverage:** All US data centers (hyperscale + enterprise + colocation)
**Confidence:** medium (estimates vary by study; note which estimate methodology)

### US Data Center Electricity as Share of Total US Electricity

| Year | Value | Notes |
|------|-------|-------|

**Unit:** percentage
**Source:** [derived from above + EIA total electricity data]
**Confidence:** medium

## Data Gaps

- Pre-2000 estimates are very uncertain (±50% or more). Some studies start at 2000 or 2005.
- Post-2020, AI training loads may have caused a step-change not yet captured in published studies.
- Different studies give different numbers for the same year (boundary definition issues). Pick one consistent source methodology and stick with it.

## Methodology Notes

- Key challenge: defining what counts as a "data center" vs. an office server room vs. a network closet. Studies differ.
- Shehabi et al. (2016) uses a bottom-up model: number of servers × average power per server × PUE × hours.
- IEA uses a mix of bottom-up and top-down (electricity bills from major operators).
- Consistency over time > absolute accuracy. Pick one methodology.

## What "Good Data" Looks Like

- Should show growth from essentially negligible (~10-20 TWh?) in 1990 to ~70-100 TWh by 2020.
- Growth was rapid 2000-2005, then slowed 2010-2018 (efficiency gains in servers + cloud consolidation + improving PUE offset demand growth).
- Post-2018, renewed growth due to AI/ML workloads.
- As share of US electricity: roughly 0.5% (2000) → 2-3% (2020).
