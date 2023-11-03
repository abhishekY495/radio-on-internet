import React from "react";

import AudioPlayer from "./AudioPlayer";
import Visualizer from "./Visualizer";
import StationInfo from "./StationInfo";

export default function Display() {
  return (
    <div className="w-full h-[77.5%] border border-neutral-800 rounded-t-lg p-1 pb-0">
      <AudioPlayer />
      <Visualizer />
      <StationInfo />
    </div>
  );
}
