import styled from '@emotion/styled';

export const Container = styled.div`
position: absolute;
height: 655px;
left: 656px;
width: 624px;
top: 133px;


@media ${p => p.theme.media.tablet} {
color: blue;
}
@media ${p => p.theme.media.desktop} {
color: red;
}
`;

// background-image: url("/src/img/homePages-photos/desktop-gradient-1-1x.png");
//   background-image: url("/src//img/homePages-photos/desktop-gradient-2-1x.png");
  
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: top top;
//   background-position: center calc(100% + 100px);

export const P = styled.div`
position: absolute;
width: 588px;
height: 200px;
// left: 16px;
// top: 160px;

font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 68px;
line-height: 100px;
color: black;

`;


// import styled from '@emotion/styled';

// export const Container = styled.div`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 140px;
//   color: ${p => p.theme.colors.inputModal};
//   color: green;
//   @media ${p => p.theme.media.tablet} {
//     color: blue;
//   }
//   @media ${p => p.theme.media.desktop} {
//     color: red;
//   }
// `;
