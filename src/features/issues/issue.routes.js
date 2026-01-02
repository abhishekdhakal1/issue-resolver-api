const express = require("express");
const router = express.Router();
const { createIssue, resolveIssue } = require("./issue.controller");
const { protect, authorize } = require("../auth/middleware");

router.route("/").post(protect, createIssue);
router.route("/:id/resolve").patch(protect, resolveIssue);

module.exports = router;
