import { useGetCurrentUserQuery } from "redux/auth/authApi";
import authSelectors from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { UserData, Logout, PetsData } from "components/User";
import { Container } from "./UserPage.styled";

const UserPage = () => {
  const userToken = useSelector(authSelectors.getUserToken);
  const { data: user = {}, isError, isFetching } = useGetCurrentUserQuery({ skip: userToken });

  return (
    <Container>
      <div>
        <UserData user={user} isError={isError} isFetching={isFetching} />
        <Logout />
      </div>
      <PetsData />
    </Container>
  );
};

export default UserPage;
