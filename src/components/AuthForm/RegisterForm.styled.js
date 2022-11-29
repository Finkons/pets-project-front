import styled from "@emotion/styled";
import colors from "styles/theme";
import { Field } from "formik";
import { Link as link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 280px;
  padding-top: 42px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  @media ${p => p.theme.media.tabletDesktop} {
    width: 608px;
    top: 50%;
    background-color: ${colors.colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    padding: 60px 80px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 618px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Text = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.colors.primaryBtnText};
  line-height: 1.4;
  letter-spacing: 0.04em;
  margin-bottom: 40px;
  @media ${p => p.theme.media.tabletDesktop} {
    font-size: 36px;
    font-weight: 500;
  }
`;

export const Input = styled(Field)`
  width: 280px;
  height: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  background: ${colors.colors.background};
  font-size: 14px;
  line-height: 1.4;
  padding: 12px 14px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${colors.colors.greyText};
  outline: none;
  :hover,
  :focus {
    border: 3px solid rgba(245, 146, 86, 0.5);
  }
  @media ${p => p.theme.media.tabletDesktop} {
    width: 448px;
    height: 52px;
    font-size: 18px;
    font-weight: 400;
    padding: 14px 32px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 458px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-color: ${colors.colors.accent};
  border-radius: 40px;
  width: 280px;
  height: 44px;
  padding: 10px 28px;
  color: ${colors.colors.white};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.04em;
  background: ${colors.colors.accent};
  margin-top: 24px;
  :hover {
    background-color: #ed5a03;
  }
  @media ${p => p.theme.media.tablet} {
    width: 448px;
    height: 44px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 458px;
    height: 48px;
  }
`;

export const ButtonBack = styled.button`
  display: none;
  @media ${p => p.theme.media.desktop} {
    display: block;
    cursor: pointer;
    border: 2px solid ${colors.colors.accent};
    border-radius: 40px;
    width: 458px;
    height: 48px;
    padding: 10px 28px;
    color: ${colors.colors.black};
    font-weight: 500;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.04em;
    background: ${colors.colors.white};
    margin-top: 16px;
    :hover {
      background-color: #ed5a03;
    }
  }
`;

export const ErrorText = styled.p`
  color: red;
  text-align: center;
  font-size: 11px;
  margin-top: -16px;
  margin-bottom: 5px;
  @media ${p => p.theme.media.tablet} {
    font-size: 12px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 13px;
  }
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

export const IconEye = styled.span`
  position: absolute;
  padding-top: 11px;
  left: 90%;
  cursor: pointer;
  @media ${p => p.theme.media.tabletDesktop} {
    left: 80%;
    padding-top: 16px;
  }
`;

export const IconEyeConfirm = styled.span`
  position: absolute;
  padding-top: 11px;
  left: 90%;
  cursor: pointer;
  @media ${p => p.theme.media.tabletDesktop} {
    left: 80%;
    padding-top: 16px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
`;
