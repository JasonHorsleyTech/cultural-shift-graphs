# Communication: Total Data Traffic Volume 1995–2022

## What to Research

Total internet/telecommunications data traffic in the US (or globally, with US share), annually from 1995–2022. This is the **consumption metric** for the communication domain — how much did total data consumption grow as transmission became more efficient?

## Where to Look

1. **Primary:** Cisco Visual Networking Index (VNI) — published annually from ~2005 to 2018, with historical data and projections. Reports global and regional IP traffic in exabytes per month/year.
2. **Secondary:** Cisco Annual Internet Report (successor to VNI, 2018-2023).
3. **Tertiary:** TeleGeography — tracks international internet bandwidth and traffic.
4. **For earlier years (1995-2005):** Minnesota Internet Traffic Studies (MINTS), Andrew Odlyzko's research on internet traffic volumes.
5. **Fallback:** Derive from backbone capacity × utilization rates (industry reports from Level3/Lumen, AT&T, etc.).

## Scope

- **Include:** All IP traffic (internet, IPTV, VPN, cloud, streaming, web, etc.) transmitted over US networks.
- If only global data is available, note the US share (roughly 25-30% of global traffic historically).
- Both fixed and mobile traffic combined.
- Report in exabytes per year (or month with annual total).

## Output Format

### Total US IP Traffic

| Year | Value | Notes |
|------|-------|-------|

**Unit:** exabytes per year (EB/year)
**Source:** [Cisco VNI / Annual Internet Report / other]
**Coverage:** All US IP traffic (fixed + mobile, consumer + business)
**Confidence:** medium (these are estimates — nobody meters total internet traffic directly)

### Global IP Traffic (supplemental, if US-specific unavailable for some years)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** exabytes per year
**Source:** [Cisco VNI]
**Confidence:** medium

### US Mobile Data Traffic (supplemental)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** exabytes per year
**Source:** [CTIA annual survey, Cisco VNI mobile supplement]
**Confidence:** medium

## Data Gaps

- Pre-2000 traffic estimates are very rough (order-of-magnitude). Exact US IP traffic in 1995 is known to within maybe 2x at best.
- Cisco VNI ended its forecast series in 2018. Post-2018 data may come from Cisco Annual Internet Report or other sources. Note the transition.
- COVID (2020) caused a traffic spike (~25-30% year-over-year increase). This is real, not a gap.

## Methodology Notes

- Internet traffic has been growing at ~25-30% per year for most of the 2000s-2010s. This is one of the fastest-growing consumption metrics in the study.
- "Traffic" means data moved across networks, not data stored. A Netflix stream counts when transmitted, not when it sits in a data center.
- Video dominates: by 2020, video was ~80% of all IP traffic (streaming, video calls, surveillance, etc.).
- Traffic growth was even faster in the 2000s (~50-100% per year).

## What "Good Data" Looks Like

- 1995: very small (~few terabytes per month total US backbone traffic — maybe 0.0001 EB/year?)
- 2000: ~1-5 EB/year
- 2005: ~10-20 EB/year
- 2010: ~100-200 EB/year
- 2015: ~500-800 EB/year
- 2020: ~2,000-4,000 EB/year (roughly)
- Growth factor 2000→2020: approximately 1,000-4,000x. This is a massive Jevons/backfire case — efficiency improved 1,000x and traffic grew 1,000x, so total energy may be roughly flat (or even growing).
