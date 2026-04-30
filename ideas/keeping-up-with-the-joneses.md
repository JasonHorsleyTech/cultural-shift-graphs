# Keeping Up with the Joneses

## Status: still workshopping

## The question (fuzzy)

How many adult work-hours does it take to provide a "normal" lifestyle — not luxurious, not subsistence, but the median standard of living for your time and place?

## The insight

Nobody cares about absolute quality. You care about relative position. You don't want a big house; you want a house at least as big as your neighbor's. You don't want fancy eggs; you want the eggs normal people buy. "Normal" is a moving target defined by your peers, and the question is whether keeping up with normal has gotten easier or harder.

## The unit (tentative)

Total adult work-hours per household per year to maintain median standard of living. This captures both wage changes AND the shift from single-income to dual-income households. If it took one adult working 2,000 hours in 1955 and it takes two adults working 3,800 hours in 2025, that's the story — regardless of whether the house is bigger or the TV is flatter.

## Slicing ideas

- State or region (cost of living varies wildly)
- Decade
- Family size (normalized to 2-adult-2-child household)
- Income percentile

## Data sources (tentative)

- Consumer Expenditure Survey (BLS)
- Median household income
- Average hours worked per household
- Census data on household composition (single vs. dual income)

## Open questions that need more workshopping

- **What is "normal"?** Median consumption bundle for that era? Or a fixed bundle? If era-relative, a 2025 family "needs" internet, a smartphone, and childcare (because both parents work). A 1955 family didn't. Is that fair to include? Probably yes — that's the whole point — but it needs to be explicit.
- **Dual-income shift:** In 1955, one income bought the normal life. Now two incomes buy it. Show "hours per adult" or "hours per household"? Probably both — the gap between them is the story.
- **State-level data:** How granular is Census/BLS data at the state level? Might need to use metro areas or Census regions instead.
- **Where's the line between "bitching about economics" and "a graphable question"?** This idea is dangerously close to being a vibes-based essay rather than a data-driven graph. Needs sharper metric definition before graduating.

## Related projects

- `share-of-the-pie` (graduated) — what fraction of GDP per capita the median person captures
- `grandpas-eggs` (graduated) — quality-equivalent commodity costs in productivity-adjusted labor-hours
- Future combination of those two could feed into this one
