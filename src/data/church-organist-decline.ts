/**
 * Church organist decline — one-off graph.
 *
 * No US Census occupation code for "church organist" exists, so total
 * profession size has to be triangulated from softer signals. Numbers
 * below are honest estimates with explicit uncertainty ranges, not
 * counted figures. See methodology notes at the bottom.
 */

export type EstimatePoint = {
  year: number
  usPopulationMillions: number
  /** Thousands of paid/honorarium church-organist positions in the US */
  organistsLow: number
  organistsMid: number
  organistsHigh: number
  /** Optional context for the data point */
  note?: string
}

export type AGOPoint = {
  year: number
  members: number
  source: string
}

export type OrganUsePoint = {
  year: number
  pct: number
  source: string
}

export type MethodologyNote = {
  signal: string
  status: 'hard' | 'estimated' | 'derived'
  detail: string
}

/**
 * Decade-by-decade estimate of total US church-organist positions.
 * Method: (US Christian congregations) × (share with organ) × (organists per
 * congregation), with low/high bounds capturing the joint uncertainty.
 *
 * Scope: paid or honorarium positions. Excludes purely volunteer parish
 * pianists who occasionally fill in. Includes part-time and weekend-only
 * organists. A single person serving multiple parishes counts once.
 */
export const estimates: EstimatePoint[] = [
  {
    year: 1900,
    usPopulationMillions: 76,
    organistsLow: 50,
    organistsMid: 75,
    organistsHigh: 100,
    note: 'Carnegie had been donating organs since 1873; pipe organ was the default in any meaningful-sized congregation.',
  },
  {
    year: 1920,
    usPopulationMillions: 106,
    organistsLow: 90,
    organistsMid: 120,
    organistsHigh: 150,
    note: 'Carnegie\'s organ-donation program ends 1919 with 8,812 organs given to churches, schools, civic institutions.',
  },
  {
    year: 1940,
    usPopulationMillions: 132,
    organistsLow: 110,
    organistsMid: 140,
    organistsHigh: 180,
    note: 'Hammond electric organ (1935) and Allen (1939) make organs affordable for small rural churches that could not afford pipe organs.',
  },
  {
    year: 1955,
    usPopulationMillions: 165,
    organistsLow: 110,
    organistsMid: 145,
    organistsHigh: 190,
    note: 'Profession peak. Weekly church attendance hits 49% (Gallup all-time high).',
  },
  {
    year: 1970,
    usPopulationMillions: 205,
    organistsLow: 90,
    organistsMid: 125,
    organistsHigh: 165,
    note: 'Vatican II (1962-65) and the Jesus Movement begin shifting Catholic and evangelical worship away from organ music.',
  },
  {
    year: 1990,
    usPopulationMillions: 249,
    organistsLow: 60,
    organistsMid: 90,
    organistsHigh: 125,
    note: 'Contemporary praise band model spreads through evangelical churches; mainline denominations begin closing rural churches.',
  },
  {
    year: 2000,
    usPopulationMillions: 282,
    organistsLow: 45,
    organistsMid: 65,
    organistsHigh: 90,
    note: '53% of US churches still use organ music in worship (Lifeway 1998). The decline is real but slow.',
  },
  {
    year: 2010,
    usPopulationMillions: 309,
    organistsLow: 30,
    organistsMid: 50,
    organistsHigh: 75,
    note: 'AGO membership crossed its own peak around 2007 (~18K) and is now in clear decline. Average member age mid-50s to mid-70s.',
  },
  {
    year: 2020,
    usPopulationMillions: 331,
    organistsLow: 20,
    organistsMid: 35,
    organistsHigh: 50,
    note: 'COVID closures accelerate church consolidation. Many small churches that closed never reopen.',
  },
  {
    year: 2026,
    usPopulationMillions: 335,
    organistsLow: 18,
    organistsMid: 28,
    organistsHigh: 40,
    note: '47% of US churches still use organ music; AGO membership ~10,000. Aging cohort is the leading indicator — most current organists will retire by 2040.',
  },
]

/** AGO membership — the only longitudinal hard-data series we have. */
export const agoMembership: AGOPoint[] = [
  { year: 1896, members: 145, source: 'AGO founding (Wikipedia)' },
  { year: 2007, members: 18367, source: 'AGO membership records' },
  { year: 2015, members: 15876, source: 'AGO records (derived from 2019 reported 11% decline since 2015)' },
  { year: 2017, members: 14880, source: 'AGO records' },
  { year: 2019, members: 14150, source: 'AGO survey' },
  { year: 2026, members: 10000, source: 'AGO current (approx, per Wikipedia 2026 update)' },
]

/** Share of US churches that use organ music in worship — Lifeway research. */
export const organUse: OrganUsePoint[] = [
  { year: 1998, pct: 53, source: 'Lifeway Research' },
  { year: 2024, pct: 47, source: 'Lifeway Research / Worship Leader survey' },
]

/** What's measured directly vs. what's triangulated. */
export const methodology: MethodologyNote[] = [
  {
    signal: 'AGO membership',
    status: 'hard',
    detail: 'American Guild of Organists publishes annual membership counts. Hard data — but the AGO is voluntary and historically captured only a fraction of working organists. Its own peak was 2007, decades after the profession peak.',
  },
  {
    signal: 'US church attendance',
    status: 'hard',
    detail: 'Gallup has tracked weekly attendance since 1939. Peak was 49% in 1955 and 1958. Current is ~32%.',
  },
  {
    signal: 'Share of churches using organ music',
    status: 'hard',
    detail: 'Lifeway Research and Worship Leader surveys: 53% of US churches in 1998, 47% today. Lutherans 88%; Northeast 58%; West 36%.',
  },
  {
    signal: 'US musicians + music teachers',
    status: 'hard',
    detail: '1950 US Census reported 166,000 total. Includes all music professions (orchestra, jazz, teaching) — church organists are a meaningful but not separable subset.',
  },
  {
    signal: 'Total US church-organist count',
    status: 'estimated',
    detail: 'No Census occupation code, no longitudinal series. Estimated by: (Christian congregations in the US) × (share using organ) × (~1 paid organist per congregation), with low/high bounds reflecting joint uncertainty in each input.',
  },
  {
    signal: 'Per-capita organist density',
    status: 'derived',
    detail: 'Estimate divided by US population in millions. The honest comparison across eras: a profession that holds steady in raw count while population doubles is shrinking by half in social presence.',
  },
]
