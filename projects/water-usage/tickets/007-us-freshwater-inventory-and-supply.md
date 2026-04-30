# US Freshwater Inventory & Renewable Supply

## What to research

Quantify the **total freshwater available** in the United States and the **annual renewable supply** from precipitation. This provides the denominator for Graph 3 ("Are we running out?") — total withdrawal as a percentage of what's available.

## What to find

### Stored freshwater (the "tank")

Total volume of freshwater currently stored in the US, broken down by source:

- **Groundwater (fresh)** — The largest store. Estimate total volume in the upper accessible portion of the crust.
- **Great Lakes** — ~21% of world's surface freshwater. Exact volume.
- **Other freshwater lakes** — Total US lake volume minus Great Lakes.
- **Rivers** — Total volume in US rivers at any given time (small compared to lakes/groundwater).
- **Glaciers & snowpack** — Mostly Alaska. Volume estimate.
- **Reservoirs** — Man-made storage (Hoover Dam, etc.). Total capacity.

### Annual renewable supply (the "flow")

How much freshwater is renewed each year:

- **Total annual precipitation** over the US (contiguous + Alaska). Volume in gallons or km3.
- **Evapotranspiration losses** — How much of that precipitation immediately evaporates or is used by natural vegetation.
- **Runoff + aquifer recharge** — The remainder that becomes available freshwater. This is the "renewable internal freshwater resources" figure.
- **Inflows from Canada/Mexico** — Cross-border river flows that add to US supply.

The World Bank figure for US renewable internal freshwater resources is ~2,818 km3/year. FAO/CIA gives ~3,069 km3/year (including cross-border). Verify and reconcile.

### Usage as percentage of supply

Calculate:
- Total US withdrawal / renewable supply = X%
- Total US consumption / renewable supply = Y%
- Over time: how have these ratios changed from 1950 to 2020?

### Reference comparisons

For graph context, also find:
- **Total water on Earth** — ~1.386 billion km3
- **Total freshwater on Earth** — ~2.5% of total = ~35 million km3
- **Accessible surface freshwater on Earth** — ~0.3-0.4% of all water
- US withdrawal as a fraction of each of these

### Regional stress (brief)

National averages mask regional crises. Include a few key datapoints:
- **Colorado River Basin** — withdrawal as % of supply (reportedly >100%)
- **Ogallala Aquifer** — depletion rate vs recharge rate
- **California Central Valley** — groundwater overdraft

These won't be graphed in detail but provide annotation context.

## Data source hierarchy

1. **USGS Water Science School** — "How Much Water Is There on Earth?" and related educational pages with authoritative numbers.
2. **USGS Water Resources** — National water inventory data.
3. **World Bank** — Renewable internal freshwater resources by country (indicator ER.H2O.INTR.K3).
4. **FAO AQUASTAT** — Comprehensive country-level water resources database.
5. **NOAA** — Precipitation data for the US.
6. **EPA** — Water resource assessments.

## Output format

### Inventory table
```
| Source | Volume (km3) | Volume (trillion gallons) | % of US Total Freshwater | Notes |
```

### Renewable supply table
```
| Flow | Volume (km3/year) | Volume (Bgal/day equivalent) | Source |
```

### Usage ratio table
```
| Year | Total Withdrawal (km3/year) | Renewable Supply (km3/year) | Withdrawal as % of Supply | Consumption as % of Supply |
```

### Earth context table
```
| Reference | Volume (km3) | US Annual Withdrawal as % |
```

## What "good data" looks like

- US stores thousands of km3 of accessible freshwater; withdraws ~445 km3/year
- Withdrawal is ~15-20% of renewable supply nationally — moderate stress
- The "are we running out" answer is clearly "no" at the national level
- But Colorado River and Ogallala show >100% withdrawal-to-recharge, which is unsustainable
- Numbers are consistent across sources (USGS, World Bank, FAO should roughly agree)
