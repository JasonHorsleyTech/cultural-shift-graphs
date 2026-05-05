# Residential Water: Per-Capita Public Water Supply Withdrawals 1950–2020

## What to Research

Total public water supply withdrawals per capita in the US, from 1950–2020. This is the **consumption metric** for the residential water domain — did per-person water use actually decrease as fixtures became more efficient?

## Where to Look

1. **Primary:** USGS Estimated Use of Water in the United States (published every 5 years: 1950, 1955, 1960, ..., 2010, 2015). The 2020 report should be available (published 2023/2024).
   - Category: "Public supply" — water withdrawn by public and private water utilities for delivery to homes, businesses, and other users.
2. **Secondary:** USGS Water Resources data — may have state-level data compilable to national.
3. **Tertiary:** American Water Works Association (AWWA) benchmarking surveys — have per-connection data.
4. **Residential-specific:** USGS breaks public supply into "domestic deliveries" (residential component) in some years.

## Scope

- **Primary metric:** Public supply withdrawals per capita. This includes residential + commercial + public uses served by water utilities. It's not purely residential, but it's the best consistent long-term series.
- **Supplemental if available:** Domestic/residential deliveries per capita (subset of public supply).
- **Exclude:** Self-supplied domestic (private wells — ~13% of population, relatively stable share).
- **Exclude:** Irrigation, industrial self-supplied, thermoelectric — those are different stories.

## Output Format

### Public Supply Withdrawals (Total)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** billion gallons per day (Bgal/d) — this is the standard USGS reporting unit
**Source:** USGS Estimated Use of Water, Table [specify]
**Coverage:** All public water supply systems in US
**Confidence:** high (every 5 years); N/A for non-survey years

### Public Supply Withdrawals Per Capita

| Year | Value | Notes |
|------|-------|-------|

**Unit:** gallons per person per day (GPCD)
**Source:** Derived from total ÷ population served
**Confidence:** high for survey years

### Population Served by Public Supply

| Year | Value | Notes |
|------|-------|-------|

**Unit:** millions of persons
**Source:** USGS (reported alongside withdrawal data)
**Confidence:** high

## Data Gaps

- **Data is only every 5 years.** That's 15 data points from 1950 to 2020. This is fine for the graph — we'll connect the dots.
- The 2020 USGS report was delayed. Verify it's been published; if not, 2015 is the latest.
- Pre-1985 GPCD data may require manual calculation (total withdrawals ÷ population served not always pre-computed).
- Methodology changed slightly between some survey years (categories refined). Note any breaks.

## Methodology Notes

- "Withdrawals" measures water pulled from sources (rivers, aquifers, reservoirs), not water consumed (some is returned as wastewater). This is the standard metric for water demand.
- Public supply GPCD peaked in the mid-1980s and has been declining since — one of the clearest success stories for efficiency policy.
- Climate/drought effects: some reduction may be due to mandatory restrictions during droughts (especially in the West). This is a form of regulation, not voluntary conservation.
- Population growth in arid regions (Sun Belt migration) puts upward pressure on per-capita demand (more outdoor irrigation). The fact that GPCD fell despite this is notable.

## What "Good Data" Looks Like

- 1950: ~100-110 GPCD for public supply
- 1980: peak, ~175-185 GPCD
- 2000: ~170 GPCD
- 2010: ~140-150 GPCD
- 2015: ~130-140 GPCD
- Clear peak in mid-1980s and steady decline since.
- This is one of the most dramatic success stories — per-capita public water supply withdrawals fell ~25-30% from peak to 2015 despite population growth and Sun Belt migration.
