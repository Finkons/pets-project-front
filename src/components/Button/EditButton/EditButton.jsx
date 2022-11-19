import { EditBtn } from "./EditButton.styled";
import Icon from "../icons";

export const EditButton = ({ onClick }) => {
  return (
    <EditBtn onClick={onClick}>
      <Icon.Edit />
    </EditBtn>
  );
};
