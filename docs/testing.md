🧪 Testing Guidelines
==================

This document outlines the testing strategies and best practices for the AI for Students platform.

## 📋 Testing Overview

Our testing strategy follows the Testing Pyramid approach:
1. Unit Tests (60%)
2. Integration Tests (25%)
3. End-to-End Tests (15%)

## 🔬 Unit Testing

### Component Testing
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../components/Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant styles correctly', () => {
    const { container } = render(<Button variant="primary">Primary</Button>);
    expect(container.firstChild).toHaveClass('bg-primary-500');
  });
});
```

### Utility Function Testing
```typescript
import { calculateScore } from '../utils/scoring';

describe('Scoring Utility', () => {
  it('calculates perfect score correctly', () => {
    const result = calculateScore({
      timeSpent: 60,
      correctAnswers: 10,
      totalQuestions: 10
    });
    expect(result).toBe(100);
  });

  it('applies time penalty correctly', () => {
    const result = calculateScore({
      timeSpent: 120,
      correctAnswers: 10,
      totalQuestions: 10
    });
    expect(result).toBeLessThan(100);
  });
});
```

## 🔄 Integration Testing

### API Integration Tests
```typescript
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { CourseService } from '../services/CourseService';

const server = setupServer(
  rest.get('/api/courses', (req, res, ctx) => {
    return res(
      ctx.json({
        courses: [
          {
            id: 'course_1',
            title: 'AI Basics',
            description: 'Introduction to AI'
          }
        ]
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('CourseService', () => {
  it('fetches courses successfully', async () => {
    const courses = await CourseService.getAllCourses();
    expect(courses).toHaveLength(1);
    expect(courses[0].title).toBe('AI Basics');
  });

  it('handles API errors gracefully', async () => {
    server.use(
      rest.get('/api/courses', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    await expect(CourseService.getAllCourses()).rejects.toThrow();
  });
});
```

### Redux Integration Tests
```typescript
import { configureStore } from '@reduxjs/toolkit';
import courseReducer, { setCourses } from '../slices/courseSlice';

describe('Course Slice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        courses: courseReducer
      }
    });
  });

  it('updates state on setCourses action', () => {
    const courses = [
      { id: 1, title: 'AI Basics' }
    ];

    store.dispatch(setCourses(courses));
    expect(store.getState().courses.items).toEqual(courses);
  });
});
```

## 🌐 End-to-End Testing

### Cypress Tests
```typescript
describe('Course Enrollment Flow', () => {
  beforeEach(() => {
    cy.login('student@example.com', 'password');
  });

  it('allows user to enroll in a course', () => {
    cy.visit('/courses');
    cy.get('[data-testid="course-card"]').first().click();
    cy.get('[data-testid="enroll-button"]').click();
    cy.get('[data-testid="enrollment-success"]').should('be.visible');
  });

  it('shows course content after enrollment', () => {
    cy.visit('/dashboard');
    cy.get('[data-testid="enrolled-course"]').first().click();
    cy.get('[data-testid="course-content"]').should('be.visible');
  });
});
```

### Game Testing
```typescript
describe('Memory Match Game', () => {
  it('initializes game correctly', () => {
    cy.visit('/games/memory-match');
    cy.get('[data-testid="card"]').should('have.length', 12);
  });

  it('handles card matching', () => {
    cy.get('[data-testid="card"]').first().click();
    cy.get('[data-testid="card"]').eq(1).click();
    cy.get('[data-testid="score"]').should('contain', '10');
  });
});
```

## 📊 Performance Testing

### Load Testing
```typescript
import { check } from 'k6/http';
import http from 'k6/http';

export const options = {
  vus: 100,
  duration: '30s',
};

export default function() {
  const res = http.get('https://api.aiforstudents.com/courses');
  check(res, {
    'is status 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500
  });
}
```

### Component Performance Testing
```typescript
import { measurePerformance } from '../utils/performance';

describe('GameBoard Performance', () => {
  it('renders efficiently with many cards', async () => {
    const metrics = await measurePerformance(() => {
      render(<GameBoard cards={generateCards(100)} />);
    });

    expect(metrics.renderTime).toBeLessThan(100);
    expect(metrics.memoryUsage).toBeLessThan(5000000);
  });
});
```

## 🔒 Security Testing

### Authentication Tests
```typescript
describe('Authentication', () => {
  it('prevents unauthorized access', () => {
    cy.visit('/dashboard');
    cy.url().should('include', '/login');
  });

  it('handles invalid credentials', () => {
    cy.visit('/login');
    cy.get('[data-testid="email"]').type('invalid@example.com');
    cy.get('[data-testid="password"]').type('wrongpassword');
    cy.get('[data-testid="login-button"]').click();
    cy.get('[data-testid="error-message"]').should('be.visible');
  });
});
```

### API Security Tests
```typescript
describe('API Security', () => {
  it('requires authentication for protected endpoints', async () => {
    const response = await fetch('/api/profile');
    expect(response.status).toBe(401);
  });

  it('validates input data', async () => {
    const response = await fetch('/api/courses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${validToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: '<script>alert("xss")</script>'
      })
    });
    expect(response.status).toBe(400);
  });
});
```

## 📱 Accessibility Testing

### A11y Tests
```typescript
import { axe } from 'jest-axe';

describe('Course Page Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<CoursePage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('maintains keyboard navigation', () => {
    render(<CoursePage />);
    const firstLink = screen.getByText('Start Course');
    firstLink.focus();
    userEvent.tab();
    expect(document.activeElement).toHaveAttribute('data-testid', 'next-lesson');
  });
});
```

## 📈 Coverage Requirements

### Minimum Coverage Thresholds
```javascript
// jest.config.js
module.exports = {
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 75,
      functions: 80,
      lines: 80
    },
    './src/components/': {
      statements: 90,
      branches: 85,
      functions: 90,
      lines: 90
    }
  }
};
```

## 🔄 Continuous Integration

### GitHub Actions Workflow
```yaml
name: Test Suite
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Run Unit Tests
        run: npm run test:unit
      - name: Run Integration Tests
        run: npm run test:integration
      - name: Run E2E Tests
        run: npm run test:e2e
      - name: Upload Coverage
        uses: codecov/codecov-action@v2
```

## 🐛 Debug Testing

### Debug Configuration
```javascript
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Tests",
      "program": "${workspaceFolder}/node_modules/jest/bin/jest",
      "args": ["--runInBand", "--watchAll=false"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

---

Remember to:
- Write tests before implementing features (TDD)
- Keep tests simple and focused
- Use meaningful test descriptions
- Maintain test independence
- Regular test maintenance and updates

For questions about testing implementation, contact the development team. 