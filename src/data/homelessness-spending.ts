// One-off: US homelessness spending (federal, state+local, charity) and prevalence.
// Anchored where possible; clearly estimated elsewhere. See methodology in the component.
//
// Hard anchors:
//   - HUD AHAR Point-in-Time counts (verified per year from State of Homelessness 2025).
//   - HUD Homeless Assistance Grants appropriations history (HUD budget archives).
//   - NLIHC / Culhane & An (2021) — nonprofit homeless shelter industry revenue, $8.5B in 2015.
//   - California audit: $24B over 5 fiscal years (2019–2024) on housing+homelessness.
//   - US Census mid-year population estimates.

export type YearPoint = {
  year: number
  usPopulationMillions: number
  // CPI-U annual-average multiplier to convert nominal $ → 2024 $.
  // Source: BLS CPI-U (1982-84=100). 2024 anchor = 313.689.
  cpiMultiplier: number
  // Point-in-Time homeless count (HUD AHAR).
  pitCount?: number
  // True for years where the PIT count is partial / not comparable (2021: sheltered only).
  pitPartial?: boolean
  pitNote?: string
  // All dollars are billions USD, NOMINAL (not inflation-adjusted).
  // Convert to real 2024$ in the component via cpiMultiplier.
  // "fed" = total federal homelessness funding across HUD, VA, HHS, etc.
  // "stateLocal" = state and local own-source spending (not federal pass-through).
  // "charity" = nonprofit homeless-services revenue from private donations + grants.
  fedLow?: number
  fedMid?: number
  fedHigh?: number
  stateLocalLow?: number
  stateLocalMid?: number
  stateLocalHigh?: number
  charityLow?: number
  charityMid?: number
  charityHigh?: number
  anchorNote?: string
}

export const data: YearPoint[] = [
  {
    year: 2007,
    usPopulationMillions: 301.2,
    cpiMultiplier: 1.513,
    pitCount: 647258,
    fedLow: 2.5, fedMid: 3.2, fedHigh: 4.0,
    stateLocalLow: 2.0, stateLocalMid: 4.0, stateLocalHigh: 6.0,
    charityLow: 4.5, charityMid: 5.5, charityHigh: 6.5,
    anchorNote: 'First year of HUD AHAR. HUD Homeless Assistance Grants ≈ $1.4B.',
  },
  {
    year: 2008,
    usPopulationMillions: 304.1,
    cpiMultiplier: 1.457,
    pitCount: 639784,
    fedLow: 2.7, fedMid: 3.4, fedHigh: 4.2,
    stateLocalLow: 2.2, stateLocalMid: 4.5, stateLocalHigh: 6.5,
    charityLow: 4.7, charityMid: 5.7, charityHigh: 6.7,
  },
  {
    year: 2009,
    usPopulationMillions: 306.8,
    cpiMultiplier: 1.462,
    pitCount: 643067,
    fedLow: 3.0, fedMid: 3.8, fedHigh: 4.7,
    stateLocalLow: 2.5, stateLocalMid: 5.0, stateLocalHigh: 7.5,
    charityLow: 4.5, charityMid: 5.5, charityHigh: 6.5,
    anchorNote: 'Great Recession peak — homelessness sticky despite ARRA emergency rental assistance.',
  },
  {
    year: 2010,
    usPopulationMillions: 309.3,
    cpiMultiplier: 1.439,
    pitCount: 637077,
    fedLow: 3.5, fedMid: 4.5, fedHigh: 5.5,
    stateLocalLow: 3.0, stateLocalMid: 6.0, stateLocalHigh: 9.0,
    charityLow: 5.0, charityMid: 6.0, charityHigh: 7.0,
    anchorNote: 'HEARTH Act expansion + ARRA temporarily boosts HUD spending. HUD HAG = $2.2B.',
  },
  {
    year: 2011,
    usPopulationMillions: 311.6,
    cpiMultiplier: 1.395,
    pitCount: 623788,
    fedLow: 4.0, fedMid: 5.0, fedHigh: 6.0,
    stateLocalLow: 4.0, stateLocalMid: 6.5, stateLocalHigh: 9.5,
    charityLow: 5.3, charityMid: 6.3, charityHigh: 7.3,
  },
  {
    year: 2012,
    usPopulationMillions: 314.0,
    cpiMultiplier: 1.366,
    pitCount: 621553,
    fedLow: 4.2, fedMid: 5.2, fedHigh: 6.3,
    stateLocalLow: 4.5, stateLocalMid: 7.0, stateLocalHigh: 10.5,
    charityLow: 5.5, charityMid: 6.5, charityHigh: 7.5,
  },
  {
    year: 2013,
    usPopulationMillions: 316.2,
    cpiMultiplier: 1.347,
    pitCount: 590364,
    fedLow: 4.3, fedMid: 5.3, fedHigh: 6.4,
    stateLocalLow: 4.8, stateLocalMid: 7.5, stateLocalHigh: 11.0,
    charityLow: 5.7, charityMid: 6.7, charityHigh: 7.7,
  },
  {
    year: 2014,
    usPopulationMillions: 318.6,
    cpiMultiplier: 1.325,
    pitCount: 576450,
    fedLow: 4.5, fedMid: 5.5, fedHigh: 6.5,
    stateLocalLow: 5.0, stateLocalMid: 9.0, stateLocalHigh: 13.0,
    charityLow: 6.5, charityMid: 7.5, charityHigh: 8.5,
  },
  {
    year: 2015,
    usPopulationMillions: 320.7,
    cpiMultiplier: 1.323,
    pitCount: 564708,
    fedLow: 4.8, fedMid: 5.7, fedHigh: 6.8,
    stateLocalLow: 6.0, stateLocalMid: 10.0, stateLocalHigh: 14.0,
    charityLow: 7.5, charityMid: 8.5, charityHigh: 9.5,
    anchorNote: 'NLIHC nonprofit-shelter revenue anchor: $8.5B (Culhane & An, 2021).',
  },
  {
    year: 2016,
    usPopulationMillions: 322.9,
    cpiMultiplier: 1.307,
    pitCount: 549928,
    fedLow: 5.0, fedMid: 5.9, fedHigh: 7.0,
    stateLocalLow: 6.5, stateLocalMid: 11.0, stateLocalHigh: 15.0,
    charityLow: 7.7, charityMid: 8.7, charityHigh: 9.7,
    anchorNote: 'Lowest PIT count on record. HUD HAG = $2.48B.',
  },
  {
    year: 2017,
    usPopulationMillions: 324.9,
    cpiMultiplier: 1.280,
    pitCount: 550996,
    fedLow: 5.5, fedMid: 6.4, fedHigh: 7.5,
    stateLocalLow: 7.0, stateLocalMid: 12.0, stateLocalHigh: 17.0,
    charityLow: 8.0, charityMid: 9.0, charityHigh: 10.0,
  },
  {
    year: 2018,
    usPopulationMillions: 326.7,
    cpiMultiplier: 1.249,
    pitCount: 552830,
    fedLow: 5.7, fedMid: 6.6, fedHigh: 7.7,
    stateLocalLow: 8.0, stateLocalMid: 14.0, stateLocalHigh: 19.0,
    charityLow: 8.5, charityMid: 9.5, charityHigh: 10.5,
  },
  {
    year: 2019,
    usPopulationMillions: 328.3,
    cpiMultiplier: 1.227,
    pitCount: 567715,
    fedLow: 6.0, fedMid: 7.0, fedHigh: 8.0,
    stateLocalLow: 9.0, stateLocalMid: 16.0, stateLocalHigh: 22.0,
    charityLow: 9.0, charityMid: 10.0, charityHigh: 11.0,
    anchorNote: 'Start of California\'s $24B/5-yr surge. HUD HAG = $2.4B.',
  },
  {
    year: 2020,
    usPopulationMillions: 331.5,
    cpiMultiplier: 1.212,
    pitCount: 580466,
    fedLow: 7.5, fedMid: 9.0, fedHigh: 11.0,
    stateLocalLow: 12.0, stateLocalMid: 19.0, stateLocalHigh: 26.0,
    charityLow: 10.0, charityMid: 11.0, charityHigh: 13.0,
    anchorNote: 'COVID-era supplements (ESG-CV, ERA) inflate federal totals.',
  },
  {
    year: 2021,
    usPopulationMillions: 332.0,
    cpiMultiplier: 1.158,
    pitCount: 326126,
    pitPartial: true,
    pitNote: 'Sheltered-only count. HUD declined to publish an unsheltered total — about 40% of CoCs (including most of California) skipped the unsheltered enumeration due to COVID. The true 2021 total was likely close to 2020/2022 (~580K), but the published number is what HUD released, so that\'s what\'s plotted here.',
    fedLow: 8.0, fedMid: 9.5, fedHigh: 12.0,
    stateLocalLow: 14.0, stateLocalMid: 21.0, stateLocalHigh: 28.0,
    charityLow: 10.5, charityMid: 11.5, charityHigh: 13.5,
  },
  {
    year: 2022,
    usPopulationMillions: 333.3,
    cpiMultiplier: 1.072,
    pitCount: 582462,
    fedLow: 8.0, fedMid: 9.5, fedHigh: 11.5,
    stateLocalLow: 16.0, stateLocalMid: 24.0, stateLocalHigh: 32.0,
    charityLow: 10.5, charityMid: 11.5, charityHigh: 13.0,
  },
  {
    year: 2023,
    usPopulationMillions: 334.9,
    cpiMultiplier: 1.030,
    pitCount: 653104,
    fedLow: 8.5, fedMid: 10.0, fedHigh: 12.0,
    stateLocalLow: 18.0, stateLocalMid: 28.0, stateLocalHigh: 38.0,
    charityLow: 11.0, charityMid: 12.0, charityHigh: 14.0,
    anchorNote: 'HUD awarded $3.6B in Homeless Assistance Grants for FY24.',
  },
  {
    year: 2024,
    usPopulationMillions: 335.6,
    cpiMultiplier: 1.000,
    pitCount: 771480,
    fedLow: 8.5, fedMid: 10.0, fedHigh: 12.0,
    stateLocalLow: 18.0, stateLocalMid: 30.0, stateLocalHigh: 40.0,
    charityLow: 11.0, charityMid: 12.0, charityHigh: 14.0,
    anchorNote: 'Highest PIT count on record (+19% vs. 2007; +18% vs. 2023).',
  },
]

export type Confidence = 'hard' | 'estimated' | 'rough'

export const methodology: { signal: string; status: Confidence; detail: string }[] = [
  {
    signal: 'PIT homeless count',
    status: 'hard',
    detail:
      'HUD\'s Annual Homelessness Assessment Report (AHAR) Point-in-Time counts. Direct enumeration on one January night. Undercounts unsheltered populations and people doubled-up, but it\'s the only consistent national series. Data starts 2007. The 2021 number (326,126) is sheltered-only — HUD declined to publish a full count because COVID disrupted about 40% of unsheltered enumerations, including most of California. The true 2021 total was almost certainly closer to 580K, but the published figure is what\'s shown on the chart.',
  },
  {
    signal: 'Inflation adjustment',
    status: 'hard',
    detail:
      'All spending figures shown in real 2024 dollars unless toggled to nominal. CPI-U annual average (BLS, 1982-84=100), with 2024 = 313.689 as the anchor. Multipliers range from 1.51× (2007 → 2024) down to 1.00× (2024).',
  },
  {
    signal: 'Federal spending',
    status: 'estimated',
    detail:
      'HUD Homeless Assistance Grants (the core program) are exactly known year-by-year from HUD budget archives — $1.4B in 2007 → $2.2B in 2010 → $2.5B in 2016 → $3.6B in 2024. Total federal includes VA homeless programs, HHS PATH and RHY, USDA, and others; aggregated from USICH "Targeted Federal Homelessness Funding" reports for recent years and back-cast for earlier years. The line is mid-estimate; the band reflects program-boundary uncertainty (what counts as "homelessness" vs. broader housing assistance).',
  },
  {
    signal: 'State and local spending',
    status: 'rough',
    detail:
      'The hardest series to pin down. There is no national clearinghouse — state and local homelessness spending isn\'t reported in any standard fiscal series. The strongest anchor is California: a 2024 state audit found $24B spent over five fiscal years (2019–2024), or roughly $4–5B/year. California has ~28% of all US homeless people, so naive scaling implies a national state/local total in the $15–25B range for recent years. New York, Washington, and Massachusetts also run multi-billion-dollar state/county systems. Pre-2015 figures are back-cast from a much lower base — most of the state/local growth happened after California\'s 2019 surge. Band is wide.',
  },
  {
    signal: 'Charity spending',
    status: 'estimated',
    detail:
      'Anchored to Culhane & An (NLIHC, 2021): nonprofit homeless-shelter industry revenue was $8.5B in 2015, of which roughly half came from private sources and half from government grants. The line shown here estimates the private/donations portion plus charity-funded homeless services beyond shelter (outreach, prevention, services). Other years are scaled from this anchor using Giving USA\'s human-services giving trend. The band reflects sector-boundary uncertainty — how much "human services" giving goes specifically to homelessness vs. broader poverty work.',
  },
  {
    signal: 'US population',
    status: 'hard',
    detail: 'US Census Bureau mid-year resident population estimates. Used to compute the % of Americans currently homeless on any given night.',
  },
]
