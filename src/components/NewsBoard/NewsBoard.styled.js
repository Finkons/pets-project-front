import styled from "@emotion/styled";

export const NewBoard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media ${p => p.theme.media.desktop} {
    [Title] {
      justify-content: center;
    }
    justify-content: center;
  }
`;