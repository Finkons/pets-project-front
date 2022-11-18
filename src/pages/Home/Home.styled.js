import styled from "@emotion/styled";
import mobileGradient from "img/homePages-photos/mobile-gradient-1x.png";
import HomePhotoDesktop from "img/homePages-photos/desktop-girl-1x.png";
import TabletGradient from "img/homePages-photos/tablet-gradient-1x.png";

export const Container = styled.div`
  position: relative;
  min-width: 320px;
  min-height: 600px;
  overflow: hidden;
  //   display: flex;
  //   justify-content: center;
  margin: 0 auto;
  //   align-items: center;
  //   padding: 0 20px;

  @media ${p => p.theme.media.tablet} {
    // width: 768px;
    min-height: 768px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 1280px;
    // min-height: 768px;
    // background-image: url(${HomePhotoDesktop});
  }
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  width: 320px;
  @media ${p => p.theme.media.tablet} {
    width: 768px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 58px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: black;
  align-items: center;

  @media ${p => p.theme.media.tablet} {
    // width: 588px;
    // height: 200px;
    left: 32px;
    top: 160px;
    font-size: 68px;
    line-height: 100px;
  }
  @media ${p => p.theme.media.desktop} {
    position: absolute;
    width: 588px;
    height: 200px;
    left: 16px;
    top: 100px;
    font-size: 68px;
    line-height: 100px;
  }
`;
export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const HomeImage = styled.img`
  //   position: absolute;
  bottom: 0;
  //   background-image: url(${mobileGradient});
  background-size: cover;

  @media ${p => p.theme.media.tablet} {
    // background-image: url(${TabletGradient});
    width: 100%;
    // margin-top: 294px;
    bottom: 0;
    width: 699px;
    // height: 733px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 624px;
    // height: 655px;
    // margin-top: 16px;
    left: 656px;
    bottom: 0;
    z-index: 2;
    overflow: hidden;
    margin-left: auto;
    // background-image: url(${HomePhotoDesktop});
    background-position: right bottom;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  bottom: -200px;
  width: 100%;
  z-index: -1;
  @media ${p => p.theme.media.tablet} {
    bottom: -400px;
  }
  @media screen and (min-width: 900px) {
    bottom: -600px;
  }
  @media ${p => p.theme.media.desktop} {
    display: none;
  }
`;

export const Gradient = styled.img`
  display: none;

  @media ${p => p.theme.media.tablet} {
  }
  @media ${p => p.theme.media.desktop} {
    position: absolute;
    display: flex;
    z-index: -1;
    width: 100%;
    top: 230px;
    bottom: 0;
    repeat: no-repeat;
  }
`;

export const Heart = styled.img`
  display: none;
  @media ${p => p.theme.media.desktop} {
    display: flex;
    position: absolute;
    width: 91.93px;
    height: 89px;
    left: 700px;
    top: 110px;
    z-index: -1;
  }
`;
