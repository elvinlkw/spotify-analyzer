import React, { useEffect, useState } from "react";
import { StyledControlsWrapper } from "./styles";
import API from "../../../api/axiosInstance";

const Controls = ({ data, deviceId }) => {
  // const [tracks, setTracks] = useState(null);
  const [play, setPlay] = useState(false);
  // const [trackLoaded, setTrackLoaded] = useState(false);

  // useEffect(() => {
  //   setTracks(data.tracks.map((t) => t.uri));
  //   // eslint-disable-next-line
  // }, []);

  // const onPlay = async () => {
  //   const body = {
  //     device_id: deviceId,
  //   };

  //   if (!trackLoaded) {
  //     body.uris = tracks;
  //     setTrackLoaded(true);
  //   }
  //   try {
  //     setPlay(true);
  //     await API.put("/api/player/play", body);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const onPause = async () => {
  //   console.log("pause");
  //   try {
  //     setPlay(false);
  //     await API.put("/api/player/pause", {
  //       device_id: deviceId,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handlePlay = () => {
    // switch (play) {
    //   case true:
    //     return onPause();
    //   case false:
    //     return onPlay();
    //   default:
    //     return;
    // }
  };

  return (
    <StyledControlsWrapper>
      <i className="fas fa-step-backward controls-secondary" />
      <i
        id="web-player-icon-play"
        onClick={handlePlay}
        className={`fas fa-${play ? "pause" : "play"}-circle`}
      />
      <i className="fas fa-step-forward controls-secondary" />
    </StyledControlsWrapper>
  );
};

export default Controls;
