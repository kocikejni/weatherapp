import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weatherDescription">{data.weather[0].main}</p>
        </div>
        <img alt="weather" className="weatherIcon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameterRow">
            <span className="parameterLabel">Details</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Feels like</span>
            <span className="parameterValue">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Wind</span>
            <span className="parameterValue">{data.wind.speed}km/h</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Humidity</span>
            <span className="parameterValue">{data.main.humidity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
