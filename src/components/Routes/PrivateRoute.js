import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";

const PrivateRoute = ({ children, path = "/login" }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={path} />;
  }

  return children;
};

export default PrivateRoute;
