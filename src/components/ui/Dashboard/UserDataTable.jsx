import Table from "@mui/joy/Table";
import PropTypes from "prop-types";

export default function UserDataTable({ allUsers }) {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        padding: "2rem",
      }}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <p style={{ fontWeight: "bold" }}>{allUsers?.email}</p>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "80%",
          borderRadius: "0.5rem",
        }}
      >
        <Table aria-label="table sizes" size="lg">
          <thead>
            <tr>
              <th>Sr</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {allUsers && allUsers.children.length > 0 ? (
              allUsers.children.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
UserDataTable.propTypes = {
  allUsers: PropTypes.shape({
    email: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object),
  }),
};
