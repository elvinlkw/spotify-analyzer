const express = require("express");
const router = express.Router();
const API = require("../../api");
const LOG = require("npmlog");
const { StatusCodes } = require("http-status-codes");

router.get(`/top/:type`, async (req, res) => {
  const validTypes = ["artists", "tracks"];
  const { type } = req.params;
  const { time_range, limit, offset } = req.query;

  LOG.info(JSON.stringify(req.query));

  if (!req.headers.authorization) {
    return res
      .status(StatusCodes.FORBIDDEN)
      .json({ msg: "You need a valid token" });
  }

  if (!type || !validTypes.includes(type)) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "You need to specify a valid type" });
  }

  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
    params: {
      time_range,
      limit,
      offset,
    },
  };

  try {
    LOG.info(`Initialize User Top ${type} fetch`);
    const { data } = await API.get(`/me/top/${type}`, config);
    LOG.info(`Successfully retrieved user top ${type}`);
    return res.json(data);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
