import React from 'react';
import { render, screen } from 'utils/test-utils';
import BoardResults from './BoardResults';
import { HUMAN_TURN_MESSAGE } from './BoardResults.constants';

describe('BoardResults component', () => {
  it('renders human turn', () => {
    render(<BoardResults />);

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
});
