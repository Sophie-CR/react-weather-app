import React from "react";
import "./CurrentWeather.css";
import FormattedDate from "./FormattedDate";
import CurrentTemp from "./CurrentTemp";

export default function CurrentWeather(props) {
  return (
    <div className="row current-weather">
      <div className="col">
        <div className="card current-card h-90">
          <div className="card-body">
            <h2 className="current-city">
              <span className="current-city">{props.data.city}</span>
            </h2>
            <h5 className="current-time-date">
              <FormattedDate date={props.data.currentTimeDate} />
            </h5>
            <h6 className="description">{props.data.description}</h6>
            <p className="current-weather">
              <img
                src={props.data.iconUrl}
                className="current-icon"
                alt={props.data.description}
              ></img>
              <CurrentTemp celsius={props.data.temp} />
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card current-card details h-90">
          <div className="card-body">
            <ul className="current-details">
              <li className="wind">
                Wind: <span className="current-wind">{props.data.wind}</span>
                km/h
              </li>
              <li className="humidity">
                Humidity:{" "}
                <span className="current-humidity">{props.data.humidity}</span>%
              </li>
              <li className="highLow">
                High/Low:{" "}
                <span className="current-high">{props.data.high}</span>°
                <span className="current-unit current-unit-high">C</span> /
                <span className="current-low">{props.data.low}</span>°
                <span className="current-unit current-unit-low">C</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
