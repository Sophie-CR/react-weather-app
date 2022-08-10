import React, { useState } from "react";
import "./SearchForm.css";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

const apiKey = "10c6e46bee088157ebfe63ac8c22ea67";
let unit = "metric";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      city: response.data.name,
      currentTimeDate: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
    });
  }
  function search() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.loaded) {
    return (
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="row location">
            <div className="col-sm-4 location-element search">
              <input
                className="search-input form-control"
                type="search"
                aria-describedby="Enter Location"
                placeholder="Enter a location"
                autoFocus="on"
                onChange={handleCity}
              />
            </div>
            <div className="col-sm-2 location-element">
              <input
                type="submit"
                className="btn btn-success shadow-sm search-btn w-100"
                value="🔍 Search"
              />
            </div>
            <div className="col-sm-6 location-element">
              <button
                className="btn btn-primary shadow-sm use-location w-20"
                type="submit"
              >
                📍 Use My Location
              </button>
            </div>
          </div>
        </form>
        <CurrentWeather data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
