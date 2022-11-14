import styled from "@emotion/styled";
import colors from "../../styles/theme";
import { Field } from "formik";
import { Link as link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.colors.primaryBtnText};
  line-height: 1.4;
  letter-spacing: 0.04em;
  margin-top: 42px;
  margin-bottom: 40px;
`;

export const Input = styled(Field)`
  width: 280px;
  height: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  background: ${colors.colors.background};
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${colors.colors.greyText};
  padding: 12px 14px;
  /* :hover {
    border: 1px solid rgba(245, 146, 86, 0.5);
  } */
`;

export const Button = styled.button`
  cursor: pointer;
  border-color: #f59256;
  border-radius: 40px;
  width: 280px;
  height: 44px;
  padding: 10px 28px;
  color: white;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.04em;
  background: ${colors.colors.accent};
  margin-top: 40px;
  :hover {
    background-color: #995024;
  }
`;

export const ErrorText = styled.p`
  color: red;
  text-align: center;
  margin-top: -5px;
  margin-bottom: 15px;
`;

export const LinkBox = styled.p`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.34;
  color: ${colors.colors.greyText};
  letter-spacing: 0.04em;
  margin-top: 40px;
`;

export const Link = styled(link)`
  text-decoration-line: underline;
  color: blue;
  margin-left: 5px;
`;
