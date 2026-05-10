/**
 * Church organist decline — one-off graph.
 * Plus, by request: the rise and fall of the jazz pianist.
 *
 * Neither profession has a Census occupation code, so totals are
 * triangulated from softer signals. Numbers below are honest estimates
 * with explicit uncertainty ranges, not counted figures. See methodology
 * notes for each section.
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

/**
 * Jazz pianist — working pianists in the jazz idiom (ragtime, stride,
 * swing, bebop, hard bop, modal, fusion, contemporary jazz). Includes
 * touring big-band pianists, hotel/lounge pianists, recording-session
 * jazz pianists, and jazz educators whose primary identity is jazz.
 *
 * Excludes: classical, country, rock, and silent-film accompanists who
 * weren't primarily jazz/ragtime stylists. Excludes purely amateur
 * players. A single person doing multiple gigs counts once.
 */
export type JazzPoint = {
  year: number
  usPopulationMillions: number
  /** Thousands of paid jazz-pianist positions in the US */
  pianistsLow: number
  pianistsMid: number
  pianistsHigh: number
  note?: string
}

export const jazzEstimates: JazzPoint[] = [
  {
    year: 1900,
    usPopulationMillions: 76,
    pianistsLow: 0.3,
    pianistsMid: 0.6,
    pianistsHigh: 1.2,
    note: 'Joplin\'s "Maple Leaf Rag" published 1899. Ragtime is barely a commercial genre yet — a few hundred working professionals, mostly Black, mostly Midwest brothels and saloons.',
  },
  {
    year: 1915,
    usPopulationMillions: 100,
    pianistsLow: 1.5,
    pianistsMid: 3,
    pianistsHigh: 5,
    note: 'Ragtime mainstream. Tin Pan Alley, vaudeville pit pianists, parlor sheet music. James Reese Europe forms his Society Orchestra.',
  },
  {
    year: 1925,
    usPopulationMillions: 116,
    pianistsLow: 4,
    pianistsMid: 7,
    pianistsHigh: 12,
    note: 'Jazz Age. Speakeasies under Prohibition, Harlem rent parties, Chicago and Kansas City scenes, hotel orchestras. (Silent-film pianists peaked separately at ~10–15K US — only a fraction were jazz stylists; not counted here.)',
  },
  {
    year: 1935,
    usPopulationMillions: 127,
    pianistsLow: 10,
    pianistsMid: 16,
    pianistsHigh: 24,
    note: 'Swing Era ramp begins. Goodman\'s 1935 Palomar Ballroom gig launches the swing craze. Territory bands flourishing across the South and Midwest.',
  },
  {
    year: 1945,
    usPopulationMillions: 140,
    pianistsLow: 14,
    pianistsMid: 22,
    pianistsHigh: 32,
    note: 'Profession peak. ~700 name big bands plus territory bands, hotel orchestras, radio shows, and ballroom circuit. AFM membership grew from 135K (1940) to 231K (1948).',
  },
  {
    year: 1955,
    usPopulationMillions: 165,
    pianistsLow: 5,
    pianistsMid: 10,
    pianistsHigh: 16,
    note: 'Cabaret tax (1944, 30%→20% on any venue with food, drink, and dancing) kills dance venues. By 1956 the AFM reports two-thirds of its members can\'t make a primary living from music. Bebop\'s smaller, listening-only audience replaces the dance-floor model.',
  },
  {
    year: 1965,
    usPopulationMillions: 194,
    pianistsLow: 4,
    pianistsMid: 7,
    pianistsHigh: 11,
    note: 'Cabaret tax finally repealed (1965), but rock has taken the youth audience and soul has taken the Black audience. Cocktail-lounge piano is the residual paid gig.',
  },
  {
    year: 1975,
    usPopulationMillions: 216,
    pianistsLow: 3,
    pianistsMid: 5,
    pianistsHigh: 8,
    note: 'Fusion era (Hancock, Corea, Zawinul) brings brief crossover audiences. Live club scene continues shrinking; festival circuit takes shape.',
  },
  {
    year: 1990,
    usPopulationMillions: 249,
    pianistsLow: 2.5,
    pianistsMid: 4,
    pianistsHigh: 6,
    note: 'Jazz becomes "America\'s classical music" — academic, festival, and Lincoln Center prestige rise as the working club scene fades. Jazz at Lincoln Center founded 1991.',
  },
  {
    year: 2010,
    usPopulationMillions: 309,
    pianistsLow: 2,
    pianistsMid: 3.5,
    pianistsHigh: 5,
    note: 'Streaming gutted album revenue. Stable academic core (250+ US universities with jazz programs), festival circuit, hotel/casino lounge work, cruise ships.',
  },
  {
    year: 2026,
    usPopulationMillions: 335,
    pianistsLow: 1.5,
    pianistsMid: 2.5,
    pianistsHigh: 4,
    note: 'Long-tail stable. Festivals + universities + hotels + cruise lines. Jazz album sales <1% of US music market; live audience aging.',
  },
]

/**
 * AFM (American Federation of Musicians) total membership — not
 * jazz-specific, but the only longitudinal hard-data series that
 * captures professional musicians as a class. Grew long after the
 * jazz-pianist profession had peaked, then collapsed — same lag
 * pattern as AGO membership for organists.
 */
export const afmMembership: AGOPoint[] = [
  { year: 1940, members: 135000, source: 'AFM history (Jacobin / AFM 125 Years)' },
  { year: 1948, members: 231000, source: 'AFM at end of recording-ban era' },
  { year: 1976, members: 331000, source: 'AFM all-time peak' },
  { year: 1989, members: 177000, source: 'AFM membership records' },
  { year: 1995, members: 150000, source: 'AFM membership records' },
  { year: 2024, members: 67000, source: 'AFM 2024 (regular + life + youth, sum)' },
]

export const jazzMethodology: MethodologyNote[] = [
  {
    signal: 'AFM total membership',
    status: 'hard',
    detail: 'American Federation of Musicians publishes membership counts. Hard data, but covers all professional musicians, not just jazz pianists. Useful as a class-level trajectory: peaked in 1976 (331K), now ~67K — an 80% decline that captures the broader collapse jazz pianists rode through.',
  },
  {
    signal: 'Cabaret tax employment shock',
    status: 'hard',
    detail: '1944 federal excise (30%, later 20%) on venues with food, drink, and dancing. By 1956 the AFM publicly reported two-thirds of members couldn\'t make a primary living from music. Repealed 1965. The single sharpest event in the post-1945 collapse.',
  },
  {
    signal: 'Big-band era venue counts',
    status: 'hard',
    detail: '~700 name touring big bands at the 1940s peak, plus several thousand territory and hotel bands. Each had one pianist. The sideman/independent jazz pianist count is a multiplier on top.',
  },
  {
    signal: 'Silent-film pianist displacement',
    status: 'hard',
    detail: 'Worldwide ~15–20K silent-film pianists at the 1926–27 peak; majority US-based. Most were laid off 1928–1930 as talkies arrived. Not counted in our jazz-pianist totals (different identity), but the shock pushed many into dance-band and lounge work.',
  },
  {
    signal: 'Total US jazz-pianist count',
    status: 'estimated',
    detail: 'No Census occupation code. Estimated by combining (working big bands × 1 pianist), (territory + hotel + radio orchestras), (club/lounge gigs in major cities), and (academic jazz-piano positions in modern eras), with low/high bounds reflecting joint uncertainty.',
  },
  {
    signal: 'Per-capita pianist density',
    status: 'derived',
    detail: 'Estimate divided by US population in millions. Per-capita decline is steeper than raw decline because the US population more than doubled between the profession\'s peak and now.',
  },
]

/**
 * All working pianists in the US, every idiom (classical, jazz, church,
 * lounge, theater, teaching, dance, recording, contemporary). Includes
 * paid full-time, part-time, and honorarium positions. Excludes pure
 * amateurs.
 *
 * This is the LOOSEST estimate of the three series — the category is
 * fuzzy (when does a part-time piano teacher count as a professional?)
 * and there's no Census or BLS series that isolates pianists from other
 * instrumentalists. Wide uncertainty bands reflect that. Included as a
 * baseline so the organist and jazz-pianist trajectories can be
 * compared against the broader class they belong to.
 */
export type AllPianistsPoint = {
  year: number
  usPopulationMillions: number
  /** Thousands of paid pianist positions in the US (all idioms) */
  pianistsLow: number
  pianistsMid: number
  pianistsHigh: number
  note?: string
}

export const allPianistsEstimates: AllPianistsPoint[] = [
  {
    year: 1900,
    usPopulationMillions: 76,
    pianistsLow: 25,
    pianistsMid: 45,
    pianistsHigh: 70,
    note: 'Parlor-piano era ramping. Steinway, Baldwin selling fast. Private piano teachers are the most common professional pianist.',
  },
  {
    year: 1915,
    usPopulationMillions: 100,
    pianistsLow: 50,
    pianistsMid: 80,
    pianistsHigh: 120,
    note: 'Vaudeville pit pianists everywhere; ~10–15K silent-film accompanists; private teaching booming with the parlor-piano ownership rate.',
  },
  {
    year: 1925,
    usPopulationMillions: 116,
    pianistsLow: 60,
    pianistsMid: 100,
    pianistsHigh: 150,
    note: 'Likely peak. US piano sales hit 365K/yr around 1909 — instrument density supported pianists in homes, theaters, churches, dance halls, hotels, restaurants, and broadcast.',
  },
  {
    year: 1935,
    usPopulationMillions: 127,
    pianistsLow: 45,
    pianistsMid: 70,
    pianistsHigh: 105,
    note: 'Talkies displaced silent-film pianists (1928–30). Depression collapsed piano sales (1932: 27K vs. 1909: 365K). Big bands and radio absorbed some.',
  },
  {
    year: 1945,
    usPopulationMillions: 140,
    pianistsLow: 50,
    pianistsMid: 80,
    pianistsHigh: 115,
    note: 'Wartime entertainment economy. Big bands, USO, radio orchestras, hotel ballrooms, broadway, classical concert circuit, church.',
  },
  {
    year: 1955,
    usPopulationMillions: 165,
    pianistsLow: 55,
    pianistsMid: 85,
    pianistsHigh: 125,
    note: 'Postwar plateau. Cocktail lounges, suburb church boom, piano-teaching renaissance, broadway, classical, and surviving big bands.',
  },
  {
    year: 1965,
    usPopulationMillions: 194,
    pianistsLow: 45,
    pianistsMid: 70,
    pianistsHigh: 105,
    note: 'Rock takes the youth audience. Piano-instrument sales rebounding (private teaching demand strong) but lounge/dance gigs shrinking.',
  },
  {
    year: 1975,
    usPopulationMillions: 216,
    pianistsLow: 40,
    pianistsMid: 60,
    pianistsHigh: 90,
    note: 'Synthesizers begin replacing live pianists in studio sessions and theater pits. Academic and church work still steady.',
  },
  {
    year: 1990,
    usPopulationMillions: 249,
    pianistsLow: 35,
    pianistsMid: 55,
    pianistsHigh: 80,
    note: 'Digital workstations and sampled-piano libraries enter recording. Universities expand music programs (back-loaded retention).',
  },
  {
    year: 2010,
    usPopulationMillions: 309,
    pianistsLow: 25,
    pianistsMid: 40,
    pianistsHigh: 60,
    note: 'Live music spending shifts away from pianists. BLS counts ~24K total W-2 musicians and singers; self-employed inflates this 3–5x.',
  },
  {
    year: 2026,
    usPopulationMillions: 335,
    pianistsLow: 22,
    pianistsMid: 35,
    pianistsHigh: 55,
    note: 'Piano sales <6% of their 1909 peak. Working pianists holding up via private teaching, university faculty, accompaniment, theater, weddings/events, and classical/jazz festival circuits.',
  },
]
