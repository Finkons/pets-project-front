import PropTypes from "prop-types";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import { ModalButton } from "components/Button";
import { ButtonsWrap, Wrap } from "./MultiStepForm.styled";

const Wizard = ({ children, initialValues, onSubmit, handleCancelModal }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = values => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = values => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik initialValues={snapshot} onSubmit={handleSubmit} validationSchema={step.props.validationSchema}>
      {formik => (
        <Form>
          {step}
          <ButtonsWrap>
            {stepNumber > 0 && <ModalButton onClick={() => previous(formik.values)} authorized type="button" text={"Back"} />}
            {!isLastStep && <ModalButton text={"Cancel"} type="button" authorized onClick={handleCancelModal} />}
            <Wrap>
              <ModalButton disabled={formik.isSubmitting} text={isLastStep ? "Done" : "Next"} primary type="submit" />
            </Wrap>
          </ButtonsWrap>
        </Form>
      )}
    </Formik>
  );
};

Wizard.propTypes = {
  children: PropTypes.array.isRequired,
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleCancelModal: PropTypes.func.isRequired,
};

export default Wizard;
