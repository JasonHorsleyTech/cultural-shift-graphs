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
  {
    title: 'Sleeping Beauty',
    releaseYear: 1959,
    decade: '1950s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.95,
    reasoning: 'Maleficent is one of Disney\'s most purely evil villains — the self-proclaimed "Mistress of All Evil" who curses an infant princess to die out of spite for not being invited to a christening, then hunts Aurora for sixteen years and captures Prince Phillip to prevent the curse\'s undoing. The climax is a dramatic direct confrontation: Maleficent transforms into a dragon and Phillip slays her with the Sword of Truth. Scored at 0.95 alongside Snow White because both feature unambiguously evil female villains with life-and-death stakes defeated through confrontation, but the title character (Aurora) is entirely passive — asleep for the climax — and the good fairies provide critical magical aid to Phillip.',
  },
  {
    title: 'One Hundred and One Dalmatians',
    releaseYear: 1961,
    decade: '1960s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.90,
    reasoning: 'Cruella de Vil is one of Disney\'s most iconic villains — she wants to steal and skin 99 Dalmatian puppies to make a fur coat, a scheme that is unambiguously evil with life-and-death stakes for the protagonists\' children. Her henchmen Jasper and Horace kidnap the puppies and hold them at Hell Hall. Resolution comes through direct action: Pongo and Perdita physically fight the henchmen to rescue the puppies, then the dogs use clever disguises and teamwork to evade Cruella during an extended chase that ends with her car crashing. Scored at 0.90 because the villain is genuinely evil, the stakes are deadly, and the protagonists are active agents who confront and defeat the villain\'s scheme — more directly than Cinderella or Snow White — but slightly below 0.95 because Cruella is foiled rather than destroyed and the henchmen provide comedic buffoonery that lightens the tone.',
  },
  {
    title: 'The Sword in the Stone',
    releaseYear: 1963,
    decade: '1960s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.35,
    reasoning: 'Madam Mim is a genuine villain who tries to kill Arthur and cheats during her Wizards\' Duel with Merlin, but she only appears in one brief sequence near the film\'s end. The primary narrative follows young Arthur\'s education through magical transformations — conflicts are learning experiences (being chased as a fish, pursued as a squirrel) rather than villain-driven stakes. Sir Ector and Sir Kay are dismissive and sometimes cruel but not true villains. The overarching resolution — Arthur pulling the Sword from the Stone to become King — is about destiny and self-discovery, not defeating evil. Scored at 0.35 because the film contains a genuine villain-confrontation scene but the overall conflict pattern is episodic education and the climax is identity-based rather than villain-driven.',
  },
  {
    title: 'The Jungle Book',
    releaseYear: 1967,
    decade: '1960s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.75,
    reasoning: 'Shere Khan is a genuine, menacing villain — a tiger who has vowed to kill Mowgli simply because he is human, creating real life-and-death stakes. The climax features a direct confrontation where Mowgli ties a burning branch to Shere Khan\'s tail, exploiting the tiger\'s fear of fire to defeat him. Kaa the snake also attempts to eat Mowgli twice. However, Shere Khan doesn\'t appear until the second half, and most of the film is episodic and lighthearted — Baloo\'s "Bare Necessities," King Louie\'s jazz number, the elephant patrol. The ultimate resolution extends beyond villain-defeat into coming-of-age identity: Mowgli voluntarily leaves the jungle to join the human village after seeing a girl. Scored at 0.75 because the villain is real and directly defeated, but the overall film is more episodic comedy than villain-driven drama, and the ending is about where Mowgli belongs rather than the triumph of good over evil.',
  },
  {
    title: 'The Aristocats',
    releaseYear: 1970,
    decade: '1970s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.60,
    reasoning: 'Edgar the butler is a genuine villain with a deliberate scheme — upon learning Madame Bonfamille\'s fortune will pass to her cats before him, he drugs and kidnaps Duchess and her kittens, abandoning them in the countryside and later attempting to ship them to Timbuktu permanently. The resolution is a direct confrontation: the cats and their animal allies (Thomas O\'Malley, Scat Cat\'s band, the farm animals) physically overpower Edgar and trap him in the very trunk he intended for the cats. However, Edgar is a comedic, bumbling villain whose schemes repeatedly backfire, and much of the film is a lighthearted Parisian romance between Duchess and O\'Malley punctuated by jazz musical numbers. Scored at 0.60 because the villain is real and directly defeated through confrontation, but the comedic tone, bumbling antagonist, and romance-driven narrative reduce the dramatic weight well below films with menacing villains like The Jungle Book (0.75).',
  },
  {
    title: 'Charlotte\'s Web',
    releaseYear: 1973,
    decade: '1970s',
    studio: 'Hanna-Barbera Productions',
    conflictScore: 0.25,
    reasoning: 'No villain — the Zuckerman family and farmer Lurvy are not evil, they are simply farmers who plan to slaughter Wilbur because that is what farmers do with pigs. The life-and-death stakes are real (Wilbur will be butchered), but the threat is systemic rather than personal. Charlotte resolves the conflict entirely through communication — weaving words into her web ("Some Pig," "Terrific," "Radiant," "Humble") to change the humans\' perception and spare Wilbur\'s life. Scored at 0.25 because the stakes are genuinely lethal (above Ferdinand at 0.15), but the complete absence of a villain and the resolution through cleverness, friendship, and changing minds rather than confrontation place it well below any film with a personal antagonist.',
  },
  {
    title: 'Robin Hood',
    releaseYear: 1973,
    decade: '1970s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.75,
    reasoning: 'Prince John is a genuine villain — a greedy usurper who taxes the people of Nottingham into poverty and imprisons those who cannot pay, while the Sheriff of Nottingham cruelly enforces his decrees. Robin Hood directly confronts the villains throughout: disguising himself at the archery tournament, raiding Prince John\'s treasury, and breaking into the castle to free imprisoned townspeople in a climax with life-and-death stakes (Robin nearly dies in a fire). However, Prince John is notably comedic and buffoonish (thumb-sucking tantrums, outwitted repeatedly), and the ultimate resolution comes through King Richard\'s return rather than Robin Hood personally defeating the tyrant. Scored at 0.75 — matching The Jungle Book — because the villains are real and directly confronted by an active hero, but the comedic tone and external-authority resolution temper the dramatic weight below films like Peter Pan (0.85) where the hero personally vanquishes the villain.',
  },
  {
    title: 'The Hobbit',
    releaseYear: 1977,
    decade: '1970s',
    studio: 'Rankin/Bass Productions',
    conflictScore: 0.80,
    reasoning: 'Multiple genuine villains with life-and-death stakes — Smaug the dragon conquered the Lonely Mountain and threatens all nearby civilizations, the Goblin King captures the company underground, giant spiders attack in Mirkwood, and goblins and wargs wage war in the Battle of Five Armies. Smaug is killed by Bard the Bowman in direct confrontation after Bilbo discovers his weak spot, and the goblins are defeated through military combat by an alliance of dwarves, elves, men, and eagles. However, Bilbo himself is a burglar who relies on cleverness, stealth, and the magic ring rather than combat — he never personally slays a major villain. Additionally, Thorin\'s greed over the Arkenstone creates a secondary conflict resolved through deathbed reconciliation and forgiveness rather than confrontation. Scored at 0.80 because the villains are unambiguously evil and defeated through direct confrontation, but the protagonist\'s non-warrior role and the meaningful empathy-driven Thorin resolution temper the score below films like Peter Pan (0.85) where the hero personally vanquishes the villain.',
  },
  {
    title: 'The Many Adventures of Winnie the Pooh',
    releaseYear: 1977,
    decade: '1970s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.10,
    reasoning: 'No villain whatsoever — the film compiles three featurettes where conflicts are entirely gentle and internal. Pooh gets stuck in Rabbit\'s door from overeating (self-inflicted), a windstorm and flood threaten the Hundred Acre Wood (nature, resolved through friendship), and Tigger\'s bounciness annoys his friends (social friction resolved through acceptance). The Heffalumps and Woozles are literally imagined threats in a nightmare sequence. Every resolution comes through patience, friendship, and accepting others\' differences. Scored below Ferdinand (0.15) because even the systemic tension of a bullfighting arena is absent here — the Hundred Acre Wood contains no real threats at all.',
  },
  {
    title: 'The Rescuers',
    releaseYear: 1977,
    decade: '1970s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.80,
    reasoning: 'Madame Medusa is a genuine villain — she kidnaps Penny, a young orphan girl, and forces her into a dangerous tide-flooded cave to retrieve the Devil\'s Eye diamond, with life-and-death stakes throughout. Her henchman Mr. Snoops and pet alligators Brutus and Nero enforce her scheme. Resolution comes through direct confrontation: Bernard, Bianca, and the bayou animals fight the alligators and outsmart Medusa, enabling Penny\'s escape with the diamond. Scored at 0.80 because the villain is unambiguously evil with deadly stakes resolved through confrontation, but the protagonists are helper-mice rather than the endangered hero acting alone, Medusa has comedic-bumbling elements, and she is left stranded rather than dramatically defeated.',
  },
  {
    title: 'Watership Down',
    releaseYear: 1978,
    decade: '1970s',
    studio: 'Nepenthe Productions',
    conflictScore: 0.85,
    reasoning: 'General Woundwort is a genuinely terrifying villain — a dictatorial rabbit who rules Efrafa through fear, violence, and totalitarian control, and who leads a military assault on Watership Down to recapture escapees and destroy the warren. The stakes are life-and-death throughout: rabbits are killed on screen, Bigwig nearly dies defending the burrow, and the film depicts predation, snaring, and warren destruction with unusual graphic intensity for animation. Resolution comes through direct confrontation — Bigwig fights Woundwort in the tunnels while Hazel releases the Nuthanger Farm dog to rout the Efrafan army. Scored at 0.85 because the villain is unambiguously evil and defeated through confrontation, but the protagonists rely on an external weapon (the dog) rather than personally vanquishing Woundwort, and the film carries strong thematic undercurrents about freedom, community, and finding home that add depth beyond pure good-vs-evil.',
  },
  {
    title: 'The Fox and the Hound',
    releaseYear: 1981,
    decade: '1980s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.45,
    reasoning: 'Amos Slade is an antagonist who hunts Tod with genuine lethal intent, and a bear attack in the climax creates real life-and-death stakes. However, Slade is not truly evil — he is a hunter with a legitimate grievance after Tod causes Chief\'s injury — and the bear is a force of nature, not a villain. The core conflict is societal: a fox and a hound whose childhood friendship is torn apart because their natures make them "supposed to be" enemies. Resolution comes through empathy — Copper stands between Slade\'s gun and the wounded Tod, refusing to let his friend be killed, and Slade lowers the gun. Scored at 0.45 because the physical stakes are real but the central conflict is about whether cross-nature friendship can survive societal expectations, resolved through loyalty and compassion rather than defeating any antagonist.',
  },
  {
    title: 'The Last Unicorn',
    releaseYear: 1982,
    decade: '1980s',
    studio: 'Rankin/Bass Productions',
    conflictScore: 0.75,
    reasoning: 'King Haggard is a genuine villain who used the Red Bull to drive all unicorns into the sea out of selfish desire to keep their beauty for himself, and the Red Bull is a terrifying enforcer with life-and-death stakes. The climax is a direct confrontation — the Unicorn faces the Red Bull and drives it into the sea, freeing the other unicorns, while Haggard\'s castle crumbles and kills him. However, much of the film is a melancholic journey focused on identity and mortality (the Unicorn transformed into mortal Amalthea fears losing herself), and the resolution is triggered by Prince Lír\'s self-sacrifice and love rather than martial victory. Scored at 0.75 because the villain is real and defeated through confrontation, but the film\'s dominant emotional register is internal struggle and the cost of feeling, placing it below straightforward hero-defeats-evil narratives.',
  },
  {
    title: 'The Secret of NIMH',
    releaseYear: 1982,
    decade: '1980s',
    studio: 'Aurora Productions',
    conflictScore: 0.70,
    reasoning: 'Jenner is a genuine villain — a power-hungry rat who murders Nicodemus by sabotaging the pulley system and attempts to kill Mrs. Brisby and Justin to seize the amulet and control of the colony. The stakes are life-and-death throughout (Timothy\'s illness, the farmer\'s plow, Jenner\'s murders). However, Mrs. Brisby is not a warrior — she is a timid mouse-mother whose arc is about finding courage, and the climactic resolution comes from the magical amulet activated by her love and bravery rather than defeating Jenner (who is killed by Sullivan and Justin). Scored at 0.70 because the villain is real and defeated through confrontation, but the film\'s emotional core is maternal courage and self-sacrifice, placing it below The Rescuers (0.80) and Watership Down (0.85) where protagonists more directly drive the villain\'s defeat.',
  },
  {
    title: 'Nausicaä of the Valley of the Wind',
    releaseYear: 1984,
    decade: '1980s',
    studio: 'Topcraft',
    conflictScore: 0.35,
    reasoning: 'Princess Kushana and the Tolmekian military are genuine antagonists who invade the Valley of the Wind, kill Nausicaä\'s father, and plan to use an ancient Giant Warrior weapon to burn the toxic jungle — real military stakes with casualties. However, the film\'s central conflict is a profound misunderstanding: humanity sees the toxic jungle and its giant Ohmu insects as existential threats, when in fact the jungle is purifying the earth\'s pollution. Nausicaä resolves the conflict not by defeating Kushana but through empathy and self-sacrifice — she throws herself before a rampaging Ohmu herd to stop them, and they revive her with their healing power. Scored at 0.35 because while military antagonists and life-and-death stakes exist, the core message is quintessential Miyazaki: the perceived enemy is a misunderstanding, and resolution comes through compassion and understanding nature rather than defeating a villain.',
  },
  {
    title: 'The Black Cauldron',
    releaseYear: 1985,
    decade: '1980s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.80,
    reasoning: 'The Horned King is an unambiguously evil villain — a skeletal, demonic warlord who seeks the Black Cauldron to raise an invincible army of undead Cauldron-Born warriors and conquer the world. Stakes are life-and-death throughout: characters are captured, threatened with execution, and the Cauldron-Born kill on screen. Resolution comes through direct confrontation — Gurgi sacrifices himself by leaping into the Cauldron to destroy its power, causing the Cauldron-Born to collapse and the Horned King to be sucked into the Cauldron and destroyed. Scored at 0.80 because the villain is genuinely terrifying with no moral ambiguity and is defeated through confrontation, but the protagonist Taran does not personally vanquish the villain — it is Gurgi\'s self-sacrifice that saves the day, and Taran\'s arc is partly about learning humility rather than heroic triumph.',
  },
  {
    title: 'An American Tail',
    releaseYear: 1986,
    decade: '1980s',
    studio: 'Sullivan Bluth Studios',
    conflictScore: 0.70,
    reasoning: 'Warren T. Rat is a genuine villain — a cat disguised as a rat who exploits immigrant mice, runs a sweatshop racket, and leads the Mott Street Maulers cat gang that terrorizes the mouse community. The climax is a direct confrontation: the mice build the Giant Mouse of Minsk and use it to drive the cats off the pier into the harbor, defeating Warren T. decisively. However, the film\'s emotional core is about immigration, family separation, and belonging — young Fievel\'s journey is about finding his family in a strange new country, and the ending is a tearful reunion rather than a victory celebration. Scored at 0.70 because the villain is real and defeated through collective confrontation, but the dominant narrative is a child\'s immigrant experience and the ache of separation, placing it below films where villain-defeat is the emotional climax.',
  },
  {
    title: 'Castle in the Sky',
    releaseYear: 1986,
    decade: '1980s',
    studio: 'Studio Ghibli',
    conflictScore: 0.75,
    reasoning: 'Colonel Muska is a genuine villain — a power-hungry government agent who seeks the floating castle Laputa to use its ancient weapons for world domination, murdering soldiers and holding Sheeta hostage. The climax is a direct confrontation: Sheeta and Pazu recite the spell of destruction to destroy Laputa\'s weapon systems, and Muska falls to his death as the fortress crumbles. However, the resolution is as much about rejecting destructive technology as defeating the villain — the natural tree of life survives while the weapon layer is destroyed — and the Dola pirates shift from antagonists to allies, reflecting Miyazaki\'s characteristic moral complexity. Scored at 0.75 because the villain is unambiguously evil and defeated through confrontation, but the thematic resolution extends well beyond villain-defeat into anti-militarist and environmental territory.',
  },
  {
    title: 'The Great Mouse Detective',
    releaseYear: 1986,
    decade: '1980s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.85,
    reasoning: 'Professor Ratigan is one of Disney\'s most theatrical villains — a criminal mastermind who feeds disloyal henchmen to his cat, kidnaps a toymaker to build a robot replica of the Mouse Queen, and plots to seize control of all mousedom. The stakes are life-and-death throughout: Olivia\'s father is held hostage, Basil and Dawson are placed in a Rube Goldberg death trap, and the climax is a brutal one-on-one fight atop Big Ben where Ratigan transforms from suave schemer into feral beast before falling to his death. Scored at 0.85 because the villain is unambiguously evil, the protagonist (Basil) actively drives the investigation and personally confronts Ratigan in the climax, and the resolution is entirely through defeating the villain — but the detective-story framing and Ratigan\'s theatrical comedic moments in the first two acts temper it slightly below Sleeping Beauty (0.95) or Pinocchio (0.90).',
  },
  {
    title: 'My Neighbor Totoro',
    releaseYear: 1988,
    decade: '1980s',
    studio: 'Studio Ghibli',
    conflictScore: 0.10,
    reasoning: 'There is no villain whatsoever — the film follows two young sisters, Satsuki and Mei, adjusting to rural life while their mother recovers from illness in a hospital. The magical creatures (Totoro, Catbus, soot sprites) are entirely benevolent. The only real tension comes when Mei goes missing trying to walk to the hospital alone, and this is resolved when Catbus magically transports Satsuki to find her. Scored at 0.10 — on par with Winnie the Pooh — because the film contains zero antagonism, zero confrontation, and every conflict is resolved through family love, patience, and gentle magical assistance. This is Miyazaki\'s purest expression of the idea that wonder and kindness are sufficient to carry a story.',
  },
  {
    title: 'Oliver & Company',
    releaseYear: 1988,
    decade: '1980s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.80,
    reasoning: 'Bill Sykes is a genuinely menacing villain — a brutal loan shark who threatens Fagin with death over unpaid debts, sends his vicious Dobermans Roscoe and DeSoto to intimidate, and kidnaps the child Jenny as ransom. The climax is a direct physical confrontation: a car chase through New York City onto the Brooklyn Bridge subway tracks, ending when Sykes is killed by an oncoming train and his dogs are electrocuted on the third rail. Scored at 0.80 because Sykes is unambiguously evil and defeated through confrontation, but the film\'s emotional core is equally about Oliver finding a home and the theme of belonging — the first act focuses on street survival and friendship with Dodger\'s gang rather than villain conflict, tempering the score slightly below purely villain-driven films like The Great Mouse Detective (0.85).',
  },
  {
    title: 'The Land Before Time',
    releaseYear: 1988,
    decade: '1980s',
    studio: 'Sullivan Bluth Studios',
    conflictScore: 0.85,
    reasoning: 'Sharptooth is a terrifying, relentless Tyrannosaurus rex who kills Littlefoot\'s mother in a brutal early attack and stalks the young dinosaurs throughout their journey to the Great Valley. The climax is a direct physical confrontation — the children lure Sharptooth to a cliff edge and topple a boulder onto him, sending him plunging into deep water. Scored at 0.85 because Sharptooth is an unambiguous, deadly villain whose threat drives the entire plot, and the resolution is pure confrontation. Slightly below 0.90 because important secondary themes — grief over a parent\'s death, cooperation across species prejudice, and the emotional journey of growing up — add depth beyond a simple good-vs-evil arc.',
  },
  {
    title: 'All Dogs Go to Heaven',
    releaseYear: 1989,
    decade: '1980s',
    studio: 'Sullivan Bluth Studios',
    conflictScore: 0.70,
    reasoning: 'Carface Carruthers is an unambiguous villain — a crime boss who murders his partner Charlie B. Barkin to seize control of their gambling operation, then repeatedly tries to kill him again after Charlie returns from the dead. The climax involves a direct physical confrontation at Carface\'s lair amid fire and flooding. Scored at 0.70 because while Carface is genuinely evil and the stakes are life-and-death, the resolution hinges on Charlie\'s internal moral transformation — he starts out selfish and exploitative (using orphan Anne-Marie\'s gift for gambling profit) and ultimately sacrifices his life to save her, earning redemption. The film resolves through self-sacrifice and spiritual growth rather than simply defeating the villain.',
  },
  {
    title: 'Kiki\'s Delivery Service',
    releaseYear: 1989,
    decade: '1980s',
    studio: 'Studio Ghibli',
    conflictScore: 0.15,
    reasoning: 'There is no villain in this film. Kiki is a young witch who moves to a new city and starts a flying delivery service as part of a coming-of-age tradition. The central conflict is entirely internal — she loses her magical powers due to self-doubt and a crisis of identity, and regains them through renewed self-belief when she must rescue her friend Tombo from a crashing dirigible. Scored at 0.15 — slightly above Totoro (0.10) because the climax has genuine physical danger and urgency, but the conflict is fundamentally about personal growth and self-understanding with zero antagonism or villainy.',
  },
  {
    title: 'The Little Mermaid',
    releaseYear: 1989,
    decade: '1980s',
    studio: 'Walt Disney Studios',
    conflictScore: 0.90,
    reasoning: 'Ursula is one of Disney\'s most iconic villains — a power-hungry sea witch who tricks Ariel into a Faustian bargain (trading her voice for human legs) with the hidden goal of using Ariel as a pawn to overthrow King Triton. Ursula actively sabotages Ariel\'s chance at true love by transforming into "Vanessa" to bewitch Prince Eric, then seizes Triton\'s trident to become a giant, all-powerful tyrant. The climax is a direct physical confrontation: Eric rams a ship\'s bowsprit through Ursula, destroying her. Scored at 0.90 because Ursula is unambiguously evil, drives the entire plot through manipulation and force, and is defeated through direct physical confrontation — a textbook real-villain, real-stakes narrative. Held slightly below 1.0 because Ariel\'s own desire for the human world (an internal longing) is what makes her vulnerable to Ursula in the first place, adding a layer of personal growth alongside the villain conflict.',
  },
]
