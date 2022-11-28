import { DoneBtn } from "./DoneButton.styled";
import Icon from "../icons";

export const DoneButton = ({ hidden, onClick }) => {
  return (
    <DoneBtn hidden={hidden} className="doneBtn" onClick={onClick}>
      <Icon.CheckMark />
    </DoneBtn>
  );
};
