# Result: Ticket 045 — Mexican Spanish (`es-MX`)

## Outcome: SUCCESS

- Dump word count: 581
- Enrichment record count: 570
- Coverage: 98.1%

## Comparison vs. parent `es`

- Dump-level overlap with `es`: only 213 of ~570 unique terms (37%).
- 22 records flagged `is_novel_concept: true` for genuinely Mexican concepts: `albur`, `chingada`, `chingar_total_violation` (chingón), `malinchismo`, `mandilon`, `male_sexual_prowess_valorized` (machismo), Hispanic-sense `honor`, `piropo`, `darse_un_taco_de_ojo`, `fichera`, `table_dance`, etc.
- New section the parent `es` dump didn't have: the **albur** double-entendre tradition (`albur`, `alburero`, `alburera`, `cargar el albur`, `de pica`, `hablar con doble filo`).
- Mexican-specific organ slang the parent missed: `papacha`, `pucha`, `puntita`, `papayota`, `chichona`, `nalgón/a`, `culona`, `vergazo`, `cheto`, `cipote`, full `chingar` family.
- Octavio Paz's chingón/chingada axis is captured as novel concepts — these don't have clean English-derived registry slugs.

## Note on regional split decision

The es-MX run was triggered ad hoc after the project was marked `done`, to test the hypothesis that a Mexico-targeted prompt produces meaningfully different vocabulary than the parent `es` (which already had a `regional: "MX"` tag on ~21 records). Result: yes — the regional split surfaced ~50–80 genuinely Mexican-only terms plus the entire albur tradition that the parent's pan-Hispanic prompt didn't lean toward. Some apparent uniqueness is normalization noise (gendered slash variants, spelling alternates) that the deterministic merge step will collapse.

The parent `es` correctly excluded what looks like ~150 South American/Caribbean-only terms (`pinga`, `poronga`, `cachimba`, `culiar`, `caficho`, `camionera`) when given the Mexico-targeted prompt.

## Site integration

- Added `'es-MX': 'Mexican Spanish'` to `LANG_NAMES` in `src/SexualLanguageIndex.vue`.
- Re-ran `scripts/build-sli-data.mjs` → `src/data/sexual-language-index.json` regenerated with es-MX as 45th language.
- Site header now reads "Sexual language across 45 languages" with 24,774 total terms.

<!-- COMPLETE -->
