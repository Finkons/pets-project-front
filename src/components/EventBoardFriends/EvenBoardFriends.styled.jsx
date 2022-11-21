import styled from "@emotion/styled";

export const EventBoard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media ${p => p.theme.media.mobile} {
    min-width: 320px;
    max-width: 480px;
    margin: auto;
  }
  @media ${p => p.theme.media.tablet} {
    min-width: 768px;
    max-width: 980px;
  }
  @media ${p => p.theme.media.desktop} {
    min-width: 1280px;
  }
`;
