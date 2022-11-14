import styled from "@emotion/styled";

export const TitleName = styled.h2`
  font-family: "Manrope";
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33;
  padding-bottom: 40px;
  padding-top: 40px;
  text-align: center;
  color: black;
  @media ${p => p.theme.media.tablet} {
    padding-bottom: 29px;
    padding-top: 90px;
    font-size: 48px;
    line-height: 1.37;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 48px;
    padding-bottom: 44px;
    padding-top: 60px;
    line-height: 1.37;
  }
`;
