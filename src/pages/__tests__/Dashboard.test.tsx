import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../Dashboard';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Dashboard', () => {
  it('renders dashboard title', () => {
    renderWithRouter(<Dashboard />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('displays stats cards', () => {
    renderWithRouter(<Dashboard />);
    expect(screen.getByText('Active Courses')).toBeInTheDocument();
    expect(screen.getByText('AI Tools Used')).toBeInTheDocument();
    expect(screen.getByText('Games Played')).toBeInTheDocument();
    expect(screen.getByText('Assignments')).toBeInTheDocument();
  });

  it('displays quick action links', () => {
    renderWithRouter(<Dashboard />);
    expect(screen.getByText('Learn AI')).toBeInTheDocument();
    expect(screen.getByText('Play Games')).toBeInTheDocument();
    expect(screen.getByText('AI Tools')).toBeInTheDocument();
    expect(screen.getByText('AI Tutor')).toBeInTheDocument();
  });

  it('displays recent activity', () => {
    renderWithRouter(<Dashboard />);
    expect(screen.getByText('Recent Activity')).toBeInTheDocument();
  });
});

