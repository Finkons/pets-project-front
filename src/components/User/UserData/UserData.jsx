import { CameraButton, EditButton } from "components/Button";
import { UserImage, ItemContainer, InfoItem, EditableInfo } from "./UserData.styled";
import PropTypes from "prop-types";
import { TitleContainer, Title, InfoContainer } from "../UserCommon.styled";

const makeEditable = infoName => {
  const editableInfo = document.getElementsByClassName(`userEditable_${infoName}`).item(0);
  editableInfo.toggleAttribute("contentEditable");
  if (editableInfo.hasAttribute("contentEditable")) {
    console.log("should change color of background");
  }
  if (!editableInfo.hasAttribute("contentEditable")) {
    console.log(`${editableInfo.innerHTML} should be sent in request to be saved`);
  }
};

const UserData = ({ name = "name", email = "email", birthday = "date", phone = "number", city = "city" }) => {
  return (
    <>
      <TitleContainer>
        <Title>My information</Title>
      </TitleContainer>
      {/* От куди мені цей тайтл подіти? В pages не засунеш, не ок. Окремим компонентом? */}
      <UserImage src="https://dummyimage.com/233x233" alt="Dummy" />
      <CameraButton />
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
          <EditableInfo className="userEditable_city">{city}</EditableInfo>
          <EditButton onClick={() => makeEditable("city")} />
        </ItemContainer>
      </InfoContainer>
    </>
  );
};

UserData.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  birthday: PropTypes.string,
  phone: PropTypes.string,
  city: PropTypes.string,
};

export default UserData;
