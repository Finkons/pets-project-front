import { RegisterForm } from "components/AuthForm/RegisterForm";
import { Container, Gradient } from "./RegisterPage.styled";
import waves from "img/authPages-photos/waves-mobile.png";

const RegisterPage = () => {
  return (
    <Container>
      <Gradient src={waves} alt="Decorating waves" />
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;
