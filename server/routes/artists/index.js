const express = require("express");
const API = require("../../api");
const { StatusCodes } = require("http-status-codes");
const router = express.Router();

// @route   - GET /api/artists
// @desc    - Get catalog for a single artist
// @access  - Private
router.get("/", async (req, res) => {
  let { ids } = req.query;

  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
    params: {
      ids,
    },
  };

  if (!ids) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "You need to provide 1 or more artists id" });
  }

  try {
    const { data, status } = await API.get(`artists`, config);
    return res.json(data);
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Internal Server Error");
  }
});

// @route   - GET /api/artists/:id
// @desc    - Get catalog for a single artist
// @access  - Private
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
  };

  try {
    const { data, status } = await API.get(`artists/${id}`, config);
    if (status !== StatusCodes.OK) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Artist Not Found" });
    }
    return res.json(data);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
  }
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

  try {
    const { data, status } = await API(config);

    if (status !== StatusCodes.OK) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "You are not able to view this information" });
    }

    return res.json(data);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
});

// @route   - GET /api/artists/:id/albums
// @desc    - Get an Artist's Albums
// @access  - Private
router.get("/:id/albums", async (req, res) => {
  const id = req.params.id;

  const { include_groups, market, limit, offset } = req.query;

  const config = {
    params: {
      include_groups,
      market,
      limit,
      offset,
    },
    headers: {
      Authorization: req.headers.authorization,
    },
  };

  try {
    const { data, status } = await API.get(`artists/${id}/albums`, config);
    if (status !== StatusCodes.OK) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Artist Not Found" });
    }
    return res.json(data);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
  }
});

// @route   - GET /api/artists/:id/related-artists
// @desc    - Get an Artist's Related Artists
// @access  - Private
router.get("/:id/related-artists", async (req, res) => {
  const id = req.params.id;

  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
  };

  try {
    const { data, status } = await API.get(
      `artists/${id}/related-artists`,
      config
    );
    if (status !== StatusCodes.OK) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Artist Not Found" });
    }
    return res.json(data);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
  }
});

module.exports = router;
