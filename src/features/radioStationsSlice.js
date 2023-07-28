import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RADIO_STATIONS_API_URL } from "../utils/api_urls";
import { shuffleArray } from "../utils/shuffleArray";

const initialState = {
  stationBy: "",
  data: [],
  loading: false,
  error: false,
  currentIndex: 0,
  selectedStation: null,
  isReady: false,
  currentPlayingTrackName: "...",
  isMute: null,
};

export const fetchRadioStations = createAsyncThunk(
  "radioStations",
  async (_, { getState }) => {
    const state = getState();
    if (state.radioStations.stationBy.includes("language")) {
      const value = state.radioStations.stationBy.split("-")[0];
      const API_URL = RADIO_STATIONS_API_URL + "language=" + value;
      const response = await fetch(API_URL);
      const data = await response.json();
      const filteredData = data.filter(
        ({ lastcheckok, url_resolved }) =>
          lastcheckok === 1 && !url_resolved.includes(".m3u8")
      );
      shuffleArray(filteredData);
      return filteredData;
    } else {
      const API_URL =
        RADIO_STATIONS_API_URL + "country=" + state.radioStations.stationBy;
      const response = await fetch(API_URL);
      const data = await response.json();
      const filteredData = data.filter(
        ({ lastcheckok, url_resolved }) =>
          lastcheckok === 1 && !url_resolved.includes(".m3u8")
      );
      shuffleArray(filteredData);
      return filteredData;
    }
  }
);

export const radioStationsSlice = createSlice({
  name: "radioStations",
  initialState,
  reducers: {
    getSelectedValue: (state, action) => {
      state.stationBy = action.payload;
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
    setIsReadyToTrue: (state) => {
      state.isReady = true;
    },
    setIsReadyToFalse: (state) => {
      state.isReady = false;
    },
    setCurrentPlayingTrackName: (state, action) => {
      state.currentPlayingTrackName = action.payload;
    },
    setIsMuteToTrue: (state) => {
      state.isMute = true;
    },
    setIsMuteToFalse: (state) => {
      state.isMute = false;
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
  getSelectedValue,
  removeSelectedStation,
  nextStation,
  previousStation,
  setIsReadyToTrue,
  setIsReadyToFalse,
  setCurrentPlayingTrackName,
  setIsMuteToTrue,
  setIsMuteToFalse,
} = radioStationsSlice.actions;
export default radioStationsSlice.reducer;
