import React, { useState } from "react";
import "./SearchForm.css";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import Loading from "./Loading";

export default function SearchForm(props) {
  const apiKey = "10c6e46bee088157ebfe63ac8c22ea67";
  let unit = "metric";
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      city: response.data.name,
      currentTimeDate: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      coords: response.data.coord,
    });
  }
  function callApi() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    callApi();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  function userLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(useMyLocation);
  }
  function useMyLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiGeoWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(`${apiGeoWeatherUrl}&appid=${apiKey}`).then(handleResponse);
  }
  if (weatherData.loaded) {
    return (
      <div className="SearchForm mb-4">
        <form className="form container" onSubmit={handleSubmit}>
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
                onClick={userLocation}
                className="btn btn-primary shadow-sm use-location w-20"
                type="submit"
              >
                📍 Use My Location
              </button>
            </div>
          </div>
        </form>
        <CurrentWeather data={weatherData} />
        <HourlyForecast coords={weatherData.coords} />
        <DailyForecast coords={weatherData.coords} />
      </div>
    );
  } else {
    callApi();
    return <Loading />;
  }
}
