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

export const conflictData: ConflictEntry[] = [
  {
    title: 'Steamboat Willie',
    releaseYear: 1928,
    decade: '1920s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.75,
    reasoning: 'Pete is a clear physical antagonist — an abusive steamboat captain who bullies Mickey with brute force. The conflict is entirely external and resolved through endurance rather than empathy. Scored below 1.0 because the short is primarily a musical showcase and the conflict is simple rather than a dramatic good-vs-evil confrontation.',
  },
  {
    title: 'Three Little Pigs',
    releaseYear: 1933,
    decade: '1930s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.85,
    reasoning: 'The Big Bad Wolf is an iconic, unambiguous villain — a predator who physically threatens the pigs by blowing down their houses with intent to eat them. The entire plot centers on external conflict resolved through preparation and direct confrontation (the brick house withstands the attack, and the wolf is scalded trying the chimney). Scored below 0.9 because it is still a short film without the dramatic scope of a full-length feature.',
  },
  {
    title: 'The Tortoise and the Hare',
    releaseYear: 1935,
    decade: '1930s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.3,
    reasoning: 'No real villain — Max Hare is an arrogant rival, not a malicious antagonist. The conflict is a race driven by the Hare\'s overconfidence versus the Tortoise\'s perseverance. Resolution comes through steady effort and the Hare\'s own hubris, not through confrontation or defeating evil. The moral is about character virtues (humility, persistence) rather than good triumphing over villainy.',
  },
  {
    title: 'Snow White and the Seven Dwarfs',
    releaseYear: 1937,
    decade: '1930s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.95,
    reasoning: 'The Evil Queen is one of animation\'s most iconic villains — driven by jealous vanity, she orders Snow White\'s assassination and later personally attempts to murder her with a poisoned apple. The stakes are life-and-death, the conflict is entirely external, and the Queen is defeated through direct confrontation (the dwarfs chase her to a cliff where she falls to her death). Scored just below 1.0 because Snow White herself is passive in the resolution rather than confronting the villain directly.',
  },
  {
    title: 'Brave Little Tailor',
    releaseYear: 1938,
    decade: '1930s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.80,
    reasoning: 'The giant is a genuine physical antagonist terrorizing the kingdom, and Mickey (the tailor) must defeat him through direct confrontation. The conflict is entirely external with real stakes — the giant is destructive and dangerous. Mickey defeats him through clever trickery (tying him up) rather than brute force, but it is still a clear victory-over-villain resolution. Scored slightly below Three Little Pigs because the hero\'s quest originates from a comical misunderstanding (killing "seven at one blow" referred to flies, not giants).',
  },
  {
    title: 'Ferdinand the Bull',
    releaseYear: 1938,
    decade: '1930s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.15,
    reasoning: 'No real villain — the matador and the men selecting bulls are not malicious, just operating within their cultural system. The core conflict is a misunderstanding: Ferdinand\'s bee-sting reaction is mistaken for ferocity. Resolution comes entirely through Ferdinand\'s peaceful self-expression — he simply refuses to fight and sits smelling flowers until he\'s sent home. Remarkably close to the "modern" pattern of conflict-as-misunderstanding resolved through staying true to oneself.',
  },
]
