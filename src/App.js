import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <p className="contact-me">
          This page was built by May Ngo and is open-sourced on{" "}
          <a
            href="https://github.com/mmnngo/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://lucent-bunny-67fa23.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
