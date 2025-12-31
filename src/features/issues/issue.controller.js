const Issue = require("./issue.model");

exports.createIssue = async (req, res) => {
  try {
    const issue = await Issue.create({
      ...req.body,
      student: req.user.id,
    });
    res.status(201).json({ success: true, data: issue });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.resolveIssue = async (req, res) => {
  try {
    let issue = await Issue.findById(req.params.id);

    if (!issue) return res.status(404).json({ message: "Issue not found" });
    issue = await Issue.findByIdAndUpdate(
      req.params.id,
      {
        status: "resolved",
        adminComment: req.body.comment,
        resolvedAt: Date.now(),
      },
      { new: true }
    );
    res.status(200).json({ success: true, data: issue });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
