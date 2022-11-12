import styled from "@emotion/styled";

export const Container = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
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
  font-size: 48px;
  line-height: 66px;
`;
