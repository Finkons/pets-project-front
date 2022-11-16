import { UserData, Logout, PetsData } from "components/User";
import { Container, UserContainer } from "./UserPage.styled";

const UserPage = () => {
  return (
    <Container>
      <UserContainer>
        <UserData />
        <Logout />
      </UserContainer>
      <PetsData />
    </Container>
  );
};

export default UserPage;
