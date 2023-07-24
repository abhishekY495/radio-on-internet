import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import defaultFavicon from "../../assets/radio.png";

export default function StationInfo() {
  const radioStationsData = useSelector((state) => state.radioStations);
  const { selectedStation } = radioStationsData;
  const [imageError, setImageError] = useState(false);

  console.log(selectedStation?.url_resolved)

  useEffect(() => {
    setImageError(false);
  }, [selectedStation]);

  return (
    <div className="flex gap-1 p-1 bg-neutral-400/50 h-[15%]">
      {selectedStation && (
        <>
          <img
            src={imageError ? defaultFavicon : selectedStation?.favicon}
            className="w-[70px] bg-black/50 p-2 rounded transition-all"
            alt=""
            onError={() => setImageError(true)}
          />
          <p className="truncate">{selectedStation?.name}</p>
        </>
      )}
    </div>
  );
}
