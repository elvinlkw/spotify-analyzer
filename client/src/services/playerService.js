import API from "api/axiosInstance";

class playerService {
  async get() {
    try {
      const { data } = await API.get("/api/player");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new playerService();
