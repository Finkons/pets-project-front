import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Button = styled(NavLink)`
  font-size: 15px;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: black;
  height: 35px;
  padding: 8px 28px;
  margin-bottom: 12px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  color: #111111;
  background-color: #ffffff;
  &.active {
    color: #ffffff;
    background-color: #f59256;
  }
  @media ${p => p.theme.media.tabletDesktop} {
    font-size: 20px;
    height: 50px;
    padding: 10px 28px;
  }
  @media ${p => p.theme.media.desktop} {
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Li = styled.li`
  margin-right: 12px;
`;
