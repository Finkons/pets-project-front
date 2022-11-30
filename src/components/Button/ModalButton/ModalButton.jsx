import PropTypes from "prop-types";
import { ModalBtn } from "./ModalButton.styled";

export const ModalButton = ({ onClick, text, className, authorized, primary, children }) => {
  return (
    <ModalBtn onClick={onClick} className={className || ""} authorized={authorized || true} primary={primary}>
      {children}
      {text}
    </ModalBtn>
  );
};

ModalButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
  authorized: PropTypes.bool,
  primary: PropTypes.bool,
  children: PropTypes.object,
};
