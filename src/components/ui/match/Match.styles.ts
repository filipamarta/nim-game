import styled, { css } from 'styled-components';
import { Player } from 'utils/types';

export const Button = styled.button<{ disabled?: boolean; player: Player }>(
  ({ disabled, player, theme: { colors, radii } }) => css`
    appearance: none;
    position: relative;
    height: 170px;
    width: 20px;
    background-color: ${colors?.red80};
    border: 0;
    border-top-left-radius: ${radii?.md};
    border-top-right-radius: ${radii?.md};
    cursor: ${disabled ? 'not-allowed' : 'grab'};
    z-index: 2;
    transition: background-color 0.3s ease;

    &:hover {
      transition: background-color 0.3s ease;
      background-color: ${disabled ? colors?.red80 : colors?.red90};
    }

    ${player === 'computer' &&
    css`
      opacity: 0.7;
      background-color: ${colors?.computer};
      &:hover {
        cursor: not-allowed;
        background-color: ${colors?.computer};
      }
    `};

    ${player === 'human' &&
    css`
      background-color: ${colors?.human};
      &:hover {
        cursor: not-allowed;
        background-color: ${colors?.human};
      }
    `};

    &:before {
      content: '';
      height: 36px;
      width: 100%;
      display: block;
      background-color: ${colors?.red50};
      top: 0;
      left: 0;
      position: absolute;
      border-top-left-radius: ${radii?.md};
      border-top-right-radius: ${radii?.md};
    }
  `
);
