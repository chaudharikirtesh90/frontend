#!/bin/bash
set -e

cd /home/ec2-user/app

echo "Running post-deployment script..."
chmod +x scripts/start.sh
./scripts/start.sh
