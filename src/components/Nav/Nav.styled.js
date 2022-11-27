import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavHeader = styled.div`
  margin-top: 60px;

  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.04em;
  align-items: center;
  @media ${p => p.theme.media.tablet} {
    margin-top: 88px;
    font-size: 48px;
    line-height: 66px;
    align-items: center;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 20px;
    line-height: 27px;
    display: flex;
    align-items: center;
    margin-top: 0;
  }
`;

export const Link = styled(NavLink)`
  margin-bottom: 40px;
  cursor: pointer;
  &.active {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline;
  }

  @media ${p => p.theme.media.tablet} {
  }
  @media ${p => p.theme.media.desktop} {
    margin-left: 80px;
    margin-bottom: 0px;
  }
`;

export const Text = styled.span``;
