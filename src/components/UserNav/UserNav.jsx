import { NavLink } from "react-router-dom";
import { Div, UserBtn, LogoutBtn, TextBtn } from "./UserNav.styled";
import Loader from "components/Loader";
import { useLogoutMutation } from "redux/auth/authApi";
import Icon from "../Button/icons/index";

const UserNav = () => {
  const [logout, { isLoading }] = useLogoutMutation();

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
          Log Out
        </LogoutBtn>
      </NavLink>
      {isLoading && <Loader />}
    </Div>
  );
};

export default UserNav;
