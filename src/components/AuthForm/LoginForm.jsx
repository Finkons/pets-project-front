import { Formik, Form, ErrorMessage } from "formik";
import { Container, Text, Input, Button, ErrorText, LinkBox, Link } from "./LoginForm.styled";
import { loginSchema } from "schemas/authSchema";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import authSelectors from 'redux/auth/authSelectors';
// import { authOperations } from 'redux/auth';
// import { Container, Form, Text, Error } from './AuthorizationForm.styled';
// import { Button, TextField } from '@mui/material';

import { useLoginMutation } from "redux/auth/authApi";

const initialValues = {
  email: "",
  password: "",
};

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>} />;
};

export const LoginForm = () => {
  const [login, status] = useLoginMutation();
  // const dispatch = useDispatch();
  // const error = useSelector(authSelectors.getUserError);
  // const location = useLocation().pathname;

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    const { email, password } = values;
    login({ email, password })
      .unwrap()
      .then(payload => {
        console.log(`User successfully registered`);
        // navigate("/"); if success - navigate user to userPage
      })
      .catch(() => console.log("Handle errors"));
    console.log(status);
    // setEmail (values.email);
    // setPassword (values.password);
    await new Promise(resolve => setTimeout(resolve, 1000));
    // await onSubmit(values);
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
