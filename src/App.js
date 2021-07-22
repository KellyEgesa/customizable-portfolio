import "./App.css";
import HomePage from "./lib/components/Home/Home";
import NavBar from "./lib/components/NavBar/NavBar";
import { Routes } from "./lib/Routes/routes";

function App() {
  return (
    <div className="App">
      <NavBar navItems={Routes.navBarRoutes} />
      <HomePage />
    </div>
  );
}

export default App;
