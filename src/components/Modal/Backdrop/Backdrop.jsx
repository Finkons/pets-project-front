import { createPortal } from "react-dom";
import { BackdropLayer } from "./Backdrop.styled";

const modalRoot = document.getElementById("modal-root");

const Backdrop = ({ children, onClick }) => {
  return createPortal(<BackdropLayer onClick={onClick}>{children}</BackdropLayer>, modalRoot);
};

export default Backdrop;
