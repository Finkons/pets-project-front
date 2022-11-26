import { useLogoutMutation } from "redux/auth/authApi";
import { Container } from "./Logout.styled";
import { ExitButton } from "components/Button/ExitButton/ExitButton";

const Logout = () => {
  const [logout] = useLogoutMutation();
  const onClick = () => logout();
  return (
    <Container>
      <ExitButton onClick={onClick} />
    </Container>
  );
};

export default Logout;
