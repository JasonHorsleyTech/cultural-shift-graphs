#!/usr/bin/env node

/**
 * Reads all enriched JSONL files for the sexual-language-index project,
 * normalizes, and emits a single JSON dataset consumed by the graph page.
 *
 * Re-run after every research tick to refresh the graph data — the Vue page
 * imports the JSON directly, so a new build will pick up the changes.
 *
 * Usage: node scripts/build-sli-data.mjs
 */

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const ENRICHED_DIR = join(ROOT, 'projects/sexual-language-index/data/enriched')
const OUT_PATH = join(ROOT, 'src/data/sexual-language-index.json')

// Subcategory normalization: research data has both `breast` and `breasts`, etc.
const SUBCAT_ALIASES = {
  breast: 'breasts',
  nipples: 'nipple',
  buttock: 'buttocks',
}

function normalize(rec) {
  if (!rec.term || !rec.lang || !rec.category) return null

  if (rec.subcategory && SUBCAT_ALIASES[rec.subcategory]) {
    rec.subcategory = SUBCAT_ALIASES[rec.subcategory]
  }

  for (const f of ['crude', 'technical', 'recognition_pct_current', 'recognition_pct_peak']) {
    if (rec[f] != null && typeof rec[f] !== 'number') {
      const n = Number(rec[f])
      rec[f] = Number.isFinite(n) ? n : null
    }
  }

  if (rec.is_novel_concept != null && typeof rec.is_novel_concept !== 'boolean') {
    rec.is_novel_concept = rec.is_novel_concept === 'true' || rec.is_novel_concept === true
  }

  return rec
}

function main() {
  if (!existsSync(ENRICHED_DIR)) {
    console.error(`Enriched dir not found: ${ENRICHED_DIR}`)
    process.exit(1)
  }

  const files = readdirSync(ENRICHED_DIR).filter(f => f.endsWith('.jsonl')).sort()
  if (files.length === 0) {
    console.error('No enriched JSONL files found.')
    process.exit(1)
  }

  const records = []
  const langStats = {}
  let parseErrors = 0

  for (const file of files) {
    const lang = file.replace(/\.jsonl$/, '')
    const lines = readFileSync(join(ENRICHED_DIR, file), 'utf8').split('\n').filter(l => l.trim())
    let ok = 0
    for (const line of lines) {
      try {
        const rec = JSON.parse(line)
        const norm = normalize(rec)
        if (norm) {
          norm.lang = lang
          records.push(norm)
          ok++
        }
      } catch {
        parseErrors++
      }
    }
    langStats[lang] = ok
  }

  const languages = Object.entries(langStats)
    .map(([code, count]) => ({ code, count }))
    .sort((a, b) => b.count - a.count)

  const out = {
    generatedAt: new Date().toISOString(),
    totalRecords: records.length,
    languages,
    records,
  }

  mkdirSync(dirname(OUT_PATH), { recursive: true })
  const json = JSON.stringify(out)
  writeFileSync(OUT_PATH, json)

  const sizeMB = (Buffer.byteLength(json) / 1024 / 1024).toFixed(2)
  console.log(`Wrote ${OUT_PATH}`)
  console.log(`Languages: ${languages.length} | Records: ${records.length} | Size: ${sizeMB} MB`)
  if (parseErrors) console.log(`Parse errors (skipped): ${parseErrors}`)
}

main()
