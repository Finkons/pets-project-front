import { NavLink } from "react-router-dom";
import logo from "img/logo-photos/petly-1x.png";
import { LogoImg } from "./Logo.styled";

const Logo = () => {
  return (
    <NavLink to="/" style={{ display: "contents" }}>
      <LogoImg src={logo} alt="logo" />
    </NavLink>
  );
};

export default Logo;
