# Baseline Normalizers: US Population, GDP, Households, Housing Stock

## What to Research

Gather the following annual time series for the United States, 1970–2022:

1. **US resident population** (millions)
2. **Real GDP** (billions of chained 2017 dollars)
3. **Total households** (millions)
4. **Average household size** (persons per household)
5. **Median home square footage** (new single-family homes completed)

These are the denominators used across all other tickets for normalization.

## Where to Look

1. **Population:** Census Bureau annual estimates (intercensal + postcensal). Table is straightforward.
2. **Real GDP:** Bureau of Economic Analysis (BEA), NIPA Table 1.1.6 (Real GDP, chained 2017 dollars).
3. **Households & size:** Census Bureau, Current Population Survey (CPS) / Housing Vacancy Survey. Annual estimates available.
4. **Median home sqft:** Census Bureau, Characteristics of New Housing (C25). Annual series for new single-family homes completed.

## Output Format

Provide five tables, one per series. Every year from 1970–2022 (or earliest available to 2022).

### US Resident Population

| Year | Value | Notes |
|------|-------|-------|

**Unit:** millions of persons
**Source:** [specific Census table/release]
**Confidence:** high

### Real GDP (Chained 2017 Dollars)

| Year | Value | Notes |
|------|-------|-------|

**Unit:** billions of chained 2017 dollars
**Source:** [specific BEA table]
**Confidence:** high

### Total Households

| Year | Value | Notes |
|------|-------|-------|

**Unit:** millions of households
**Source:** [specific Census table]
**Confidence:** high

### Average Household Size

| Year | Value | Notes |
|------|-------|-------|

**Unit:** persons per household
**Source:** [specific Census table]
**Confidence:** high

### Median New Home Square Footage

| Year | Value | Notes |
|------|-------|-------|

**Unit:** square feet
**Source:** [specific Census Characteristics of New Housing table]
**Confidence:** medium (this is new homes only, not total stock — but it tracks the trend)

## Data Gaps

- Median sqft data may not start until ~1973. Note the start year.
- Household estimates may have breaks at decennial census years. Note any discontinuities.

## What "Good Data" Looks Like

- Complete annual coverage with no gaps in population, GDP, or households.
- Values sourced from primary statistical agencies, not secondary compilations.
- Any interpolated or estimated values clearly marked.
