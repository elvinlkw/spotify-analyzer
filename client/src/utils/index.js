import controlsService from 'services/controlsService';

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

export const playSong = (track, current, isPlaying, deviceId) => {
  if (isCurrentTrackLoaded(track, current)) {
    if (isPlaying) {
      return controlsService.pause();
    }
    // resume track
    return controlsService.play();
  }

  controlsService.play([track.uri], deviceId);
};
