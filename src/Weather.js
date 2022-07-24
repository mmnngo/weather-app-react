import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="card">
        <div className="Weather">
          <form>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  autoFocus="on"
                  autoComplete="off"
                  className="form-control"
                  placeholder="Enter city here"
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <p className="current-date">
          <FormattedDate date={weatherData.date} />
        </p>
        <div className="row">
          <div className="col-8">
            <h1>{weatherData.city}</h1>
          </div>
          <div className="col-4">
            <span className="city-temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <ul className="current-high-low">
              <li className="weather-description text-capitalize">
                {weatherData.description}
              </li>
              <li className="current-high-low">
                {Math.round(weatherData.maxTemp)}°C /{" "}
                {Math.round(weatherData.minTemp)}°C{" "}
              </li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/hr</li>
            </ul>
          </div>
          <div className="col-4">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="icon"
            />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "65b5662e22ff1bb3952c072792011a99";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
