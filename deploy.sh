#!/usr/bin/env bash
set -euo pipefail

BUCKET="surgicalsledgehammer.com"
CLOUDFRONT_DIST="EC143K560K4AQ"
REGION="us-east-1"

cd "$(dirname "$0")"

# ── 1. Build ─────────────────────────────────────────────────────────
echo "→ Building..."
npm run build --silent

# Sanity check
if [ ! -f dist/graphable/index.html ]; then
  echo "✗ dist/graphable/index.html missing — build failed?" >&2
  exit 1
fi

# ── 2. Git commit + push (if there are changes) ─────────────────────
if [ -n "$(git status --porcelain)" ]; then
  echo "→ Committing changes..."
  git add -A
  git commit -m "deploy: $(date +%Y-%m-%d\ %H:%M)"
fi

UPSTREAM=$(git rev-parse --abbrev-ref --symbolic-full-name @{u} 2>/dev/null || echo "")
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse @{u} 2>/dev/null || echo "")

if [ "$LOCAL" != "$REMOTE" ]; then
  echo "→ Pushing to origin/main..."
  git push
fi

# ── 3. Sync to S3 ───────────────────────────────────────────────────
# graphable/ — we own this prefix, safe to --delete
echo "→ Syncing graphable/ to S3 (with --delete)..."
aws s3 sync dist/graphable/ "s3://${BUCKET}/graphable/" --delete --region "$REGION"

# assets/ — shared with surgical-sledgehammer-lite, NEVER --delete
echo "→ Syncing assets/ to S3 (no --delete)..."
aws s3 sync dist/assets/ "s3://${BUCKET}/assets/" --region "$REGION"

# ── 4. Invalidate CloudFront cache ──────────────────────────────────
echo "→ Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id "$CLOUDFRONT_DIST" \
  --paths "/graphable/*" "/assets/*" \
  --region "$REGION" \
  --output text > /dev/null

echo "✓ Deployed to https://${BUCKET}/graphable/"
