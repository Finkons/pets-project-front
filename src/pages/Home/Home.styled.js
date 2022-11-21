import styled from "@emotion/styled";
import gradient from "img/homePages-photos/Frame.png";

export const Container = styled.div`
  position: relative;
  min-width: 320px;
  overflow: hidden;
  margin: 0 auto;
  display: block;
  width: 100%;
  @media ${p => p.theme.media.tablet} {
    min-height: 768px;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
    min-width: 1280px;
    background-image: url(${gradient});
    // max-width: 100vw;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
    min-height: calc(100vh - 70px);
  }
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  // width: 320px;
  @media ${p => p.theme.media.tablet} {
    width: 768px;
    @media ${p => p.theme.media.desktop} {
      width: 1280px;
    }
  }
`;

// export const ContentContainer = styled.div`
//   // margin-top: 60px;
//   position: absolute;
//   margin: 0 auto;
//   width: 320px;
//   @media screen and (min-width: 768px) {
//     font-size: 68px;
//     line-height: 100px;
//     width: 768px;
//   }
//   @media screen and (min-width: 1280px) {
//     width: 1280px;
// `;

export const Title = styled.h1`
  margin-top: 58px;
  margin-bottom: 58px;
  margin-left: 20px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: black;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  @media ${p => p.theme.media.tablet} {
    width: 588px;
    height: 200px;
    left: 32px;
    top: 160px;
    font-size: 68px;
    line-height: 100px;
  }
  @media ${p => p.theme.media.desktop} {
    // position: absolute;
    width: 588px;
    height: 200px;
    // left: 16px;
    top: 50px;
    font-size: 68px;
    line-height: 100px;
    margin-top: 103px;
    margin-left: 16px;
  }
`;

export const ImgContainer = styled.div`
  // position: absolute;
  // width: 100%;
  // height: 100%;
`;

export const HomeImage = styled.img`
  bottom: 0;
  width: 320px;
  @media ${p => p.theme.media.tablet} {
    bottom: 0;
    width: 699px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 624px;
    // left: 656px;
    // top: 113px;
    margin-top: 46px;
    z-index: 2;
    overflow: hidden;
    // margin-left: auto;
    bottom: -200px;
    min-height: calc(100vh - 70px);
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  bottom: 0px;
  width: 100%;
  z-index: -1;
  @media ${p => p.theme.media.tablet} {
    bottom: -100px;
  }
  @media screen and (min-width: 900px) {
    bottom: -600px;
  }
  @media ${p => p.theme.media.desktop} {
    display: none;
  }
`;

// export const Gradient = styled.img`
//   display: none;

//   @media ${p => p.theme.media.desktop} {
//     position: absolute;
//     display: flex;
//     z-index: -1;
//     width: 100%;
//     top: 230px;
//     bottom: 0;
//     repeat: no-repeat;
//   }
// `;

export const Heart = styled.img`
  display: none;
  @media ${p => p.theme.media.desktop} {
    display: flex;
    position: absolute;
    width: 91.93px;
    height: 89px;
    left: 712px;
    top: 120px;
    z-index: -1;
  }
`;
