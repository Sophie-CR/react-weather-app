import React from "react";
import "./DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="five-day forecast">
      <div className="row">
        <div className="col day">
          <div className="card daily-card">
            <div className="card-body">
              <div className="day-label">Monday</div>
              <div className="day-icon">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  className="icon"
                  alt="Sunny"
                ></img>
              </div>
              <div>
                <span className="forecast-high">{Math.round(28)}</span>°
                <span className="forecast-unit-high">C</span> /{" "}
                <span className="forecast-low">{Math.round(18)}</span>°
                <span className="forecast-unit-low">C</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col day">
          <div className="card daily-card">
            <div className="card-body">
              <div className="day-label">Tuesday</div>
              <div className="day-icon">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  className="icon"
                  alt="Sunny"
                ></img>
              </div>
              <div>
                <span className="forecast-high">{Math.round(28)}</span>°
                <span className="forecast-unit-high">C</span> /{" "}
                <span className="forecast-low">{Math.round(18)}</span>°
                <span className="forecast-unit-low">C</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col day">
          <div className="card daily-card">
            <div className="card-body">
              <div className="day-label">Wednesday</div>
              <div className="day-icon">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  className="icon"
                  alt="Sunny"
                ></img>
              </div>
              <div>
                <span className="forecast-high">{Math.round(28)}</span>°
                <span className="forecast-unit-high">C</span> /{" "}
                <span className="forecast-low">{Math.round(18)}</span>°
                <span className="forecast-unit-low">C</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col day">
          <div className="card daily-card">
            <div className="card-body">
              <div className="day-label">Thursday</div>
              <div className="day-icon">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  className="icon"
                  alt="Sunny"
                ></img>
              </div>
              <div>
                <span className="forecast-high">{Math.round(28)}</span>°
                <span className="forecast-unit-high">C</span> /{" "}
                <span className="forecast-low">{Math.round(18)}</span>°
                <span className="forecast-unit-low">C</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col day">
          <div className="card daily-card">
            <div className="card-body">
              <div className="day-label">Friday</div>
              <div className="day-icon">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  className="icon"
                  alt="Sunny"
                ></img>
              </div>
              <div>
                <span className="forecast-high">{Math.round(28)}</span>°
                <span className="forecast-unit-high">C</span> /{" "}
                <span className="forecast-low">{Math.round(18)}</span>°
                <span className="forecast-unit-low">C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
