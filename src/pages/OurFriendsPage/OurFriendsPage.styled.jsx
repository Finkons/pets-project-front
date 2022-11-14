import styled from "@emotion/styled";

export const Container = styled.div`
  background: ${p => p.theme.colors.background};
  @media ${p => p.theme.media.tablet} {
    min-width: 768px;
  }
  @media ${p => p.theme.media.desktop} {
    min-width: 1281px;
  }
`;
