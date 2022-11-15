import { Container,Title,HomeImage,Gradient,Heart } from "./Home.styled";
import girl from "img/homePages-photos/desktop-girl-1x.png"
import heart from "img/homePages-photos/desktop-heart-1x.png"
import gradient from "img/homePages-photos/Frame.png"
// import BurgerMenu from "components/BurgerMenu/BurgerMenu"


const Home = () => {
    return (
      <>
  <Container>
    <Title> Take good care of your small pets</Title>
        <HomeImage src={girl} alt="homePhoto"/>
        <Gradient src={gradient} alt="GradientTop"/>
        <Heart src={heart} alt="heart"/>
        {/* <BurgerMenu/> */}
  </Container>
  
  </>
)};

export default Home;



