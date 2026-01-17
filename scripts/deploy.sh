#!/bin/bash

# Deployment script for AI for Students Platform
# Usage: ./scripts/deploy.sh [vercel|netlify|build]

set -e

DEPLOY_TARGET=${1:-build}

echo "🚀 Starting deployment process..."

# Check Node version
echo "📦 Checking Node.js version..."
node_version=$(node -v)
echo "Node version: $node_version"

# Install dependencies
echo "📥 Installing dependencies..."
npm ci

# Run tests
echo "🧪 Running tests..."
npm test -- --watchAll=false || echo "⚠️  Tests failed, but continuing..."

# Type check
echo "🔍 Running type check..."
npm run type-check || echo "⚠️  Type check failed, but continuing..."

# Lint
echo "🔎 Running linter..."
npm run lint || echo "⚠️  Linting failed, but continuing..."

# Build
echo "🏗️  Building project..."
npm run build

echo "✅ Build completed successfully!"

# Deploy based on target
case $DEPLOY_TARGET in
  vercel)
    echo "🚀 Deploying to Vercel..."
    if command -v vercel &> /dev/null; then
      vercel --prod
    else
      echo "❌ Vercel CLI not found. Install with: npm i -g vercel"
      exit 1
    fi
    ;;
  netlify)
    echo "🚀 Deploying to Netlify..."
    if command -v netlify &> /dev/null; then
      netlify deploy --prod
    else
      echo "❌ Netlify CLI not found. Install with: npm i -g netlify-cli"
      exit 1
    fi
    ;;
  build)
    echo "✅ Build complete! Files are in the 'dist' directory."
    echo "📦 Ready for manual deployment."
    ;;
  *)
    echo "❌ Unknown deployment target: $DEPLOY_TARGET"
    echo "Usage: ./scripts/deploy.sh [vercel|netlify|build]"
    exit 1
    ;;
esac

echo "🎉 Deployment process completed!"

