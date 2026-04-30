# Ground Beef — Quality-Equivalent Prices 2000-2025

## What to research

Build a time series of the price for **quality-equivalent ground beef** (matching the 1955 baseline as defined in results/012-beef-quality-rubric.md) from the earliest available year to 2025.

**Read results/012-beef-quality-rubric.md first.** If it doesn't exist yet, use "grass-fed, grass-finished ground beef, no hormones or prophylactic antibiotics" as the working definition.

## Target data points

Annual from the earliest year this product existed at mainstream retail (~2000s for grass-fed beef) to 2025.

## Data source hierarchy

1. **USDA Agricultural Marketing Service** — Grass-fed beef price reports, if they exist.
2. **USDA ERS Organic Prices** — Organic beef premiums over conventional.
3. **Industry reports** — Grass-fed beef market reports (Stone Barns Center, etc.)
4. **Retail price surveys** — Whole Foods, natural grocery pricing. Academic studies on grass-fed beef market development.
5. **Consumer brands** — Current pricing for brands like Thousand Hills, Grass Run Farms, etc.

## Important notes

- **Grass-fed vs. organic vs. both:** These are different certifications. Grass-fed addresses diet; organic addresses chemicals and hormones. The 1955 equivalent is more like "grass-fed + no hormones" since USDA organic didn't exist. Some products are both ("organic grass-fed"), which is the tightest match but the most expensive.
- **The grass-fed market is relatively young.** Grass-fed beef as a distinct retail category only emerged in the mid-2000s. Pre-2005 data will be sparse or unavailable.
- **Pre-divergence:** Before feedlots became dominant (~pre-1970), conventional beef WAS roughly grass-fed. The cheapest price IS the quality-equivalent price for the 1950-1970 period. Note this.

## Output format

Follow the **Type 3: Price data** format from plan.md. Unit = "pound".

## What "good data" looks like

- Prices from at least 2005 to 2025
- Clear distinction between grass-fed, organic, and grass-fed organic if data allows
- Premium ratio over conventional documented (typically 1.5x-3x)
- Note that the grass-fed premium has been declining as supply increases
