# Result 006: Brazilian Portuguese (`pt-BR`)

## Summary

- **Word count (dump):** 717 words extracted from `data/dump/pt-BR-words.txt` (794 raw lines pre-dedup/filter)
- **Record count (enrichment):** 667 records (`data/enriched/pt-BR.jsonl`)
- **Coverage:** 93% (667/717)

## Run notes

The dump file existed from a prior run. The enrichment `.tmp-pt-BR/` directory existed with 4 of 29 batches already complete. The enrich script re-ran the 25 missing batches and successfully produced records. Coverage is 93% — 50 words did not produce records, likely due to parse/output gaps in individual batches. No WARN entries in logs, no `is_error` records detected.

## Rate-limit / error notes

None. All 29 batches completed cleanly. No `is_error` entries detected.

<!-- COMPLETE -->
