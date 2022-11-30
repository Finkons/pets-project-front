import PropTypes from "prop-types";
import { CameraBtn, CameraText } from "./CameraButton.styled";
import Icon from "../icons";

export const CameraButton = ({ onClick, inputFile, onChangeFile }) => {
  return (
    <CameraBtn onClick={onClick}>
      <Icon.Camera />
      <input type="file" name="avatar" encType="multipart/form-data" ref={inputFile} onChange={onChangeFile} style={{ display: "none" }} />
      <CameraText>Edit photo</CameraText>
    </CameraBtn>
  );
};

CameraButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  inputFile: PropTypes.object.isRequired,
  onChangeFile: PropTypes.func.isRequired,
};
