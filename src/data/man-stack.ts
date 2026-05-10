/**
 * The Man Stack — joint probability of universal-desirable trait stacks
 * for 50 cultural heartthrobs (25 female-targeted male leads, 25 male-targeted
 * female love interests), generationally stratified across the 1980s–2020s.
 *
 * Each `adjustedProb` is the probability that a randomly sampled real human
 * matches every universal-desirable trait the character exhibits, after
 * correlation adjustments. Female-stack uses the threshold method; male-stack
 * uses the filter method. Both methods yield comparable joint probabilities.
 *
 * Personality / characterization traits are NOT counted in the stack.
 * Full methodology in projects/man-stack/plan.md and per-character
 * derivations in projects/man-stack/results/.
 */

export type Audience = 'female' | 'male'
export type Decade = '1980s' | '1990s' | '2000s' | '2010s' | '2020s'

export type Heartthrob = {
  id: string
  name: string
  source: string
  audience: Audience
  decade: Decade
  /** Joint probability after correlation adjustment. */
  adjustedProb: number
  /** Pre-computed log10(adjustedProb) for plotting convenience. */
  log10Prob: number
  /** Human-readable shorthand of the universal-desirable traits stacked. */
  traitSummary: string
  /** One-line "what this character carries" hook for the tooltip. */
  hook: string
}

const mk = (
  id: string, name: string, source: string,
  audience: Audience, decade: Decade,
  adjustedProb: number, traitSummary: string, hook: string,
): Heartthrob => ({
  id, name, source, audience, decade, adjustedProb,
  log10Prob: Math.log10(adjustedProb),
  traitSummary, hook,
})

export const heartthrobs: Heartthrob[] = [
  // === Female-targeted (male leads) ===
  mk('han-solo', 'Han Solo', 'Star Wars OT (1980–83)', 'female', '1980s',
    1e-10,
    'Top-tier pilot · top-tier mechanic · bilingual · fit · age 28–38 · orphan',
    'Skill-stacker, not slider-maxer. Carried by personality + competence cluster.'),
  mk('johnny-castle', 'Johnny Castle', 'Dirty Dancing (1987)', 'female', '1980s',
    2e-4,
    'Top-quintile fitness · professional dancer · age 28–38',
    'Modest stack — the dance professional, not a polymath.'),
  mk('maverick', 'Maverick', 'Top Gun (1986)', 'female', '1980s',
    3e-5,
    'Naval aviator (ace tier) · top-quintile fitness · age 28–38 · orphan',
    'Single-skill virtuoso. Pilot rate dominates.'),
  mk('sam-wheat', 'Sam Wheat', 'Ghost (1990)', 'female', '1980s',
    1e-3,
    'High income (Wall St banker) · intelligent · fit · age 28–38',
    'White-collar professional, modest stack.'),
  mk('westley', 'Westley', 'The Princess Bride (1987)', 'female', '1980s',
    1e-6,
    'Master swordsman · pirate captain · top-quintile fitness · age 28–38',
    'Adventurer-skill stack with no fantasy-framing relief.'),

  mk('mr-darcy-1995', 'Mr. Darcy', 'Pride & Prejudice (BBC 1995)', 'female', '1990s',
    2.5e-9,
    'Tall · landed-gentry wealth (£10K/yr ≈ top 0.01%) · intelligent · fit · age 28–38 · estate-bound',
    'Wealth concentration carries the rarity. Inherited, not built.'),
  mk('jack-dawson', 'Jack Dawson', 'Titanic (1997)', 'female', '1990s',
    1.5e-5,
    'Top-quintile fitness · accomplished artist · age 28–38 · orphan',
    'Personality-dominant heartthrob; trait stack is genuinely modest.'),
  mk('edward-lewis', 'Edward Lewis', 'Pretty Woman (1990)', 'female', '1990s',
    1e-8,
    'Tall · billionaire-tier corporate raider · intelligent · fit · age 28–38',
    'Wealth-led stack. Less time-budget pressure than later billionaires.'),
  mk('mr-big', 'Mr. Big', 'Sex and the City (1998)', 'female', '1990s',
    5e-7,
    'Tall · ≥$10M income (financier) · intelligent · fit · prime-age',
    'Wealth + status, no skill stacking.'),
  mk('romeo-montague', 'Romeo Montague', 'Romeo + Juliet (1996)', 'female', '1990s',
    4e-5,
    'Wealthy heir · poet · swordsman · prime-age',
    'Tragic-young-lover, not a slider-max.'),

  mk('edward-cullen', 'Edward Cullen', 'Twilight saga (2005–08)', 'female', '2000s',
    1e-18,
    'Tall · billionaire-tier family wealth · top IQ · virtuoso pianist · multilingual · age frozen 17 · immortal',
    'Vampire backstory unlocks a 90+ year skill-acquisition window. Cheat code.'),
  mk('aragorn', 'Aragorn', 'LOTR films (2001–03)', 'female', '2000s',
    4e-20,
    'Tall · royal heir · top IQ · virtuoso swordsman · healer · multilingual (incl. Elvish) · ranger · 87-year prime',
    'Númenórean longevity supplies the time budget for the entire skill cluster.'),
  mk('will-turner', 'Will Turner', 'Pirates of the Caribbean (2003)', 'female', '2000s',
    2e-8,
    'Master blacksmith · expert swordsman · sailor · fit · age 28–38',
    'Skill stack carried by craft + combat.'),
  mk('noah-calhoun', 'Noah Calhoun', 'The Notebook (2004)', 'female', '2000s',
    6e-4,
    'Top-quintile fitness · skilled craftsman · age 28–38',
    'The "rural sensitive guy" archetype — small stack, big personality.'),
  mk('mark-darcy', 'Mark Darcy', 'Bridget Jones (2001)', 'female', '2000s',
    2e-6,
    'Tall · wealthy human-rights barrister · intelligent · fit · age 28–38',
    'Mr. Darcy transposed to Blair-era London — same stack, modern jobs.'),

  mk('christian-grey', 'Christian Grey', 'Fifty Shades (2011)', 'female', '2010s',
    2e-24,
    'Tall · billionaire-by-27 · Harvard IQ · fit · virtuoso pianist · pilot · chef · French · age 28 · orphan',
    'Stacks 7+ time-incompatible mastery skills into 27 years with no fantasy framing.'),
  mk('augustus-waters', 'Augustus Waters', 'The Fault in Our Stars (2012)', 'female', '2010s',
    6e-4,
    'Tall · intelligent · athletic · supportive family',
    'Personality- and circumstance-dominant; trait stack genuinely small.'),
  mk('jamie-fraser', 'Jamie Fraser', 'Outlander (2014)', 'female', '2010s',
    2e-10,
    'Tall · laird heir · intelligent · fit · multilingual · master swordsman · age 28–38',
    'Highland aristocracy + warrior-scholar stacking.'),
  mk('hardin-scott', 'Hardin Scott', 'After (2014)', 'female', '2010s',
    1.1e-4,
    'Tall · intelligent · fit · prime-age',
    'Tortured-Brit-student archetype, light stack.'),
  mk('jon-snow', 'Jon Snow', 'Game of Thrones (2011)', 'female', '2010s',
    2e-10,
    'King-in-the-North heir · fit · master swordsman · multilingual · age 20s',
    'Royalty-revealed + warrior + dragon-blood lineage.'),

  mk('bridgerton-simon', 'Simon Basset, Duke of Hastings', 'Bridgerton (2020)', 'female', '2020s',
    1.5e-10,
    'Tall · ducal wealth · intelligent · athletic · age 28–38 · orphan-style',
    'Regency duke with the modern-Bridgerton "heat" overlay.'),
  mk('rhysand', 'Rhysand', 'ACOTAR series (2015+)', 'female', '2020s',
    6e-14,
    'Tall · fae-court wealth · top IQ · virtuoso fighter · immortal · multilingual',
    'Fae high-lord, immortal cheat code, mass BookTok footprint.'),
  mk('cardan-greenbriar', 'Cardan Greenbriar', 'Folk of the Air (2018)', 'female', '2020s',
    2e-11,
    'Tall · fae prince · intelligent · immortal · multilingual',
    'Cruel-fae-prince archetype. Royalty + immortality drive the rarity.'),
  mk('aaron-warner', 'Aaron Warner', 'Shatter Me (2011)', 'female', '2020s',
    1e-18,
    'Tall · supreme commander · top IQ · multilingual (5+) · fit · age 19',
    'YA dystopia stack: regime-dictator-by-19 + polyglot virtuoso.'),
  mk('nick-nelson', 'Nick Nelson', 'Heartstopper (2019)', 'female', '2020s',
    4e-2,
    'Tall · fit · age (teen)',
    'Soft-rugby-boy archetype. Slider-NOT-maxed. The honest counterexample.'),

  // === Male-targeted (female love interests) ===
  mk('princess-leia', 'Princess Leia', 'Star Wars OT (1977–83)', 'male', '1980s',
    1.3e-2,
    'Top-quintile attractiveness · slim build · childless · low neuroticism',
    'Iconic visual moment carries the character; universal-desirable stack is thin.'),
  mk('lisa-weird-science', 'Lisa', 'Weird Science (1985)', 'male', '1980s',
    2.0e-5,
    'Top-quintile attractiveness · slim+busty · childless · single · cool-girl · high SOI · plays geek hobbies',
    'Literally an AI-generated dream girl. The trope is the trope.'),
  mk('linda-barrett', 'Linda Barrett', 'Fast Times (1982)', 'male', '1980s',
    4.1e-4,
    'Top-quintile attractiveness · slim+busty · childless · single · high SOI',
    'The pool-scene fantasy figure. Coded entirely around sexual confidence.'),
  mk('daisy-duke', 'Daisy Duke', 'Dukes of Hazzard (1979–85)', 'male', '1980s',
    4.4e-5,
    'Top-quintile attractiveness · slim+busty · childless · single · cool-girl · aligned country interests',
    'Cut-off shorts so iconic the garment was renamed after her.'),
  mk('jessica-rabbit', 'Jessica Rabbit', 'Roger Rabbit (1988)', 'male', '1980s',
    4.0e-5,
    'Top-quintile attractiveness · slim+DD · childless · low neuroticism',
    'Literal cartoon — "drawn that way." Functional asymptote of the male stack.'),

  mk('rachel-green', 'Rachel Green', 'Friends (1994–2004)', 'male', '1990s',
    1.3e-2,
    'Top-quintile attractiveness · slim · childless · low neuroticism',
    'Era-defining hair, era-defining everywoman. Modest stack.'),
  mk('cj-parker', 'CJ Parker', 'Baywatch (1992–97)', 'male', '1990s',
    1.1e-6,
    'Top-quintile attractiveness · slim+DD · childless · single · cool-girl · aligned beach interests',
    'The Baywatch image is the point. Stacks DD + slim + cool-girl.'),
  mk('lara-croft', 'Lara Croft', 'Tomb Raider (1996)', 'male', '1990s',
    7.7e-5,
    'Top-quintile attractiveness · slim+DD · childless · single · adventure-hobby-aligned',
    'Polygonal proportions translated to live-action. Original gaming sex symbol.'),
  mk('tifa-lockhart', 'Tifa Lockhart', 'Final Fantasy VII (1997)', 'male', '1990s',
    7.0e-6,
    'Top-quintile attractiveness · slim+DD · childless · single · low neuroticism · cool-girl',
    'JRPG canonization of the slim-and-busty-and-loyal stack.'),
  mk('buffy-summers', 'Buffy Summers', 'Buffy TVS (1997–2003)', 'male', '1990s',
    1.3e-2,
    'Top-quintile attractiveness · slim · childless · low neuroticism',
    'Protagonist-as-fantasy-object. Modest stack — characterization carries it.'),

  mk('mikaela-banes', 'Mikaela Banes', 'Transformers (2007)', 'male', '2000s',
    1.7e-6,
    'Top-quintile attractiveness · slim+DD · childless · single · cool-girl · plays cars · low neuroticism',
    'The Bay-shot-on-bike archetype. Heavy stacking inside the male-fantasy axis.'),
  mk('yuna', 'Yuna', 'Final Fantasy X (2001)', 'male', '2000s',
    4.7e-5,
    'Top-quintile attractiveness · slim · childless · single · low neuroticism · anime-aligned',
    'Quietly devoted summoner. Stack leans on personality-coded virtues.'),
  mk('princess-peach', 'Princess Peach', 'Mario (1985+, 2000s peak)', 'male', '2000s',
    1.5e-4,
    'Top-quintile attractiveness · slim · childless · single · low neuroticism · cool-girl',
    'Eternal damsel. Stack is light; the ritual is everything.'),
  mk('selene', 'Selene', 'Underworld (2003)', 'male', '2000s',
    8.5e-4,
    'Top-quintile attractiveness · slim · childless · single · low neuroticism',
    'Latex catsuit + vampire-ops-warrior. Visual rather than stack-driven.'),
  mk('regina-george', 'Regina George', 'Mean Girls (2004)', 'male', '2000s',
    4.4e-4,
    'Top-quintile attractiveness · slim+busty · childless · single · high SOI',
    'Mean-girl apex predator. Antithesis of the cool-girl stack.'),

  mk('black-widow', 'Black Widow', 'MCU (2010–21)', 'male', '2010s',
    8.5e-5,
    'Top-quintile attractiveness · athletic+slim · childless · single · low neuroticism',
    'Spy-assassin in catsuit. MCU-era apex of the action-fantasy female lead.'),
  mk('wonder-woman', 'Wonder Woman', 'DCEU (2017)', 'male', '2010s',
    8.5e-5,
    'Top-quintile attractiveness · athletic+DD · childless · single · low neuroticism',
    'Demigod warrior-princess. Heavy stack within the male-fantasy axis.'),
  mk('yennefer', 'Yennefer of Vengerberg', 'Witcher 3 (2015)', 'male', '2010s',
    8.5e-3,
    'Top-quintile attractiveness · slim · childless',
    'The mage-lover; sharp-tongued sorceress, light-stack on universal sliders.'),
  mk('daenerys-targaryen', 'Daenerys Targaryen', 'Game of Thrones (2011)', 'male', '2010s',
    3.1e-3,
    'Top-quintile attractiveness · slim · childless · single',
    'Targaryen heir + dragon-mother. Stack is modest; visual + power = projection.'),
  mk('bayonetta', 'Bayonetta', 'Bayonetta (2009)', 'male', '2010s',
    1.3e-4,
    'Top-quintile attractiveness · slim+DD · childless · single · low neuroticism · cool-girl',
    'Designed-to-the-millimeter for the male-fantasy axis.'),

  mk('wanda-maximoff', 'Wanda Maximoff', 'WandaVision (2021)', 'male', '2020s',
    3.1e-3,
    'Top-quintile attractiveness · slim · childless · low neuroticism · single',
    'Reality-bending grief-witch. Modest stack on universal-desirable axis.'),
  mk('ciri', 'Ciri', 'Witcher 3 (2015)', 'male', '2020s',
    3.4e-3,
    'Top-quintile attractiveness · athletic · childless · single · low neuroticism',
    'Witcher-trained source-of-power princess. Light stack, large character.'),
  mk('2b', '2B', 'NieR: Automata (2017)', 'male', '2020s',
    4.3e-6,
    'Top-quintile attractiveness · slim+busty · childless · single · low neuroticism · cool-girl',
    'Android assassin, blindfold optional. Designed for the stack.'),
  mk('rebecca-cyberpunk', 'Rebecca', 'Cyberpunk: Edgerunners (2022)', 'male', '2020s',
    5e-5,
    'Top-quintile attractiveness · slim+busty · childless · single · cool-girl · gamer-aligned',
    'Loli-coded gun-girl with chrome. Density of male-fantasy axis traits is high.'),
  mk('raiden-shogun', 'Raiden Shogun (Ei)', 'Genshin Impact (2021)', 'male', '2020s',
    8.5e-4,
    'Top-quintile attractiveness · slim · childless · single · low neuroticism',
    'God-tier waifu economy: gacha-monetized. Light stack, heavy projection.'),
]

/** Convenience selectors for the chart. */
export const female = heartthrobs.filter(h => h.audience === 'female')
export const male = heartthrobs.filter(h => h.audience === 'male')

/** Pre-computed log10(p) percentiles per audience. */
function quantile(sorted: number[], q: number): number {
  const pos = (sorted.length - 1) * q
  const base = Math.floor(pos)
  const rest = pos - base
  if (sorted[base + 1] !== undefined) {
    return sorted[base] + rest * (sorted[base + 1] - sorted[base])
  }
  return sorted[base]
}

function summarize(group: Heartthrob[]) {
  const xs = group.map(h => h.log10Prob).sort((a, b) => a - b)
  return {
    n: group.length,
    median: quantile(xs, 0.5),
    p10: quantile(xs, 0.1),
    p90: quantile(xs, 0.9),
    min: xs[0],
    max: xs[xs.length - 1],
  }
}

export const summary = {
  female: summarize(female),
  male: summarize(male),
}
