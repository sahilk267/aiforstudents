import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PuzzleChallenge from '../PuzzleChallenge';

describe('PuzzleChallenge Game', () => {
  it('renders game title', () => {
    render(<PuzzleChallenge />);
    expect(screen.getByText(/Puzzle Challenge/i)).toBeInTheDocument();
  });

  it('shows start game button initially', () => {
    render(<PuzzleChallenge />);
    expect(screen.getByText(/Start Game|Play/i)).toBeInTheDocument();
  });

  it('displays game instructions', () => {
    render(<PuzzleChallenge />);
    expect(screen.getByText(/How to Play|Instructions/i)).toBeInTheDocument();
  });
});

