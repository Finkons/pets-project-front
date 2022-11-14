import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo'
import { HeaderBar} from "./Header.styled";

const Header = () => {
    return (
        <HeaderBar>
            <Logo/>
            <Navigation/>
        </HeaderBar>   
)};

export default Header;