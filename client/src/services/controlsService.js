import API from "../api/axiosInstance";

class ControlsService {
  async play() {
    try {
      await API.put("/api/player/play");
    } catch (err) {
      console.log(err);
    }
  }

  async pause() {
    try {
      await API.put("/api/player/pause");
    } catch (err) {
      console.log(err);
    }
  }

  async next() {
    try {
      await API.post("/api/player/next");
    } catch (err) {
      console.log(err);
    }
  }

  async prev() {
    try {
      await API.post("/api/player/previous");
    } catch (err) {
      console.log(err);
    }
  }
}

export default new ControlsService();
