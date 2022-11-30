import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { BackdropLayer } from "./Backdrop.styled";

const modalRoot = document.getElementById("modal-root");

const Backdrop = ({ children, onClick }) => {
  return createPortal(<BackdropLayer onClick={onClick}>{children}</BackdropLayer>, modalRoot);
};

Backdrop.propTypes = {
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
