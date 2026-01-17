# 👨‍💻 Developer Setup Guide

This guide will help you set up the development environment for the AI for Students platform.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher (comes with Node.js)
- **Git** for version control
- A code editor (VS Code recommended)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/aiforstudents.git
cd aiforstudents
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
VITE_API_URL=http://localhost:3000/api
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_ENVIRONMENT=development
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🛠️ Development Scripts

### Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run type checking
npm run type-check

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📁 Project Structure

```
aiforstudents/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── ai/           # AI-related components
│   │   ├── common/       # Common UI components
│   │   ├── layout/       # Layout components
│   │   └── ...
│   ├── context/          # React contexts
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   │   ├── games/       # Game pages
│   │   ├── learning/    # Learning pages
│   │   ├── tools/       # AI tool pages
│   │   └── ...
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── docs/                # Documentation
├── .env.local           # Local environment variables
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🔧 Configuration Files

### TypeScript

- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.app.json` - App-specific TypeScript config
- `tsconfig.node.json` - Node.js TypeScript config

### Vite

- `vite.config.ts` - Build tool configuration
- Configured for React, path aliases, and code splitting

### Tailwind CSS

- `tailwind.config.js` - Tailwind CSS configuration
- Custom colors, fonts, and utilities

### ESLint

- `.eslintrc.cjs` - Linting rules
- Configured for React, TypeScript, and accessibility

## 🎨 Styling

The project uses **Tailwind CSS** for styling:

- Utility-first CSS framework
- Responsive design utilities
- Custom color palette
- Dark mode support (if implemented)

### Adding Styles

```tsx
// Use Tailwind classes directly
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Content
</div>

// Or use CSS modules for component-specific styles
import styles from './Component.module.css';
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run with coverage
npm test -- --coverage
```

### Writing Tests

Tests are located in `__tests__` directories:

```tsx
// Example test
import { render, screen } from '@testing-library/react';
import Component from '../Component';

test('renders component', () => {
  render(<Component />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

## 📝 Code Style

### TypeScript

- Use TypeScript for all new files
- Define interfaces for props and data structures
- Avoid `any` type - use proper types

### Component Structure

```tsx
// 1. Imports
import React from 'react';

// 2. Types/Interfaces
interface Props {
  title: string;
}

// 3. Component
const Component: React.FC<Props> = ({ title }) => {
  // Component logic
  return <div>{title}</div>;
};

// 4. Export
export default Component;
```

### Naming Conventions

- **Components**: PascalCase (`UserProfile.tsx`)
- **Hooks**: camelCase starting with `use` (`useAuth.ts`)
- **Utils**: camelCase (`analytics.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`)

## 🔍 Debugging

### VS Code Setup

1. Install recommended extensions:
   - ESLint
   - Prettier
   - TypeScript and JavaScript Language Features

2. Debug configuration (`.vscode/launch.json`):
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

### Browser DevTools

- Use React DevTools extension
- Check Network tab for API calls
- Use Console for debugging
- Performance tab for optimization

## 🔄 Git Workflow

### Branch Naming

- `main` - Production-ready code
- `develop` - Development branch
- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `docs/documentation` - Documentation updates

### Commit Messages

Follow conventional commits:

```
feat: Add new game feature
fix: Fix memory match game bug
docs: Update user guide
style: Format code with prettier
refactor: Refactor analytics utility
test: Add tests for dashboard
```

## 🐛 Common Issues

### Port Already in Use

```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Check for type errors
npm run type-check

# Restart TypeScript server in VS Code
# Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router Docs](https://reactrouter.com/)

## 🤝 Getting Help

- Check existing documentation
- Review code comments
- Ask in team chat
- Create an issue on GitHub

---

**Happy Coding! 🚀**

