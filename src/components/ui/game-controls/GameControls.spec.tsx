import React from 'react';
import { render, screen } from 'utils/test-utils';
import GameControls from './GameControls';
import { BUTTON_NEXT, BUTTON_RESTART } from './GameControls.constants';
import {
  INSTRUCTION_1,
  INSTRUCTION_2,
} from '../instructions/Instructions.constants';
import { HUMAN_TURN_MESSAGE } from '../board-results/BoardResults.constants';

describe('GameControls component', () => {
  it('renders instructions messages', () => {
    render(<GameControls />);
    expect(screen.getByText(INSTRUCTION_1)).toBeInTheDocument();
    expect(screen.getByText(INSTRUCTION_2)).toBeInTheDocument();
  });

  it('renders board results', () => {
    render(<GameControls />);
    const humanPlayer = screen.getByRole('heading', {
      name: HUMAN_TURN_MESSAGE,
      level: 2,
    });

    expect(humanPlayer).toBeInTheDocument();

    const round = screen.getByRole('heading', {
      name: 'Round: 1',
      level: 4,
    });

    expect(round).toBeInTheDocument();

    const usedMatches = screen.getByRole('heading', {
      name: 'Selected matches: 0',
      level: 4,
    });

    expect(usedMatches).toBeInTheDocument();
  });

  it('renders button re-start and button next', () => {
    render(<GameControls />);
    expect(
      screen.getByRole('button', { name: BUTTON_RESTART })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: BUTTON_NEXT })
    ).toBeInTheDocument();
  });
});
