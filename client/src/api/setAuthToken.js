import API from "./axiosInstance";

const setAuthToken = (token) => {
  if (token) {
    API.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
