import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import {
  setIsMute,
  setIsPlayError,
  setIsReady,
} from "../../features/radioStationsSlice";

export default function AudioPlayer() {
  const radioStationsData = useSelector((state) => state.radioStations);
  const { selectedStation, isMute } = radioStationsData;
  const dispatch = useDispatch();

  const onErrorHandler = () => {
    toast.error("Signal lost, Cannot play.");
    dispatch(setIsPlayError(true));
  };

  const onPlayHandler = () => {
    dispatch(setIsReady(true));
    dispatch(setIsMute(false));
  };

  return (
    <audio
      src={selectedStation?.url_resolved}
      id="audio-element"
      autoPlay
      muted={isMute ? true : false}
      onError={onErrorHandler}
      onPlay={onPlayHandler}
      crossOrigin="anonymous"
    ></audio>
  );
}
