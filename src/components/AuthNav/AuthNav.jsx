import { NavLink } from 'react-router-dom';
import { Div } from "./AuthNav.styled";


const AuthNav = () => {
  return (
    <Div>
      <NavLink to="/login">
        <button type="button" >
          Login
        </button>
      </NavLink>
      <NavLink to="/register">
        <button type="button" >
          Registration
        </button>
      </NavLink>
    </Div>
  );
};

export default AuthNav;