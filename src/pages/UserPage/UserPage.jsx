import { useEffect } from "react";
// import { useGetCurrentUserQuery } from "redux/auth/authApi";
import { UserData, Logout, PetsData } from "components/User";
import { Container, UserContainer } from "./UserPage.styled";

const UserPage = () => {
  useEffect(() => console.log("should refetch but useGetCurrentUserQuery doesn't fit here"));
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
