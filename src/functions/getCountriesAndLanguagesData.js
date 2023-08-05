import { toast } from "react-hot-toast";

export const getCountriesAndLanguagesData = (
  dispatch,
  fetchCountriesData,
  fetchLanguagesData,
  apiData
) => {
  toast.promise(
    dispatch(fetchCountriesData(apiData.apiUrl),
    dispatch(fetchLanguagesData(apiData.apiUrl))
    ),
    {
      loading: "Getting Countries and Languages",
      success: "Done",
      error: "Something went wrong.\n Try again later.",
    }
  );
};
