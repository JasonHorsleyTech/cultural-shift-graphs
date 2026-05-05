# Residential Water: Fixture Efficiency Standards and Adoption 1990–2022

## What to Research

The water efficiency of residential fixtures (toilets, showerheads, faucets, washing machines) over time — both mandated standards and estimated stock-average efficiency. This is the **efficiency metric** for the residential water domain.

## Where to Look

1. **Primary:** EPA WaterSense program data and DOE appliance standards. Key regulatory dates:
   - 1992 Energy Policy Act (EPAct): toilets ≤1.6 GPF, showerheads ≤2.5 GPM, faucets ≤2.2 GPM (effective 1994 for new construction/replacement)
   - 2006+ WaterSense: voluntary label for toilets ≤1.28 GPF, showerheads ≤2.0 GPM
   - Washing machines: DOE standards tightened in 2004, 2007, 2015 (water factor requirements)
2. **Secondary:** American Water Works Association (AWWA) studies on residential end uses of water (the "REU" studies: 1999, 2016). These break down per-household water use by fixture.
3. **Tertiary:** DOE rulemaking Technical Support Documents (TSDs) for clothes washers — contain fleet efficiency estimates.
4. **For stock penetration:** PMI (Plumbing Manufacturers International) data on percentage of homes with low-flow fixtures by year.

## Scope

- **Indoor residential water use only.** Exclude outdoor irrigation (which is a separate driver of total residential water).
- Key fixtures and their pre/post-regulation flows:
  - Toilets: 5-7 GPF (pre-1994) → 1.6 GPF (post-1994) → 1.28 GPF (WaterSense)
  - Showerheads: 5-8 GPM (pre-1994) → 2.5 GPM (post-1994) → 2.0 GPM (WaterSense)
  - Clothes washers: ~40 gallons/load (1990) → ~15 gallons/load (2020, HE front-load)
- Stock turnover: toilets last 25+ years, so the 1994 mandate took until ~2020 to fully penetrate the stock.

## Output Format

### Toilet Flush Volume (Stock Average Estimate)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** gallons per flush (stock-weighted average of all installed toilets)
**Source:** [AWWA REU studies, PMI estimates, or derived from age-of-stock models]
**Confidence:** medium (stock composition is modeled)

### Showerhead Flow Rate (Stock Average Estimate)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** gallons per minute (stock-weighted average)
**Source:** [similar to above]
**Confidence:** medium

### Clothes Washer Water Use per Load (Stock Average)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** gallons per load
**Source:** DOE rulemaking TSDs, EnergyStar data
**Confidence:** medium

### Composite Indoor Water Efficiency Index

| Year | Value | Notes |
|------|-------|-------|

**Unit:** index (1990 = 100), lower = more efficient. Derived from weighted fixture efficiencies.
**Source:** Derived from above
**Confidence:** medium

## Data Gaps

- Stock-average fixture efficiency is rarely measured directly. Most estimates come from models assuming X% of stock replaced per year after the 1994 mandate.
- AWWA REU studies (1999, 2016) provide two excellent snapshots but nothing in between.
- Exact stock turnover rates for toilets and showerheads are estimated, not measured.

## Methodology Notes

- The 1992 EPAct is the single biggest regulatory event in US water efficiency history. Everything before it was essentially unregulated flow.
- Stock penetration model: if ~4% of toilets are replaced per year (25-year life), then by 2020 (~26 years after the mandate), nearly all toilets should be low-flow. Reality is slower due to slower replacement in older homes.
- This is the strongest "regulation did it" domain — consumers didn't choose low-flow fixtures; high-flow ones became illegal to sell.

## What "Good Data" Looks Like

- Stock-average toilet: ~5.0 GPF (1990) → ~3.0 GPF (2005) → ~2.0 GPF (2015) → ~1.7 GPF (2020). Gradual decline as old fixtures are replaced.
- Showerheads: less dramatic because many pre-regulation showerheads are still in use and some consumers remove flow restrictors.
- Clothes washers: ~40 gal/load (1990) → ~25 (2005) → ~15 (2020). Front-loaders drove the improvement.
- Composite: roughly 50-60% improvement from 1990 to 2020 in per-use water consumption.
