import { useGetCurrentUserQuery } from "redux/auth/authApi";
import authSelectors from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { UserData, PetsData } from "components/User";
import { Container } from "./UserPage.styled";

const UserPage = () => {
  const userToken = useSelector(authSelectors.getUserToken);
  const { data: user = {}, isError, isFetching } = useGetCurrentUserQuery({ skip: userToken });

  return (
    <Container>
      <UserData user={user} isError={isError} isFetching={isFetching} />
      <PetsData pets={user.pets} />
    </Container>
  );
};

export default UserPage;
