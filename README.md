# 🚀 AI for Students - Backend API

Backend API server for the AI for Students platform.

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- MySQL database (Hostinger MySQL or any MySQL server)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup

1. **Create Database in Hostinger:**
   - Login to Hostinger hPanel
   - Go to MySQL Databases section
   - Create a new database (e.g., `aiforstudents_db`)
   - Create a database user with all privileges
   - Note down: host, username, password, database name

2. **Run SQL Schema:**
   - Open `database/schema.sql` file
   - Copy the SQL commands
   - Run in Hostinger phpMyAdmin or MySQL section
   - This will create all required tables

### 3. Environment Setup

Copy `env.example` to `.env` and update with your values:

```bash
cp env.example .env
```

Update `.env` file:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
FRONTEND_URL=http://localhost:3000
```

### 4. Development

```bash
npm run dev
```

Server will start on `http://localhost:3001`

### 5. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts          # MySQL connection
│   ├── controllers/
│   │   ├── auth.controller.ts   # Authentication logic
│   │   ├── user.controller.ts   # User profile logic
│   │   └── progress.controller.ts # Progress tracking logic
│   ├── middleware/
│   │   ├── auth.middleware.ts   # JWT authentication
│   │   └── error.middleware.ts  # Error handling
│   ├── routes/
│   │   ├── api.routes.ts        # Main API router
│   │   ├── auth.routes.ts       # Auth routes
│   │   ├── user.routes.ts       # User routes
│   │   └── progress.routes.ts   # Progress routes
│   └── server.ts                # Entry point
├── database/
│   └── schema.sql               # Database schema
├── dist/                         # Compiled JavaScript (after build)
├── package.json
├── tsconfig.json
├── env.example
└── README.md
```

## 🔌 API Endpoints

### Health Check
- `GET /health` - Server health status

### Authentication
- `POST /api/auth/register` - Register new user
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe"
  }
  ```

- `POST /api/auth/login` - User login
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

### Users (Protected - requires JWT token)
- `GET /api/users/profile` - Get user profile
  - Headers: `Authorization: Bearer <token>`

- `PUT /api/users/profile` - Update user profile
  - Headers: `Authorization: Bearer <token>`
  ```json
  {
    "name": "John Smith",
    "preferences": {
      "difficulty_level": "intermediate",
      "interests": ["machine_learning", "ai"],
      "notification_enabled": true
    }
  }
  ```

### Progress (Protected - requires JWT token)
- `GET /api/progress` - Get user progress
  - Headers: `Authorization: Bearer <token>`

- `POST /api/progress/games/:gameId` - Save game progress
  - Headers: `Authorization: Bearer <token>`
  ```json
  {
    "score": 1500,
    "level": 5,
    "achievements": ["quick_learner"],
    "completedStage": "stage_3"
  }
  ```

## 🗄️ Database

Using MySQL with mysql2. Configure database credentials in `.env` file:
- `DB_HOST` - Database host (usually localhost for Hostinger)
- `DB_PORT` - Database port (usually 3306)
- `DB_USER` - Database username
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name

### Database Tables

The schema includes:
- `users` - User accounts
- `user_preferences` - User preferences and settings
- `courses` - Course catalog
- `user_course_progress` - Course progress tracking
- `games` - Game catalog
- `user_game_progress` - Game progress tracking
- `user_study_materials` - Flashcards, study plans, summaries
- `user_activity_log` - Activity tracking for analytics

## 🔒 Security

- JWT-based authentication
- Password hashing with bcryptjs
- Input validation
- SQL injection protection (parameterized queries)
- CORS configuration

## 📚 Documentation

See [BACKEND_DEPLOYMENT_HOSTINGER.md](../docs/BACKEND_DEPLOYMENT_HOSTINGER.md) for deployment guide.

## 🧪 Testing

### Test Registration
```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123","name":"Test User"}'
```

### Test Login
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

### Test Protected Route
```bash
curl -X GET http://localhost:3001/api/users/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🔧 Development Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run start:prod` - Start with production environment

## ⚠️ Important Notes

- Never commit `.env` file
- Use strong JWT secrets in production (minimum 32 characters)
- Enable CORS properly for frontend domain
- Database credentials should be kept secure
- Run `database/schema.sql` before starting the server

## 🐛 Troubleshooting

### Database Connection Failed
- Verify database credentials in `.env`
- Check if database exists
- Verify user has proper permissions
- Test connection from phpMyAdmin

### JWT Errors
- Verify `JWT_SECRET` is set in `.env`
- Check token format in Authorization header
- Verify token hasn't expired

### Port Already in Use
- Change `PORT` in `.env`
- Or kill the process using the port
