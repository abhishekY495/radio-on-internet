import React, { useState } from "react";
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
} from "../../features/radioStationsSlice";

export default function Controls() {
  const radioStationsData = useSelector((state) => state.radioStations);
  const { selectedStation } = radioStationsData;
  const [mute, setMute] = useState(false);
  const dispatch = useDispatch();

  const nextBtnHandler = () => {
    dispatch(removeSelectedStation());
    dispatch(nextStation());
  };
  const previousBtnHandler = () => {
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
        />
      )}
      <div className="flex justify-around items-center bg-neutral-800 rounded-b-lg h-[17%]">
        <img
          src={previousLogo}
          onClick={previousBtnHandler}
          className="w-[80px] p-4 mx-4 mt-1 hover:cursor-pointer hover:opacity-90 rounded-full border-b-[5px] border-black active:border-b-0 bg-black/30 transition-all"
          alt="previous"
        />
        {/*  */}
        {mute ? (
          <img
            src={playLogo}
            onClick={playBtnHandler}
            className="w-[80px] p-4 mx-4 mt-1 hover:cursor-pointer hover:opacity-90 rounded-full border-b-[5px] border-black active:border-b-0 bg-black/30 transition-all"
            alt="play"
          />
        ) : (
          <img
            src={stopLogo}
            onClick={stopBtnHandler}
            className="w-[80px] p-4 mx-4 mt-1 hover:cursor-pointer hover:opacity-90 rounded-full border-b-[5px] border-black active:border-b-0 bg-black/30 transition-all"
            alt="stop"
          />
        )}
        {/*  */}
        <img
          src={nextLogo}
          onClick={nextBtnHandler}
          className="w-[80px] p-4 mx-4 mt-1 hover:cursor-pointer hover:opacity-90 rounded-full border-b-[5px] border-black active:border-b-0 bg-black/30 transition-all"
          alt="next"
        />
      </div>
    </>
  );
}
