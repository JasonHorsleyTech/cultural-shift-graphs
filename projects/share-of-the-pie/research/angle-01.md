# Exploration Pass 1: Grounding the Question

## The question in plain English

Of all the economic value produced per person in the US, what fraction does the typical person actually take home? And is that fraction shrinking?

The metric is simple: **median disposable income per capita / GDP per capita**. If that ratio is falling, the median person is capturing less of the economy's output — regardless of whether prices went up or down, regardless of inflation adjustments.

---

## Concrete example 1: The college professor

A college professor is a useful test case because professors existed in roughly the same form in 1970 and today.

**1970:**
- Average professor salary: ~$12,700/year (AAUP historical data)
- US GDP per capita: ~$5,220
- Ratio: **243%** of GDP per capita

**2024:**
- Average professor salary: ~$92,000/year (AAUP 2023-24 survey)
- US GDP per capita: ~$85,000
- Ratio: **108%** of GDP per capita

A college professor went from earning 2.4x the economy's per-person output to barely 1x. Their nominal salary went up 7x, but GDP per capita went up 16x. The economy grew; the professor's share of it shrank by more than half.

This isn't unique to professors. It's a mechanical consequence of productivity gains flowing disproportionately to the top of the income distribution and to capital returns rather than to labor broadly.

## Concrete example 2: The factory worker

**1970:**
- Median manufacturing wage: ~$7,500/year (BLS)
- GDP per capita: ~$5,220
- Ratio: **144%** of GDP per capita

**2024:**
- Median manufacturing wage: ~$45,000/year
- GDP per capita: ~$85,000
- Ratio: **53%** of GDP per capita

A factory worker in 1970 earned 1.4x the economy's per-person output. Today it's barely half. The factory worker's nominal wage went up 6x; GDP per capita went up 16x.

## Concrete example 3: The overall median

This is the core metric — median household income divided by GDP per capita. But household size has changed (3.1 people in 1970 → 2.5 today), so we need to normalize to per-capita.

**1970:**
- Median household income: ~$9,870
- Average household size: ~3.1
- Implied per-capita median income: ~$3,180
- GDP per capita: ~$5,220
- **Ratio: ~61%**

**2024:**
- Median household income: ~$80,600
- Average household size: ~2.5
- Implied per-capita median income: ~$32,240
- GDP per capita: ~$85,000
- **Ratio: ~38%**

The median person went from capturing ~61% of GDP per capita to ~38%. That's a drop of about a third.

And this is *pre-tax*. After subtracting taxes, the ratio is lower. After subtracting mandatory costs that didn't exist in 1970 (employer-subsidized health insurance premiums, which come out of worker compensation but don't show up as take-home pay), lower still.

---

## Proposed metric

**X-axis:** Year (1947–2024, annually)

**Y-axis:** Ratio of median disposable income per capita to GDP per capita, expressed as a percentage

**Primary line:** Median household disposable income ÷ household size ÷ GDP per capita

**Secondary lines (stretch):**
- 20th percentile (working poor)
- 80th percentile (upper-middle)
- Mean disposable income per capita / GDP per capita (this one should be relatively flat — it's a sanity check, since mean income tracks GDP more closely by definition)

**Why this metric works:**
- It sidesteps the circularity of dollar-denominated inflation adjustments
- It's intuitive: "you get X% of the average output"
- The trend tells the story without needing a comparison year or base index
- The gap between the mean line and the median line *is* inequality, expressed in a way anyone can understand

**What one data point looks like:**
`{ year: 1985, median_ratio: 0.52, p20_ratio: 0.19, p80_ratio: 0.89, mean_ratio: 0.72 }`

---

## Data sources

### 1. Bureau of Economic Analysis (BEA) — NIPA Tables
- **Table 7.1:** GDP per capita (nominal and real), annual from 1929
- **Table 2.1:** Personal income and disposable personal income (aggregate, not median)
- Available via BEA's interactive data tool or FRED
- **Limitation:** BEA only has *mean* personal income, not *median*

### 2. Census Bureau — Current Population Survey (CPS)
- Median household income: reliable annual series from 1967, estimates back to 1947
- Income by quintile: available from 1967, detailed tables from ~1975
- Household size data for per-capita normalization
- Available via Census Historical Income Tables (Table H-3 for quintiles, H-6 for median)
- **Limitation:** This is pre-tax income, not disposable. Must apply tax adjustments or use CBO data.

### 3. Congressional Budget Office (CBO) — Distribution of Household Income
- After-tax, after-transfer income by quintile, available from 1979
- Includes employer health insurance as income (important — see below)
- This is the gold standard for the disposable income side of the ratio
- **Limitation:** Only goes back to 1979, updated every 2-3 years with a lag

### 4. FRED (Federal Reserve Economic Data)
- Aggregator: pulls from BEA, Census, BLS
- Series like MEPAINUSA672N (median personal income), A792RC0A052NBEA (GDP per capita)
- Convenient API for pulling time series
- Good for cross-referencing and filling gaps

### Recommended approach
Use CBO data (1979–present) as the primary authoritative source for after-tax income by quintile. Supplement with Census CPS data to extend the series back to 1967. Use BEA for GDP per capita throughout. Accept that pre-1979 data is pre-tax only and note the discontinuity.

---

## What I'm unsure about

### 1. The household size problem
Household size shrank from ~3.3 (1960) to ~2.5 (2024). When you divide household income by household size to get per-capita income, you're assuming income is shared equally within a household. More importantly: *some* of the decline in the ratio might just be demographic — more single-person households, which mechanically have lower per-capita household income. Need to decide: do we normalize, or is the demographic shift part of the story?

**My instinct:** The demographic shift IS part of the story. Divorce, delayed marriage, and solo living are themselves economic phenomena. Show both lines (per-household and per-capita) and let the viewer see the gap.

### 2. Non-cash compensation
Employer-provided health insurance is the elephant in the room. In 1970, employer health costs were negligible. Today, employer health insurance averages ~$16,000/year per covered worker. This counts as "compensation" in national accounts (and shows up in GDP), but the worker never sees it as spendable income.

If you include employer health premiums as income (as CBO does), the decline in the ratio is smaller. If you exclude them, the decline is larger. Both are defensible — CBO inclusion reflects total economic resources directed at the worker; exclusion reflects what the worker can actually spend.

**My instinct:** Show both. The gap between them IS the health cost story, and it's worth visualizing.

### 3. GDP includes things that aren't anyone's income
GDP includes government spending, business investment, and net exports. Not all GDP flows to individuals. So comparing individual income to GDP per capita is somewhat apples-to-oranges. The ratio can never be 100% because some GDP is retained by corporations or spent by government.

However, the *trend* is still meaningful. If the ratio was 60% in 1970 and 38% today, that means a smaller share of total output is reaching the median person — whether it's going to corporate profits, government programs, or the top 1%.

**My instinct:** Acknowledge this in the graph's methodology note, but don't let it derail the metric. The ratio doesn't need to be 100% to be informative. What matters is the slope.

### 4. Transfer payments
Social Security, Medicare, SNAP, unemployment insurance — these are income to recipients but not from labor. Including them makes the ratio look better for retirees and the bottom quintile. Excluding them makes it look worse. CBO includes them (and arguably should, since they represent economic resources the person controls).

**My instinct:** Use CBO's "after-tax, after-transfer" definition. It's the most complete picture of what people actually have. But also show a "market income only" line to separate earned vs. transferred resources.

### 5. Is this just a Gini coefficient in disguise?
The ratio of median to mean is a known inequality measure. This graph is essentially plotting inequality over time, reframed as "your share of the pie." That's fine — in fact, that's the *point*. The Gini coefficient is an abstraction nobody feels. "You went from getting 61% to 38%" is something you feel in your gut. The reframing IS the contribution.

---

## Back-of-napkin verdict

The data almost certainly shows a declining ratio. This is well-documented in economics literature (Piketty, Saez, CBO reports). The question isn't whether the ratio declined — it's *how much*, *when the inflection points were*, and *how it differs by quintile*.

Key inflection points to look for:
- **1973:** End of the postwar productivity-wage coupling. Productivity kept rising; median wages flattened.
- **1981:** Reagan tax cuts + deregulation era begins
- **1997–2000:** Dot-com boom temporarily lifts all boats
- **2008:** Financial crisis + recovery that disproportionately benefited asset holders
- **2020–2024:** Pandemic stimulus → inflation → real wage recovery (possibly)

The graph should be compelling because the story is real. The challenge is methodological rigor, not manufacturing a narrative.

---

## Recommendation for Pass 2

Stress-test the metric against these edge cases:
1. **What happens during recessions?** GDP drops, but does median income drop proportionally? If not, the ratio spikes temporarily, which could be misleading.
2. **The health insurance wedge:** Quantify how much of the apparent decline is "hidden" in employer health spending.
3. **Household composition:** Test whether the per-capita conversion introduces artifacts from demographic change.
4. **Transfer payments:** Check how much Social Security/Medicare inflate the ratio for lower quintiles and mask the market-income story.
