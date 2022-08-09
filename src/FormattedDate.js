import React from "react";

export default function FormattedDate(props) {
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let hours = props.date.getHours();
  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let minutes = props.date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  return (
    <div>
      {hours}:{minutes} {day}
    </div>
  );
}
