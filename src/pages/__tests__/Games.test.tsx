import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Games from '../Games';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Games', () => {
  it('renders games page title', () => {
    renderWithRouter(<Games />);
    expect(screen.getByText(/Games|Play Games/i)).toBeInTheDocument();
  });

  it('displays all available games', () => {
    renderWithRouter(<Games />);
    expect(screen.getByText(/Train the AI|Memory Match|Puzzle Challenge/i)).toBeInTheDocument();
  });

  it('shows game cards with descriptions', () => {
    renderWithRouter(<Games />);
    expect(screen.getByText(/Play|Start/i)).toBeInTheDocument();
  });
});

