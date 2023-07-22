import React from "react";

export default function SignalLight() {
  return (
    <div
      className="h-6 w-6 bg-red-500
        absolute -top-[24px] left-8
        border border-red-600
        shadow-red-500 shadow-[0px_10px_50px_20px]
        rounded-t-full
        hover:cursor-pointer hover:animate-none"
    ></div>
  );
}
