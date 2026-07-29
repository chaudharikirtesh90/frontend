#!/bin/bash
set -e

cd /home/ubuntu/frontend_app

if [ ! -d .git ]; then
  echo "Repository not found. Clone or upload the app first."
  exit 1
fi

echo "Installing dependencies..."
npm install
