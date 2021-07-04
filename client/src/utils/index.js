export const isEmptyObject = obj => {
  if (obj) {
    return Object.keys(obj).length === 0;
  }
  return true; // object is undefined
};

export const isCurrentTrackPlaying = (track, current, isPlaying) => {
  return isPlaying && track.id === current?.id;
};

export const isCurrentTrackLoaded = (track, current) => {
  return track.id === current?.id;
};
