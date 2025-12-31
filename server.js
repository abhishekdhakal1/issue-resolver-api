require('dotenv').config();
const express = require('express');
const connectDB = require('./src/shared/db');
const { issueRoutes } = require('./src/features');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/v1/issues', issueRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));