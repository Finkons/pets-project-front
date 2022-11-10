import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 140px;
  color: ${p => p.theme.colors.inputModal};
  color: green;
  @media ${p => p.theme.media.tablet} {
    color: blue;
  }
  @media ${p => p.theme.media.desktop} {
    color: red;
  }
`;
