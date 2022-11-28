import { EditBtn } from "./EditButton.styled";
import Icon from "../icons";

export const EditButton = ({ hidden, onClick }) => {
  return (
    <EditBtn hidden={hidden} className="editBtn" onClick={onClick}>
      <Icon.Edit />
    </EditBtn>
  );
};
