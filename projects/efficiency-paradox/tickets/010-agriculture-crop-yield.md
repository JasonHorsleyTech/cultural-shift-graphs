# Agriculture: Crop Yield per Acre 1950–2022

## What to Research

Average crop yield per acre for major US field crops, annually from 1950–2022. This is the **efficiency metric** for the agriculture (land) domain — how much food output we get per unit of land.

## Where to Look

1. **Primary:** USDA National Agricultural Statistics Service (NASS). Quick Stats database has yield per planted acre for every major crop going back to the 1860s.
2. **Specific crops to query:**
   - Corn (for grain): bushels per acre
   - Wheat (all): bushels per acre
   - Soybeans: bushels per acre
   - Rice: cwt per acre (or pounds per acre)
3. **For a single composite metric:** Convert all to calories per acre using standard conversion factors:
   - Corn: 1 bushel = 56 lbs × ~1,500 cal/lb = ~84,000 cal/bushel
   - Wheat: 1 bushel = 60 lbs × ~1,500 cal/lb = ~90,000 cal/bushel
   - Soybeans: 1 bushel = 60 lbs × ~1,800 cal/lb = ~108,000 cal/bushel

## Scope

- Focus on the 3-4 largest US field crops by acreage (corn, soybeans, wheat cover ~75% of US cropland).
- Report individual crop yields AND a weighted composite (weighted by planted acreage each year).
- We want harvested yield (bushels per harvested acre), not planted yield (which is lower due to abandonment).

## Output Format

### Corn Yield

| Year | Value | Notes |
|------|-------|-------|

**Unit:** bushels per harvested acre
**Source:** USDA NASS Quick Stats
**Confidence:** high

### Wheat Yield (All Wheat)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** bushels per harvested acre
**Source:** USDA NASS Quick Stats
**Confidence:** high

### Soybean Yield

| Year | Value | Notes |
|------|-------|-------|

**Unit:** bushels per harvested acre
**Source:** USDA NASS Quick Stats
**Confidence:** high

### Composite Yield Index (weighted by acreage)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** index (1990 = 100), based on weighted calories/acre across corn + wheat + soybeans
**Source:** Derived from NASS data using caloric conversion factors above
**Confidence:** high (inputs are high confidence; composite is a reasonable construction)

## Data Gaps

- Individual crop data should be complete for the full 1950-2022 range. NASS has excellent historical records.
- Weather-driven year-to-year volatility is real (drought years show dips). This is signal, not noise — include actual values.

## Methodology Notes

- "Yield per harvested acre" excludes acres planted but not harvested (failed crops). This slightly inflates the efficiency measure but is the standard USDA reporting convention.
- The composite index weights by planted acreage (which shifts over time — soybean acreage rose, wheat fell). This captures both yield improvement AND crop mix shifts.

## What "Good Data" Looks Like

- Corn yield: ~40 bu/acre (1950) → ~70 (1970) → ~120 (1990) → ~175 (2020). Roughly 4x over 70 years.
- Wheat yield: ~17 bu/acre (1950) → ~31 (1970) → ~39 (1990) → ~49 (2020). About 3x.
- Soybean yield: ~22 bu/acre (1950) → ~27 (1970) → ~34 (1990) → ~50 (2020). About 2.3x.
- Composite index should show roughly 3x improvement from 1950 to 2020, with most gains in corn.
