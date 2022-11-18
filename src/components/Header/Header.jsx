import { useState } from "react";
import Navigation from "components/Navigation/Navigation";
import BurgerMenu from "components/BurgerMenu";
import Logo from "components/Logo/Logo";
import { HeaderBar } from "./Header.styled";
import { BurgerButton } from "components/Button/BurgerButton/BurgerButton";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const isMobile = window.screen.width < 1179;

  const toggleBurgerMenu = event => {
    setExpanded(prev => {
      document.body.className = prev ? "" : "no-scroll";
      return !prev;
    });
  };

  return (
    <HeaderBar>
      <Logo />

      {isMobile ? <BurgerButton onClick={toggleBurgerMenu} /> : <Navigation />}
      {expanded && <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />}
    </HeaderBar>
  );
};

export default Header;
