import React from "react";
import ReactDOM from "react-dom";
import Input from "./input";

import "./styles.css";

function App() {
  return (
    <div className="Weather">
      <h1>Weather Search Engine</h1>
      <Input />
      <p class="bio">
      This project was coded by Daisy Guan and is open-sourced on <a class="github-button"
        href="https://github.com/hokkjkm/weather-react" data-icon="octicon-eye"
        aria-label="Watch ntkme/github-buttons on GitHub">Github</a>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
