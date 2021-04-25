const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const authRoute = require('./routes/auth/auth');

app.use('/api/auth', authRoute)

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));