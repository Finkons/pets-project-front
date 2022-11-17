import { ModalBtn } from "./ModalButton.styled";

export const ModalButton = ({ onClick, text, className, authorized, primary, children }) => {
  return (
    <ModalBtn onClick={onClick} className={className || ""} authorized={authorized || true} primary={primary}>
      {children}
      {text}
    </ModalBtn>
  );
};
