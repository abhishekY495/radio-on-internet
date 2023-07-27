import React from "react";
import AudioSpectrum from "react-audio-spectrum";
import { useSelector } from "react-redux";

import defaultVisualizer from "../../assets/defaultVisualizer.png";

export default function Visualizer() {
  const stationsData = useSelector((state) => state.radioStations);
  const { selectedStation } = stationsData;

  return selectedStation ? (
    <div className="h-[80%] px-2">
      <AudioSpectrum
        id="canvas"
        height={318}
        width={290}
        audioId={"audio-element"}
        capHeight={0}
        meterWidth={3}
        meterCount={80}
        meterColor={[
          { stop: 0, color: "gray" },
          { stop: 0.5, color: "gray" },
          { stop: 1, color: "gray" },
        ]}
        gap={4}
      />
    </div>
  ) : (
    <div className="h-[80%] flex opacity-20">
      <img src={defaultVisualizer} className="pb-2" alt="default visualizer" />
    </div>
  );
}
