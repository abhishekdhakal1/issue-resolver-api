require("dotenv").config();
const express = require("express");
const connectDB = require("./src/shared/db");

const { issueRoutes } = require("./src/features/index");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use("/api/v1/issues", issueRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
