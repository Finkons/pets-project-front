import styled from "@emotion/styled";

export const BurgerBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 20px;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  margin-left: 163px;
  cursor: pointer;

  @media ${p => p.theme.media.tablet} {
    display: flex;
    margin-left: auto;
    margin-right: 32px;
  }
  // @media ${p => p.theme.media.desktop} {
  //     display: none;
  // }
`;
