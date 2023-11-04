import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SignalLight from "./RadioComponents/SignalLight";
import Display from "./RadioComponents/Display";
import SelectOptions from "./RadioComponents/SelectOptions";
import Controls from "./RadioComponents/Controls";
import MenuButton from "./RadioComponents/MenuButton";
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
      className="w-[360px] h-[700px] mx-auto mt-[80px] relative
        border-[3px] border-neutral-800 rounded-lg
        max-[400px]:mt-[60px] max-[400px]:w-[320px] max-[400px]:h-[600px]"
    >
      <SignalLight />
      <Display />
      <MenuButton />
      <SelectOptions />
      <Controls />
    </div>
  );
}
