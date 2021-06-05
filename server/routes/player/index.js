const express = require("express");
const { StatusCodes } = require("http-status-codes");
const API = require("../../api");
const router = express.Router();

// @route   - GET /api/player
// @desc    - Get information about the user’s current playback state
// @public  - Private
router.get("/", async (req, res) => {
  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
    params: {
      market: req.body.market,
    },
  };

  try {
    const { data } = await API.get("/me/player", config);
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

// @route   - GET /api/player/devices
// @desc    - Get information about a user’s available devices.
// @public  - Private
router.get("/devices", async (req, res) => {
  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
  };

  try {
    await API.get("/me/player/devices", config);
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    console.log(error);
  }
});

// @route   - PUT /api/player/play
// @desc    - Start/resume playback on the user's active device
// @public  - Private
router.put("/play", async (req, res) => {
  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
    params: {
      device_id: req.body.device_id,
    },
  };

  const body = {
    uris: req.body.uris,
  };

  try {
    await API.put("/me/player/play", body, config);
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    // @todo - Add proper error checking
    console.log(error.response);
  }
});

// @route   - PUT /api/player/pause
// @desc    - Pause playback on the user's active device
// @public  - Private
router.put("/pause", async (req, res) => {
  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
    params: {
      device_id: req.body.device_id,
    },
  };

  try {
    await API.put("/me/player/pause", null, config);
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    // @todo - Add proper error checking
    console.log(error);
  }
});

// @route   - POST /api/player/skip
// @desc    - Skips to next track in the user’s queue.
// @public  - Private
router.post("/next", async (req, res) => {
  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
    params: {
      device_id: req.body.device_id,
    },
  };

  try {
    await API.post("/me/player/next", null, config);
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    // @todo - Add proper error checking
    console.log(error);
  }
});

// @route   - POST /api/player/skip
// @desc    - Skips to previous track in the user’s queue.
// @public  - Private
router.post("/previous", async (req, res) => {
  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
    params: {
      device_id: req.body.device_id,
    },
  };

  try {
    await API.post("/me/player/previous", null, config);
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    // @todo - Add proper error checking
    console.log(error);
  }
});

// @route   - PUT /api/player/seek
// @desc    - Skips to previous track in the user’s queue.
// @public  - Private
router.put("/seek", async (req, res) => {
  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
    params: {
      device_id: req.body.device_id,
      position_ms: req.body.position_ms,
    },
  };

  try {
    await API.put("/me/player/seek", null, config);
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    // @todo - Add proper error checking
    console.log(error);
  }
});

// @route   - POST /api/player/repeat
// @desc    - Set the repeat mode for the user’s playback.
// @public  - Private
router.put("/repeat", async (req, res) => {
  // track, context or off.
  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
    params: {
      device_id: req.body.device_id,
      state: req.body.state,
    },
  };

  try {
    await API.put("/me/player/repeat", null, config);
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    // @todo - Add proper error checking
    console.log(error);
  }
});

// @route   - POST /api/player/volume
// @desc    - Set the volume for the user’s current playback device.
// @public  - Private
router.put("/volume", async (req, res) => {
  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
    params: {
      device_id: req.body.device_id,
      volume_percent: req.body.volume_percent,
    },
  };

  try {
    await API.put("/me/player/volume", null, config);
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    // @todo - Add proper error checking
    console.log(error);
  }
});

// @route   - POST /api/player/shuffle
// @desc    - Toggle shuffle on or off for user’s playback.
// @public  - Private
router.put("/shuffle", async (req, res) => {
  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
    params: {
      device_id: req.body.device_id,
      state: req.body.state,
    },
  };

  try {
    await API.put("/me/player/shuffle", null, config);
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    // @todo - Add proper error checking
    console.log(error);
  }
});

module.exports = router;
