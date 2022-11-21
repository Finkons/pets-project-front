import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  min-width: 320px;
  overflow: hidden;
  margin: 0 auto;

  @media ${p => p.theme.media.tablet} {
    min-height: 768px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 1280px;
  }
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  width: 320px;
  @media ${p => p.theme.media.tablet} {
    width: 768px;
    @media ${p => p.theme.media.desktop} {
      width: 1280px;
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 58px;
  margin-left: 20px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: black;
  align-items: center;
  @media ${p => p.theme.media.tablet} {
    width: 588px;
    height: 200px;
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
    top: 50px;
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
  bottom: 0;
  width: 320px;
  @media ${p => p.theme.media.tablet} {
    width: 100%;
    bottom: 0;
    width: 699px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 624px;
    left: 656px;
    top: 0;
    z-index: 2;
    overflow: hidden;
    margin-left: auto;
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

export const Gradient = styled.img`
  display: none;

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
    top: 60px;
    z-index: -1;
  }
`;
