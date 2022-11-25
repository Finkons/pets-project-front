import styled from "@emotion/styled";

export const BackdropLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.greyText};
  backdrop-filter: blur(10px);
  padding: 0 20px;
  overflow: scroll;
  z-index: 15;
`;
