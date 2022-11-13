import styled from "@emotion/styled";

export const HeartBtn = styled.button`
  width: 44px;
  height: 44px;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 0;

  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  cursor: pointer;
  color: white;

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #f59256;
    opacity: 1;
  }
`;
