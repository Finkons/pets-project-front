import styled from "@emotion/styled";

export const Container = styled.div`
  text-align: center;
  padding: 0 16px;
  @media ${p => p.theme.media.tablet} {
    // flex-direction: row;
  }
  @media ${p => p.theme.media.desktop} {
  }
`;

export const Title = styled.h2`
  padding-top: 50px;
  padding-bottom: 40px;
  font-weight: 700;
  font-size: 24px;
  line-height: 66px;
  @media ${p => p.theme.media.tabletDesktop} {
    font-size: 48px;
  } ;
`;

export const Div = styled.div`
  position: relative;

  @media ${p => p.theme.media.tabletDesktop} {
    display: flex;
    justify-content: space-between;
  }
`;