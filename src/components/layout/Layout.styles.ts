import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme: { colors } }) => css`
    background-color: ${colors.neutral40};
    padding: 40px 50px;
    margin: 0 auto;
  `
);

export const MatchesCaseImage = styled.img(
  ({ theme: { zIndex } }) => css`
    z-index: ${zIndex.xs};
  `
);

export const ImgContainer = styled.div`
  max-width: 520px;
  margin: 0 auto 30px auto;
  img {
    width: 100%;
  }
`;
