#!/bin/bash
# Dispatch all chapters of a book to Haiku.
# Usage: bash dispatch-book.sh genesis                    (default: 5 at a time)
#        bash dispatch-book.sh genesis --sequential        (one at a time, preserves story context)
#        bash dispatch-book.sh genesis --parallel 10       (10 at a time)
#        bash dispatch-book.sh --all                       (all books)
#        bash dispatch-book.sh --testament old             (all OT books)

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SCRIPT_DIR="$PROJECT_DIR/scripts"
MANIFEST="$PROJECT_DIR/manifest.json"

dispatch_one_book() {
  local BOOK="$1"
  local MODE="$2"
  local BATCH_SIZE="${3:-5}"
  local SOURCE_DIR="$PROJECT_DIR/source/$BOOK"
  local RESULTS_DIR="$PROJECT_DIR/results/$BOOK"

  if [ ! -d "$SOURCE_DIR" ]; then
    echo "ERROR: No source data for $BOOK — run download-source.sh first"
    return 1
  fi

  mkdir -p "$RESULTS_DIR"

  # Build list of chapters that still need processing
  PENDING=()
  for f in "$SOURCE_DIR"/*.json; do
    CH_PAD=$(basename "$f" .json)
    if [ ! -f "$RESULTS_DIR/${CH_PAD}.json" ]; then
      PENDING+=("$((10#$CH_PAD))")
    fi
  done

  TOTAL_SOURCE=$(ls "$SOURCE_DIR"/*.json | wc -l | tr -d ' ')
  ALREADY_DONE=$(( TOTAL_SOURCE - ${#PENDING[@]} ))

  if [ ${#PENDING[@]} -eq 0 ]; then
    echo "=== $BOOK: all $TOTAL_SOURCE chapters already done ==="
    return 0
  fi

  echo "=== $BOOK: $ALREADY_DONE/$TOTAL_SOURCE done, ${#PENDING[@]} remaining ($MODE) ==="

  if [ "$MODE" = "--sequential" ]; then
    for CH in "${PENDING[@]}"; do
      bash "$SCRIPT_DIR/dispatch-chapter.sh" "$BOOK" "$CH"
    done
  else
    # Process in batches
    local i=0
    while [ $i -lt ${#PENDING[@]} ]; do
      local BATCH_END=$(( i + BATCH_SIZE ))
      if [ $BATCH_END -gt ${#PENDING[@]} ]; then
        BATCH_END=${#PENDING[@]}
      fi

      local BATCH_PIDS=()
      for (( j=i; j<BATCH_END; j++ )); do
        bash "$SCRIPT_DIR/dispatch-chapter.sh" "$BOOK" "${PENDING[$j]}" &
        BATCH_PIDS+=($!)
      done

      echo "  Batch: chapters ${PENDING[@]:$i:$BATCH_SIZE} ($(( BATCH_END - i )) processes)"

      local BATCH_FAILED=0
      for PID in "${BATCH_PIDS[@]}"; do
        wait "$PID" || BATCH_FAILED=$((BATCH_FAILED + 1))
      done

      if [ $BATCH_FAILED -gt 0 ]; then
        echo "  ⚠ $BATCH_FAILED failures in this batch"
      fi

      i=$BATCH_END
    done

    FINAL_DONE=$(ls "$RESULTS_DIR"/*.json 2>/dev/null | wc -l | tr -d ' ')
    echo "=== $BOOK complete: $FINAL_DONE/$TOTAL_SOURCE chapters ==="
  fi
}

# Parse args
if [ "${1:-}" = "--all" ]; then
  BOOKS=$(python3 -c "
import json
m = json.load(open('$MANIFEST'))
for t in ['old','new']:
    for b in m['testaments'][t]['books']:
        print(b['slug'])
")
  for BOOK in $BOOKS; do
    dispatch_one_book "$BOOK" "--batched" 5
  done

elif [ "${1:-}" = "--testament" ]; then
  TESTAMENT="${2:?Usage: dispatch-book.sh --testament old|new}"
  BOOKS=$(python3 -c "
import json
m = json.load(open('$MANIFEST'))
for b in m['testaments']['$TESTAMENT']['books']:
    print(b['slug'])
")
  for BOOK in $BOOKS; do
    dispatch_one_book "$BOOK" "--batched" 5
  done

else
  BOOK="${1:?Usage: dispatch-book.sh <book-slug> [--sequential] [--parallel N]}"
  MODE="${2:---batched}"
  BATCH_SIZE="${3:-5}"
  dispatch_one_book "$BOOK" "$MODE" "$BATCH_SIZE"
fi
