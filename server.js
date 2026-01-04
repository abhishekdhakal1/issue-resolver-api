require("dotenv").config();
const express = require("express");
const connectDB = require("./src/shared/db");
const { Routes } = require("./src/features");
const cors = require('cors');


const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/issues/", Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
