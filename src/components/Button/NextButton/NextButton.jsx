import PropTypes from "prop-types";
import { NextBtn } from "./NextButton.styled";

export const NextButton = ({ onClick }) => {
  return <NextBtn onClick={onClick}>Next</NextBtn>;
};

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
