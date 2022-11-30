import PropTypes from "prop-types";
import { EditBtn, EditIcon } from "./EditButton.styled";
import "./EditButton.css";

export const EditButton = ({ infoName, onClick, style }) => {
  return (
    <EditBtn className={`editBtn_${infoName}`} onClick={onClick} style={style}>
      <EditIcon />
    </EditBtn>
  );
};

EditButton.propTypes = {
  infoName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};
