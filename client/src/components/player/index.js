import React, { useEffect } from "react";
import { StyledWrapper, StyledControls } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { loadSpotifyPlayer } from "./utils";
import { initPlayer, playerError } from "../../actions/player";
import Artwork from "./artwork";
import Controls from "./controls";

const Player = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  let player;

  const init = async () => {
    if (!window.onSpotifyWebPlaybackSDKReady) {
      window.onSpotifyWebPlaybackSDKReady = initializePlayer;
    } else {
      initializePlayer();
    }

    await loadSpotifyPlayer();
  };

  // const fetchData = async () => {
  //   const { data } = await API.get(
  //     "/api/artists/45eNHdiiabvmbp4erw26rg/top-tracks",
  //     {
  //       params: {
  //         market: "CA",
  //       },
  //     }
  //   );
  //   setData(data);
  //   setLoading(false);
  // };

  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  const initializePlayer = () => {
    player = new window.Spotify.Player({
      name: "Web Player",
      getOAuthToken: (cb) => {
        cb(token);
      },
    });

    // Error handling
    player.addListener("initialization_error", ({ message }) => {
      console.error(message);
      dispatch(playerError());
    });
    player.addListener("authentication_error", ({ message }) => {
      console.error(message);
      dispatch(playerError());
    });
    player.addListener("account_error", ({ message }) => {
      console.error(message);
    });
    player.addListener("playback_error", ({ message }) => {
      console.error(message);
    });

    // Playback status updates
    player.addListener("player_state_changed", (state) => {
      console.log(state);
    });

    // Ready
    player.addListener("ready", ({ device_id }) => {
      console.log("Ready with Device ID", device_id);
      dispatch(initPlayer(device_id));
    });

    // Not Ready
    player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
    });

    // Connect to the player!
    player.connect();
  };

  return (
    <StyledWrapper>
      <span>trackbar</span>
      <StyledControls>
        <Artwork />
        <Controls />
        <div>Volume</div>
      </StyledControls>
    </StyledWrapper>
  );
};

export default Player;
