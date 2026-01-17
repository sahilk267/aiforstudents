import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LearnAI from '../LearnAI';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('LearnAI', () => {
  it('renders learning section title', () => {
    renderWithRouter(<LearnAI />);
    expect(screen.getByText(/Learn AI/i)).toBeInTheDocument();
  });

  it('displays level tabs', () => {
    renderWithRouter(<LearnAI />);
    expect(screen.getByText(/Level 1|Level 2|Level 3/i)).toBeInTheDocument();
  });

  it('shows lessons for selected level', () => {
    renderWithRouter(<LearnAI />);
    expect(screen.getByText(/What is AI|Lessons/i)).toBeInTheDocument();
  });
});

