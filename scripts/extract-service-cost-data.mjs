#!/usr/bin/env node

/**
 * Parses all service-cost-markup result markdown files and outputs
 * a TypeScript data file with the time-series data for each profession.
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const RESULTS_DIR = join(__dirname, '..', 'projects', 'service-cost-markup', 'results')
const OUTPUT = join(__dirname, '..', 'src', 'data', 'service-cost-markup.ts')

// Industry assignment by ticket number
const industryMap = {
  '001': 'Healthcare', '002': 'Healthcare', '003': 'Healthcare', '004': 'Healthcare',
  '005': 'Healthcare', '006': 'Healthcare', '007': 'Healthcare', '008': 'Healthcare',
  '009': 'Healthcare', '010': 'Healthcare', '011': 'Healthcare', '012': 'Healthcare',
  '013': 'Education', '014': 'Education', '015': 'Education',
  '016': 'Legal & Financial', '017': 'Legal & Financial', '018': 'Legal & Financial', '019': 'Legal & Financial',
  '020': 'Transportation', '021': 'Transportation', '022': 'Transportation', '023': 'Transportation', '024': 'Transportation',
  '025': 'Public Safety', '026': 'Public Safety', '027': 'Public Safety', '028': 'Public Safety', '029': 'Public Safety',
  '030': 'Trades', '031': 'Trades', '032': 'Trades', '033': 'Trades', '034': 'Trades', '035': 'Trades',
  '036': 'Food & Hospitality', '037': 'Food & Hospitality', '038': 'Food & Hospitality', '039': 'Food & Hospitality',
  '040': 'Personal Services', '041': 'Personal Services', '042': 'Personal Services',
  '043': 'Professional', '044': 'Entertainment', '045': 'Entertainment', '046': 'Entertainment', '047': 'Entertainment',
  '048': 'Professional', '049': 'Trades', '050': 'Professional', '051': 'Professional', '052': 'Professional',
  '053': 'Trades', '054': 'Trades', '055': 'Professional', '056': 'Personal Services',
}

function parseResultFile(filename, content) {
  const num = filename.slice(0, 3)
  const slug = filename.replace('.md', '')

  // Parse heading: "# Industry — Job Title" or "# Job Title — Industry"
  const headingMatch = content.match(/^# (.+)/m)
  let profession = slug.replace(/^\d+-/, '').replace(/-/g, ' ')
  if (headingMatch) {
    const heading = headingMatch[1].trim()
    // Heading format varies: "Healthcare — Primary Care Physician" or "Exotic Dancer / Stripper — Adult Entertainment"
    // Take the part after the dash as the profession, or the whole thing if structured differently
    const parts = heading.split(/\s*[—–]\s*/)
    if (parts.length === 2) {
      // Could be "Industry — Profession" or "Profession — Industry"
      // Use the second part as the profession display name for most, but check
      profession = parts[1].trim()
      // If the second part looks like an industry (matches our map), swap
      const knownIndustries = ['Healthcare', 'Education', 'Legal', 'Financial', 'Transportation',
        'Public Safety', 'Fire Protection', 'Law Enforcement', 'Food Service', 'Hospitality',
        'Entertainment', 'Adult Entertainment', 'Trades', 'Home Services']
      if (knownIndustries.some(i => parts[1].includes(i))) {
        profession = parts[0].trim()
      }
    } else {
      profession = heading
    }
  }

  // Parse summary
  const summaryMatch = content.match(/## Summary\s*\n\s*\n([\s\S]*?)(?=\n## )/m)
  const summary = summaryMatch ? summaryMatch[1].trim().split('\n')[0] : ''

  // Parse data table
  const data = []
  const tableMatch = content.match(/## Data[\s\S]*?\n(\|[^\n]*Year[^\n]*\|)\n(\|[-| ]+\|)\n([\s\S]*?)(?=\n\n|\n##)/m)
  if (tableMatch) {
    const rows = tableMatch[3].trim().split('\n')
    for (const row of rows) {
      const cells = row.split('|').map(c => c.trim()).filter(Boolean)
      if (cells.length < 6) continue
      const year = parseInt(cells[0])
      // Worker comp is column index 1
      let compStr = cells[1].replace(/[$,~≈]/g, '').trim()
      let workerComp = parseFloat(compStr)
      // Handle hourly rates — multiply by 2080 for annual
      if (compStr.includes('/hr')) {
        workerComp = parseFloat(compStr.replace(/\/hr.*/, '')) * 2080
      }
      // Ratio is the 6th column (index 5)
      const ratioStr = cells[5].replace(/[%~≈]/g, '').trim()
      const ratio = parseFloat(ratioStr)
      const confidence = (cells[6] || 'med').toLowerCase().trim()
      if (!isNaN(year) && !isNaN(ratio)) {
        data.push({ year, ratio, confidence, workerComp: isNaN(workerComp) ? null : Math.round(workerComp) })
      }
    }
  }

  return {
    id: slug,
    num,
    profession,
    industry: industryMap[num] || 'Other',
    summary,
    data,
  }
}

// Read all result files
const files = readdirSync(RESULTS_DIR).filter(f => f.endsWith('.md')).sort()
const professions = []

for (const file of files) {
  const content = readFileSync(join(RESULTS_DIR, file), 'utf8')
  const parsed = parseResultFile(file, content)
  if (parsed.data.length === 0) {
    console.warn(`WARNING: No data extracted from ${file}`)
  }
  professions.push(parsed)
}

console.log(`Parsed ${professions.length} professions`)
for (const p of professions) {
  const years = p.data.map(d => d.year)
  const ratios = p.data.map(d => d.ratio)
  console.log(`  ${p.id}: ${p.profession} (${p.industry}) — ${p.data.length} points, ${Math.min(...years)}–${Math.max(...years)}, ${ratios[0]}% → ${ratios[ratios.length-1]}%`)
}

// Generate TypeScript
const industries = [...new Set(professions.map(p => p.industry))].sort()

let ts = `// Auto-generated from projects/service-cost-markup/results/
// Run: node scripts/extract-service-cost-data.mjs

export const industryGroups = ${JSON.stringify(industries)} as const
export type IndustryGroup = typeof industryGroups[number]

export const industryColors: Record<IndustryGroup, string> = {
  'Education': '#22c55e',
  'Entertainment': '#6366f1',
  'Food & Hospitality': '#ec4899',
  'Healthcare': '#3b82f6',
  'Legal & Financial': '#a855f7',
  'Personal Services': '#14b8a6',
  'Professional': '#64748b',
  'Public Safety': '#ef4444',
  'Trades': '#f59e0b',
  'Transportation': '#f97316',
}

export interface DataPoint {
  year: number
  ratio: number
  confidence: string
  workerComp: number | null
}

export interface Profession {
  id: string
  profession: string
  industry: IndustryGroup
  summary: string
  data: DataPoint[]
}

export const professions: Profession[] = ${JSON.stringify(professions.map(p => ({
  id: p.id,
  profession: p.profession,
  industry: p.industry,
  summary: p.summary,
  data: p.data,
})), null, 2)}
`

writeFileSync(OUTPUT, ts)
console.log(`\nWrote ${OUTPUT}`)
