import { EditBtn, EditIcon } from "./EditButton.styled";
import "./EditButton.css";

export const EditButton = ({ infoName, onClick, style }) => {
  return (
    <EditBtn className={`editBtn_${infoName}`} onClick={onClick} style={style}>
      <EditIcon />
    </EditBtn>
  );
};
