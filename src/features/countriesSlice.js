import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { COUNTRIES_API_URL } from "../utils/api_urls";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const fetchCountriesData = createAsyncThunk("countries", async () => {
  const response = await fetch(COUNTRIES_API_URL);
  const data = await response.json();
  const filteredData = await data.filter(
    (country) => country.stationcount >= 50
  );
  return filteredData;
});

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountriesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountriesData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCountriesData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default countriesSlice.reducer;
