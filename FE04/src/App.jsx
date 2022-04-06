import React, { useState, useEffect } from "react";

import DailyForcast from "./components/DailyForcast";

import "./styles/app.css";

const App = () => {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    const coordsLocal = localStorage.getItem("coordinates");
    if (coordsLocal) {
      setCoordinates(JSON.parse(coordsLocal));
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => {
            const { latitude, longitude } = coords;
            localStorage.setItem("coordinates", JSON.stringify({ latitude, longitude }));
            setCoordinates({ latitude, longitude });
          },
          (err) => alert("Please enable your GPS position feature."),
          { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
        );
      }
    }
  }, []);

  return (
    <main>
      <DailyForcast coordinates={coordinates} />
    </main>
  );
};

export default App;
