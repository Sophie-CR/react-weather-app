import "./App.css";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container">
      <div className="weather-app">
        <SearchForm defaultCity="London" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
