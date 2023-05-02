import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button<{ disabled?: boolean }>(
  ({ disabled, theme: { colors, radii, fontSizes } }) => css`
    margin: 0 8px;
    padding: 8px 20px;
    background-color: ${disabled ? colors?.neutral60 : colors?.green100};
    color: ${colors?.neutral10};
    border: 0;
    border-radius: ${radii?.lg};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    transition: background-color 0.3s ease;
    fonts-sizes: ${fontSizes?.md};

    &:hover {
      background-color: ${disabled ? colors?.neutral60 : colors?.green80};
    }
  `
);
