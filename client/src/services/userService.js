import API from "api/axiosInstance";

class UserService {
  async getMyTop(type, time_range = "medium_term", limit = 100, offset = 0) {
    const config = {
      params: {
        time_range,
        limit,
        offset,
      },
    };
    try {
      const { data } = await API.get(`/api/me/top/${type}`, config);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new UserService();
