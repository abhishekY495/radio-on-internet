import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const fetchCountriesData = createAsyncThunk(
  "countries",
  async (apiUrl) => {
    const response = await fetch(apiUrl + "/json/countries");
    const data = await response.json();
    const filteredData = await data.filter(
      (country) => country.stationcount >= 50
    );
    return filteredData;
  }
);

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
