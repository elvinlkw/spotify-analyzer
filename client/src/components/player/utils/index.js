export const loadSpotifyPlayer = () => {
  return new Promise((resolve, reject) => {
    const scriptTag = document.getElementById("spotify-player");

    if (!scriptTag) {
      const script = document.createElement("script");

      script.id = "spotify-player";
      script.type = "text/javascript";
      script.async = false;
      script.defer = true;
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.onload = () => resolve();
      script.onerror = (error) =>
        reject(new Error(`loadScript: ${error.message}`));

      document.head.appendChild(script);
    } else {
      resolve();
    }
  });
};

export const combineArtists = (artists) => {
  return artists.map((artist) => artist.name).join(", ");
};

export const hasChangesFound = (data, playerState) => {
  const hasChanges =
    data.is_playing !== playerState?.isPlaying ||
    data.repeat_state !== playerState?.isRepeat ||
    data.shuffle_state !== playerState?.isShuffle;
  return hasChanges;
};
