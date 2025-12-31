const Issue = require("./issue.model");

exports.createIssue = async (req, res) => {
  try {
    const issue = await Issue.create({ ...req.body, student: req.user.id });
    res.status(201).json({ success: true, data: issue });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.resolveIssue = async (req, res) => {
  try {
    const issue = await Issue.findByIdAndUpdate(
      req.params.id,
      {
        status: "resolved",
        adminComment: req.body.comment,
        resolvedAt: Date.now(),
      },
      { new: true }
    );
    if (!issue) return res.status(404).json({ message: "Not Found" });
    res.status(200).json({ success: true, data: issue });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
