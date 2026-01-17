<<<<<<< HEAD
# aiforstudents
AI for Students - Educational platform with interactive learning modules
=======
# 🎓 AI for Students

A modern, interactive educational platform designed to help students of all ages learn Artificial Intelligence through engaging modules, games, and AI-powered tools.

## ✨ Features

- 📚 **Learning Modules**: Structured lessons covering AI fundamentals to advanced topics
- 🎮 **Interactive Games**: 6 educational games to make learning fun
- 🛠️ **AI Tools**: Text Summarizer, Flashcard Generator, and Study Plan Generator
- 💬 **AI Tutor**: Get instant answers to your AI-related questions
- 📊 **Progress Tracking**: Monitor your learning journey and achievements
- 🎯 **Personalized Learning**: Adaptive content based on your progress

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/aiforstudents.git
cd aiforstudents

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📖 Documentation

- [User Guide](./docs/USER_GUIDE.md) - Complete guide for users
- [Developer Setup](./docs/DEVELOPER_SETUP.md) - Development environment setup
- [Deployment Guide](./docs/DEPLOYMENT.md) - Production deployment instructions
- [API Documentation](./docs/api.md) - API reference (when backend is integrated)
- [Contributing Guide](./docs/CONTRIBUTING.md) - How to contribute

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier

## 📁 Project Structure

```
aiforstudents/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   └── context/        # React contexts
├── docs/               # Documentation
├── public/             # Static assets
└── dist/               # Production build
```

## 🎮 Available Games

1. **Train the AI** - Teach AI by providing examples
2. **AI or Human?** - Guess if content was created by AI
3. **Prediction Game** - Predict AI behavior patterns
4. **Memory Match** - Match AI terms with definitions
5. **Puzzle Challenge** - Solve AI-related puzzles
6. **Quick Brain Test** - Timed AI knowledge quiz

## 🛠️ Available Tools

- **Text Summarizer**: Quickly summarize long texts
- **Flashcard Generator**: Create study flashcards
- **Study Plan Generator**: Generate personalized study plans

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run linter
npm run test         # Run tests
npm run type-check   # Check TypeScript types
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run with coverage
npm test -- --coverage
```

## 🚀 Deployment

### Quick Deploy (5 Minutes) ⚡

**Recommended: Vercel (Free + Custom Domain Support)**

1. **GitHub pe code push karein:**
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   git remote add origin https://github.com/yourusername/aiforstudents.git
   git push -u origin main
   ```

2. **Vercel pe deploy:**
   - [vercel.com](https://vercel.com) pe jao
   - GitHub se login karein
   - "Add New Project" → Repository select → Deploy!
   - **Done!** Site live hai! 🎉

3. **Custom Domain (Optional):**
   - Vercel dashboard → Settings → Domains
   - Domain add karein → DNS configure karein
   - SSL automatic setup ho jayega!

**Detailed Guides:**
- [Quick Deploy Guide](./QUICK_DEPLOY.md) - 5 minutes mein live!
- [Free Hosting Guide](./docs/FREE_HOSTING_GUIDE.md) - Free platforms with custom domain
- [Full Deployment Guide](./docs/DEPLOYMENT.md) - Complete deployment instructions

### CLI Deploy

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./docs/CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and users of this platform

---

**Built with ❤️ for students learning AI**
>>>>>>> 20c5701 (Add complete frontend React app, documentation, and deployment configuration)
