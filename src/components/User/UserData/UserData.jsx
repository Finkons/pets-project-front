import { useRef, useState } from "react";
import { CameraButton, EditButton, DoneButton } from "components/Button";
import { UserImage, ItemContainer, InfoItem, EditableInfo, PhotoContainer, UserContainer, Wrapper } from "./UserData.styled";
import PropTypes from "prop-types";
import { InfoContainer, Container } from "../UserCommon.styled";
import { default as UserTitle } from "./UserDataTitle";
import { notifyWarning } from "helpers/toastNotifications";
import { useUpdateUserDataMutation, useUpdateUserAvatarMutation } from "redux/auth/authApi";
import { Logout } from "../Logout";

const UserData = ({ user }) => {
  const { avatarURL, name, email, birthday, phone, address } = user;
  const [currentInfo, setCurrentInfo] = useState({});

  let editBtnHiddenArray = [false, false, false, false, false, false];
  let doneBtnHiddenArray = [true, true, true, true, true, true];
  const [editBtnHidden, setEditBtnHidden] = useState(editBtnHiddenArray);
  const [doneBtnHidden, setDoneBtnHidden] = useState(doneBtnHiddenArray);
  const [updateUserData] = useUpdateUserDataMutation();
  const [updateUserAvatar] = useUpdateUserAvatarMutation();

  const swapToDone = () => {
    setEditBtnHidden(true);
    setDoneBtnHidden(false);
  };
  const swapToEdit = () => {
    setEditBtnHidden(false);
    setDoneBtnHidden(true);
  };

  const editUserData = infoName => {
    swapToDone();
    const editableInfo = document.getElementsByClassName(`userEditable_${infoName}`).item(0);
    editableInfo.setAttribute("contentEditable", true);
    const newData = { [infoName]: editableInfo.innerHTML };

    if (editableInfo.hasAttribute("contentEditable")) {
      setCurrentInfo(newData);
      editableInfo.focus();
    }
  };

  const submitUserData = async infoName => {
    swapToEdit();
    const editableInfo = document.getElementsByClassName(`userEditable_${infoName}`).item(0);
    editableInfo.removeAttribute("contentEditable");
    const newData = { [infoName]: editableInfo.innerHTML };

    if (!editableInfo.hasAttribute("contentEditable")) {
      if (JSON.stringify(currentInfo) !== JSON.stringify(newData)) {
        const result = await updateUserData(newData);
        if (result.error) {
          swapToDone();
          editableInfo.setAttribute("contentEditable", true);
          editableInfo.focus();
        }
      }
    }
  };

  const inputFile = useRef(null);
  const onUploadClick = () => {
    inputFile.current.click();
  };
  const onChangeFile = e => {
    const file = e.target.files[0];
    let uploadedFile = new FormData();
    uploadedFile.append("avatar", file);
    !file && file.type.includes("image") ? notifyWarning("Please choose an image") : updateUserAvatar(uploadedFile);
  };

  return (
    <Container>
      <UserTitle />
      <UserContainer>
        <Wrapper>
          <PhotoContainer>
            <UserImage src={avatarURL} alt="userImage" />
            <CameraButton onClick={onUploadClick} inputFile={inputFile} onChangeFile={onChangeFile} />
          </PhotoContainer>

          <InfoContainer>
            <ItemContainer>
              <InfoItem>Name:</InfoItem>
              <EditableInfo className="userEditable_name">{name}</EditableInfo>
              <EditButton hidden={editBtnHidden} onClick={() => editUserData("name")} />
              <DoneButton hidden={doneBtnHidden} onClick={() => submitUserData("name")} />
            </ItemContainer>
            <ItemContainer>
              <InfoItem>Email:</InfoItem>
              <EditableInfo className="userEditable_email">{email}</EditableInfo>
              <EditButton onClick={() => editUserData("email")} />
            </ItemContainer>
            <ItemContainer>
              <InfoItem>Birthday:</InfoItem>
              <EditableInfo className="userEditable_birthday">{birthday}</EditableInfo>
              <EditButton onClick={() => editUserData("birthday")} />
            </ItemContainer>
            <ItemContainer>
              <InfoItem>Phone:</InfoItem>
              <EditableInfo className="userEditable_phone">{phone}</EditableInfo>
              <EditButton onClick={() => editUserData("phone")} />
            </ItemContainer>
            <ItemContainer>
              <InfoItem>City:</InfoItem>
              <EditableInfo className="userEditable_address">{address}</EditableInfo>
              <EditButton onClick={() => editUserData("address")} />
            </ItemContainer>
          </InfoContainer>
        </Wrapper>
        <Logout />
      </UserContainer>
    </Container>
  );
};

UserData.propTypes = {
  user: PropTypes.shape({
    avatarURL: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    birthday: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
  }),
};

export default UserData;
