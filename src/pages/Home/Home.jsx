import { Container, P } from "./Home.styled";
// var React = require('react');
// var RetinaImage = require('react-retina-image');

import girl from "img/homePages-photos/desktop-girl-1x.png"
// import gradient from "img/homeImage/desktop-gradient-1-1x.png"

const Home = () => {
    return (
    <div style = {{height: 655}}>
      <P> Take good care of your small pets</P>
    <Container style = {{backgroundImage: `url(${girl})`, backgroundPosition: `center`}}></Container>
    </div>)
};

export default Home;



