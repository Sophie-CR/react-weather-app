import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let weatherData = {
    city: "London",
    country: "GB",
    currentTimeDate: "12:08 Sunday 24 July 2022",
    description: "Sunny",
    temp: 25,
    wind: 10,
    humidity: 15,
    high: 28,
    low: 28,
  };
  return (
    <div className="row current-forecast">
      <div className="col">
        <div className="card current-card h-90">
          <div className="card-body">
            <h2 className="current-city">
              <span className="current-city">{weatherData.city}</span>,
              <span className="current-country"> {weatherData.country}</span>
            </h2>
            <h5 className="current-time-date">{weatherData.currentTimeDate}</h5>
            <h6 className="description">{weatherData.description}</h6>
            <p className="current-weather">
              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                className="icon"
                alt="{weatherData.description}"
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
                Wind: <span className="current-wind">{weatherData.wind}</span>
                km/h
              </li>
              <li className="humidity">
                Humidity:{" "}
                <span className="current-humidity">{weatherData.humidity}</span>
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
  );
}
