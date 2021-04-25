import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadSpotifyPlayer } from "./utils";

const Player = () => {
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
    });
    player.addListener("authentication_error", ({ message }) => {
      console.error(message);
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
    });

    // Not Ready
    player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
    });

    // Connect to the player!
    player.connect();
  };

  return (
    <div>
      <h3>Player</h3>
    </div>
  );
};

export default Player;
