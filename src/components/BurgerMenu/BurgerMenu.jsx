
import { MenuContainer, Link,Text } from "./BurgerMenu.styled";

const BurgerMenu = () => {
  return (
    <MenuContainer>
        <div>
        <Link  to="/news"> <Text>News</Text></Link>
        <Link  to="/notices/sell"> <Text>Find pet</Text></Link>
        <Link  to="/friends"> <Text>Our friend</Text> </Link>
        </div>
    </MenuContainer>
)}

export default BurgerMenu;