import styled from "@emotion/styled";

export const HeaderBar = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  padding-left: 20px;
  padding-top: 16px;
  width: 320px;
  height: 68px;
  text-align: center;
  @media ${p => p.theme.media.tablet} {
    width: 768px;
    padding-left: 32px;
    padding-top: 20px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 1280px;
  }
`;
