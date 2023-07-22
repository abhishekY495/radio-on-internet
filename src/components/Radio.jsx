import React from "react";

import SignalLight from "./RadioComponents/SignalLight";
import AudioVisualizer from "./RadioComponents/AudioVisualizer";
import StationInfo from "./RadioComponents/StationInfo";
import CountrySelector from "./RadioComponents/CountrySelector";
import Controls from "./RadioComponents/Controls";

export default function Radio() {
  return (
    <div
      className="w-[320px] h-[550px] mx-auto mt-12 p-3 relative
        border border-neutral-700 rounded-lg"
    >
      <SignalLight />
      <AudioVisualizer />
      <StationInfo />
      <CountrySelector />
      <Controls />
    </div>
  );
}
