import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Profile from '../Profile';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Profile', () => {
  it('renders profile page', () => {
    renderWithRouter(<Profile />);
    expect(screen.getByText(/Profile|Your Profile/i)).toBeInTheDocument();
  });

  it('displays user statistics', () => {
    renderWithRouter(<Profile />);
    expect(screen.getByText(/Courses Completed|Lessons Completed|Games Played/i)).toBeInTheDocument();
  });

  it('shows tabs for different sections', () => {
    renderWithRouter(<Profile />);
    expect(screen.getByText(/Overview|Flashcards|Study Plans/i)).toBeInTheDocument();
  });
});

