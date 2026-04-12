/**
 * Data file for the "animated children's film conflict types" hypothesis.
 *
 * Hypothesis: over the last ~100 years, animated children's films have shifted
 * from stories with real villains and real conflict resolved through
 * confrontation toward stories where the conflict is a misunderstanding
 * resolved through empathy, communication, or self-understanding.
 *
 * One entry per film. Each PRD ticket should append a single entry below
 * after objectively researching the film, then run `npm run typecheck` to
 * validate the file still compiles.
 */

export type Decade =
  | '1920s' | '1930s' | '1940s' | '1950s' | '1960s'
  | '1970s' | '1980s' | '1990s' | '2000s' | '2010s' | '2020s'

export type ConflictEntry = {
  /** Film title as commonly known. */
  title: string
  /** Theatrical release year. */
  releaseYear: number
  /** Decade bucket, e.g. '1990s'. */
  decade: Decade
  /** Production studio. */
  studio: string
  /**
   * 0.0–1.0 conflict spectrum score.
   * 1.0 = real villain, real stakes, resolved by confrontation/defeating evil.
   * 0.0 = no villain, conflict is misunderstanding/internal, resolved by empathy/growth.
   */
  conflictScore: number
  /** Brief reasoning for the assigned score (1-3 sentences). */
  reasoning: string
}

export const conflictData: ConflictEntry[] = []
