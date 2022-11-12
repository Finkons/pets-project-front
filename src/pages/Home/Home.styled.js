import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  width: 624px;
  height: 655px;
  left: 656px;
  top: 133px;
  
  @media ${p => p.theme.media.tablet} {
    color: blue;
  }
  @media ${p => p.theme.media.desktop} {
    color: red;
  }
`;

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

// export const Div = styled.div`

// background: ${p => p.theme.colors.background};

  
// `;