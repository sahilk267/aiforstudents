import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StudyPlanGenerator from '../StudyPlanGenerator';

describe('StudyPlanGenerator', () => {
  it('renders tool title', () => {
    render(<StudyPlanGenerator />);
    expect(screen.getByText(/Study Plan Generator/i)).toBeInTheDocument();
  });

  it('has input fields for subject and duration', () => {
    render(<StudyPlanGenerator />);
    expect(screen.getByPlaceholderText(/subject|topic/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/duration|days|weeks/i)).toBeInTheDocument();
  });

  it('allows entering study plan details', () => {
    render(<StudyPlanGenerator />);
    const subjectInput = screen.getByPlaceholderText(/subject|topic/i) as HTMLInputElement;
    fireEvent.change(subjectInput, { target: { value: 'AI Fundamentals' } });
    expect(subjectInput.value).toBe('AI Fundamentals');
  });
});

