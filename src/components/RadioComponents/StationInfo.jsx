import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import defaultLogo from "../../assets/defaultLogo.svg";
import { setCurrentPlayingTrackName } from "../../features/radioStationsSlice";
import { getTrackData } from "../../functions/getTrackData";

export default function StationInfo() {
  const radioStationsData = useSelector((state) => state.radioStations);
  const { loading, selectedStation, currentPlayingTrackName } =
    radioStationsData;
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setImageError(false);
    getTrackData(
      selectedStation,
      dispatch,
      currentPlayingTrackName,
      setCurrentPlayingTrackName
    );
  }, [selectedStation]);

  return (
    <div className="flex gap-1 p-1 px-2 bg-neutral-800 h-[15%]">
      {loading && <p className="text-center">Setting up Antenna 📡</p>}
      {selectedStation && (
        <>
          <img
            src={imageError ? defaultLogo : selectedStation?.favicon}
            className="w-[70px] h-[70px] bg-white/90 border border-black p-1 rounded transition-all"
            alt={selectedStation?.name}
            onError={() => setImageError(true)}
          />
          <div className="grid grid-rows-2 leading-[15px]">
            <p
              className="text-lg font-[500] -mt-[3px] truncate"
              title={selectedStation?.name}
            >
              {selectedStation?.name}
            </p>
            <p
              className={`text-[13px] text-neutral-400 ${
                currentPlayingTrackName?.length >= 55
                  ? "-mt-[10px]"
                  : "-mt-[5px]"
              } ${currentPlayingTrackName?.length >= 95 && "truncate"}`}
              title={currentPlayingTrackName}
            >
              {currentPlayingTrackName}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
