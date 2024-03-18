import { useGetAllUsersQuery } from "../../redux/features/assign-parent/assign-parentApi";
import AdminDataTable from "../../components/ui/Dashboard/AdminDataTable";
const AdminDashboard = () => {
  const { data: usersData } = useGetAllUsersQuery();
  const allUsers = usersData?.data;
  return (
    <div>
      <AdminDataTable allUsers={allUsers} />
    </div>
  );
};

export default AdminDashboard;
