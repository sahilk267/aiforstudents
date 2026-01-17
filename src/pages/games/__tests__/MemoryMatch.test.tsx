import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MemoryMatch from '../MemoryMatch';

describe('MemoryMatch Game', () => {
  it('renders game title', () => {
    render(<MemoryMatch />);
    expect(screen.getByText('Memory Match Game')).toBeInTheDocument();
  });

  it('shows start game button initially', () => {
    render(<MemoryMatch />);
    expect(screen.getByText('Start Game')).toBeInTheDocument();
  });

  it('initializes game when start button is clicked', () => {
    render(<MemoryMatch />);
    const startButton = screen.getByText('Start Game');
    fireEvent.click(startButton);
    
    expect(screen.queryByText('Start Game')).not.toBeInTheDocument();
  });

  it('displays game stats', () => {
    render(<MemoryMatch />);
    expect(screen.getByText('Score')).toBeInTheDocument();
    expect(screen.getByText('Moves')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
  });
});

