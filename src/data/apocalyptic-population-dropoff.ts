/**
 * Apocalyptic Population Drop-off
 *
 * US population survival curves after 8 civilization-ending events.
 * Synthesized from 42 research tickets spanning 130+ academic papers,
 * government reports, and tabletop exercises.
 *
 * All percentages are of 335M US baseline population.
 * Time is measured in hours from event onset.
 * Deaths are cumulative — each row's deathsPct >= the previous row's.
 */

export interface TimePoint {
  hours: number
  deathsPct: number
  deathsLow: number
  deathsHigh: number
  cause: string
}

export interface Scenario {
  id: string
  name: string
  shortName: string
  description: string
  color: string
  dashed: boolean
  probabilityLabel: string
  timePoints: TimePoint[]
}

export const US_POPULATION = 335_000_000

export const scenarios: Scenario[] = [
  {
    id: 'nuclear-winter',
    name: 'Nuclear War (Winter)',
    shortName: 'Nuclear Winter',
    description: 'US–Russia exchange, ~4,400 warheads, 150 Tg soot — severe nuclear winter per Xia et al. 2022',
    color: '#ef4444',
    dashed: false,
    probabilityLabel: '~1% / year',
    timePoints: [
      { hours: 1, deathsPct: 10.0, deathsLow: 8.0, deathsHigh: 20.0, cause: 'Blast & thermal pulse' },
      { hours: 6, deathsPct: 12.0, deathsLow: 9.0, deathsHigh: 25.0, cause: 'Firestorms' },
      { hours: 24, deathsPct: 15.0, deathsLow: 10.0, deathsHigh: 33.0, cause: 'Early fallout' },
      { hours: 168, deathsPct: 30.0, deathsLow: 24.0, deathsHigh: 36.0, cause: 'Acute radiation syndrome' },
      { hours: 720, deathsPct: 34.0, deathsLow: 27.0, deathsHigh: 41.0, cause: 'Radiation disease & medical cascade' },
      { hours: 2160, deathsPct: 38.0, deathsLow: 30.0, deathsHigh: 46.0, cause: 'Late radiation & disease' },
      { hours: 4320, deathsPct: 42.0, deathsLow: 33.0, deathsHigh: 51.0, cause: 'Famine onset' },
      { hours: 8760, deathsPct: 55.0, deathsLow: 42.0, deathsHigh: 68.0, cause: 'Famine — stored food exhausted' },
      { hours: 17520, deathsPct: 72.0, deathsLow: 58.0, deathsHigh: 85.0, cause: 'Mass starvation — peak soot' },
      { hours: 26280, deathsPct: 80.0, deathsLow: 65.0, deathsHigh: 92.0, cause: 'Famine — worst crop year' },
      { hours: 43800, deathsPct: 85.0, deathsLow: 70.0, deathsHigh: 95.0, cause: 'Famine tapering' },
      { hours: 87600, deathsPct: 88.0, deathsLow: 72.0, deathsHigh: 96.0, cause: 'Residual mortality & cancer' },
    ],
  },
  {
    id: 'nuclear-autumn',
    name: 'Nuclear War (Autumn)',
    shortName: 'Nuclear Autumn',
    description: 'Same exchange, ~30 Tg soot — milder "nuclear autumn" per Reisner/middle-ground estimates',
    color: '#fb923c',
    dashed: false,
    probabilityLabel: '~1% / year (same event, different climate)',
    timePoints: [
      { hours: 1, deathsPct: 10.0, deathsLow: 8.0, deathsHigh: 20.0, cause: 'Blast & thermal pulse' },
      { hours: 6, deathsPct: 12.0, deathsLow: 9.0, deathsHigh: 25.0, cause: 'Firestorms' },
      { hours: 24, deathsPct: 15.0, deathsLow: 10.0, deathsHigh: 33.0, cause: 'Early fallout' },
      { hours: 168, deathsPct: 30.0, deathsLow: 24.0, deathsHigh: 36.0, cause: 'Acute radiation syndrome' },
      { hours: 720, deathsPct: 34.0, deathsLow: 27.0, deathsHigh: 41.0, cause: 'ARS at wartime LD50' },
      { hours: 2160, deathsPct: 38.0, deathsLow: 30.0, deathsHigh: 46.0, cause: 'Delayed ARS & immune disease' },
      { hours: 4320, deathsPct: 40.0, deathsLow: 32.0, deathsHigh: 49.0, cause: 'Early malnutrition' },
      { hours: 8760, deathsPct: 45.0, deathsLow: 36.0, deathsHigh: 56.0, cause: 'Moderate famine' },
      { hours: 17520, deathsPct: 48.0, deathsLow: 38.0, deathsHigh: 60.0, cause: 'Peak crop stress' },
      { hours: 26280, deathsPct: 50.0, deathsLow: 39.0, deathsHigh: 63.0, cause: 'Famine easing' },
      { hours: 43800, deathsPct: 52.0, deathsLow: 40.0, deathsHigh: 65.0, cause: 'Residual disease & violence' },
      { hours: 87600, deathsPct: 55.0, deathsLow: 42.0, deathsHigh: 68.0, cause: 'Cancer & chronic illness' },
    ],
  },
  {
    id: 'grid-collapse',
    name: 'Prolonged Grid Collapse',
    shortName: 'Grid Collapse',
    description: 'EMP or Carrington-class solar storm — 4–10 year transformer recovery',
    color: '#06b6d4',
    dashed: false,
    probabilityLabel: '~1.3% / year (EMP + solar combined)',
    timePoints: [
      { hours: 1, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Grid fails — no immediate deaths' },
      { hours: 6, deathsPct: 0.05, deathsLow: 0.01, deathsHigh: 0.1, cause: 'Ventilator-dependent dying' },
      { hours: 24, deathsPct: 0.1, deathsLow: 0.05, deathsHigh: 0.3, cause: 'Medical emergencies without power' },
      { hours: 168, deathsPct: 0.5, deathsLow: 0.3, deathsHigh: 1.0, cause: 'Dialysis & insulin-dependent dying' },
      { hours: 720, deathsPct: 2.0, deathsLow: 1.0, deathsHigh: 4.0, cause: 'Full medical cascade — water failing' },
      { hours: 2160, deathsPct: 9.0, deathsLow: 5.0, deathsHigh: 16.0, cause: 'Disease epidemics & food running out' },
      { hours: 4320, deathsPct: 20.0, deathsLow: 10.0, deathsHigh: 35.0, cause: 'Famine & disease & violence' },
      { hours: 8760, deathsPct: 38.0, deathsLow: 18.0, deathsHigh: 65.0, cause: 'Mass famine (year 1)' },
      { hours: 17520, deathsPct: 52.0, deathsLow: 25.0, deathsHigh: 72.0, cause: 'Continued famine — some recovery' },
      { hours: 26280, deathsPct: 58.0, deathsLow: 27.0, deathsHigh: 76.0, cause: 'Slow grid recovery starting' },
      { hours: 43800, deathsPct: 62.0, deathsLow: 28.0, deathsHigh: 78.0, cause: 'Grid partially restored' },
      { hours: 87600, deathsPct: 65.0, deathsLow: 30.0, deathsHigh: 80.0, cause: 'Stabilized at reduced capacity' },
    ],
  },
  {
    id: 'engineered-pandemic',
    name: 'Catastrophic Engineered Pandemic',
    shortName: 'Pandemic',
    description: 'Airborne pathogen, R₀ ~7, CFR ~35%, 6-month spread — infrastructure cascade follows',
    color: '#a855f7',
    dashed: false,
    probabilityLabel: '~0.03% / year',
    timePoints: [
      { hours: 1, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Incubation — no deaths yet' },
      { hours: 6, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Incubation' },
      { hours: 24, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Incubation' },
      { hours: 168, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Early cases only' },
      { hours: 720, deathsPct: 0.1, deathsLow: 0.05, deathsHigh: 0.2, cause: 'Direct disease mortality' },
      { hours: 2160, deathsPct: 2.0, deathsLow: 1.0, deathsHigh: 4.0, cause: 'Exponential growth — healthcare collapse' },
      { hours: 4320, deathsPct: 10.0, deathsLow: 5.0, deathsHigh: 18.0, cause: 'Peak disease + infrastructure cascade' },
      { hours: 8760, deathsPct: 25.0, deathsLow: 15.0, deathsHigh: 40.0, cause: 'Disease burnout + famine onset' },
      { hours: 17520, deathsPct: 35.0, deathsLow: 20.0, deathsHigh: 55.0, cause: 'Famine & medical dependency deaths' },
      { hours: 26280, deathsPct: 38.0, deathsLow: 22.0, deathsHigh: 58.0, cause: 'Continued famine — slow recovery' },
      { hours: 43800, deathsPct: 40.0, deathsLow: 23.0, deathsHigh: 60.0, cause: 'Residual famine & recovery' },
      { hours: 87600, deathsPct: 42.0, deathsLow: 24.0, deathsHigh: 62.0, cause: 'Long-tail mortality' },
    ],
  },
  {
    id: 'supervolcano',
    name: 'Supervolcano (Yellowstone VEI-8)',
    shortName: 'Supervolcano',
    description: 'Full caldera eruption — meters of ash in Rockies, volcanic winter 1.5–5°C cooling',
    color: '#b45309',
    dashed: false,
    probabilityLabel: '~0.00014% / year',
    timePoints: [
      { hours: 1, deathsPct: 0.03, deathsLow: 0.01, deathsHigh: 0.05, cause: 'Pyroclastic flows' },
      { hours: 6, deathsPct: 0.03, deathsLow: 0.01, deathsHigh: 0.05, cause: 'Ash fall beginning' },
      { hours: 24, deathsPct: 0.04, deathsLow: 0.02, deathsHigh: 0.08, cause: 'Respiratory & ash burial' },
      { hours: 168, deathsPct: 0.06, deathsLow: 0.03, deathsHigh: 0.15, cause: 'Respiratory & infrastructure' },
      { hours: 720, deathsPct: 0.5, deathsLow: 0.2, deathsHigh: 1.5, cause: 'Medical dependency & respiratory' },
      { hours: 2160, deathsPct: 4.0, deathsLow: 2.0, deathsHigh: 8.0, cause: 'Early starvation & disease' },
      { hours: 4320, deathsPct: 12.0, deathsLow: 6.0, deathsHigh: 20.0, cause: 'Mass famine onset' },
      { hours: 8760, deathsPct: 25.0, deathsLow: 15.0, deathsHigh: 40.0, cause: 'Famine — volcanic winter peak' },
      { hours: 17520, deathsPct: 38.0, deathsLow: 22.0, deathsHigh: 55.0, cause: 'Continued famine — slow recovery' },
      { hours: 26280, deathsPct: 45.0, deathsLow: 28.0, deathsHigh: 62.0, cause: 'Famine tapering' },
      { hours: 43800, deathsPct: 50.0, deathsLow: 30.0, deathsHigh: 65.0, cause: 'Stabilization' },
      { hours: 87600, deathsPct: 53.0, deathsLow: 32.0, deathsHigh: 68.0, cause: 'Reduced carrying capacity' },
    ],
  },
  {
    id: 'asteroid-impact',
    name: 'Asteroid Impact (10 km, far-side)',
    shortName: 'Asteroid',
    description: 'Chicxulub-class impact on far side of Earth — ejecta, tsunamis, impact winter',
    color: '#64748b',
    dashed: false,
    probabilityLabel: '~0.000001% / year',
    timePoints: [
      { hours: 1, deathsPct: 0.5, deathsLow: 0.1, deathsHigh: 1.0, cause: 'Ejecta thermal pulse' },
      { hours: 6, deathsPct: 3.0, deathsLow: 1.0, deathsHigh: 8.0, cause: 'Thermal pulse & wildfires' },
      { hours: 24, deathsPct: 8.0, deathsLow: 3.0, deathsHigh: 15.0, cause: 'Tsunamis & fires' },
      { hours: 168, deathsPct: 12.0, deathsLow: 5.0, deathsHigh: 20.0, cause: 'Fire & infrastructure collapse' },
      { hours: 720, deathsPct: 25.0, deathsLow: 15.0, deathsHigh: 40.0, cause: 'Starvation onset — darkness & cold' },
      { hours: 2160, deathsPct: 50.0, deathsLow: 30.0, deathsHigh: 65.0, cause: 'Famine & impact winter' },
      { hours: 4320, deathsPct: 65.0, deathsLow: 45.0, deathsHigh: 80.0, cause: 'Prolonged famine & societal collapse' },
      { hours: 8760, deathsPct: 80.0, deathsLow: 55.0, deathsHigh: 90.0, cause: 'Starvation, cold, violence' },
      { hours: 17520, deathsPct: 85.0, deathsLow: 60.0, deathsHigh: 93.0, cause: 'Prolonged impact winter' },
      { hours: 26280, deathsPct: 87.0, deathsLow: 62.0, deathsHigh: 94.0, cause: 'Continued darkness' },
      { hours: 43800, deathsPct: 88.0, deathsLow: 65.0, deathsHigh: 95.0, cause: 'Slow recovery beginning' },
      { hours: 87600, deathsPct: 85.0, deathsLow: 60.0, deathsHigh: 93.0, cause: 'Partial recovery as climate stabilizes' },
    ],
  },
  {
    id: 'breadbasket-failure',
    name: 'Global Breadbasket Failure',
    shortName: 'Breadbasket',
    description: 'Simultaneous failure of 3+ major breadbaskets — 2 consecutive failed harvests',
    color: '#22c55e',
    dashed: false,
    probabilityLabel: '~0.3% / year (rising with warming)',
    timePoints: [
      { hours: 1, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Harvest failure discovered' },
      { hours: 6, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Markets responding' },
      { hours: 24, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Government rationing begins' },
      { hours: 168, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Export bans & price spikes' },
      { hours: 720, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.1, cause: 'Supply chain strain' },
      { hours: 2160, deathsPct: 0.5, deathsLow: 0.1, deathsHigh: 1.5, cause: 'Stores depleted — malnutrition' },
      { hours: 4320, deathsPct: 2.0, deathsLow: 0.5, deathsHigh: 5.0, cause: 'Full famine conditions' },
      { hours: 8760, deathsPct: 5.0, deathsLow: 2.0, deathsHigh: 10.0, cause: 'Starvation & disease (year 1)' },
      { hours: 17520, deathsPct: 12.0, deathsLow: 5.0, deathsHigh: 20.0, cause: 'Second failed harvest — social breakdown' },
      { hours: 26280, deathsPct: 15.0, deathsLow: 5.0, deathsHigh: 25.0, cause: 'Compound famine effects' },
      { hours: 43800, deathsPct: 15.0, deathsLow: 5.0, deathsHigh: 25.0, cause: 'Population stabilized' },
      { hours: 87600, deathsPct: 15.0, deathsLow: 5.0, deathsHigh: 25.0, cause: 'Agricultural recovery underway' },
    ],
  },
  {
    id: 'climate-cascades',
    name: 'Climate Tipping Cascades (4°C+)',
    shortName: 'Climate 4°C+',
    description: 'Multiple tipping points crossed over decades — AMOC collapse, Amazon dieback, permafrost thaw',
    color: '#3b82f6',
    dashed: true,
    probabilityLabel: '2–10% by 2100 (current policies)',
    timePoints: [
      { hours: 1, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Decades-long process — no discrete onset' },
      { hours: 6, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Gradual warming' },
      { hours: 24, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Gradual warming' },
      { hours: 168, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Gradual warming' },
      { hours: 720, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Gradual warming' },
      { hours: 2160, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Gradual warming' },
      { hours: 4320, deathsPct: 0.0, deathsLow: 0.0, deathsHigh: 0.0, cause: 'Gradual warming' },
      { hours: 8760, deathsPct: 0.05, deathsLow: 0.01, deathsHigh: 0.1, cause: 'Heat mortality & extreme weather' },
      { hours: 17520, deathsPct: 0.08, deathsLow: 0.02, deathsHigh: 0.2, cause: 'Compounding heat stress' },
      { hours: 26280, deathsPct: 0.1, deathsLow: 0.03, deathsHigh: 0.3, cause: 'Agricultural stress emerging' },
      { hours: 43800, deathsPct: 0.2, deathsLow: 0.05, deathsHigh: 0.5, cause: 'Early tipping effects' },
      { hours: 87600, deathsPct: 0.5, deathsLow: 0.2, deathsHigh: 1.0, cause: 'Heat + weather (~2050 at ~2°C)' },
    ],
  },
]
