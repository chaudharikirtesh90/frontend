#!/bin/bash
set -e

cd /home/ubuntu/frontend_app

echo "Running post-deployment script..."
chmod +x scripts/start.sh
./scripts/start.sh
