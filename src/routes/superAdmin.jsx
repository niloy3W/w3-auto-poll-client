import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logOut, selectCurrentUser } from "../redux/features/auth/authSlice";

const SuperAdmin = ({ children }) => {
  const { user: currentUser } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  if (currentUser?.role === "admin") {
    return children;
  } else {
    dispatch(logOut());
  }

  return <Navigate to="/login" />;
};

export default SuperAdmin;
