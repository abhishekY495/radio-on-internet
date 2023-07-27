import React from "react";
import AudioSpectrum from "react-audio-spectrum";

import AudioPlayer from "./AudioPlayer";

export default function Visualizer() {
  return (
    <>
      <AudioPlayer />
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
    </>
  );
}
