import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FlashcardGenerator from '../FlashcardGenerator';

describe('FlashcardGenerator', () => {
  it('renders tool title', () => {
    render(<FlashcardGenerator />);
    expect(screen.getByText(/Flashcard Generator/i)).toBeInTheDocument();
  });

  it('has input field for topic', () => {
    render(<FlashcardGenerator />);
    const input = screen.getByPlaceholderText(/enter topic|subject/i);
    expect(input).toBeInTheDocument();
  });

  it('allows typing in input field', () => {
    render(<FlashcardGenerator />);
    const input = screen.getByPlaceholderText(/enter topic|subject/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Machine Learning' } });
    expect(input.value).toBe('Machine Learning');
  });
});

