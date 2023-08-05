import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const fetchLanguagesData = createAsyncThunk(
  "languages",
  async (apiUrl) => {
    const response = await fetch(apiUrl + "/json/languages");
    const data = await response.json();
    const filteredData = await data.filter(
      ({ stationcount }) => stationcount >= 30
    );
    return filteredData;
  }
);

export const languagesSlice = createSlice({
  name: "languages",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanguagesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLanguagesData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLanguagesData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default languagesSlice.reducer;
