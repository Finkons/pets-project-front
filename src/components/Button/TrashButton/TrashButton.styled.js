import styled from "@emotion/styled";

export const TrashBtn = styled.button`
  width: 44px;
  height: 44px;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 0;

  background: #fdf7f2;
  border-radius: 50%;
  cursor: pointer;
  color: rgba(17, 17, 17, 0.6);

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #f59256;
    opacity: 1;
  }
`;
