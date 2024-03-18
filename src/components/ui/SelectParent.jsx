import Form from "react-bootstrap/Form";
import { useGetAllUsersQuery } from "../../redux/features/assign-parent/assign-parentApi";

function SelectParent({ setParentId }) {
  const { data: allUsers, isFetching } = useGetAllUsersQuery();

  // Handling loading state
  if (isFetching) {
    return <div>Loading...</div>;
  }

  const handleParentChange = (event) => {
    const selectedParentId = event.target.value;
    setParentId(selectedParentId);
  };

  return (
    <Form.Select
      size="lg"
      aria-label="Default select example"
      onChange={handleParentChange}
    >
      <option>Open this select menu</option>

      {allUsers?.data.length > 0 &&
        allUsers.data.map((d) => (
          <option key={d._id} value={d._id}>
            {d.email}
          </option>
        ))}
    </Form.Select>
  );
}

export default SelectParent;
