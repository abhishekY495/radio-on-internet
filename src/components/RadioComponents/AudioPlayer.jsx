import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import {
  nextStation,
  removeSelectedStation,
  setIsReadyToTrue,
} from "../../features/radioStationsSlice";

export default function AudioPlayer() {
  const radioStationsData = useSelector((state) => state.radioStations);
  const { selectedStation, isMute } = radioStationsData;
  const dispatch = useDispatch();

  const onErrorHandler = () => {
    toast.error("Signal lost, Playing next Station");
    dispatch(removeSelectedStation());
    dispatch(nextStation());
  };

  const onPlayHandler = () => {
    dispatch(setIsReadyToTrue());
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
