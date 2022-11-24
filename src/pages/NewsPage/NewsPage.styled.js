import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 26px;

  @media ${p => p.theme.media.tablet} {
    padding-top: 72px;
  }

  @media ${p => p.theme.media.desktop} {
    padding-top: 38px;
    width: 1300px;
    margin: 0 auto;
  }
`;


export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;
  margin-bottom: 28px;
  
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 1.37;
  }

  @media ${p => p.theme.media.desktop} {
    font-weight: 700;
    font-size: 48px;
    line-height: 1.37;
  }
`;

export const NewsBoard = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;