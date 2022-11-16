import { CameraBtn, CameraText } from "./CameraButton.styled";
import Icon from "../icons";

export const CameraButton = ({ onClick }) => {
  return (
    <CameraBtn onClick={onClick}>
      <Icon.Camera />
      <CameraText>Edit photo</CameraText>
    </CameraBtn>
  );
};
