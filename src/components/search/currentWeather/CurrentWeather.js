import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Tirana</p>
          <p className="weatherDescription">Sunny</p>
        </div>
        <img alt="weather" className="weatherIcon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameterRow">
            <span className="parameterLabel">Details</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Feels like</span>
            <span className="parameterValue">22°C</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Wind</span>
            <span className="parameterValue">22km/h</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Humidity</span>
            <span className="parameterValue">22%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
