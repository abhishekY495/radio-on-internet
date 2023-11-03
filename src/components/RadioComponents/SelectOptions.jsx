import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import {
  fetchRadioStations,
  getSelectedValue,
  removeSelectedStation,
  setCurrentPlayingTrackName,
  setIsMute,
  setIsPlayError,
  setIsReady,
} from "../../features/radioStationsSlice";

export default function SelectOptions() {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countries);
  const languagesData = useSelector((state) => state.languages);
  const apiData = useSelector((state) => state.apiSlice);
  const radioStationsData = useSelector((state) => state.radioStations);
  const { stationBy } = radioStationsData;

  const selectHandler = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue.length === 0) {
      toast("Select Country or Language");
    } else {
      dispatch(setIsPlayError(false));
      dispatch(setIsReady(false));
      dispatch(setIsMute(true));
      dispatch(removeSelectedStation());
      dispatch(setCurrentPlayingTrackName("..."));
      dispatch(getSelectedValue(selectedValue));
      dispatch(fetchRadioStations(apiData.apiUrl));
    }
  };

  return (
    <select
      className="w-full h-[8%] bg-neutral-100 text-black focus:outline-none px-2 capitalize text-lg"
      onChange={selectHandler}
      value={stationBy}
    >
      <option value="" className="text-center text-lg">
        {countriesData?.loading
          ? "Getting Countries and Languages"
          : "Select Country or Language"}
      </option>
      {/*  */}
      <option value="" className="text-center font-semibold bg-neutral-300 text-xl">
        Countries
      </option>
      {countriesData?.data?.map(({ name, iso_3166_1 }) => {
        return (
          <option key={iso_3166_1} value={name} className="capitalize">
            {name}
          </option>
        );
      })}
      {/*  */}
      <option value="" className="text-center font-semibold bg-neutral-300 text-xl">
        Languages
      </option>
      {languagesData?.data?.map(({ name }) => {
        return (
          <option
            key={name}
            value={name + "-language"}
            className="capitalize"
          >
            {name}
          </option>
        );
      })}
    </select>
  );
}
