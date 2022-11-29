import { useLogoutMutation } from "redux/auth/authApi";
import { Container } from "./Logout.styled";
import { ExitButton } from "components/Button";

const Logout = () => {
  const [logout] = useLogoutMutation();
  const onClick = () => logout();
  return (
    <Container>
      <ExitButton onClick={onClick} children={"Log Out"} />
    </Container>
  );
};

export default Logout;
