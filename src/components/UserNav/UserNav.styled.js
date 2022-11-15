import styled from "@emotion/styled";

export const Div = styled.div`
display: none;
@media ${p => p.theme.media.tablet} {
    display: flex;
    margin-left: 246px;
}
@media ${p => p.theme.media.desktop} {
    display: flex;
margin-left: 366px;
}
`;

export const UserBtn = styled.button`
margin-right: 20px;
font-size: 15px;
border: 2px solid #f59256;
border-radius: 40px;
color: black;
width: 164px;
height: 35px;
justify-content:center;
display: flex;
align-items: center;
font-weight: 500;
font-size: 20px;
color: #ffffff;
background-color: #f59256;
cursor:pointer;

// &:active {
//     color: #ffffff;
//     background-color: #f59256;
// }

@media ${p => p.theme.media.tablet} {
    width: 164px;
    height: 44px;   
}
@media ${p => p.theme.media.desktop} {
    width: 164px;
    height: 44px;
}
`;


export const LogoutBtn  = styled.button`
margin-right: 20px;
font-size: 15px;
border: 2px solid #f59256;
border-radius: 40px;
color: black;

width: 100px;
height: 35px;
// padding: 10px 28px;
text-align: center;
font-weight: 500;
font-size: 20px;
color: #111111;
background-color: #ffffff;
cursor:pointer;

// &:active {
//     color: #ffffff;
//     background-color: #f59256;
// }
&:hover{
    color: #ffffff;
    background-color: #f59256;
}

@media ${p => p.theme.media.tablet} {
    
    height: 44px;   
}
@media ${p => p.theme.media.desktop} {
    
    height: 44px;
}
`;


export const TextBtn  = styled.span`
margin-left:10px;

`;
