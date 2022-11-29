import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { CameraButton, EditButton, DoneButton } from "components/Button";
import { default as UserTitle } from "./UserDataTitle";
import { Logout } from "../Logout";
import Loader from "components/Loader";
import { UserImage, ItemContainer, InfoItem, EditableInfo, PhotoContainer, UserContainer, Wrapper } from "./UserData.styled";
import { InfoContainer, Container } from "../UserCommon.styled";
import { notifyWarning } from "helpers/toastNotifications";
import { useUpdateUserDataMutation, useUpdateUserAvatarMutation } from "redux/auth/authApi";

const swapButtons = (toWhat, infoName) => {
  if (toWhat === "toDone") {
    const editBtn = document.getElementsByClassName(`editBtn_${infoName}`).item(0);
    editBtn.classList.add("editBtn_hidden");
    const doneBtn = document.getElementsByClassName(`doneBtn_${infoName}`).item(0);
    doneBtn.classList.remove("doneBtn_hidden");
  }

  if (toWhat === "toEdit") {
    const editBtn = document.getElementsByClassName(`editBtn_${infoName}`).item(0);
    editBtn.classList.remove("editBtn_hidden");
    const doneBtn = document.getElementsByClassName(`doneBtn_${infoName}`).item(0);
    doneBtn.classList.add("doneBtn_hidden");
  }
};

const UserData = ({ user }) => {
  const { avatarURL, name, email, birthday, phone, address } = user;
  const [currentInfo, setCurrentInfo] = useState({});

  const [updateUserData] = useUpdateUserDataMutation();
  const [updateUserAvatar, { isLoading }] = useUpdateUserAvatarMutation();

  const editUserData = infoName => {
    swapButtons("toDone", infoName);

    const editableInfo = document.getElementsByClassName(`userEditable_${infoName}`).item(0);
    editableInfo.setAttribute("contentEditable", true);
    const newData = { [infoName]: editableInfo.innerHTML };

    if (editableInfo.hasAttribute("contentEditable")) {
      setCurrentInfo(newData);
      editableInfo.focus();
    }
  };

  const submitUserData = async infoName => {
    swapButtons("toEdit", infoName);

    const editableInfo = document.getElementsByClassName(`userEditable_${infoName}`).item(0);
    editableInfo.removeAttribute("contentEditable");
    const newData = { [infoName]: editableInfo.innerHTML };

    if (!editableInfo.hasAttribute("contentEditable")) {
      if (JSON.stringify(currentInfo) !== JSON.stringify(newData)) {
        const result = await updateUserData(newData);
        if (result.error) {
          swapButtons("toDone", infoName);
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
              <EditButton infoName={"name"} onClick={() => editUserData("name")} />
              <DoneButton infoName={"name"} onClick={() => submitUserData("name")} />
            </ItemContainer>
            <ItemContainer>
              <InfoItem>Email:</InfoItem>
              <EditableInfo className="userEditable_email">{email}</EditableInfo>
              <EditButton infoName={"email"} onClick={() => editUserData("email")} />
              <DoneButton infoName={"email"} onClick={() => submitUserData("email")} />
            </ItemContainer>
            <ItemContainer>
              <InfoItem>Birthday:</InfoItem>
              <EditableInfo className="userEditable_birthday">{birthday}</EditableInfo>
              <EditButton infoName={"birthday"} onClick={() => editUserData("birthday")} />
              <DoneButton infoName={"birthday"} onClick={() => submitUserData("birthday")} />
            </ItemContainer>
            <ItemContainer>
              <InfoItem>Phone:</InfoItem>
              <EditableInfo className="userEditable_phone">{phone}</EditableInfo>
              <EditButton infoName={"phone"} onClick={() => editUserData("phone")} />
              <DoneButton infoName={"phone"} onClick={() => submitUserData("phone")} />
            </ItemContainer>
            <ItemContainer>
              <InfoItem>City:</InfoItem>
              <EditableInfo className="userEditable_address">{address}</EditableInfo>
              <EditButton infoName={"address"} onClick={() => editUserData("address")} style={{ marginBottom: "0px" }} />
              <DoneButton infoName={"address"} onClick={() => submitUserData("address")} style={{ marginBottom: "0px" }} />
            </ItemContainer>
          </InfoContainer>
        </Wrapper>
        <Logout />
      </UserContainer>
      {isLoading && <Loader />}
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
