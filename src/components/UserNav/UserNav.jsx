import { NavLink } from "react-router-dom";
import { Div } from "./UserNav.styled";

const UserNav = () => {
  return (
    <Div>
      <NavLink to="/user">
        <button type="button">Account</button>
      </NavLink>
      <NavLink>
        <button type="button">Log Out</button>
      </NavLink>
    </Div>
  );
};

export default UserNav;
