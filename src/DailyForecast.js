import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DailyForecast.css";
import ForecastDay from "./ForecastDay";

export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function callApi() {
    const apiKey = "10c6e46bee088157ebfe63ac8c22ea67";
    let unit = "metric";
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&exclude=minutely,hourly&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="five-day forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col day" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    callApi();
    return "Loading...";
  }
}
