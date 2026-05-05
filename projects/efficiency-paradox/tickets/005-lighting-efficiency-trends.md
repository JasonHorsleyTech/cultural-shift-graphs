# Lighting: Lumens-per-Watt Efficiency Trends 1990–2022

## What to Research

The average luminous efficacy (lumens per watt) of the US lighting stock — what's actually installed and operating, not just what's sold in a given year. Annual estimates, 1990–2022.

This is the **efficiency metric** for the lighting domain.

## Where to Look

1. **Primary:** EIA's Annual Energy Outlook (AEO) reference case — the commercial and residential lighting modules model the installed stock by technology type (incandescent, CFL, LED, fluorescent) and can derive average efficacy.
2. **Secondary:** DOE Solid-State Lighting Program reports (especially the "Energy Savings Forecast of Solid-State Lighting" reports, published ~2014, 2016, 2019) — these explicitly model installed stock efficacy over time.
3. **Tertiary:** Navigant/Guidehouse lighting market characterization studies done for DOE. The 2002, 2010, and 2015 editions have detailed breakdowns.
4. **Fallback:** If stock-average isn't available as a single series, reconstruct from:
   - Technology market shares over time (% incandescent, % CFL, % LED, % linear fluorescent)
   - Typical efficacy of each technology
   - Weighted average = stock-average efficacy

## Scope

- **Include:** All US lighting (residential + commercial + outdoor/street). If residential-only is easier to find, that's acceptable — just note the coverage.
- **Key technologies and their typical efficacy:**
  - Incandescent: ~12-15 lm/W
  - Halogen: ~18-20 lm/W
  - CFL: ~55-70 lm/W
  - Linear fluorescent (T12→T8→T5): ~70-100 lm/W
  - LED: ~80-150 lm/W (varies by year of manufacture)

## Output Format

### Installed Stock Average Luminous Efficacy

| Year | Value | Notes |
|------|-------|-------|

**Unit:** lumens per watt (stock-weighted average)
**Source:** [exact report/model]
**Coverage:** [residential only / residential+commercial / all sectors]
**Confidence:** medium (this is modeled, not directly measured)

### Technology Mix (supplemental — if available)

| Year | Incandescent % | CFL % | LED % | Fluorescent % | Notes |
|------|---------------|-------|-------|---------------|-------|

**Source:** [DOE/Navigant reports]

## Data Gaps

- Pre-2000 data on stock composition is very sparse. Estimates will be rougher.
- LED penetration data is solid from ~2010 onward. Before that, LED share was negligible.
- The stock turnover lag means new technology adoption takes years to show in the average.

## Methodology Notes

"Stock average" vs. "new sales average" matters enormously here. A given year's LED share of new sales might be 60%, but if the installed base still has millions of old incandescents and fluorescents, the stock average is much lower. We want stock average because it determines actual electricity consumed.

## What "Good Data" Looks Like

- Should show relatively flat efficacy (~15-20 lm/W) through the 1990s (incandescent dominance).
- Gradual rise 2000-2010 (CFL adoption, fluorescent upgrades).
- Sharp rise 2012-2020 (LED revolution). Stock average probably reaches ~50-70 lm/W by 2020.
- Total improvement factor over 1990-2020: roughly 3-4x.
