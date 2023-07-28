import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import SignalLight from "./RadioComponents/SignalLight";
import Display from "./RadioComponents/Display";
import SelectOptions from "./RadioComponents/SelectOptions";
import Controls from "./RadioComponents/Controls";
import { fetchCountriesData } from "../features/countriesSlice";
import { fetchLanguagesData } from "../features/languagesSlice";

export default function Radio() {
  const countriesData = useSelector((state) => state.countries);
  const languagesData = useSelector((state) => state.languages);
  const radioStationsData = useSelector((state) => state.radioStations);
  const dispatch = useDispatch();

  if (
    countriesData?.error ||
    languagesData?.error ||
    radioStationsData?.error
  ) {
    toast.error("Something went Wrong \n Try again later");
  }

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
