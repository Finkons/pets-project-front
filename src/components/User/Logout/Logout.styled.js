import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: end;
  margin-top: 44px;
  @media ${p => p.theme.media.tablet} {
    margin-top: 33px;
  }
`;
