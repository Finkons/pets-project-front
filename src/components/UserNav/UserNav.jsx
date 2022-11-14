import { NavLink } from "react-router-dom";
import { Div } from "./UserNav.styled";

import { useLogoutMutation } from "redux/auth/authApi";

const UserNav = () => {
  const [logout] = useLogoutMutation();

  return (
    <Div>
      <NavLink to="/user">
        <button type="button">Account</button>
      </NavLink>
      <NavLink>
        <button type="button" onClick={() => logout()}>
          Log Out
        </button>
      </NavLink>
    </Div>
  );
};

export default UserNav;
