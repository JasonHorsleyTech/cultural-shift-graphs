# Communication: Network Energy Efficiency 1995–2022

## What to Research

The energy consumed per unit of data transmitted through telecommunications and internet networks, from 1995–2022 (or earliest available). This is the **efficiency metric** for the communication domain.

## Where to Look

1. **Primary:** Andrae & Edler (2015) "On Global Electricity Usage of Communication Technology" and subsequent updates — provides energy per GB for fixed and mobile networks by year.
2. **Secondary:** IEA "Data Centres and Data Transmission Networks" reports (2019-2022) — have energy intensity (kWh per GB) trends for fixed and mobile networks.
3. **Tertiary:** Cisco Visual Networking Index (VNI) reports — traffic data with some energy estimates.
4. **Academic:** Coroama & Hilty (2014), Aslan et al. (2018) "Electricity Intensity of Internet Data Transmission: Untangling the Estimates" — meta-analysis of published estimates.
5. **Fallback:** For earlier years (1995-2005), use switching/routing equipment specs × installed base to estimate energy/GB.

## Scope

- **Include:** Energy consumed by network infrastructure (routers, switches, transmission equipment, cell towers, fiber amplifiers) to move data from source to destination.
- **Exclude:** End-user devices (phones, computers) and data centers (those are in the computing domain).
- Report for both fixed-line (broadband, fiber) and mobile networks if possible. Mobile is far less energy-efficient per GB.

## Output Format

### Network Energy Intensity (Fixed-Line)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** kWh per GB transmitted (or Wh per GB — specify)
**Source:** [exact paper/report]
**Coverage:** Fixed broadband/fiber networks, core + access
**Confidence:** low-medium (estimates vary significantly between studies)

### Network Energy Intensity (Mobile)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** kWh per GB transmitted
**Source:** [exact paper/report]
**Coverage:** Cellular networks (2G/3G/4G/5G)
**Confidence:** low-medium

### Blended Average (if available)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** kWh per GB (traffic-weighted blend of fixed + mobile)
**Source:** [derived or from literature]
**Confidence:** low-medium

## Data Gaps

- Pre-2005 estimates are very uncertain. The internet was growing so fast that energy accounting lagged.
- Different studies give energy intensity estimates that vary by 5-10x for the same year (boundary definition issues: what counts as "the network"?).
- **Key requirement:** Pick ONE consistent set of estimates (prefer IEA or Andrae for recent years, Aslan meta-analysis for historical) and use it throughout. Don't mix sources for different years.

## Methodology Notes

- Energy per GB has been falling roughly 50% every 2 years (halving time). This is driven by:
  - More efficient switching/routing equipment
  - Fiber replacing copper (far more efficient per bit)
  - Each mobile generation (3G→4G→5G) is more efficient per GB than the last
  - Higher utilization of existing infrastructure
- The absolute values differ enormously between studies (ranging from 0.004 to 136 kWh/GB depending on year, network type, and system boundary). Trend direction is consistent: declining fast.
- For our purposes, the trend (rate of efficiency improvement) matters more than the absolute level.

## What "Good Data" Looks Like

- Fixed-line: ~100 kWh/GB (late 1990s) → ~1 kWh/GB (2010) → ~0.01-0.05 kWh/GB (2020). Roughly 1000-10,000x improvement.
- Mobile: ~50 kWh/GB (2010, early 3G/4G) → ~0.5-1.0 kWh/GB (2020, 4G/5G). Roughly 50-100x improvement over a decade.
- These are among the fastest efficiency improvements of any domain in the study.
