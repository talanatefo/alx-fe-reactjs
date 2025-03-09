import ProfilePage from "./components/ProfilePage";
import UserContext from "./components/UserContext";
import UserDetails from "./components/UserDetails";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div>
      <p> This is our app page</p>
      <UserContext.Provider value={userData}>
        <ProfilePage userData={userData} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
