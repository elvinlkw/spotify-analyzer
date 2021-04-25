const express = require("express");
const router = express.Router();
const axios = require("axios");
const moment = require("moment");
require("dotenv").config();
const qs = require("qs");

// @route   - POST /api/auth
// @desc    - Exchanges Authorization Code for an access token
// @access  - Public
router.post("/", async (req, res) => {
  const { code } = req.body;

  let postData = qs.stringify({
    code,
    grant_type: "authorization_code",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    redirect_uri: process.env.LOCAL_REDIRECT_URI,
  });

  const config = {
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: postData,
  };

  try {
    const { data, status } = await axios(config);

    if (status !== 200) {
      return res.status(400).json({ msg: "Invalid Code Provided" });
    }

    const expires_at = moment().add(data.expires_in, "seconds").unix();

    let resData = {
      access_token: data.access_token,
      expires_in: data.expires_in,
      expires_at: expires_at,
      token_type: data.token_type,
      refresh_token: data.refresh_token,
    };
    return res.json(resData);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: {
        error: error.response.data.error,
        msg: error.response.data.error_description,
      },
    });
  }
});

// @route - GET /api/auth
// @desc - Get user's profile
// @access - private
router.get("/", async (req, res) => {
  const config = {
    method: "get",
    url: "https://api.spotify.com/v1/me",
    headers: {
      Authorization: req.headers.authorization,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const { data } = await axios(config);
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ msg: "You are not authorized to view this" });
  }
});

module.exports = router;
