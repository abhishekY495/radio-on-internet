import React, { useState } from "react";
import { useDispatch } from "react-redux";

import defaultLogo from "../assets/defaultLogo.svg";
import {
  removeSelectedStation,
  setCurrentPlayingTrackName,
  setIsPlayError,
  setIsReady,
  setSelectedStation,
} from "../features/radioStationsSlice";

export default function SearchedStation({ station }) {
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();

  const stationClickHandler = () => {
    dispatch(removeSelectedStation());
    dispatch(setCurrentPlayingTrackName("..."));
    dispatch(setIsPlayError(false));
    dispatch(setIsReady(false));
    dispatch(setSelectedStation(station));
  };

  return (
    <div
      className="flex gap-1 border-neutral-700 pb-2 border-b hover:cursor-pointer hover:opacity-90"
      onClick={stationClickHandler}
    >
      <img
        src={imageError ? defaultLogo : station?.favicon}
        className="w-[50px] h-[50px] bg-white/90 border border-black p-[2px] rounded"
        alt={station?.name}
        onError={() => setImageError(true)}
      />
      <div>
        <p title={station?.name} className="w-[220px] truncate">
          {station?.name}
        </p>
        <p
          title={station?.country}
          className="w-[220px] truncate text-neutral-400 text-sm"
        >
          {station?.country}
        </p>
      </div>
    </div>
  );
}
