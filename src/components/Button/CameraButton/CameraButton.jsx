import { CameraBtn, CameraText } from "./CameraButton.styled";
import Icon from "../icons";

export const CameraButton = ({ onClick, inputFile, onChangeFile }) => {
  return (
    <CameraBtn onClick={onClick}>
      <Icon.Camera />
      <input type="file" ref={inputFile} onChange={onChangeFile} style={{ display: "none" }} />
      <CameraText>Edit photo</CameraText>
    </CameraBtn>
  );
};
