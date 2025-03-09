import { userContext } from "../App.jsx";
import { UserContext } from "./UserContext.js";
import { UseContext } from "react";

function UserDetails() {
  const userData = useContext(UserContext);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;

