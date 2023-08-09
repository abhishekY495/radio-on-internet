import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const fetchRadioStationsBySearch = createAsyncThunk(
  "stationsBySearch",
  async ({ apiUrl, searchValue }) => {
    const API_URL = apiUrl + `/json/stations/byname/${searchValue}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    const filteredData = data.filter(
      ({ lastcheckok, url_resolved }) =>
        lastcheckok === 1 && !url_resolved.includes(".m3u8")
    );
    return filteredData;
  }
);

export const searchSlice = createSlice({
  name: "stationsBySearch",
  initialState,
  reducers: {
    resetData: (state) => {
      state.data = [];
      state.loading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRadioStationsBySearch.pending, (state) => {
        state.data = [];
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchRadioStationsBySearch.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        if (action.payload.length === 0) {
          state.error = true;
        }
      })
      .addCase(fetchRadioStationsBySearch.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { resetData } = searchSlice.actions;
export default searchSlice.reducer;
