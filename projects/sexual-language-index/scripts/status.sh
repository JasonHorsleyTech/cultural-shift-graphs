#!/bin/bash
# Show pipeline progress.

PROJECT_DIR="/Users/jasonhorsley/code/graphable/projects/sexual-language-index"
DUMP_DIR="$PROJECT_DIR/data/dump"
ENRICH_DIR="$PROJECT_DIR/data/enriched"

echo "=== sexual-language-index :: pipeline status ==="
echo
printf "%-8s  %12s  %12s  %s\n" "lang" "dump_words" "enrich_recs" "in_flight"
printf "%-8s  %12s  %12s  %s\n" "----" "----------" "-----------" "---------"

LANGS=(
  en es fr de it pt-BR ru pl nl tr ar zh ja ko hi
  id vi th fa el he sv no fi da cs hu ro uk bg
  bn ta ur tl ms sw yo ha am zu my km
  ar-EG ar-LB ar-SA es-MX pt-PT
)

for L in "${LANGS[@]}"; do
  DUMP_FILE="$DUMP_DIR/${L}-words.txt"
  ENRICH_FILE="$ENRICH_DIR/${L}.jsonl"
  TMP_DIR="$ENRICH_DIR/.tmp-${L}"

  if [ -s "$DUMP_FILE" ]; then
    DUMP_WC=$(grep -c '^- ' "$DUMP_FILE" 2>/dev/null || echo 0)
  else
    DUMP_WC=0
  fi

  if [ -s "$ENRICH_FILE" ]; then
    ENRICH_WC=$(wc -l < "$ENRICH_FILE" | tr -d ' ')
  elif [ -d "$TMP_DIR" ]; then
    ENRICH_WC="~$(cat "$TMP_DIR"/batch-*.jsonl 2>/dev/null | wc -l | tr -d ' ')"
  else
    ENRICH_WC=0
  fi

  IN_FLIGHT=""
  if pgrep -f "dump-language.sh ${L}( |$)" > /dev/null 2>&1; then
    IN_FLIGHT="dump"
  fi
  if pgrep -f "enrich-batch.sh ${L}( |$)" > /dev/null 2>&1; then
    IN_FLIGHT="${IN_FLIGHT:+$IN_FLIGHT, }enrich"
  fi

  printf "%-8s  %12s  %12s  %s\n" "$L" "$DUMP_WC" "$ENRICH_WC" "$IN_FLIGHT"
done

echo
echo "active claude --print processes: $(pgrep -f 'claude --model sonnet --print' | wc -l | tr -d ' ')"
echo "active dump-language.sh:         $(pgrep -f 'dump-language.sh' | wc -l | tr -d ' ')"
echo "active enrich-batch.sh:          $(pgrep -f 'enrich-batch.sh' | wc -l | tr -d ' ')"
