import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AITools from '../AITools';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('AITools', () => {
  it('renders AI Tools page title', () => {
    renderWithRouter(<AITools />);
    expect(screen.getByText(/AI Tools/i)).toBeInTheDocument();
  });

  it('displays all available tools', () => {
    renderWithRouter(<AITools />);
    expect(screen.getByText(/Summarizer|Flashcard Generator|Study Plan Generator/i)).toBeInTheDocument();
  });

  it('shows tool cards with descriptions', () => {
    renderWithRouter(<AITools />);
    expect(screen.getByText(/Launch Tool|Available/i)).toBeInTheDocument();
  });
});

