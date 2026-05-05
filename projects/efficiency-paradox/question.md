# The Efficiency Paradox

**Core question:** When we make a resource dramatically more efficient to use, does total consumption actually go down — or do we just use more and eat the savings?

## Why this is interesting

Everyone assumes efficiency = conservation. Make cars more fuel-efficient, use less fuel. Make lights more efficient, use less electricity. Make farming more productive, use less land. But the Jevons Paradox (1865, originally about coal) says the opposite happens: efficiency makes the resource effectively cheaper, which increases demand, which partially or fully offsets the gains.

The question isn't "does Jevons Paradox exist" (economists already know it does). The question is: **across 10-12 real domains, how much of the efficiency gain got eaten, and which domains actually escaped?** Nobody has put them all on one graph.

## Napkin math (this is where it gets good)

**Cars:** Average fuel efficiency roughly doubled from ~15 MPG (1975) to ~30 MPG (2025). If driving stayed constant, fuel use per capita should have halved. But vehicle miles traveled per capita went from ~8,000/year to ~14,000/year. Net per-capita fuel savings: roughly zilch. We drove 75% more and burned it all back.

**Lighting:** LEDs use ~85% less energy per lumen than incandescent bulbs. If we kept the same number of lights, electricity for lighting should have collapsed. Instead, total lumens produced per capita has risen roughly 10x since 1900. We light parking lots, highways, decorative facades, 24/7 signage. Net energy savings for lighting: maybe 10-20%, not 85%.

**Computing:** Cost per FLOP dropped by a factor of ~10 billion since 1960. Total computing energy: skyrocketed. We didn't compute the same amount for less power — we built data centers the size of warehouses and trained models on them.

**Agriculture:** Crop yield per acre roughly tripled since 1950. Did we return farmland to nature? Some, but mostly we fed it to livestock, exported more, and increased food waste. Total agricultural inputs (water, fertilizer, land) per food calorie consumed have barely budged.

**Air travel:** Cost per passenger-mile dropped ~60% since 1980 (inflation-adjusted). Total passenger-miles: up ~400%. Net fuel consumption for aviation: way up.

**Communication:** Cost per message dropped from dollars (telegram) to fractions of a cent (email/text). Volume exploded from a few messages per day to hundreds. Total energy and infrastructure for communication: massively up.

## What the graph looks like

For each domain: two lines on a shared normalized axis (1975 or earliest-available = 100).

- **Line 1 (blue):** Efficiency improvement (MPG, lumens/watt, yield/acre, etc.) — going up and to the right.
- **Line 2 (red):** Actual total per-capita consumption of the underlying resource — also going up and to the right, or at best flat.

The gap between "what efficiency promised" and "what actually happened" is the visual punchline. In some domains the red line will nearly cancel the blue line. In others, maybe the savings held. The variation across domains is the story.

A summary panel could show: "Efficiency gained: X%. Consumption change: Y%. Savings actually captured: Z%." For most domains, Z will be shockingly small.

## The metric

**Jevons Ratio** = (actual consumption change) / (expected consumption change if behavior held constant)

- Ratio of 0% = perfect Jevons (efficiency gains completely eaten by increased usage)
- Ratio of 100% = no Jevons (all efficiency gains translated to real savings)
- Ratio > 100% = consumption dropped even more than efficiency predicted (extremely rare)

Calculated per domain, per decade where possible.

## Candidate domains (10-12, each a research cluster)

1. **Automotive fuel efficiency** — MPG vs. VMT vs. total fuel consumption per capita
2. **Lighting** — lumens per watt vs. total lumens produced vs. electricity for lighting
3. **Computing** — FLOPS per watt vs. total computing energy
4. **Agriculture (crops)** — yield per acre vs. total inputs per food calorie
5. **Air travel** — cost per passenger-mile vs. total passenger-miles vs. total jet fuel
6. **Home heating/cooling** — insulation R-value and HVAC efficiency vs. total energy for HVAC (tricky: homes got bigger)
7. **Water use** — appliance efficiency (toilets, washing machines) vs. total per-capita water use (the water-usage project covers volume, this is specifically the efficiency-vs-consumption question)
8. **Communication bandwidth** — cost per GB vs. total data consumed per capita
9. **Steel/aluminum production** — energy per ton vs. total production
10. **Textile manufacturing** — cost per garment vs. garments purchased per capita (fast fashion)
11. **Freight/shipping** — fuel per ton-mile vs. total ton-miles (we ship everything everywhere now)
12. **Refrigeration** — efficiency per cubic foot vs. total refrigerated volume per household

## Where the data lives

- **EIA (Energy Information Administration):** Lighting, HVAC, computing energy, total energy by sector
- **FHWA (Federal Highway Administration):** Vehicle miles traveled, fleet fuel efficiency
- **USDA:** Crop yields, agricultural inputs, food waste
- **BTS (Bureau of Transportation Statistics):** Air travel passenger-miles, freight ton-miles
- **USGS:** Water use surveys (every 5 years since 1950)
- **Census / BLS:** Household size, appliance ownership, consumer expenditure surveys
- **IEA (International Energy Agency):** Cross-country comparisons if we want them
- **Industry reports:** Textile production volumes, electronics shipments

Most of this is freely available US government data with 40-70 year time series. This is not a scraping project — it's a synthesis project.

## What would make this NOT interesting

- **If the answer is the same everywhere.** If every domain shows 0% savings captured (pure Jevons), the graph is a one-note lecture. The question is interesting precisely because the ratio should vary — some domains are more elastic than others. If exploration reveals uniform results, narrow to the 5-6 most divergent domains.
- **If the data doesn't exist at comparable time scales.** Some domains (computing) have short histories; others (agriculture) have long ones. If we can't get at least 30 years for most domains, the longitudinal story falls apart.
- **If "consumption went up" is entirely explained by population growth, not behavioral change.** Everything must be per-capita or the whole argument is trivially explained by "more people." This is a per-capita story.
- **If the efficiency gains are fake.** E.g., if EPA MPG ratings don't reflect real-world driving, the "efficiency improvement" line is overstated. Need to use real-world data where possible, not manufacturer claims.

## The bar argument

"You know how everyone says we just need to make things more efficient to solve climate change? Turns out every time we make something more efficient, we just use more of it. Cars got twice as fuel-efficient and we drove twice as far. Lights got 85% cheaper to run and we installed ten times as many. Look — here's the graph for twelve different things. The savings are a mirage."

Then someone says: "Well what about water? Or heating?" And you get to point at the two domains where it actually worked and ask: "OK so what's different about those? Why did Jevons win everywhere except here?"

That's the conversation.
