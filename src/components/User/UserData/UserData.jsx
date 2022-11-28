import { useRef, useState } from "react";
import { CameraButton, EditButton } from "components/Button";
import { UserImage, ItemContainer, InfoItem, EditableInfo, PhotoContainer, UserContainer, Wrapper } from "./UserData.styled";
import PropTypes from "prop-types";
import { InfoContainer, Container } from "../UserCommon.styled";
import { default as UserTitle } from "./UserDataTitle";
import { notifyWarning } from "helpers/toastNotifications";
import { useUpdateUserDataMutation, useUpdateUserAvatarMutation } from "redux/auth/authApi";
import { Logout } from "../Logout";

const UserData = ({ user }) => {
  const { avatarURL, name, email, birthday, phone, address } = user;
  const [currentInfo, setCurrentInfo] = useState();
  const [updateUserData] = useUpdateUserDataMutation();
  const [updateUserAvatar] = useUpdateUserAvatarMutation();

  const editUserData = async infoName => {
    const editableInfo = document.getElementsByClassName(`userEditable_${infoName}`).item(0);
    editableInfo.toggleAttribute("contentEditable");
    const newData = { [infoName]: editableInfo.innerHTML };

    if (editableInfo.hasAttribute("contentEditable")) {
      setCurrentInfo(newData);
      editableInfo.focus();
    }
    if (!editableInfo.hasAttribute("contentEditable")) {
      if (JSON.stringify(currentInfo) !== JSON.stringify(newData)) {
        const result = await updateUserData(newData);
        if (result.error) {
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
