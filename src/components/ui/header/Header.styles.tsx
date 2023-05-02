import styled, { css } from 'styled-components';

export const Title = styled.h1(
  ({ theme: { fontsSizes } }) => css`
    font-size: ${fontsSizes.md};
  `
);

export const Subtitle = styled.h3(
  ({ theme: { fontsSizes } }) => css`
    font-size: ${fontsSizes.xl};
    margin-bottom: 8px;
  `
);
