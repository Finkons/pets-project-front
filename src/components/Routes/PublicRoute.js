import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";

const PublicRoute = ({ children, restricted = false, path = "/user" }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return !shouldRedirect ? children : <Navigate to={path} />;
};

export default PublicRoute;
