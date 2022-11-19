import styled from "@emotion/styled";

export const MenuContainer = styled.div`
  background-color: #fdf7f2;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 70px;
  left: 0;
  z-index: 1;
  // padding: 90px 0;
  margin-top: 30px;
  flex-direction: column;

  @media ${p => p.theme.media.tablet} {
    width: 768px;
    margin-top: 8px;
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

export const Link = styled.div`
  @media ${p => p.theme.media.tablet} {
  }
  @media ${p => p.theme.media.desktop} {
  }
`;
