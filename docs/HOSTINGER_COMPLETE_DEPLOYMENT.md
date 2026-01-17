# 🚀 Complete Deployment Guide - Hostinger (Frontend + Backend)

Complete step-by-step guide for deploying both frontend and backend on Hostinger shared hosting.

## 📋 Prerequisites

1. ✅ Hostinger Shared Hosting Plan with Node.js support
2. ✅ Domain configured in Hostinger
3. ✅ SSL certificate enabled
4. ✅ GitHub repository ready (`aiforstudents`)

## 🏗️ Architecture Overview

```
Hostinger Setup:
├── public_html/          → Frontend (React built files)
├── Node.js App           → Backend API (GitHub deployment)
└── MySQL Database        → aiforstudents_db
```

## 🎯 Deployment Steps

### Phase 1: Database Setup

#### Step 1.1: Create MySQL Database

1. Login to **Hostinger hPanel**
2. Go to **MySQL Databases** section
3. **Create Database**:
   - Database Name: `aiforstudents_db`
   - Click "Create"
4. **Create Database User**:
   - Username: `aiforstudents_user` (or your choice)
   - Password: Strong password generate karein
   - Click "Create User"
5. **Assign User to Database**:
   - Select user
   - Select database
   - Check **"All Privileges"**
   - Click "Make Changes"

#### Step 1.2: Import Database Schema

1. hPanel me **phpMyAdmin** open karein
2. Left sidebar me `aiforstudents_db` select karein
3. **SQL** tab click karein
4. `backend/database/schema.sql` file open karein
5. Copy all SQL commands
6. phpMyAdmin SQL tab me paste karein
7. **Go** button click karein
8. Success message verify karein

**Credentials Note Karein:**
```
DB_HOST: localhost
DB_PORT: 3306
DB_USER: aiforstudents_user
DB_PASSWORD: [your password]
DB_NAME: aiforstudents_db
```

---

### Phase 2: Backend Deployment (Node.js App)

#### Step 2.1: Connect GitHub Repository

1. hPanel me **Node.js** section me jayein
2. **Create Node.js App** click karein
3. **"Import Git repository"** select karein
4. **"Connect with GitHub"** click karein
5. GitHub login karein
6. Repository select karein: `sahilk267/aiforstudents`
7. Branch: `main`
8. Continue karein

#### Step 2.2: Configure Node.js App

Even if "Unsupported framework" error aaye, continue karein. Next page me configure karein:

```
App Name: aiforstudents-api
Node.js Version: 18.x (or latest available)
App Mode: Production

Root Directory: backend

Build Command: npm install && npm run build

Start Command: npm start

Startup File: dist/server.js
```

#### Step 2.3: Set Environment Variables

Node.js App settings me **Environment Variables** section me add karein:

```env
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com

DB_HOST=localhost
DB_PORT=3306
DB_USER=aiforstudents_user
DB_PASSWORD=your_database_password
DB_NAME=aiforstudents_db

JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long-change-this
JWT_EXPIRES_IN=7d
```

**Important:**
- `DB_USER`, `DB_PASSWORD`, `DB_NAME` Step 1.1 me note kiye the
- `FRONTEND_URL` aapka actual domain
- `JWT_SECRET` strong random string (min 32 characters)

#### Step 2.4: Start Backend App

1. Node.js App settings me **"Start"** button click karein
2. Logs check karein
3. Health check: `https://your-nodejs-app-url/health`

**Expected Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "environment": "production"
}
```

#### Step 2.5: Get Backend API URL

Node.js App settings me app URL note karein:
```
Backend API URL: https://your-app-name.hostingerapp.com
```

Ya custom domain agar set ki hai.

---

### Phase 3: Frontend Deployment (Static Files)

#### Step 3.1: Prepare Environment Variables

Project root me `.env.production` file create/update karein:

```env
VITE_API_URL=https://your-backend-api-url/api
VITE_ENVIRONMENT=production
```

**Example:**
```env
VITE_API_URL=https://aiforstudents-api.hostingerapp.com/api
VITE_ENVIRONMENT=production
```

#### Step 3.2: Build Frontend Locally

```bash
# Project root me
cd D:\xampp\htdocs\aiforstudents

# Install dependencies (if not done)
npm install

# Build for production
npm run build
```

Build successful hone ke baad `dist/` folder me files generate hongi.

#### Step 3.3: Upload Frontend Files

**Option A: Using File Manager**

1. hPanel me **File Manager** open karein
2. `public_html/` folder me jayein
3. **Backup existing files** (agar koi hain)
4. `dist/` folder ki **saari files** upload karein:
   - `index.html`
   - `assets/` folder
   - Baaki files/folders

**Option B: Using FTP**

```bash
# FTP Configuration (hPanel me mil jayega)
Host: yourdomain.com
Port: 21
Username: your_ftp_username
Password: your_ftp_password

# Upload dist/ contents to public_html/
```

#### Step 3.4: Configure .htaccess

1. `public/.htaccess` file ko `public_html/.htaccess` me copy karein
2. Ya `public_html/.htaccess` file create karein
3. Same content as `public/.htaccess` paste karein

**File Path:** `public_html/.htaccess`

#### Step 3.5: Verify Frontend

1. Browser me domain open karein: `https://yourdomain.com`
2. Homepage load hona chahiye
3. All routes check karein (no 404 errors)
4. Browser console me errors check karein

---

### Phase 4: Testing & Verification

#### Step 4.1: Backend API Test

```bash
# Health check
curl https://your-backend-api-url/health

# Test registration
curl -X POST https://your-backend-api-url/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "test123",
    "name": "Test User"
  }'
```

#### Step 4.2: Frontend-Backend Integration Test

1. Frontend me login/register try karein
2. API calls browser Network tab me check karein
3. CORS errors check karein
4. Authentication flow test karein

#### Step 4.3: Database Connection Test

1. Login/Register try karein
2. Database me data check karein (phpMyAdmin)
3. `users` table me new user verify karein

---

## 🔧 Configuration Checklist

### Backend (Node.js App)
- [ ] GitHub repository connected
- [ ] Root directory set to `backend`
- [ ] Build command configured
- [ ] Start command configured
- [ ] Startup file: `dist/server.js`
- [ ] Environment variables set
- [ ] App started successfully
- [ ] Health check working

### Database
- [ ] MySQL database created
- [ ] Database user created
- [ ] User has all privileges
- [ ] Schema imported successfully
- [ ] Tables created (8 tables)
- [ ] Default games inserted

### Frontend
- [ ] `.env.production` configured
- [ ] `VITE_API_URL` set correctly
- [ ] Build successful
- [ ] Files uploaded to `public_html/`
- [ ] `.htaccess` file in place
- [ ] Homepage loads correctly
- [ ] All routes working

---

## 🐛 Troubleshooting

### Backend Issues

**App Not Starting:**
- Check logs in Node.js App section
- Verify `dist/server.js` exists
- Check environment variables
- Verify database credentials

**Database Connection Failed:**
- Verify `DB_HOST=localhost`
- Check database user permissions
- Test connection from phpMyAdmin
- Verify database exists

**Build Fails:**
- Check `backend/package.json`
- Verify all dependencies in package.json
- Check Node.js version compatibility

### Frontend Issues

**404 Errors on Routes:**
- Verify `.htaccess` file exists in `public_html/`
- Check `mod_rewrite` is enabled
- Verify RewriteEngine On

**API Calls Failing:**
- Check `VITE_API_URL` in `.env.production`
- Verify backend CORS configuration
- Check backend URL is accessible
- Browser console me errors check karein

**Assets Not Loading:**
- Verify file paths in `dist/` folder
- Check `.htaccess` cache settings
- Clear browser cache

### Database Issues

**Schema Import Fails:**
- Check SQL syntax
- Verify database exists
- Check user permissions
- Try importing tables one by one

---

## 🔄 Updates & Maintenance

### Updating Backend

```bash
# Local me changes karein
# Commit and push to GitHub
git add .
git commit -m "Update backend"
git push origin main

# Hostinger me:
# Node.js App me "Redeploy" or restart app
```

### Updating Frontend

```bash
# Local me build karein
npm run build

# dist/ folder ki files public_html/ me upload karein
# (replace existing files)
```

### Database Backup

1. phpMyAdmin me database select karein
2. **Export** tab click karein
3. **Go** button click karein
4. SQL file download karein

---

## 📞 Support

- **Hostinger Support**: 24/7 chat in hPanel
- **Documentation**: See other guides in `docs/` folder
- **GitHub Issues**: Create issue in repository

---

## ✅ Deployment Complete!

After completing all steps:
- ✅ Frontend: `https://yourdomain.com`
- ✅ Backend API: `https://your-backend-api-url`
- ✅ Database: Connected and working
- ✅ All features operational

---

**Last Updated**: 2024
**Status**: Production Ready ✅

