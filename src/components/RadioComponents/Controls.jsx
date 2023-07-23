import React from "react";
import { useDispatch, useSelector } from "react-redux";

import previousLogo from "../../assets/controls/previous.svg";
import playLogo from "../../assets/controls/play.svg";
import stopLogo from "../../assets/controls/stop.svg";
import nextLogo from "../../assets/controls/next.svg";
import {
  playStation,
  stopStation,
  nextStation,
  previousStation,
} from "../../features/radioStationsSlice";

export default function Controls() {
  const radioStationsData = useSelector((state) => state.radioStations);
  const { loading, error, selectedStation } = radioStationsData;
  const dispatch = useDispatch();

  const nextBtnHandler = () => {
    dispatch(nextStation());
  };
  const previousBtnHandler = () => {
    dispatch(previousStation());
  };
  const playBtnHandler = () => {
    dispatch(playStation());
  };
  const stopBtnHandler = () => {
    dispatch(stopStation());
  };

  return (
    <>
      {selectedStation && (
        <audio src={selectedStation.url_resolved} autoPlay>
          You're browser is Outdated . Please Update The Browser
        </audio>
      )}
      <div className="flex justify-around bg-neutral-800 rounded-b-lg h-[17%] ">
        <img
          src={previousLogo}
          onClick={previousBtnHandler}
          className="w-[80px] p-4 hover:cursor-pointer"
          alt=""
        />
        {/*  */}
        {selectedStation ? (
          <img
            src={stopLogo}
            onClick={stopBtnHandler}
            className="w-[80px] p-4 hover:cursor-pointer transition-all"
            alt=""
          />
        ) : (
          <img
            src={playLogo}
            onClick={playBtnHandler}
            className="w-[80px] p-4 hover:cursor-pointer transition-all"
            alt=""
          />
        )}
        {/*  */}
        <img
          src={nextLogo}
          onClick={nextBtnHandler}
          className="w-[80px] p-4 hover:cursor-pointer"
          alt=""
        />
      </div>
    </>
  );
}
