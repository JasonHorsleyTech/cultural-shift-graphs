#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_DIR = path.join(__dirname, '..', 'projects', 'bible-content-breakdown');
const RESULTS_DIR = path.join(PROJECT_DIR, 'results');
const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'data', 'bible-content-breakdown.json');

// Read manifest
const manifest = JSON.parse(fs.readFileSync(path.join(PROJECT_DIR, 'manifest.json'), 'utf-8'));

const combined = { books: [] };
let totalChapters = 0;
let totalVerses = 0;
let skippedChapters = 0;

for (const [testament, data] of Object.entries(manifest.testaments)) {
  for (const book of data.books) {
    const bookEntry = {
      slug: book.slug,
      name: book.api,
      testament,
      chapters: []
    };

    const bookDir = path.join(RESULTS_DIR, book.slug);
    if (!fs.existsSync(bookDir)) {
      console.warn(`  MISSING directory: ${book.slug}`);
      combined.books.push(bookEntry);
      continue;
    }

    for (let ch = 1; ch <= book.chapters; ch++) {
      const filename = String(ch).padStart(3, '0') + '.json';
      const filepath = path.join(bookDir, filename);

      if (!fs.existsSync(filepath)) {
        skippedChapters++;
        continue;
      }

      try {
        const chapterData = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
        const entry = {
          chapter: chapterData.chapter || ch,
          verses: chapterData.verses || [],
          stories: chapterData.stories || []
        };
        bookEntry.chapters.push(entry);
        totalChapters++;
        totalVerses += entry.verses.length;
      } catch (err) {
        console.warn(`  ERROR parsing ${book.slug}/${filename}: ${err.message}`);
        skippedChapters++;
      }
    }

    combined.books.push(bookEntry);
  }
}

// Ensure output directory exists
fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });

// Write combined JSON
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(combined));

const fileSizeMB = (fs.statSync(OUTPUT_PATH).size / 1024 / 1024).toFixed(2);

console.log(`\nDone!`);
console.log(`  Books: ${combined.books.length}`);
console.log(`  Chapters: ${totalChapters}`);
console.log(`  Verses: ${totalVerses}`);
console.log(`  Skipped chapters: ${skippedChapters}`);
console.log(`  Output: ${OUTPUT_PATH}`);
console.log(`  File size: ${fileSizeMB} MB`);
