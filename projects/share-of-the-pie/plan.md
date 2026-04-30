# Share of the Pie — Research Plan

## Summary

Collect year-by-year US economic data (1947–2024) to graph how the median person's share of GDP per capita has changed over time. The primary line is **working-age median market income / GDP per capita**. Secondary lines decompose the story: health insurance eating compensation, transfer payments propping up after-tax income, and the gap between mean and median revealing inequality.

## Data format specification

Each research ticket produces a markdown result file containing a **data table** and **methodology notes**. The graph-building phase will combine all results into a single TypeScript data file.

### Result file format

Every result file must follow this structure:

```markdown
# Result: [Ticket Title]

## Source
- **Primary source:** [Name, URL, table/series ID]
- **Secondary source:** [If used]
- **Date accessed:** [YYYY-MM-DD]

## Methodology
- [Definition of the measure — what exactly is being counted]
- [Universe: who is included/excluded]
- [Known methodology changes with year they took effect]

## Data

| Year | [Column Name (unit)] | [Column Name (unit)] |
|------|----------------------|----------------------|
| YYYY | value                | value                |

## Gaps and Caveats
- [Years with missing data: mark as `--` in the table]
- [Years where methodology changed]
- [Confidence assessment: high/medium/low for different periods]
```

### Rules for data tables

1. **One row per year.** All tables are annual.
2. **Nominal dollars unless stated otherwise.** The Vue component will compute ratios; don't pre-compute them.
3. **Missing data = `--`**. Never interpolate or estimate. Mark it missing and note why.
4. **Column headers include units.** E.g., `Median Income ($)` or `Rate (%)` or `Index (2017=100)`.
5. **Sources per column.** If different columns come from different sources within one ticket, note which is which.

### Target TypeScript type (for graph phase reference)

The graph phase will build `src/data/share-of-the-pie.ts` by combining all results into records of this shape:

```typescript
export type ShareOfPieYear = {
  year: number;

  // === DENOMINATORS (nominal $) ===
  gdpPerCapita: number;
  ndpPerCapita: number | null;

  // === HOUSEHOLD INCOME (nominal $) ===
  medianHouseholdIncome: number;
  meanHouseholdIncome: number | null;
  averageHouseholdSize: number;

  // === PERSONAL INCOME (nominal $) ===
  meanPersonalIncomePerCapita: number | null;

  // === WORKING-AGE EARNINGS (nominal $, full-time year-round 25–64) ===
  workingAgeMedianEarnings: number | null;
  workingAgeMedianEarningsMen: number | null;
  workingAgeMedianEarningsWomen: number | null;

  // === INCOME DISTRIBUTION (nominal $, from ~1967) ===
  p20HouseholdIncome: number | null;
  p80HouseholdIncome: number | null;
  p95HouseholdIncome: number | null;

  // === CBO DATA (CBO-year $, from 1979) ===
  cboMarketIncomeMiddleQuintile: number | null;
  cboAfterTaxIncomeMiddleQuintile: number | null;

  // === COMPENSATION ===
  employerHealthCostPerWorker: number | null;
  benefitsShareOfCompensation: number | null;

  // === TAX RATES (%) ===
  effectiveFederalTaxRateMiddle: number | null;

  // === DEMOGRAPHICS ===
  laborForceParticipationWomen: number | null;
  dualEarnerHouseholdShare: number | null;
  workingAgePopulationShare: number | null;

  // === VALIDATION ===
  blsLaborSharePercent: number | null;

  // === METADATA ===
  isRecession: boolean;
};
```

Fields are nullable because different series start at different years. The Vue component handles nulls by starting/stopping lines at the first/last non-null value.

---

## Graph lines (what the Vue component will compute)

### Primary line — "Your share of the pie"
`workingAgeMedianEarnings / gdpPerCapita × 100`
Available from ~1960. This is the headline number: what fraction of the economy's per-person output does the median working-age person earn?

### Line 2 — "Including your invisible health costs"
`(workingAgeMedianEarnings + employerHealthCostPerWorker) / gdpPerCapita × 100`
Shows how much of the apparent shrinkage is health insurance eating compensation. The gap between Line 1 and Line 2 IS the health cost story.

### Line 3 — "What you actually get (after taxes and transfers)"
`(medianHouseholdIncome / averageHouseholdSize) / gdpPerCapita × 100`
Or CBO after-tax where available. The comprehensive "what do people have" version.

### Line 4 — "The mean (sanity check)"
`meanPersonalIncomePerCapita / gdpPerCapita × 100`
Should be relatively stable. The gap between this and Line 3 is inequality, plain and simple.

### Shaded bands (stretch goal)
`p20HouseholdIncome` and `p80HouseholdIncome` as upper/lower bounds around the median, showing how the distribution has fanned out.

### Optional Line 5 — "Adjusted for depreciation"
`workingAgeMedianEarnings / ndpPerCapita × 100`
Shows ~5pp of the decline is just capital depreciation eating more of gross output.

---

## Data proxy strategy

Different metrics require different sources. The key constraint is **internal consistency within each series** — each line must use the same source/methodology across its full time range. Mixing sources mid-series creates false trends.

| Series | Primary proxy | Time range | Known breaks |
|--------|--------------|------------|--------------|
| GDP per capita | BEA NIPA Table 7.1 / FRED A792RC0A052NBEA | 1947–2024 | None |
| NDP per capita | BEA NIPA Table 1.7.5 | 1947–2024 | None |
| Median household income | Census CPS Table H-6 (1967+), historical estimates (pre-1967) | 1947–2024 | Methodology break ~1967; CPS redesign 2013 |
| Mean household income | Census CPS Table H-6 | 1967–2024 | CPS redesign 2013 |
| Household size | Census decennial + ACS interpolation | 1947–2024 | Decennial years exact, others interpolated |
| Working-age earnings | Census CPS Table P-36 or PINC-03 | ~1960–2024 | Full-time year-round definition changes |
| Income percentiles | Census CPS Tables H-1, H-3 | 1967–2024 | CPS redesign 2013 |
| CBO income data | CBO Distribution of Household Income reports | 1979–2021 | CBO rebenches every few years |
| Employer health cost | Kaiser/HRET (1999+), MEPS/BLS (earlier) | 1960–2024 | Source switch ~1999; pre-1980 estimated |
| Benefits share | BLS ECEC / BEA compensation tables | 1947–2024 | BLS ECEC starts 1986; BEA goes further back |
| Tax rates | CBO (1979+), Tax Foundation / IRS (earlier) | 1947–2024 | Major source break at 1979 |
| Labor share | BLS Productivity & Costs, Major Sector | 1947–2024 | Consistent series |

---

## Known data gaps

- **Pre-1967 median household income:** No reliable survey data. Must reconstruct from Census decennial data and interpolate. Low confidence. Flag clearly.
- **Pre-1979 after-tax income:** CBO doesn't exist. Must estimate from pre-tax Census data minus effective tax rates (themselves estimated). Medium confidence.
- **CBO lag:** CBO data typically runs 2–3 years behind. Latest available is likely 2021 or 2022.
- **Working-age earnings pre-1960:** Census didn't tabulate age-specific earnings consistently before ~1960. May only have decennial snapshots.
- **Employer health costs pre-1980:** Scattered survey data. Need to piece together from BLS bulletins and academic literature. Low confidence for specific annual values, but the trend (small → large) is unambiguous.
- **2020 anomaly:** The pandemic year will show weird spikes in some series (stimulus checks inflate income; GDP crashes then recovers). Annotate, don't smooth.

---

## Ticket overview

30 tickets organized into 10 blocks. Each ticket is one agent session (~one web search + writing).

### Block 1: National Accounts (2 tickets)
The denominator. GDP per capita is the reference point everything else is measured against.

- **001** — GDP per capita (nominal), 1947–2024
- **002** — NDP per capita and depreciation share of GDP, 1947–2024

### Block 2: Household Income (4 tickets)
The primary numerator for the naive version of the metric.

- **003** — Median household income, 1967–2024 (Census CPS)
- **004** — Median household/family income estimates, 1947–1966 (historical reconstruction)
- **005** — Mean household income, 1967–2024 (Census CPS)
- **006** — Average household size, 1947–2024

### Block 3: Personal Income (2 tickets)
Individual-level income data for the mean sanity-check line.

- **007** — Median personal income (individual), 1947–2024
- **008** — Mean personal income per capita (BEA), 1947–2024

### Block 4: Income Distribution (2 tickets)
Percentile boundaries and shares for the distribution story.

- **009** — Household income at P20, P50, P80, P95, 1967–2024
- **010** — Income shares by quintile and top 5%, 1967–2024

### Block 5: CBO After-Tax Data (3 tickets)
The gold standard for disposable income, but only from 1979.

- **011** — CBO market income by quintile, 1979–latest
- **012** — CBO after-tax after-transfer income by quintile, 1979–latest
- **013** — CBO effective federal tax rates by quintile, 1979–latest

### Block 6: Working-Age Income (4 tickets)
The refined primary metric — stripping out retirees and focusing on labor market outcomes.

- **014** — Median earnings, full-time year-round men age 25–64, 1960–2024
- **015** — Median earnings, full-time year-round women age 25–64, 1960–2024
- **016** — Median earnings, full-time year-round all workers age 25–64, 1960–2024
- **017** — Median income for households with householder age 25–64, 1967–2024

### Block 7: Compensation & Health Insurance (3 tickets)
The health insurance wedge — half the apparent decline in "share of pie" is employer health costs.

- **018** — Employer health insurance premium per covered worker, 1960–2024
- **019** — Employer health insurance coverage rate, 1960–2024
- **020** — Total compensation vs wages: benefits share of compensation, 1947–2024

### Block 8: Tax Burden (2 tickets)
Needed to estimate disposable income for the pre-CBO era.

- **021** — Effective federal tax rate for middle quintile, 1947–2024
- **022** — Total tax burden (all levels) for median household, 1960–2024

### Block 9: Demographics & Labor (4 tickets)
Context for interpreting the primary metric — dual-income masking, aging population, etc.

- **023** — Labor force participation by sex, 1947–2024
- **024** — Dual-earner household share, 1960–2024
- **025** — Single-person household share, 1960–2024
- **026** — Working-age (25–64) population share, 1947–2024

### Block 10: Validation & Context (4 tickets)
Cross-check our computed ratios against known published analyses, plus recession/policy context for annotations.

- **027** — BLS labor share of nonfarm business output, 1947–2024
- **028** — Productivity vs median compensation (EPI/BLS), 1947–2024
- **029** — NBER recession dates and GDP impact, 1947–2024
- **030** — Major tax and transfer policy changes, 1947–2024
