import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 61px 20px;
  @media ${p => p.theme.media.tablet} {
    padding: 88px 31px;
  }
  @media ${p => p.theme.media.desktop} {
    padding: 58px 17px;
    display: flex;
    gap: 32px;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
`;
