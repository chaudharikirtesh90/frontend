#!/bin/bash
set -e

cd /home/ec2-user/app

echo "Starting the application..."
nohup npm start > app.log 2>&1 &
echo "Application started in the background."
