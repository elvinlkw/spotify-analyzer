const express = require("express");
const API = require("../../api");
const axios = require("axios");
const router = express.Router();

// @route   - GET /api/artists/:id
// @desc    - Get catalog for a single artist
// @access  - Private
router.get("/:id", (req, res) => {
  const id = req.query.id;

  try {
  } catch (error) {}
});

// @route   - GET /api/artists/:id/top-tracks
// @desc    - Get catalog for a single artist's top tracks
// @access  - Private
router.get("/:id/top-tracks/", async (req, res) => {
  const id = req.params.id;
  const market = req.query.market;

  const config = {
    method: "get",
    url: `artists/${id}/top-tracks`,
    params: {
      market,
    },
    headers: {
      Authorization: req.headers.authorization,
    },
  };
  // 7lZauDnRoAC3kmaYae2opv
  try {
    const { data, status } = await API(config);

    if (status !== 200) {
      return res
        .status(400)
        .json({ msg: "You are not able to view this information" });
    }

    return res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
