import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import ReactPlayer from "react-player";

import previousLogo from "../../assets/controls/previous.svg";
import playLogo from "../../assets/controls/play.svg";
import stopLogo from "../../assets/controls/stop.svg";
import nextLogo from "../../assets/controls/next.svg";
import {
  nextStation,
  previousStation,
  removeSelectedStation,
  setIsReadyToTrue,
  setIsReadyToFalse,
} from "../../features/radioStationsSlice";

export default function Controls() {
  const radioStationsData = useSelector((state) => state.radioStations);
  const { selectedStation } = radioStationsData;
  const [mute, setMute] = useState(false);
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
    setMute(false);
  };
  const stopBtnHandler = () => {
    setMute(true);
  };

  const errorOnPlay = () => {
    toast.error("Signal lost, Playing next Station");
    dispatch(removeSelectedStation());
    dispatch(nextStation());
  };

  const onReadyHandler = () => {
    dispatch(setIsReadyToTrue());
  };

  return (
    <>
      {selectedStation && (
        <ReactPlayer
          url={selectedStation.url_resolved}
          playing
          volume={mute ? 0 : 1}
          width={0}
          height={0}
          onError={errorOnPlay}
          onStart={onReadyHandler}
        />
      )}
      <div className="flex justify-around items-center bg-neutral-800 rounded-b-lg h-[17%]">
        <img
          src={previousLogo}
          onClick={selectedStation && previousBtnHandler}
          className={`${
            selectedStation ? "opacity-100 hover:opacity-90" : "opacity-60"
          } w-[80px] p-4 mx-4 mt-1 hover:cursor-pointer rounded-full border-b-[5px] border-black active:border-b-0 bg-black/30 transition-all`}
          alt="previous"
        />
        {/*  */}
        {mute ? (
          <img
            src={playLogo}
            onClick={selectedStation && playBtnHandler}
            className={`${
              selectedStation ? "opacity-100 hover:opacity-90" : "opacity-60"
            } w-[80px] p-4 mx-4 mt-1 hover:cursor-pointer rounded-full border-b-[5px] border-black active:border-b-0 bg-black/30 transition-all`}
            alt="play"
          />
        ) : (
          <img
            src={stopLogo}
            onClick={selectedStation && stopBtnHandler}
            className={`${
              selectedStation ? "opacity-100 hover:opacity-90" : "opacity-60"
            } w-[80px] p-4 mx-4 mt-1 hover:cursor-pointer rounded-full border-b-[5px] border-black active:border-b-0 bg-black/30 transition-all`}
            alt="stop"
          />
        )}
        {/*  */}
        <img
          src={nextLogo}
          onClick={selectedStation && nextBtnHandler}
          className={`${
            selectedStation ? "opacity-100 hover:opacity-90" : "opacity-60"
          } w-[80px] p-4 mx-4 mt-1 hover:cursor-pointer rounded-full border-b-[5px] border-black active:border-b-0 bg-black/30 transition-all`}
          alt="next"
        />
      </div>
    </>
  );
}
