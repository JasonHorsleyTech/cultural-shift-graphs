# Movie Ticket — Price History 1948-2025

## What to research

Build a time series of **movie ticket prices** in the United States from 1948 (or earliest available) to 2025. Collect both standard admission and premium format prices for the years where premium exists.

**Read results/020-movie-quality-rubric.md first** to determine what the quality-equivalent is.

## Target data points

Annual from 1948 to 2025. NATO publishes annual average ticket prices — this should be a relatively clean single-source series.

## Data source hierarchy

1. **NATO (National Association of Theatre Owners)** — Average US movie ticket price, annual. This is THE standard source, cited in virtually every analysis of ticket pricing. Available from 1948 or earlier.
2. **MPAA/MPA annual theme reports** — Often reproduce the NATO data with additional context.
3. **BLS CPI "Admissions" component** — Average price series for movie admission if available.
4. **Box Office Mojo / The Numbers** — Modern box office analytics that sometimes publish ticket price data.

For premium tier (IMAX, Dolby Cinema, luxury):
5. **IMAX Corporation annual reports** — Average IMAX ticket premium since IMAX expanded to multiplexes (~2008).
6. **Industry reports on premium format adoption** — What percentage of screens are premium? What's the average premium?

## Important notes

- **NATO average ticket price** includes matinee and evening, adult and child, standard and premium — it's a blended average. This is fine for Line A. For Line B, you need the premium-format-specific price.
- **The drive-in era:** Drive-in theaters were popular in the 1950s-1960s and typically charged per car, not per person. The NATO average likely captures this. Note it as context but don't try to separately track drive-in pricing.
- **3D surcharges (2009-2015):** The 3D movie wave temporarily inflated average ticket prices. Note this if visible in the data.

## Output format

Follow the **Type 3: Price data** format from plan.md.

Collect two series if possible:

**Line A (standard admission):**
| Year | Price (nominal $) | Unit | Source | Confidence | Notes |

**Line B (premium format):**
| Year | Price (nominal $) | Unit | Format | Source | Confidence | Notes |

Unit = "one admission".

## What "good data" looks like

- Continuous annual series 1948-2025 for standard admission (NATO data makes this achievable)
- Premium format prices from at least 2010 to 2025
- Prices: ~$0.36 in 1948, ~$0.69 in 1960, ~$2.69 in 1980, ~$5.39 in 2000, ~$11.00 in 2025
