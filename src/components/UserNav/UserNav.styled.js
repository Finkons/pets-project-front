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
height: 50px;
padding: 10px 28px;
text-align: center;
font-weight: 500;
font-size: 20px;
color: #111111;
background-color: #ffffff;

&:active {
    color: #ffffff;
    background-color: #f59256;
}

@media ${p => p.theme.media.tablet} {
    margin-right: 0px;
    margin-left: 20px;
}
@media ${p => p.theme.media.desktop} {

}
`;

export const IconWrapper = styled.span`
width: 23px;
heigth: 23px;
  background: red;
  align-items: center;
justify-content: center;
`;

