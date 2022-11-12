import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo'
import { Header} from "./AppBar.styled";
// import style from 'components/AppBar.module.css';
// import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';
// import authSelectors  from 'redux/auth/authSelectors';

const AppBar = () => {
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
        return (
            <Header>
                <Logo />
                <Navigation />
                {/* {isLoggedIn ? <UserNav/> : <AuthNav />} */}
                <UserNav/>
                <AuthNav />
            </Header>   
);
};

export default AppBar;
