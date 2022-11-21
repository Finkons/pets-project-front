import { useLogoutMutation } from "redux/auth/authApi";
import { Container } from "./Logout.styled";

const Logout = () => {
  const [logout] = useLogoutMutation();
  return (
    <Container>
      <button onClick={() => logout()}>Logout</button>
    </Container>
  );
};

export default Logout;
