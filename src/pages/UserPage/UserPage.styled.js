import styled from "@emotion/styled";

export const Container = styled.div`
  @media ${p => p.theme.media.desktop} {
    padding-top: 58px;
    margin: auto;
    display: flex;
    width: 1280px;
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
