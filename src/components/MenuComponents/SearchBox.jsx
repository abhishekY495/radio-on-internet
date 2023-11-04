import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchRadioStationsBySearch,
  resetData,
} from "../../features/SearchSlice";
import SearchedStation from "./SearchedStation";

export default function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  const apiData = useSelector((state) => state.apiSlice);
  const searchedStationData = useSelector((state) => state.searchSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchValue.trim().length !== 0) {
        dispatch(
          fetchRadioStationsBySearch({ apiUrl: apiData.apiUrl, searchValue })
        );
      } else {
        dispatch(resetData());
      }
    }, 800);
    return () => clearTimeout(timeout);
  }, [searchValue]);

  useEffect(() => {
    dispatch(resetData());
  }, []);

  return (
    <div className="flex flex-col h-full">
      <input
        type="text"
        className="w-full rounded-sm border pl-2 py-1 text-black focus:outline-0 focus:border-black transition-all text-lg"
        placeholder="Search station"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div
        className={`flex flex-col gap-2 rounded bg-neutral-900 px-1 pt-2 pb-8 ${
          searchValue && "overflow-y-scroll h-full"
        }`}
      >
        {searchValue?.trim()?.length > 0 && searchedStationData?.loading && (
          <p className="text-center text-4xl mt-2 animate-spin">🛞</p>
        )}

        {searchedStationData?.error ? (
          <p className="text-center text-xl mt-2">No such Station ...</p>
        ) : (
          searchedStationData?.data?.map((station) => {
            return (
              <SearchedStation key={station.stationuuid} station={station} />
            );
          })
        )}
      </div>
    </div>
  );
}
