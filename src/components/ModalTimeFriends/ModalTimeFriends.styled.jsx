import styled from "@emotion/styled";

export const Modal = styled.div`
width: 295px;
height: 287px;
transform: translate(25%,-60%);
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
pointer-events: none;
transition: 0.5s;
@media ${p => p.theme.media.desktop} {
  width: 295px;
  height: 287px;
  transform: translate(35%,-80%);
}
`


  /* height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0; */
 
  export const ModalContent = styled.div`
  padding: 12px;
  background: #ffffff;
  border: 1px solid #f59256;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  min-width: 96px;
  `

  export const ModalText = styled.ul`
  font-size: 12px;
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-family: sans-serif;
  line-height: 1.33;
  `

  export const TextPosition = styled.li`
  margin-bottom: 4px;
  display: flex;
  justify-content: flex-end;
  `

  export const WorkspacePosition = styled.span`
  display: flex;
  margin-left: 12px;
  justify-content: flex-end;
  `