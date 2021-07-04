const volumeThresholdObj = {
  10: 'off',
  50: 'down',
  100: 'up',
};

export const loadSpotifyPlayer = () => {
  return new Promise((resolve, reject) => {
    const scriptTag = document.getElementById('spotify-player');

    if (!scriptTag) {
      const script = document.createElement('script');

      script.id = 'spotify-player';
      script.type = 'text/javascript';
      script.async = false;
      script.defer = true;
      script.src = 'https://sdk.scdn.co/spotify-player.js';
      script.onload = () => resolve();
      script.onerror = error =>
        reject(new Error(`loadScript: ${error.message}`));

      document.head.appendChild(script);
    } else {
      resolve();
    }
  });
};

export const combineArtists = artists => {
  return artists.map(artist => artist.name).join(', ');
};

export const hasChangesFound = (data, playerState) => {
  const hasChanges =
    data.is_playing !== playerState?.isPlaying ||
    data.repeat_state !== playerState?.isRepeat ||
    data.shuffle_state !== playerState?.isShuffle ||
    getProgressPercent(data.progress_ms, data.item.duration_ms) !==
      playerState?.progressPercent ||
    data.device.volume_percent !== playerState?.volume;
  return hasChanges;
};

export const hasTrackChanged = (item, currentTrack) => {
  return currentTrack?.id !== item.id;
};

export const getProgressPercent = (progress, duration) => {
  return (progress / duration) * 100;
};

export const getVolumeIcon = level => {
  for (let threshold in volumeThresholdObj) {
    if (level <= threshold) {
      return volumeThresholdObj[threshold];
    }
  }
};
