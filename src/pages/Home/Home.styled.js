import styled from '@emotion/styled';


export const Container = styled.div`
position: absolute;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 140px;
background-color:${p => p.theme.colors.background};
`

export const Title = styled.div`
position: absolute;
width: 588px;
height: 200px;
left: 16px;
top: 160px;

font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 68px;
line-height: 100px;
color: black;
`

export const HomeWrapper = styled.div`
position: relative;
width:100%;
`

export const HomeImage = styled.img`
position: absolute;
width: 624px;
height: 655px;
left: 656px;
top: 113px;
z-index: 2;
`

export const Gradient = styled.img`
position: absolute;
z-index: 1;
height: 685px;
width: auto;
top: 113px;
`

export const Heart = styled.img`

`
