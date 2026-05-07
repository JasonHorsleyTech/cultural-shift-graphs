#!/usr/bin/env node
// Parse a Pass-1 dump file (markdown) into a flat JSON array of word records.
// Each record carries the section heading it was under, so Pass-2 enrichment
// has category context.
//
// Usage: node extract-words.mjs <path-to-dump.txt>
// Outputs JSON to stdout: [{ term, romanization, category_hint, subcategory_hint }, ...]

import { readFileSync } from 'node:fs';

const path = process.argv[2];
if (!path) {
  console.error('usage: extract-words.mjs <dump-file>');
  process.exit(1);
}

const text = readFileSync(path, 'utf8');
const records = [];
let currentHeading = null;

const SKIP_SECTIONS = new Set(['Summary', 'Notes', 'Notes on borderline calls']);

for (const rawLine of text.split('\n')) {
  const line = rawLine.trim();
  if (!line) continue;
  if (line.startsWith('#') && !line.startsWith('# ')) {
    // ## or deeper heading
    const m = line.match(/^#+\s*(.*)$/);
    if (m) currentHeading = m[1].trim();
    continue;
  }
  if (line.startsWith('# ')) {
    continue; // top-level title — skip
  }
  if (line === '---') continue;
  // Only list items (starting with "- ") count as data lines.
  if (!line.startsWith('- ')) continue;
  // Skip any section we've explicitly opted out of (summary stats, etc).
  if (currentHeading && SKIP_SECTIONS.has(currentHeading.split('—')[0].trim())) continue;
  // Skip lines that are clearly summary bullets (start with "**N." or "Total:" etc).
  if (/^-\s+\*\*\d+\./.test(line) || /^-\s+Total/i.test(line)) continue;
  let body = line.slice(2);
  if (!body) continue;

  // Split on em-dash, en-dash, or " - " to peel off gloss
  let term = body;
  let gloss = null;
  const dashSplit = body.split(/\s+[—–\-]\s+/);
  if (dashSplit.length >= 2) {
    term = dashSplit[0].trim();
    gloss = dashSplit.slice(1).join(' — ').trim();
  }

  // Pull out parenthesized romanization if present
  let romanization = null;
  const parenMatch = term.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (parenMatch) {
    term = parenMatch[1].trim();
    romanization = parenMatch[2].trim();
  }

  if (!term) continue;

  records.push({
    term,
    romanization,
    section: currentHeading,
    gloss_hint: gloss,
  });
}

process.stdout.write(JSON.stringify(records, null, 2) + '\n');
