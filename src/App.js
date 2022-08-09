import "./App.css";
import SearchForm from "./SearchForm";
import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container">
      <div className="weather-app">
        <SearchForm />
        <CurrentWeather />
        <DailyForecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
