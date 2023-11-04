import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import defaultRadioIcon from "../../assets/defaultRadioIcon.png";
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
            src={imageError ? defaultRadioIcon : selectedStation?.favicon}
            className={`w-[90px] mt-[2px] h-[90px] ${
              imageError ? "bg-zinc-100 p-3 pt-5 pb-2" : "bg-zinc-400"
            } border border-black p-1 rounded transition-all max-[400px]:w-[80px] max-[400px]:h-[75px] hover:cursor-pointer`}
            alt={selectedStation?.name}
            onError={() => setImageError(true)}
          />
          <div className="flex flex-col w-[240px] max-[400px]:w-[213px]">
            <p
              className="text-xl font-[500] -mt-[1px] truncate overflow-hidden max-[400px]:text-[18px]"
              title={selectedStation?.name}
            >
              {selectedStation?.name}
            </p>
            <p
              className="text-[15px] leading-[18px] text-neutral-400 mt-1 overflow-hidden h-[56px] max-[400px]:text-[13px] max-[400px]:leading-[16px] max-[400px]:h-[48px]"
              title={currentPlayingTrackName}
            >
              {currentPlayingTrackName}
            </p>
          </div>
        </>
      ) : (
        <>
          <img
            src={defaultRadioIcon}
            className="w-[90px] h-[90px] bg-white/90 border border-black p-1 opacity-[0.15] rounded transition-all max-[400px]:w-[80px] max-[400px]:h-[75px]"
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
