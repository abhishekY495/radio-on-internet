import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCountriesData } from "../../features/countriesSlice";
import {
  fetchRadioStations,
  getCountry,
  removeSelectedStation,
} from "../../features/radioStationsSlice";

export default function CountrySelector() {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countries);

  const selectCountryHandler = (e) => {
    dispatch(removeSelectedStation());
    const countryName = e.target.value;
    dispatch(getCountry(countryName));
    dispatch(fetchRadioStations());
  };

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);

  return (
    <select
      className="w-full h-[8%] text-black focus:outline-none px-2"
      onChange={selectCountryHandler}
    >
      <option value="" className="text-center">
        {countriesData?.loading ? "Getting Countries" : "Select Country"}
      </option>
      {countriesData?.data.map(({ name, iso_3166_1 }) => {
        return (
          <option key={iso_3166_1} value={name} className="text-sm">
            {name}
          </option>
        );
      })}
    </select>
  );
}
