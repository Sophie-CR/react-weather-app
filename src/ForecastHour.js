import React from "react";
import "./ForecastHour.css";

export default function ForecastHour(props) {
  function hour() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    return `${hour}:00`;
  }
  let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  let iconAlt = `${props.data.weather[0].description}`;
  let temp = `${Math.round(props.data.temp)}`;
  return (
    <div className="card">
      <div className="card-body">
        <div className="hour-label">{hour()}</div>
        <div className="hour-icon">
          <img src={iconUrl} className="forecast-icon" alt={iconAlt}></img>
        </div>
        <div className="temps">
          <span className="forecast-temp">{temp}°</span>
          <span className="forecast-unit">C</span>
        </div>
      </div>
    </div>
  );
}
