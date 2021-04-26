const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: process.env.SPOTIFY_BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

module.exports = axiosInstance;
