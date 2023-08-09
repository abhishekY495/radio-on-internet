import { configureStore } from "@reduxjs/toolkit";

import countries from "../features/countriesSlice";
import radioStations from "../features/radioStationsSlice";
import languages from "../features/languagesSlice";
import apiSlice from "../features/apiSlice";
import searchSlice from "../features/SearchSlice";

export const store = configureStore({
  reducer: {
    apiSlice: apiSlice,
    searchSlice: searchSlice,
    countries: countries,
    languages: languages,
    radioStations: radioStations,
  },
});
