import styled from "@emotion/styled";

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${props => props.theme.media.tabletDesktop} {
    flex-direction: row;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${props => props.theme.media.tabletDesktop} {
    margin-left: 20px;
  }
`;
