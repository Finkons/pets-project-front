import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 608px;
`;

export const Input = styled.input`
  width: 608px;
  height: 44px;
  border-radius: 20px;
  padding-left: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #111111;
  border: 2px solid #fff;
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  background-color: white;
  border: 2px solid #fff;
  border-radius: 50%;
`;
