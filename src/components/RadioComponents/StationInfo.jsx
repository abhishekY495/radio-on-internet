import React from "react";
import { useSelector } from "react-redux";

import defaultFavicon from "../../assets/radio.png";

export default function StationInfo() {
  const radioStationsData = useSelector((state) => state.radioStations);
  const { selectedStation } = radioStationsData;

  return (
    <div className="flex gap-1 p-1 bg-neutral-400/50 h-[15%]">
      {selectedStation?.favicon ? (
        <img
          src={selectedStation?.favicon}
          className="w-[80px] object-cover bg-black/50 p-1"
          alt={selectedStation?.name}
        />
      ) : (
        selectedStation && (
          <img
            src={defaultFavicon}
            className="w-[80px] object-cover bg-black/50 p-3"
            alt={selectedStation?.name}
          />
        )
      )}
      <p className="truncate">{selectedStation?.name}</p>
    </div>
  );
}
