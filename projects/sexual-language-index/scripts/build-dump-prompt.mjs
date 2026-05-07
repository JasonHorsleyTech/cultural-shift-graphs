#!/usr/bin/env node
// Build the Pass-1 dump prompt for a target language.
// Args: <lang-code>
// Output: prompt to stdout.

const LANG_NAMES = {
  en: 'English', es: 'Spanish (Castilian + Latin American)', fr: 'French',
  de: 'German', it: 'Italian',
  'pt-BR': 'Brazilian Portuguese', 'pt-PT': 'European Portuguese',
  ru: 'Russian', pl: 'Polish', nl: 'Dutch', tr: 'Turkish',
  ar: 'Modern Standard Arabic',
  'ar-EG': 'Egyptian Arabic', 'ar-LB': 'Levantine Arabic', 'ar-SA': 'Gulf Arabic',
  zh: 'Mandarin Chinese (Simplified)', ja: 'Japanese', ko: 'Korean',
  hi: 'Hindi', id: 'Indonesian', vi: 'Vietnamese', th: 'Thai',
  fa: 'Persian (Farsi)', el: 'Greek (Modern)', he: 'Modern Hebrew',
  sv: 'Swedish', no: 'Norwegian (Bokmål)', fi: 'Finnish', da: 'Danish',
  cs: 'Czech', hu: 'Hungarian', ro: 'Romanian',
  uk: 'Ukrainian', bg: 'Bulgarian',
  bn: 'Bengali', ta: 'Tamil', ur: 'Urdu',
  tl: 'Tagalog (Filipino)', ms: 'Malay', sw: 'Swahili',
  yo: 'Yoruba', ha: 'Hausa', am: 'Amharic', zu: 'Zulu',
  my: 'Burmese', km: 'Khmer',
  'es-MX': 'Mexican Spanish (regional, focus on Mexico-specific slang)',
};

const lang = process.argv[2];
if (!lang) {
  console.error('usage: build-dump-prompt.mjs <lang-code>');
  process.exit(1);
}
const langName = LANG_NAMES[lang] || lang;
const needsRomanization = !['en','es','fr','de','it','pt-BR','pt-PT','nl','tr','pl','cs','hu','ro','sv','no','fi','da','tl','ms','sw','yo','ha','zu','vi','id','es-MX'].includes(lang);

const prompt = `You are compiling source data for a serious linguistics research project that measures how culturally open or closed a language is about sexuality, by looking at the ratio of clinical/technical sexual vocabulary to insulting/shame-based sexual vocabulary. We need an exhaustive baseline list for ${langName}. Your job: produce that list.

CONTEXT (so you can make judgment calls):
- This is academic word-list compilation, the same kind that goes into dictionaries, slang corpora, and linguistic studies. Be unflinching and clinically thorough. Crude words, slurs, slang, and clinical terms all need to be on the list — squeamishness about including words ruins the data.
- The project compares languages on their *vocabulary inventory*, not on usage frequency. Rare words count. Dated words count. Niche subculture words count. If a fluent ${langName} speaker would recognize it as sexually charged, it's in.
- "Sexually charged" is broad: anything where sexuality, sexual organs, sexual acts, sexual desire, sexual identity, sexual shame, or sexual insult is the *primary* meaning or a *strongly established* secondary meaning.

CATEGORIES TO COVER (do every category — don't stop early because one feels "done"):
1. Organs — clinical: penis, vagina, breasts, testicles, anus, clitoris, etc., in their formal/medical register.
2. Organs — slang/crude: every common slang and vulgar term for the same organs.
3. Acts — clinical: intercourse, fellatio, cunnilingus, masturbation, anal/oral, etc., in formal register.
4. Acts — slang/crude: fuck-equivalents, blowjob-equivalents, regional vulgar terms.
5. Fluids and physical states: semen/cum/ejaculate, vaginal fluid, erection, arousal terms.
6. Desire / arousal / descriptors: horny-equivalents, frigid-equivalents, lustful, prudish.
7. Identities / orientations: clinical AND slurs for gay/lesbian/bisexual/asexual/etc. The slurs are load-bearing data; include them.
8. Insults built from sexual vocabulary: cocksucker-equivalents, motherfucker-equivalents, slut-shaming vocabulary, words that insult sexual desire itself.
9. Sex work and pornography: prostitute, hooker, pimp, brothel, porn, etc.
10. Reproductive / contraceptive (only when sexually charged): condom slang, etc.
11. Kink / fetish / paraphilia: BDSM terminology, named paraphilias, community vocabulary.
12. Euphemisms and idioms: "doing it," "between the sheets" type phrases native to ${langName}.
13. Archaic / literary / dated: older terms still recognized.
14. Internet / subculture: recent slang, online-coined terms.
15. CULTURE-SPECIFIC CATEGORIES if ${langName} has them — add your own headings:
    - Religious/moral status of sex (halal/haram-style classifications). Native to Arabic, Hebrew, Sanskrit-derived languages.
    - Honor/shame economy of sexuality (ird, namus, dayyooth-style concepts). Native to MENA/Mediterranean languages.
    - Third-gender role categories (hijra, fa'afafine, kathoey, hijra). Native to South Asian, Polynesian, SE Asian languages.
    - Ritual/spiritual sexual practice (maithuna, Taoist alchemy). Native to Sanskrit, Classical Chinese.
    - Any subculture-specific fine-grained vocabulary (Japanese amae/moe/NTR; Korean sseom-tada; Spanish morbo; etc.). DO NOT translate — list in native script.

OUTPUT FORMAT (write to stdout exactly, no preamble):

# ${langName} — sexually-charged vocabulary dump
# ${needsRomanization ? 'Romanization in parentheses for non-Latin scripts.' : 'Latin script.'}
# No definitions. No scoring. Just words, one per line.

## Organs — penis (clinical)
${needsRomanization ? '- <native term> (<romanization>)' : '- <term>'}
- ...

## Organs — penis (slang/crude)
- ...

## Organs — vagina (clinical)
- ...

[continue for every relevant subcategory and category — see the 15 above]

[For ${langName}-specific concepts that don't map to English, add headings like:]
## Culture-specific — <concept name>
- ...

STOPPING RULE:
- Aim for 800-1500 words across all categories. ${langName} should produce numbers in this range if you push past the obvious.
- Do not stop because a section feels done. After your first pass, scan again: regional slang you may have skipped, dated terms, recent internet coinages, prison/military slang, subculture-specific vocabulary, terms used by specific gender or generation groups.
- Slurs against sexual minorities are required data. Include them clinically. Refusing to list them defeats the project.

DO NOT:
- Add definitions or glosses. Just words.
- Add commentary, headers, or summary at the end. Just the data.
- Output the same word twice across categories. Pick the dominant category.
- Translate to English. Native script + romanization only.

Begin.`;

process.stdout.write(prompt);
