# Total US Electricity Generation and Consumption 1990–2022

## What to Research

Total US electricity generation and final consumption by sector, annually from 1990–2022. This is a **shared reference series** needed to contextualize several domain metrics (lighting as share of total, data centers as share of total, etc.) and to calculate per-capita electricity.

## Where to Look

1. **Primary:** EIA Monthly Energy Review, Tables 7.1 (electricity overview) and 7.2a-b (net generation by source).
2. **Secondary:** EIA Electric Power Annual — more detailed generation and consumption data.
3. **Both are freely available with complete annual data back to 1949.**

## Scope

- Total net electricity generation (all sources: fossil, nuclear, renewable)
- Total electricity retail sales by sector (residential, commercial, industrial, transportation)
- Population-normalized: kWh per capita

## Output Format

### Total US Net Electricity Generation

| Year | Value | Notes |
|------|-------|-------|

**Unit:** billion kWh (= TWh)
**Source:** EIA Monthly Energy Review Table 7.1
**Coverage:** All utility and non-utility generation
**Confidence:** high

### Total Electricity Retail Sales

| Year | Value | Notes |
|------|-------|-------|

**Unit:** billion kWh
**Source:** EIA Electric Power Annual / Monthly Energy Review
**Coverage:** Sales to ultimate customers by sector
**Confidence:** high

### Electricity per Capita

| Year | Value | Notes |
|------|-------|-------|

**Unit:** kWh per person per year
**Source:** Derived (total retail sales ÷ US population)
**Confidence:** high

## Data Gaps

- None expected. EIA electricity data is the gold standard for completeness.
- Note any definitional changes (e.g., how small solar/wind was accounted for in earlier years).

## Methodology Notes

- Total generation > retail sales because of transmission losses (~5%) and power plant self-consumption.
- Per-capita electricity plateaued around 2007 and has been flat or slightly declining since — despite GDP growth. This is the "electricity intensity of the economy" story, relevant background for multiple domains.
- Industrial electricity declined (manufacturing offshored); residential roughly flat; commercial grew then plateaued.

## What "Good Data" Looks Like

- Total generation: ~3,000 TWh (1990) → peak ~4,100 TWh (2007) → ~4,000-4,100 TWh (2019) → COVID dip → recovery.
- Retail sales: ~2,700 TWh (1990) → ~3,700-3,800 TWh (2019).
- Per capita: ~10,500 kWh (1990) → peak ~12,800 kWh (2007) → ~11,500 kWh (2019).
- The flat-lining of per-capita electricity post-2007 is itself a major data point — total electricity efficiency improvements across all sectors (lighting, HVAC, appliances, motors) have been enough to offset growth in new electricity uses (data centers, EVs, etc.).
