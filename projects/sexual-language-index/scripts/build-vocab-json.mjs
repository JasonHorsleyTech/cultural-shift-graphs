#!/usr/bin/env node
// Final deterministic merge: read every data/enriched/*.jsonl,
// produce src/data/sexual-vocabulary.json in the nested concept-keyed schema.
//
// No LLM involved — pure data transformation.
// Run after enrichment is complete for at least the languages you want included.
//
// Usage: node build-vocab-json.mjs

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const PROJECT = '/Users/jasonhorsley/code/graphable/projects/sexual-language-index';
const REPO = '/Users/jasonhorsley/code/graphable';
const ENRICH_DIR = `${PROJECT}/data/enriched`;
const REGISTRY = `${PROJECT}/data/registry/concepts.json`;
const OUT = `${REPO}/src/data/sexual-vocabulary.json`;

const VALID_REGISTERS = new Set([
  'clinical', 'slang_neutral', 'slang_crude', 'euphemism',
  'dated_slang', 'archaic', 'literary', 'subculture',
  'moral_religious', 'loanword', 'classical_specialized',
]);

const VALID_TQ = new Set(['direct', 'approximate', 'none']);

const warnings = [];

function readJsonl(path) {
  const records = [];
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const t = line.trim();
    if (!t.startsWith('{')) continue;
    try { records.push(JSON.parse(t)); }
    catch { warnings.push(`malformed JSON in ${path}: ${t.slice(0, 80)}`); }
  }
  return records;
}

function validateRecord(r, src) {
  const issues = [];
  if (typeof r.term !== 'string' || !r.term) issues.push('missing term');
  if (typeof r.lang !== 'string') issues.push('missing lang');
  if (typeof r.concept !== 'string') issues.push('missing concept');
  if (typeof r.crude !== 'number' || r.crude < 0 || r.crude > 100) issues.push(`bad crude=${r.crude}`);
  if (typeof r.technical !== 'number' || r.technical < 0 || r.technical > 100) issues.push(`bad technical=${r.technical}`);
  if (!VALID_REGISTERS.has(r.register)) issues.push(`bad register=${r.register}`);
  if (!VALID_TQ.has(r.english_translation_quality)) issues.push(`bad tq=${r.english_translation_quality}`);
  if (r.is_novel_concept && r.english_translation_quality !== 'none') {
    issues.push(`novel concept must have english_translation_quality=none`);
  }
  if (issues.length) warnings.push(`${src} :: ${r.term} :: ${issues.join('; ')}`);
  return issues.length === 0;
}

const conceptIndex = new Map();
let registry = null;
if (existsSync(REGISTRY)) {
  registry = JSON.parse(readFileSync(REGISTRY, 'utf8'));
  for (const c of registry.concepts) {
    conceptIndex.set(c.slug, {
      slug: c.slug,
      key_language: 'en',
      category: c.category,
      subcategory: c.subcategory,
      is_universal: c.is_universal,
      definition: c.short_definition,
      english_equivalent: c.is_universal ? c.representative_english_term : null,
      english_approximation: null,
      translations: {},
    });
  }
}

const langStats = {};
for (const file of readdirSync(ENRICH_DIR).sort()) {
  if (!file.endsWith('.jsonl')) continue;
  const lang = file.replace(/\.jsonl$/, '');
  const records = readJsonl(join(ENRICH_DIR, file));
  let kept = 0;
  for (const r of records) {
    if (!validateRecord(r, file)) continue;
    let concept = conceptIndex.get(r.concept);
    if (!concept) {
      // Novel concept introduced by a non-English language
      concept = {
        slug: r.concept,
        key_language: r.lang,
        category: r.category,
        subcategory: r.subcategory,
        is_universal: !r.is_novel_concept,
        definition: r.definition,
        english_equivalent: r.is_novel_concept ? null : r.english_term,
        english_approximation: r.is_novel_concept ? r.english_term : null,
        translations: {},
      };
      conceptIndex.set(r.concept, concept);
    }
    if (!concept.translations[r.lang]) concept.translations[r.lang] = [];
    concept.translations[r.lang].push({
      term: r.term,
      script: r.script,
      romanization: r.romanization,
      register: r.register,
      crude: r.crude,
      technical: r.technical,
      recognition_pct_current: r.recognition_pct_current,
      recognition_pct_peak: r.recognition_pct_peak,
      peak_year: r.peak_year,
      regional: r.regional,
      definition: r.definition,
      english_term: r.english_term,
      english_translation_quality: r.english_translation_quality,
      notes: r.notes || '',
    });
    kept++;
  }
  langStats[lang] = { received: records.length, kept };
}

const concepts = [...conceptIndex.values()].sort((a, b) =>
  a.category.localeCompare(b.category) || a.slug.localeCompare(b.slug)
);

const out = {
  built_at: new Date().toISOString(),
  schema_version: '0.1',
  language_stats: langStats,
  warnings_count: warnings.length,
  warnings_sample: warnings.slice(0, 25),
  concept_count: concepts.length,
  concepts,
};

writeFileSync(OUT, JSON.stringify(out, null, 2));
console.error(`wrote ${OUT}`);
console.error(`  ${concepts.length} concepts across ${Object.keys(langStats).length} languages`);
for (const [lang, s] of Object.entries(langStats)) {
  console.error(`    ${lang}: kept ${s.kept}/${s.received}`);
}
if (warnings.length) console.error(`  ${warnings.length} validation warnings (sample in output)`);
