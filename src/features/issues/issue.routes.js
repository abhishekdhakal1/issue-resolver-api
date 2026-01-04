const express = require("express");
const router = express.Router();
const { createIssue, filterIssueByCategory, showAllIssue } = require("./issue.controller");
const { protect } = require("../auth/middleware");

router.route("/").post(protect, createIssue).get(protect, showAllIssue);
router.route("/:category").get(protect, filterIssueByCategory);

module.exports = router;
