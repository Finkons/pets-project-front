import { useState } from "react";
import Navigation from "components/Navigation/Navigation";
import BurgerMenu from "components/BurgerMenu";
import Logo from "components/Logo/Logo";
import { HeaderBar } from "./Header.styled";
import { BurgerButton } from "components/Button/BurgerButton/BurgerButton";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const isMobile = window.screen.width <= 767;
  const isDesktop = window.screen.width >= 1280;

  const toggleBurgerMenu = () => {
    setExpanded(prev => {
      document.body.className = prev ? "" : "no-scroll";
      return !prev;
    });
  };

  return (
    <>
      <HeaderBar>
        <Logo />
        {<Navigation isMobile={isMobile} isDesktop={isDesktop} expanded={expanded} />}
        {!isDesktop && <BurgerButton onClick={toggleBurgerMenu} />}
      </HeaderBar>
      {expanded && <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} isMobile={isMobile} />}
    </>
  );
};

export default Header;
