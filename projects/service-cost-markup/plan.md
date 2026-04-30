# Plan: Service Cost Markup — Fundamental Worker Ratio

## The metric

**Fundamental Worker Ratio = Worker's compensation / Total cost to customer (normalized per worker)**

The exact formula varies by industry. A college professor's ratio divides salary by (tuition × students-per-class). A firefighter's ratio divides salary by (fire-department-budget-share × property-tax / firefighters-per-district). Each research agent figures out the right computation for their industry. The output is always the same: a percentage representing the fundamental worker's share of what the customer pays.

## Data format for results

Each results file is a markdown file with this structure:

```
# [Industry] — [Worker Role]

## Summary

[2-3 sentences: what's the story? Is the ratio stable, collapsing, or improving? Any inflection points?]

## Data

| Year | Worker Comp (nominal $) | Customer Cost (nominal $) | Cost Unit | Customers/Worker | Ratio (%) | Confidence |
|------|------------------------|--------------------------|-----------|-----------------|-----------|------------|
| 1960 | ... | ... | ... | ... | ... | high/med/low |
| 1970 | ... | ... | ... | ... | ... | ... |

Go as far back as the data allows. Use decade intervals where possible. Use 5-year or annual intervals if the data supports it and there's an interesting story in the granularity (e.g., a sharp inflection point around a specific policy change).

## Methodology

[How was the ratio computed? What proxy was used for "customer cost"? How were customers-per-worker estimated? Why was this proxy chosen over alternatives?]

## Sources

- [Full citations with URLs where possible]

## Notes

[Caveats, data gaps, surprising findings, interesting context that the graph component might want to surface]
```

## Methodology guidance (loose, not prescriptive)

**Consistency over accuracy.** The data for any single year can be rough. What matters is that the same measurement methodology is applied across the full time range so that movement is truthful. If a good-enough proxy exists for 60 years but a "better" number only exists for 15, use the 60-year one.

**Each industry gets its own best proxy.** Don't force the same formula across firefighters and dentists. The agent researching each industry should find the most honest, most longitudinally consistent way to express "what the customer pays" for that specific service. State what you chose and why.

**Nominal dollars are fine.** Since the ratio divides two dollar amounts from the same year, inflation cancels out. Don't adjust for CPI.

**When "customer cost" is indirect (taxes, insurance), find the best aggregate.** For firefighters: fire-department share of municipal budget, divided by households served. For healthcare: total national health expenditure per capita (CMS) works better than "average hospital bill" because it captures insurance, Medicare, Medicaid, and out-of-pocket in one number. For police: same approach as fire. The agent should use their judgment.

**When multiple worker roles share a denominator, note it.** Doctor, nurse, and surgeon all divide against healthcare spending. Their ratios will be small individually — that's expected and correct. The interesting question is how each one's share moves relative to the others.

**Data sources to start with (not exhaustive):**
- Bureau of Labor Statistics (BLS) — wage/salary data for most occupations
- Census Bureau / Census of Governments — municipal spending
- National Center for Education Statistics (NCES) — tuition, teacher salaries
- Centers for Medicare & Medicaid Services (CMS) — healthcare expenditure
- Department of Transportation (DOT) — airfares, transit data
- Industry associations (AAUP, ABA, NFDA, AAA, Pollstar, NAR, etc.)
- Academic studies and historical datasets

## Ticket structure

56 tickets, one per industry-worker combination. Each ticket is a brief, not a manual. The agent has full latitude on methodology — the ticket names the industry, the worker, and a few interesting angles or complications to think about. That's it.

## What the graph phase will build

One flagship mega-graph: all industries as lines on the same chart, X = time, Y = fundamental worker ratio. Lines start at different years depending on data availability. Industries where the ratio is collapsing (college, healthcare) will be visually obvious against industries where it's stable (barber, trades).

Individual industry deep-dives may become separate follow-up projects if any particular line is surprising enough to warrant its own page.
