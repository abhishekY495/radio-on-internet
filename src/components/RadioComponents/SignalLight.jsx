import React from "react";
import { useSelector } from "react-redux";

export default function SignalLight() {
  const radioStationsData = useSelector((state) => state.radioStations);
  const { loading, selectedStation, isReady } = radioStationsData;

  const styleClassNames = {
    loading:
      "bg-red-500 border-red-600 shadow-red-500 shadow-[0px_10px_50px_25px] animate-pulse-fast",
    selectedStation:
      "bg-red-500 border-red-600 shadow-red-500 shadow-[0px_10px_50px_25px] animate-pulse",
    isReady:
      "bg-green-500 border-green-600 shadow-green-500 shadow-[0px_10px_50px_25px]",
    default:
      "bg-[#101010] border-[2px] border-neutral-800/70 shadow-neutral-800 shadow-[0px_5px_80px_10px]",
  };

  const signalLightStyle = () => {
    if (loading) {
      return styleClassNames.loading;
    } else if (selectedStation) {
      if (isReady) {
        return styleClassNames.isReady;
      } else {
        return styleClassNames.selectedStation;
      }
    } else {
      return styleClassNames.default;
    }
  };

  return (
    <div
      className={`${signalLightStyle()}
        h-6 w-6 border-b-0
        absolute -top-[27px] left-8
        rounded-t-full transition-all
        hover:cursor-pointer`}
    ></div>
  );
}
