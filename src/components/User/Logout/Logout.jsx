import { useLogoutMutation } from "redux/auth/authApi";
import { Container } from "./Logout.styled";
import { ExitButton } from "components/Button";
import Loader from "components/Loader/Loader";

const Logout = () => {
  const [logout, { isLoading }] = useLogoutMutation();
  const onClick = () => logout();
  return (
    <Container>
      <ExitButton onClick={onClick} children={"Log Out"} />
      {isLoading && <Loader />}
    </Container>
  );
};

export default Logout;
