import { configureStore } from "@reduxjs/toolkit";

import countries from "../features/countriesSlice";
import radioStations from "../features/radioStationsSlice";
import languages from "../features/languagesSlice";
import apiSlice from "../features/apiSlice";

export const store = configureStore({
  reducer: {
    apiSlice: apiSlice,
    countries: countries,
    languages: languages,
    radioStations: radioStations,
  },
});
