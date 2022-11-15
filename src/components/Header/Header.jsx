import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo'
import { HeaderBar} from "./Header.styled";
import {BurgerButton} from 'components/Button/BurgerButton/BurgerButton'


const Header = () => {
    return (
        <HeaderBar>
            <Logo/>
            <Navigation/>
            <BurgerButton/>
        </HeaderBar>   
)};

export default Header;