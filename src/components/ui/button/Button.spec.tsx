import React from 'react';
import { render, screen, userEvent } from 'utils/test-utils';
import Button from './Button';

const MOCK_BUTTON_TEXT = 'My button';
const MOCK_BUTTON_ONCLICK = jest.fn();

describe('Button component', () => {
  it('renders an enabled button with a text and onclick function', async () => {
    const user = userEvent.setup();

    render(<Button onClick={MOCK_BUTTON_ONCLICK} text={MOCK_BUTTON_TEXT} />);

    const button = screen.getByRole('button', {
      name: MOCK_BUTTON_TEXT,
    });

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();

    expect(button).toHaveStyle({
      backgroundColor: '#rgb(53, 62, 34)',
    });

    await user.click(button);

    expect(MOCK_BUTTON_ONCLICK).toBeCalled();
  });

  it('renders a disabled button', () => {
    render(<Button onClick={jest.fn} text={MOCK_BUTTON_TEXT} disabled />);

    const button = screen.getByRole('button', { name: MOCK_BUTTON_TEXT });
    expect(button).toBeInTheDocument();

    expect(button).toBeDisabled();

    expect(button).toHaveStyle({
      backgroundColor: '#rgb(197, 193, 193)',
    });
  });
});
