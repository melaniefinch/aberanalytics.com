#!/usr/bin/env bash
set -euo pipefail

# Deploy the Aber Analytics website to the BBA internal staging server.
#
# Usage:
#   ./scripts/deploy-staging.sh <pod-username>
#
# Example:
#   ./scripts/deploy-staging.sh ashth
#
# Prerequisites:
#   - Tailscale must be connected
#   - Node.js installed locally (for the Eleventy build)
#
# The site will be available at:
#   http://aberanalytics-staging.<username>.bba.internal

USERNAME="${1:?Usage: deploy-staging.sh <pod-username>}"
SERVER="root@${USERNAME}-pod"
APP_NAME="aberanalytics-staging"
REMOTE_DIR="~/apps/${APP_NAME}"

# Resolve the website root (script lives in website/scripts/)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEBSITE_DIR="$(dirname "$SCRIPT_DIR")"

echo "=== Aber Analytics Staging Deploy ==="
echo ""

# 1. Build the site
echo "[1/4] Building site with Eleventy..."
cd "$WEBSITE_DIR"
npm run build
echo "      Built to _site/"

# 2. Prepare remote directory
echo "[2/4] Preparing remote directory..."
ssh "$SERVER" "mkdir -p ${REMOTE_DIR}/public"

# 3. Sync built site to server
echo "[3/4] Syncing built site to ${SERVER}:${REMOTE_DIR}/public/..."
rsync -avz --delete \
    "${WEBSITE_DIR}/_site/" \
    "$SERVER:${REMOTE_DIR}/public/"

# 4. Generate docker-compose.yml and start container
echo "[4/4] Starting container..."
ssh "$SERVER" "cat > ${REMOTE_DIR}/docker-compose.yml << 'COMPOSE'
services:
  web:
    image: nginx:alpine
    restart: unless-stopped
    volumes:
      - ./public:/usr/share/nginx/html:ro
    networks:
      - caddy
    labels:
      caddy: http://${APP_NAME}.${USERNAME}.bba.internal
      caddy.reverse_proxy: \"{{upstreams 80}}\"

networks:
  caddy:
    external: true
COMPOSE
cd ${REMOTE_DIR} && docker compose up -d --build"

echo ""
echo "=== Done ==="
echo "Staging site live at: http://${APP_NAME}.${USERNAME}.bba.internal"
echo ""
