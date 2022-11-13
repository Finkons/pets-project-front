import { NavLink } from 'react-router-dom';
import { Div,LoginBtn } from "./AuthNav.styled";

const AuthNav = () => {
    return (
        <Div>
            <NavLink to="/login">
                <LoginBtn type="button">Login</LoginBtn>
            </NavLink>
            <NavLink to="/register">
                <button type="button">Registration</button>
            </NavLink>
        </Div>
);
};

export default AuthNav;
