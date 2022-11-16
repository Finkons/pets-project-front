import { CameraButton, PencilButton } from "components/Button";
import { UserInfoContainer, UserImage } from "./UserData.styled";
import { Container, TitleContainer, Title, PetsItemInfo, PetsItemPara } from "../PetsData/PetsData.styled";

const UserData = ({ name, email, birthday, phone, city }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>My information</Title>
      </TitleContainer>
      <UserInfoContainer>
        <UserImage src="https://dummyimage.com/233x233" alt="Dummy" />
        <CameraButton />
        <PetsItemInfo>
          <PetsItemPara>
            Name: {name}
            <PencilButton />
          </PetsItemPara>
          <PetsItemPara>
            Email: {email}
            <PencilButton />
          </PetsItemPara>
          <PetsItemPara>
            Birthday: {birthday}
            <PencilButton />
          </PetsItemPara>
          <PetsItemPara>
            Phone: {phone}
            <PencilButton />
          </PetsItemPara>
          <PetsItemPara>
            City: {city}
            <PencilButton />
          </PetsItemPara>
        </PetsItemInfo>
      </UserInfoContainer>
    </Container>
  );
};

export default UserData;
