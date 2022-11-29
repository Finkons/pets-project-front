import styled from "@emotion/styled";

export const ModalContent = styled.div`
  padding: 12px;
  background: #ffffff;
  border: 1px solid #f59256;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  min-width: 120px;
`;

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
`;

export const TextPosition = styled.li`
  margin-bottom: 4px;
  display: flex;
  justify-content: flex-end;
`;

export const WorkspacePosition = styled.span`
  display: flex;
  margin-left: 12px;
  justify-content: flex-end;
`;
