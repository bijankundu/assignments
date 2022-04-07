import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherData: [],
  coordinates: {
    latitude: 0,
    longitude: 0,
  },
};

export const weatherSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    setWeatherData: (state, { payload }) => {
      state.weatherData = payload;
    },
    setCoordinates: (state, { payload }) => {
      state.coordinates = payload;
    },
    resetWeatherSlice: (state) => Object.assign(state, initialState),
  },
});

export const weatherStateSelector = (state) => state.weatherData;

export const { setCoordinates, setWeatherData, resetWeatherSlice } = weatherSlice.actions;
