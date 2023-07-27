import React from "react";

import SignalLight from "./RadioComponents/SignalLight";
import Display from "./RadioComponents/Display";
import CountrySelector from "./RadioComponents/CountrySelector";
import Controls from "./RadioComponents/Controls";

export default function Radio() {
  return (
    <div
      className="w-[320px] h-[550px] mx-auto mt-14 relative
        border-[3px] border-neutral-800 rounded-lg"
    >
      <SignalLight />
      <Display />
      <CountrySelector />
      <Controls />
    </div>
  );
}
