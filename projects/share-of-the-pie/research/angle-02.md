# Exploration Pass 2: Stress-Testing the Metric

## The metric under examination

**Median disposable income per capita / GDP per capita**, tracked annually, 1947-2024.

Pass 1 grounded this with compelling examples (professor, factory worker, overall median) and identified several open questions. This pass tries to break it.

---

## Stress Test 1: Recessions create misleading spikes

GDP is volatile. Median income is sticky (wages don't crash overnight — layoffs hit employment counts, not wage rates for those still employed). During recessions:

- GDP drops sharply (2008: -2.5%, 2020: -2.8%)
- Median income drops slowly or with a lag (unemployment benefits, savings drawdown, job retention)
- The ratio **spikes upward**, suggesting the median person is suddenly capturing *more* of the pie

This is mechanically true but narratively wrong. Nobody felt richer in 2009.

**Severity: Moderate.** The spikes are temporary and smooth out over a 2-3 year window. Solutions:
- Use 3-year rolling averages for the ratio (not for the underlying data, just the displayed line)
- Or annotate recession periods with shading and let the viewer understand the context
- Or use real (inflation-adjusted) GDP and income, which partially dampens the effect

**Verdict: Scope boundary, not fatal.** A rolling average or recession annotations fix this without changing the metric.

---

## Stress Test 2: GDP is not a pie anyone can eat

This is the deepest conceptual problem. GDP per capita is *not* "the economy's output per person that could theoretically be distributed." It includes:

### a) Depreciation (~16% of GDP)
GDP is gross. Net Domestic Product subtracts the capital consumed in production (buildings wearing out, machines depreciating). That 16% was never available to distribute. In 1950, depreciation was ~10% of GDP. Today it's ~16%, partly because the economy is more capital-intensive and partly because software/IP depreciates fast. This means the denominator has gotten artificially larger over time — the ratio would decline even if income distribution hadn't changed at all.

**Quantified:** If we used NDP per capita instead of GDP per capita:
- 1970: ratio would be ~67% instead of ~61% (denominator shrinks by ~11%)
- 2024: ratio would be ~45% instead of ~38% (denominator shrinks by ~16%)
- The *decline* is from 67% to 45% (a 33% drop) instead of 61% to 38% (a 38% drop)

So about 5 percentage points of the apparent 23-point decline is actually just capital depreciation eating a larger share of gross output. The story is still real, but roughly a fifth of it is an artifact.

### b) Corporate retained earnings
Corporations retain profits rather than distributing them. Retained earnings as a share of GDP have grown from ~2% in the 1970s to ~5-6% today. This money goes to stock buybacks, investment, or just sits on the balance sheet. It's "in" GDP but never flows to individuals as income.

If you're a stock owner, these retained earnings benefit you via rising share prices — but that doesn't show up in disposable income (until you sell). This disproportionately affects the upper quintiles' ratio.

### c) Government consumption (~17% of GDP)
Government spending on defense, infrastructure, bureaucracy — this is GDP that doesn't flow to individuals as income (though it arguably benefits them as public goods). This share has been relatively stable, so it doesn't bias the *trend* much. But it means the theoretical ceiling for the ratio is ~83%, not 100%.

### d) Imputed rent (~7% of GDP)
The BEA counts the "rental value" of owner-occupied homes as both production (GDP) and income (personal income). This is ~$2 trillion/year. Nobody writes themselves a rent check. It inflates *both* sides of the ratio — it's in GDP and in the Census/CBO income figures.

The problem: imputed rent has grown from ~5% of GDP in 1970 to ~7% today, and it doesn't scale linearly with income. A homeowner in the bottom quintile with a paid-off $150k house gets less imputed rent than a top-quintile homeowner with a $1.2M house. If median income data includes imputed rent, it artificially props up the ratio for homeowners and depresses it for renters.

**Whether Census median income includes imputed rent:** It does not. Census CPS income excludes imputed rent. CBO *does* include it for their comprehensive measure. This creates a mismatch: GDP includes it, Census income does not. The ratio is mechanically depressed by ~5-7% just from this asymmetry.

**Severity: Moderate to high.** The ratio isn't comparing like to like. GDP includes depreciation, imputed rent, government consumption, and retained earnings. Income excludes most of these. The ratio can never be 100%, and the theoretical ceiling has *changed over time*, which biases the trend.

**Verdict: Not fatal, but requires one of two responses:**
1. Switch the denominator from GDP per capita to something cleaner: Net National Income per capita, or Personal Income per capita. These strip out depreciation, retained earnings, and government consumption. The trend will be less dramatic but more honest.
2. Keep GDP per capita but be explicit that the metric measures "share of gross output" and that the ceiling is ~70-80%, not 100%. The trend is still meaningful even if the level is harder to interpret.

**Recommendation:** Use GDP per capita (it's intuitive, well-known) but include a secondary line showing the ratio with NDP or NNI as denominator. If both lines decline in parallel, the story is robust. If GDP-based declines faster, flag that some of the decline is structural, not distributional.

---

## Stress Test 3: The health insurance time bomb

Pass 1 identified this but underestimated its severity. Let me quantify it.

**Employer health insurance costs per covered worker:**
- 1970: ~$200/year (trivial)
- 1990: ~$3,200/year
- 2000: ~$5,800/year
- 2010: ~$9,800/year
- 2024: ~$16,500/year (Kaiser Family Foundation)

Employer-sponsored health insurance is *compensation* — it's money the employer spends on the worker that the worker never sees as cash. It's counted in GDP (health services are economic output) and in some income definitions (CBO includes it) but not in others (Census CPS excludes it).

**The distortion:** If median *total compensation* (wages + employer health costs) had kept pace with GDP, but the health insurance share grew from $200 to $16,500, then the median wage *would* show a declining ratio even if total compensation held steady. In other words: the worker's "share of the pie" didn't shrink — it's just that a growing chunk of their slice is pre-eaten by the health system.

**Quantified for median worker:**
- 1970: $200 health / $7,500 wage = 2.7% of compensation is invisible
- 2024: $16,500 health / $45,000 wage = 27% of compensation is invisible

If we add employer health costs back to median income:
- 1970 ratio: ~61% → ~63% (trivial change)
- 2024 ratio: ~38% → ~48% (significant change)

That means roughly **10 percentage points** of the apparent 23-point decline is health insurance eating the worker's compensation. That's nearly half the apparent effect.

**Severity: High.** This isn't a minor adjustment. It fundamentally changes the magnitude of the story. The "share of the pie" IS shrinking, but close to half the shrinkage is going to health insurance, not to corporate profits or the wealthy. That's a different villain than the one the graph implies.

**Verdict: Not fatal, but absolutely must be shown.** This is one of the most important things the graph can reveal. Three lines:
1. Wage income / GDP (the dramatic decline)
2. Total compensation (wages + employer health) / GDP (the moderated decline)
3. The gap between them = the health cost story

This makes the graph *more* interesting, not less. "Your slice is shrinking AND a growing part of what's left is invisible health costs" is a more nuanced and more honest story.

---

## Stress Test 4: Household composition artifacts

The per-capita conversion (dividing household income by household members) is necessary but introduces noise.

**Scenario A: Single-person households**
A person earning $50k alone has a per-capita income of $50k. A couple earning $80k total has per-capita income of $40k. The single person looks "richer" per capita despite having less total income and no economies of scale.

Single-person households went from ~17% of all households in 1970 to ~29% today. This mechanically *raises* per-capita median income relative to per-household median income. It works *against* the declining-ratio story.

**Scenario B: Dual-income households**
In 1970, ~40% of married women worked. Today, ~60%+. Dual-income households have higher total income but the same number of people. Per-capita income rose partly because more household members earn — not because each earner's slice got bigger.

This also works *against* the declining-ratio story. The ratio would have declined even more if women hadn't entered the workforce en masse.

**Scenario C: The equivalence scale problem**
Economists use "equivalence scales" (like the OECD scale) to account for economies of scale in households: a family of 4 doesn't need 4x the income of a single person. Simply dividing by household size overstates the income of small households and understates it for large ones.

**Severity: Moderate.** The demographic effects partially cancel out (single-person households push the ratio up; dual-income households mask a bigger decline). But they're real noise.

**Verdict: Scope boundary.** Using per-capita household income is the right default. The interesting insight is that *despite* the massive entry of women into the workforce (which should have raised the ratio), the ratio still declined. That makes the story stronger, not weaker. Note: don't use equivalence scales — they're correct economics but bad communication. "Income per person" is intuitive; "income per adult equivalent" is not.

---

## Stress Test 5: Transfer payments and the aging population

In 1970, Social Security was modest. Today it's the largest line item in the federal budget. Medicare didn't exist until 1965 and was small until the 1980s.

**The distortion:** For retirees, Social Security IS their income. Including it in "disposable income" makes the ratio look better for the bottom quintiles, because transfers have grown enormously. But this isn't the market rewarding their labor — it's the government redistributing.

If we look at market income only (exclude transfers):
- Bottom quintile ratio probably declined from ~15% to ~5% — catastrophic
- Median ratio probably declined more steeply than the after-transfer version shows

The aging population compounds this. In 1970, ~10% of the population was 65+. Today, ~17%. More people are in the "income from transfers" bucket, which pulls the median in a direction that doesn't reflect what working-age people experience.

**Severity: Moderate.** CBO's after-tax-after-transfer measure is the right comprehensive picture (it IS what people have), but it masks the market income story.

**Verdict: Scope boundary.** Show both market income and after-transfer income ratios. The gap between them IS the story of the growing welfare state — interesting in its own right. But the primary line should probably be market income for working-age adults (25-64), since that's the "am I getting my fair share for my work?" question Jason is asking.

Actually — this is important enough to flag as a **metric refinement**: the primary line should be **working-age (25-64) median market income / GDP per capita**, not all-ages disposable income. This eliminates retiree transfer noise and focuses on the labor market question.

---

## Stress Test 6: GNI vs GDP — where does the money go?

GDP measures production within US borders. GNI (Gross National Income) measures income earned by US residents regardless of where the production happens.

In 1970, GDP and GNI were nearly identical (the US didn't have much overseas investment and foreign-owned US production was small). Today:
- US GNI > GDP by ~$500B (Americans earn more from overseas investments than foreigners earn from US-based production)
- But this overseas income flows disproportionately to the top of the distribution

Using GDP as the denominator slightly undercounts the total output attributable to Americans, making the ratio look worse. The effect is ~0.5% of GDP, so this is minor.

**Severity: Low.** The difference is small and doesn't change the trend.

**Verdict: Ignorable.** GDP is fine.

---

## Stress Test 7: The "Gini in disguise" problem — is this just well-trodden ground?

Pass 1 acknowledged this and dismissed it ("the reframing IS the contribution"). Let me push harder.

The ratio of median to mean income is directly related to inequality measures. Economists have published exactly this kind of analysis many times:
- Piketty & Saez's income share data
- CBO's annual Distribution of Household Income reports
- The Economic Policy Institute's "productivity-pay gap" chart

Is this graph just repackaging known data with a different y-axis label?

**Counterargument:** Yes, and that's fine. The Piketty data is inaccessible to normal people. The CBO reports are PDFs nobody reads. The EPI chart uses 1979=100 indexing which makes the y-axis meaningless to non-economists. Jason's version says "you used to get 61 cents of every dollar the economy produced per person; now you get 38 cents." That's visceral. The contribution is communication, not discovery.

**Severity: Zero (for this project's goals).** Jason isn't writing an economics paper. He's making a graph to show his friends. The metric doesn't need to be novel — it needs to be legible and honest.

**Verdict: Proceed.** But be aware that any economist who sees it will say "this is just the labor share with extra steps." That's okay. Don't claim novelty.

---

## Stress Test 8: Pre-1979 data quality

CBO data (the gold standard for after-tax income by quintile) only goes back to 1979. Census CPS data goes back to 1967 but is pre-tax. Before 1967, there's very little reliable data on the income distribution.

The most interesting part of the story might be 1947-1973 (the "Great Compression" when inequality fell and wages tracked productivity). But the data for that period is:
- Pre-tax only (Census)
- No quintile breakdowns before 1967
- Estimated, not surveyed, for some early years

**Severity: Moderate.** The graph will have a methodological break around 1979 (pre-tax before, after-tax after) and another around 1967 (no quintile data before).

**Verdict: Scope boundary.** Two options:
1. Start the graph at 1979 (CBO era). Clean data, but misses the rise-and-fall arc. Less compelling.
2. Start at 1967 (Census era). Show pre-tax ratio before 1979, after-tax after 1979, with a visible break. More complete story but requires honest annotation.
3. Start at 1947 but only show the median line (no quintiles) before 1967.

**Recommendation:** Option 3. The median line from 1947 shows the full arc: rising ratio through the 1960s, plateau in the early 1970s, decline from 1973 onward. Quintile lines appear at 1967. After-tax adjustment kicks in at 1979. Annotate both transitions. The unevenness is honest and the full arc is the story.

---

## Stress Test 9: International GDP leakage into the denominator

Globalization means a growing share of US GDP is produced by foreign-owned companies (Toyota factories in Kentucky, Nestle operations in the US, etc.). The profits from these operations are counted in US GDP but flow to foreign shareholders.

Conversely, US companies produce GDP in other countries that isn't counted in US GDP.

In 1970, this was negligible. Today, foreign-owned production accounts for ~5% of US GDP. If those profits leave the country, they inflate the GDP denominator without any corresponding income for Americans. This makes the ratio look worse than it "should."

**Combined with depreciation (Stress Test 2a):** ~16% of GDP is depreciation, ~5% leaves the country. The theoretical ceiling for Americans' income / GDP is only ~79% before you account for government consumption, retained earnings, etc. And that ceiling has shrunk from maybe ~88% in 1970.

**Severity: Low-to-moderate.** The trend is still meaningful but the magnitude is overstated by maybe 2-3 percentage points.

**Verdict: Ignorable for the primary line, but good context for methodology notes.**

---

## Summary of stress test results

| Test | Severity | Verdict | Impact on magnitude |
|------|----------|---------|-------------------|
| Recession spikes | Moderate | Scope boundary — use rolling avg or annotations | Noise, not bias |
| GDP ≠ distributable pie | Moderate-High | Show NDP alternative; acknowledge ceiling | ~5pp of 23pp decline is artifact |
| Health insurance | High | MUST show — it's half the story | ~10pp of 23pp is health costs |
| Household composition | Moderate | Per-capita is fine; note dual-income masking | Works against the story (makes it conservative) |
| Transfer payments / aging | Moderate | Show market income for working-age adults | CBO transfers mask ~3-5pp |
| GNI vs GDP | Low | Ignorable | <1pp |
| Novelty concern | Zero | Proceed — communication is the contribution | N/A |
| Pre-1979 data | Moderate | Start at 1947, annotate breaks | N/A |
| International leakage | Low | Methodology note only | ~2-3pp |

---

## Refined metric proposal

The metric survives stress-testing, but with important refinements:

### Primary line (the headline)
**Working-age (25-64) median market income per capita / GDP per capita**
- Strips out retirees and transfer payments
- Focuses on the labor market question: "am I getting my fair share for my work?"
- Most honest version of the story Jason wants to tell

### Secondary lines (context)
1. **Same ratio but with total compensation** (wages + employer health insurance + employer retirement contributions) — shows how much of the "shrinkage" is hidden compensation
2. **All-ages median after-tax-after-transfer income / GDP per capita** — the comprehensive "what do people actually have" version (CBO-style)
3. **Mean income / GDP per capita** — the sanity check (should be more stable)

### Optional enhancement
4. **Primary line with NDP as denominator instead of GDP** — shows how much depreciation biases the trend

### What the graph will show
After all adjustments, the honest story is probably:
- The ratio declined from ~60% to ~38% using the naive metric (a 22-point drop)
- About 5 points of that is structural (depreciation eating more of gross output)
- About 8-10 points is health insurance eating compensation (real but not "inequality")
- About 3-5 points is transfer payments masking market income decline
- The remaining ~5-8 points is genuine distributional shift — productivity gains flowing to capital and the top of the distribution

That remaining 5-8 points is still a massive story. And the health insurance revelation alone is worth the graph. But it's a more nuanced story than "you went from 61% to 38%."

### Scope exclusions
- Don't attempt international comparisons (GDP definitions vary too much)
- Don't attempt sub-national breakdowns (insufficient data)
- Don't attempt industry-level analysis (this is a macro question)
- Don't adjust for cost-of-living variation across time (that's what the grandpas-eggs project is for)

---

## Spin-off ideas (noted, not pursued)

1. **The health insurance graph:** Employer health insurance as a percentage of total compensation, over time. "What share of your raise went to your insurance company?" — this is a standalone graph idea, not part of share-of-the-pie.
2. **The dual-income trap:** Ratio of single-earner household income to the "same lifestyle" benchmark over time. Related to the keeping-up-with-the-joneses idea already in the ideas pile.
3. **Government as middleman:** What percentage of GDP passes through government hands (taxes + transfers) before reaching individuals? Has grown from ~25% to ~35%. The government is taking a bigger cut of the pie before redistributing it.

---

## Recommendation for Pass 3

The metric is sound but the story is more nuanced than Pass 1 suggested. The key question for Pass 3 is: **does the refined metric (working-age market income / GDP per capita) actually show a clearer or muddier picture than the naive version?**

Before planning tickets, it's worth doing one more pass to:
1. Verify that CBO and Census data actually provide working-age breakdowns (or whether we'd need to estimate them from age-specific income tables)
2. Nail down whether "employer health insurance costs by income percentile" data exists at sufficient granularity to construct the compensation-adjusted line
3. Decide the final set of lines for the graph — too many lines and it becomes unreadable; too few and we lose the nuance

If both data questions have positive answers, this is ready to plan. If not, we may need to simplify back to the naive metric with qualitative annotations.
