import { useRef } from "react";
import { CameraButton, EditButton } from "components/Button";
import { UserImage, ItemContainer, InfoItem, EditableInfo, PhotoContainer, UserContainer } from "./UserData.styled";
import PropTypes from "prop-types";
import { InfoContainer, Container } from "../UserCommon.styled";
import { default as UserTitle } from "./UserDataTitle";
import { notifyWarning } from "helpers/toastNotifications";
import { useUpdateUserDataMutation, useUpdateUserAvatarMutation } from "redux/auth/authApi";
import { Logout } from "../Logout";

const UserData = ({ user }) => {
  const {
    avatarURL = "https://dummyimage.com/233x233",
    name = "Name",
    email = "mail@mail.ua",
    birthday = "00.00.0000",
    phone = "+3800000000",
    address = "City, City",
  } = user;

  const [updateUserData] = useUpdateUserDataMutation();
  const [updateUserAvatar] = useUpdateUserAvatarMutation();

  const editUserData = infoName => {
    const editableInfo = document.getElementsByClassName(`userEditable_${infoName}`).item(0);
    editableInfo.toggleAttribute("contentEditable");
    if (editableInfo.hasAttribute("contentEditable")) {
      // console.log("should change color of background");
    }
    if (!editableInfo.hasAttribute("contentEditable")) {
      const infoJson = `${editableInfo.innerHTML}`;
      updateUserData(infoJson);
    }
  };

  const inputFile = useRef(null);
  const onUploadClick = () => {
    inputFile.current.click();
  };
  const onChangeFile = e => {
    const file = e.target.files[0];
    !file && file.type.includes("image") ? notifyWarning("Please choose an image") : updateUserAvatar(file);
  };

  return (
    <Container>
      <UserTitle />
      <UserContainer>
        <PhotoContainer>
          <UserImage src={avatarURL} alt="userImage" />
          <CameraButton onClick={onUploadClick} inputFile={inputFile} onChangeFile={onChangeFile} />
        </PhotoContainer>
        <InfoContainer>
          <ItemContainer>
            <InfoItem>Name:</InfoItem>
            <EditableInfo className="userEditable_name">{name}</EditableInfo>
            <EditButton onClick={() => editUserData("name")} />
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
