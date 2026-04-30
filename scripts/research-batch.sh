#!/bin/bash
# Batch-launch research agents for all pending displaced-professions tickets
# Each runs as a background claude process

PROJECT_DIR="/Users/jasonhorsley/code/graphable/projects/displaced-professions"
LOG_DIR="/Users/jasonhorsley/code/graphable/scripts/research-logs"
mkdir -p "$LOG_DIR"

LAUNCHED=0

for ticket_file in "$PROJECT_DIR/tickets/"*.md; do
  ticket=$(basename "$ticket_file")
  result_file="$PROJECT_DIR/results/$ticket"

  # Skip if result already exists
  if [ -f "$result_file" ]; then
    echo "SKIP: $ticket (result exists)"
    continue
  fi

  slug=$(echo "$ticket" | sed 's/\.md$//')
  log_file="$LOG_DIR/${slug}.log"

  echo "LAUNCHING: $ticket"

  claude --print -p "You are a research agent for the 'displaced-professions' project in /Users/jasonhorsley/code/graphable.

Your job: research ONE ticket and write the result file.

STEPS:
1. Read the ticket: $PROJECT_DIR/tickets/$ticket
2. Read the result template from: $PROJECT_DIR/plan.md (the 'Result File Template' section)
3. Read the completed example at: $PROJECT_DIR/results/001-handloom-weavers.md (for tone and depth reference)
4. Do thorough web research on the topic described in the ticket
5. Write the completed result to: $PROJECT_DIR/results/$ticket

RULES:
- Follow the result template EXACTLY — every section must be present
- Use web search extensively to find real data (workforce numbers, wages, dates)
- Cite sources properly
- If data is unavailable, mark as N/A with explanation — do NOT fabricate numbers
- End the file with a <!-- COMPLETE --> comment on the last line
- Do NOT modify any other files
- Do NOT update the project status file
- Write ONLY the result file and exit" > "$log_file" 2>&1 &

  LAUNCHED=$((LAUNCHED + 1))
done

echo ""
echo "Launched $LAUNCHED research agents"
echo "Logs in: $LOG_DIR"
echo "Monitor: ls $PROJECT_DIR/results/ | wc -l"
