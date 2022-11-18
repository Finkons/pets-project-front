import { NavLink } from 'react-router-dom';
import { Div,AuthBtn, } from "./AuthNav.styled";


const AuthNav = () => {
    return (
        <Div>
            <NavLink to="/login">
                <AuthBtn type="button">Login</AuthBtn>
            </NavLink>
            <NavLink to="/register">
                <AuthBtn type="button">Registration</AuthBtn>
            </NavLink>
        </Div>
);
};

export default AuthNav;
