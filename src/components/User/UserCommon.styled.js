import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${p => p.theme.media.desktop} {
    justify-content: flex-start;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  letter-spacing: 0.04em;
  @media ${p => p.theme.media.tablet} {
    font-size: 28px;
    line-height: 38px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const InfoContainer = styled.div``;
