import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  let iconAlt = `${props.data.weather[0].description}`;
  let maxTemp = `${Math.round(props.data.temp.max)}`;
  let minTemp = `${Math.round(props.data.temp.min)}`;
  return (
    <div className="card daily-card">
      <div className="card-body">
        <div className="day-label">{day()}</div>
        <div className="day-icon">
          <img src={iconUrl} className="icon" alt={iconAlt}></img>
        </div>
        <div>
          <span className="forecast-high">{maxTemp}°</span>
          <span className="forecast-unit-high">C</span> /{" "}
          <span className="forecast-low">{minTemp}°</span>
          <span className="forecast-unit-low">C</span>
        </div>
      </div>
    </div>
  );
}
