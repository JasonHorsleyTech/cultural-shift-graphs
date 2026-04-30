# Withdrawal vs Consumption Ratios by Sector

## Summary

For each major US water-use sector, this compiles how much water is withdrawn versus how much is actually consumed (lost to evaporation, transpiration, or incorporation into products). The gap between the two is the core insight: thermoelectric power withdraws 41% of all US water but consumes only 5% of the national total; irrigation withdraws 37% but accounts for 84% of all consumption. Data year is 2015 from USGS Circular 1441, with consumption estimates for the three largest sectors from USGS primary sources and remaining sectors derived from USGS consumptive-use coefficient studies.

## Data

| Sector | Withdrawal (Bgal/day) | Consumptive Use (Bgal/day) | Return Flow (Bgal/day) | Consumption Rate (%) | Confidence | Data Year | Source |
|--------|----------------------|---------------------------|----------------------|---------------------|------------|-----------|--------|
| Irrigation | 118.0 | 73.2 | 44.8 | 62% | High | 2015 | USGS Circ 1441 |
| Thermoelectric | 133.0 | 4.31 | 128.7 | 3.2% | High | 2015 | USGS Circ 1441 |
| Public Supply | 39.0 | 4.68 | 34.3 | 12% | High | 2015 / 2010-2020 avg | USGS Circ 1441 (withdrawal) + PP 1894D (consumption ratio) |
| Industrial | 14.8 | 1.48 | 13.3 | 10% | Medium | 2015 / 2007 | USGS Circ 1441 (withdrawal) + SIR 2007-5197 (coefficient) |
| Aquaculture | 7.55 | 0.15 | 7.40 | 2% | Medium | 2015 | USGS Circ 1441 (withdrawal); consumption estimated from USGS description of flow-through raceway return |
| Mining | 4.00 | 1.00 | 3.00 | 25% | Medium-Low | 2015 / 2007 | USGS Circ 1441 (withdrawal) + SIR 2007-5197 (coefficient, high variability by mining type) |
| Domestic (self-supplied) | 3.26 | 0.65 | 2.61 | 20% | Medium | 2015 | USGS Circ 1441 (withdrawal); coefficient from SIR 2007-5197 domestic/public supply range |
| Livestock | 2.00 | 1.40 | 0.60 | 70% | Medium | 2015 | USGS Circ 1441 (withdrawal); coefficient estimated from livestock physiology and feedlot characteristics |
| **TOTAL** | **321.6** | **86.9** | **234.7** | **27%** | — | 2015 | Composite |

### Share of national withdrawal vs share of national consumption

| Sector | % of Total Withdrawal | % of Total Consumption |
|--------|----------------------|----------------------|
| Irrigation | 36.7% | 84.3% |
| Thermoelectric | 41.4% | 5.0% |
| Public Supply | 12.1% | 5.4% |
| Industrial | 4.6% | 1.7% |
| Aquaculture | 2.3% | 0.2% |
| Mining | 1.2% | 1.2% |
| Domestic | 1.0% | 0.7% |
| Livestock | 0.6% | 1.6% |

## Thermoelectric cooling type breakdown

The blended 3.2% thermoelectric consumption rate masks a dramatic split by cooling technology. This shift is why thermoelectric withdrawal dropped from 210 Bgal/d (1980) to 133 Bgal/d (2015) even as generation capacity grew.

| Cooling Type | Withdrawal Behavior | Consumption Rate | Notes |
|-------------|-------------------|-----------------|-------|
| Once-through | Very high volume (draws river/lake water, returns it warmer) | ~1% | Dominant before 1980; being phased out due to thermal pollution and fish entrainment regulations |
| Recirculating (cooling towers) | 95-98% less withdrawal than once-through | 50-70% | Evaporative loss in cooling towers; increasingly dominant |
| Dry cooling | Minimal water use | Near 0% | Growing but still rare; less thermally efficient |

From USGS SIR 2019-5103 model estimates (which used consistent methodology across 1,122 plants), total thermoelectric withdrawal was 103 Bgal/d and consumption was 2.7 Bgal/d for 2015. The lower figures compared to Circular 1441 (133 and 4.31 Bgal/d) reflect methodological differences: Circ 1441 aggregates state-reported data while SIR 2019-5103 uses independent heat-budget models. The consumption rate is similar in both (~2.6-3.2%).

## Why some consumption ratios are estimated

USGS Circular 1441 (2015) only reported consumptive use for two sectors: irrigation and thermoelectric power. These were the first nationwide consumptive-use estimates since the 1995 Circular 1200. The USGS discontinued routine consumptive-use reporting for all sectors after 1995 due to resource constraints and data quality concerns.

The PP 1894D study (2024) added public supply consumptive use estimates for 2010-2020, finding a national average consumption ratio of 12% (ranging from 8% in the Gulf Coast/Atlantic/Great Lakes to 23% in the Southwest Desert).

For the remaining five sectors (industrial, mining, livestock, aquaculture, domestic), no USGS national consumptive-use estimate exists for 2015. The consumption ratios used here come from:

- **USGS SIR 2007-5197** — Consumptive-use coefficients for the Great Lakes Basin and climatically similar areas. Median industrial coefficient: 10%. Domestic/public supply range: 10-20%.
- **USGS SIR 2009-5096** — Ohio/Indiana study measuring return flows. Found thermoelectric at 2%, public supply at 6-8% annually (16-20% summer).
- **Physical reasoning for livestock** — Most water consumed by animals is metabolically incorporated or excreted in forms (manure) that don't return to source water bodies as usable return flow. The 70% estimate is consistent with FAO and USGS descriptions of livestock as a highly consumptive use.
- **USGS description for aquaculture** — The USGS Aquaculture Water Use page states "Much of the surface water was used for flowthrough raceways and was returned to the source after use." With 79% of aquaculture withdrawals from surface water and most of that for flow-through systems, a 2% consumption rate (primarily evaporative losses from pond systems and the 21% groundwater portion) is reasonable.

### Sanity check against 1995 data

The 1995 USGS Circular 1200 estimated total US consumptive use at approximately 100 Bgal/d from 402 Bgal/d total withdrawals (25% overall consumption rate). The 2015 composite estimate here is 86.9 Bgal/d from 322 Bgal/d (27% overall). The slight increase in consumption rate despite lower absolute consumption reflects the changing mix: thermoelectric withdrawal (low consumption) dropped dramatically while irrigation (high consumption) held relatively steady, shifting the national ratio toward more consumptive uses.

## Methodology

**Primary data source:** USGS Circular 1441 (Dieter et al., 2018) provides all 2015 withdrawal figures and consumptive use for irrigation and thermoelectric.

**Public supply consumption:** USGS Professional Paper 1894D (Galanter et al., 2024) provides the most authoritative estimate at 12% national average (4,219 Mgal/d consumption from 35,440 Mgal/d withdrawal, averaged over water years 2010-2020). Applied to the 2015 withdrawal of 39.0 Bgal/d.

**Smaller sectors:** Consumption coefficients from USGS SIR 2007-5197 (Shaffer & Runkle, 2007) applied to 2015 withdrawal figures. These coefficients are for the Great Lakes Basin and "climatically similar areas" — they may not perfectly represent national averages, particularly for arid Western states where evaporative losses are higher. The estimates should be treated as order-of-magnitude guidance, not precise measurements.

**Return flow** is calculated as withdrawal minus consumptive use. In practice, not all return flow is clean or usable — thermoelectric return flow is thermally polluted, and agricultural return flow often carries salts, nutrients, and pesticides. The quantity returned says nothing about the quality.

## Sources

- Dieter, C.A., Maupin, M.A., Caldwell, R.R., et al., 2018, Estimated use of water in the United States in 2015: U.S. Geological Survey Circular 1441, 65 p. https://doi.org/10.3133/cir1441
- Galanter, A.E., Centurione, G.D., Wieczorek, M.E., et al., 2024, Water use across the conterminous United States, water years 2010-20: U.S. Geological Survey Professional Paper 1894-D. https://doi.org/10.3133/pp1894D
- Harris, M.A. and Diehl, T.H., 2019, Withdrawal and consumption of water by thermoelectric power plants in the United States, 2015: U.S. Geological Survey Scientific Investigations Report 2019-5103. https://doi.org/10.3133/sir20195103
- Shaffer, K.H. and Runkle, D.L., 2007, Consumptive water-use coefficients for the Great Lakes Basin and climatically similar areas: U.S. Geological Survey Scientific Investigations Report 2007-5197. https://doi.org/10.3133/sir20075197
- Reeves, H.W. and Holtschlag, D.J., 2009, Variations in withdrawal, return flow, and consumptive use of water in Ohio and Indiana, with selected data from Wisconsin, 1999-2004: U.S. Geological Survey Scientific Investigations Report 2009-5096.
- Solley, W.B., Pierce, R.R., and Perlman, H.A., 1998, Estimated use of water in the United States in 1995: U.S. Geological Survey Circular 1200.

## Confidence level

**High confidence** for irrigation and thermoelectric (direct USGS estimates for 2015). **High confidence** for public supply (PP 1894D decade-average methodology, consistent with SIR 2009-5096 findings). **Medium confidence** for industrial and domestic (well-established coefficients from USGS studies, applied to 2015 withdrawal data). **Medium-low confidence** for mining (high variability by mining type — sand/gravel vs coal vs metal), livestock (limited primary data, though the physical reasoning is strong), and aquaculture (inferred from system descriptions rather than measured). Overall, the three high-confidence sectors account for 95% of total consumption, so uncertainty in the smaller sectors has minimal impact on the aggregate picture.

<!-- COMPLETE -->
