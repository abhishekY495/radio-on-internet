import { toast } from "react-hot-toast";

export const apiResponseCheck = async (...API_URLS) => {
  let finalApiUrl = "";
  const toastId = toast.loading("Setting Server");

  for (const API_URL of API_URLS) {
    try {
      await fetch(API_URL);
      finalApiUrl = API_URL;
      break;
    } catch {}
  }

  if (finalApiUrl) {
    toast.success("Server Set", { id: toastId });
  } else {
    toast.error("Down for maintainence", { id: toastId });
  }

  return finalApiUrl;
};
