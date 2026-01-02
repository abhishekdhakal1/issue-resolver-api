const Issue = require("./issue.model");

exports.createIssue = async (req, res) => {
  try {
    const issue = await Issue.create({ ...req.body });
    res.status(201).json({ success: true, data: issue });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.showIssue = async (req, res) => {
  try {
    const { _id } = req.params;
    const issue = await Issue.findById(_id).populate("student");

    if (!issue) {
      return res.status(404).json({ success: false, error: "Issue not found" });
    }

    res.status(200).json({
      success: true,
      data: issue,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server Error" });
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
