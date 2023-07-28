import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import SignalLight from "./RadioComponents/SignalLight";
import Display from "./RadioComponents/Display";
import SelectOptions from "./RadioComponents/SelectOptions";
import Controls from "./RadioComponents/Controls";
import { fetchCountriesData } from "../features/countriesSlice";
import { fetchLanguagesData } from "../features/languagesSlice";

export default function Radio() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesData());
    dispatch(fetchLanguagesData());
  }, []);

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
