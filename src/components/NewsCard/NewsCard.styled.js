import styled from "@emotion/styled";

export const News = styled.div`
  width: 280px;
  height: 282px;
  margin-bottom: 12px;
  margin-left: 20px;
  margin-right: 20px;
  @media ${p => p.theme.media.tablet} {
    margin: 16px;
    width: 336px;
    height: 260px;
    border-radius: 40px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 390px;
    height: 240px;
    margin: 16px;
  }
`;

export const Title = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.38;
  display: flex;
  justify-content: center;
  text-decoration-line: underline;
  color: #111111;
`;

export const Text = styled.p``;

export const Date = styled.p``;

export const LinkNews = styled.p``;
