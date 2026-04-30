# USGS Historical Water Withdrawal by Sector (1950-2020)

## What to research

Build a complete time series of **total US water withdrawal by sector** from 1950 to 2020, using the USGS 5-year water use compilation reports. Also include US population for each data point (for per-capita calculations in the graph phase).

This is the backbone dataset for the entire project. Every other ticket builds on or contextualizes this data.

## Target data points

Every 5 years from 1950 to 2015 (matching USGS publication cycle). The USGS has published compilations for: 1950, 1955, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015. The 2020 report (PP 1894D) only covers 3 sectors — include what's available.

## Data source hierarchy

1. **USGS Circular 1441 (2015)** — Most recent complete dataset. Has summary tables comparing all years back to 1950.
2. **USGS Professional Paper 1894D (2020)** — Annual estimates for thermoelectric, irrigation, and public supply only.
3. **Individual USGS Circulars** for each 5-year period if the summary tables in Circular 1441 don't cover all sectors for all years.
4. **US Census Bureau** — Population figures for each data year.

The USGS page "Total Water Use" (https://www.usgs.gov/mission-areas/water-resources/science/total-water-use) has summary data and links to all circulars.

## Sectors to track

Use the USGS categories. These have shifted over time — document any category changes.

- **Thermoelectric power** (includes once-through and recirculating cooling)
- **Irrigation** (includes crop and golf course irrigation in some years)
- **Public supply** (municipal water systems)
- **Self-supplied industrial** (factories, refineries with own water intake)
- **Self-supplied domestic** (private wells)
- **Livestock** (animal drinking water, feedlot operations)
- **Aquaculture** (fish farms — only tracked separately from ~1985)
- **Mining** (extraction operations)

Note: In early reports (1950-1960), some categories were grouped differently (e.g., "rural" combined domestic + livestock). Document how you handled these.

## Output format

```
| Year | Population (millions) | Total Withdrawal (Bgal/day) | Thermoelectric | Irrigation | Public Supply | Industrial | Domestic | Livestock | Aquaculture | Mining | Source |
```

All values in Bgal/day (billion gallons per day). If a sector wasn't tracked separately in a given year, enter "N/A" and note it.

## What "good data" looks like

- Complete rows for all 15 reporting periods (1950-2015) plus whatever 2020 offers
- Total withdrawal should match known checkpoints: ~180 Bgal/day in 1950, ~430 in 1980 (peak), ~322 in 2015
- Thermoelectric should be the largest withdrawer by 2015 (~133 Bgal/day) but smaller than irrigation in the 1950s
- Population should match Census: ~152M in 1950, ~227M in 1980, ~321M in 2015
- Every value has a USGS Circular number as its source
