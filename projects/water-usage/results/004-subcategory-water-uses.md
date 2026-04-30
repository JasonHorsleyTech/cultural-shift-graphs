# Sub-Category Water Uses: The Fun Ones

## Summary

Breakdown of US water use into specific, tangible sub-categories that people can relate to. Data comes from a mix of sources (EPA, USGS, USDA, EIA, industry associations, academic studies) spanning ~2015-2024. The hierarchy reveals some genuinely surprising comparisons: residential lawn watering alone uses ~190x more water than all US data centers, and alfalfa/hay irrigation consumes more water than all residential outdoor uses combined.

## Data

All figures use US population of ~332 million for per-capita calculations.

### Residential / Municipal

| Category | Sub-category | Total US (Mgal/day) | Per Capita (gal/person/day) | Year | Source | Notes |
|----------|-------------|--------------------:|----------------------------:|------|--------|-------|
| Residential | Lawn & garden irrigation | 9,000 | 27.1 | ~2020 | EPA WaterSense | Applied water; varies hugely by region (60-70% of total use in arid West, ~30% nationally) |
| Residential | Showers & baths | 3,850 | 11.6 | 2016 | Water Research Foundation REUWS2 | ~20% of indoor use; avg shower = 17.2 gal at 8.2 min |
| Residential | Toilet flushing | 2,660 | 8.0 | 2016 | EPA WaterSense / Water Research Foundation | ~24% of indoor use; largest single indoor fixture; 5 flushes/day × 1.6 gal/flush |
| Residential | Swimming pools | 390 | 1.2 | ~2020 | Pool & Hot Tub Alliance / industry estimates | Evaporation + maintenance; ~10.4M residential + ~310K commercial pools; evaporation alone ~312 Mgal/day |
| Residential | Car washes | 8.8 | 0.03 | ~2020 | International Carwash Association | ~8M cars washed/day × ~40 gal avg; 3.2 billion gal/year total |

### Agricultural

| Category | Sub-category | Total US (Mgal/day) | Per Capita (gal/person/day) | Year | Source | Notes |
|----------|-------------|--------------------:|----------------------------:|------|--------|-------|
| Agriculture | Alfalfa & hay irrigation | 17,950 | 54.1 | 2008-2020 avg | Ruess et al. 2023, Water Resources Research | Blue water consumption (evapotranspiration); largest single crop water user in US; mostly livestock feed |
| Agriculture | Corn irrigation | 12,015 | 36.2 | 2008-2020 avg | Ruess et al. 2023 | Blue water consumption; includes feed corn and ethanol corn; heavily concentrated in Great Plains |
| Agriculture | Other hay irrigation | 8,975 | 27.0 | 2008-2020 avg | Ruess et al. 2023 | Blue water consumption; non-alfalfa hay |
| Agriculture | Cotton irrigation | 8,613 | 25.9 | 2008-2020 avg | Ruess et al. 2023 | Blue water consumption; concentrated in TX, CA, AZ |
| Agriculture | Rice irrigation | 4,700 | 14.2 | ~2018 | USDA FRIS / USGS est. | Applied water est. ~7,800 Mgal/day; consumption ~60% of application; flooded paddy method; AR, CA, LA, TX |
| Agriculture | Soybean irrigation | 6,587 | 19.8 | 2008-2020 avg | Ruess et al. 2023 | Blue water consumption; rapidly increasing irrigation since 2008 |
| Agriculture | Almond irrigation | 3,200 | 9.6 | ~2018 | USDA / CA DWR estimates | Consumption est.; ~1.4M acres in CA; ~3.5-4 AF/acre applied; CA-specific |
| Agriculture | Livestock drinking water | 2,000 | 6.0 | 2015 | USGS Circular 1441 | Direct animal drinking + facility washdown; 62% from groundwater; ~1% of all freshwater withdrawals |
| Agriculture | Ethanol production (plant only) | 132 | 0.4 | 2024 | EIA / Renewable Fuels Association | Direct plant water only (~3 gal water per gal ethanol); 16B gal ethanol produced/year; excludes irrigation for corn feedstock |

### Industrial / Commercial

| Category | Sub-category | Total US (Mgal/day) | Per Capita (gal/person/day) | Year | Source | Notes |
|----------|-------------|--------------------:|----------------------------:|------|--------|-------|
| Industrial | Golf courses | 1,500 | 4.5 | 2022 | GCSAA Phase III Water Report | ~16,000 courses; down 29% since 2005; ~94,000 gal/course/day avg; varies hugely by climate |
| Industrial | Fracking (hydraulic fracturing) | 342 | 1.0 | ~2020 | Duke University / USGS | ~125 billion gal/year; avg 5.3M gal/well; <0.1% of total US water use |
| Industrial | Semiconductor fabs | 100 | 0.3 | ~2022 | Industry estimates (Intel, TSMC, Samsung reports) | Rough estimate; global industry uses 264B gal/year; US ~12-15% of global capacity; significant recycling |
| Industrial | Bottled water (incl. product) | 63 | 0.19 | 2024 | IBWA | Total water including the water that IS the product; 1.41 gal total per 1 gal product; 16.2B gal consumed/year |
| Industrial | Data centers (direct cooling) | 47 | 0.14 | 2023 | Lincoln Institute / EESI / Brookings | Direct water only; indirect (electricity generation) adds ~578 Mgal/day; growing rapidly with AI |
| Industrial | Concrete & cement production | 37 | 0.11 | ~2020 | USGS / industry estimates | Low confidence; cement ~17 Mgal/day + concrete mixing water ~20 Mgal/day; ~90M metric tons cement/year |
| Industrial | Textile manufacturing (US domestic) | ~50 | ~0.15 | ~2020 | EPA / industry estimates | Very rough; most US textile production has moved offshore; global textile water use is orders of magnitude larger |

### Energy (Thermoelectric Cooling)

| Category | Sub-category | Total US (Mgal/day) | Per Capita (gal/person/day) | Year | Source | Notes |
|----------|-------------|--------------------:|----------------------------:|------|--------|-------|
| Energy | Coal plant cooling | 47,200 | 142.2 | 2021 | EIA Form 860/923 | WITHDRAWAL, not consumption; ~899 TWh × 19,185 gal/MWh; most returned to source; consumption est. ~1,200 Mgal/day |
| Energy | Nuclear plant cooling | 23,300 | 70.2 | 2021 | EIA Form 860/923 | WITHDRAWAL; ~778 TWh; heavily once-through cooling; consumption est. ~640 Mgal/day |
| Energy | Natural gas plant cooling | 12,100 | 36.4 | 2021 | EIA Form 860/923 | WITHDRAWAL; ~1,575 TWh × 2,803 gal/MWh; much more water-efficient per MWh than coal or nuclear |

## Methodology

### Unit choice
Sub-categories are reported in Mgal/day (million gallons per day) rather than Bgal/day since many sub-categories are too small for the larger unit. Per-capita figures use US population of 332 million.

### Measurement types vary by sub-category
- **Agricultural crops (Ruess et al.):** Blue water *consumption* — actual evapotranspiration from irrigation water. This is the water that's truly "used up." Excludes green water (rain) and grey water (dilution).
- **Residential fixtures (toilet, shower):** Water *withdrawn* from public supply for the fixture; goes to wastewater treatment and is eventually returned (degraded).
- **Thermoelectric:** Water *withdrawal* — pulled from rivers/lakes for cooling, mostly returned. Consumption (the portion lost to evaporation) is 1-5% of withdrawal for once-through systems, ~60% for recirculating towers.
- **Other categories:** Mix of withdrawal and consumption depending on source; noted per entry.

### Crop irrigation data
Crop-specific figures come from Ruess et al. (2023), "Irrigation by Crop in the Continental United States from 2008 to 2020," published in Water Resources Research. These represent average annual blue water consumption (irrigation evapotranspiration) calculated from satellite-based remote sensing. The six primary crops (alfalfa, corn, other hay, cotton, soybean, winter wheat) constitute roughly three-quarters of total US irrigation water consumption.

Rice and almond figures are separately estimated from USDA Farm and Ranch Irrigation Survey acreage and application rates, with consumption estimated as ~60-70% of applied water. Lower confidence than the Ruess et al. satellite-derived figures.

### Thermoelectric calculations
EIA reports water withdrawal *intensity* (gal/MWh) by fuel type. Total withdrawal was calculated by multiplying intensity by 2021 generation (TWh) from EIA Electric Power Monthly. Coal: 899 TWh × 19,185 gal/MWh. Natural gas CC: 1,575 TWh × 2,803 gal/MWh. Nuclear: 778 TWh × ~30,000 gal/MWh (estimated from typical once-through cooling intensity).

EIA reports total thermoelectric withdrawal of 47.5 trillion gal/year (2020) = ~130 Bgal/day, which is consistent with USGS 2015 estimate of 133 Bgal/day.

### Key caveats
- **Different years:** Sub-category data spans 2015-2024. Cross-comparison is approximate.
- **Semiconductor estimate is rough:** No authoritative aggregate figure exists for total US fab water use. Estimate derived from global industry total (264B gal/year) and US capacity share (~12-15%).
- **Textile estimate is very rough:** Most US textile manufacturing has moved offshore. The US figure is a fraction of global textile water use.
- **Data center water is direct only:** The 47 Mgal/day figure counts only on-site cooling water. Indirect water (water consumed by power plants generating electricity for data centers) adds ~578 Mgal/day, making total water footprint ~625 Mgal/day.

## Key Comparisons (graphable insights)

1. **Lawn irrigation vs data centers:** Residential lawn watering (9,000 Mgal/day) uses ~190x more water than all US data centers' direct cooling (47 Mgal/day). Even including indirect water, lawns use ~14x more.

2. **Golf courses vs data centers:** Golf (1,500 Mgal/day) uses ~32x more water than data centers (direct). Every time someone complains about AI water use, golf is quietly using an order of magnitude more.

3. **Alfalfa is the real water hog:** Alfalfa/hay irrigation alone (17,950 Mgal/day) consumes more water than all residential outdoor use (~9,000 Mgal/day) — and most of it feeds livestock.

4. **Toilet water > AI water:** Americans flush toilets (~2,660 Mgal/day) using ~57x more water than data center cooling.

5. **Swimming pool evaporation > data centers:** Pool evaporation (~312 Mgal/day) is ~7x data center direct cooling.

6. **Car washes are tiny:** Despite the guilt trip, car washes use 8.8 Mgal/day — less than 0.003% of total US water use. Professional car washes use less water per car than washing at home.

7. **Thermoelectric withdrawal is deceptive:** Coal plants "withdraw" 47,200 Mgal/day but only consume ~1,200 Mgal/day. Nuclear "withdraws" 23,300 Mgal/day but consumes ~640 Mgal/day. The headline withdrawal numbers (41% of all US water!) obscure that most is returned.

## Confidence

**High confidence:** Residential fixture percentages (REUWS2 is the gold-standard study), USGS livestock withdrawal, golf course totals (GCSAA industry survey), crop irrigation consumption (satellite-derived), thermoelectric intensity (EIA mandatory reporting).

**Medium confidence:** Lawn irrigation total (EPA estimate from multiple studies), swimming pool evaporation (extrapolation from pool count × average loss), fracking total (academic estimate), data center water (rapidly changing), ethanol production water, bottled water.

**Low confidence:** Semiconductor fab total (no aggregate data; extrapolated from global total), concrete/cement (rough calculation from production volume × water intensity), textile manufacturing (most production offshore; US-specific data scarce), rice and almond irrigation (estimated from acreage × application rates rather than measured consumption).

## Sources
- EPA WaterSense, "Statistics and Facts" and "How We Use Water," https://www.epa.gov/watersense/statistics-and-facts
- DeOreo, W.B. et al. (2016), "Residential End Uses of Water, Version 2" (REUWS2), Water Research Foundation
- USGS Circular 1441, "Estimated Use of Water in the United States in 2015"
- USGS, "Thermoelectric Power Water Use," https://www.usgs.gov/mission-areas/water-resources/science/thermoelectric-power-water-use
- Ruess, P.J. et al. (2023), "Irrigation by Crop in the Continental United States from 2008 to 2020," Water Resources Research, https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022WR032804
- GCSAA (2022), "Phase III Water Use and Management Practices on U.S. Golf Courses"
- USGA, "How Much Water Does Golf Use?" https://www.usga.org/course-care/water-resource-center/how-much-water-golf-courses-need.html
- EIA, "U.S. electric power sector continues water efficiency gains" (2023), https://www.eia.gov/todayinenergy/detail.php?id=56820
- EIA, "U.S. electric power sector's use of water continued its downward trend in 2020," https://www.eia.gov/todayinenergy/detail.php?id=50698
- Pool & Hot Tub Alliance (PHTA), industry statistics
- International Carwash Association, industry water use data
- USDA NASS, 2018 and 2023 Irrigation and Water Management Surveys
- Lincoln Institute of Land Policy, "Data Drain: The Land and Water Impacts of the AI Boom"
- EESI, "Data Centers and Water Consumption," https://www.eesi.org/articles/view/data-centers-and-water-consumption
- Brookings Institution, "AI, data centers, and water," https://www.brookings.edu/articles/ai-data-centers-and-water/
- EIA, "U.S. Fuel Ethanol Plant Production Capacity," https://www.eia.gov/petroleum/ethanolcapacity/
- IBWA, "Bottled Water & Water Use," https://bottledwater.org/bottled-water-water-use/
- Duke University, "How Much Water Does U.S. Fracking Really Use?" (2015)
- USGS, "How much water does the typical hydraulically fractured well require?"
- USGS SIR 2019-5103, "Withdrawal and Consumption of Water by Thermoelectric Power Plants in the United States, 2015"

<!-- COMPLETE -->
