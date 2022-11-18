import { Formik, Form, ErrorMessage } from "formik";
import { Container, Text, Input, Button, ErrorText, LinkBox, Link } from "./LoginForm.styled";
import { loginSchema } from "schemas/authSchema";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "redux/auth/authApi";
// import { toast } from "react-toastify";

const initialValues = {
  email: "",
  password: "",
};

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>} />;
};

export const LoginForm = () => {
  const [login, status] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    const { email, password } = values;
    login({ email, password })
      .unwrap()
      .then(payload => {
        console.log(`User successfully registered`);
        navigate("/");
      })
      .catch(() => {
        console.log("Handle errors");
        // toast.error("Sorry, your email or password is incorrect! Try again!");
      });

    console.log(status);

    await new Promise(resolve => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  return (
    <Container>
      <Text>Login</Text>
      <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form autoComplete="off">
            <label htmlFor="email">
              <Input type="email" name="email" id="email" placeholder="Email" />
              <FormError name="email" />
            </label>
            <label htmlFor="password">
              <Input type="password" name="password" id="password" placeholder="Password" />
              <FormError name="password" />
            </label>
            <Button disabled={isSubmitting} type="submit">
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <LinkBox>
        Don't have an account? <Link to={"/register"}>Register</Link>
      </LinkBox>
    </Container>
  );
};
