import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuickBrainTest from '../QuickBrainTest';

describe('QuickBrainTest Game', () => {
  it('renders game title', () => {
    render(<QuickBrainTest />);
    expect(screen.getByText(/Quick Brain Test/i)).toBeInTheDocument();
  });

  it('shows start game button initially', () => {
    render(<QuickBrainTest />);
    expect(screen.getByText(/Start Game|Begin/i)).toBeInTheDocument();
  });

  it('displays difficulty options', () => {
    render(<QuickBrainTest />);
    expect(screen.getByText(/Difficulty|Easy|Medium|Hard/i)).toBeInTheDocument();
  });
});

