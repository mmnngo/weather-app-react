import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
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
      <p className="current-date">Saturday, July 16, 2022 18:26</p>
      <div className="row">
        <div className="c0l-8">
          <h1>New York</h1>
        </div>
        <div className="col-4">
          <span className="city-temperature">19°C</span>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <ul className="current-high-low">
            <li className="weather-description">Cloudy</li>
            <li className="current-high-low">18°C / 6°C </li>
            <li>Humidity: 80%</li>
            <li>Wind: 8 km/hr</li>
          </ul>
        </div>
        <div className="col-4">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="description"
            className="icon"
          />
        </div>
      </div>
    </div>
  );
}
