# Television — Content Access Cost Annotation Data 1955-2025

## What to research

Build a time series of the **annual cost to access television content** — the subscription/service layer that sits between owning a TV and actually watching it. This is NOT the primary metric (TV purchase price is), but it provides critical annotation data for the graph.

The explore phase flagged that the total cost of "watching TV at home" potentially INCREASED despite the TV itself getting cheaper, once you account for subscriptions and internet.

## Target data points

Every 5 years from 1955 to 2025, or whatever the data supports.

## What to collect (annual cost, nominal $)

| Era | Content access model | Annual cost |
|-----|---------------------|-------------|
| 1955-1975 | Antenna only (free broadcast, 3-13 channels) | $0 (one-time antenna cost ~$10-20) |
| 1975-1990 | Antenna + optional cable TV | Cable: ~$8-20/month |
| 1990-2010 | Cable/satellite dominant | Cable: ~$30-80/month |
| 2010-2020 | Cable + streaming transition | Cable + Netflix: ~$70-120/month |
| 2020-2025 | Streaming dominant (multiple services) | 3-5 streaming services + internet: ~$80-200/month |

These are rough ranges — the ticket is to find actual historical pricing data to substantiate or correct them.

## Data source hierarchy

1. **FCC annual reports** — Cable TV pricing data, average monthly cable bill. Published annually since the Cable Television Consumer Protection Act of 1992.
2. **Cable industry reports** (NCTA/Internet & Television Association) — Historical cable pricing.
3. **Streaming service pricing** — Netflix, Hulu, Disney+, etc. pricing history (widely documented).
4. **BLS CPI "Cable and satellite television" component** — Index values showing the trend.
5. **Internet service pricing** — FCC broadband reports for average ISP costs (required for streaming).

## Important notes

- **This is an annotation, not the primary data.** The TV mini-chart will show purchase price as the main lines. The content-access cost could be shown as a bar or area chart underneath, or as a footnote.
- **Not all content access is required for basic TV.** In 2025, free broadcast (antenna) still exists and gets you ~20-40 channels. The "required" content cost is arguably still $0. But the median household subscribes to multiple services. Collect the median household's actual spending on TV-related subscriptions.
- **Internet is shared infrastructure.** Counting the full internet bill as "TV content access cost" is double-counting since internet is used for many things. Consider attributing a fraction, or just noting the full internet cost as a caveat.

## Output format

```markdown
# Television — Content Access Cost

## Summary
[How did the cost of watching TV evolve beyond the hardware purchase?]

## Data

| Year | Content Model | Monthly Cost (nominal $) | Annual Cost (nominal $) | Source | Notes |
|------|--------------|-------------------------|------------------------|--------|-------|
...

## Total Cost of Viewing (TV purchase annualized + content)

| Year | TV Purchase (annual, assuming N-year lifespan) | Content (annual) | Total Annual | Source |
...

## Methodology
[How was "content access cost" defined? What's included/excluded?]

## Sources
[Full citations]
```

## What "good data" looks like

- Clear progression from $0/year (antenna era) to $1,000-2,000/year (streaming era)
- FCC and industry data for cable pricing
- An honest note about antenna still being free
- Total-cost-of-viewing calculation that combines annualized TV purchase + content access
