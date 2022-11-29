import styled from "@emotion/styled";

export const MenuContainer = styled.div`
  background-color: #fdf7f2;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 10;
  padding-top: 46px;
  flex-direction: column;

  @media ${p => p.theme.media.tablet} {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div``;

export const Link = styled.div`
  &:hover {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline;
  }
  &:active {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline;
  }
`;
