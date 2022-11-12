import { NavLink } from 'react-router-dom';
import { Nav } from "./Navigation.styled";

// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';

const Navigation = () => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <Nav>
            <NavLink  to="/news"> News </NavLink>
            <NavLink  to="/notices"> Find pet</NavLink>
            <NavLink  to="/friends"> Our friend </NavLink>
        </Nav>
)};

export default Navigation;
