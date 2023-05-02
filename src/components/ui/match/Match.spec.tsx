import React from 'react';
import { render, screen } from 'utils/test-utils';
import Match from './Match';

const MOCK_ID = 0;
const MOCK_ROUND = 0;

describe('Match component', () => {
  it('renders an available (enabled) match button before is selected by human or computer', () => {
    render(
      <Match id={MOCK_ID} name={'available'} player={''} round={MOCK_ROUND} />
    );

    const match = screen.getByRole('button');
    expect(match).toBeInTheDocument();
    expect(match).toBeEnabled();

    expect(match).toHaveStyle({
      backgroundColor: '#rgb(253, 242, 214)',
    });
  });

  it('renders a computer match, disabled in order to prevent future clicks', () => {
    render(
      <Match
        id={MOCK_ID}
        name={'selected'}
        player={'computer'}
        round={MOCK_ROUND}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    expect(button).toBeDisabled();

    expect(button).toHaveStyle({ backgroundColor: '#rgb(12, 24, 103)' });
  });

  it('renders a human match, disabled in order to prevent future clicks', () => {
    render(
      <Match
        id={MOCK_ID}
        name={'selected'}
        player={'human'}
        round={MOCK_ROUND}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    expect(button).toBeDisabled();

    expect(button).toHaveStyle({
      backgroundColor: '#rgb(12, 132, 54)',
    });
  });
});
