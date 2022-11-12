import { Formik, Form, ErrorMessage } from "formik";
import { Container, Text, Input, Button, ErrorText } from "./LoginForm.styled";
import { loginSchema } from "schemas/loginSchema";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import authSelectors from 'redux/auth/authSelectors';
// import { authOperations } from 'redux/auth';
// import { Container, Form, Text, Error } from './AuthorizationForm.styled';
// import { Button, TextField } from '@mui/material';

const initialValues = {
  email: "",
  password: "",
};

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>} />;
};

export const LoginForm = () => {
  // const dispatch = useDispatch();
  // const error = useSelector(authSelectors.getUserError);
  // const location = useLocation().pathname;

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const handleSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
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
              <Input type="email" name="email" placeholder="Email" />
              <FormError name="email" />
            </label>
            <label htmlFor="password">
              <Input type="password" name="password" placeholder="Password" />
              <FormError name="password" />
            </label>
            <Button disabled={isSubmitting} type="submit">
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <p>
        Don't have an account? <span>Register</span>
      </p>
    </Container>
  );
};
