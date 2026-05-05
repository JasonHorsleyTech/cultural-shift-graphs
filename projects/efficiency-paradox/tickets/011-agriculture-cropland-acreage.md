# Agriculture: Total Cropland Acreage 1950–2022

## What to Research

Total US cropland in use (planted + harvested acreage for all crops), annually from 1950–2022. This is the **consumption metric** for the agriculture (land) domain — despite tripling yields, did we actually use less land?

## Where to Look

1. **Primary:** USDA Economic Research Service (ERS) "Major Land Uses" series. Published periodically (roughly every 5 years) with interpolated annual estimates. Categories: cropland used for crops, cropland idled (CRP, fallow), cropland pasture.
2. **Secondary:** USDA NASS — total planted acreage for all principal crops (corn + soybeans + wheat + cotton + hay + rice + others). Annual, from Quick Stats.
3. **Tertiary:** USDA Census of Agriculture (every 5 years: 1954, 1959, ..., 2017, 2022). Has total cropland by state.

**Note:** "Cropland" has multiple definitions:
- **Cropland used for crops** (planted to crops + cultivated summer fallow): This is what we want.
- **Total cropland** (includes idle/fallow/CRP): Overstates active use.
- **Harvested cropland** (subset actually harvested): Slightly understates due to crop failure.

Use "cropland used for crops" or "total planted acres of principal crops" as the primary metric.

## Scope

- US only, all 50 states.
- Want active cropland (land actually producing crops), not total classified as "cropland" (which includes CRP conservation land and idled acreage).
- The Conservation Reserve Program (CRP, started 1985) removed ~30-35 million acres from production. This is genuine "efficiency gains returned to nature" — exactly what we're trying to measure.

## Output Format

### Total Cropland Used for Crops

| Year | Value | Notes |
|------|-------|-------|

**Unit:** million acres
**Source:** [USDA ERS Major Land Uses or NASS aggregate]
**Coverage:** All US cropland actively used for crop production
**Confidence:** high (for census years); medium (for interpolated years)

### Total Principal Crop Planted Acreage (supplemental)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** million acres
**Source:** USDA NASS (sum of planted acres for corn, soybeans, wheat, cotton, hay, rice, sorghum, barley, oats)
**Coverage:** Major crops only (~90% of total cropland)
**Confidence:** high (annual NASS surveys)

### CRP Enrolled Acreage (supplemental, from 1986)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** million acres
**Source:** USDA Farm Service Agency CRP statistics
**Confidence:** high

## Data Gaps

- ERS Major Land Uses is not annual — it's published for specific years. Between publications, numbers are interpolated or estimated.
- NASS planted acreage IS annual but only covers "principal crops" (misses minor crops, specialty crops, vegetables).
- The transition from ~385M acres (1950s peak) to ~320M acres (2020) is well-documented, but exact annual trajectory varies by source.

## Methodology Notes

- CRP effect: About 35 million acres removed from production since 1986. This is a policy-driven (not market-driven) reduction — exactly the kind of regulatory intervention that the exploration flagged as interesting.
- Ethanol mandate (2005 Energy Policy Act, expanded 2007 EISA) pulled ~40M acres of corn for biofuel rather than food. This complicates the "did we use less land?" story — we used it for fuel, not less total.

## What "Good Data" Looks Like

- Peak cropland: ~380-390 million acres in 1950s-1960s.
- Decline through 1970s-1980s to ~330-340M acres.
- CRP removed another ~30-35M acres post-1986.
- Recent level (2015-2022): ~315-325M acres used for crops.
- Net reduction from peak to now: roughly 15-20%.
- Per-capita cropland: dramatic decline (pop grew ~2x while land shrank ~15%).
