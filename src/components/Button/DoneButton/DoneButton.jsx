import PropTypes from "prop-types";
import { useEffect } from "react";
import { EditBtn } from "../EditButton/EditButton.styled";
import { DoneIcon } from "./DoneButton.styled";
import "./DoneButton.css";

export const DoneButton = ({ infoName, onClick, style }) => {
  const doneBtn = document.getElementsByClassName(`doneBtn_${infoName}`).item(0);
  useEffect(() => {
    doneBtn?.classList.add("doneBtn_hidden");
  }, [doneBtn]);

  return (
    <EditBtn className={`doneBtn_${infoName}`} onClick={onClick} style={style}>
      <DoneIcon />
    </EditBtn>
  );
};

DoneButton.propTypes = {
  infoName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};
