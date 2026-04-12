/**
 * Data file for the "Disney villains over time" hypothesis.
 *
 * Hypothesis: over the last ~100 years, children's movies have shifted from
 * "real villains in real conflicts" toward "imagined villains resolved via
 * misunderstanding". We're testing this against the Disney (+ Pixar) animated
 * feature catalog.
 *
 * One entry per movie. Each PRD ticket should append a single entry below
 * after objectively researching the film, then run `npm run typecheck` to
 * validate the file still compiles.
 *
 * NOTE: the data currently in this file is FAKE PLACEHOLDER DATA to exercise
 * the pipeline end-to-end. A real research pass will replace all of it.
 */

export type VillainRealness = {
  /** Movie title as commonly known. */
  title: string
  /** Theatrical release year. */
  releaseYear: number
  /** Decade bucket, e.g. "1940s". Derived from releaseYear but stored
   *  explicitly so the chart layer doesn't have to re-derive it. */
  decade: Decade
  /** Runtime in minutes, if relevant. Optional. */
  runtimeMinutes?: number
  /**
   * 0-100. Higher = more clearly a "real villain in a real conflict that has
   * to be defeated" (e.g. Maleficent, Scar, Jafar). Lower = antagonist is
   * imagined, internal, or resolved through misunderstanding rather than
   * defeat (e.g. Inside Out, Encanto, Turning Red). Assign as objectively as
   * possible — the whole point is that the graph is only fun if the data is
   * honest.
   */
  realVillainScore: number
  /** Short free-text note on the reasoning for the score. Optional. */
  notes?: string
}

export type Decade =
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

export const disneyVillains: VillainRealness[] = [
  {
    title: 'Pinocchio',
    releaseYear: 1940,
    decade: '1940s',
    realVillainScore: 92,
    notes: 'FAKE DATA — Stromboli and the Coachman are unambiguously evil.',
  },
  {
    title: 'Cinderella',
    releaseYear: 1950,
    decade: '1950s',
    realVillainScore: 90,
    notes: 'FAKE DATA — Lady Tremaine is a textbook real villain.',
  },
  {
    title: 'Sleeping Beauty',
    releaseYear: 1959,
    decade: '1950s',
    realVillainScore: 96,
    notes: 'FAKE DATA — Maleficent, the platonic ideal of "real villain".',
  },
  {
    title: '101 Dalmatians',
    releaseYear: 1961,
    decade: '1960s',
    realVillainScore: 88,
    notes: 'FAKE DATA — Cruella is real, the conflict is real.',
  },
  {
    title: 'The Jungle Book',
    releaseYear: 1967,
    decade: '1960s',
    realVillainScore: 80,
    notes: 'FAKE DATA — Shere Khan is a real threat but the tone is lighter.',
  },
  {
    title: 'The Little Mermaid',
    releaseYear: 1989,
    decade: '1980s',
    realVillainScore: 91,
    notes: 'FAKE DATA — Ursula is a clear real-villain archetype.',
  },
  {
    title: 'The Lion King',
    releaseYear: 1994,
    decade: '1990s',
    realVillainScore: 94,
    notes: 'FAKE DATA — Scar, real villain, real conflict, real stakes.',
  },
  {
    title: 'Finding Nemo',
    releaseYear: 2003,
    decade: '2000s',
    realVillainScore: 55,
    notes: 'FAKE DATA — no real villain; the conflict is separation and fear.',
  },
  {
    title: 'Wall-E',
    releaseYear: 2008,
    decade: '2000s',
    realVillainScore: 45,
    notes: 'FAKE DATA — Auto is a rule-follower, not a villain in the classical sense.',
  },
  {
    title: 'Frozen',
    releaseYear: 2013,
    decade: '2010s',
    realVillainScore: 42,
    notes: 'FAKE DATA — Hans is a twist villain but the real conflict is sisterly misunderstanding.',
  },
  {
    title: 'Inside Out',
    releaseYear: 2015,
    decade: '2010s',
    realVillainScore: 12,
    notes: 'FAKE DATA — antagonist is internal emotion, no villain at all.',
  },
  {
    title: 'Encanto',
    releaseYear: 2021,
    decade: '2020s',
    realVillainScore: 8,
    notes: 'FAKE DATA — no villain, conflict is generational misunderstanding.',
  },
  {
    title: 'Turning Red',
    releaseYear: 2022,
    decade: '2020s',
    realVillainScore: 10,
    notes: 'FAKE DATA — conflict is self-acceptance and family misunderstanding.',
  },
]
