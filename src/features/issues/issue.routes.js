const express = require("express");
const router = express.Router();
const { createIssue, resolveIssue } = require("./issue.controller");
const { protect, authorize } = require("../auth/middleware");

router.route("").post(protect, authorize("student"), createIssue);
router.route("/:id/resolve").patch(protect, authorize("admin"), resolveIssue);

module.exports = router;
