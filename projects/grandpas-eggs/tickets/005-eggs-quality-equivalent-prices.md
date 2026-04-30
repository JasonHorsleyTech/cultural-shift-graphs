# Eggs — Quality-Equivalent Prices 1990-2025

## What to research

Build a time series of the price for **quality-equivalent eggs** (the modern product matching the 1955 baseline, as defined in the quality rubric from results/003-eggs-quality-rubric.md) from the earliest available year to 2025.

**Read results/003-eggs-quality-rubric.md first** to understand exactly what product to price. If that file doesn't exist yet, use "pasture-raised eggs, dozen" as the working definition — this is almost certainly what the rubric will specify.

## Target data points

Annual data from the earliest year this product category existed at retail (~1990s or early 2000s) to 2025. Pre-divergence (before quality tiers existed), note that Line A and Line B are the same — no separate quality-equivalent price is needed.

## Data source hierarchy

1. **USDA Agricultural Marketing Service (AMS)** — Organic and specialty egg price reports. May have data from early 2000s onward.
2. **USDA ERS Organic Prices** — Premium data for organic eggs relative to conventional.
3. **Industry reports and market research** — Egg industry reports often publish tier pricing (conventional, cage-free, free-range, pasture-raised, organic).
4. **Retail price checks and consumer surveys** — Whole Foods, natural grocery chains, SPINS data for natural/organic channel.
5. **Academic studies** comparing organic/conventional egg pricing over time.

## Important context

- **Tier proliferation matters for this project.** If you can find pricing for ALL major tiers (conventional, cage-free, free-range, pasture-raised, organic, pasture-raised organic), collect all of them. The eggs commodity is the project's showcase for tier proliferation. The more tiers you can price, the better.
- **The quality-equivalent is NOT necessarily "organic."** Organic certification (USDA, 2002) addresses feed and antibiotic use but doesn't require meaningful outdoor access. "Pasture-raised" (with certifications like Certified Humane or Pasture-Raised by HFAC) is closer to the 1955 baseline where hens had genuine outdoor access and foraged.
- **Price volatility applies to premium eggs too.** Pasture-raised eggs also spiked during avian flu outbreaks, but the premium over conventional may have narrowed or widened during spikes.

## Output format

Follow the **Type 3: Price data** format from plan.md.

For the tier proliferation data, add additional rows or a separate table:

| Year | Tier | Price (nominal $) | Unit | Source | Confidence |
|------|------|-------------------|------|--------|------------|
| 2005 | Conventional | 1.20 | dozen | ... | ... |
| 2005 | Cage-free | 2.50 | dozen | ... | ... |
| 2005 | Free-range | 3.00 | dozen | ... | ... |
| 2005 | Pasture-raised | 5.50 | dozen | ... | ... |
| 2005 | Organic | 3.50 | dozen | ... | ... |

## What "good data" looks like

- Quality-equivalent prices from at least 2000 to 2025
- Clear identification of which specific product/tier is being priced
- Ideally, multi-tier pricing for at least 3-4 years to support the tier proliferation visualization
- Premium ratio over conventional noted (e.g., "pasture-raised costs 2.5x conventional")
