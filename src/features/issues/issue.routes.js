const express = require("express");
const issueRoutes = express.Router();
const { createIssue, filterIssueByCategory, showAllIssue } = require("./issue.controller");
const { protect } = require("../auth/middleware");

issueRoutes.route("/").post(protect, createIssue).get(protect, showAllIssue);
issueRoutes.route("/:category").get(protect, filterIssueByCategory);

module.exports = issueRoutes;
