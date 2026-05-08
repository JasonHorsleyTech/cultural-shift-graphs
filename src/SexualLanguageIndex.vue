<script setup lang="ts">
import { ref, computed } from 'vue'
import GraphWrapper from './GraphWrapper.vue'
import {
  records,
  languages,
  generatedAt,
  totalRecords,
  type SLIRecord,
} from './data/sexual-language-index'

const LANG_NAMES: Record<string, string> = {
  am: 'Amharic',
  ar: 'Arabic',
  bg: 'Bulgarian',
  bn: 'Bengali',
  cs: 'Czech',
  da: 'Danish',
  de: 'German',
  el: 'Greek',
  en: 'English',
  es: 'Spanish',
  fa: 'Persian',
  fi: 'Finnish',
  fr: 'French',
  ha: 'Hausa',
  he: 'Hebrew',
  hi: 'Hindi',
  hu: 'Hungarian',
  id: 'Indonesian',
  it: 'Italian',
  ja: 'Japanese',
  ko: 'Korean',
  ms: 'Malay',
  nl: 'Dutch',
  no: 'Norwegian',
  pl: 'Polish',
  'pt-BR': 'Portuguese (BR)',
  ro: 'Romanian',
  ru: 'Russian',
  sv: 'Swedish',
  sw: 'Swahili',
  ta: 'Tamil',
  th: 'Thai',
  tl: 'Tagalog',
  tr: 'Turkish',
  uk: 'Ukrainian',
  ur: 'Urdu',
  vi: 'Vietnamese',
  yo: 'Yoruba',
  zh: 'Chinese',
  zu: 'Zulu',
}
const langName = (code: string): string => LANG_NAMES[code] ?? code

const CATEGORY_LABELS: Record<string, string> = {
  organs: 'Organs',
  acts: 'Acts',
  kink_paraphilia: 'Kink / paraphilia',
  insults: 'Insults',
  sex_work_pornography: 'Sex work / porn',
  desire_arousal_descriptors: 'Desire / arousal',
  identities_orientations: 'Identities / orientations',
  euphemisms_idioms: 'Euphemisms / idioms',
  internet_subculture: 'Internet subculture',
  archaic_literary: 'Archaic / literary',
  fluids_states: 'Fluids / states',
  honor_shame_economy: 'Honor / shame',
  reproductive_contraceptive: 'Reproduction / contraception',
  religious_moral_status: 'Religious / moral',
  third_gender_roles: 'Third-gender roles',
  ritual_spiritual_practice: 'Ritual / spiritual',
}
const catLabel = (c: string): string => CATEGORY_LABELS[c] ?? c

const SUBCAT_LABELS: Record<string, string> = {
  penis: 'Penis',
  testicles: 'Testicles',
  scrotum: 'Scrotum',
  vagina: 'Vagina',
  vulva: 'Vulva',
  labia: 'Labia',
  clitoris: 'Clitoris',
  mons_pubis: 'Mons pubis',
  breasts: 'Breasts',
  nipple: 'Nipples',
  buttocks: 'Buttocks',
  anus: 'Anus',
  rectum: 'Rectum',
  perineum: 'Perineum',
}
const subcatLabel = (s: string): string => SUBCAT_LABELS[s] ?? s

const MALE_SUBCATS = new Set(['penis', 'testicles', 'scrotum'])
const FEMALE_SUBCATS = new Set(['vagina', 'clitoris', 'vulva', 'labia', 'mons_pubis', 'breasts', 'nipple'])

// ============================================================================
// Tabs
// ============================================================================

const TABS = [
  { id: 'dictionary', label: 'Dictionary' },
  { id: 'anatomy', label: 'Words per organ' },
  { id: 'ratio', label: 'M/F ratio' },
  { id: 'mix', label: 'Category mix' },
  { id: 'leaderboard', label: 'Category leaderboard' },
  { id: 'tone', label: 'Crude vs technical' },
  { id: 'novel', label: 'Untranslated concepts' },
] as const

const activeTab = ref<typeof TABS[number]['id']>('dictionary')

// ============================================================================
// Global controls
// ============================================================================

/** When true, counts/averages weight each term by its recognition_pct_current
 *  so a 95%-known clinical word counts much more than a 20%-known slang.
 *  When false, every term counts as 1. */
const weightByRecognition = ref(true)

/** Returns the weight a term contributes: 1 (count mode) or recognition/100. */
function weightOf(r: SLIRecord): number {
  if (!weightByRecognition.value) return 1
  const rec = r.recognition_pct_current
  return typeof rec === 'number' ? rec / 100 : 0
}

// ============================================================================
// Shared groupings
// ============================================================================

const recordsByLang = computed(() => {
  const m = new Map<string, SLIRecord[]>()
  for (const r of records) {
    const arr = m.get(r.lang) ?? []
    arr.push(r)
    m.set(r.lang, arr)
  }
  return m
})

const sortedLanguages = computed(() =>
  [...languages].sort((a, b) => langName(a.code).localeCompare(langName(b.code))),
)

// ============================================================================
// DICTIONARY (hierarchical: category > subcategory > terms)
// ============================================================================

type DictSubGroup = {
  key: string
  subcategory: string
  label: string
  terms: SLIRecord[]
  termCount: number
  langCount: number
  avgRecognition: number
  weightedScore: number
}

type DictCatGroup = {
  key: string
  category: string
  label: string
  subgroups: DictSubGroup[]
  termCount: number
  langCount: number
  weightedScore: number
}

const dictQuery = ref('')
const dictExpandedCats = ref<Set<string>>(new Set())
const dictExpandedSubs = ref<Set<string>>(new Set())

function toggleCat(key: string) {
  const next = new Set(dictExpandedCats.value)
  if (next.has(key)) next.delete(key)
  else next.add(key)
  dictExpandedCats.value = next
}
function toggleSub(key: string) {
  const next = new Set(dictExpandedSubs.value)
  if (next.has(key)) next.delete(key)
  else next.add(key)
  dictExpandedSubs.value = next
}

const dictionaryHierarchy = computed<DictCatGroup[]>(() => {
  const cats = new Map<string, Map<string, SLIRecord[]>>()
  for (const r of records) {
    const sub = r.subcategory ?? ''
    let subMap = cats.get(r.category)
    if (!subMap) {
      subMap = new Map()
      cats.set(r.category, subMap)
    }
    let arr = subMap.get(sub)
    if (!arr) {
      arr = []
      subMap.set(sub, arr)
    }
    arr.push(r)
  }

  const result: DictCatGroup[] = []
  for (const [cat, subMap] of cats) {
    const subgroups: DictSubGroup[] = []
    let catTermCount = 0
    let catWeighted = 0
    const catLangs = new Set<string>()
    for (const [sub, terms] of subMap) {
      const recs = terms.filter(t => typeof t.recognition_pct_current === 'number')
      const weightedScore = recs.reduce(
        (s, t) => s + (t.recognition_pct_current as number),
        0,
      )
      const avgRecognition = recs.length > 0 ? weightedScore / recs.length : 0
      const langCount = new Set(terms.map(t => t.lang)).size
      const sortedTerms = [...terms].sort(
        (a, b) =>
          (b.recognition_pct_current ?? 0) - (a.recognition_pct_current ?? 0),
      )
      subgroups.push({
        key: `${cat}::${sub || '__nosub'}`,
        subcategory: sub,
        label: sub ? subcatLabel(sub) : '(general)',
        terms: sortedTerms,
        termCount: terms.length,
        langCount,
        avgRecognition,
        weightedScore,
      })
      catTermCount += terms.length
      catWeighted += weightedScore
      for (const t of terms) catLangs.add(t.lang)
    }
    subgroups.sort((a, b) => b.termCount - a.termCount)

    // Bucket the long tail (subcategories with <3 terms) into a single "Other".
    const RARE_THRESHOLD = 3
    const main = subgroups.filter(g => g.termCount >= RARE_THRESHOLD)
    const rare = subgroups.filter(g => g.termCount < RARE_THRESHOLD)
    if (rare.length > 0) {
      const allRareTerms = rare.flatMap(g => g.terms).sort(
        (a, b) => (b.recognition_pct_current ?? 0) - (a.recognition_pct_current ?? 0),
      )
      const recs = allRareTerms.filter(t => typeof t.recognition_pct_current === 'number')
      const weightedScore = recs.reduce(
        (s, t) => s + (t.recognition_pct_current as number),
        0,
      )
      main.push({
        key: `${cat}::__rare`,
        subcategory: '__rare',
        label: `Other (${rare.length} rare subcategories)`,
        terms: allRareTerms,
        termCount: allRareTerms.length,
        langCount: new Set(allRareTerms.map(t => t.lang)).size,
        avgRecognition: recs.length > 0 ? weightedScore / recs.length : 0,
        weightedScore,
      })
    }

    result.push({
      key: cat,
      category: cat,
      label: catLabel(cat),
      subgroups: main,
      termCount: catTermCount,
      langCount: catLangs.size,
      weightedScore: catWeighted,
    })
  }
  result.sort((a, b) => b.termCount - a.termCount)
  return result
})

const dictionaryFiltered = computed<DictCatGroup[]>(() => {
  const q = dictQuery.value.trim().toLowerCase()
  if (!q) return dictionaryHierarchy.value

  const out: DictCatGroup[] = []
  for (const cat of dictionaryHierarchy.value) {
    const labelMatch = cat.label.toLowerCase().includes(q)
    const subgroups: DictSubGroup[] = []
    let catTermCount = 0
    let catWeighted = 0
    const catLangs = new Set<string>()
    for (const sub of cat.subgroups) {
      const subLabelMatch = sub.label.toLowerCase().includes(q)
      const matched = sub.terms.filter(t =>
        (t.term && t.term.toLowerCase().includes(q)) ||
        (t.romanization && t.romanization.toLowerCase().includes(q)) ||
        (t.definition && t.definition.toLowerCase().includes(q)) ||
        (t.english_term && t.english_term.toLowerCase().includes(q)) ||
        (t.concept && t.concept.toLowerCase().includes(q)),
      )
      const include = matched.length > 0 || subLabelMatch || labelMatch
      if (!include) continue
      const filtered = matched.length > 0 ? matched : sub.terms
      const recs = filtered.filter(t => typeof t.recognition_pct_current === 'number')
      const weightedScore = recs.reduce(
        (s, t) => s + (t.recognition_pct_current as number),
        0,
      )
      subgroups.push({
        ...sub,
        terms: filtered,
        termCount: filtered.length,
        langCount: new Set(filtered.map(t => t.lang)).size,
        weightedScore,
        avgRecognition: recs.length > 0 ? weightedScore / recs.length : 0,
      })
      catTermCount += filtered.length
      catWeighted += weightedScore
      for (const t of filtered) catLangs.add(t.lang)
    }
    if (subgroups.length === 0) continue
    out.push({
      ...cat,
      subgroups,
      termCount: catTermCount,
      langCount: catLangs.size,
      weightedScore: catWeighted,
    })
  }
  return out
})

const isDictSearching = computed(() => dictQuery.value.trim().length > 0)
function isCatOpen(key: string): boolean {
  return isDictSearching.value || dictExpandedCats.value.has(key)
}
function isSubOpen(key: string): boolean {
  return isDictSearching.value || dictExpandedSubs.value.has(key)
}

const dictTotalTerms = computed(() =>
  dictionaryFiltered.value.reduce((s, c) => s + c.termCount, 0),
)
const dictTotalSubcategories = computed(() =>
  dictionaryFiltered.value.reduce((s, c) => s + c.subgroups.length, 0),
)

// ============================================================================
// ANATOMY (Q1) — words per organ for selected language
// ============================================================================

const anatomyLang = ref('en')
const ORGANS_ORDER = [
  'penis', 'testicles', 'scrotum',
  'vagina', 'clitoris', 'vulva', 'labia', 'mons_pubis',
  'breasts', 'nipple',
  'buttocks', 'anus', 'rectum', 'perineum',
]

const anatomyCounts = computed(() => {
  const recs = recordsByLang.value.get(anatomyLang.value) ?? []
  const out = new Map<string, number>()
  for (const r of recs) {
    if (r.category !== 'organs' || !r.subcategory) continue
    out.set(r.subcategory, (out.get(r.subcategory) ?? 0) + weightOf(r))
  }
  const known = ORGANS_ORDER
    .filter(s => out.has(s))
    .map(s => ({ subcategory: s, count: out.get(s)! }))
  const others = [...out.entries()]
    .filter(([s]) => !ORGANS_ORDER.includes(s))
    .map(([s, c]) => ({ subcategory: s, count: c }))
    .sort((a, b) => b.count - a.count)
  return [...known, ...others]
})

const anatomyMaxCount = computed(() =>
  Math.max(1, ...anatomyCounts.value.map(c => c.count)),
)

const anatomyMaleTotal = computed(() =>
  anatomyCounts.value.filter(c => MALE_SUBCATS.has(c.subcategory)).reduce((s, c) => s + c.count, 0),
)
const anatomyFemaleTotal = computed(() =>
  anatomyCounts.value.filter(c => FEMALE_SUBCATS.has(c.subcategory)).reduce((s, c) => s + c.count, 0),
)
const anatomyNeutralTotal = computed(() =>
  anatomyCounts.value
    .filter(c => !MALE_SUBCATS.has(c.subcategory) && !FEMALE_SUBCATS.has(c.subcategory))
    .reduce((s, c) => s + c.count, 0),
)

/** Pie data: male / female / gender-neutral organ words. */
const anatomyMfnPie = computed(() => {
  const m = anatomyMaleTotal.value
  const f = anatomyFemaleTotal.value
  const n = anatomyNeutralTotal.value
  return [
    { label: 'Male', value: m, color: 'rgb(59,130,246)' },
    { label: 'Female', value: f, color: 'rgb(236,72,153)' },
    { label: 'Gender-neutral', value: n, color: 'rgb(148,163,184)' },
  ]
})

/** Pie data: top 5 organs by user request — penis, testicles, vagina, breasts, anus. */
const TOP_FIVE_ORGANS = ['penis', 'testicles', 'vagina', 'breasts', 'anus']
const TOP_FIVE_COLORS: Record<string, string> = {
  penis: 'rgb(37,99,235)',
  testicles: 'rgb(96,165,250)',
  vagina: 'rgb(219,39,119)',
  breasts: 'rgb(244,114,182)',
  anus: 'rgb(148,163,184)',
}
const anatomyTop5Pie = computed(() => {
  const byKey = new Map(anatomyCounts.value.map(c => [c.subcategory, c.count]))
  return TOP_FIVE_ORGANS.map(s => ({
    label: subcatLabel(s),
    value: byKey.get(s) ?? 0,
    color: TOP_FIVE_COLORS[s],
  }))
})

const anatomyBarsExpanded = ref(false)

// ============================================================================
// M/F RATIO (Q3)
// ============================================================================

const MALE_SUBCAT_ORDER = ['penis', 'testicles', 'scrotum'] as const
const FEMALE_SUBCAT_ORDER = ['vagina', 'clitoris', 'vulva', 'labia', 'mons_pubis', 'breasts', 'nipple'] as const

const SUBCAT_COLORS: Record<string, string> = {
  penis: '#1d4ed8',      // blue-700
  testicles: '#3b82f6',  // blue-500
  scrotum: '#93c5fd',    // blue-300
  vagina: '#9f1239',     // rose-800
  clitoris: '#be185d',   // pink-700
  vulva: '#c026d3',      // fuchsia-600
  labia: '#f43f5e',      // rose-500
  mons_pubis: '#f472b6', // pink-400
  breasts: '#fda4af',    // rose-300
  nipple: '#fbcfe8',     // pink-200
}

type RatioRow = {
  code: string
  name: string
  male: number
  female: number
  malePct: number
  bySubcat: Record<string, number>
}

const ratioRanking = computed<RatioRow[]>(() => {
  const out: RatioRow[] = []
  for (const lang of languages) {
    const recs = recordsByLang.value.get(lang.code) ?? []
    let m = 0, f = 0
    const bySubcat: Record<string, number> = {}
    for (const r of recs) {
      if (r.category !== 'organs' || !r.subcategory) continue
      const w = weightOf(r)
      if (MALE_SUBCATS.has(r.subcategory)) m += w
      else if (FEMALE_SUBCATS.has(r.subcategory)) f += w
      else continue
      bySubcat[r.subcategory] = (bySubcat[r.subcategory] ?? 0) + w
    }
    if (m + f < 5) continue
    out.push({
      code: lang.code,
      name: langName(lang.code),
      male: m,
      female: f,
      malePct: m / (m + f),
      bySubcat,
    })
  }
  return out.sort((a, b) => b.malePct - a.malePct)
})

function ratioSegments(row: RatioRow) {
  const total = row.male + row.female
  const segs: Array<{ subcategory: string; pct: number; color: string; count: number }> = []
  for (const sc of MALE_SUBCAT_ORDER) {
    const c = row.bySubcat[sc] ?? 0
    if (c > 0) segs.push({ subcategory: sc, pct: c / total, color: SUBCAT_COLORS[sc], count: c })
  }
  for (const sc of FEMALE_SUBCAT_ORDER) {
    const c = row.bySubcat[sc] ?? 0
    if (c > 0) segs.push({ subcategory: sc, pct: c / total, color: SUBCAT_COLORS[sc], count: c })
  }
  return segs
}

// ============================================================================
// CATEGORY MIX (Q4) — pick two languages, compare
// ============================================================================

const mixLangA = ref('en')
const mixLangB = ref('it')

function categoryBreakdown(langCode: string) {
  const recs = recordsByLang.value.get(langCode) ?? []
  const counts = new Map<string, number>()
  for (const r of recs) counts.set(r.category, (counts.get(r.category) ?? 0) + 1)
  const total = recs.length || 1
  const arr = [...counts.entries()].map(([cat, n]) => ({
    category: cat,
    count: n,
    pct: n / total,
  }))
  return { total, items: arr }
}

const mixA = computed(() => categoryBreakdown(mixLangA.value))
const mixB = computed(() => categoryBreakdown(mixLangB.value))

const mixAlignedCategories = computed(() => {
  const all = new Set<string>()
  for (const i of mixA.value.items) all.add(i.category)
  for (const i of mixB.value.items) all.add(i.category)
  // Order by combined size
  const combined = new Map<string, number>()
  for (const i of mixA.value.items) combined.set(i.category, (combined.get(i.category) ?? 0) + i.count)
  for (const i of mixB.value.items) combined.set(i.category, (combined.get(i.category) ?? 0) + i.count)
  return [...all].sort((a, b) => (combined.get(b) ?? 0) - (combined.get(a) ?? 0))
})

function mixPct(side: 'A' | 'B', cat: string): number {
  const arr = (side === 'A' ? mixA.value : mixB.value).items
  return arr.find(i => i.category === cat)?.pct ?? 0
}
function mixCount(side: 'A' | 'B', cat: string): number {
  const arr = (side === 'A' ? mixA.value : mixB.value).items
  return arr.find(i => i.category === cat)?.count ?? 0
}

// ============================================================================
// CATEGORY LEADERBOARD — pick a category, rank languages by share of vocab
// ============================================================================

const leaderboardCategory = ref<string>('honor_shame_economy')

type LeaderRow = {
  code: string
  name: string
  catCount: number      // raw count of category records (for display)
  totalCount: number    // raw count of all records in this lang
  catScore: number      // weighted (or raw if toggle off)
  totalScore: number
  pctOfVocab: number    // catScore / totalScore
  subBreakdown: Array<{ subcategory: string; label: string; score: number; pct: number; raw: number }>
}

const categoryLeaderboard = computed<LeaderRow[]>(() => {
  const out: LeaderRow[] = []
  for (const lang of languages) {
    const recs = recordsByLang.value.get(lang.code) ?? []
    if (recs.length < 30) continue
    const inCat = recs.filter(r => r.category === leaderboardCategory.value)
    if (inCat.length === 0) continue

    const totalScore = recs.reduce((s, r) => s + weightOf(r), 0)
    const catScore = inCat.reduce((s, r) => s + weightOf(r), 0)
    if (catScore === 0 || totalScore === 0) continue

    const subMap = new Map<string, { score: number; raw: number }>()
    for (const r of inCat) {
      const sub = r.subcategory ?? ''
      const cur = subMap.get(sub) ?? { score: 0, raw: 0 }
      cur.score += weightOf(r)
      cur.raw += 1
      subMap.set(sub, cur)
    }
    const subBreakdown = [...subMap.entries()]
      .map(([sub, v]) => ({
        subcategory: sub,
        label: sub ? subcatLabel(sub) : '(general)',
        score: v.score,
        pct: v.score / catScore,
        raw: v.raw,
      }))
      .sort((a, b) => b.score - a.score)

    out.push({
      code: lang.code,
      name: langName(lang.code),
      catCount: inCat.length,
      totalCount: recs.length,
      catScore,
      totalScore,
      pctOfVocab: catScore / totalScore,
      subBreakdown,
    })
  }
  return out.sort((a, b) => b.pctOfVocab - a.pctOfVocab)
})

const leaderboardAvgPct = computed(() => {
  const rows = categoryLeaderboard.value
  if (rows.length === 0) return 0
  return rows.reduce((s, r) => s + r.pctOfVocab, 0) / rows.length
})

const leaderboardExpandedLangs = ref<Set<string>>(new Set())
function toggleLeaderboardLang(code: string) {
  const next = new Set(leaderboardExpandedLangs.value)
  if (next.has(code)) next.delete(code)
  else next.add(code)
  leaderboardExpandedLangs.value = next
}

/** Categories ordered by total term count for the leaderboard category picker. */
const allCategoriesByPopularity = computed(() => {
  const counts = new Map<string, number>()
  for (const r of records) counts.set(r.category, (counts.get(r.category) ?? 0) + 1)
  return [...counts.entries()]
    .map(([cat, n]) => ({ cat, count: n }))
    .sort((a, b) => b.count - a.count)
})

// ============================================================================
// CRUDE vs TECHNICAL (Q5)
// ============================================================================

type ToneRow = {
  code: string
  name: string
  avgCrude: number
  avgTech: number
  diff: number
  n: number
  /** Share of terms (weighted by recognition when toggle on) with crude >= 70. */
  pctBoldCrude: number
  /** Share of terms with technical >= 70. */
  pctBoldTech: number
}

const toneRanking = computed<ToneRow[]>(() => {
  const out: ToneRow[] = []
  for (const lang of languages) {
    const recs = recordsByLang.value.get(lang.code) ?? []
    const withScores = recs.filter(r =>
      typeof r.crude === 'number' && typeof r.technical === 'number',
    )
    if (withScores.length < 20) continue
    let crudeSum = 0, techSum = 0, weightSum = 0
    let boldCrudeWeight = 0, boldTechWeight = 0
    for (const r of withScores) {
      const w = weightByRecognition.value
        ? (typeof r.recognition_pct_current === 'number' ? r.recognition_pct_current : 0)
        : 1
      crudeSum += (r.crude as number) * w
      techSum += (r.technical as number) * w
      weightSum += w
      if ((r.crude as number) >= 70) boldCrudeWeight += w
      if ((r.technical as number) >= 70) boldTechWeight += w
    }
    if (weightSum === 0) continue
    out.push({
      code: lang.code,
      name: langName(lang.code),
      avgCrude: crudeSum / weightSum,
      avgTech: techSum / weightSum,
      diff: (crudeSum - techSum) / weightSum,
      n: withScores.length,
      pctBoldCrude: boldCrudeWeight / weightSum,
      pctBoldTech: boldTechWeight / weightSum,
    })
  }
  return out.sort((a, b) => b.diff - a.diff)
})

// ============================================================================
// NOVEL CONCEPTS (Q7)
// ============================================================================

const novelQuery = ref('')

type NovelCatGroup = {
  category: string
  label: string
  records: SLIRecord[]
  termCount: number
  langCounts: Array<{ code: string; name: string; count: number }>
}

const novelHierarchy = computed<NovelCatGroup[]>(() => {
  const novelArr = records.filter(r =>
    r.is_novel_concept === true && r.english_translation_quality !== 'direct',
  )
  const byCat = new Map<string, SLIRecord[]>()
  for (const r of novelArr) {
    const arr = byCat.get(r.category) ?? []
    arr.push(r)
    byCat.set(r.category, arr)
  }
  const out: NovelCatGroup[] = []
  for (const [cat, recs] of byCat) {
    const langMap = new Map<string, number>()
    for (const r of recs) langMap.set(r.lang, (langMap.get(r.lang) ?? 0) + 1)
    const langCounts = [...langMap.entries()]
      .map(([code, count]) => ({ code, name: langName(code), count }))
      .sort((a, b) => b.count - a.count)
    out.push({
      category: cat,
      label: catLabel(cat),
      records: [...recs].sort(
        (a, b) => (b.recognition_pct_current ?? 0) - (a.recognition_pct_current ?? 0),
      ),
      termCount: recs.length,
      langCounts,
    })
  }
  return out.sort((a, b) => b.termCount - a.termCount)
})

const novelFiltered = computed<NovelCatGroup[]>(() => {
  const q = novelQuery.value.trim().toLowerCase()
  if (!q) return novelHierarchy.value
  const out: NovelCatGroup[] = []
  for (const cat of novelHierarchy.value) {
    const matched = cat.records.filter(r =>
      (r.term && r.term.toLowerCase().includes(q)) ||
      (r.romanization && r.romanization.toLowerCase().includes(q)) ||
      (r.definition && r.definition.toLowerCase().includes(q)) ||
      (r.concept && r.concept.toLowerCase().includes(q)) ||
      (r.english_term && r.english_term.toLowerCase().includes(q)) ||
      (r.lang && r.lang.toLowerCase().includes(q)) ||
      langName(r.lang).toLowerCase().includes(q),
    )
    if (matched.length === 0 && !cat.label.toLowerCase().includes(q)) continue
    const filtered = matched.length > 0 ? matched : cat.records
    const langMap = new Map<string, number>()
    for (const r of filtered) langMap.set(r.lang, (langMap.get(r.lang) ?? 0) + 1)
    const langCounts = [...langMap.entries()]
      .map(([code, count]) => ({ code, name: langName(code), count }))
      .sort((a, b) => b.count - a.count)
    out.push({ ...cat, records: filtered, termCount: filtered.length, langCounts })
  }
  return out
})

const novelExpandedCats = ref<Set<string>>(new Set())
function toggleNovelCat(cat: string) {
  const next = new Set(novelExpandedCats.value)
  if (next.has(cat)) next.delete(cat)
  else next.add(cat)
  novelExpandedCats.value = next
}
const isNovelSearching = computed(() => novelQuery.value.trim().length > 0)
function isNovelCatOpen(cat: string): boolean {
  return isNovelSearching.value || novelExpandedCats.value.has(cat)
}

// ============================================================================
// Headline stats
// ============================================================================

const totalNovel = computed(() => records.filter(r => r.is_novel_concept).length)

// ============================================================================
// Display helpers
// ============================================================================

/** Format a count for display: integer when whole, one decimal when fractional. */
function formatCount(n: number): string {
  if (!Number.isFinite(n)) return '0'
  if (Math.abs(n - Math.round(n)) < 0.05) return String(Math.round(n))
  return n.toFixed(1)
}

type PieSlice = { label: string; value: number; color: string }
function pieSlicePct(v: number, slices: PieSlice[]): number {
  const total = slices.reduce((s, x) => s + x.value, 0)
  return total > 0 ? Math.round(100 * v / total) : 0
}

/** SVG arc path for a pie slice from startAngle to endAngle (radians). */
function arcPath(cx: number, cy: number, r: number, start: number, end: number): string {
  const x1 = cx + r * Math.cos(start)
  const y1 = cy + r * Math.sin(start)
  const x2 = cx + r * Math.cos(end)
  const y2 = cy + r * Math.sin(end)
  const large = end - start > Math.PI ? 1 : 0
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`
}

function pieSliceArcs(slices: PieSlice[], radius: number) {
  const total = slices.reduce((s, x) => s + x.value, 0)
  if (total <= 0) return []
  let angle = -Math.PI / 2 // start at 12 o'clock
  return slices.map(s => {
    const span = (s.value / total) * Math.PI * 2
    const path = span >= Math.PI * 2 - 1e-6
      ? `M ${radius} 0 a ${radius} ${radius} 0 1 1 -0.001 0 z`
      : arcPath(0, 0, radius, angle, angle + span)
    angle += span
    return { ...s, path }
  })
}
</script>

<template>
  <GraphWrapper :title="`Sexual language across ${languages.length} languages`" maxWidth="6xl">
    <template #subtitle>
      How many words does each language have for each body part, act, identity, or
      desire — and which concepts exist in some languages but not others.
      <span class="block mt-2 text-sm text-[var(--text-muted)]">
        {{ totalRecords.toLocaleString() }} terms across {{ languages.length }} languages.
        {{ totalNovel.toLocaleString() }} concepts have no direct English equivalent.
        Generated {{ new Date(generatedAt).toLocaleDateString() }}.
        Research is partial — more languages and refinements still landing.
      </span>
    </template>

    <!-- Tab strip -->
    <div class="mt-6 flex flex-wrap gap-1 border-b border-[var(--border)]">
      <button
        v-for="t in TABS"
        :key="t.id"
        @click="activeTab = t.id"
        :class="[
          'px-3 py-2 text-sm cursor-pointer border-b-2 -mb-px transition-colors',
          activeTab === t.id
            ? 'border-[var(--text-primary)] text-[var(--text-primary)] font-medium'
            : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]',
        ]"
      >
        {{ t.label }}
      </button>
    </div>

    <!-- Global weighting toggle (affects Words per organ, M/F ratio, Category leaderboard, Crude vs technical) -->
    <div
      v-if="['anatomy', 'ratio', 'leaderboard', 'tone'].includes(activeTab)"
      class="mt-4 flex items-center gap-2 text-sm"
    >
      <label class="flex items-center gap-2 cursor-pointer">
        <input v-model="weightByRecognition" type="checkbox" />
        Weight by recognition
      </label>
      <span class="text-xs text-[var(--text-muted)]">
        ({{ weightByRecognition
          ? 'a 95%-known word counts ~3× a 30%-known one — popularity-weighted'
          : 'every word counts the same — raw count'
        }})
      </span>
    </div>

    <!-- =================================================================== -->
    <!-- DICTIONARY (hierarchical) -->
    <!-- =================================================================== -->
    <section v-if="activeTab === 'dictionary'" class="mt-6">
      <p class="text-sm text-[var(--text-secondary)]">
        Vocabulary organized by category and body part. Click a category to expand its subcategories;
        click a subcategory to see every term across every language, sorted by how widely each term is recognized.
      </p>

      <div class="mt-4">
        <input
          v-model="dictQuery"
          type="search"
          placeholder="Search term, romanization, definition, English meaning…"
          class="w-full px-3 py-2 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
        />
      </div>

      <p class="mt-3 text-xs text-[var(--text-muted)]">
        {{ dictionaryFiltered.length }} categories ·
        {{ dictTotalSubcategories }} subcategories ·
        {{ dictTotalTerms.toLocaleString() }} terms{{ isDictSearching ? ' match' : '' }}.
      </p>

      <ul class="mt-3 divide-y divide-[var(--border)]">
        <li v-for="cat in dictionaryFiltered" :key="cat.key">
          <button
            @click="toggleCat(cat.key)"
            class="w-full flex items-baseline gap-3 text-left cursor-pointer hover:bg-[var(--bg-surface)] -mx-2 px-2 py-2.5 rounded"
          >
            <span class="text-[var(--text-muted)] text-xs w-4 text-center select-none">
              {{ isCatOpen(cat.key) ? '▾' : '▸' }}
            </span>
            <span class="text-base font-semibold">{{ cat.label }}</span>
            <span class="ml-auto text-xs text-[var(--text-muted)] whitespace-nowrap">
              {{ cat.termCount.toLocaleString() }} terms
              · {{ cat.subgroups.length }} {{ cat.subgroups.length === 1 ? 'subcategory' : 'subcategories' }}
              · {{ cat.langCount }} langs
            </span>
          </button>

          <ul v-if="isCatOpen(cat.key)" class="ml-3 mb-2 space-y-1 border-l border-[var(--border)]">
            <li v-for="sub in cat.subgroups" :key="sub.key" class="pl-3">
              <button
                @click="toggleSub(sub.key)"
                class="w-full flex items-baseline gap-3 text-left cursor-pointer hover:bg-[var(--bg-surface)] -mx-2 px-2 py-1.5 rounded text-sm"
              >
                <span class="text-[var(--text-muted)] text-xs w-4 text-center select-none">
                  {{ isSubOpen(sub.key) ? '▾' : '▸' }}
                </span>
                <span class="text-[var(--text-primary)]">{{ sub.label }}</span>
                <span class="ml-auto text-xs text-[var(--text-muted)] whitespace-nowrap">
                  {{ sub.termCount.toLocaleString() }} terms · {{ sub.langCount }} langs
                  <span v-if="sub.avgRecognition > 0">· {{ Math.round(sub.avgRecognition) }}% avg known</span>
                </span>
              </button>

              <ul v-if="isSubOpen(sub.key)" class="mt-1 mb-2 ml-4 space-y-2 border-l border-[var(--border)] pl-3">
                <li v-for="(t, i) in sub.terms" :key="`${sub.key}:${i}`" class="text-sm">
                  <div class="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span class="text-xs px-1.5 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border)] font-mono">
                      {{ t.lang }}
                    </span>
                    <span class="text-[var(--text-muted)] text-xs">{{ langName(t.lang) }}</span>
                    <span class="font-semibold">{{ t.term }}</span>
                    <span v-if="t.romanization" class="text-[var(--text-muted)]">/{{ t.romanization }}/</span>
                    <span v-if="t.english_term && t.english_term.toLowerCase() !== sub.label.toLowerCase()" class="text-xs text-[var(--text-muted)]">
                      ≈ {{ t.english_term }}
                    </span>
                    <span v-if="t.register" class="text-xs italic text-[var(--text-muted)]">{{ t.register }}</span>
                    <span class="ml-auto text-xs text-[var(--text-muted)] font-mono whitespace-nowrap">
                      <span v-if="t.recognition_pct_current != null">{{ Math.round(t.recognition_pct_current) }}% known</span>
                      <span v-if="t.crude != null" class="ml-2 text-amber-500/90">crude {{ Math.round(t.crude) }}</span>
                      <span v-if="t.technical != null" class="ml-2 text-cyan-500/90">tech {{ Math.round(t.technical) }}</span>
                    </span>
                  </div>
                  <div v-if="t.definition" class="text-[var(--text-secondary)] mt-0.5">
                    {{ t.definition }}
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <!-- =================================================================== -->
    <!-- ANATOMY -->
    <!-- =================================================================== -->
    <section v-if="activeTab === 'anatomy'" class="mt-6">
      <p class="text-sm text-[var(--text-secondary)]">
        Distinct words for each body part in the chosen language. Switch languages to compare.
      </p>

      <div class="mt-4">
        <div class="text-xs text-[var(--text-muted)] mb-2">
          Language: <strong class="text-[var(--text-primary)]">{{ langName(anatomyLang) }}</strong>
          <span class="ml-2">(hover any chip to switch)</span>
        </div>
        <div class="flex flex-wrap gap-1">
          <button
            v-for="lang in sortedLanguages"
            :key="lang.code"
            @mouseenter="anatomyLang = lang.code"
            @click="anatomyLang = lang.code"
            :class="[
              'px-2 py-1 text-xs rounded border cursor-pointer font-mono transition-colors',
              anatomyLang === lang.code
                ? 'bg-[var(--text-primary)] text-[var(--bg-page)] border-[var(--text-primary)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]',
            ]"
            :title="langName(lang.code)"
          >
            {{ lang.code }}
          </button>
        </div>
      </div>

      <div v-if="anatomyCounts.length === 0" class="mt-6 text-[var(--text-muted)] text-sm">
        No organ-category data for this language yet.
      </div>

      <template v-else>
        <!-- Pie charts -->
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-sm font-medium text-[var(--text-secondary)]">Male / Female / Gender-neutral</h3>
            <div class="mt-3 flex items-center gap-6">
              <svg :width="160" :height="160" viewBox="-100 -100 200 200" class="shrink-0">
                <path
                  v-for="slice in pieSliceArcs(anatomyMfnPie, 95)"
                  :key="slice.label"
                  :d="slice.path"
                  :fill="slice.color"
                  stroke="var(--bg-page)"
                  stroke-width="1.5"
                />
              </svg>
              <ul class="text-sm space-y-1.5">
                <li v-for="s in anatomyMfnPie" :key="s.label" class="flex items-center gap-2">
                  <span class="inline-block w-3 h-3 rounded-sm" :style="{ background: s.color }"></span>
                  <span class="text-[var(--text-secondary)]">{{ s.label }}</span>
                  <span class="font-mono text-[var(--text-primary)]">
                    {{ formatCount(s.value) }}
                    <span class="text-[var(--text-muted)] text-xs">
                      ({{ pieSlicePct(s.value, anatomyMfnPie) }}%)
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-medium text-[var(--text-secondary)]">Top 5 organs (penis · testicles · vagina · breasts · anus)</h3>
            <div class="mt-3 flex items-center gap-6">
              <svg :width="160" :height="160" viewBox="-100 -100 200 200" class="shrink-0">
                <path
                  v-for="slice in pieSliceArcs(anatomyTop5Pie, 95)"
                  :key="slice.label"
                  :d="slice.path"
                  :fill="slice.color"
                  stroke="var(--bg-page)"
                  stroke-width="1.5"
                />
              </svg>
              <ul class="text-sm space-y-1.5">
                <li v-for="s in anatomyTop5Pie" :key="s.label" class="flex items-center gap-2">
                  <span class="inline-block w-3 h-3 rounded-sm" :style="{ background: s.color }"></span>
                  <span class="text-[var(--text-secondary)]">{{ s.label }}</span>
                  <span class="font-mono text-[var(--text-primary)]">
                    {{ formatCount(s.value) }}
                    <span class="text-[var(--text-muted)] text-xs">
                      ({{ pieSlicePct(s.value, anatomyTop5Pie) }}%)
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bar chart per organ (collapsed by default) -->
        <button
          @click="anatomyBarsExpanded = !anatomyBarsExpanded"
          class="mt-10 flex items-center gap-2 text-sm text-[var(--text-secondary)] cursor-pointer hover:text-[var(--text-primary)]"
        >
          <span class="text-xs w-4 text-center select-none">
            {{ anatomyBarsExpanded ? '▾' : '▸' }}
          </span>
          <span class="font-medium">
            All organ subcategories ({{ anatomyCounts.length }})
          </span>
        </button>
        <div v-if="anatomyBarsExpanded" class="mt-3 space-y-2">
          <div
            v-for="row in anatomyCounts"
            :key="row.subcategory"
            class="grid grid-cols-[140px_1fr_60px] items-center gap-3 text-sm"
          >
            <div class="text-right text-[var(--text-secondary)]">{{ subcatLabel(row.subcategory) }}</div>
            <div class="h-6 bg-[var(--bg-surface)] rounded overflow-hidden">
              <div
                class="h-full"
                :class="MALE_SUBCATS.has(row.subcategory) ? 'bg-blue-500/70' : FEMALE_SUBCATS.has(row.subcategory) ? 'bg-pink-500/70' : 'bg-slate-400/70'"
                :style="{ width: (100 * row.count / anatomyMaxCount) + '%' }"
              ></div>
            </div>
            <div class="text-[var(--text-primary)] font-mono">{{ formatCount(row.count) }}</div>
          </div>
        </div>
      </template>
    </section>

    <!-- =================================================================== -->
    <!-- M/F RATIO -->
    <!-- =================================================================== -->
    <section v-if="activeTab === 'ratio'" class="mt-6">
      <p class="text-sm text-[var(--text-secondary)]">
        Of all sexual-organ words in each language, what share refer to male vs female anatomy — broken down by body part.
        Sorted most male-skewed (top) to most female-skewed (bottom). Bar is normalized so male + female = 100% (neutral organs excluded).
      </p>

      <!-- Legend -->
      <div class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
        <span
          v-for="sc in [...MALE_SUBCAT_ORDER, ...FEMALE_SUBCAT_ORDER]"
          :key="sc"
          class="inline-flex items-center gap-1.5"
        >
          <span class="inline-block w-3 h-3 rounded-sm" :style="{ background: SUBCAT_COLORS[sc] }"></span>
          <span class="text-[var(--text-secondary)]">{{ subcatLabel(sc) }}</span>
        </span>
      </div>

      <div v-if="ratioRanking.length === 0" class="mt-6 text-[var(--text-muted)] text-sm">No data yet.</div>

      <div v-else class="mt-6 space-y-2">
        <div
          v-for="row in ratioRanking"
          :key="row.code"
          class="grid grid-cols-[140px_1fr_140px] items-center gap-3 text-sm"
        >
          <div class="text-right">
            <div class="text-[var(--text-primary)]">{{ row.name }}</div>
            <div class="text-xs text-[var(--text-muted)] font-mono">{{ row.code }}</div>
          </div>
          <div class="h-6 rounded overflow-hidden flex border border-[var(--border)]">
            <div
              v-for="seg in ratioSegments(row)"
              :key="seg.subcategory"
              class="h-full"
              :style="{ width: (100 * seg.pct) + '%', background: seg.color }"
              :title="`${subcatLabel(seg.subcategory)}: ${formatCount(seg.count)} (${Math.round(seg.pct * 100)}%)`"
            ></div>
          </div>
          <div class="text-xs text-[var(--text-muted)] font-mono">
            {{ Math.round(row.malePct * 100) }}% / {{ Math.round((1 - row.malePct) * 100) }}%
          </div>
        </div>
      </div>

      <p class="mt-4 text-xs text-[var(--text-muted)]">
        Hover any segment to see the count. Blues = male anatomy (penis → scrotum). Pinks/reds = female anatomy (vagina → nipple).
        Languages with fewer than 5 organ words are excluded.
      </p>
    </section>

    <!-- =================================================================== -->
    <!-- CATEGORY MIX -->
    <!-- =================================================================== -->
    <section v-if="activeTab === 'mix'" class="mt-6">
      <p class="text-sm text-[var(--text-secondary)]">
        Pick two languages to compare. Each row shows what share of that language's vocabulary falls into a given category.
      </p>

      <div class="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div class="flex items-center gap-2">
          <label class="text-[var(--text-muted)]">Language A:</label>
          <select
            v-model="mixLangA"
            class="flex-1 px-3 py-2 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)] cursor-pointer"
          >
            <option v-for="lang in sortedLanguages" :key="lang.code" :value="lang.code">
              {{ langName(lang.code) }} ({{ lang.code }})
            </option>
          </select>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-[var(--text-muted)]">Language B:</label>
          <select
            v-model="mixLangB"
            class="flex-1 px-3 py-2 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)] cursor-pointer"
          >
            <option v-for="lang in sortedLanguages" :key="lang.code" :value="lang.code">
              {{ langName(lang.code) }} ({{ lang.code }})
            </option>
          </select>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-[140px_1fr_1fr] gap-x-3 gap-y-2 text-sm items-center">
        <div></div>
        <div class="text-center font-semibold">{{ langName(mixLangA) }} <span class="text-xs text-[var(--text-muted)]">({{ mixA.total.toLocaleString() }})</span></div>
        <div class="text-center font-semibold">{{ langName(mixLangB) }} <span class="text-xs text-[var(--text-muted)]">({{ mixB.total.toLocaleString() }})</span></div>

        <template v-for="cat in mixAlignedCategories" :key="cat">
          <div class="text-right text-[var(--text-secondary)] text-xs">{{ catLabel(cat) }}</div>
          <div>
            <div class="h-6 bg-[var(--bg-surface)] rounded overflow-hidden flex items-center">
              <div
                class="h-full bg-emerald-500/60 flex items-center justify-end pr-2 text-xs text-white"
                :style="{ width: (100 * mixPct('A', cat)) + '%' }"
              >
                <span v-if="mixPct('A', cat) > 0.06">{{ Math.round(mixPct('A', cat) * 100) }}%</span>
              </div>
              <span class="ml-2 text-xs text-[var(--text-muted)] font-mono">{{ mixCount('A', cat) }}</span>
            </div>
          </div>
          <div>
            <div class="h-6 bg-[var(--bg-surface)] rounded overflow-hidden flex items-center">
              <div
                class="h-full bg-orange-500/60 flex items-center justify-end pr-2 text-xs text-white"
                :style="{ width: (100 * mixPct('B', cat)) + '%' }"
              >
                <span v-if="mixPct('B', cat) > 0.06">{{ Math.round(mixPct('B', cat) * 100) }}%</span>
              </div>
              <span class="ml-2 text-xs text-[var(--text-muted)] font-mono">{{ mixCount('B', cat) }}</span>
            </div>
          </div>
        </template>
      </div>
    </section>

    <!-- =================================================================== -->
    <!-- CATEGORY LEADERBOARD -->
    <!-- =================================================================== -->
    <section v-if="activeTab === 'leaderboard'" class="mt-6">
      <p class="text-sm text-[var(--text-secondary)]">
        For a given category, which languages dedicate the largest share of their sexual vocabulary to it?
        Click a language row to see its subcategory breakdown within this category.
      </p>

      <div class="mt-4 flex flex-wrap gap-2 items-baseline">
        <span class="text-[var(--text-muted)] text-sm">Category:</span>
        <button
          v-for="c in allCategoriesByPopularity"
          :key="c.cat"
          @click="leaderboardCategory = c.cat"
          @mouseenter="leaderboardCategory = c.cat"
          :class="[
            'px-2.5 py-1 text-xs rounded border cursor-pointer transition-colors',
            leaderboardCategory === c.cat
              ? 'bg-[var(--text-primary)] text-[var(--bg-page)] border-[var(--text-primary)]'
              : 'border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]',
          ]"
        >
          {{ catLabel(c.cat) }}
          <span class="opacity-60">{{ c.count.toLocaleString() }}</span>
        </button>
      </div>

      <p class="mt-4 text-xs text-[var(--text-muted)]">
        Average across the {{ categoryLeaderboard.length }} languages with enough data:
        <strong class="text-[var(--text-primary)]">{{ (leaderboardAvgPct * 100).toFixed(1) }}%</strong>
        of vocabulary is in <em>{{ catLabel(leaderboardCategory) }}</em>.
      </p>

      <div v-if="categoryLeaderboard.length === 0" class="mt-6 text-[var(--text-muted)] text-sm">
        No data in this category yet.
      </div>

      <div v-else class="mt-4 space-y-1">
        <template v-for="row in categoryLeaderboard" :key="row.code">
          <button
            @click="toggleLeaderboardLang(row.code)"
            class="w-full grid grid-cols-[140px_1fr_140px] items-center gap-3 text-sm cursor-pointer hover:bg-[var(--bg-surface)] -mx-2 px-2 py-1.5 rounded text-left"
          >
            <div class="text-right">
              <span class="text-[var(--text-muted)] text-xs w-4 inline-block text-center select-none">
                {{ leaderboardExpandedLangs.has(row.code) ? '▾' : '▸' }}
              </span>
              <span class="text-[var(--text-primary)]">{{ row.name }}</span>
            </div>
            <div class="h-5 bg-[var(--bg-surface)] rounded overflow-hidden">
              <div
                class="h-full bg-emerald-500/70"
                :style="{ width: (100 * row.pctOfVocab / Math.max(0.001, categoryLeaderboard[0].pctOfVocab)) + '%' }"
              ></div>
            </div>
            <div class="text-xs text-[var(--text-muted)] font-mono whitespace-nowrap">
              {{ (row.pctOfVocab * 100).toFixed(1) }}%
              <span class="opacity-60">· {{ row.catCount }}/{{ row.totalCount }}</span>
            </div>
          </button>

          <div
            v-if="leaderboardExpandedLangs.has(row.code)"
            class="ml-[156px] mb-2 mr-3 space-y-1"
          >
            <div class="text-xs text-[var(--text-muted)] mb-1">
              Subcategory breakdown within <em>{{ catLabel(leaderboardCategory) }}</em>:
            </div>
            <div
              v-for="sub in row.subBreakdown"
              :key="`${row.code}:${sub.subcategory}`"
              class="grid grid-cols-[160px_1fr_70px] items-center gap-3 text-xs"
            >
              <div class="text-right text-[var(--text-secondary)]">{{ sub.label }}</div>
              <div class="h-4 bg-[var(--bg-surface)] rounded overflow-hidden">
                <div
                  class="h-full bg-emerald-500/40"
                  :style="{ width: (100 * sub.pct) + '%' }"
                ></div>
              </div>
              <div class="text-[var(--text-muted)] font-mono">
                {{ (sub.pct * 100).toFixed(0) }}% <span class="opacity-60">· {{ sub.raw }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>

    <!-- =================================================================== -->
    <!-- CRUDE vs TECHNICAL -->
    <!-- =================================================================== -->
    <section v-if="activeTab === 'tone'" class="mt-6">
      <p class="text-sm text-[var(--text-secondary)]">
        Average <em>crude</em> and <em>technical</em> scores per language (each term is rated 0-100 on both axes).
        Sorted by which languages skew most crude (top) vs most clinical (bottom).
      </p>

      <div v-if="toneRanking.length === 0" class="mt-6 text-[var(--text-muted)] text-sm">No data yet.</div>

      <div v-else class="mt-6 space-y-2">
        <div class="grid grid-cols-[140px_1fr_180px] items-center gap-3 text-xs text-[var(--text-muted)] px-1">
          <div></div>
          <div class="text-center">avg crude ← → avg technical</div>
          <div class="text-right">% bold crude (≥70) / % bold tech (≥70)</div>
        </div>
        <div
          v-for="row in toneRanking"
          :key="row.code"
          class="grid grid-cols-[140px_1fr_180px] items-center gap-3 text-sm"
        >
          <div class="text-right">
            <div class="text-[var(--text-primary)]">{{ row.name }}</div>
            <div class="text-xs text-[var(--text-muted)] font-mono">{{ row.code }} · n={{ row.n }}</div>
          </div>
          <div class="relative h-8">
            <div class="absolute inset-y-0 left-1/2 w-px bg-[var(--border)]"></div>
            <div
              class="absolute top-1 bottom-1 bg-amber-500/70 rounded-l flex items-center justify-end pr-2 text-xs text-white"
              :style="{
                left: 'calc(50% - ' + (row.avgCrude / 2) + '%)',
                width: (row.avgCrude / 2) + '%',
              }"
            >
              <span v-if="row.avgCrude > 20">{{ Math.round(row.avgCrude) }}</span>
            </div>
            <div
              class="absolute top-1 bottom-1 bg-cyan-500/70 rounded-r flex items-center pl-2 text-xs text-white"
              :style="{
                left: '50%',
                width: (row.avgTech / 2) + '%',
              }"
            >
              <span v-if="row.avgTech > 20">{{ Math.round(row.avgTech) }}</span>
            </div>
          </div>
          <div class="text-xs font-mono whitespace-nowrap text-right">
            <span class="text-amber-500">{{ Math.round(row.pctBoldCrude * 100) }}%</span>
            <span class="text-[var(--text-muted)] mx-1">/</span>
            <span class="text-cyan-500">{{ Math.round(row.pctBoldTech * 100) }}%</span>
          </div>
        </div>
      </div>

      <p class="mt-4 text-xs text-[var(--text-muted)]">
        <strong>Amber</strong> bar = avg crude. <strong>Cyan</strong> = avg technical (each 0-100, weighted by recognition when toggle on).
        The <strong>bold percentages</strong> on the right answer "is this language polarized or all-mid":
        % of vocabulary that's <em>strongly</em> crude (≥70) or <em>strongly</em> technical (≥70).
        High in both = polarized (e.g. clear clinical and clear vulgar terms). Low in both = homogeneous middle.
      </p>
    </section>

    <!-- =================================================================== -->
    <!-- NOVEL CONCEPTS (categorical) -->
    <!-- =================================================================== -->
    <section v-if="activeTab === 'novel'" class="mt-6">
      <p class="text-sm text-[var(--text-secondary)]">
        Terms with no direct English equivalent, grouped by category. Click a category to expand —
        watch the language tags to see when one language dominates a concept space.
      </p>

      <div class="mt-4">
        <input
          v-model="novelQuery"
          type="search"
          placeholder="Search term, romanization, definition, language…"
          class="w-full px-3 py-2 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
        />
      </div>

      <p class="mt-3 text-xs text-[var(--text-muted)]">
        {{ novelFiltered.length }} categories ·
        {{ novelFiltered.reduce((s, c) => s + c.termCount, 0).toLocaleString() }} concepts{{ isNovelSearching ? ' match' : '' }}.
      </p>

      <ul class="mt-3 divide-y divide-[var(--border)]">
        <li v-for="cat in novelFiltered" :key="`novel-cat:${cat.category}`">
          <button
            @click="toggleNovelCat(cat.category)"
            class="w-full flex items-baseline gap-3 text-left cursor-pointer hover:bg-[var(--bg-surface)] -mx-2 px-2 py-2.5 rounded"
          >
            <span class="text-[var(--text-muted)] text-xs w-4 text-center select-none">
              {{ isNovelCatOpen(cat.category) ? '▾' : '▸' }}
            </span>
            <span class="text-base font-semibold">{{ cat.label }}</span>
            <span class="ml-auto text-xs text-[var(--text-muted)] whitespace-nowrap">
              {{ cat.termCount.toLocaleString() }} concepts ·
              <span v-for="(l, i) in cat.langCounts.slice(0, 5)" :key="l.code">
                <span class="font-mono">{{ l.code }}</span>{{ l.count > 1 ? ` ${l.count}` : '' }}<span v-if="i < Math.min(cat.langCounts.length, 5) - 1">·</span>
              </span>
              <span v-if="cat.langCounts.length > 5" class="ml-1">+{{ cat.langCounts.length - 5 }} more</span>
            </span>
          </button>

          <ul v-if="isNovelCatOpen(cat.category)" class="ml-3 mb-2 space-y-3 border-l border-[var(--border)] pl-4">
            <li
              v-for="(r, i) in cat.records"
              :key="`novel:${cat.category}:${r.lang}:${r.term}:${i}`"
              class="text-sm"
            >
              <div class="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span class="text-base font-semibold">{{ r.term }}</span>
                <span v-if="r.romanization" class="text-[var(--text-muted)]">/{{ r.romanization }}/</span>
                <span class="text-xs px-1.5 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border)] font-mono">
                  {{ langName(r.lang) }}
                </span>
                <span v-if="r.subcategory" class="text-xs text-[var(--text-muted)]">{{ subcatLabel(r.subcategory) }}</span>
                <span v-if="r.recognition_pct_current != null" class="ml-auto text-xs text-[var(--text-muted)] whitespace-nowrap">
                  {{ Math.round(r.recognition_pct_current) }}% known
                </span>
              </div>
              <div v-if="r.english_term" class="mt-1 text-xs text-[var(--text-muted)]">
                Closest English: <span class="text-[var(--text-secondary)]">{{ r.english_term }}</span>
                <span v-if="r.english_translation_quality"> ({{ r.english_translation_quality }})</span>
              </div>
              <div v-if="r.definition" class="mt-1 text-[var(--text-secondary)]">{{ r.definition }}</div>
              <div v-if="r.notes" class="mt-1 text-xs text-[var(--text-muted)] italic">{{ r.notes }}</div>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </GraphWrapper>
</template>
