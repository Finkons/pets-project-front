import { UserData, Logout, PetsData } from "components/User";
import { Container } from "./UserPage.styled";

const UserPage = () => {
  return (
    <Container>
      <UserData />
      <Logout />
      <PetsData />
    </Container>
  );
};

export default UserPage;
