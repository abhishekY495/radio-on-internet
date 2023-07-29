import { createMetadataClient } from "@radiolise/metadata-client";

export const COUNTRIES_API_URL =
  "https://de1.api.radio-browser.info/json/countries";
export const LANGUAGES_API_URL =
  "https://de1.api.radio-browser.info/json/languages";
export const RADIO_STATIONS_API_URL =
"https://de1.api.radio-browser.info/json/stations/search?hidebroken=true&";
export const RADIOLISE_WEB_SOCKET = createMetadataClient({
  url: "wss://backend.radiolise.com/api/data-service",
});
