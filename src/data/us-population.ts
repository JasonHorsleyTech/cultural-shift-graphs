/**
 * Data file for the "US population over the 20th century" hypothesis.
 *
 * Hypothesis: the US population went up. (Yes, really. This one's a smoke-test
 * hypothesis where the answer is already known, used to exercise the data →
 * chart → deploy pipeline with a non-trivial but unambiguous dataset.)
 *
 * One entry per decennial US Census, 1900 through 2020. Each PRD ticket should
 * append a single entry below after looking up the official Census number for
 * the given year, then run `npm run typecheck` to validate.
 *
 * Sources: Decennial US Census figures (approximate — close enough for an
 * xkcd-joke-level chart, not for a demographics paper).
 */

export type UsPopulationEntry = {
  /** Census year, e.g. 1900. */
  year: number
  /** Decade label, always equal to `${year}s`. Stored explicitly so the chart
   *  layer doesn't have to re-derive it. */
  decade: Decade
  /** Official decennial US Census population count (people). */
  population: number
  /** Optional free-text note about notable context for this data point. */
  notes?: string
}

export type Decade =
  | '1900s'
  | '1910s'
  | '1920s'
  | '1930s'
  | '1940s'
  | '1950s'
  | '1960s'
  | '1970s'
  | '1980s'
  | '1990s'
  | '2000s'
  | '2010s'
  | '2020s'

export const usPopulation: UsPopulationEntry[] = [
  {
    year: 1900,
    decade: '1900s',
    population: 76_212_168,
    notes: 'Post-Civil-War expansion still in full swing; pre-automobile.',
  },
  {
    year: 1910,
    decade: '1910s',
    population: 92_228_496,
    notes: 'Peak of the first great immigration wave from Europe.',
  },
  {
    year: 1920,
    decade: '1920s',
    population: 106_021_537,
    notes: 'First census in which urban population exceeded rural.',
  },
  {
    year: 1930,
    decade: '1930s',
    population: 123_202_624,
    notes: 'Start of the Depression; immigration restricted.',
  },
  {
    year: 1940,
    decade: '1940s',
    population: 132_164_569,
    notes: 'Slowest decennial growth to date due to Depression-era birth dip.',
  },
  {
    year: 1950,
    decade: '1950s',
    population: 151_325_798,
    notes: 'Start of the post-war baby boom.',
  },
  {
    year: 1960,
    decade: '1960s',
    population: 179_323_175,
    notes: 'Peak of baby-boom growth.',
  },
  {
    year: 1970,
    decade: '1970s',
    population: 203_211_926,
    notes: 'First census with computer-tabulated results used as final.',
  },
  {
    year: 1980,
    decade: '1980s',
    population: 226_545_805,
    notes: 'Growth slowing as baby-boomer fertility declines.',
  },
  {
    year: 1990,
    decade: '1990s',
    population: 248_709_873,
    notes: 'Immigration becomes the dominant driver of growth.',
  },
  {
    year: 2000,
    decade: '2000s',
    population: 281_421_906,
    notes: 'Largest absolute-number decennial increase ever recorded.',
  },
  {
    year: 2010,
    decade: '2010s',
    population: 308_745_538,
    notes: 'Post-recession growth slowdown.',
  },
  {
    year: 2020,
    decade: '2020s',
    population: 331_449_281,
    notes: 'Slowest decennial growth rate since the 1930s.',
  },
]
