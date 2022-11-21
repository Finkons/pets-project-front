import { useRef } from "react";
import { CameraButton, EditButton } from "components/Button";
import { UserImage, ItemContainer, InfoItem, EditableInfo, Container } from "./UserData.styled";
import PropTypes from "prop-types";
import { InfoContainer } from "../UserCommon.styled";
import { default as UserTitle } from "./UserDataTitle";
import { notifyWarning } from "helpers/toastNotifications";
import { useEditUserDataMutation } from "redux/auth/authApi";

const UserData = ({ user }) => {
  const {
    avatarURL = "https://dummyimage.com/233x233",
    name = "Name",
    email = "mail@mail.ua",
    birthday = "00.00.0000",
    phone = "+3800000000",
    address = "City, City",
  } = user;

  const [updateUserData, { isLoading }] = useEditUserDataMutation();
  console.log(isLoading);

  const makeEditable = async infoName => {
    const editableInfo = document.getElementsByClassName(`userEditable_${infoName}`).item(0);
    editableInfo.toggleAttribute("contentEditable");
    if (editableInfo.hasAttribute("contentEditable")) {
      // console.log("should change color of background");
    }
    if (!editableInfo.hasAttribute("contentEditable")) {
      // console.log(`${editableInfo.innerHTML} should be sent in request to be saved`);
      const infoJson = `{"${infoName}": "${editableInfo.innerHTML}"}`;
      const { data } = await updateUserData(infoJson);
      console.log(data);
    }
  };

  const inputFile = useRef(null);
  const onUploadClick = () => {
    inputFile.current.click();
  };
  const onChangeFile = e => {
    !e.target.files[0] ? notifyWarning("Please choose a file") : console.log(e.target.files[0]);
  };

  return (
    <>
      <UserTitle />
      <Container>
        <UserImage src={avatarURL} alt="userImage" />
        <CameraButton onClick={onUploadClick} inputFile={inputFile} onChangeFile={onChangeFile} />
        <InfoContainer>
          <ItemContainer>
            <InfoItem>Name:</InfoItem>
            <EditableInfo className="userEditable_name">{name}</EditableInfo>
            <EditButton onClick={() => makeEditable("name")} />
          </ItemContainer>
          <ItemContainer>
            <InfoItem>Email:</InfoItem>
            <EditableInfo className="userEditable_email">{email}</EditableInfo>
            <EditButton onClick={() => makeEditable("email")} />
          </ItemContainer>
          <ItemContainer>
            <InfoItem>Birthday:</InfoItem>
            <EditableInfo className="userEditable_birthday">{birthday}</EditableInfo>
            <EditButton onClick={() => makeEditable("birthday")} />
          </ItemContainer>
          <ItemContainer>
            <InfoItem>Phone:</InfoItem>
            <EditableInfo className="userEditable_phone">{phone}</EditableInfo>
            <EditButton onClick={() => makeEditable("phone")} />
          </ItemContainer>
          <ItemContainer>
            <InfoItem>City:</InfoItem>
            <EditableInfo className="userEditable_address">{address}</EditableInfo>
            <EditButton onClick={() => makeEditable("address")} />
          </ItemContainer>
        </InfoContainer>
      </Container>
    </>
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
