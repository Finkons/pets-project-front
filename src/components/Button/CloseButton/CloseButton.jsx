import PropTypes from "prop-types";
import { CloseBtn } from "./CloseButton.styled";
import Icon from "../icons/index";

export const CloseButton = ({ onClick, className }) => {
  return (
    <CloseBtn onClick={onClick} className={className}>
      <Icon.Close />
    </CloseBtn>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
