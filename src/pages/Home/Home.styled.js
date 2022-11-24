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
    min-width: 768px;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
    width: 1280px;
    min-height: calc(100vh - 70px);
  }
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  width: 320px;
  @media ${p => p.theme.media.tablet} {
    width: 768px;
    @media ${p => p.theme.media.desktop} {
      width: 1280px;
      margin: 0 auto;
    }
  }
`;

export const BackgroundImageFix = styled.div`
  @media ${p => p.theme.media.desktop} {
    background-image: url(${gradient});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
    }
  }
`;

export const Title = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  margin-top: 58px;
  margin-bottom: 58px;
  margin-left: 20px;
  font-size: 32px;
  line-height: 44px;
  color: black;
  align-items: center;
  @media ${p => p.theme.media.tablet} {
    width: 588px;
    height: 200px;
    margin-left: 32px;
    margin-top: 60px;
    top: 160px;
    font-size: 68px;
    line-height: 100px;
  }
  @media ${p => p.theme.media.desktop} {
    position: absolute;
    width: 588px;
    height: 200px;
    left: 16px;
    font-size: 68px;
    line-height: 100px;
    margin-top: 103px;
    margin-left: 0px;
  }
`;

export const HomeImage = styled.div`
  @media ${p => p.theme.media.mobile} {
    min-width: 320px;
    position: absolute;
    bottom: 0;
  }
  @media ${p => p.theme.media.tablet} {
    margin: 0 auto;
    right: 50px;
  }
  @media ${p => p.theme.media.desktop} {
    img{
      min-width: 80vh;
    }
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  bottom: -5px;
  width: 100%;
  z-index: -1;
  @media ${p => p.theme.media.tablet} {
    bottom: -70px;
  }
  @media ${p => p.theme.media.desktop} {
    display: none;
  }
`;

export const Heart = styled.img`
  display: none;
  @media ${p => p.theme.media.desktop} {
    display: flex;
    position: absolute;
    width: 91.93px;
    height: 89px;
    left: 712px;
    top: 120px;
    z-index: 5;
  }
`;
