# Dilapidated Billions

## The core question

Where can you drive to and stand in front of a billion dollars that is now *negative* money? Things that cost a fortune to build, don't work (or were never finished, or are abandoned), and would be extraordinarily expensive to take down safely. Pure liabilities you can visit.

The map of failure. "One billion dollars spent on something that not only does not work — it would cost more than that to clean up."

## The framing that matters

It's not just "expensive abandoned thing." It has to clear a higher bar:

- **Massive build cost** (hundreds of millions to tens of billions in today's dollars)
- **Doesn't function** (cancelled mid-build, built but never operated, or operated then shut down)
- **Negative current value** — demolition/cleanup/remediation cost exceeds salvage value. The land would be worth more if the thing had never been built.
- **Visitable** — you can drive there. Or at least see it from a public road. Not "classified site behind a fence in the middle of nowhere with no view."

## The Arecibo trigger

Jason mentioned Arecibo (he called it "RT 64 aka tna 1500" — actually the 305m radio telescope at Arecibo Observatory in Puerto Rico). It collapsed Dec 2020. NSF declined to rebuild. Decommissioning is underway. Build cost was modest (~$9.7M in 1963), but the cliff-site cleanup is the expensive part. So the *build cost* isn't the headline — it's the *liability*.

This is a useful edge case: some entries are "spent billions, got nothing"; others are "spent millions, but now the cleanup is billions." Both qualify. The graph should make that distinction visible.

## Candidate seed list (US — verify before plotting)

| Site | Where | Spent | Status |
|---|---|---|---|
| Superconducting Super Collider | Waxahachie, TX | ~$2B | 14mi of tunnel, cancelled 1993 |
| VC Summer Units 2&3 | Jenkinsville, SC | ~$9B | Abandoned 2017 mid-build |
| Shoreham Nuclear | Long Island, NY | ~$6B | Built, never operated commercially |
| Marble Hill Nuclear | Madison, IN | ~$2.5B | Abandoned 50% complete |
| Satsop Nuclear (WPPSS) | Elma, WA | part of $24B "Whoops" default | Cooling towers still standing, tourable |
| MOX Fuel Fabrication | Savannah River, SC | ~$7.6B | Cancelled 2018 |
| Yucca Mountain | Nye County, NV | ~$15B | Tunnel exists, politically dead |
| Plum Brook Reactor | Sandusky, OH | — | NASA test reactor, decommissioning |
| Six Flags New Orleans | New Orleans East, LA | — | Katrina-abandoned, demo cost > land value |
| Arecibo Observatory | Arecibo, PR | (modest build, costly cleanup) | Collapsed 2020 |
| Hanford Site | Richland, WA | (cleanup ~$300B+) | Decades of radiological cleanup |
| Rocky Flats | Jefferson County, CO | (cleanup billions) | Plutonium contamination |

Probably 30–60 entries for the US alone. Then world.

## Possible angles / cuts

- **Pure map** (lat/lng pins, sized by liability) — the obvious version
- **Bubble chart**: x = year abandoned, y = current liability ($), size = original build cost
- **Per-capita liability by state** — which state holds the most stranded-asset value per resident?
- **Sector breakdown**: nuclear vs. military vs. transportation vs. science. Nuclear probably dominates.
- **"Closest to me"** mode: user enters zip, gets the nearest one. (Personal-trivia angle.)
- **Build cost vs. cleanup cost scatter** — find the worst ratios. Some things cost $X to build and 10X to clean up.

## Visualization tension

This project's default chart libraries (RoughViz, Chart.js) don't really do maps. A map is the natural form here, but it would be the first map graph in the project. Options:

- Leaflet + OpenStreetMap tiles (vanilla, free, easy)
- Mapbox (better tiles, free tier exists, requires API key)
- Static SVG map (no tiles, no pan/zoom, ugly)
- D3 + topojson (geographic but no tiles)
- Skip the map, do bubble/scatter and note the geography in tooltips

Worth deciding early. A map-first graph is probably the right call for this question, but it sets a precedent.

## Possible scope cuts

- **US first, then world.** Jason explicitly said this. Phase the project.
- **Exclude things that work but are unpopular** (e.g., Big Dig — it works). Has to be non-functional.
- **Exclude pure overruns where the project completed.** Vogtle 3&4 went massively over budget but they generate power now. Out.
- **Do include "operated then shut down early"** if the shutdown was forced and the cleanup is expensive (San Onofre, Crystal River 3).
- **Exclude tiny stuff.** Threshold around $500M build OR $500M liability. Keep it monumental.

## Data sources

- Wikipedia categories: "Cancelled nuclear power stations in the United States," "Abandoned military installations in the United States," "Cancelled megaprojects"
- DOE EM (Environmental Management) cost estimates for radiological sites
- GAO reports on nuclear cleanup
- News coverage at time of cancellation for build-cost figures
- Inflation-adjust everything to a single year (current)

## Honesty check

The fun framing is "negative money" — but proving cleanup > salvage is harder than proving "lots of money was spent and the thing doesn't work." The graph should be clear about which entries are confirmed-negative-value vs. presumed-negative-value vs. "merely abandoned."

## Open questions

- World map or US-only as v1? Jason said US first.
- Map vs. scatter — which carries the message better? Probably map, but worth a sketch first.
- Demolition cost data is rare and inconsistently reported. How much do we tolerate "estimated" vs. "documented"?
- Do we include partial liabilities (e.g., a site that's 30% functional, 70% mothballed)?
- Does this become a "drive to it" travel guide, or stay analytical?
- Is there a Sketch version worth doing first (RoughViz bar chart of top 10 stranded megaprojects) before committing to building the map?
