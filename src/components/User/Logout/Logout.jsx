import { useLogoutMutation } from "redux/auth/authApi";

export const Logout = () => {
  const [logout] = useLogoutMutation();
  return <button onClick={() => logout()}>Logout</button>;
};

export default Logout;
