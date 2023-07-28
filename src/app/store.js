import { configureStore } from "@reduxjs/toolkit";

import countries from "../features/countriesSlice";
import radioStations from "../features/radioStationsSlice";
import languages from "../features/languagesSlice";

export const store = configureStore({
  reducer: {
    countries: countries,
    languages: languages,
    radioStations: radioStations,
  },
});
