import { Formik, Form, ErrorMessage } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { stepOneRegistSchema, stepTwoRegistSchema } from "schemas/authSchema";
import { Container, Text, Input, InputWrapper, IconEye, IconEyeConfirm, Button, ButtonBack, LinkBox, Link, ErrorText } from "./RegisterForm.styled";
// import { toast } from "react-toastify";
import { useRegisterMutation } from "redux/auth/authApi";
import { ImEye, ImEyeBlocked } from "react-icons/im";

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>} />;
};

export const RegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    location: "",
    phone: "",
  });
  const [register] = useRegisterMutation();
  //status should be used for spinner
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = formData => {
    // console.log(formData);

    const { email, password, confirmPassword, name, location: address, phone } = formData;
    register({ email, password, confirmPassword, name, address, phone })
      .unwrap()
      .then(() => {
        navigate("/user");
      })
      .catch(error => {
        console.log("Handle errors");
        // toast.error("Sorry, your email or password is incorrect! Try again!");
      });
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <StepOne
      next={handleNextStep}
      data={data}
      // errors={errors}
    />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  // console.log(status);

  return (
    <Container>
      <Text>Registration</Text>
      {steps[currentStep]}
      <LinkBox>
        Already have an account? <Link to={"/login"}>Login</Link>
      </LinkBox>
    </Container>
  );
};

const StepOne = props => {
  const [visible, setVisible] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const handleClickVisible = () => {
    setVisible(!visible);
  };
  const handleClickVisibleConfirm = () => {
    setVisibleConfirm(!visibleConfirm);
  };

  const handleSubmit = values => {
    props.next(values);
  };
  return (
    <Formik initialValues={props.data} validationSchema={stepOneRegistSchema} onSubmit={handleSubmit}>
      {() => (
        <Form autoComplete="off">
          <label htmlFor="email">
            <Input type="email" name="email" id="email" placeholder="Email" />
            <FormError name="email" />
          </label>
          <label htmlFor="password">
            <InputWrapper>
              <Input type={visible ? "text" : "password"} name="password" id="password" placeholder="Password" />
              <IconEye onClick={handleClickVisible}>{visible ? <ImEye /> : <ImEyeBlocked />}</IconEye>
            </InputWrapper>
            <FormError name="password" />
          </label>
          <label htmlFor="confirmPassword">
            <InputWrapper>
              <Input type={visibleConfirm ? "text" : "password"} name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
              <IconEyeConfirm onClick={handleClickVisibleConfirm}>{visibleConfirm ? <ImEye /> : <ImEyeBlocked />}</IconEyeConfirm>
            </InputWrapper>
            <FormError name="confirmPassword" />
          </label>
          <Button type="submit">Next</Button>
        </Form>
      )}
    </Formik>
  );
};

const StepTwo = props => {
  const handleSubmit = (values, actions) => {
    props.next(values, true);
    actions.resetForm();
  };
  return (
    <Formik initialValues={props.data} validationSchema={stepTwoRegistSchema} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form autoComplete="off">
          <label htmlFor="name">
            <Input type="text" name="name" id="name" placeholder="Name" />
            <FormError name="name" />
          </label>
          <label htmlFor="location">
            <Input type="text" name="location" id="location" placeholder="City, region" />
            <FormError name="location" />
          </label>
          <label htmlFor="phone">
            <Input type="tel" name="phone" id="phone" placeholder="Mobile phone" />
            <FormError name="phone" />
          </label>
          <Button type="submit">Register</Button>
          <ButtonBack type="button" onClick={() => props.prev(values)}>
            Back
          </ButtonBack>
        </Form>
      )}
    </Formik>
  );
};
