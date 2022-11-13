import { Container,Title, HomeWrapper,HomeImage,Gradient,Heart } from "./Home.styled";
import girl from "img/homePages-photos/desktop-girl-1x.png"
import heart from "img/homePages-photos/desktop-heart-1x.png"
import gradient from "img/homePages-photos/Frame.png"


const Home = () => {
    return (
  <Container>
    <HomeWrapper >
      <Title> Take good care of your small pets</Title>
        <HomeImage src={girl} alt="homePhoto"/>
        <Gradient src={gradient} alt="GradientTop"/>
        <Heart src={heart} alt="circle"/>
    </HomeWrapper>
  </Container>
)};

export default Home;



