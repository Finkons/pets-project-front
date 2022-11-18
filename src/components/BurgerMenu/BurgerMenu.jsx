
import { MenuContainer,ButtonWrapper } from "./BurgerMenu.styled";
import { NavHeader,Link,Text } from "../Nav/Nav.styled";
import { useSelector } from "react-redux";
import AuthNav from "components/AuthNav/AuthNav";
import UserNav from "components/UserNav/UserNav";
import  authSelectors  from "redux/auth/authSelectors";

const BurgerMenu = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <MenuContainer>
      <>
      <ButtonWrapper>{isLoggedIn ? <UserNav /> : <AuthNav />}</ButtonWrapper>
      <NavHeader>
    <Link  to="/news"> <Text>News</Text></Link>
    <Link  to="/notices/sell"> <Text>Find pet</Text></Link>
    <Link  to="/friends"> <Text>Our friend</Text> </Link>
      </NavHeader>
        
    </>
    </MenuContainer>
)}

export default BurgerMenu;