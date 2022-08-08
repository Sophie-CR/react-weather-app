import "./App.css";
import SearchForm from "./SearchForm";
import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import OpenSource from "./OpenSource";

function App() {
  return (
    <div className="App container">
      <div className="weather-app">
        <SearchForm />
        <CurrentWeather />
        <DailyForecast />
        <OpenSource />
      </div>
    </div>
  );
}

export default App;
