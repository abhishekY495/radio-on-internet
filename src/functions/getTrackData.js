import { RADIOLISE_WEB_SOCKET } from "../utils/api_urls";

export const getTrackData = (
  selectedStation,
  dispatch,
  currentPlayingTrackName,
  setCurrentPlayingTrackName
) => {
  const subscription = RADIOLISE_WEB_SOCKET.subscribe(({ title, error }) => {
    if (!error) {
      if (
        title.length === 0 ||
        title.toLowerCase().includes("now playing info goes here") ||
        title.toLowerCase().includes("unknown") ||
        title === currentPlayingTrackName
      ) {
        dispatch(setCurrentPlayingTrackName("..."));
      } else {
        dispatch(setCurrentPlayingTrackName(title));
      }
    } else {
      dispatch(setCurrentPlayingTrackName("..."));
      console.log(error);
    }
  });

  RADIOLISE_WEB_SOCKET.trackStream(selectedStation?.url_resolved);

  return () => subscription.unsubscribe();
};
