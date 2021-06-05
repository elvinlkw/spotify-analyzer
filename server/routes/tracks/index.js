const express = require("express");
const API = require("../../api");
const router = express.Router();

// @route   - GET /api/tracks/:id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
    params: {
      id,
      market: req.params.market,
    },
  };

  try {
    const { data } = await API.get(`/tracks/${id}`, config);
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
