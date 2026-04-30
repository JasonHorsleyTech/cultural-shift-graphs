# What Share of the Pie Do I Get?

## Core question

If I denominate my income not in dollars but as a percentage of GDP per capita, how has the average person's share of the economy's output changed over time?

## Why it matters

Traditional inflation metrics are circular — they measure the cost of goods in dollars that are themselves inflation-adjusted using the cost of goods. This graph sidesteps money entirely and asks: of all the economic value produced per person, what fraction does the median person actually capture as disposable income? If that ratio is shrinking, people are getting squeezed regardless of what prices do.

## The unit

Disposable income as a fraction of GDP per capita, tracked year over year. If GDP per capita is $80k and median disposable income is $40k, you're capturing 50%. The trend of that ratio is the story.

## Data sources

- GDP per capita: Bureau of Economic Analysis (BEA), available back to 1929
- Median disposable income: Census Bureau / BLS, reliable back to at least 1947
- Labor productivity (output per hour): BLS, from 1947 — useful as secondary context

## Methodological notes

- **Disposable income definition matters.** After-tax is the standard definition, but consider showing after-tax-and-mandatory-costs (health insurance, required minimum car insurance, etc.) as a second line. The gap between those two is itself interesting.
- **Household vs. individual:** Dual-income households changed the denominator. Consider showing per-capita and per-household to capture the shift from one-earner to two-earner families.
- **Income quintiles:** The median tells one story, but splitting by quintile (or at least showing 20th/50th/80th percentile) would reveal whether the shrinkage is uniform or concentrated.
- **Demographic convergence:** Median data inherently captures racial/demographic equalization over time. Jason's grandfather's white middle-class experience was above-median for his era. Using median is honest about this — showing percentile bands makes it explicit.

## What Jason wants to prove (but let the data decide)

That the average person is capturing a smaller and smaller share of the economy's output over time — that productivity gains flow to capital, not labor. But if the data shows otherwise, graph that. The graph is only fun if it's honest.

## Related work

This is part of a trio of ideas from the same workshopping session. See also:
- `grandpas-eggs` project (quality-equivalent commodity costs in productivity-adjusted labor-hours)
- `keeping-up-with-the-joneses` idea (still workshopping — how many hours to live the "normal" life)
- Future combination: once both projects have data, combine them into "how many productivity-adjusted labor-hours to buy grandpa's eggs" — the intersection of share-of-pie and quality-equivalent costs.
