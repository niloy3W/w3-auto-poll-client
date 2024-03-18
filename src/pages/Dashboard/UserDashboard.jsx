import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetSpecificUserQuery } from "../../redux/features/assign-parent/assign-parentApi";
import UserDataTable from "../../components/ui/Dashboard/UserDataTable";
const UserDashboard = () => {
  const { user: currentUser } = useSelector(selectCurrentUser);
  const { data: usersData } = useGetSpecificUserQuery(currentUser.id);
  const allUsers = usersData?.data;
  return (
    <div>
      <UserDataTable allUsers={allUsers} />{" "}
    </div>
  );
};

export default UserDashboard;
