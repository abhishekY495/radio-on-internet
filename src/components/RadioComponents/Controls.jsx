import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

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
  setIsPlayError,
} from "../../features/radioStationsSlice";

export default function Controls() {
  const radioStationsData = useSelector((state) => state.radioStations);
  const { selectedStation, isMute } = radioStationsData;

  const dispatch = useDispatch();

  const nextBtnHandler = () => {
    if (selectedStation) {
      dispatch(setIsPlayError(false));
      dispatch(setIsReadyToFalse());
      dispatch(removeSelectedStation());
      dispatch(nextStation());
    } else {
      toast("Select Country or Language");
    }
  };
  const previousBtnHandler = () => {
    if (selectedStation) {
      dispatch(setIsPlayError(false));
      dispatch(setIsReadyToFalse());
      dispatch(removeSelectedStation());
      dispatch(previousStation());
    } else {
      toast("Select Country or Language");
    }
  };
  const playBtnHandler = () => {
    if (selectedStation) {
      dispatch(setIsMuteToFalse());
    } else {
      toast("Select Country or Language");
    }
  };
  const stopBtnHandler = () => {
    if (selectedStation) {
      dispatch(setIsMuteToTrue());
    } else {
      toast("Select Country or Language");
    }
  };

  return (
    <div className="flex justify-around items-center bg-neutral-800 rounded-b-lg py-3">
      <img
        src={previousLogo}
        onClick={previousBtnHandler}
        className={`${
          selectedStation ? "opacity-100 hover:opacity-90" : "opacity-60"
        } w-[60px] p-[15px] mx-4 mt-1 hover:cursor-pointer rounded-full border-b-[5px] border-blue-900 active:border-b-0 bg-black/70 transition-all`}
        alt="previous"
      />
      {/*  */}
      <img
        src={isMute ? playLogo : stopLogo}
        alt={isMute ? "play" : "stop"}
        onClick={isMute ? playBtnHandler : stopBtnHandler}
        className={`${
          selectedStation ? "opacity-100 hover:opacity-80" : "opacity-60"
        } w-[60px] p-[15px] mx-4 mt-1 hover:cursor-pointer rounded-full border-b-[5px] border-blue-900 active:border-b-0 bg-black/70 transition-all`}
      />
      {/*  */}
      <img
        src={nextLogo}
        onClick={nextBtnHandler}
        className={`${
          selectedStation ? "opacity-100 hover:opacity-90" : "opacity-60"
        } w-[60px] p-[15px] mx-4 mt-1 hover:cursor-pointer rounded-full border-b-[5px] border-blue-900 active:border-b-0 bg-black/70 transition-all`}
        alt="next"
      />
    </div>
  );
}
