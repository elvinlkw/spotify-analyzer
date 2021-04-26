const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const authRoute = require("./routes/auth/auth");
const artistsRoute = require("./routes/artists");
const playerRoute = require("./routes/player");

app.use("/api/auth", authRoute);
app.use("/api/artists", artistsRoute);
app.use("/api/player", playerRoute);

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
