import styled from "@emotion/styled";

export const Container = styled.div`
  background: ${p => p.theme.colors.background};
  @media ${p => p.theme.media.tablet} {
    min-width: 768px;
  }
  @media ${p => p.theme.media.desktop} {
    min-width: 1281px;
  }
`;


export const Title = styled.h2`
  padding-top: 50px;
  padding-bottom: 40px;
  font-weight: 700;
  font-size: 48px;
  line-height: 66px;
`;