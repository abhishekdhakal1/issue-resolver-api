require('dotenv').config();
const express = require("express");
const connectDB = require("./src/shared/db");
const PORT = process.env.PORT || 3000;

const app = express();
connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello server testing");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
