import React from "react";

import SignalLight from "./RadioComponents/SignalLight";
import Display from "./RadioComponents/Display";
import CountrySelector from "./RadioComponents/CountrySelector";
import Controls from "./RadioComponents/Controls";

export default function Radio() {
  return (
    <div
      className="w-[320px] h-[550px] mx-auto mt-14 relative
        border-2 border-neutral-700 rounded-lg"
    >
      <SignalLight />
      <Display />
      <CountrySelector />
      <Controls />
    </div>
  );
}
