import styled from "@emotion/styled";

export const HeaderBar = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  padding-left: 20px;
  padding-top: 16px;
  width: 320px;
  // margin: 0 auto;
  text-align: center;
  margin-bottom: 60px;

  @media ${p => p.theme.media.tablet} {
    width: 768px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 1280px;
    margin-bottom: 0px;
  }
`;
