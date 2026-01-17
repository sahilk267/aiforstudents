import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AITutor from '../AITutor';

describe('AITutor', () => {
  it('renders AI Tutor header', () => {
    render(<AITutor />);
    expect(screen.getByText("AI Tutor")).toBeInTheDocument();
  });

  it('displays initial welcome message', () => {
    render(<AITutor />);
    expect(screen.getByText(/Hello! I'm your AI tutor/i)).toBeInTheDocument();
  });

  it('has input field for questions', () => {
    render(<AITutor />);
    const input = screen.getByPlaceholderText(/Ask me anything about AI/i);
    expect(input).toBeInTheDocument();
  });

  it('allows typing in input field', () => {
    render(<AITutor />);
    const input = screen.getByPlaceholderText(/Ask me anything about AI/i) as HTMLTextAreaElement;
    fireEvent.change(input, { target: { value: 'What is AI?' } });
    expect(input.value).toBe('What is AI?');
  });
});

