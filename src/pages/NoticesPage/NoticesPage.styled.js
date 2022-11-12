import styled from "@emotion/styled";

export const Container = styled.div`
  justify-content: center;
  align-items: center;

  @media ${p => p.theme.media.tablet} {
    display: flex;
  }
  @media ${p => p.theme.media.desktop} {
  }
`;
