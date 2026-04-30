# Ticket 031: Asteroid Impact — 10 km Impactor Effects Modeling

## What to research

A 10 km asteroid (Chicxulub-class) hitting Earth. What happens in the first hours to days? Blast effects, tsunamis, ejecta, firestorms.

## Specific data needed

1. **Impact parameters:**
   - 10 km asteroid at ~20 km/s impact velocity
   - Energy release: ~10^24 joules (~100 million megatons TNT)
   - Comparison: entire US nuclear arsenal is ~1,500 megatons. This is ~70,000x larger.

2. **Immediate effects (hours):**
   - Crater: ~150-200 km diameter
   - Seismic: equivalent to magnitude ~11 earthquake, felt globally
   - Ejecta: molten rock re-entering atmosphere, heating the air globally
   - Firestorms: ejecta re-entry heats the atmosphere to oven temperatures within ~1000 km. How far does lethal heating extend?
   - Tsunami (if ocean impact): height and reach. What coastal populations are affected?

3. **Near-term effects (days to weeks):**
   - Dust and soot injection into stratosphere
   - Wildfires: global or regional? How much of the land surface burns?
   - Acid rain from nitrogen oxides
   - Darkness: how quickly does dust block sunlight? How dark?

4. **US-specific casualties:**
   - If impact is in North America: near-total US casualties within hours
   - If impact is elsewhere: what reaches the US? (Ejecta heating, seismic, tsunami, atmospheric effects)
   - Model both US-impact and far-side-of-Earth impact for contrast

5. **Comparison to nuclear war:**
   - Energy is vastly larger but more concentrated
   - Impact winter vs. nuclear winter: similar mechanism but different duration?
   - A 10 km impact is closer to a mass extinction event than a "civilization disruptor"

## Where to look

1. **NASA CNEOS** — Near-Earth Object impact modeling
2. **Alvarez et al. (1980)** — original Chicxulub hypothesis
3. **Schulte et al. (2010) — Science** — Chicxulub impact and mass extinction
4. **Toon et al. (1997)** — environmental effects of large impacts
5. **Collins et al. — "Earth Impact Effects Program"** — online impact calculator
6. **Boslough & Crawford** — nuclear-test-validated impact simulations (Sandia)

## Result format

**Mortality Timeline** for first 30 days:

| time_hours | cumulative_deaths_pct | deaths_pct_low | deaths_pct_high | primary_cause | source |
|---|---|---|---|---|---|

Present TWO variants:
1. Impact in North America (near-total US casualties)
2. Impact on far side of Earth (US deaths from secondary effects only)

Key Data Points:
- `lethal_radius_km` — distance from impact where survival is ~0%
- `ejecta_heating_lethal_radius_km`
- `tsunami_lethal_zone_population` (if ocean impact)

## What good data looks like

- Uses the Collins "Earth Impact Effects Program" for quantified effects at different distances
- Clearly distinguishes between "nearby" and "far-side" impact scenarios
- Notes that a 10 km impactor is essentially a mass extinction event — survival curves for this are fundamentally different from other scenarios
- If impact is in North America, this is the only scenario with >99% US mortality. Be explicit about this.
