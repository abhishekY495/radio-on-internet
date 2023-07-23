import React from "react";
import { useSelector } from "react-redux";

export default function SignalLight() {
  const radioStationsData = useSelector((state) => state.radioStations);
  const { selectedStation } = radioStationsData;

  return (
    <div
      className={`
        ${
          selectedStation
            ? "bg-red-500 border-red-600 shadow-red-500 shadow-[0px_10px_50px_20px]"
            : "bg-[#101010] border-[3px] border-red-800/50 shadow-red-800 shadow-[0px_5px_80px_5px]"
        }
        h-6 w-6 border border-b-0
        absolute -top-[25px] left-8
        rounded-t-full transition-all
        hover:cursor-pointer`}
    ></div>
  );
}
