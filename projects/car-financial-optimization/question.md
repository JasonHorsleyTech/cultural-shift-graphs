# Car: raw financial optimization

## The question

Over a 15-year horizon, what is the absolute lowest dollars-per-month average cost for a street-legal car, when every minute of labor and every dollar saved is counted honestly?

## What Jason wants to know

The conventional wisdom is "buy a reliable used Toyota." But that ignores the hidden virtues of the shitbox-and-DIY path (no financing cost, liability-only insurance, near-zero theft loss) and the hidden costs (your time, breakdown days, repeat-purchase friction). Nobody actually models all paths against each other on equal terms.

The graph answers: is the conventional wisdom right, or is one of the unconventional paths actually cheaper once you do the math? The **mixed-approach** strategy (shitbox while saving, then upgrade) is especially underexplored and Jason explicitly wants it modeled.

## Constraints (Jason's situation, baked in)

- $5,000 cash now for down payment / outright purchase / first car
- $500/month maximum total budget — payment, insurance, fuel, repairs, and savings toward next car all come out of this
- 15-year horizon
- Average American mileage (~13,500 mi/year)
- Time valued at $50/hr (avg American salary). A $200-parts + 4-hour repair = $400 effective cost.
- **Zero job risk.** If the car breaks, Uber or rent. That cost is in the model — there is no "but what if you can't get to work" stranded-driver scenario.
- All figures in **2026 real dollars**.
- **Opportunity cost of unspent money: 0% real return** — i.e., an inflation-matching savings account. Jason explicitly rejected S&P/investment-curve math because that just shows compound interest, not a car decision.

## Strategies to compare

1. **Pure shitbox churn** — $2–3K beaters, drive to terminal, scrap, repeat. Candidate models include: 90s Ford Ranger (inline-6), 90s Toyota Tacoma, older Camry, older Civic, older Prius.
2. **All-cash reliable used** — $5K outright on a high-mile but reputable car (Camry/Corolla, ~150K mi). Drive into the ground.
3. **New car financed** — $5K down + $500/mo on a new Corolla/Civic. Drive to 250K mi.
4. **Used-but-recent financed** — $5K down + $500/mo on a 3-year-old off-lease Toyota.
5. **Lease churn** — roll lease to lease for 15 years.
6. **Mixed approach** — start with a shitbox, save aggressively from the $500/mo cap, upgrade to a more durable car once savings allow.

## What gets counted (every strategy)

- Purchase price + financing interest
- Insurance: liability-only on beaters (~$600/yr) vs. full coverage required on financed cars (~$1500–2000/yr) — this is a real swing
- Registration / annual fees
- Fuel
- Repairs (parts + DIY labor at $50/hr equivalent)
- Uber/rental during breakdown days (frequency increases with vehicle age)
- Opportunity cost of money spent now vs. saved at 0% real return

## DIY ceiling

What an average American man could do with basic tools (or tools he buys for the job) if he HAD to. Roughly: anything covered by a Haynes manual + YouTube — brakes, alternators, starters, water pumps, timing belts, suspension, fuel pumps, exhaust, sensors, head gaskets. NOT: transmission rebuild, frame repair, machining work. Repairs above the ceiling are counted at shop-labor rates.

## Modeling choices (defaults — flag during explore for refinement)

- **Shitbox "scrap it" rule:** scrap when next repair quote > 2× current resale value, OR when annual repair hours > 40
- **Catastrophic events** (accident, theft, total loss): asymmetric across strategies — totaling a $2K beater vs. a $30K new car is wildly different even with full coverage. Include with reasonable probabilities; refine in explore.

## Output shape

Two graphs on the same page:

1. **Headline bar chart** — 15-year average monthly cost per strategy, sorted cheapest to most expensive. P10/P90 error bars on variable strategies (shitbox paths). Answers "what's the cheapest."
2. **Cumulative cost over time line chart** — running total month-by-month, one line per strategy. Shows the staircase reality (shitbox replacement jumps, big down payments) and crossover points where strategies pass each other.
