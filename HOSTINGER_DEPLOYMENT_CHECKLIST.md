# ✅ Hostinger Deployment Checklist

Complete checklist for deploying AI for Students platform on Hostinger.

## 📋 Pre-Deployment

### Repository Setup
- [ ] Git repository initialized locally
- [ ] Code committed to local repository
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] `.env` files NOT committed (in .gitignore)

### Hostinger Account
- [ ] Hostinger shared hosting plan active
- [ ] Node.js support available (5 Node.js web apps)
- [ ] Domain configured
- [ ] SSL certificate enabled

---

## 🗄️ Phase 1: Database Setup

### MySQL Database
- [ ] Database created in hPanel (`aiforstudents_db`)
- [ ] Database user created
- [ ] User assigned to database with ALL privileges
- [ ] Database credentials noted:
  - [ ] DB_HOST: `localhost`
  - [ ] DB_USER: `__________`
  - [ ] DB_PASSWORD: `__________`
  - [ ] DB_NAME: `__________`

### Schema Import
- [ ] phpMyAdmin accessed
- [ ] Database selected
- [ ] `backend/database/schema.sql` file opened
- [ ] SQL commands copied
- [ ] Schema imported successfully
- [ ] 8 tables created and verified:
  - [ ] users
  - [ ] user_preferences
  - [ ] courses
  - [ ] user_course_progress
  - [ ] games
  - [ ] user_game_progress
  - [ ] user_study_materials
  - [ ] user_activity_log
- [ ] Default games inserted (6 games)

---

## ⚙️ Phase 2: Backend Deployment

### GitHub Connection
- [ ] Node.js section accessed in hPanel
- [ ] "Create Node.js App" clicked
- [ ] "Import Git repository" selected
- [ ] GitHub connected
- [ ] Repository selected: `sahilk267/aiforstudents`
- [ ] Branch selected: `main`

### Node.js App Configuration
- [ ] App Name: `aiforstudents-api`
- [ ] Node.js Version: `18.x` (or latest)
- [ ] App Mode: `Production`
- [ ] Root Directory: `backend`
- [ ] Build Command: `npm install && npm run build`
- [ ] Start Command: `npm start`
- [ ] Startup File: `dist/server.js`

### Environment Variables
- [ ] PORT: `3001`
- [ ] NODE_ENV: `production`
- [ ] FRONTEND_URL: `https://yourdomain.com`
- [ ] DB_HOST: `localhost`
- [ ] DB_PORT: `3306`
- [ ] DB_USER: `__________`
- [ ] DB_PASSWORD: `__________`
- [ ] DB_NAME: `__________`
- [ ] JWT_SECRET: `__________` (32+ characters)
- [ ] JWT_EXPIRES_IN: `7d`

### Backend Verification
- [ ] App started successfully
- [ ] Logs checked (no errors)
- [ ] Health check: `/health` endpoint working
- [ ] Backend API URL noted: `__________`
- [ ] Database connection verified

---

## 🎨 Phase 3: Frontend Deployment

### Environment Setup
- [ ] `.env.production` file created/updated
- [ ] `VITE_API_URL` set to backend API URL
- [ ] `VITE_ENVIRONMENT` set to `production`

### Build Process
- [ ] Dependencies installed (`npm install`)
- [ ] Production build created (`npm run build`)
- [ ] `dist/` folder verified
- [ ] Build successful (no errors)

### File Upload
- [ ] `dist/` folder contents noted
- [ ] Files uploaded to `public_html/`:
  - [ ] `index.html`
  - [ ] `assets/` folder
  - [ ] All other files
- [ ] File permissions verified (644 for files, 755 for folders)

### Configuration
- [ ] `.htaccess` file in `public_html/`
- [ ] `.htaccess` content verified
- [ ] `mod_rewrite` enabled (usually by default)

---

## ✅ Phase 4: Testing

### Backend Testing
- [ ] Health check: `GET /health` ✓
- [ ] Register endpoint: `POST /api/auth/register` ✓
- [ ] Login endpoint: `POST /api/auth/login` ✓
- [ ] Database writes working (users created)
- [ ] JWT tokens generated correctly

### Frontend Testing
- [ ] Homepage loads: `https://yourdomain.com` ✓
- [ ] All routes accessible (no 404 errors)
- [ ] Static assets loading (CSS, JS, images)
- [ ] React Router working correctly
- [ ] No console errors

### Integration Testing
- [ ] Frontend can call backend API
- [ ] CORS working correctly
- [ ] Authentication flow working:
  - [ ] User registration
  - [ ] User login
  - [ ] Protected routes access
- [ ] Data persistence verified:
  - [ ] User data saved in database
  - [ ] Progress tracking working
  - [ ] Game progress saved

### Database Verification
- [ ] New users visible in `users` table
- [ ] User preferences created
- [ ] Progress data saved correctly

---

## 🔒 Security Checklist

- [ ] `.env` files NOT in repository
- [ ] `JWT_SECRET` is strong (32+ characters)
- [ ] Database password is strong
- [ ] HTTPS enabled (SSL certificate)
- [ ] CORS properly configured
- [ ] Security headers in `.htaccess`
- [ ] File permissions correct

---

## 📊 Performance Checklist

- [ ] GZIP compression enabled (`.htaccess`)
- [ ] Static assets cached (`.htaccess`)
- [ ] Images optimized
- [ ] Frontend bundle size optimized
- [ ] Database indexes present

---

## 📝 Documentation

- [ ] Deployment guide reviewed
- [ ] Environment variables documented
- [ ] API endpoints documented
- [ ] Database schema documented
- [ ] Troubleshooting guide reviewed

---

## 🎉 Final Verification

- [ ] Website accessible: `https://yourdomain.com`
- [ ] Backend API accessible: `https://your-backend-api-url`
- [ ] All features working:
  - [ ] User registration
  - [ ] User login
  - [ ] Games functional
  - [ ] Progress tracking
  - [ ] AI tools working
- [ ] Mobile responsive design working
- [ ] No critical errors in console/logs

---

## 🚀 Deployment Complete!

**Deployment Date**: __________  
**Deployed By**: __________  
**Frontend URL**: `https://yourdomain.com`  
**Backend API URL**: `https://your-backend-api-url`  
**Database**: `aiforstudents_db`  

**Status**: ✅ **PRODUCTION READY**

---

**Notes:**
- Keep this checklist updated
- Document any issues encountered
- Note any custom configurations

