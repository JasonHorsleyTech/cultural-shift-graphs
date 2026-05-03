#!/bin/bash
# Download Bible source text from NET Bible API.
# Usage: bash download-source.sh              (all books)
#        bash download-source.sh genesis       (one book by slug)
#        bash download-source.sh --testament old   (one testament)

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
MANIFEST="$PROJECT_DIR/manifest.json"
API_BASE="https://labs.bible.org/api"

# Parse the manifest into a list of: slug|api_name|chapters
get_books() {
  python3 -c "
import json, sys
manifest = json.load(open('$MANIFEST'))
filter_slug = '${1:-}'
filter_testament = '${2:-}'
for testament, data in manifest['testaments'].items():
    if filter_testament and testament != filter_testament:
        continue
    for book in data['books']:
        if filter_slug and book['slug'] != filter_slug:
            continue
        print(f\"{book['slug']}|{book['api']}|{book['chapters']}|{testament}\")
"
}

# Parse args
FILTER_SLUG=""
FILTER_TESTAMENT=""
if [ "${1:-}" = "--testament" ]; then
  FILTER_TESTAMENT="${2:-}"
elif [ -n "${1:-}" ]; then
  FILTER_SLUG="$1"
fi

BOOKS=$(get_books "$FILTER_SLUG" "$FILTER_TESTAMENT")

if [ -z "$BOOKS" ]; then
  echo "No books matched. Check slug or testament name."
  exit 1
fi

TOTAL_CHAPTERS=0
DOWNLOADED=0
SKIPPED=0
FAILED=0

while IFS='|' read -r SLUG API_NAME CHAPTERS TESTAMENT; do
  SOURCE_DIR="$PROJECT_DIR/source/$SLUG"
  mkdir -p "$SOURCE_DIR"

  echo "=== $API_NAME ($SLUG) — $CHAPTERS chapters ==="

  for CH in $(seq 1 "$CHAPTERS"); do
    CH_PAD=$(printf '%03d' "$CH")
    OUTFILE="$SOURCE_DIR/${CH_PAD}.json"
    ((TOTAL_CHAPTERS++))

    if [ -f "$OUTFILE" ]; then
      ((SKIPPED++))
      continue
    fi

    # URL-encode the API name (spaces → +)
    API_QUERY=$(echo "$API_NAME $CH" | sed 's/ /+/g')
    URL="${API_BASE}/?passage=${API_QUERY}&type=json"

    RESPONSE=$(curl -s "$URL")

    # Validate it's JSON with verses
    if echo "$RESPONSE" | python3 -c "import json,sys; d=json.load(sys.stdin); assert len(d)>0" 2>/dev/null; then
      echo "$RESPONSE" > "$OUTFILE"
      ((DOWNLOADED++))
    else
      echo "  FAILED: $API_NAME $CH"
      ((FAILED++))
    fi
  done

  # Count total verses for this book
  VERSE_COUNT=$(python3 -c "
import json, os
total = 0
d = '$SOURCE_DIR'
for f in sorted(os.listdir(d)):
    if f.endswith('.json'):
        total += len(json.load(open(os.path.join(d, f))))
print(total)
" 2>/dev/null || echo "?")
  echo "  $VERSE_COUNT verses total"

done <<< "$BOOKS"

echo ""
echo "Done: $DOWNLOADED downloaded, $SKIPPED already existed, $FAILED failed (out of $TOTAL_CHAPTERS total chapters)"
