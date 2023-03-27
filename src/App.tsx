import { useGetUsersQuery } from "./api/apiSlice";
import User from "./types/User";

function App() {
  const { data } = useGetUsersQuery();

  console.log(data, "data");

  return <div className="App">Salam</div>;
}

export default App;