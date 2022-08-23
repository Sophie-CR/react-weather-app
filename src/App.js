import "./App.css";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container">
      <div className="logo-container">
        <a
          href="https://phenomenal-empanada-255bed.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="View my portfolio website"
        >
          <img
            src={require("./srlogo.png")}
            alt="Sophie Rosenberg logo"
            className="img-fluid sr-logo"
          />
        </a>
      </div>
      <div className="weather-app">
        <SearchForm defaultCity="London" />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
