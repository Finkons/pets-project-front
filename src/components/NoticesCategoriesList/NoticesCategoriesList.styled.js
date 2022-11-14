import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: -32px;
  @media ${p => p.theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media ${p => p.theme.media.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  margin: 32px;
`;
