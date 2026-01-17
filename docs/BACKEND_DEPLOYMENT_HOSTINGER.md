# 🚀 Backend Deployment Guide - Hostinger Shared Hosting

## 📋 Overview

Aapki website ko backend ke saath deploy karne ke liye Hostinger shared hosting me Node.js support available hai. Ye guide aapko step-by-step backend setup karne me help karega.

## ✅ Prerequisites

1. **Hostinger Shared Hosting Plan** with Node.js support (✔ 5 Node.js web apps)
2. **Node.js 18+** installed locally for development
3. **Database** - Hostinger MySQL (included with hosting plan)
4. **Domain** configured in Hostinger

## 🏗️ Backend Architecture

### Required Backend Features:
- ✅ User Authentication (JWT)
- ✅ Progress Tracking (Games, Courses)
- ✅ User Profiles & Preferences
- ✅ AI Recommendations
- ✅ Analytics & Statistics
- ✅ Database Integration

## 📦 Step 1: Backend Project Setup

### 1.1 Create Backend Directory Structure

```bash
# Project root me backend folder create karein
mkdir backend
cd backend
npm init -y
```

### 1.2 Install Required Dependencies

```bash
npm install express cors dotenv jsonwebtoken bcryptjs mysql2

# Development dependencies
npm install -D @types/express @types/node @types/cors @types/jsonwebtoken @types/bcryptjs typescript ts-node nodemon
```

### 1.3 Basic Backend Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.ts
│   │   └── env.ts
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── user.controller.ts
│   │   ├── progress.controller.ts
│   │   └── game.controller.ts
│   ├── models/
│   │   ├── User.ts
│   │   ├── Progress.ts
│   │   └── Game.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── user.routes.ts
│   │   └── api.routes.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   └── server.ts
├── package.json
├── tsconfig.json
└── .env
```

## 🔧 Step 2: Backend Configuration

### 2.1 package.json Scripts

```json
{
  "name": "aiforstudents-backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "nodemon src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "start:prod": "NODE_ENV=production node dist/server.js"
  }
}
```

### 2.2 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### 2.3 Basic Server Setup (src/server.ts)

```typescript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';
import apiRoutes from './routes/api.routes';
import { errorHandler } from './middleware/error.middleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling
app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
```

## 🗄️ Step 3: Database Setup

### Hostinger MySQL Setup

1. **Hostinger hPanel me login** karein
2. **MySQL Databases** section me jayein
3. **Create Database** button click karein
4. Database name enter karein (e.g., `aiforstudents_db`)
5. **Create User** button click karein
6. Username aur password set karein
7. User ko database access dein (All Privileges)
8. Database credentials note karein:
   - Host: Usually `localhost`
   - Port: `3306`
   - Database Name: Jo aapne create kiya
   - Username: Jo aapne create kiya
   - Password: Jo aapne set kiya

### Database Configuration (src/config/database.ts)

```typescript
import mysql from 'mysql2/promise';

let pool: mysql.Pool | null = null;

export const connectDatabase = async (): Promise<void> => {
  try {
    const dbConfig = {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    };

    if (!dbConfig.user || !dbConfig.password || !dbConfig.database) {
      throw new Error('Database credentials not found in environment variables');
    }

    pool = mysql.createPool(dbConfig);
    
    // Test connection
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    
    console.log('✅ MySQL database connected successfully');
  } catch (error) {
    console.error('❌ Database connection error:', error);
    throw error;
  }
};

export const getDatabase = (): mysql.Pool => {
  if (!pool) {
    throw new Error('Database not connected');
  }
  return pool;
};
```

## 🔐 Step 4: Environment Variables

### .env file (backend/.env)

```env
# Server
PORT=3001
NODE_ENV=development

# Frontend URL
FRONTEND_URL=http://localhost:3000

# MySQL Database (Hostinger)
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

# JWT Authentication
JWT_SECRET=your-super-secret-jwt-key-change-in-production-min-32-chars
JWT_EXPIRES_IN=7d

# Optional: External APIs
# OPENAI_API_KEY=your-openai-key
```

## 📤 Step 5: Hostinger Deployment

### 5.1 Build Backend Locally

```bash
cd backend
npm install
npm run build
```

### 5.2 Hostinger hPanel Setup

1. **hPanel me login** karein
2. **Node.js** section me jayein
3. **Create Node.js App** click karein

### 5.3 Node.js App Configuration

```
App Name: aiforstudents-api
Node.js Version: 18.x (ya latest)
App Mode: Production
Startup File: dist/server.js
```

### 5.4 Upload Backend Files

**Option A: Using File Manager**
1. hPanel → **File Manager**
2. `domains/yourdomain.com/` me jayein
3. `backend` folder create karein
4. Local `backend` folder ki files upload karein:
   - `dist/` folder (compiled code)
   - `node_modules/` (ya `npm install` run karein)
   - `package.json`
   - `.env` file (environment variables)

**Option B: Using Git (Recommended)**
1. Backend code ko Git repository me push karein
2. Hostinger me **Git** integration enable karein
3. Repository clone karein
4. `npm install` aur `npm run build` run karein

### 5.5 Environment Variables Setup

hPanel me **Node.js App** settings me environment variables add karein:

```
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your-production-secret-key-min-32-chars
```

### 5.6 Start Node.js App

hPanel me **Node.js App** section me:
1. App select karein
2. **Start** button click karein
3. Logs check karein for errors

## 🌐 Step 6: Frontend Configuration

### 6.1 Update Frontend Environment Variables

Frontend me `.env.production` file update karein:

```env
VITE_API_URL=https://yourdomain.com/api
VITE_ENVIRONMENT=production
```

### 6.2 Build Frontend

```bash
cd ..  # project root
npm run build
```

### 6.3 Deploy Frontend

`dist/` folder ki files `public_html/` me upload karein.

## 🔄 Step 7: API Proxy Setup (Optional but Recommended)

Agar aapko `/api` routes ko same domain se serve karna hai, to `.htaccess` me proxy add karein:

```apache
# public_html/.htaccess

# React Router Support
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # API Proxy to Node.js backend
  RewriteCond %{REQUEST_URI} ^/api/(.*)$
  RewriteRule ^api/(.*)$ http://localhost:3001/api/$1 [P,L]
  
  # React Router - All other routes
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Ya phir** subdomain use karein:
- Frontend: `https://yourdomain.com`
- Backend API: `https://api.yourdomain.com`

## ✅ Step 8: Testing & Verification

### 8.1 Health Check

```bash
curl https://yourdomain.com/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### 8.2 Test API Endpoints

```bash
# Test authentication
curl -X POST https://yourdomain.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 🐛 Common Issues & Solutions

### Issue 1: Node.js App Not Starting
**Solution:**
- Check logs in hPanel
- Verify `dist/server.js` file exists
- Check environment variables
- Verify Node.js version compatibility

### Issue 2: Database Connection Failed
**Solution:**
- Verify MySQL database credentials in environment variables
- Check DB_HOST, DB_USER, DB_PASSWORD, DB_NAME are correct
- Verify database user has proper permissions
- Test connection from hPanel MySQL section
- Check if database exists in Hostinger MySQL Databases

### Issue 3: CORS Errors
**Solution:**
- Update `FRONTEND_URL` in backend environment variables
- Check CORS configuration in `server.ts`

### Issue 4: Port Already in Use
**Solution:**
- Hostinger automatically assigns port
- Use `process.env.PORT` in code
- Don't hardcode port number

## 📊 Monitoring & Maintenance

### Logs
- hPanel → Node.js App → **Logs** section
- Real-time logs dekh sakte hain
- Errors debug karne ke liye useful

### Restart App
- hPanel me **Restart** button use karein
- Code changes ke baad restart zaroori hai

### Updates
1. Local me code update karein
2. `npm run build` run karein
3. `dist/` folder upload karein
4. App restart karein

## 🚀 Production Best Practices

1. **Environment Variables**: Never commit `.env` file
2. **Error Handling**: Proper error middleware implement karein
3. **Rate Limiting**: API abuse prevent karne ke liye
4. **Security**: JWT secrets strong rakhein
5. **Backup**: Database regular backup karein
6. **Monitoring**: Error tracking setup karein (Sentry, etc.)

## 📞 Support

- **Hostinger Support**: 24/7 chat support in hPanel
- **Node.js Docs**: https://nodejs.org/docs
- **MySQL Docs**: https://dev.mysql.com/doc/
- **mysql2 Package**: https://github.com/sidorares/node-mysql2

---

**Note**: Hostinger shared hosting me Node.js apps limited resources ke saath aate hain. Agar aapko high traffic expect hai, to consider karein:
- Hostinger VPS (more resources)
- Separate backend hosting (Railway, Render, etc.)
- Cloud platforms (AWS, Google Cloud, Azure)

