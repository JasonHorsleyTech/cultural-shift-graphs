# USGS Annual Water Withdrawal Estimates 2010–2020

## Summary

USGS Professional Paper 1894D provides model-based annual withdrawal estimates for the three largest water use sectors in the conterminous United States (CONUS) for water years 2010–2020. These three sectors—thermoelectric power, crop irrigation, and public supply—account for ~90% of all US water withdrawals. The publication reports period averages, 2020 values, and extremes, with the full annual series shown visually in Figure 4 but not published in tabular form. The data below combines explicitly stated values with interpolated/estimated values for intermediate years, clearly distinguished.

## Data

### Explicitly Stated Values from PP 1894D

These values are directly quoted from the publication text (all in Mgal/d, CONUS only):

| Metric | Year | Value (Mgal/d) | Value (Bgal/d) | Context |
|--------|------|----------------|-----------------|---------|
| Thermoelectric (FW) | 2010 | 102,978 | 103.0 | Endpoint |
| Thermoelectric (FW) | 2020 | 61,399 | 61.4 | Endpoint |
| Thermoelectric (saline) | 2020 | 19,033 | 19.0 | Only year reported |
| Thermoelectric (FW) | avg 2010–20 | 82,656 | 82.7 | Period average |
| Irrigation | 2012 | 124,637 | 124.6 | Maximum (drought) |
| Irrigation | 2019 | 90,207 | 90.2 | Minimum (wet year) |
| Irrigation | 2020 | 108,723 | 108.7 | Endpoint |
| Irrigation | avg 2010–20 | 105,497 | 105.5 | Period average |
| Public supply | 2010 | 34,778 | 34.8 | Range low |
| Public supply | 2018 | 36,195 | 36.2 | Range high |
| Public supply | 2020 | 35,943 | 35.9 | Endpoint |
| Public supply | avg 2010–20 | 35,440 | 35.4 | Period average |

Additional text-derived value:
- **Irrigation 2011**: Publication states 2012 withdrawals "were 13 percent greater than the next driest year (2011)." Calculated: 124,637 / 1.13 ≈ **110,300 Mgal/d (110.3 Bgal/d)**.

### Reconstructed Annual Series

The table below provides the complete 11-year series. Values marked with `*` are estimated from linear interpolation (thermoelectric) or constrained estimation (irrigation, public supply). All unmarked values are from the publication. Methodology for estimates is described below.

| Year | Thermoelectric FW (Bgal/d) | Irrigation (Bgal/d) | Public Supply (Bgal/d) | Total of 3 Sectors (Bgal/d) | US Population (millions) | Source |
|------|---------------------------|----------------------|------------------------|-----------------------------|--------------------------|--------|
| 2010 | 103.0 | 102.5* | 34.8 | 240.3 | 308.7 | PP 1894D + Census |
| 2011 | 98.8* | 110.3 | 35.0* | 244.1 | 311.8 | PP 1894D + Census |
| 2012 | 94.7* | 124.6 | 35.1* | 254.4 | 314.3 | PP 1894D + Census |
| 2013 | 90.5* | 103.0* | 35.2* | 228.7 | 316.7 | PP 1894D + Census |
| 2014 | 86.3* | 106.5* | 35.3* | 228.1 | 319.3 | PP 1894D + Census |
| 2015 | 82.2* | 99.5* | 35.4* | 217.1 | 321.8 | PP 1894D + Census |
| 2016 | 78.0* | 101.0* | 35.5* | 214.5 | 324.4 | PP 1894D + Census |
| 2017 | 73.9* | 104.0* | 35.8* | 213.7 | 326.4 | PP 1894D + Census |
| 2018 | 69.7* | 110.0* | 36.2 | 215.9 | 328.5 | PP 1894D + Census |
| 2019 | 65.6* | 90.2 | 36.0* | 191.8 | 330.2 | PP 1894D + Census |
| 2020 | 61.4 | 108.7 | 35.9 | 206.0 | 331.4 | PP 1894D + Census |

### Cross-Reference: Traditional USGS 5-Year Compilations (All US)

For context, the traditional state-reported compilations cover all US states and territories (not just CONUS) and use different methodology. These are HIGHER than PP 1894D because they include Alaska, Hawaii, territories, and use state-reported rather than model-based values.

| Year | Thermoelectric Total (Bgal/d) | Thermoelectric FW (Bgal/d) | Irrigation (Bgal/d) | Public Supply (Bgal/d) | Total All Sectors (Bgal/d) | Source |
|------|------------------------------|---------------------------|----------------------|------------------------|-----------------------------|--------|
| 2010 | 161 | ~117 | 115 | 42.0 | 355 | USGS Circular 1405 |
| 2015 | 133 | ~96 | 118 | 39.0 | 322 | USGS Circular 1441 |

## Methodology

### PP 1894D Model-Based Estimates (primary data)
- **Coverage**: Conterminous United States only (excludes Alaska, Hawaii, territories)
- **Method**: Physics-based models for thermoelectric (heat/water budget), regression models for irrigation (evapotranspiration-based), and demand-driven models for public supply
- **Resolution**: Monthly estimates at HUC12 watershed level, aggregated to national annual totals
- **Published**: January 2025, part of the National Integrated Water Availability Assessment (PP 1894)

### Estimation methodology for missing years

**Thermoelectric freshwater** (2011–2019): Linear interpolation between 2010 (102,978) and 2020 (61,399). Justified by the publication's description of a "steady 40 percent decrease." The interpolated average (82,189 Mgal/d) is within 0.6% of the published average (82,656 Mgal/d), confirming approximate linearity. Actual decline was likely slightly front-loaded (more coal retirements in 2012–2016).

**Irrigation** (2010, 2013–2018): Five values are known (2011 calculated, 2012/2019/2020 published). Remaining years estimated using: (1) the published average constraint (105,497 Mgal/d across all 11 years), (2) US drought severity records (NOAA Palmer Drought Severity Index), and (3) the publication's note of a –0.77 correlation between irrigation withdrawal and precipitation. Drought years (2014 CA drought, 2017 Northern Plains, 2018 Southwest) estimated higher; wet years (2015 El Niño) estimated lower. **These estimates should be treated as ±5–10% approximations.**

**Public supply** (2011–2017, 2019): Estimated using the published endpoints and range (34,778–36,195 Mgal/d), the "relatively constant" characterization, and the 8% increase in population served over 2010–2020. A gradual increase peaking in 2018 then slight decline is consistent with per-capita conservation gains partially offsetting population growth. **These estimates are within the tight reported range and should be reliable to ±2%.**

**US Population**: Census Bureau intercensal estimates (July 1 of each year), 2010 and 2020 from decennial census.

### Why PP 1894D numbers differ from traditional USGS compilations

The PP 1894D model-based estimates are systematically lower than traditional 5-year compilations (Circulars 1405, 1441) for three reasons:
1. **Geographic scope**: CONUS only vs all US states and territories
2. **Methodology**: Physics/regression models vs state-reported permitted/estimated withdrawals
3. **Thermoelectric reporting**: PP 1894D primarily reports freshwater; traditional compilations report fresh + saline combined

For the thermoelectric sector, the traditional compilation for 2010 (161 Bgal/d total, ~117 FW) vs PP 1894D (103 Bgal/d FW) reflects both the methodological difference and the exclusion of ~44 Bgal/d saline withdrawals.

### Key trends confirmed

1. **Thermoelectric collapse**: Freshwater withdrawals fell 40% (103 → 61 Bgal/d) from 2010 to 2020, driven by coal plant retirements and shift to natural gas combined-cycle plants (which use ~95% less water per MWh than once-through coal cooling)
2. **Irrigation volatility**: Year-to-year swings of 20–35% driven by drought cycles, with no clear long-term trend
3. **Public supply stability**: Essentially flat despite 7% population growth, reflecting per-capita conservation gains from low-flow fixtures, pricing, and efficiency programs
4. **Combined decline**: Three-sector total dropped from ~240 to ~206 Bgal/d, driven almost entirely by thermoelectric reductions

## Confidence Level

- **Thermoelectric endpoints (2010, 2020)**: HIGH — directly from PP 1894D model output
- **Thermoelectric intermediate years**: MODERATE — linear interpolation of a "steady" decline; actual year-to-year variation driven by weather (cooling demand) likely introduces ±3–5% noise around the trend line
- **Irrigation known years (2011, 2012, 2019, 2020)**: HIGH — from publication text
- **Irrigation estimated years (2010, 2013–2018)**: LOW-MODERATE — constrained by average and drought context but individual years could be off by 5–10%
- **Public supply all years**: MODERATE-HIGH — tight range with known endpoints and low variability
- **Population**: HIGH — Census Bureau official estimates

## Sources

- Medalie, L., Galanter, A.E., Gorman Sanisaca, L.E., Luukkonen, C.L., and Stewart, J.S., 2025, Water use across the conterminous United States, water years 2010–20, chap. D of Regan, R.S., Markstrom, S.L., and LaFontaine, J.H., eds., U.S. Geological Survey Integrated Water Availability Assessment—2010–20: U.S. Geological Survey Professional Paper 1894, 37 p., https://doi.org/10.3133/pp1894D
- Maupin, M.A., Kenny, J.F., Hutson, S.S., Lovelace, J.K., Barber, N.L., and Linsey, K.S., 2014, Estimated use of water in the United States in 2010: U.S. Geological Survey Circular 1405, 56 p., https://doi.org/10.3133/cir1405
- Dieter, C.A., Maupin, M.A., Caldwell, R.R., Harris, M.A., Ivahnenko, T.I., Lovelace, J.K., Barber, N.L., and Linsey, K.S., 2018, Estimated use of water in the United States in 2015: U.S. Geological Survey Circular 1441, 65 p., https://doi.org/10.3133/cir1441
- Galanter, A.E., and others, 2023, Thermoelectric-power water use reanalysis for the 2008-2020 period: U.S. Geological Survey data release, https://doi.org/10.5066/P9ZE2FVM
- U.S. Census Bureau, Population Division, Annual Estimates of the Resident Population: April 1, 2010 to July 1, 2020

<!-- COMPLETE -->
