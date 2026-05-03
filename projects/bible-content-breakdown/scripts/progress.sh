#!/bin/bash
# Show progress across all books.
# Usage: bash progress.sh            (summary)
#        bash progress.sh --detail    (per-book breakdown)

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
MANIFEST="$PROJECT_DIR/manifest.json"

python3 -c "
import json, os

manifest = json.load(open('$MANIFEST'))
detail = '--detail' in '$@'

grand_source = 0
grand_results = 0
grand_verses = 0
grand_categorized = 0

for testament_key in ['old', 'new']:
    testament = manifest['testaments'][testament_key]
    print(f\"\\n{'='*60}\")
    print(f\"{testament['label']}\")
    print(f\"{'='*60}\")

    for book in testament['books']:
        slug = book['slug']
        chapters = book['chapters']
        source_dir = os.path.join('$PROJECT_DIR', 'source', slug)
        results_dir = os.path.join('$PROJECT_DIR', 'results', slug)

        source_count = len([f for f in os.listdir(source_dir) if f.endswith('.json')]) if os.path.isdir(source_dir) else 0
        result_count = len([f for f in os.listdir(results_dir) if f.endswith('.json')]) if os.path.isdir(results_dir) else 0

        # Count verses in source
        verse_count = 0
        if os.path.isdir(source_dir):
            for f in os.listdir(source_dir):
                if f.endswith('.json'):
                    try:
                        verse_count += len(json.load(open(os.path.join(source_dir, f))))
                    except: pass

        # Count categorized verses in results
        cat_count = 0
        if os.path.isdir(results_dir):
            for f in os.listdir(results_dir):
                if f.endswith('.json'):
                    try:
                        cat_count += len(json.load(open(os.path.join(results_dir, f)))['verses'])
                    except: pass

        grand_source += source_count
        grand_results += result_count
        grand_verses += verse_count
        grand_categorized += cat_count

        if detail or result_count > 0:
            status = '✓' if result_count == chapters else f'{result_count}/{chapters}'
            downloaded = '✓' if source_count == chapters else f'{source_count}/{chapters}'
            print(f'  {slug:<25} src: {downloaded:<8} results: {status:<8} verses: {verse_count}')

print(f\"\\n{'='*60}\")
print(f'TOTAL: {grand_source} chapters downloaded, {grand_results} analyzed')
print(f'       {grand_verses} verses in source, {grand_categorized} categorized')
pct = (grand_categorized / grand_verses * 100) if grand_verses > 0 else 0
print(f'       {pct:.1f}% complete')
"
