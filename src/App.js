import "./App.css";
import PrimaryButton from "./lib/components/Common/primaryButton/primaryButton";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PrimaryButton buttonText={"Trial Trial"} />
        {/* <IconRow icons={LandingPageIcons.icons} /> */}
      </header>
    </div>
  );
}

export default App;
