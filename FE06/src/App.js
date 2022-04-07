import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCoordinates } from "./store/slice/weatherSlice";

import DailyForcast from "./components/DailyForcast";

import "./styles/app.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const coordsLocal = localStorage.getItem("coordinates");
    if (coordsLocal) {
      dispatch(setCoordinates(JSON.parse(coordsLocal)));
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => {
            const { latitude, longitude } = coords;
            localStorage.setItem("coordinates", JSON.stringify({ latitude, longitude }));
            dispatch(setCoordinates({ latitude, longitude }));
          },
          (err) => alert("Please enable your GPS position feature."),
          { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
        );
      }
    }
  }, []);

  return (
    <main>
      <DailyForcast />
    </main>
  );
};

export default App;
