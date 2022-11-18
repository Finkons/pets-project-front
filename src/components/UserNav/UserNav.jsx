import { NavLink } from "react-router-dom";
import { Div, UserBtn, LogoutBtn, TextBtn } from "./UserNav.styled";

import { useLogoutMutation } from "redux/auth/authApi";
import Icon from "../Button/icons/index";

const UserNav = () => {
  const [logout] = useLogoutMutation();

  return (
    <Div>
      <NavLink to="/user">
        <UserBtn type="button">
          <Icon.Account />
          <TextBtn> Account</TextBtn>
        </UserBtn>
      </NavLink>
      <NavLink>
        <LogoutBtn type="button" onClick={() => logout()}>
          Sign out
        </LogoutBtn>
      </NavLink>
    </Div>
  );
};

export default UserNav;
