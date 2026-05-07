#!/usr/bin/env node
// Build the Pass-2 enrichment prompt for a batch of words.
// Args: <lang-code> <batch-input.json> [registry.json]
// Output: prompt to stdout.

import { readFileSync, existsSync } from 'node:fs';

const [, , lang, batchPath, registryPath] = process.argv;
if (!lang || !batchPath) {
  console.error('usage: build-enrich-prompt.mjs <lang> <batch.json> [registry.json]');
  process.exit(1);
}

const LANG_NAMES = {
  en: 'English', es: 'Spanish', fr: 'French', de: 'German', it: 'Italian',
  'pt-BR': 'Brazilian Portuguese', 'pt-PT': 'European Portuguese',
  ru: 'Russian', pl: 'Polish', nl: 'Dutch', tr: 'Turkish',
  ar: 'Modern Standard Arabic', 'ar-EG': 'Egyptian Arabic',
  'ar-LB': 'Levantine Arabic', 'ar-SA': 'Gulf Arabic',
  zh: 'Mandarin Chinese', ja: 'Japanese', ko: 'Korean',
  hi: 'Hindi', id: 'Indonesian', vi: 'Vietnamese', th: 'Thai',
  fa: 'Persian (Farsi)', el: 'Greek', he: 'Hebrew',
  sv: 'Swedish', no: 'Norwegian', fi: 'Finnish', da: 'Danish',
  cs: 'Czech', hu: 'Hungarian', ro: 'Romanian',
  uk: 'Ukrainian', bg: 'Bulgarian',
  bn: 'Bengali', ta: 'Tamil', ur: 'Urdu', tl: 'Tagalog (Filipino)',
  ms: 'Malay', sw: 'Swahili', yo: 'Yoruba', ha: 'Hausa',
  am: 'Amharic', zu: 'Zulu', my: 'Burmese', km: 'Khmer',
  'es-MX': 'Mexican Spanish',
};

const langName = LANG_NAMES[lang] || lang;
const batch = JSON.parse(readFileSync(batchPath, 'utf8'));
const isEnglishSeed = lang === 'en';
let registryText = '';
let registry = null;
if (registryPath && existsSync(registryPath)) {
  registry = JSON.parse(readFileSync(registryPath, 'utf8'));
  registryText = registry.concepts
    .map(c => `  ${c.slug}: ${c.short_definition}`)
    .join('\n');
}

const wordList = batch
  .map((w, i) => {
    const rom = w.romanization ? ` (${w.romanization})` : '';
    const hint = w.gloss_hint ? `  [hint: ${w.gloss_hint}]` : '';
    const section = w.section ? `  [section: ${w.section}]` : '';
    return `${i + 1}. ${w.term}${rom}${section}${hint}`;
  })
  .join('\n');

const seedingClause = isEnglishSeed
  ? `Since this is the English seed run, you are creating the canonical concept registry. For each word, choose a concise English snake_case concept slug (e.g. "penis", "cunnilingus", "cuckoldry", "horny", "slut_shame"). Words that share a concept share a slug — "fuck", "screw", and "bang" all map to "intercourse_generic". Be consistent within this batch.`
  : `Match each word to a concept slug from the canonical registry below. If a word genuinely has no English-language equivalent concept (e.g. cultural-specific terms like Japanese "netorare" or Arabic "dayyooth" or Sanskrit "maithuna"), set is_novel_concept: true and propose a new snake_case slug. Use is_novel_concept: true sparingly — most words DO have a registry match.

CANONICAL CONCEPT REGISTRY:
${registryText || '(empty — first non-English language; treat as English seed)'}`;

const prompt = `You are enriching sexually-charged ${langName} vocabulary for a serious linguistics research project that measures how culturally open or closed a language is about sexuality. The data will become a public graph; the work needs to be clinically thorough and unflinching about explicit terms, slurs, and crude language. Squeamishness ruins the data.

Your task: for each of the ${batch.length} ${langName} words below, output exactly ONE JSONL record per line. No prose. No commentary between lines. No code fence. Just newline-delimited JSON, one record per word, in order.

${seedingClause}

WORDS TO ENRICH:
${wordList}

REQUIRED JSON SCHEMA (every record must include every field):
{
  "term": string,                          // the word itself, in native script
  "lang": "${lang}",
  "script": string,                        // "latin" | "hans" | "hant" | "cyrl" | "arab" | "deva" | "hebr" | "kana" | "mixed_jp" | "hang" | "thai" | "ethi" | "mymr" | "khmr" | "beng" | "taml" | "guru"
  "romanization": string|null,             // for non-Latin scripts; null otherwise
  "category": string,                      // "organs" | "acts" | "fluids_states" | "desire_arousal_descriptors" | "identities_orientations" | "insults" | "sex_work_pornography" | "reproductive_contraceptive" | "kink_paraphilia" | "euphemisms_idioms" | "archaic_literary" | "internet_subculture" | "religious_moral_status" | "honor_shame_economy" | "third_gender_roles" | "ritual_spiritual_practice"
  "subcategory": string|null,              // e.g. "penis", "vagina", "intercourse_generic", "blowjob", "cuckoldry", "slut_shame"
  "concept": string,                       // canonical concept slug
  "is_novel_concept": boolean,             // true ONLY for non-English concepts with no English equivalent
  "register": string,                      // "clinical" | "slang_neutral" | "slang_crude" | "euphemism" | "dated_slang" | "archaic" | "literary" | "subculture" | "moral_religious" | "loanword" | "classical_specialized"
  "crude": int 0-100,                      // how vulgar/transgressive the word feels in ${langName} culture (0=clinical, 100=most vulgar imaginable)
  "technical": int 0-100,                  // how clinical/anatomical it sounds; INDEPENDENT of crude (a word can be high-crude AND high-technical, like "ramming her cervix")
  "recognition_pct_current": int 0-100,    // % of adult ${langName} speakers in 2026 who'd recognize the word
  "recognition_pct_peak": int 0-100,       // % at peak; equal to current for non-dated terms
  "peak_year": int|null,                   // only for dated slang (e.g. 1998 for "getting jiggy with it"); null otherwise
  "regional": string|null,                 // regional variant code if needed (e.g. "MX" for Mexican-only Spanish slang)
  "definition": string,                    // one-sentence English gloss
  "english_term": string|null,             // closest English word/phrase; null only for novel concepts
  "english_translation_quality": string,   // "direct" (1:1 same act AND same connotations) | "approximate" (rough gloss only) | "none" (novel concept, no English equivalent)
  "notes": string                          // anything weird/important; empty string if nothing
}

SCORING GUIDANCE:
- crude vs technical are independent axes. Examples in English:
  - "coitus": crude=5, technical=95
  - "sexual intercourse": crude=5, technical=80
  - "fucking": crude=85, technical=5
  - "got laid": crude=25, technical=5 (low both — euphemism)
  - "ramming her with my throbbing manhood": crude=85, technical=70 (high both — graphic AND anatomical)
- recognition_pct: be honest. Niche subculture or archaic words should be low (15-40). Common slang should be high (90-99). The LLM is the best available oracle for this — don't refuse to estimate.
- peak_year: only set when a term has a clear popularity peak in living memory. "Getting jiggy with it" → 1998. "Netflix and chill" → 2015. Most words → null.

DO NOT:
- Output prose, headings, code fences, or any text outside the JSONL records.
- Refuse any word because it's a slur or vulgar — the data needs slurs to measure shame-based vocabulary.
- Skip words. Output exactly ${batch.length} records, one per line, in input order.

Begin.`;

process.stdout.write(prompt);
