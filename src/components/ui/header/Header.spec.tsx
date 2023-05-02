import React from 'react';
import { render, screen } from 'utils/test-utils';
import Header from './Header';
import {
  GAME_OVER_MESSAGE,
  GAME_START_MESSAGE,
  TITLE,
} from './Header.constants';

describe('Header component', () => {
  it('renders a title', () => {
    render(<Header />);
    expect(
      screen.getByRole('heading', { name: TITLE, level: 1 })
    ).toBeInTheDocument();
  });

  it('renders a message when the game started', () => {
    render(<Header />);
    expect(
      screen.getByRole('heading', { name: GAME_START_MESSAGE, level: 3 })
    ).toBeInTheDocument();
  });
});
