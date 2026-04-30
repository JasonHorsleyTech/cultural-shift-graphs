# State College — Quality-Equivalent Experience Pricing

## What to research

Determine what a 1960-quality state college experience would cost today — BUT do this honestly, using the multi-attribute rubric from results/022-college-quality-rubric.md, not by cherry-picking one dimension.

**Read results/022-college-quality-rubric.md and results/024-college-quality-metrics.md first.**

## The challenge

The explore phase (angle-01) claimed the quality-equivalent of a 1960 state college is a $58K/year private university. Angle-02 rightly called this out as cherry-picking faculty attention while ignoring every dimension where 2025 state college is better.

This ticket takes the honest approach:

1. **If the rubric concluded "quality improved overall":** Then there IS no quality degradation — the modern state college IS the quality-equivalent or better. In this case, Line B = Line A for college, and the story is pure cost inflation. This is a valid and interesting finding. Report it clearly: "The quality-equivalent of a 1960 state college education is a 2025 state college education. The product improved; the price exploded. There is no quality-degradation gap — only a cost gap."

2. **If the rubric found genuine degradation on specific dimensions:** Price the modern experience that matches those specific dimensions. For example, if faculty attention degraded, find the modern institution with 1960-level student-faculty ratios. That might be an honors program at a state flagship ($0 premium over regular tuition), a small liberal arts college ($40-55K), or a selective private ($55-65K). Report which institution matches which attributes and at what cost.

3. **A middle path:** Report the standard state college tuition as Line B with an annotation band showing the cost to recover the specific dimensions that degraded.

## Target data points

This is primarily a CURRENT analysis (what does it cost TODAY) rather than a time series. However, if you can find historical private college tuition for comparison, collect it:

| Year | Public 4-year Tuition | Private 4-year Tuition (1960-equivalent experience) | Source |
|------|----------------------|---------------------------------------------------|--------|

## Data source hierarchy

1. **College Board — Trends in College Pricing** — Both public and private tuition series.
2. **Individual institution pricing** for specific comparisons (honors programs, small public colleges, liberal arts colleges).
3. **NCES IPEDS** — Institution-level data for cherry-picking comparable institutions.

## Output format

Narrative-driven result:

```markdown
# State College — Quality-Equivalent Pricing

## Summary
[Is there a quality gap? If so, what dimensions? If not, what's the real story?]

## Finding
[One of: "No quality gap — Line B = Line A" / "Quality gap on specific dimensions — here's the cost to recover them" / "Mixed"]

## Quality-Equivalent Cost (if applicable)
| Year | Line A (public 4-year) | Line B (quality-equivalent) | What Line B buys | Source |
...

## Private vs. Public Tuition Series (for context)
| Year | Public 4-year | Private 4-year | Ratio | Source |
...

## Methodology
[How was the quality-equivalent identified? What assumptions were made?]

## Sources
[Full citations]
```

## What "good data" looks like

- Honest conclusion that follows from the rubric, even if it contradicts the project's thesis
- If there IS a gap, it's priced based on specific attribute matching, not vibes
- Private tuition series for comparison context
