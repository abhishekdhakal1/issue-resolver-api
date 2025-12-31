const express = require("express");
const router = express.Router();
const { createIssue, resolveIssue } = require("./issue.controller");
const { protect, authorize } = require("../auth/middleware");

// Students only
router.post("/", protect, authorize("student"), createIssue);

// Admins only
router.patch("/:id/resolve", protect, authorize("admin"), resolveIssue);

module.exports = router;
