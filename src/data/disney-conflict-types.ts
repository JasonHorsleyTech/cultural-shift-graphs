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
  {
    title: 'Gulliver\'s Travels',
    releaseYear: 1939,
    decade: '1930s',
    studio: 'Fleischer Studios',
    conflictScore: 0.40,
    reasoning: 'The war between Lilliput and Blefuscu originates from a trivial misunderstanding — the two kings cannot agree on which song to play at a royal wedding. While the conflict escalates to a real naval attack and Blefuscu employs scheming spies, there is no true evil villain — both kings are equally stubborn. Gulliver resolves the conflict through physical intervention (stopping the fleet) combined with diplomacy, making this notably "modern" in its conflict-as-misunderstanding pattern for a 1939 film.',
  },
  {
    title: 'The Ugly Duckling',
    releaseYear: 1939,
    decade: '1930s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.15,
    reasoning: 'No real villain — the mother duck and barnyard birds reject the duckling for looking different, but out of ignorance rather than malice. The core conflict is a misunderstanding of identity: the duckling is actually a swan, not an ugly duck. Resolution comes through acceptance and recognition when the duckling finds a swan family, and the duck family realizes their mistake. A cat briefly threatens the duckling, but the central conflict is entirely about misidentification resolved through belonging and self-discovery.',
  },
  {
    title: 'Fantasia',
    releaseYear: 1940,
    decade: '1940s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.40,
    reasoning: 'An anthology of eight segments set to classical music, most with no narrative conflict at all. The "Night on Bald Mountain" segment features Chernabog — a genuinely menacing demon — but he is vanquished by dawn and sacred music rather than hero confrontation. "The Sorcerer\'s Apprentice" conflict is entirely self-inflicted by Mickey\'s hubris, resolved when the Sorcerer intervenes. The vast majority of the film\'s runtime is abstract or pastoral with no antagonist, pulling the overall score well below films with central villains.',
  },
  {
    title: 'Pinocchio',
    releaseYear: 1940,
    decade: '1940s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.90,
    reasoning: 'Multiple genuine villains — Stromboli imprisons Pinocchio and threatens to chop him into firewood, the Coachman traffics boys to Pleasure Island where they are transformed into donkeys (one of Disney\'s most disturbing villain schemes), and Monstro the whale is a deadly force of nature. Stakes are life-and-death throughout, and Pinocchio ultimately dies saving Geppetto from Monstro before being resurrected. Scored slightly below Snow White (0.95) because some conflicts arise from Pinocchio\'s own naivety and moral failings rather than purely villain-driven action, and the ultimate resolution (becoming a real boy) rewards moral growth alongside confrontation.',
  },
  {
    title: 'Dumbo',
    releaseYear: 1941,
    decade: '1940s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.30,
    reasoning: 'No true villain — the gossiping elephants, taunting circus boys, and the ringmaster are cruel but not evil antagonists. The core conflict is being different and misunderstood: Dumbo\'s oversized ears make him a target for ridicule, and his mother is imprisoned for protecting him (an injustice, not villainy). Resolution comes entirely through self-discovery — Dumbo learns his "flaw" is actually a gift when he discovers he can fly — rather than through defeating any antagonist. The emotional stakes are genuine (mother-child separation, social ostracism) but the conflict pattern is remarkably close to modern "misunderstanding resolved through self-acceptance."',
  },
  {
    title: 'Bambi',
    releaseYear: 1942,
    decade: '1940s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.65,
    reasoning: 'Man is a genuine villain — an unseen but lethal force who kills Bambi\'s mother (one of cinema\'s most iconic deaths) and later sets the forest ablaze, creating real life-and-death stakes. However, Man is never seen on screen and Bambi never confronts or defeats him. The resolution comes through survival, maturation, and the continuation of the natural cycle — Bambi grows up, finds a mate, and becomes the Great Prince of the Forest. Scored in the mid-range because the villain is real and the stakes are deadly, but the conflict is resolved through endurance and growth rather than confrontation.',
  },
  {
    title: 'Saludos Amigos',
    releaseYear: 1943,
    decade: '1940s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.20,
    reasoning: 'A four-segment package film made as wartime cultural diplomacy — none of the segments have a real villain. The closest to conflict is the Pedro segment, where a small mail plane braves the Andes and a personified Mount Aconcagua, but this is man-vs-nature resolved through perseverance. The Donald Duck segments are comedic tourism mishaps and Goofy\'s gaucho segment is pure slapstick. The film is essentially a travelogue with minimal narrative conflict, let alone villain-driven stakes.',
  },
  {
    title: 'The Three Caballeros',
    releaseYear: 1945,
    decade: '1940s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.20,
    reasoning: 'A wartime package film and sequel to Saludos Amigos — no villain in any segment. "The Cold-Blooded Penguin" follows Pablo escaping Antarctica (man-vs-nature, self-motivated). "The Flying Gauchito" is a lighthearted race with a flying donkey. The main segments are Donald Duck touring Mexico and Brazil with José Carioca and Panchito, featuring musical numbers and live-action/animation blending with no narrative conflict. Like its predecessor, the film is cultural diplomacy and entertainment showcase rather than storytelling.',
  },
  {
    title: 'Make Mine Music',
    releaseYear: 1946,
    decade: '1940s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.35,
    reasoning: 'A ten-segment package film set to popular music. "Peter and the Wolf" features a genuine predator-villain (the Wolf) defeated through direct confrontation — Peter captures him with a rope. However, "The Whale Who Wanted to Sing at the Met" is a tragic misunderstanding: impresario Tetti-Tatti harpoons Willie believing he swallowed a singer, when Willie\'s talent was real. "The Martins and the Coys" depicts a violent family feud resolved through love. The remaining seven segments have little or no narrative conflict. Scored above Saludos Amigos/Three Caballeros (0.20) for having genuine villain and stakes segments, but below Fantasia (0.40) because the conflict-bearing segments are less dramatically weighty and Willie\'s tragedy is driven by misunderstanding rather than villainy.',
  },
  {
    title: 'Fun and Fancy Free',
    releaseYear: 1947,
    decade: '1940s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.70,
    reasoning: 'A two-segment package film where both segments feature genuine antagonists resolved through confrontation. In "Bongo," the circus bear must physically fight Lumpjaw — a bullying rival — to win Lulubelle\'s affection. In "Mickey and the Beanstalk," Willie the Giant is a real villain who stole the Golden Harp and caused famine; Mickey, Donald, and Goofy must outsmart and defeat him to restore Happy Valley. Scored well above other 1940s package films (Make Mine Music 0.35, Saludos Amigos 0.20) because both segments are villain-driven, but below full features like Brave Little Tailor (0.80) because the package format and comedic tone reduce the dramatic stakes.',
  },
  {
    title: 'Melody Time',
    releaseYear: 1948,
    decade: '1940s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.30,
    reasoning: 'A seven-segment package film set to popular music, mostly gentle showcases. "Pecos Bill" is the most conflict-heavy segment — he physically defeats outlaws, tames the wild horse Widowmaker, and lassos a tornado, but the central story is a tall-tale romance ending in loss rather than a villain-defeat arc. "Little Toot" involves a mischievous tugboat who causes an accident and redeems himself by rescuing an ocean liner in a storm — self-inflicted conflict resolved through heroism. "Johnny Appleseed" is a gentle frontier folk tale with man-vs-nature stakes. The remaining segments (Once Upon a Wintertime, Bumble Boogie, Trees, Blame It on the Samba) have minimal or no narrative conflict. Scored below Make Mine Music (0.35) because no segment has a clear predator-villain like Peter and the Wolf, but above the pure-travelogue package films (Saludos Amigos/Three Caballeros at 0.20) because Pecos Bill and Little Toot have genuine physical stakes.',
  },
  {
    title: 'The Adventures of Ichabod and Mr. Toad',
    releaseYear: 1949,
    decade: '1940s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.65,
    reasoning: 'A two-segment package film with genuine antagonists in both halves. In "The Wind in the Willows," the weasels and Mr. Winkie are real villains who trick Mr. Toad, steal his deed to Toad Hall, and frame him for car theft — resolved through a classic confrontation when Toad and friends storm Toad Hall to recapture the deed. In "The Legend of Sleepy Hollow," the Headless Horseman delivers one of Disney\'s most terrifying chase sequences, but the villainy is famously ambiguous — it may be Brom Bones in disguise playing a prank to eliminate his romantic rival. Ichabod vanishes and never triumphs. Scored at 0.65 because the Mr. Toad segment has clear villains defeated through confrontation, but the Ichabod segment\'s antagonist is ambiguously real-or-imagined and the protagonist loses rather than wins.',
  },
  {
    title: 'Cinderella',
    releaseYear: 1950,
    decade: '1950s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.85,
    reasoning: 'Lady Tremaine is a deliberate, malicious villain — she psychologically abuses Cinderella, forces her into servitude, destroys her dress, and locks her in the attic to prevent her from trying the glass slipper. The conflict is entirely external and villain-driven with real stakes (lifelong enslavement). Resolution comes through overcoming the villain\'s schemes via the Fairy Godmother\'s magic, the mice freeing Cinderella, and proving her identity with the slipper. Scored below Snow White (0.95) because Cinderella never directly confronts or defeats Lady Tremaine — she prevails through magical aid and allies rather than personal action against the villain.',
  },
  {
    title: 'Alice in Wonderland',
    releaseYear: 1951,
    decade: '1950s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.35,
    reasoning: 'The Queen of Hearts is an antagonist figure who orders executions and puts Alice on trial, but she is more absurd parody of authority than genuine evil — her orders are never actually carried out, and no one in Wonderland takes her seriously. The real conflict is Alice navigating a nonsensical world where logic doesn\'t apply, struggling with identity ("Who are you?") and trying to find her way home. Resolution comes by waking from a dream — the entire conflict, villain included, was literally imagined. Scored above Ferdinand (0.15) because there is a threatening authority figure, but well below Cinderella (0.85) because the antagonist is comedic, the core conflict is existential rather than villain-driven, and the resolution negates the reality of all threats.',
  },
  {
    title: 'Peter Pan',
    releaseYear: 1953,
    decade: '1950s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.85,
    reasoning: 'Captain Hook is a genuine, iconic villain — a murderous pirate who kidnaps children, forces them to walk the plank, shoots his own crew, and plants a bomb to kill Peter Pan. The stakes are life-and-death throughout and the conflict is entirely external and villain-driven. Resolution comes through direct physical confrontation: Peter Pan sword-fights Hook and defeats him, sending him fleeing from the crocodile. Scored at 0.85 alongside Cinderella because while the hero personally confronts and defeats the villain (unlike Cinderella), Hook\'s comedic elements (bumbling crocodile fear, buffoonish moments) and the film\'s swashbuckling adventure tone temper the dramatic weight compared to Snow White (0.95) or Pinocchio (0.90).',
  },
  {
    title: 'Lady and the Tramp',
    releaseYear: 1955,
    decade: '1950s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.55,
    reasoning: 'The film has real antagonists — the rat that invades the baby\'s nursery is a genuine physical villain defeated through direct confrontation (Tramp fights and kills it), and the Siamese cats Si and Am are deliberate troublemakers who frame Lady. However, the primary narrative is a romance where most conflicts stem from social misunderstanding and class prejudice: Aunt Sarah misjudges dogs and muzzles Lady unfairly, Tramp is sent to the pound based on misunderstanding, and the central love story is about bridging the gap between a sheltered uptown dog and a streetwise stray. Scored in the mid-range because the climax involves a genuine villain-confrontation (rat scene), but the overall conflict pattern is driven more by misunderstanding and social prejudice than by villainy.',
  },
]
