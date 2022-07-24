import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <p className="current-date">
        <FormattedDate date={props.data.date} />
      </p>
      <div className="row">
        <div className="col-8">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col-4">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <ul className="current-high-low">
            <li className="weather-description text-capitalize">
              {props.data.description}
            </li>
            <li className="max-min">
              <span className="maxTemp">
                {Math.round(props.data.maxTemp)}°C
              </span>{" "}
              /{" "}
              <span className="minTemp">
                {Math.round(props.data.minTemp)}°C
              </span>{" "}
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/hr</li>
          </ul>
        </div>
        <div className="col-4">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="icon"
          />
        </div>
      </div>
    </div>
  );
}
