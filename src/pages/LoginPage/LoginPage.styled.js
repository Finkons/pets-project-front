import styled from "@emotion/styled";
import wavesMobile from "../../img/authPages-photos/waves-mobile.png";
import wavesTablet from "../../img/authPages-photos/waves-tablet.png";
import wavesDesktop from "../../img/authPages-photos/waves-desktop.png";

export const Container = styled.div`
  max-width: 100vw;
  min-height: calc(100vh - 115px);
  background-image: url(${wavesMobile});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
  background-color: ${p => p.theme.colors.background};
  @media ${p => p.theme.media.tablet} {
    background-image: url(${wavesTablet});
    min-height: calc(100vh - 130px);
  }
  @media ${p => p.theme.media.desktop} {
    background-image: url(${wavesDesktop});
    min-height: calc(100vh - 70px);
  }
`;
