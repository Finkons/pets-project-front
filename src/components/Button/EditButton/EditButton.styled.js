import styled from "@emotion/styled";

export const EditBtn = styled.button`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 5px;
  border: 0;
  border-radius: 50%;

  background: #fdf7f2;
  cursor: pointer;
  color: rgba(17, 17, 17, 0.6);

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
