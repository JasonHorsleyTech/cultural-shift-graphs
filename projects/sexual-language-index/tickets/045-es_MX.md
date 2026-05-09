# Ticket 045: Mexican Spanish (`es-MX`)

## Goal

Produce two artifacts for language `es-MX` (Mexican Spanish — regional dialect):
1. `data/dump/es-MX-words.txt` — Pass 1 word dump (~600-1500 sexually-charged words)
2. `data/enriched/es-MX.jsonl` — Pass 2 enrichment (per-word metadata)

## Context

The general Spanish (`es`) ticket already captured 581 pan-Hispanic terms, of which ~21 carry a `regional: "MX"` tag. Jason is curious whether a Mexico-targeted dump surfaces meaningfully more vocabulary that `es` missed — chilango/regiomontano slang, prison/cartel argot, generation-specific street talk, indigenous-substrate terms (Nahuatl-derived), classist insults (`naco`, `fresa`, etc.), and whatever else only shows up when you point the prompt squarely at Mexico.

The hypothesis being tested: **does a national dialect produce a substantively different vocabulary inventory than the parent language?** If `es-MX` returns mostly the same ~580 words plus a thin layer of MX-only slang, the regional split was unnecessary. If it returns hundreds of unique terms, the split is justified for any future Latin American dialects.

## Step 1: Dump

```bash
cd /Users/jasonhorsley/code/graphable

if [ -f "projects/sexual-language-index/data/dump/es-MX-words.txt.raw.json" ] && [ ! -s "projects/sexual-language-index/data/dump/es-MX-words.txt" ]; then
  PATH="/opt/homebrew/bin:/usr/bin:/bin" jq -r '.result' "projects/sexual-language-index/data/dump/es-MX-words.txt.raw.json" > "projects/sexual-language-index/data/dump/es-MX-words.txt"
fi

PATH="/opt/homebrew/bin:/usr/bin:/bin" bash projects/sexual-language-index/scripts/dump-language.sh es-MX
```

## Step 2: Enrichment

Check if `projects/sexual-language-index/data/enriched/es-MX.jsonl` already exists with adequate coverage (≥ 80% of dump word count). If so, skip to Step 3.

**Do NOT run `enrich-batch.sh`.** Enrich the words directly using your own knowledge:

1. Read `projects/sexual-language-index/data/dump/es-MX-words.txt` — parse every line starting with `- ` to extract the word list.
2. Read `projects/sexual-language-index/data/registry/concepts.json` — match each word to a registry slug when possible.
3. For each word, write one JSONL record to `projects/sexual-language-index/data/enriched/es-MX.jsonl`. Process in batches of 100 — append to disk after each batch. If the file already has partial records, count and skip.

### JSONL schema (one flat record per line, no prose, no code fences):

```
{"term":"...","lang":"es-MX","script":"latin","romanization":"","category":"...","subcategory":"...","concept":"...","is_novel_concept":false,"register":"...","crude":N,"technical":N,"recognition_pct_current":N,"recognition_pct_peak":N,"peak_year":null,"regional":null,"definition":"...","english_term":"...","english_translation_quality":"direct|approximate|none","notes":""}
```

**Field values:**

- `script`: `"latin"`
- `romanization`: empty string (Latin script)
- `category`: `"organs"` | `"acts"` | `"fluids_states"` | `"desire_arousal_descriptors"` | `"identities_orientations"` | `"insults"` | `"sex_work_pornography"` | `"reproductive_contraceptive"` | `"kink_paraphilia"` | `"euphemisms_idioms"` | `"archaic_literary"` | `"internet_subculture"` | `"religious_moral_status"` | `"honor_shame_economy"` | `"third_gender_roles"` | `"ritual_spiritual_practice"`
- `register`: `"clinical"` | `"slang_neutral"` | `"slang_crude"` | `"euphemism"` | `"dated_slang"` | `"archaic"` | `"literary"` | `"subculture"` | `"moral_religious"` | `"loanword"` | `"classical_specialized"`
- `english_translation_quality`: `"direct"` | `"approximate"` | `"none"`
- `concept`: registry slug, or new snake_case slug if `is_novel_concept: true`
- `crude` / `technical`: independent 0-100
- `recognition_pct_current`: % of adult Mexican Spanish speakers who'd recognize the word in 2026
- `peak_year`: only for dated terms with a clear peak in living memory; null otherwise
- `regional`: sub-regional tag if known (e.g. `"chilango"`, `"norteño"`, `"yucateco"`); null if pan-Mexican
- `is_novel_concept`: true ONLY for concepts with no English equivalent — use sparingly

Include slurs, crude terms, and insults without omission.

## Step 3: Verify

```bash
DUMP_COUNT=$(grep -c '^- ' projects/sexual-language-index/data/dump/es-MX-words.txt || echo 0)
ENRICH_COUNT=$(wc -l < projects/sexual-language-index/data/enriched/es-MX.jsonl | tr -d ' ')
echo "dump=$DUMP_COUNT enrich=$ENRICH_COUNT"
```

Enrichment count must be ≥ 80% of dump count to succeed.

## Step 4: Write result

Only write the result file if coverage ≥ 80%.

Write `projects/sexual-language-index/results/045-es_MX.md`:

```markdown
# Result: Ticket 045 — Mexican Spanish (`es-MX`)

## Outcome: SUCCESS

- Dump word count: N
- Enrichment record count: N
- Coverage: N%

## Comparison vs. parent `es`
- Unique to `es-MX` (not present in `es` dump): N words
- Pan-Hispanic overlap: N words
- Notes on what the regional split surfaced that the parent missed.

<!-- COMPLETE -->
```
