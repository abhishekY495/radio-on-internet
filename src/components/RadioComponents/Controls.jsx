import React from "react";
import { useDispatch, useSelector } from "react-redux";

import previousLogo from "../../assets/controls/previous.svg";
import playLogo from "../../assets/controls/play.svg";
import stopLogo from "../../assets/controls/stop.svg";
import nextLogo from "../../assets/controls/next.svg";
import {
  nextStation,
  previousStation,
  removeSelectedStation,
  setIsReadyToFalse,
  setIsMuteToTrue,
  setIsMuteToFalse,
} from "../../features/radioStationsSlice";

export default function Controls() {
  const radioStationsData = useSelector((state) => state.radioStations);
  const { selectedStation, isMute } = radioStationsData;

  const dispatch = useDispatch();

  const nextBtnHandler = () => {
    dispatch(setIsReadyToFalse());
    dispatch(removeSelectedStation());
    dispatch(nextStation());
  };
  const previousBtnHandler = () => {
    dispatch(setIsReadyToFalse());
    dispatch(removeSelectedStation());
    dispatch(previousStation());
  };
  const playBtnHandler = () => {
    dispatch(setIsMuteToFalse());
  };
  const stopBtnHandler = () => {
    dispatch(setIsMuteToTrue());
  };

  return (
    <div className="flex justify-around items-center bg-neutral-800 rounded-b-lg py-3">
      <img
        src={previousLogo}
        onClick={selectedStation && previousBtnHandler}
        className={`${
          selectedStation ? "opacity-100 hover:opacity-90" : "opacity-60"
        } w-[60px] p-[15px] mx-4 mt-1 hover:cursor-pointer rounded-full border-b-[5px] border-blue-900 active:border-b-0 bg-black/70 transition-all`}
        alt="previous"
      />
      {/*  */}
      <img
        src={isMute ? playLogo : stopLogo}
        alt={isMute ? "play" : "stop"}
        onClick={
          isMute
            ? selectedStation && playBtnHandler
            : selectedStation && stopBtnHandler
        }
        className={`${
          selectedStation ? "opacity-100 hover:opacity-80" : "opacity-60"
        } w-[60px] p-[15px] mx-4 mt-1 hover:cursor-pointer rounded-full border-b-[5px] border-blue-900 active:border-b-0 bg-black/70 transition-all`}
      />
      {/*  */}
      <img
        src={nextLogo}
        onClick={selectedStation && nextBtnHandler}
        className={`${
          selectedStation ? "opacity-100 hover:opacity-90" : "opacity-60"
        } w-[60px] p-[15px] mx-4 mt-1 hover:cursor-pointer rounded-full border-b-[5px] border-blue-900 active:border-b-0 bg-black/70 transition-all`}
        alt="next"
      />
    </div>
  );
}
