import React, { useState } from "react";
import "./SearchForm.css";
import axios from "axios";
const apiKey = "10c6e46bee088157ebfe63ac8c22ea67";
let unit = "metric";

export default function SearchForm() {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      city: response.data.name,
      currentTimeDate: "17:54 Tuesday 09 August 2022",
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/04d@2x.png`,
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
    });
  }
  if (weatherData.loaded) {
    return (
      <div className="container">
        <form className="form">
          <div className="row location">
            <div className="col-sm-4 location-element search">
              <input
                className="search-input form-control"
                type="search"
                aria-describedby="Enter Location"
                placeholder="Enter a location"
                autoFocus="on"
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
        <div className="row current-forecast">
          <div className="col">
            <div className="card current-card h-90">
              <div className="card-body">
                <h2 className="current-city">
                  <span className="current-city">{weatherData.city}</span>
                </h2>
                <h5 className="current-time-date">
                  {weatherData.currentTimeDate}
                </h5>
                <h6 className="description">{weatherData.description}</h6>
                <p className="current-weather">
                  <img
                    src={weatherData.iconUrl}
                    className="icon"
                    alt={weatherData.description}
                  ></img>
                  <span className="temp float-left">{weatherData.temp}</span>
                  <span>° </span>
                  <span className="celsius-fahrenheit float-left">
                    <a href="#/" className="celsius-link hidden">
                      C
                    </a>{" "}
                    |{" "}
                    <a href="#/" className="fahrenheit-link">
                      F
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card current-card details h-90">
              <div className="card-body">
                <ul className="current-details">
                  <li className="wind">
                    Wind:{" "}
                    <span className="current-wind">{weatherData.wind}</span>
                    km/h
                  </li>
                  <li className="humidity">
                    Humidity:{" "}
                    <span className="current-humidity">
                      {weatherData.humidity}
                    </span>
                    %
                  </li>
                  <li className="highLow">
                    High/Low:{" "}
                    <span className="current-high">{weatherData.high}</span>°
                    <span className="current-unit current-unit-high">C</span> /
                    <span className="current-low">{weatherData.low}</span>°
                    <span className="current-unit current-unit-low">C</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const city = "London";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return "Loading...";
}
