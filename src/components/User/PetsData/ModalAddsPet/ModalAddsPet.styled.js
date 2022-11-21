import styled from "@emotion/styled";
import { Field } from "formik";

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 161px;
  backgroung-color: white;
  padding: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${p => p.theme.colors.white};
  padding: 40px 20px;
  margin-bottom: 50px;
  border-radius: ${p => p.theme.radio.btn};
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
`;

export const TextField = styled(Field)`
  padding-left: 14px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
`;
