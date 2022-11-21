import styled from "@emotion/styled";

export const CameraBtn = styled.button`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border: 0;

  background: #ffffff;
  cursor: pointer;

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const CameraText = styled.p`
  line-height: 22px;
  font-weight: normal;
  font-family: "Manrope";
  font-style: normal;
  margin-left: 4px;
`;
