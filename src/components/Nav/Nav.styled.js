import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";



export const NavHeader = styled.div`
display: none;
@media ${p => p.theme.media.tablet} {
    
}
@media ${p => p.theme.media.desktop} {
    color: black;
    display: flex;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
}
`

export const Link = styled(NavLink)`
margin-left: 80px;
cursor:pointer;
`

export const Text = styled.span`
align-items: center;
letter-spacing: 0.04em;
color: black;
&:active {
    color: ${p => p.theme.colors.accent};
    
}
&:hover {
    color: ${p => p.theme.colors.accent};
    
}

`
