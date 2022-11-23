import { Container, Title, HomeImage, Heart, BackgroundImage, ContentContainer, BackgroundImageFix } from "./Home.styled";
import girl from "img/homePages-photos/desktop-girl-1x.png";
import background from "img/homePages-photos/mobile-gradient-2x.png";
import heart from "img/homePages-photos/desktop-heart-1x.png";
// import gradient from "img/homePages-photos/Frame.png";

const Home = () => {
  return (
    <BackgroundImageFix>
    <HomeImage>
          <img src={girl} alt="homePhoto" />
        </HomeImage>
        <BackgroundImage src={background} alt="homeBack" />
        {/* <Gradient src={gradient} alt="GradientTop" /> */}
      <Container>
        <ContentContainer>
          <Title>Take good care of your small pets</Title>
        </ContentContainer>
        <Heart src={heart} alt="heart" />
      </Container>
    </BackgroundImageFix>
  );
};

export default Home;
