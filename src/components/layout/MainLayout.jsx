import { Outlet, useNavigate } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { Button, Tooltip } from "@mui/material";

const MainLayout = () => {
  const { user: currentUser } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <div
      style={{
        backgroundColor: "#EEF2FE",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div style={{ marginBottom: "4.7rem" }}>
        <Header />
      </div>
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>

      <Footer />

      <div
        style={{
          position: "fixed",
          bottom: 40,
          right: 20,
          zIndex: 1000,
        }}
      >
        {currentUser?.email && (
          <Button onClick={handleLogout} variant="contained">
            <Tooltip title="Click to logout" placement="top">
              <span> {currentUser?.email}</span>
            </Tooltip>
          </Button>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
