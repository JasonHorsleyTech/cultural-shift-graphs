#!/bin/bash
# dump-language.sh <lang>
# Pass-1 word dump for a language. One claude --print Sonnet call.
# Output: data/dump/<lang>-words.txt
#
# Idempotent: skips if output exists and is non-empty.

set -e

LANG_CODE="$1"
if [ -z "$LANG_CODE" ]; then
  echo "usage: dump-language.sh <lang-code>"
  exit 1
fi

PROJECT_DIR="/Users/jasonhorsley/code/graphable/projects/sexual-language-index"
DUMP_FILE="$PROJECT_DIR/data/dump/$LANG_CODE-words.txt"
LOG_DIR="$PROJECT_DIR/scripts/dump-logs"
SCRIPTS="$PROJECT_DIR/scripts"

mkdir -p "$LOG_DIR" "$(dirname "$DUMP_FILE")"

if [ -f "$DUMP_FILE" ] && [ -s "$DUMP_FILE" ]; then
  echo "SKIP: $DUMP_FILE already exists"
  exit 0
fi

PROMPT=$(node "$SCRIPTS/build-dump-prompt.mjs" "$LANG_CODE")
RAW_FILE="$DUMP_FILE.raw.json"
claude --model sonnet --print --output-format json -p "$PROMPT" > "$RAW_FILE" 2> "$LOG_DIR/$LANG_CODE.log"
jq -r '.result' "$RAW_FILE" > "$DUMP_FILE"

LINES=$(wc -l < "$DUMP_FILE" | tr -d ' ')
WORDS=$(grep -c '^- ' "$DUMP_FILE" || true)
echo "wrote $DUMP_FILE ($LINES lines, ~$WORDS words)"
