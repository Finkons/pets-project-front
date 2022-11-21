import { Container, Title, HomeImage, Heart, BackgroundImage, ImgContainer, ContentContainer } from "./Home.styled";
import girl from "img/homePages-photos/desktop-girl-1x.png";
import background from "img/homePages-photos/mobile-gradient-2x.png";
import heart from "img/homePages-photos/desktop-heart-1x.png";
// import gradient from "img/homePages-photos/Frame.png";

const Home = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>Take good care of your small pets</Title>
      </ContentContainer>

      <ImgContainer>
        <HomeImage src={girl} alt="homePhoto" />
        <BackgroundImage src={background} alt="homeBack" />
        {/* <Gradient src={gradient} alt="GradientTop" /> */}
        <Heart src={heart} alt="heart" />
      </ImgContainer>
    </Container>
  );
};

export default Home;
