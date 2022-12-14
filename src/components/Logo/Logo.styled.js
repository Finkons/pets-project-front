import styled from "@emotion/styled";

export const LogoImg = styled.img`
  width: 82px;
  height: 36px;

  @media ${p => p.theme.media.tablet} {
    width: 94px;
    height: 36px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 94px;
    height: 36px;
  }
`;
