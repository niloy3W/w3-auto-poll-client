import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../redux/features/auth/authSlice";

const SecureRoute = ({ children }) => {
  const { user: currentUser } = useSelector(selectCurrentUser);
  if (currentUser?.role === "user" || currentUser?.role === "admin") {
    return children;
  }

  return <Navigate to="/login" />;
};

export default SecureRoute;
