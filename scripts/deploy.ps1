# Deployment script for AI for Students Platform (PowerShell)
# Usage: .\scripts\deploy.ps1 [vercel|netlify|build]

param(
    [Parameter(Position=0)]
    [ValidateSet("vercel", "netlify", "build")]
    [string]$DeployTarget = "build"
)

$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Check Node version
Write-Host "📦 Checking Node.js version..." -ForegroundColor Cyan
$nodeVersion = node -v
Write-Host "Node version: $nodeVersion" -ForegroundColor Gray

# Install dependencies
Write-Host "📥 Installing dependencies..." -ForegroundColor Cyan
npm ci
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

# Run tests
Write-Host "🧪 Running tests..." -ForegroundColor Cyan
npm test -- --watchAll=false
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Tests failed, but continuing..." -ForegroundColor Yellow
}

# Type check
Write-Host "🔍 Running type check..." -ForegroundColor Cyan
npm run type-check
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Type check failed, but continuing..." -ForegroundColor Yellow
}

# Lint
Write-Host "🔎 Running linter..." -ForegroundColor Cyan
npm run lint
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Linting failed, but continuing..." -ForegroundColor Yellow
}

# Build
Write-Host "🏗️  Building project..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully!" -ForegroundColor Green

# Deploy based on target
switch ($DeployTarget) {
    "vercel" {
        Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Cyan
        if (Get-Command vercel -ErrorAction SilentlyContinue) {
            vercel --prod
        } else {
            Write-Host "❌ Vercel CLI not found. Install with: npm i -g vercel" -ForegroundColor Red
            exit 1
        }
    }
    "netlify" {
        Write-Host "🚀 Deploying to Netlify..." -ForegroundColor Cyan
        if (Get-Command netlify -ErrorAction SilentlyContinue) {
            netlify deploy --prod
        } else {
            Write-Host "❌ Netlify CLI not found. Install with: npm i -g netlify-cli" -ForegroundColor Red
            exit 1
        }
    }
    "build" {
        Write-Host "✅ Build complete! Files are in the 'dist' directory." -ForegroundColor Green
        Write-Host "📦 Ready for manual deployment." -ForegroundColor Cyan
    }
}

Write-Host "🎉 Deployment process completed!" -ForegroundColor Green

