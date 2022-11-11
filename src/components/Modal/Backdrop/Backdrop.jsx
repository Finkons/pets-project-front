import { createPortal } from "react-dom";
import { BackdropLayer } from "./Backdrop.styled";

const modalRoot = document.getElementById("modal-root");

const Backdrop = ({ children }) => {
  return createPortal(<BackdropLayer>{children}</BackdropLayer>, modalRoot);
};

export default Backdrop;
