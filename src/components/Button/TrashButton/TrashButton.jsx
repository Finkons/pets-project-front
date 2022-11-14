import { TrashBtn } from "./TrashButton.styled";
import Icon from "../icons/index";

export const TrashButton = ({ onClick }) => {
  return (
    <TrashBtn onClick={onClick}>
      <Icon.Trash />
    </TrashBtn>
  );
};
