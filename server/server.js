const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Routes
const authRoute = require("./routes/auth/auth");
const artistsRoute = require("./routes/artists");
const playerRoute = require("./routes/player");
const tracksRoute = require("./routes/tracks");
const userRoute = require("./routes/user");

app.use("/api/auth", authRoute);
app.use("/api/artists", artistsRoute);
app.use("/api/tracks", tracksRoute);
app.use("/api/player", playerRoute);
app.use("/api/me", userRoute);

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
