#!/usr/bin/env node
// Read data/enriched/en.jsonl and produce data/registry/concepts.json,
// the canonical concept registry used by all subsequent language Pass-2 runs.
//
// Each concept slug from the English enrichment becomes one registry entry.
// If multiple English words share a concept, the one with the highest
// recognition_pct_current is treated as the canonical representative for the
// short_definition.
//
// Usage: node build-concept-registry.mjs

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const PROJECT = '/Users/jasonhorsley/code/graphable/projects/sexual-language-index';
const SRC = `${PROJECT}/data/enriched/en.jsonl`;
const DST = `${PROJECT}/data/registry/concepts.json`;

if (!existsSync(SRC)) {
  console.error(`source not found: ${SRC}`);
  process.exit(1);
}

const lines = readFileSync(SRC, 'utf8').split('\n').filter(l => l.trim().startsWith('{'));
const records = [];
for (const line of lines) {
  try {
    records.push(JSON.parse(line));
  } catch (e) {
    console.error(`skip malformed line: ${line.slice(0, 80)}`);
  }
}

const bySlug = new Map();
for (const r of records) {
  if (!r.concept) continue;
  const cur = bySlug.get(r.concept);
  if (!cur || (r.recognition_pct_current ?? 0) > (cur.recognition_pct_current ?? 0)) {
    bySlug.set(r.concept, r);
  }
}

const concepts = [...bySlug.entries()]
  .map(([slug, rep]) => ({
    slug,
    category: rep.category,
    subcategory: rep.subcategory,
    is_universal: !rep.is_novel_concept,
    short_definition: rep.definition,
    representative_english_term: rep.term,
  }))
  .sort((a, b) => a.category.localeCompare(b.category) || a.slug.localeCompare(b.slug));

const out = {
  built_at: new Date().toISOString(),
  source: 'data/enriched/en.jsonl',
  source_record_count: records.length,
  concept_count: concepts.length,
  concepts,
};

writeFileSync(DST, JSON.stringify(out, null, 2));
console.error(`wrote ${DST}`);
console.error(`  ${records.length} records → ${concepts.length} concepts`);
console.error(`  category breakdown:`);
const byCat = {};
for (const c of concepts) byCat[c.category] = (byCat[c.category] || 0) + 1;
for (const [cat, n] of Object.entries(byCat).sort((a, b) => b[1] - a[1])) {
  console.error(`    ${n.toString().padStart(4)}  ${cat}`);
}
