import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";



export const NavHeader = styled.div`
color: black;
display: flex;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 27px;

`

export const Link = styled(NavLink)`
margin-left: 80px;
// Font family: Manrope
// Font style: Medium
// Font size: 30px
// Line height: 27px
// Line height: 100%
// Align: Left
// Vertical align: Center
// Letter spacing: 4%

`

export const Text = styled.span`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 27px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: black;

`
