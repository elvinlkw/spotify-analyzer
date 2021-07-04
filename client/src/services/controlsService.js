import API from '../api/axiosInstance';

class ControlsService {
  async play(uris, deviceId) {
    try {
      await API.put('/api/player/play', {
        uris,
        deviceId,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async pause() {
    try {
      await API.put('/api/player/pause');
    } catch (err) {
      console.log(err);
    }
  }

  async next() {
    try {
      await API.post('/api/player/next');
    } catch (err) {
      console.log(err);
    }
  }

  async prev() {
    try {
      await API.post('/api/player/previous');
    } catch (err) {
      console.log(err);
    }
  }

  async shuffle(newState) {
    try {
      await API.put('/api/player/shuffle', { state: newState });
    } catch (err) {
      console.log(err);
    }
  }

  async seek(position_ms) {
    try {
      await API.put('/api/player/seek', { position_ms });
    } catch (err) {
      console.log(err);
    }
  }

  async volume(volume_percent) {
    try {
      await API.put('/api/player/volume', { volume_percent });
    } catch (err) {
      console.log(err);
    }
  }
}

export default new ControlsService();
