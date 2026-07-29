#!/bin/bash
set -e

cd /home/ubuntu/frontend_app

echo "Starting the application..."
nohup npm start > app.log 2>&1 &
echo "Application started in the background."
