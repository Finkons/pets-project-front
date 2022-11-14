import { NavLink } from 'react-router-dom';
import { Div,LoginBtn } from "./AuthNav.styled";

const AuthNav = () => {
    return (
        <Div>
            <NavLink to="/login">
                <LoginBtn type="button">Login</LoginBtn>
            </NavLink>
            <NavLink to="/register">
                <LoginBtn type="button">Registration</LoginBtn>
            </NavLink>
        </Div>
);
};

export default AuthNav;
