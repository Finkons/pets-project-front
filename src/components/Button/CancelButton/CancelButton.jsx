import PropTypes from "prop-types";
import { CancelBtn } from "./CancelButton.styled";

export const CancelButton = ({ onClick }) => {
  return <CancelBtn onClick={onClick}>Cancel</CancelBtn>;
};

CancelButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
