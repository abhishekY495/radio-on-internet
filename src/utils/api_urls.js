import { createMetadataClient } from "@radiolise/metadata-client";

export const COUNTRIES_API_URL =
  "http://de1.api.radio-browser.info/json/countries";
export const RADIO_STATIONS_API_URL =
  "http://de1.api.radio-browser.info/json/stations/bycountryexact/";
export const RADIOLISE_WEB_SOCKET = createMetadataClient({
  url: "wss://backend.radiolise.com/api/data-service",
});
