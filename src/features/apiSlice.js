import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { API_URL_1, API_URL_2, API_URL_3 } from "../utils/api_urls";
import { apiResponseCheck } from "../functions/apiResponseCheck";

const initialState = {
  apiUrl: "",
  error: false,
};

export const setAPI = createAsyncThunk("setAPI", async () => {
  const apiUrl = await apiResponseCheck(API_URL_1, API_URL_2, API_URL_3);
  return apiUrl;
});

export const apiSlice = createSlice({
  name: "setAPI",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setAPI.fulfilled, (state, action) => {
      state.apiUrl = action.payload;
      state.error = false;
    });
    builder.addCase(setAPI.rejected, (state) => {
      state.error = true;
    });
  },
});

export default apiSlice.reducer;
