#!/bin/bash
set -e

echo "Installing backend dependencies..."
npm install

echo "Installing frontend dependencies..."
cd ../Frontend
npm install
npx vite build

echo "Build complete!"