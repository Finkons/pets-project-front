import { EditBtn } from "./EditButton.styled";
import Icon from "../icons";
import "./EditButton.css";

export const EditButton = ({ infoName, onClick }) => {
  return (
    <EditBtn className={`editBtn_${infoName}`} onClick={onClick}>
      <Icon.Edit />
    </EditBtn>
  );
};
