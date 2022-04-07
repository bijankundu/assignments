import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "./slice/weatherSlice.js";

const store = configureStore({
  reducer: {
    weatherData: weatherSlice.reducer,
  },
});

export default store;
