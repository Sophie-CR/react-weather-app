import "./App.css";
import SearchForm from "./SearchForm";
import DailyForecast from "./DailyForecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container">
      <div className="weather-app">
        <SearchForm defaultCity="London" />
        <DailyForecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
