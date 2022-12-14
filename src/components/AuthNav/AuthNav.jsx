import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Div, AuthBtn } from "./AuthNav.styled";

const AuthNav = ({ toggleBurgerMenu }) => {
  return (
    <Div>
      <NavLink to="/login">
        <AuthBtn type="button" onClick={toggleBurgerMenu}>
          Login
        </AuthBtn>
      </NavLink>
      <NavLink to="/register">
        <AuthBtn type="button" onClick={toggleBurgerMenu}>
          Registration
        </AuthBtn>
      </NavLink>
    </Div>
  );
};

AuthNav.propTypes = {
  toggleBurgerMenu: PropTypes.func,
};

export default AuthNav;
