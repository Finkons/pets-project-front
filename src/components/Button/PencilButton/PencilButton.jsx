import { PencilBtn } from "./PensilButton.styled";
import Icon from "../icons";

export const PencilButton = ({ onClick }) => {
  return (
    <PencilBtn onClick={onClick}>
      <Icon.Pencil />
    </PencilBtn>
  );
};
