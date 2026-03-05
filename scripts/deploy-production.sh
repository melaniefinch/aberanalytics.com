#!/usr/bin/env bash
set -euo pipefail

# Deploy the Aber Analytics website to production (GitHub Pages).
#
# This script builds the site, commits the output, and pushes.
# GitHub Actions handles the actual Pages deployment.
#
# Usage:
#   ./scripts/deploy-production.sh

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEBSITE_DIR="$(dirname "$SCRIPT_DIR")"

echo "=== Aber Analytics Production Deploy ==="
echo ""

cd "$WEBSITE_DIR"

# Check for uncommitted changes
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "You have uncommitted changes. Please commit or stash them first."
    exit 1
fi

# Build
echo "[1/2] Building site with Eleventy..."
npm run build
echo "      Built to _site/"

# Push
echo "[2/2] Pushing to origin..."
git push origin master

echo ""
echo "=== Done ==="
echo "GitHub Actions will deploy to aberanalytics.com shortly."
echo "Check deployment status at: https://github.com/YOUR_ORG/aberanalytics.com/actions"
echo ""
