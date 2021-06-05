import React, { useEffect, useState } from "react";
import { StyledWrapper, StyledControls } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {
  getProgressPercent,
  hasChangesFound,
  loadSpotifyPlayer,
} from "./utils";
import { initPlayer, playerError } from "../../actions/player";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import Artwork from "./artwork";
import Controls from "./controls";
import Trackbar from "./trackbar";
import playerService from "services/playerService";

const Player = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const [playerState, setPlayerState] = useState({});

  let player;

  const { isLoading, data } = useQuery(
    "getPlayState",
    async () => await playerService.get(),
    { refetchInterval: 1000 }
  );

  const init = async () => {
    if (!window.onSpotifyWebPlaybackSDKReady) {
      window.onSpotifyWebPlaybackSDKReady = initializePlayer;
    } else {
      initializePlayer();
    }

    await loadSpotifyPlayer();
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (data && hasChangesFound(data, playerState)) {
      const {
        is_playing,
        shuffle_state,
        repeat_state,
        progress_ms,
        item: { duration_ms },
      } = data;
      setPlayerState({
        isPlaying: is_playing,
        isShuffle: shuffle_state,
        isRepeat: repeat_state,
        progressPercent: getProgressPercent(progress_ms, duration_ms),
      });
    }
  }, [data]);

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
      console.log("state changed", state);
    });

    // Ready
    player.addListener("ready", ({ device_id }) => {
      dispatch(initPlayer(device_id));
    });

    // Not Ready
    player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
    });

    // Connect to the player!
    player.connect();
  };

  if (isLoading) return <Spinner />;

  return (
    <StyledWrapper>
      <Trackbar
        progress={playerState?.progressPercent}
        size="md"
        totalDuration={data?.item?.duration_ms}
      />
      <StyledControls>
        <Artwork data={data} />
        <Controls playerState={playerState} />
        <div>Volume</div>
      </StyledControls>
    </StyledWrapper>
  );
};

export default Player;
