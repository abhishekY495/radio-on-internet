import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RADIO_STATIONS_API_URL } from "../utils/api_urls";
import { shuffleArray } from "../utils/shuffleArray";

const initialState = {
  countryName: "",
  data: [],
  loading: false,
  error: false,
  currentIndex: 0,
  selectedStation: null,
};

export const fetchRadioStations = createAsyncThunk(
  "radioStations",
  async (_, { getState }) => {
    const state = getState();
    const response = await fetch(
      RADIO_STATIONS_API_URL + state.radioStations.countryName
    );
    const data = await response.json();
    const filteredData = data.filter(({ lastcheckok }) => lastcheckok === 1);
    shuffleArray(filteredData);
    return filteredData;
  }
);

export const radioStationsSlice = createSlice({
  name: "radioStations",
  initialState,
  reducers: {
    getCountry: (state, action) => {
      state.countryName = action.payload;
    },
    nextStation: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.data.length;
      state.selectedStation = state.data[state.currentIndex];
    },
    previousStation: (state) => {
      state.currentIndex =
        (state.currentIndex - 1 + state.data.length) % state.data.length;
      state.selectedStation = state.data[state.currentIndex];
    },
    removeSelectedStation: (state) => {
      state.selectedStation = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRadioStations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRadioStations.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.selectedStation = state.data[0];
      })
      .addCase(fetchRadioStations.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {
  getCountry,
  removeSelectedStation,
  nextStation,
  previousStation,
} = radioStationsSlice.actions;
export default radioStationsSlice.reducer;
