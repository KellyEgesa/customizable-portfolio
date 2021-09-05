import "./App.css";
import HomePage from "./lib/components/Home/Home";
import NavBar from "./lib/components/NavBar/NavBar";
import Profile from "./lib/components/Profile/profile";
import { Routes } from "./lib/Routes/routes";

function App() {
  return (
    <div className="App container">
      <NavBar navItems={Routes.navBarRoutes} />
      <HomePage />
      <Profile />
    </div>
  );
}

export default App;
