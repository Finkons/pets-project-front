import { NavLink } from "react-router-dom";
import { Div, UserBtn, IconWrapper } from "./UserNav.styled";

import { useLogoutMutation } from "redux/auth/authApi";
import Icon from "../Button/icons/index";

const UserNav = () => {
  const [logout] = useLogoutMutation();

  return (
    <Div>
      <NavLink to="/user">
        <UserBtn type="button">
          <IconWrapper>
            <Icon.Account/>
            </IconWrapper>Account</UserBtn>
      </NavLink>
      <NavLink>
        <UserBtn type="button" onClick={() => logout()}>
          Log Out
        </UserBtn>
      </NavLink>
    </Div>
  );
};

export default UserNav;
