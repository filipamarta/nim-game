import React from 'react';
import { render, screen } from 'utils/test-utils';
import GameOver from './GameOver';
import { GAME_OVER_BTN, GAME_OVER_TEXT } from './GameOver.constants';

describe('GameOver component', () => {
  it('renders a subtitle', () => {
    render(<GameOver />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders a text', () => {
    render(<GameOver />);
    expect(screen.getByText(GAME_OVER_TEXT)).toBeInTheDocument();
  });

  it('renders a button', () => {
    render(<GameOver />);
    expect(
      screen.getByRole('button', { name: GAME_OVER_BTN })
    ).toBeInTheDocument();
  });
});
