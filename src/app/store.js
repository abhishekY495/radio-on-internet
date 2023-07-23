import { configureStore } from "@reduxjs/toolkit";

import countries from "../features/countriesSlice";
import radioStations from "../features/radioStationsSlice";

export const store = configureStore({
  reducer: {
    countries: countries,
    radioStations: radioStations,
  },
});
