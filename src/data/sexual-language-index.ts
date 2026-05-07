/** Sexual language index — multi-language vocabulary dataset.
 *  Generated from projects/sexual-language-index/data/enriched/*.jsonl
 *  via scripts/build-sli-data.mjs. Re-run that script after every research
 *  tick to refresh; the bundle imports the JSON directly. */

import raw from './sexual-language-index.json'

export type SLIRecord = {
  term: string
  lang: string
  script?: string | null
  romanization?: string | null
  category: string
  subcategory?: string | null
  concept?: string | null
  is_novel_concept?: boolean
  register?: string | null
  crude?: number | null
  technical?: number | null
  recognition_pct_current?: number | null
  recognition_pct_peak?: number | null
  peak_year?: number | null
  regional?: string | null
  definition?: string | null
  english_term?: string | null
  english_translation_quality?: string | null
  notes?: string | null
}

export type LanguageMeta = { code: string; count: number }

type Dataset = {
  generatedAt: string
  totalRecords: number
  languages: LanguageMeta[]
  records: SLIRecord[]
}

const dataset = raw as Dataset

export const records: SLIRecord[] = dataset.records
export const languages: LanguageMeta[] = dataset.languages
export const generatedAt: string = dataset.generatedAt
export const totalRecords: number = dataset.totalRecords
