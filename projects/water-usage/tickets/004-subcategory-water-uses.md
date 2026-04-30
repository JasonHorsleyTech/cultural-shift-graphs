# Sub-Category Water Uses: The Fun Ones

## What to research

Dig into the specific, tangible, surprising uses of water that people can relate to — the stuff that makes someone say "wait, GOLF COURSES use more water than AI?" This is the fun data that makes the graph shareable.

The USGS tracks 8 broad categories. We need to go one level deeper into the sub-categories that are either surprisingly large or surprisingly small.

## Target sub-categories

Research water usage for each of the following. For each one, find:
- **Total US usage** (gallons/day or gallons/year)
- **Per capita** (divide by US population ~332M to get gallons/person/day)
- **Year of estimate**
- **Source**

### Residential / Municipal
- **Residential lawn & garden irrigation** — Americans reportedly use ~9 Bgal/day on landscape watering. This would be ~27 gal/person/day, which is enormous. Verify.
- **Swimming pools** — Filling + evaporation losses across ~5.7M residential pools and ~300K public/commercial pools. Initial estimate: ~390M gal/day in evaporation alone.
- **Car washes** — Commercial and self-serve. How does this compare?
- **Toilet flushing** — What fraction of indoor residential use is literally flushed?
- **Showers & baths** — Average daily shower water per person.

### Agricultural sub-categories
- **Livestock drinking water** — Just the water the animals drink, separate from crop irrigation for feed.
- **Crop irrigation by type** — What crops use the most water? (Alfalfa, rice, cotton, corn, almonds are the usual suspects in the US.)
- **Ethanol production** — Water to produce a gallon of ethanol (corn ethanol is water-intensive). Total US ethanol water use.

### Industrial / Commercial
- **Golf courses** — ~16,000 courses in the US. Initial estimate: ~1.5 Bgal/day. Verify.
- **Fracking (hydraulic fracturing)** — ~4M gallons per well. Annualized total.
- **Concrete / cement manufacturing** — Water per ton of concrete. Total US.
- **Textile / clothing manufacturing** — Water per t-shirt, pair of jeans. (Much of this is overseas, so note US-specific vs global.)
- **Semiconductor / chip fabrication** — Water per wafer. Total US fab water use.
- **Bottled water** — How much water goes into producing bottled water (including the water that IS the product)?

### Energy
- **Coal plant cooling** — Per MWh. Total US.
- **Natural gas plant cooling** — Per MWh. Total US.
- **Nuclear plant cooling** — Per MWh. Total US.

## Data source hierarchy

These will come from a mix of sources — USGS doesn't break down this fine. Expect:
1. **EPA WaterSense** — Residential water use breakdown
2. **USGA (US Golf Association)** — Golf course water use studies
3. **USDA** — Crop-specific irrigation data (Farm and Ranch Irrigation Survey)
4. **DOE / EIA** — Energy sector water intensity
5. **Industry associations** — Pool & Hot Tub Alliance, International Car Wash Association, etc.
6. **Academic papers** — Water intensity of specific processes

## Output format

```
| Category | Sub-category | Total US (Mgal/day) | Per Capita (gal/person/day) | Year | Source | Notes |
```

Use Mgal/day (million gallons per day) since many sub-categories are too small for Bgal/day. Include a notes column for caveats like "evaporation only" vs "total fill + evaporation" for pools.

## What "good data" looks like

- At least 15 sub-categories with sourced numbers
- The hierarchy is clear: residential lawns > golf courses > swimming pools > car washes > AI data centers (or whatever the actual order is)
- Each number has a year and source — they won't all be from the same year, and that's fine
- Per-capita numbers pass the sniff test (if something claims 100 gal/person/day, double-check it)
- Surprising comparisons are called out (e.g., "lawn watering uses Nx more water than all data centers combined")
