import { createMetadataClient } from "@radiolise/metadata-client";

export const API_URL_1 = "https://de1.api.radio-browser.info";
export const API_URL_2 = "https://fr1.api.radio-browser.info";
export const API_URL_3 = "https://at1.api.radio-browser.info";

export const RADIOLISE_WEB_SOCKET = createMetadataClient({
  url: "wss://backend.radiolise.com/api/data-service",
});
