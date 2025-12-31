const express = require("express");
const router = express.Router();
const { createIssue, resolveIssue } = require("./issue.controller");
const { protect, authorize } = require("../auth/middleware");

router.post("/", protect, authorize("student"), createIssue);
router.patch("/:id/resolve", protect, authorize("admin"), resolveIssue);

module.exports = router;
