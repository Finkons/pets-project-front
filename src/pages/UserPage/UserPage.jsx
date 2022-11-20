import { useGetCurrentUserQuery } from "redux/auth/authApi";
import authSelectors from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { UserData, Logout, PetsData } from "components/User";
import { Container, UserContainer } from "./UserPage.styled";

const UserPage = () => {
  const { data: user = [], isError, isFetching } = useGetCurrentUserQuery();
  const userToken = useSelector(authSelectors.getUserToken);

  useGetCurrentUserQuery(undefined, {
    skip: !userToken,
  });
  console.log(user, isError, isFetching);

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
