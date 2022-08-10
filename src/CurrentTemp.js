import React, { useState } from "react";

export default function CurrentTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="float-left">
        <span className="temp">{props.celsius}</span>
        <span>° </span>
        <span className="celsius-fahrenheit float-left">
          C |{" "}
          <a href="#/" onClick={convertToFahrenheit}>
            F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = Math.round(props.celsius * 1.8 + 32);
    return (
      <span className="float-left">
        <span className="temp">{fahrenheit}</span>
        <span>° </span>
        <span className="celsius-fahrenheit float-left">
          <a href="#/" onClick={convertToCelsius}>
            C
          </a>{" "}
          | F
        </span>
      </span>
    );
  }
}
