import styled from '@emotion/styled';
import mobileGradient from 'img/homePages-photos/mobile-gradient-1x.png'
import HomePhotoDesktop from 'img/homePages-photos/desktop-girl-1x.png'



export const Container = styled.div`

position: relative;
width: 320px;
height: 100%;
display: flex;
justify-content: center;
margin: 0 auto;
align-items: center;

padding-left:20px;
padding-right:20px;

@media ${p => p.theme.media.tablet} {
    
}
@media ${p => p.theme.media.desktop} {
    width: 1280px;
    background-image: url(${HomePhotoDesktop});
    
}
`

export const Title = styled.div`


font-family: 'Manrope';
font-style: normal;
font-weight: 700;

font-size: 32px;
line-height: 44px;
color: black;

align-items:center;

@media ${p => p.theme.media.tablet} {
    
}
@media ${p => p.theme.media.desktop} {
    position: absolute;
    width: 588px;
    height: 200px;
    left: 16px;
    top: 160px;
    font-size: 68px;
    line-height: 100px;
    
}
`

export const HomeImage = styled.img`
position: absolute;

// width: 320px;
// height: 337px;
// left: 0px;
top: 264px;
background-image: url(${mobileGradient});

@media ${p => p.theme.media.tablet} {
    
}
@media ${p => p.theme.media.desktop} {
    width: 624px;
    height: 655px;
    left: 656px;
    top: 113px;
    bottom: 0;
    z-index: 2;
    overflow:hidden; 
    // display:none;
    background-image: url(${HomePhotoDesktop});
}
`

export const Gradient = styled.img`

display:none;

@media ${p => p.theme.media.tablet} {
    
}
@media ${p => p.theme.media.desktop} {
position:absolute;
display:flex;
z-index: 1;

// height: 538px;
width: 100%;
top: 230px;
bottom: 0;
repeat:no-repeat;
}

`

export const Heart = styled.img`
display:none;


@media ${p => p.theme.media.tablet} {
    
}
@media ${p => p.theme.media.desktop} {
    display:flex;
    position: absolute;
    width: 91.93px;
    height: 89px;
    left: 712px;
    top: 170px;
    z-index: 3;
}
`
