import styled from "@emotion/styled";

export const MenuContainer = styled.div`
  background-color: #fdf7f2;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  // z-index: 1;
  padding: 10rem 0;
  flex-direction: column;

  @media ${p => p.theme.media.tablet} {
    // width: 768px;
  }
  @media ${p => p.theme.media.desktop} {
  }
`;

export const ButtonWrapper = styled.div`
  @media ${p => p.theme.media.tablet} {
  }
  @media ${p => p.theme.media.desktop} {
  }
`;

export const Text = styled.div`
  @media ${p => p.theme.media.tablet} {
  }
  @media ${p => p.theme.media.desktop} {
  }
`;
