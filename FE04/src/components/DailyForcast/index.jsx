import React, { useState, useEffect } from "react";
import OpenWeatherAPI from "openweather-api-node";

import ForcastCard from "./../ForcastCard";

import "./dailyforcast.css";

const DailyForcast = ({ coordinates }) => {
  const [weatherData, setWetherData] = useState([]);

  useEffect(() => {
    if (coordinates.latitude !== 0 && coordinates.longitude !== 0) {
      let weather = new OpenWeatherAPI({
        key: import.meta.env.VITE_WEATHER_API_KEY,
        units: "metric",
      });
      weather.setLocationByCoordinates(coordinates.latitude, coordinates.longitude);
      weather.getDailyForecast(5).then((data) => {
        setWetherData(data);
      });
    }
  }, [coordinates]);

  return (
    <section className="daily-forcast">
      <h1>Daily Forcast</h1>
      {weatherData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="zone--info">
            <p>Timezone : {weatherData[0].timezone}</p>
            <p>Latitude : {coordinates.latitude}</p>
            <p>Longitude : {coordinates.longitude}</p>
          </div>
          <div className="daily--forcastrow">
            {weatherData.map(({ dt, dt_raw, weather }) => {
              const { url: image } = weather.icon;
              const { max, min } = weather.temp;

              return <ForcastCard key={dt_raw} image={image} max={max} min={min} timestamp={dt} />;
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default DailyForcast;
