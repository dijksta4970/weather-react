import React, { useState } from "react";
import axios from "axios";
import Unitchange from "./unitchange";

export default function Input() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function updateCityname(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setMessage(
      <ul>
        <li>Temperature: <Unitchange celsius={response.data.main.temp} /></li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed}m/s</li>
        <li>
          {" "}
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="icon"
          />
        </li>
      </ul>
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c52bf40f90a5a6e613ba93727930a589";
    let apiUrlbyName = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlbyName).then(showTemperature);
  }

  return (
    <div className="searchInput">
      <form onSubmit={handleSubmit}>
        <input
          type="city"
          placeholder="Which City?"
          onChange={updateCityname}
        />
        <input type="submit" value="Search!" />
      </form>

      <h2>{message}</h2>
    </div>
  );
}
