import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.background};
`;

export const Gradient = styled.img`
  position: absolute;
  z-index: -1;
  height: 190px;
  width: 100%;
  top: 380px;
`;
