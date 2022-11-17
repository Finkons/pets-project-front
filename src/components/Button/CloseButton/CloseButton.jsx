import { CloseBtn } from "./CloseButton.styled";
import Icon from "../icons/index";

export const CloseButton = ({ onClick, className }) => {
  return (
    <CloseBtn onClick={onClick} className={className}>
      <Icon.Close />
    </CloseBtn>
  );
};
