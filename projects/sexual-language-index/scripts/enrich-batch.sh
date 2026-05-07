#!/bin/bash
# enrich-batch.sh <lang>
# Pass-2 enrichment for a language. Reads data/dump/<lang>-words.txt,
# splits into 50-word batches, fires N parallel `claude --print` Sonnet
# calls, waits for all, then concatenates into data/enriched/<lang>.jsonl.
#
# Idempotent: skips batches that already have output files.

set -e

LANG_CODE="$1"
if [ -z "$LANG_CODE" ]; then
  echo "usage: enrich-batch.sh <lang-code>"
  exit 1
fi

PROJECT_DIR="/Users/jasonhorsley/code/graphable/projects/sexual-language-index"
DUMP_FILE="$PROJECT_DIR/data/dump/$LANG_CODE-words.txt"
ENRICH_DIR="$PROJECT_DIR/data/enriched"
TMP_DIR="$ENRICH_DIR/.tmp-$LANG_CODE"
LOG_DIR="$PROJECT_DIR/scripts/enrich-logs/$LANG_CODE"
REGISTRY="$PROJECT_DIR/data/registry/concepts.json"
SCRIPTS="$PROJECT_DIR/scripts"

if [ ! -f "$DUMP_FILE" ]; then
  echo "ERROR: dump file not found: $DUMP_FILE"
  exit 1
fi

mkdir -p "$TMP_DIR" "$LOG_DIR" "$ENRICH_DIR"

echo "=== Enrich Pass 2 :: $LANG_CODE ==="
echo "dump file: $DUMP_FILE"
echo "tmp dir:   $TMP_DIR"

# Step 1: extract words and split into 25-word batches
node "$SCRIPTS/extract-words.mjs" "$DUMP_FILE" | python3 -c "
import json, sys, os
words = json.load(sys.stdin)
batch_size = 25
out_dir = '$TMP_DIR'
n = 0
for i in range(0, len(words), batch_size):
    batch = words[i:i+batch_size]
    n += 1
    with open(f'{out_dir}/batch-{n:03d}.input.json', 'w') as f:
        json.dump(batch, f, ensure_ascii=False)
print(f'wrote {n} batches ({len(words)} words total)', file=sys.stderr)
"

# Step 2: fire claude --print for each batch in parallel (skip if output exists)
LAUNCHED=0
SKIPPED=0
for input_file in "$TMP_DIR"/batch-*.input.json; do
  batch_name=$(basename "$input_file" .input.json)
  raw_file="$TMP_DIR/$batch_name.raw.json"
  output_file="$TMP_DIR/$batch_name.jsonl"
  log_file="$LOG_DIR/$batch_name.log"

  if [ -f "$output_file" ] && [ -s "$output_file" ]; then
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  PROMPT=$(node "$SCRIPTS/build-enrich-prompt.mjs" "$LANG_CODE" "$input_file" "$REGISTRY")
  (
    claude --model sonnet --print --output-format json -p "$PROMPT" > "$raw_file" 2> "$log_file"
    # Extract assistant text from JSON envelope, then strip any non-{ lines (defense against preamble/code fences)
    jq -r '.result' "$raw_file" 2>/dev/null | grep -E '^\s*\{' > "$output_file" || true
    if [ ! -s "$output_file" ]; then
      echo "WARN: $batch_name produced no records, see $log_file and $raw_file" >&2
    fi
  ) &
  LAUNCHED=$((LAUNCHED + 1))
done

echo "launched=$LAUNCHED skipped=$SKIPPED"
echo "waiting for batches to complete..."
wait

# Step 3: concatenate
FINAL="$ENRICH_DIR/$LANG_CODE.jsonl"
cat "$TMP_DIR"/batch-*.jsonl > "$FINAL"
LINES=$(wc -l < "$FINAL" | tr -d ' ')
echo "wrote $FINAL ($LINES records)"
