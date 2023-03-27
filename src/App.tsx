import { Table } from "antd";
import { useGetUsersQuery } from "./api/apiSlice";
import User from "./types/User";

const column = [
  {
    title: "Name",
    dataIndex: "firstName",
    key: "firstName",
  },
];

function App() {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  console.log(users, "data");

  return (
    <>
      <Table columns={column} dataSource={users} />
    </>
  );
}

export default App;