import { NavHeader, Link, Text } from "./Nav.styled";

const Nav = () => {
  return (
    <NavHeader>
      <Link to="/news">
        {" "}
        <Text>News</Text>
      </Link>
      <Link to="/notices/sell">
        {" "}
        <Text>Find pet</Text>
      </Link>
      <Link to="/friends">
        {" "}
        <Text>Our friend</Text>{" "}
      </Link>
    </NavHeader>
  );
};

export default Nav;
