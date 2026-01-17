🔌 API Documentation
=================

This document provides detailed information about the AI for Students platform's API endpoints, authentication, and usage.

## 🔑 Authentication

### Getting Started
The API uses JWT (JSON Web Token) for authentication. To get started:

1. Register an account
2. Get your API key from the dashboard
3. Include the token in your requests:
   ```bash
   Authorization: Bearer your-jwt-token
   ```

### Example Authentication
```javascript
const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  
  const { token } = await response.json();
  return token;
};
```

## 📚 Course Endpoints

### Get All Courses
```http
GET /api/courses
```

Parameters:
| Name | Type | Description |
|------|------|-------------|
| page | number | Page number (default: 1) |
| limit | number | Items per page (default: 10) |
| category | string | Filter by category |

Response:
```json
{
  "courses": [
    {
      "id": "course_123",
      "title": "AI Fundamentals",
      "description": "Introduction to AI concepts",
      "duration": "6 weeks",
      "level": "beginner",
      "category": "ai_basics",
      "thumbnail": "https://example.com/thumbnail.jpg"
    }
  ],
  "pagination": {
    "current": 1,
    "total": 5,
    "hasNext": true
  }
}
```

### Get Course Details
```http
GET /api/courses/:courseId
```

Response:
```json
{
  "id": "course_123",
  "title": "AI Fundamentals",
  "description": "Detailed course description",
  "modules": [
    {
      "id": "module_1",
      "title": "Introduction to AI",
      "lessons": [
        {
          "id": "lesson_1",
          "title": "What is AI?",
          "duration": "15 minutes"
        }
      ]
    }
  ],
  "prerequisites": ["Basic Programming"],
  "objectives": ["Understand AI basics", "Build simple AI models"]
}
```

## 🎮 Game Endpoints

### Get Available Games
```http
GET /api/games
```

Response:
```json
{
  "games": [
    {
      "id": "game_1",
      "title": "Memory Match",
      "description": "Match AI concepts",
      "difficulty": "beginner",
      "thumbnail": "https://example.com/game1.jpg"
    }
  ]
}
```

### Get Game Progress
```http
GET /api/games/:gameId/progress
```

Response:
```json
{
  "gameId": "game_1",
  "userId": "user_123",
  "progress": {
    "level": 5,
    "score": 1200,
    "achievements": ["quick_learner", "perfect_score"],
    "completedStages": ["stage_1", "stage_2"]
  }
}
```

### Save Game Progress
```http
POST /api/games/:gameId/progress
```

Request Body:
```json
{
  "level": 6,
  "score": 1500,
  "completedStage": "stage_3",
  "achievements": ["new_achievement"]
}
```

## 👤 User Endpoints

### Get User Profile
```http
GET /api/users/profile
```

Response:
```json
{
  "id": "user_123",
  "name": "John Doe",
  "email": "john@example.com",
  "progress": {
    "coursesEnrolled": 3,
    "coursesCompleted": 1,
    "totalScore": 1500
  },
  "preferences": {
    "difficulty": "intermediate",
    "interests": ["machine_learning", "robotics"]
  }
}
```

### Update User Profile
```http
PUT /api/users/profile
```

Request Body:
```json
{
  "name": "John Smith",
  "preferences": {
    "difficulty": "advanced",
    "interests": ["deep_learning"]
  }
}
```

## 📊 Progress Tracking

### Get Learning Progress
```http
GET /api/progress
```

Response:
```json
{
  "overall": {
    "completionRate": 75,
    "totalTime": "24h 30m",
    "averageScore": 85
  },
  "courses": [
    {
      "courseId": "course_123",
      "progress": 80,
      "score": 90,
      "lastAccessed": "2024-04-04T12:00:00Z"
    }
  ],
  "games": [
    {
      "gameId": "game_1",
      "highScore": 1500,
      "achievements": 5
    }
  ]
}
```

## 🤖 AI Recommendations

### Get Personalized Recommendations
```http
GET /api/recommendations
```

Response:
```json
{
  "courses": [
    {
      "id": "course_456",
      "title": "Advanced ML",
      "matchScore": 0.95,
      "reason": "Based on your interest in data science"
    }
  ],
  "games": [
    {
      "id": "game_2",
      "title": "Neural Network Puzzle",
      "matchScore": 0.88,
      "reason": "Matches your skill level"
    }
  ]
}
```

## 📈 Analytics Endpoints

### Get Learning Analytics
```http
GET /api/analytics
```

Response:
```json
{
  "learningTime": {
    "daily": "2h 30m",
    "weekly": "12h 45m",
    "monthly": "45h 20m"
  },
  "performance": {
    "averageScore": 85,
    "improvement": "+15%",
    "strengths": ["machine_learning", "neural_networks"],
    "areasForImprovement": ["deep_learning"]
  },
  "engagement": {
    "loginStreak": 7,
    "completionRate": 85,
    "participationScore": 90
  }
}
```

## 🔄 WebSocket Events

### Real-time Updates
```javascript
const socket = new WebSocket('wss://api.aiforstudents.com/ws');

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  switch (data.type) {
    case 'progress_update':
      updateProgress(data.progress);
      break;
    case 'achievement_unlocked':
      showAchievement(data.achievement);
      break;
  }
};
```

## ⚠️ Error Handling

### Error Response Format
```json
{
  "error": {
    "code": "AUTH_ERROR",
    "message": "Invalid authentication token",
    "details": {
      "field": "token",
      "reason": "expired"
    }
  }
}
```

### Common Error Codes
| Code | Description |
|------|-------------|
| AUTH_ERROR | Authentication related errors |
| VALIDATION_ERROR | Invalid input data |
| NOT_FOUND | Resource not found |
| RATE_LIMIT | Too many requests |
| SERVER_ERROR | Internal server error |

## 📝 Rate Limiting

The API implements rate limiting to ensure fair usage:

- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users

Rate limit headers:
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1680624000
```

## 🔒 Security

### API Key Security
- Never expose API keys in client-side code
- Rotate keys periodically
- Use environment variables for key storage

### Request Signing
```javascript
const signRequest = (payload, apiKey) => {
  const timestamp = Date.now();
  const signature = createHmac('sha256', apiKey)
    .update(`${timestamp}.${JSON.stringify(payload)}`)
    .digest('hex');
    
  return {
    timestamp,
    signature
  };
};
```

---

For additional support or questions about the API, please contact our developer support team. 