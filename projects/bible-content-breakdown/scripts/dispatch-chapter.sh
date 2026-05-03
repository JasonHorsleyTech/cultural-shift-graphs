#!/bin/bash
# Dispatch a single chapter to Haiku for analysis.
# Usage: bash dispatch-chapter.sh genesis 1
#        bash dispatch-chapter.sh genesis 1 2 3   (multiple chapters sequentially)

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BOOK="$1"
shift
CHAPTERS=("$@")

SCHEMA=$(cat "$PROJECT_DIR/schema.md")

for CH in "${CHAPTERS[@]}"; do
  CH_PAD=$(printf '%03d' "$CH")
  SOURCE_FILE="$PROJECT_DIR/source/$BOOK/${CH_PAD}.json"
  RESULT_FILE="$PROJECT_DIR/results/$BOOK/${CH_PAD}.json"

  if [ -f "$RESULT_FILE" ]; then
    echo "Skipping $BOOK chapter $CH — result already exists"
    continue
  fi

  if [ ! -f "$SOURCE_FILE" ]; then
    echo "ERROR: Source file not found: $SOURCE_FILE"
    continue
  fi

  VERSES=$(cat "$SOURCE_FILE")
  BOOK_TITLE=$(python3 -c "import json; print(json.load(open('$SOURCE_FILE'))[0]['bookname'])")

  # Check for previous chapter's story continuity
  PREV_CH=$(( CH - 1 ))
  PREV_STORIES=""
  if [ "$PREV_CH" -gt 0 ]; then
    PREV_PAD=$(printf '%03d' "$PREV_CH")
    PREV_FILE="$PROJECT_DIR/results/$BOOK/${PREV_PAD}.json"
    if [ -f "$PREV_FILE" ]; then
      PREV_STORIES=$(python3 -c "
import json
d = json.load(open('$PREV_FILE'))
continuing = [s for s in d.get('stories', []) if s.get('continues_in_next')]
if continuing:
    print('Stories continuing from previous chapter:')
    for s in continuing:
        print(f'  - \"{s[\"name\"]}\"')
else:
    print('No stories continuing from previous chapter.')
")
    fi
  fi

  PROMPT="You are analyzing Bible text for a data project. Read the chapter below and produce a JSON analysis.

## Your task

1. For EVERY verse, assign a primary function category. If a verse genuinely straddles two categories, add a \"secondary\" field: {\"function\": \"...\", \"weight\": 0.1-0.9}. Example: God commanding ark dimensions is primarily specifications but secondarily narrative (the command is embedded in a story). A prophecy that reveals God's nature is primarily prophecy but secondarily theological. Expect roughly 10-30% of verses to have a secondary — if you're not using it at all, you're being too conservative.
2. Identify the distinct stories/narrative segments in this chapter.
3. For each story, assign 1-3 moral themes with optional weights.

## Categories and themes

$SCHEMA

## Context

$PREV_STORIES

## Chapter text: $BOOK_TITLE $CH

$VERSES

## Output

Return ONLY valid JSON matching this structure (no markdown fences, no commentary):

{
  \"book\": \"$BOOK_TITLE\",
  \"chapter\": $CH,
  \"verses\": [
    { \"ref\": \"Gen 1:1\", \"function\": \"narrative\" },
    { \"ref\": \"Gen 6:15\", \"function\": \"specifications\", \"secondary\": { \"function\": \"narrative\", \"weight\": 0.3 } }
  ],
  \"stories\": [
    {
      \"name\": \"Story Name\",
      \"start\": \"Gen 1:1\",
      \"end\": \"Gen 1:31\",
      \"continues_from_previous\": false,
      \"continues_in_next\": false,
      \"morals\": [
        { \"theme\": \"gods_power\", \"weight\": 1.0 }
      ]
    }
  ]
}

Return ONLY the JSON. No other text."

  echo "Dispatching $BOOK_TITLE chapter $CH..."
  RESULT=$(claude --model haiku --print -p "$PROMPT" 2>/dev/null)

  # Strip markdown fences if Haiku wraps the JSON
  RESULT=$(echo "$RESULT" | sed '/^```/d')

  # Validate JSON
  if echo "$RESULT" | python3 -m json.tool > /dev/null 2>&1; then
    echo "$RESULT" | python3 -m json.tool > "$RESULT_FILE"
    VERSE_COUNT=$(python3 -c "import json; print(len(json.load(open('$RESULT_FILE'))['verses']))")
    STORY_COUNT=$(python3 -c "import json; print(len(json.load(open('$RESULT_FILE'))['stories']))")
    echo "  ✓ $VERSE_COUNT verses categorized, $STORY_COUNT stories identified"
  else
    echo "  ✗ Invalid JSON returned for $BOOK_TITLE chapter $CH"
    echo "$RESULT" > "$RESULT_FILE.error"
  fi
done
