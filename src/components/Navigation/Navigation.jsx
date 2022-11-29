import { useSelector } from "react-redux";
import Nav from "components/Nav/Nav";
import AuthNav from "components/AuthNav/AuthNav";
import UserNav from "components/UserNav/UserNav";
import authSelectors from "redux/auth/authSelectors";

const Navigation = ({ isMobile, isDesktop, expanded }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isDesktop && <Nav />}
      {!isMobile && !expanded && <>{!isLoggedIn ? <AuthNav /> : <UserNav />}</>}
    </>
  );
};

export default Navigation;
