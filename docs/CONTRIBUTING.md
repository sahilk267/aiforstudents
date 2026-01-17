🤝 Contributing Guidelines
=====================

Thank you for considering contributing to the AI for Students platform! This document provides guidelines and instructions for contributors.

## 📋 Code of Conduct

Our project adheres to a Code of Conduct that we expect all participants to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/aiforstudents.git
   cd aiforstudents
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 💻 Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

### Environment Setup
1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Update the environment variables as needed

### Running the Project
```bash
# Start development server
npm run dev

# Run tests
npm test

# Run linter
npm run lint

# Build for production
npm run build
```

## 📝 Coding Standards

### JavaScript/TypeScript
- Use ES6+ features
- Follow the Airbnb JavaScript Style Guide
- Use TypeScript for new components
- Maintain 100% type safety

```typescript
// ✅ Good
interface UserProps {
  name: string;
  age: number;
}

const User: React.FC<UserProps> = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

// ❌ Bad
const User = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
};
```

### React Components
- Use functional components with hooks
- Follow component composition patterns
- Implement proper prop validation
- Use CSS modules for styling

```typescript
// Component Structure
/components
  /Button
    ├── Button.tsx
    ├── Button.module.css
    ├── Button.test.tsx
    └── index.ts
```

### CSS/Styling
- Follow BEM methodology
- Use CSS modules
- Maintain mobile-first approach
- Use CSS custom properties for theming

```css
/* ✅ Good */
.button {
  /* Base styles */
}

.button--primary {
  /* Primary variant */
}

.button--large {
  /* Size variant */
}

/* ❌ Bad */
.btn {
  /* Unclear naming */
}
```

## 🧪 Testing Guidelines

### Unit Tests
- Write tests for all new components
- Maintain 80% or higher coverage
- Use React Testing Library
- Follow AAA pattern (Arrange, Act, Assert)

```typescript
describe('Button', () => {
  it('should render with correct text', () => {
    // Arrange
    const text = 'Click me';
    
    // Act
    const { getByText } = render(<Button>{text}</Button>);
    
    // Assert
    expect(getByText(text)).toBeInTheDocument();
  });
});
```

### Integration Tests
- Test component interactions
- Test routing functionality
- Test API integrations

### E2E Tests
- Use Cypress for end-to-end testing
- Cover critical user paths
- Test responsive behavior

## 📦 Pull Request Process

1. Update documentation for any new features
2. Add tests for new functionality
3. Ensure all tests pass
4. Update the changelog
5. Request review from maintainers

### PR Template
```markdown
## Description
[Describe your changes]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] E2E tests added/updated

## Screenshots
[If applicable]

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests pass locally
- [ ] Documentation updated
- [ ] Changelog updated
```

## 📚 Documentation

### Code Documentation
- Use JSDoc for function documentation
- Document complex algorithms
- Include usage examples

```typescript
/**
 * Calculates the score based on user performance
 * @param {number} time - Time taken in seconds
 * @param {number} correct - Number of correct answers
 * @param {number} total - Total number of questions
 * @returns {number} Final score
 */
function calculateScore(time: number, correct: number, total: number): number {
  // Implementation
}
```

### Component Documentation
- Document props using TypeScript interfaces
- Include usage examples
- Document side effects

## 🐛 Bug Reports

### Bug Report Template
```markdown
## Bug Description
[Clear description of the bug]

## Steps to Reproduce
1. [First step]
2. [Second step]
3. [And so on...]

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Environment
- Browser:
- OS:
- Device:
```

## 🎯 Feature Requests

### Feature Request Template
```markdown
## Feature Description
[Clear description of the feature]

## Problem It Solves
[What problem does this feature solve?]

## Proposed Solution
[How should this feature work?]

## Alternative Solutions
[Other solutions you've considered]
```

## 📈 Performance Guidelines

### Performance Metrics
- First Contentful Paint (FCP) < 1.8s
- Time to Interactive (TTI) < 3.8s
- Total Blocking Time (TBT) < 200ms

### Performance Best Practices
- Lazy load components and images
- Implement code splitting
- Optimize bundle size
- Use proper caching strategies

## 🔐 Security Guidelines

### Security Checklist
- [ ] Implement proper authentication
- [ ] Validate all user inputs
- [ ] Use HTTPS
- [ ] Implement CSRF protection
- [ ] Follow OWASP guidelines

## 📱 Accessibility Guidelines

### WCAG Compliance
- Follow WCAG 2.1 Level AA standards
- Implement proper ARIA labels
- Ensure keyboard navigation
- Maintain proper color contrast

---

For any questions or clarifications about contributing, please open an issue or contact the maintainers. 