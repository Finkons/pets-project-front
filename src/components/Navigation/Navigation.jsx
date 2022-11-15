import { useSelector } from "react-redux";
import Nav from 'components/Nav/Nav';
import AuthNav from "components/AuthNav/AuthNav";
import UserNav from "components/UserNav/UserNav";
import  authSelectors  from "redux/auth/authSelectors";

const Navigation = () => {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

return (
    <>
        <Nav/>
        {isLoggedIn ? <UserNav /> : <AuthNav />}
        {/* <UserNav /> */}
    </>
)};

export default Navigation;
