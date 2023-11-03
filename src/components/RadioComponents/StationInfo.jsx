import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import defaultLogo from "../../assets/defaultLogo.svg";
import { setCurrentPlayingTrackName } from "../../features/radioStationsSlice";
import { getTrackData } from "../../functions/getTrackData";

export default function StationInfo() {
  const radioStationsData = useSelector((state) => state.radioStations);
  const { selectedStation, currentPlayingTrackName } = radioStationsData;
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
    <div className="flex h-[20%] justify-start gap-2 py-[4.5px] px-1 border-t-2 border-t-neutral-800">
      {selectedStation ? (
        <>
          <img
            src={imageError ? defaultLogo : selectedStation?.favicon}
            className={`w-[90px] mt-[2px] h-[90px] ${
              imageError ? "bg-zinc-100" : "bg-zinc-400"
            } border border-black p-1 rounded transition-all`}
            alt={selectedStation?.name}
            onError={() => setImageError(true)}
          />
          <div className="grid grid-rows-2 leading-[15px]">
            <p
              className="text-xl font-[500] -mt-[1px] truncate"
              title={selectedStation?.name}
            >
              {selectedStation?.name}
            </p>
            <p
              className={`text-[15px] text-neutral-400 overflow-hidden ${
                currentPlayingTrackName?.length >= 55
                  ? "-mt-[10px]"
                  : "-mt-[15px]"
              } ${currentPlayingTrackName?.length >= 95 && "truncate"}`}
              title={currentPlayingTrackName}
            >
              {currentPlayingTrackName}
            </p>
          </div>
        </>
      ) : (
        <>
          <img
            src={defaultLogo}
            className="w-[90px] h-[90px] bg-white/90 border border-black p-1 opacity-[0.15] rounded transition-all"
            alt="radio"
          />
          <div className="grid grid-rows-2 leading-[15px] opacity-[0.15]">
            <p className="text-xl font-[500] -mt-[1px]">Station Name</p>
            <p className="text-sm -mt-[8px] leading-4">
              Current Playing Song Name
            </p>
          </div>
        </>
      )}
    </div>
  );
}
