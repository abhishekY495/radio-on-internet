import React from "react";

import StationInfo from "./StationInfo";
import Visualizer from "./Visualizer";

export default function Display() {
  return (
    <div className="w-full h-[75%] border border-neutral-800 rounded-t-lg p-1 pb-0">
      <Visualizer />
      <StationInfo />
    </div>
  );
}
