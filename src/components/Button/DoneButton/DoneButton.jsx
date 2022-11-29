import { useEffect } from "react";
import { DoneBtn } from "./DoneButton.styled";
import Icon from "../icons";
import "./DoneButton.css";

export const DoneButton = ({ infoName, onClick }) => {
  const doneBtn = document.getElementsByClassName(`doneBtn_${infoName}`).item(0);
  useEffect(() => {
    doneBtn?.classList.add("doneBtn_hidden");
  }, [doneBtn]);

  return (
    <DoneBtn className={`doneBtn_${infoName}`} onClick={onClick}>
      <Icon.CheckMark />
    </DoneBtn>
  );
};
