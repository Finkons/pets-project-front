import { MenuContainer, ButtonWrapper } from "./BurgerMenu.styled";
import { NavHeader, Link, Text } from "../Nav/Nav.styled";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import AuthNav from "components/AuthNav/AuthNav";
import UserNav from "components/UserNav/UserNav";
import authSelectors from "redux/auth/authSelectors";

const modalRoot = document.getElementById("modal-root");

const BurgerMenu = ({ toggleBurgerMenu, isMobile }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return createPortal(
    <MenuContainer>
      {isMobile && <ButtonWrapper onClick={toggleBurgerMenu}>{isLoggedIn ? <UserNav /> : <AuthNav />}</ButtonWrapper>}
      <NavHeader onClick={toggleBurgerMenu}>
        <Link to="/news">
          {" "}
          <Text>News</Text>
        </Link>
        <Link to="/notices/sell">
          {" "}
          <Text>Find pet</Text>
        </Link>
        <Link to="/friends">
          {" "}
          <Text>Our friend</Text>{" "}
        </Link>
      </NavHeader>
    </MenuContainer>,
    modalRoot
  );
};

export default BurgerMenu;
