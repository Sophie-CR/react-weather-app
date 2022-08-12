import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HourlyForecast.css";
import ForecastHour from "./ForecastHour";
import Loading from "./Loading";

export default function HourlyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.hourly);
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
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&exclude=minutely,daily&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="forecast row">
        {forecast.map(function (hourlyForecast, index) {
          if (index > 0 && index < 7) {
            return (
              <div className="col hour" key={index}>
                <ForecastHour data={hourlyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    callApi();
    return <Loading />;
  }
}
