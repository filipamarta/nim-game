import React from 'react';
import { render, screen, userEvent } from 'utils/test-utils';
import App from './App';
import { BUTTON_NEXT } from 'components/ui/game-controls/GameControls.constants';
import {
  COMPUTER_TURN_MESSAGE,
  HUMAN_TURN_MESSAGE,
} from 'components/ui/board-results/BoardResults.constants';

describe('User journey', () => {
  it('good jorney', async () => {
    const user = userEvent.setup();

    render(<App />);

    // when the game starts, next button should be disabled
    const nextButton = screen.getByRole('button', { name: BUTTON_NEXT });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeDisabled();

    // when the game starts, round should be 1
    const round1 = screen.getByRole('heading', {
      name: 'Round: 1',
      level: 4,
    });
    expect(round1).toBeInTheDocument();

    // when the game start, human should be playing
    const humanPlayer = screen.getByRole('heading', {
      name: HUMAN_TURN_MESSAGE,
      level: 2,
    });
    expect(humanPlayer).toBeInTheDocument();

    // find a match to click on. First the match button is enabled and after the click is disabled
    const match = screen.getByTestId('match-5');
    expect(match).toBeInTheDocument();
    expect(match).toBeEnabled();

    await user.click(match);

    expect(match).toBeDisabled();

    // next button should be enabled after the selection of the first match
    expect(nextButton).toBeEnabled();

    // next button should be clicked to finish the human game and start computer game
    await user.click(nextButton);

    // computer is playing
    const computerPlayer = screen.getByRole('heading', {
      name: COMPUTER_TURN_MESSAGE,
      level: 2,
    });
    expect(computerPlayer).toBeInTheDocument();

    // next button should disabled during computer game
    expect(nextButton).toBeDisabled();

    // round should be 2
    const round2 = screen.getByRole('heading', {
      name: 'Round: 2',
      level: 4,
    });
    expect(round2).toBeInTheDocument();
  });
});
