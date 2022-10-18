import React from "react";

function WeatherBox({ weather }) {
  console.log("weather?", weather);
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp.toFixed(2)} ℃ /{" "}
        {(weather?.main.temp * 1.8 + 32).toFixed(2)} ℉
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
}

export default WeatherBox;
