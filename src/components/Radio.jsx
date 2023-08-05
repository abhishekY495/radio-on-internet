import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SignalLight from "./RadioComponents/SignalLight";
import Display from "./RadioComponents/Display";
import SelectOptions from "./RadioComponents/SelectOptions";
import Controls from "./RadioComponents/Controls";
import { fetchCountriesData } from "../features/countriesSlice";
import { fetchLanguagesData } from "../features/languagesSlice";
import { getCountriesAndLanguagesData } from "../functions/getCountriesAndLanguagesData";

export default function Radio() {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.apiSlice);

  useEffect(() => {
    if (apiData.apiUrl.length !== 0) {
      getCountriesAndLanguagesData(
        dispatch,
        fetchCountriesData,
        fetchLanguagesData,
        apiData
      );
    }
  }, [apiData]);

  return (
    <div
      className="w-[320px] h-[550px] mx-auto mt-14 relative
        border-[3px] border-neutral-800 rounded-lg"
    >
      <SignalLight />
      <Display />
      <SelectOptions />
      <Controls />
    </div>
  );
}
