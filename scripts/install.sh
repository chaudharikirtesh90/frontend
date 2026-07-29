#!/bin/bash
set -e

cd /home/ec2-user/app || mkdir -p /home/ec2-user/app && cd /home/ec2-user/app

if [ ! -d .git ]; then
  echo "Repository not found. Clone or upload the app first."
  exit 1
fi

echo "Installing dependencies..."
npm install
